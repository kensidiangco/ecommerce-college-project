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

			<div className="container mx-auto md:px-6 py-4 md:py-6 md:py-10 px-8 md:px-2">
				<div className={`flex justify-center md:space-x-4 ${items.length < 1 ? "items-center flex-col space-y-4" : "flex-col md:flex-row"}`}>
					<div className="md:flex-1 w-full">
						{items.length < 1 && 
							<div className="grid gap-4 gap-px dark:bg-dark-card bg-gray-50 shadow-md rounded-md p-10 text-center space-y-2">
								<p className="text-xl">Your cart is empty.</p>
								<Link href="/dailylife/foryou">
									<p className="bg-blue-600 text-gray-50 font-semibold dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-500 py-2 rounded-md cursor-pointer transition delay-50">Shop now.</p>
								</Link>
							</div>
						}
						{items.length > 0 && 
							<div className="grid gap-4 md:gap-px md:dark:bg-dark-card md:bg-gray-50 md:shadow-md rounded-md md:rounded-md p-4">
								<p className="text-xl md:text-2xl md:py-4 font-semibold text-gray-700 dark:text-gray-50 transition delay-50">Your cart</p>
								{items.map((item, idx)=> (
									<CartItem key={idx} {...item}/>
								))}

								<div className="py-5 px-3 md:p-3 flex flex-col items-center md:bg-none dark:bg-dark-card bg-gray-50 rounded-md shadow-md md:shadow-none justify-around space-y-4 md:space-y-0">
									<p className="text-2xl text-blue-700 dark:text-blue-400 transition delay-50">Total: {NumberWithSpace(totalPrice)}</p>
										{!session && <CheckoutLoginDropdown />}
										{session &&
											<Link href="/dailylife/checkout" passHref>
												<p className="p-3 md:p-2 md:px-4 bg-blue-500 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover rounded-md hover:bg-blue-400 transition delay-50 cursor-pointer">Proceed to checkout</p>
											</Link>
										}
								</div>
							</div>
						}
					</div>
					<div className={`dark:bg-dark-card shadow-md bg-gray-50 rounded-md md:p-4 md:px-10 ${items.length < 1 ? "md:hidden" : "" }`}>
						<p className="text-xl md:text-2xl font-semibold p-2 text-gray-700 dark:text-gray-50 transition delay-50">Recommendation</p>
						<div className="">
							
							{products?.map((product, idx) => (
								<div key={idx} className="p-2 flex flex-row items-center gap-2 md:gap-4 hover:bg-gray-200 dark:hover:bg-button-hover rounded-md transition delay-50">
									<Link href={`/dailylife/product/${product.slug}`} passHref>
										<Image src={`${process.env.IMAGE_BASE}/${product.product_image[0].image}`} width={90} height={90} alt={product.title} className="cursor-pointer rounded"/>
									</Link>
									
									<div className="flex flex-col justify-center gap-px flex-1">
										<p className="text-sm md:text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-50 break-words">{product.title}
										</p>
										<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50 flex gap-2">
											{product.variations[0]?.variant.map((vBody, idx) => (
												<p key={idx}>{vBody.variant_name}</p>
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

