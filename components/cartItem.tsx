import Image from 'next/image'
import Link from 'next/link';
import { removeFromCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import NumberWithSpace from './currency';
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router';
import CheckoutLoginDropdown from './checkoutLoginDropdown';

export default function CartItem({ id, title, price, quantity, product_image, description, variation, slug }) {
	const [session] = useSession()
    const router = useRouter()
    const dispatch = useDispatch()
	const removeItemFromCart = () => {
		dispatch(removeFromCart({ id }))
	}

	const variations = Array.isArray(variation) && variation.length ? variation[0] : {};
	const headers = Object.keys(variations)
	const body = Object.values(variations)
    
    return (
        <div className="px-2 py-4 md:p-5 flex flex-col md:flex-row items-center md:gap-4 md:bg-none dark:bg-dark-card bg-gray-50 rounded-xl shadow-md md:shadow-none">
            <Image 
                src={`https://res.cloudinary.com/dailylife-ecommerce/${product_image[0].image}`} 
                width={200} height={200} objectFit="contain" alt="Sample image"
                className="rounded-md cursor-pointer"
                onClick={() => router.push(`/dailylife/product/${slug}`)}/>
            <div>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-50">{title}</p>
                <p className="text-md text-gray-700 dark:text-gray-50 transition delay-50">
                    {headers.map((header, i) => (
                        <th key={i}>{header}&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    ))}
                </p>
                <p className="text-md text-gray-700 dark:text-gray-50 transition delay-50">
                    {body.map((value, i) => (
                        <td key={i}>{value}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    ))}
                </p>
                <p className="text-md text-blue-700 dark:text-blue-400 transition delay-50">{NumberWithSpace(price)} <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-50">{quantity > 1 ? <>{quantity}pcs</> : <>{quantity}pc</>}</span></p>
                <p className="text-sm md:py-3 text-yellow-700 dark:text-yellow-300 transition delay-50">Subtotal: ₱1,899</p>
                <div className="flex justify-center mt-2 md:float-right">
                    <input type="submit" value="Remove" className="text-sm py-1 px-10 cursor-pointer rounded-lg text-gray-700 dark:text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover transition delay-50" onClick={() => removeItemFromCart()}/>
                </div>
            </div>
        </div>
    )
}