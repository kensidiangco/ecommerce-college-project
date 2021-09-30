import Image from 'next/image'
import NumberWithSpace from './currency';
import Link from 'next/link'

export default function CheckOutItem({ id, title, price, quantity, photo, variation, slug }) {
	const variations = Array.isArray(variation) && variation.length ? variation[0] : {};
	const headers = Object.keys(variations)
	const body = Object.values(variations)
    
    return (
        <div className="flex md:flex-row flex-col gap-2 dark:bg-dark-card rounded-md">
            <Link href={`/dailylife/product/${slug}`} passHref>
                <Image src={`${photo}`} width={200} height={200} alt={title} className="rounded-md cursor-pointer"/>
            </Link>
            <div className="flex flex-col px-4 py-2 md:px-0">
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
                <p className="text-md text-blue-700 dark:text-blue-400 transition delay-100">
                    {NumberWithSpace(price)} 
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition delay-100">
                            {quantity > 1 ?  <>{quantity}pcs</> : <>{quantity}pc</>}
                        </span>
                    </p>
                <p className="text-sm md:py-2 text-yellow-700 dark:text-yellow-300 transition delay-100">
                    Subtotal: {NumberWithSpace(price * quantity)}
                </p>
            </div>
        </div>
    )
}