import Image from 'next/image'
import Link from 'next/link';
import { removeFromCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import NumberWithSpace from './currency';
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectTotal, selectTotalItems } from '../slices/cartSlice';

export default function CheckOutItem({ id, title, price, quantity, product_image, variation, slug }) {
	const [session] = useSession()
    const router = useRouter()

    const totalPrice = useSelector(selectTotal)
    const selectTotalItem = useSelector(selectTotalItems)
	const variations = Array.isArray(variation) && variation.length ? variation[0] : {};
	const headers = Object.keys(variations)
	const body = Object.values(variations)
    
    return (
        <div className="flex flex-row gap-2 md:gap-4 items-center">
            <Image src={`${process.env.IMAGE_BASE}/${product_image[0].image}`} width={130} height={130} objectFit="contain" alt="Sample image"/>
            <div className="flex flex-col gap-px">
                <p className="text-md font-semibold text-gray-600 dark:text-gray-50 transition delay-100">{title}</p>
                <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">
                {headers.map((header, i) => (
                    <th key={i}>{header}&nbsp;&nbsp;&nbsp;&nbsp;</th>
                ))}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-100">
                {body.map((value, i) => (
                    <td key={i}>{value}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                ))}
                </p>
                <p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">{NumberWithSpace(price)} <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">{quantity > 1 ?  <>{quantity}pcs</> : <>{quantity}pc</>}</span></p>
                <p className="text-sm md:py-2 text-yellow-700 dark:text-yellow-300 transition delay-100">Subtotal: {NumberWithSpace(price * quantity)}</p>
            </div>
        </div>
    )
}