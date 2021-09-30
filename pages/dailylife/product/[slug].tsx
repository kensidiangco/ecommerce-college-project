import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectProducts } from '../../../slices/cartSlice'
import QuantityCount from '../../../components/quantityCount'
import axios from 'axios'
import NumberWithSpace from '../../../components/currency'
import Recommendation from '../../../components/recommendation'

export default function Product({ product }) {
    const dispatch = useDispatch()
	const { slug, 
		title, 
		product_image, 
		description, 
		category, 
		variations 
	} = product
	const products = useSelector(selectProducts)
    const [quantity, setQuantity] = useState(1)

	const [variationData, setVariationData] = useState({})
	const variationDataLength = Object.keys(variationData).length

	const [price, setPrice] = useState(0)
	const [priceRange, setPriceRange] = useState([])
	const range = priceRange.map(x => x);
	
	const [photo, setPhoto] = useState('')
	const [itemRecommended] = useState(products?.filter(prod => prod.category.name === category.name).length)
	
	const [added, setAdded] = useState(false)

	useEffect(() => {
		if(added){
			setTimeout(() => setAdded(false), 2000)
		}
	}, [added])

	useEffect(() => {
		setPhoto('')
	}, [product])

    useEffect(() => {
		let price_range_data = []
		
		product.variations.map(v => v.variant.map(d => {
			if(!!d.price){
				price_range_data.push(d.price)
			}
		}))
		setPriceRange(price_range_data)
	}, [product])

	const addItemToCart = () => {
		
		dispatch(addToCart({
			photo,
			category,
			title,
			quantity,
			price,
			variation: [variationData],
			slug
		}))

		setQuantity(1)
		setVariationData({})
		setAdded(true)
		
	}

	const handleVariation = (name, value) => {
		setVariationData(prevState=> ({
			...prevState,
			[name]:value,
		}))

		axios.get(`${process.env.BACKEND_API_BASE}/store/api/variant/${value}/`)
			.then(res => {
				setPrice(parseInt(res.data.price))
				setVariationData(prevState=> ({
					...prevState,
					[res.data.variation.name]: res.data.variant_name,
				}))
			})
			.catch(err => console.log(err))

		axios.get(`${process.env.BACKEND_API_BASE}/store/api/variant/parent/${value}/`)
			.then(res => {
				setPhoto(`${process.env.IMAGE_BASE}/${res.data.attachment}`)
			})
			.catch(err => console.log(err))
	}


    return (
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <div className="container mx-auto py-8 md:py-8 px-4 flex flex-col md:flex-row justify-center md:gap-4">
				<div className="flex flex-col justify-center items-center gap-3">
					<div className="flex flex-col md:flex-row md:p-4 rounded-md bg-white dark:bg-dark-card md:gap-4 shadow-md">
						<Image 
							src={photo ? photo : `${process.env.IMAGE_BASE}/${product.product_image[0].image}`}
							width={300}
							height={300}
							objectFit="contain"
							alt={product.title}
							className="rounded-md shadow-md"
						/>
						<div className="flex justify-center flex-col p-4">
							<p className="cursor-pointer">
								<Link href={`../category/${encodeURIComponent(category.slug)}`} passHref>
									<p className="text-sm text-gray-600 dark:text-gray-300 py-2"><small>Category:</small> {category.name}</p>
								</Link>
							</p>
							<p className="text-2xl font-semibold">{product.title}</p>
							<p className="text-yellow-600 text-xl text-center">

								{/* {product.variations[0].variant[0].parent_variant === null ? 
									NumberWithSpace(parseInt(product.variations[0].variant[0].price)) 
									: 
									NumberWithSpace(parseInt(product.variations[0].variant[0].mainVariant[0].price))
								} */}

								{price !== 0 && NumberWithSpace(price)}
								{price === 0 && priceRange !== [] && Math.max(...range) !== Math.min(...range) &&
									<>
										{NumberWithSpace(Math.min(...range))}
										&nbsp;~&nbsp;
										{NumberWithSpace(Math.max(...range))}
									</>
								}
								{Math.max(...range) === Math.min(...range) && price === 0.00 &&
									<>{NumberWithSpace(Math.min(...range))}</>
								}
								{quantity > 1 &&
									<small> * {quantity}pcs</small>
								}
							</p>
							<p className="">
								{quantity > 1 && price != 0 &&
									<small>
										Subtotal: <>{NumberWithSpace(price * quantity)} </>
									</small>
								}
							</p>

							<div className="flex gap-2 md:gap-4 py-6 justify-center">
								{variations.map((variation, idx) => (
									<select
										className="py-1 px-4 rounded cursor-pointer bg-gray-200 hover:bg-gray-100 dark:bg-dark-button dark:hover:bg-button-hover shadow-md dark:text-gray-50"
										key={idx}
										name={variation.variation_name}
										onChange={(e) => handleVariation(e.target.name, e.target.value)}
									>
										<option value=''>{variation.variation_name}</option>
										{variation.variant.map(	(data, idx) => (
											<option 
												key={idx} 
												id={data.id} 
												value={data.slug}
											>
												{data.variant_name}
											</option>

										))}
									</select>	
								))}
							</div>
							<QuantityCount setQuantity={setQuantity} quantity={quantity} />
							<div className="flex gap-2 py-4">
								{product.product_image.map((image, idx) => (
									<Image
										className="cursor-pointer rounded-md"
										src={`${process.env.IMAGE_BASE}/${image.image}`}
										width={100}
										height={100}
										alt={image.image}
										key={idx}
										onClick={() => setPhoto(`${process.env.IMAGE_BASE}/${image.image}`)}
									/> 
								))}
							</div>
							<div className="flex justify-center gap-4 py-2">
								<button className="text-gray-50 bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded dark:bg-dark-button dark:hover:bg-button-hover">Buy now</button>
								<button 
									className="disabled:opacity-50 text-gray-50 bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded dark:bg-dark-button dark:hover:bg-button-hover"
									onClick={addItemToCart} 
									disabled={added || variationDataLength < variations.length}>
										{added ? 'Added!' : 'Add to Cart'}
								</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2 p-6 w-full rounded-md bg-white shadow-md dark:bg-dark-card">
						<h2 className="text-xl font-semibold">Description:</h2>
						<div>
							<pre className="">{description}</pre>
						</div>
					</div>
				</div>

				{itemRecommended > 1 && <Recommendation product={product} products={products}/>}
            </div>
        </>
    )
}

export const getStaticPaths = async () => {
    const products = await fetch(`${process.env.BACKEND_API_BASE}/store/api/`).then(response => response.json())
    const paths = products.map(product => {
        return { 
            params: { slug: product.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    const product = await fetch(`${process.env.BACKEND_API_BASE}/store/api/product/${slug}/`).then(response => response.json())

    const res = await fetch(`${process.env.BACKEND_API_BASE}/store/api/`)
  	const products = await res.json()

    return {
        props: { product, products },
        revalidate: 10,
    }
}