import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/client'
import CheckoutLoginDropdown from '../../components/checkoutLoginDropdown'
import { useSelector } from "react-redux"
import { selectItems, selectProducts, selectTotal } from "../../slices/cartSlice"
import NumberWithSpace from '../../components/currency'
import CartItem from '../../components/cartItem'

export default function Cart() {
	const [session] = useSession()

    const products = useSelector(selectProducts)
    const items = useSelector(selectItems)
    const totalPrice = useSelector(selectTotal)

	return(
		<>
			<Head>
				<title>Cart</title>
			</Head>
			<div className="container mx-auto flex flex-col gap-4 py-4 md:py-10 px-5">
				<div className="flex flex-col md:flex-row justify-center gap-2 md:gap-5 xl:gap-10">
					{items.length < 1 && <p className="text-xl">Empty cart :(</p>}
					{items.length > 0 && <div className="grid gap-4 md:gap-px md:dark:bg-dark-card md:bg-gray-50 md:shadow-md  rounded-md md:rounded-xl p-2 md:p-4">
						<p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-50 transition delay-50">Your cart</p>
						{items.map((item, idx)=> (
							<CartItem key={idx} {...item}/>
						))}

						<div className="py-5 px-3 md:p-3 flex flex-col items-center md:bg-none dark:bg-dark-card bg-gray-50 rounded-xl shadow-md md:shadow-none justify-around space-y-4 md:space-y-0">
							<p className="text-2xl text-blue-700 dark:text-blue-400 transition delay-50">Total: {NumberWithSpace(totalPrice)}</p>
								{!session && <CheckoutLoginDropdown />}
								{session &&
									<Link href="/dailylife/checkout" passHref>
										<p className="p-3 md:p-2 md:px-4 bg-blue-500 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover rounded-md hover:bg-blue-400 transition delay-50 cursor-pointer">Proceed to checkout</p>
									</Link>
								}
						</div>
					</div>}
				</div>
				<div className="flex flex-col md:flex-row justify-center gap-2 md:gap-5 xl:gap-10">
					<div className="md:w-10/12 mt-4 md:mt-px dark:bg-dark-card shadow-md bg-gray-50 rounded-xl p-2 md:p-4">
						<p className="text-xl md:text-2xl font-semibold p-2 text-gray-700 dark:text-gray-50 transition delay-50">Recommendation</p>
						<div className="md:flex md:flex-wrap justify-center">
							
							{products?.map((product, idx) => (
								<div key={idx} className="p-2 md:p-5 flex flex-row items-center gap-2 md:gap-4 hover:bg-gray-200 dark:hover:bg-button-hover rounded-md transition delay-50">
									<Link href={`/dailylife/product/${product.slug}`} passHref>
										<Image src={`${process.env.IMAGE_BASE}/${product.product_image[0].image}`} width={130} height={130} objectFit="contain" alt={product.title} className="cursor-pointer rounded"/>
									</Link>
									
									<div className="flex flex-col justify-center gap-px">
										<p className="text-sm md:text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-50 break-words">{product.title}
										</p>
										<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50 flex gap-2">
											{product.variations[0]?.variant.map((vBody) => (
												<p>{vBody.variant_name}</p>
											))}
										</p>
										<p className="text-sm text-blue-700 dark:text-blue-400 transition delay-50">
										{product.variations[0].variant[0].parent_variant === null ? 
											NumberWithSpace(parseInt(product.variations[0].variant[0].price)) 
											:
											NumberWithSpace(parseInt(product.variations[0].variant[0].mainVariant[0]?.price))}	
										</p>
									</div>
								</div>
							))}

						</div>
						<Link href="/dailylife/foryou" passHref>
							<div className="flex justify-center">
								<p className="px-10 py-1 text-blue-700 dark:text-blue-400 dark:bg-dark-card bg-gray-50 cursor-pointer dark:hover:bg-button-hover focus:bg-gray-200 hover:bg-gray-200 transition delay-50 rounded-md">See more...</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

