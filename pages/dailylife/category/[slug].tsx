import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import NumberWithSpace from '../../../components/currency'

export default function Category({ products }) {
	const router = useRouter()
    const { slug } = router.query

	return(
		<>
			<Head>
				<title>{slug}</title>
			</Head>
            <div className="containter mx-auto py-6 px-4 md:py-6 md:px-20">
                {/* <p className="text-xl font-semibold ml-20">FOR {(slug as string).toUpperCase}</p>*/}
                <p className="text-xl font-semibold md:ml-20 pb-2 md:pb-none">{products.length > 0 && <>FOR YOU</>}</p>
                <p className="text-xl font-semibold md:ml-20 text-center">{products.length < 1 && <>No products to show.</>}</p>
                <div className="flex flex-wrap gap-4 md:gap-10 justify-center">
                    {products.map((product, idx) => (
                        <div key={idx} className="bg-white dark:bg-dark-card rounded-xl shadow-md flex flex-col justify-center gap-2">
                            <Image
                                key={idx}
                                onClick={() => router.push(`../product/${encodeURIComponent(product.slug)}`)}
                                src={`${process.env.IMAGE_BASE}/${product.product_image[0].image}`}
                                width={250}
                                height={250}
                                alt={product.title}
                                className="rounded-md cursor-pointer"
                                objectFit="contain"
                            />
                            <div className="flex flex-col gap-1 px-4 py-1">
                                <h2 className="text-xl break-words font-semibold">{product.title}</h2>
                                <p className="flex gap-2">
                                    {product.variations[0]?.variant.map((vBody,idx) => (
                                        <p key={idx}>{vBody.variant_name}</p>
                                    ))}
                                </p>
                                <p className="text-yellow-600 dark:text-yellow-400 text-md">
                                    {product.variations[0].variant[0].parent_variant === null ? 
                                        NumberWithSpace(parseInt(product.variations[0].variant[0].price)) 
                                        : 
                                        NumberWithSpace(parseInt(product.variations[0].variant[0].mainVariant[0].price))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await fetch(`${process.env.BACKEND_API_BASE}/store/api/categories`).then(response => response.json())

    const paths = categories.map(category => {
        return { 
            params: { slug: category.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params.slug
    const products = await fetch(`${process.env.BACKEND_API_BASE}/store/api/category/${slug}`).then(response => response.json())

    return {
        props: { products }
    }
}