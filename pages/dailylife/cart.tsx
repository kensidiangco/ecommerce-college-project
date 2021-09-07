import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Cart() {
	return(
		<>
			<Head>
				<title>Cart</title>
			</Head>
			<div className="flex justify-center py-4 md:py-10">
				<div className="flex flex-col md:flex-row justify-center gap-2 md:gap-5 xl:gap-10">
					<div className="grid gap-4 md:gap-px md:dark:bg-gray-800 md:bg-white md:shadow-md xl:shadow-xl rounded-md md:rounded-xl p-2 md:p-4">
						<p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Your cart</p>
						<div className="px-2 py-4 md:p-5 flex flex-col md:flex-row items-center md:gap-4 md:bg-none dark:bg-gray-800 bg-white rounded-xl shadow-md md:shadow-none">
							<Image src={"/fourth.png"} width={200} height={200} objectFit="contain" alt="Sample image"/>
							<div>
								<p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">1pcs</span></p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Color: Wheat</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Size: M</p>
								<p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">₱1,899</p>
								<p className="text-sm md:py-3 text-yellow-700 dark:text-yellow-300 transition delay-100">Subtotal: ₱1,899</p>
								<div className="flex justify-center mt-2 md:float-right">
									<input type="submit" value="Remove" className="text-sm py-1 px-3 cursor-pointer rounded-lg text-gray-700 dark:text-gray-50 dark:bg-gray-800 transition delay-100" />
								</div>
							</div>
						</div>

						<div className="px-2 py-4 md:p-5 flex flex-col md:flex-row items-center md:gap-4 md:bg-none dark:bg-gray-800 bg-white rounded-xl shadow-md md:shadow-none">
							<Image src={"/first.jpeg"} width={200} height={200} objectFit="contain" alt="Sample image"/>
							<div>
								<p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">1pcs</span>
								</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Color: Wheat</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Size: M</p>
								<p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">₱1,899</p>
								<p className="text-sm md:py-3 text-yellow-700 dark:text-yellow-300 transition delay-100">Subtotal: ₱1,899</p>
								<div className="flex justify-center mt-2 md:float-right">
									<input type="submit" value="Remove" className="text-sm py-1 px-3 cursor-pointer rounded-lg text-gray-700 dark:text-gray-50 dark:bg-gray-800 transition delay-100" />
								</div>
							</div>
						</div>
						<div className="py-5 px-3 md:p-3 flex flex-col md:flex-row items-center md:bg-none dark:bg-gray-800 bg-white rounded-xl shadow-md md:shadow-none justify-around space-y-4 md:space-y-0">
							<p className="text-2xl text-blue-700 dark:text-blue-400 transition delay-100">Total: ₱2,798</p>
							<div className="p-3 bg-blue-500 text-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-md hover:bg-blue-400 transition delay-100 cursor-pointer">
								<Link href="/dailylife/checkout">Proceed to checkout</Link>
							</div>
						</div>
					</div>
					<div className="mt-4 md:mt-px dark:bg-gray-800 shadow-md xl:shadow-xl bg-white rounded-xl p-2 md:p-4">
						<p className="text-xl md:text-2xl font-semibold p-2 text-gray-700 dark:text-gray-50 transition delay-100">Recommendation</p>
						<div className="p-2 md:p-5 flex flex-row items-center gap-4">
							<Image src={"/first.jpeg"} width={80} height={80} objectFit="contain" alt="Sample image"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item 
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Color: Wheat</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Size: S,M,L</p>
								<p className="text-sm text-blue-700 dark:text-blue-400 transition delay-100">₱1,899</p>
							</div>
						</div>

						<div className="p-2 md:p-5 flex flex-row items-center gap-4">
							<Image src={"/second.jpeg"} width={80} height={80} objectFit="contain" alt="Sample image"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item 
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Color: White</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Size: S,M,L</p>
								<p className="text-sm text-blue-700 dark:text-blue-400 transition delay-100">₱1,899</p>
							</div>
						</div>

						<div className="p-2 md:p-5 flex flex-row items-center gap-4">
							<Image src={"/third.jpeg"} width={80} height={80} objectFit="contain" alt="Sample image"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item 
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Color: White, Black</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Size: S,M,L</p>
								<p className="text-sm text-blue-700 dark:text-blue-400 transition delay-100">₱1,899</p>
							</div>
						</div>

						<div className="p-2 md:p-5 flex flex-row items-center gap-4">
							<Image src={"/second.jpeg"} width={80} height={80} objectFit="contain" alt="Sample image"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item 
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Color: White</p>
								<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Size: S,M,L</p>
								<p className="text-sm text-blue-700 dark:text-blue-400 transition delay-100">₱1,899</p>
							</div>
						</div>


						<div className="flex justify-center">
							<input type="submit" value="See more..." className="px-3 py-2 text-blue-800 dark:text-blue-500 dark:bg-gray-800 bg-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition delay-100 rounded-md" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}