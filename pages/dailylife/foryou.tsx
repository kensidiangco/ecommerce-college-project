import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../slices/cartSlice'
import NumberWithSpace from '../../components/currency'

export default function ForYou() {
    const products = useSelector(selectProducts)
    
    return (
        <>
            <Head>
                <title>For you</title>
            </Head>
            <div className="py-4 px-6 container mx-auto">
                <h1 className="text-xl md:text-4xl py-2 md:py-6 font-semibold text-gray-800 dark:text-gray-50 ml-4 md:ml-10">For you</h1>
                <div className="flex flex-wrap gap-4 md:gap-10 justify-center">
                    {products.map((product, idx) => (
                        <div key={idx} className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-md w-72 flex flex-col justify-center gap-2">
                            <Link href={`/dailylife/product/${product.slug}`} passHref>
                                <Image
                                    key={idx}
                                    src={`${process.env.IMAGE_BASE}/${product.product_image[0].image}`}
                                    width={250}
                                    height={250}
                                    alt={product.title}
                                    className="rounded-md cursor-pointer"
                                />
                            </Link>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-xl break-words font-semibold">{product.title}</h2>
                                <p className="flex gap-2">
                                    {product.variations[0]?.variant.map((vBody, idx) => (
                                        <p key={idx}>{vBody.variant_name}</p>
                                    ))}
                                </p>
                                <p className="text-yellow-600 dark:text-yellow-400 text-md">
                                    {product.variations[0].variant[0].parent_variant === null ? 
                                        NumberWithSpace(parseInt(product.variations[0].variant[0].price)) 
                                        : 
                                        NumberWithSpace(parseInt(product.variations[0].variant[0].mainVariant[0].price))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}