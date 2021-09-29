import { Image } from "semantic-ui-react"
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import NumberWithSpace from './currency'

export default function CarouselFeed({products}){
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };

    return(
        <div className="container mx-auto md:px-20 md:py-20 px-10 py-10">
            <Carousel
                className="z-10"
                ssr
                partialVisbile
                itemClass="image-item"
                responsive={responsive}
            >
                {products?.map((prod, idx) => {
                    return (
                        <div key={idx}>
                            <Link href={`/dailylife/product/${prod.slug}`} passHref>
                                <span>
                                    <Image
                                        className="rounded shadow cursor-pointer"
                                        draggable={false}
                                        style={{ width: "90%", height: "90%" }}
                                        src={`https://res.cloudinary.com/dailylife-ecommerce/${prod.product_image[0].image}`}
                                        alt="Dailylife" />
                                </span>
                            </Link>
                            <div className="flex flex-col gap-px ">
                                <p className="font-semibold" >{prod.title}</p>
                                <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50 flex gap-2">
                                    {prod.variations[0]?.variant.map((vBody, idx) => (
                                        <p key={idx}>{vBody.variant_name}</p>
                                    ))}
                                </p>
                                <p className="text-blue-600 dark:text-yellow-400">{prod.variations[0].variant[0].parent_variant === null ? 
                                    NumberWithSpace(parseInt(prod.variations[0].variant[0].price)) 
                                    : 
                                    NumberWithSpace(parseInt(prod.variations[0].variant[0].mainVariant[0]?.price))} </p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}