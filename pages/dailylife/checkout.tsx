import Head from 'next/head'
import { useRouter } from 'next/router'
import { withAuth } from '../../constants/HOCs'
import { useSession } from "next-auth/client"
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectItems, selectTotal, selectTotalItems } from '../../slices/cartSlice'
import NumberWithSpace from '../../components/currency'
import CheckOutItem from '../../components/checkOutItem'
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Checkout() {
    const items = useSelector(selectItems)
    const totalPrice = useSelector(selectTotal)
    const selectTotalItem = useSelector(selectTotalItems)
	
	const router = useRouter()
	const [session, loading] = useSession()

	const [psgcAPI, setPsgcAPI] = useState([])

	const [phone, setPhone] = useState('')

	const [region, setRegion] = useState('')

	const [cities, setCities] = useState([])
	const [city, setCity] = useState('')

	const [barangays, setBarangays] = useState([])
	const [barangay, setBarangay] = useState('')

	const [districts, setDistricts] = useState([])
	const [district, setDistrict] = useState('')

	const onSubmit = () => {
		router.push('/')
	}

	useEffect(() => {
		axios.get('https://psgc.gitlab.io/api/regions/')
			.then(res => setPsgcAPI(res.data))
			.catch(err => console.log(err))
	}, [])
	useEffect(() => {
		axios.get(`https://psgc.gitlab.io/api/regions/${region}/cities/`)
			.then(res => {
				setCities(res.data)
			})
			.catch(err => console.log(err))
		}, [region])
	
	useEffect(() => {
		axios.get(`https://psgc.gitlab.io/api/regions/${region}/sub-municipalities/`)
			.then(res => {
				setDistricts(res.data)
			})
			.catch(err => console.log(err))
		}, [region])
		
	useEffect(() => {
		axios.get(`https://psgc.gitlab.io/api/regions/${region}/barangays/`)
			.then(res => {
				setBarangays(res.data)
			})
			.catch(err => console.log(err))
		}, [region])


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
							<input type="text" name="recipient" placeholder="Recipient's Name" className="p-2 rounded-md" required/>
							<PhoneInput
								country="ph"
								onlyCountries={['ph', 'us']}
								value={phone}
								onChange={(e) => setPhone(e)}
								inputProps={{
									name: 'phone',
									required: true,
									autoFocus: true
								}}
								inputClass="text-black"
								searchClass="text-black"
								buttonClass="text-black"
								containerClass="text-black"
								dropdownClass="text-black"
							/>
							
							<select name="region" className="p-2 rounded-md" value={region} onChange={(e) => setRegion(e.target.value)} required>

								<option value='' hidden>Region</option>
								{psgcAPI?.map((region, idx) => (
									<option key={idx} value={region.code}>{region.name}</option>
								))}

							</select>
							
							{!!region && <select name="city" className="p-2 rounded-md" value={city} onChange={(e) => setCity(e.target.value)} required>

								<option value='' hidden>City</option>
								{cities?.map((city, idx) => (
									<option key={idx} value={city.code}>{city.name}</option>
								))}

							</select>}

							{!!city && <select name="district" className="p-2 rounded-md" value={district} onChange={(e) => setDistrict(e.target.value)} required>

								<option value='' hidden>District</option>
								{districts?.map((district, idx) => (
									<option key={idx} value={district.code}>{district.name}</option>
								))}

							</select>}

							{!!district && <select name="barangay" className="p-2 rounded-md" value={barangay} onChange={(e) => setBarangay(e.target.value)} required>
								<option value="">Barangay</option>
								{barangays?.map((barangay, idx) => (
									<option key={idx} value={barangay.code} className="">{barangay.name}</option>
								))}
							</select>}

							<input type="text" name="street" placeholder="Street" className="p-2 rounded-md" required/>

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

export async function getStaticProps() {
	const res = await fetch('https://psgc.gitlab.io/api/regions/')
	const psgcAPI = await res.json()
  
	return {
		props: { psgcAPI },
	}
}

export default withAuth(3*60)(Checkout);