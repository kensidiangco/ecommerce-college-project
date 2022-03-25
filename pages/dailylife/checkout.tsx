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
import {useTheme} from 'next-themes'

function Checkout() {
	const {theme, setTheme} = useTheme()
    const items = useSelector(selectItems)
    const totalPrice = useSelector(selectTotal)
	const router = useRouter()
	const [session, loading] = useSession()

	const [psgcAPI, setPsgcAPI] = useState([])

	const [recipient, setRecipient] = useState('')
	const [phone, setPhone] = useState('')
	const [unit_or_floor, set_unit_or_floor] = useState('')
	const [street, setStreet] = useState('')

	const [region, setRegion] = useState('')
	const [regionName, setRegionName] = useState('')

	const [cities, setCities] = useState([])
	const [city, setCity] = useState('')

	const [districts, setDistricts] = useState([])
	const [district, setDistrict] = useState('')

	const [barangays, setBarangays] = useState([])
	const [barangay, setBarangay] = useState('')

	const [deliveryOption, setDeliveryOption] = useState('')

	const [BGstyle, setBGStyle] = useState('')
	const [TXTstyle, setTXTStyle] = useState('')

	useEffect(() => {
		if(theme === 'dark'){
			setBGStyle('#3B3B3B')
			setTXTStyle('#FBFBFB')
		}else{
			setBGStyle('#F3F4F6')
			setTXTStyle('black')
		}
	}, [theme])

	const onSubmit = (e) => {
		e.preventDefault()
		// let title = []
		// let variation = []
		// let quantity = []

		// for(let i=0; i<items.length; i++) {
		// 	title.push(items[i].title)
		// 	variation.push(items[i].variant)
		// 	quantity.push(items[i].quantity)
		// }

		let data = {
			email: session.user.email,
			recipient_name: recipient,
			phone_number: phone,
			region: regionName,
			city: city,
			district: district,
			barangay: barangay,
			street: street,
			unit_or_floor: unit_or_floor,
			total: parseInt(totalPrice),
			orders: items
		}
		console.log(JSON.stringify(data), "orders:", JSON.stringify(items))

		axios.post(`${process.env.BACKEND_API_BASE}/store/api/place/order/`, data)
			.then(res => {
				// axios.post(`${process.env.BACKEND_API_BASE}/store/api/create/order/`, {
				// 	title: title,
				// 	variation: variation,
				// 	quantity: quantity
				// })
				// .catch(err => console.log("Wag nyo na po alalahanin yung bug, importante gumagana!"))
				console.log(res.data)
				router.push('/dailylife/success')
			})
			.catch(err => console.log(err))
	}
	
	const handleRegion = (e) => {
		const value = e.target.value;
		const index = e.target.selectedIndex;
		const el = e.target.childNodes[index]
  		const code =  el.getAttribute('id'); 

		setRegion(code)
		setRegionName(value)
	}
// LOCATION API
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
							<input type="email" name="email" placeholder="Email" value={!loading? session.user?.email : ""} className="p-2 rounded-md" required/>

							<h2 className="mt-2 text-xl font-semibold">Delivery address</h2>
							<input type="text" name="recipient" placeholder="Recipient's Name" className="p-2 rounded-md" onChange={(e) => setRecipient(e.target.value)} value={recipient} required/>
							<PhoneInput
								country="ph"
								onlyCountries={['ph', 'us']}
								value={phone}
								onChange={(e) => setPhone(e)}
								inputProps={{
									name: 'phone',
									required: true
								}}
								inputStyle={{width: "100%", color: TXTstyle, backgroundColor: BGstyle, borderColor: BGstyle, borderRadius: '.4rem'}}
								containerStyle={{width: "100%", color: TXTstyle, backgroundColor: BGstyle, borderColor: BGstyle, borderRadius: '.4rem'}}
							/>
							
							<select name="region" className="p-2 rounded-md" value={regionName} onChange={handleRegion} required>

								<option value='' hidden>Region</option>
								{psgcAPI?.map((region, idx) => (
									<option key={idx} value={region.name} id={region.code}>{region.name}</option>
								))}

							</select>
							
							{!!region && <select name="city" className="p-2 rounded-md" value={city} onChange={(e) => setCity(e.target.value)} required>

								<option value='' hidden>City</option>
								{cities?.map((city, idx) => (
									<option key={idx} value={city.name}>{city.name}</option>
								))}

							</select>}

							{!!city && <select name="district" className="p-2 rounded-md" value={district} onChange={(e) => setDistrict(e.target.value)}>

								<option value='' hidden>District</option>
								{districts?.map((district, idx) => (
									<option key={idx} value={district.name}>{district.name}</option>
								))}

							</select>}

							{!!city && <select name="barangay" className="p-2 rounded-md" value={barangay} onChange={(e) => setBarangay(e.target.value)} required>
								<option value="">Barangay</option>
								{barangays?.map((barangay, idx) => (
									<option key={idx} value={barangay.name} className="">{barangay.name}</option>
								))}
							</select>}

							<input type="text" name="street" placeholder="Street" value={street} className="p-2 rounded-md" onChange={(e) => setStreet(e.target.value)} required/>

							<input type="text" value={unit_or_floor} onChange={(e) => set_unit_or_floor(e.target.value)} name="unit_or_floor" placeholder="Unit/Floor" className="p-2 rounded-md"/>

							<h2 className="mt-2 text-xl font-semibold">Payment method</h2>
							<input type="text" name="Voucher" placeholder="Voucher code" className="p-2 rounded-md" disabled/>
							<select name="delivery" className="p-2 rounded-md" value={deliveryOption} onChange={(e) => setDeliveryOption(e.target.value)} required>
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
