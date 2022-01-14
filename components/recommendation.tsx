import Link from 'next/link'
import Image from 'next/image'
import NumberWithSpace from './currency'

export default function Recommendation({ products, product }) {
    const {
		title, 
		category, 
	} = product
    
    return (
        <div>
            <div className="mt-4 md:mt-px dark:bg-dark-card shadow-md bg-gray-50 rounded-md p-2 md:p-4">
                <p className="text-xl md:text-2xl font-semibold p-2 text-gray-700 dark:text-gray-50 transition delay-50">Recommendation</p>
                
                <div className="md:flex md:flex-wrap">
                    {products?.filter(prod => prod.category.name === category.name).map((product, idx) => (
                        product.title !== title ?
                            <div key={idx} className="p-2 md:p-5 flex flex-row items-center gap-4 hover:bg-gray-200 dark:hover:bg-button-hover rounded-md transition delay-50 flex-1">
                                <Link href={`/dailylife/product/${product.slug}`} passHref>
                                    <Image src={`${process.env.IMAGE_BASE}/${product.product_image[0].image}`} width={100} height={100} objectFit="contain" alt={product.title} className="cursor-pointer rounded"/>
                                </Link>
                                
                                <div className="mx-auto md:flex-1">
                                    <p className="text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-50 break-words">{product.title}</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50 flex gap-2">
                                        {product.variations[0]?.variant.map((vBody, idx) => (
                                            <p key={idx}>{vBody.variant_name}</p>
                                        ))}
                                    </p>
                                    <p className="text-sm text-blue-700 dark:text-blue-400 transition delay-50">
                                    {product.variations[0].variant[0].parent_variant === null ? 
                                        NumberWithSpace(parseInt(product.variations[0].variant[0].price)) 
                                        :
                                        NumberWithSpace(parseInt(product.variations[0].variant[0].mainVariant[0]?.price))}	
                                    </p>
                                </div>
                            </div>
                        :
                            ""
                    ))}
                </div>
                <Link href="/dailylife/foryou" passHref>
                    <div className="flex justify-center">
                        <p className="px-10 py-1 text-blue-700 dark:text-blue-400 dark:bg-dark-card bg-gray-50 cursor-pointer dark:hover:bg-button-hover focus:bg-gray-200 hover:bg-gray-200 transition delay-50 rounded-md">See more...</p>
                    </div>
                </Link>
            </div>
		</div>
    )
}