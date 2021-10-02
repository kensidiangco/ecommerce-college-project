import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import NumberWithSpace from '../../components/currency'
import { withAuth } from '../../constants/HOCs'
import { useSelector } from "react-redux"
import { selectProducts } from '../../slices/cartSlice'
import { useEffect } from 'react'
function Success() {
    const products = useSelector(selectProducts)

    useEffect(() => {
        localStorage.removeItem('persist:cart')
    }, [])

    return (
        <>
            <Head>
                <title>Success</title>
            </Head>
            <div className="container mx-auto py-10 px-6 md:px-10">
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="bg-gray-200 dark:bg-dark-card rounded-md shadow-md p-10">

                        <p className="text-xl text-green-600 dark:text-green-400 text-center">Order Placed Successfully</p>
                        <div className="text-center">
                            <p className="text-md">We will contact you for confirmation of your order.</p>
                            <p className="text-xl ">Thank you!</p>
                            <Link href="/dailylife/foryou" passHref>
                                <p className="pt-4 px-2 cursor-pointer">Shop again</p>
                            </Link>
                        </div>
                    </div>
                    <div className="md:px-4">
                        <div className="dark:bg-dark-card shadow-md bg-gray-50 rounded-md p-2 md:p-4">
                            <p className="flex text-xl md:text-2xl font-semibold p-2 text-gray-700 dark:text-gray-50 transition delay-50">Recommendation</p>
                            <div className="xl:flex xl:flex-wrap xl:gap-4 items-center justify-center">
                                
                                {products?.map((product, idx) => (
                                    <div key={idx} className="p-2 flex flex-row items-center gap-2 md:gap-4 hover:bg-gray-200 dark:hover:bg-button-hover rounded-md transition delay-50">
                                        <Link href={`/dailylife/product/${product.slug}`} passHref>
                                            <Image src={`${process.env.IMAGE_BASE}/${product.product_image[0].image}`} width={150} height={150} alt={product.title} className="cursor-pointer rounded"/>
                                        </Link>
                                        
                                        <div className="flex flex-col justify-center gap-px">
                                            <p className="text-sm md:text-md font-semibold text-gray-700 dark:text-gray-50 transition delay-50 break-words">{product.title}
                                            </p>
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
                                ))}
                                {products.length < 1 && <p className="text-center">No products to show.</p>}

                            </div>
                            <Link href="/dailylife/foryou" passHref>
                                <div className="flex justify-center">
                                    <p className="px-10 py-1 text-blue-700 dark:text-blue-400 dark:bg-dark-card bg-gray-50 cursor-pointer dark:hover:bg-button-hover focus:bg-gray-200 hover:bg-gray-200 transition delay-50 rounded-md">See more...</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withAuth(3 * 60)(Success)