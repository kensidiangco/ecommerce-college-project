import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/client'
import CheckoutLoginDropdown from '../../components/checkoutLoginDropdown'

export default function Cart() {
	const [session] = useSession()

	return(
		<>
			<Head>
				<title>Cart</title>
			</Head>
			<div className="flex justify-center py-4 md:py-10">
				<div className="flex flex-col md:flex-row justify-center gap-2 md:gap-5 xl:gap-10">
					<div className="grid gap-4 md:gap-px md:dark:bg-dark-card md:bg-gray-50 md:shadow-md xl:shadow-xl rounded-md md:rounded-xl p-2 md:p-4">
						<p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-50 transition delay-50">Your cart</p>
						<div className="px-2 py-4 md:p-5 flex flex-col md:flex-row items-center md:gap-4 md:bg-none dark:bg-dark-card bg-gray-50 rounded-xl shadow-md md:shadow-none">
							<Image src={"/fourth.png"} width={200} height={200} objectFit="contain" alt="Sample image"/>
							<div>
								<p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-50">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-50">1pcs</span></p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-50">Color: Wheat</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-50">Size: M</p>
								<p className="text-md text-blue-700 dark:text-blue-400 transition delay-50">₱1,899</p>
								<p className="text-sm md:py-3 text-yellow-700 dark:text-yellow-300 transition delay-50">Subtotal: ₱1,899</p>
								<div className="flex justify-center mt-2 md:float-right">
									<input type="submit" value="Remove" className="text-sm py-1 px-10 cursor-pointer rounded-lg text-gray-700 dark:text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover transition delay-50" />
								</div>
							</div>
						</div>

						<div className="px-2 py-4 md:p-5 flex flex-col md:flex-row items-center md:gap-4 md:bg-none dark:bg-dark-card bg-gray-50 rounded-xl shadow-md md:shadow-none">
							<Image src={"/first.jpeg"} width={200} height={200} objectFit="contain" alt="Sample image"/>
							<div>
								<p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-50">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-50">1pcs</span>
								</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-50">Color: Wheat</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-50">Size: M</p>
								<p className="text-md text-blue-700 dark:text-blue-400 transition delay-50">₱1,899</p>
								<p className="text-sm md:py-3 text-yellow-700 dark:text-yellow-300 transition delay-50">Subtotal: ₱1,899</p>
								<div className="flex justify-center mt-2 md:float-right">
									<input type="submit" value="Remove" className="text-sm py-1 px-10 cursor-pointer rounded-lg text-gray-700 dark:text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover transition delay-50" />
								</div>
							</div>
						</div>
						<div className="py-5 px-3 md:p-3 flex flex-col md:flex-row items-center md:bg-none dark:bg-dark-card bg-gray-50 rounded-xl shadow-md md:shadow-none justify-around space-y-4 md:space-y-0">
							<p className="text-2xl text-blue-700 dark:text-blue-400 transition delay-50">Total: ₱2,798</p>
							{!session && <CheckoutLoginDropdown />}
							{session &&
								<Link href="/dailylife/checkout" passHref>
									<p className="p-3 md:p-2 md:px-4 bg-blue-500 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover rounded-md hover:bg-blue-400 transition delay-50 cursor-pointer">Proceed to checkout</p>
								</Link>
							}
						</div>
					</div>
					<div className="mt-4 md:mt-px dark:bg-dark-card shadow-md xl:shadow-xl bg-gray-50 rounded-xl p-2 md:p-4">
						<p className="text-xl md:text-2xl font-semibold p-2 text-gray-700 dark:text-gray-50 transition delay-50">Recommendation</p>
						<div className="p-2 md:p-5 flex flex-row items-center gap-4">
							<Image src={"/first.jpeg"} width={80} height={80} objectFit="contain" alt="Sample image"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-50">Sample item 
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: Wheat</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: S,M,L</p>
								<p className="text-sm text-blue-700 dark:text-blue-400 transition delay-50">₱1,899</p>
							</div>
						</div>

						<div className="p-2 md:p-5 flex flex-row items-center gap-4">
							<Image src={"/second.jpeg"} width={80} height={80} objectFit="contain" alt="Sample image"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-50">Sample item 
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: White</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: S,M,L</p>
								<p className="text-sm text-blue-700 dark:text-blue-400 transition delay-50">₱1,899</p>
							</div>
						</div>

						<div className="p-2 md:p-5 flex flex-row items-center gap-4">
							<Image src={"/third.jpeg"} width={80} height={80} objectFit="contain" alt="Sample image"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-50">Sample item 
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: White, Black</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: S,M,L</p>
								<p className="text-sm text-blue-700 dark:text-blue-400 transition delay-50">₱1,899</p>
							</div>
						</div>

						<div className="p-2 md:p-5 flex flex-row items-center gap-4">
							<Image src={"/second.jpeg"} width={80} height={80} objectFit="contain" alt="Sample image"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-50">Sample item 
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: White</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: S,M,L</p>
								<p className="text-sm text-blue-700 dark:text-blue-400 transition delay-50">₱1,899</p>
							</div>
						</div>


						<div className="flex justify-center">
							<input type="submit" value="See more..." className="px-10 py-1 text-blue-700 dark:text-blue-400 dark:bg-dark-card bg-gray-50 cursor-pointer dark:hover:bg-button-hover focus:bg-gray-100 transition delay-50 rounded-md" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}