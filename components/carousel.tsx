import { Image } from "semantic-ui-react"
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import NumberWithSpace from './currency'
import { useSelector } from 'react-redux'
import { selectProducts } from '../slices/cartSlice'

export default function CarouselFeed(){
    const products = useSelector(selectProducts)
    
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
                        <div className="">
                            <p>{prod.title}</p>
                            <p>{prod.variations[0].variant[0].parent_variant === null ? 
                                NumberWithSpace(parseInt(prod.variations[0].variant[0].price)) 
                                : 
                                NumberWithSpace(parseInt(prod.variations[0].variant[0].mainVariant[0].price))} </p>
                        </div>
                    </div>
                )
            })}
            </Carousel>
        </div>
    )
}