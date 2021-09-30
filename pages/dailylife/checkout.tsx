import Head from 'next/head'
import { useRouter } from 'next/router'
import { withAuth } from '../../constants/HOCs'
import { useSession } from "next-auth/client";
import { useSelector } from 'react-redux'
import { selectItems, selectTotal, selectTotalItems } from '../../slices/cartSlice';
import NumberWithSpace from '../../components/currency';
import CheckOutItem from '../../components/checkOutItem'

function Checkout() {
    const items = useSelector(selectItems)
    const totalPrice = useSelector(selectTotal)
    const selectTotalItem = useSelector(selectTotalItems)

	const router = useRouter()
	const [session, loading] = useSession()

	const onSubmit = () => {
		router.push('/')
	}

	return (
		<>
			<Head>
				<title>Checkout</title>
			</Head>
			<div className="container mx-auto px-5">
				<div className="flex flex-col md:flex-row justify-center p-4 md:px-5 md:py-10 md:gap-8 gap-5">
					<form onSubmit={onSubmit} autoComplete="off">
						<div className="flex flex-col gap-2 p-5 rounded-md shadow-md bg-gray-200 dark:bg-dark-card text-gray-800 dark:text-gray-50">
							<h2 className="text-xl font-semibold">Information</h2>
							<input type="email" name="email" placeholder="Email" defaultValue={!loading? session.user?.email : ""} className="p-2 rounded-md" required/>

							<h2 className="mt-2 text-xl font-semibold">Delivery address</h2>
							<input type="text" name="name" placeholder="Full name" className="p-2 rounded-md" required/>
							<input type="text" name="address1" placeholder="Present address" className="p-2 rounded-md" required/>
							<input type="text" name="brgy" placeholder="Baranggay" className="p-2 rounded-md" required/>
							<input type="text" name="zone" placeholder="Zone" className="p-2 rounded-md" required/>
							<input type="text" name="district" placeholder="District" className="p-2 rounded-md" required/>
							<input type="text" name="zip code" placeholder="Zip code" className="p-2 rounded-md" required/>

							<h2 className="mt-2 text-xl font-semibold">Payment method</h2>
							<input type="text" name="Voucher" placeholder="Voucher code" className="p-2 rounded-md"/>
							<select name="delivery" className="p-2 rounded-md" required>
								<option value="cod">COD</option>
								<option value="gcash" disabled>GCash</option>
								<option value="paypal" disabled>Paypal</option>
							</select>
							
							<input type="submit" value="Place order" className="p-3 mt-2 bg-blue-500 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover rounded-md hover:bg-blue-400 transition delay-100 cursor-pointer"/>
						</div>
					</form>
					<div className="">
						<div className="flex flex-col gap-2 p-5 rounded-md md:bg-gray-50 md:shadow-md md:dark:bg-dark-card text-gray-800 dark:text-gray-50">
							<p className="text-xl font-semibold">Order summary</p>

							{items?.map((item, idx) =>(
								<CheckOutItem key={idx} {...item}/>
							))}

							<div className="py-4 dark:bg-dark-card bg-gray-50 rounded-md">
								<p className="text-xl md:text-2xl text-center text-yellow-600 dark:text-yellow-300 transition delay-100">TOTAL: {NumberWithSpace(totalPrice)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default withAuth(3 * 60)(Checkout);