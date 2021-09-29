import Image from 'next/image'
import NumberWithSpace from './currency';
import { useState, useEffect } from 'react';

export default function CheckOutItem({ id, title, price, quantity, product_image, image, variation, slug }) {
    const [photo, setPhoto] = useState('')
	const variations = Array.isArray(variation) && variation.length ? variation[0] : {};
	const headers = Object.keys(variations)
	const body = Object.values(variations)

    useEffect(() => {
        if(image){
            setPhoto(`${image}`)
        }else{
            setPhoto(`${product_image[0].image}`)
        }
    }, [])
    
    return (
        <div className="flex flex-row gap-2 md:gap-4 items-center">
            <Image src={`${process.env.IMAGE_BASE}/${photo}`} width={130} height={130} objectFit="contain" alt={title}/>
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