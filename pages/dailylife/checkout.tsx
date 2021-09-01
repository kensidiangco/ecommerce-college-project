import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Checkout() {
	const router = useRouter()

	const onSubmit = () => {
		router.push('/')
	}

	return (
		<>
			<Head>
				<title>Checkout</title>
			</Head>
			<div className="container mx-auto">
				<div className="flex flex-col-reverse md:flex-row justify-center p-4 md:px-5 md:py-10 md:gap-10 gap-5">
					<form onSubmit={onSubmit} className="flex flex-col gap-2 p-5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-50" autoComplete="off">
						<h2 className="text-xl">Information</h2>
						<input type="email" name="email" placeholder="Email" className="p-2 rounded-md" required/>

						<h2 className="mt-2 text-xl">Delivery address</h2>
						<input type="text" name="name" placeholder="Full name" className="p-2 rounded-md" required/>
						<input type="text" name="address1" placeholder="Present address" className="p-2 rounded-md" required/>
						<input type="text" name="brgy" placeholder="Baranggay" className="p-2 rounded-md" required/>
						<input type="text" name="zone" placeholder="Zone" className="p-2 rounded-md" required/>
						<input type="text" name="district" placeholder="District" className="p-2 rounded-md" required/>
						<input type="text" name="zip code" placeholder="Zip code" className="p-2 rounded-md" required/>

						<h2 className="mt-2 text-xl">Payment method</h2>
						<input type="text" name="Voucher" placeholder="Voucher code" className="p-2 rounded-md"/>
						<select name="delivery" className="p-2 rounded-md" required>
							<option value="cod">COD</option>
							<option value="gcash" disabled>GCash</option>
							<option value="paypal" disabled>Paypal</option>
						</select>
						
						<input type="submit" value="Place order" className="p-3 mt-2 bg-blue-500 text-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-md hover:bg-blue-400 transition delay-100 cursor-pointer"/>
					</form>
					<div className="justify-center md:px-5 md:py-10">
						<div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-50">
							<p className="text-xl">Order summary</p>
							<div className="flex flex-row gap-2 md:gap-4 items-center">
								<Image src={"/fourth.png"} width={100} height={100} objectFit="contain" alt="Sample image"/>
								<div>
									<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">1pcs</span></p>
									<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Color: Wheat</p>
									<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Size: M</p>
									<p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">₱1,899</p>
									<p className="text-sm md:py-2 text-yellow-700 dark:text-yellow-300 transition delay-100">Subtotal: ₱1,899</p>
								</div>
							</div>

							<div className="flex flex-row gap-2 md:gap-4 items-center">
								<Image src={"/first.jpeg"} width={100} height={100} objectFit="contain" alt="Sample image"/>
								<div>
									<p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-100">Sample item <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">1pcs</span></p>
									<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Color: Wheat</p>
									<p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">Size: M</p>
									<p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">₱1,899</p>
									<p className="text-sm md:py-2 text-yellow-700 dark:text-yellow-300 transition delay-100">Subtotal: ₱1,899</p>
								</div>
							</div>
							<div>
								<p className="text-xl md:text-2xl text-center text-yellow-700 dark:text-yellow-300 transition delay-100">TOTAL: ₱3,798</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}