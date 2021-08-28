import Head from 'next/head'
import Image from 'next/image'

export default function Cart() {
	return(
		<>
			<Head>
				<title>Cart</title>
			</Head>
			<div className="container py-10">
				<div className="flex flex-col xl:flex-row ml-px xl:ml-20 items-center justify-center gap-10">
					<div className="dark:bg-gray-800 bg-white shado-md xl:shadow-xl rounded-md md:rounded-xl p-2 md:py-5 md:px-3">
						<p className="text-xl md:text-2xl px-2 text-gray-700 dark:text-gray-50 transition delay-100">Cart item</p>
						<div className="p-2 md:p-5 flex flex-col md:flex-row items-center md:gap-4">
							<Image src={"/fourth.png"} width={200} height={200} objectFit="contain"/>
							<div>
								<p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">1pcs</span></p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Color: Wheat</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Size: M</p>
								<p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">1,899</p>
								<p className="text-sm py-3 text-yellow-700 dark:text-yellow-300 transition delay-100">Subtotal: 1,899</p>
								<input type="submit" value="Remove" className="text-sm py-1 px-3 cursor-pointer rounded-lg text-gray-700 dark:text-gray-50 dark:bg-gray-800 transition delay-100" />
							</div>
						</div>

						<div className="p-2 md:p-5 flex flex-col md:flex-row items-center md:gap-4">
							<Image src={"/first.jpeg"} width={200} height={200} objectFit="contain"/>
							<div>
								<p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">1pcs</span>
								</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Color: Wheat</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Size: M</p>
								<p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">1,899</p>
								<p className="text-sm py-3 text-yellow-700 dark:text-yellow-300 transition delay-100">Subtotal: 1,899</p>
								<input type="submit" value="Remove" className="text-sm py-1 px-3 cursor-pointer rounded-lg text-gray-700 dark:text-gray-50 dark:bg-gray-800 transition delay-100" />
							</div>
						</div>
						<div className="px-5 py-5 md:ml-20 flex flex-col md:flex-row items-center md:gap-4">
							<p className="text-2xl text-blue-700 dark:text-blue-400 transition delay-100">Total: 2,798</p>
							<input type="submit" value="Proceed to checkout" className="px-3 py-2 bg-blue-500 text-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-md hover:bg-indigo-400 transition delay-100 cursor-pointer" />
						</div>
					</div>
					<div className="dark:bg-gray-800 shadow-md xl:shadow-xl bg-white rounded-md xl:rounded-xl p-3 md:py-5 md:px-10">
						<p className="text-2xl px-2 text-gray-700 dark:text-gray-50 transition delay-100">Recommendation</p>
						<div className="p-2 md:p-5 flex flex-col md:flex-row items-center gap-4">
							<Image src={"/first.jpeg"} width={150} height={150} objectFit="contain"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">1pcs</span>
								</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Color: Wheat</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Size: S,M,L</p>
								<p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">1,899</p>
							</div>
						</div>

						<div className="p-2 md:p-5 flex flex-col md:flex-row items-center gap-4">
							<Image src={"/second.jpeg"} width={150} height={150} objectFit="contain"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">1pcs</span>
								</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Color: White</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Size: S,M,L</p>
								<p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">1,899</p>
							</div>
						</div>

						<div className="p-2 md:p-5 flex flex-col md:flex-row items-center gap-4">
							<Image src={"/third.jpeg"} width={150} height={150} objectFit="contain"/>
							<div className="flex flex-col justify-center gap-px">
								<p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">1pcs</span>
								</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Color: White, Black</p>
								<p className="text-md text-gray-700 dark:text-gray-50 transition delay-100">Size: S,M,L</p>
								<p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">1,899</p>
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