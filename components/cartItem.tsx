import Image from 'next/image'
import { removeFromCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import NumberWithSpace from './currency';
import { useRouter } from 'next/router';

export default function CartItem({ title, price, quantity, photo, variant, slug }) {
    const router = useRouter()
    const dispatch = useDispatch()

	const removeItemFromCart = () => {
		dispatch(removeFromCart({ slug }))
	}

	// const variations = Array.isArray(variation) && variation.length ? variation[0] : {};
	// const headers = Object.keys(variations)
	// const body = Object.values(variations)

    return (
        <div className="flex flex-col md:flex-row md:py-2 md:bg-none dark:bg-dark-card bg-gray-50 rounded-md shadow-md md:shadow-none min-w-0">
            <Image 
                src={photo} 
                width={200} height={200}
                className="rounded-md cursor-pointer"
                onClick={() => router.push(`/dailylife/product/${slug}`)}
                alt={title}
            />

            <div className="py-4 px-6 md:px-4 md:flex-1 w-full">
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-50 transition delay-50 break-words">{title}</p>
                
                {/* <p className="text-md text-gray-700 dark:text-gray-50 transition delay-50">
                    {headers.map((header, i) => (
                        <th key={i}>{header}&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    ))}
                </p> */}
                
                <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">
                    {/* {body.map((value, i) => (
                        <td key={i}>{value}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    ))} */}
                    {variant}
                </p>
                
                <p className="text-md text-blue-700 dark:text-blue-400 transition delay-50">
                    {NumberWithSpace(price)} 
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-50">
                        {quantity > 1 ? <>{quantity}pcs</> : <>{quantity}pc</>}
                    </span>
                </p>
                
                <p className="text-sm md:py-3 text-yellow-700 dark:text-yellow-300 transition delay-50">
                    Subtotal: {NumberWithSpace(price * quantity)}
                </p>
                
                <div className="mt-2">
                    <button className="text-sm py-1 px-10 cursor-pointer rounded-lg text-gray-700 dark:text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover transition delay-50" onClick={removeItemFromCart}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}