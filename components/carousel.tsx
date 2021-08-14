import { Image } from "semantic-ui-react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselFeed(){
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
      const images = [
          "/first.jpeg",
          "/second.jpeg",
          "/third.jpeg",
          "/fourth.png",
      ];
    return(
        <div className="container mx-auto md:px-20 md:py-20 px-10 py-10">
            <Carousel
            ssr
            partialVisbile
            
            itemClass="image-item"
            responsive={responsive}
            >
            {images.slice(0, 5).map((image, idx) => {
                return (
                    <div key={idx} className="rounded">
                        <Image
                            draggable={false}
                            style={{ width: "90%", height: "90%" }}
                            src={image}
                            alt="tinda"
                        />
                        <div className="">
                            <p>Sample item</p>    
                            <p>2,989</p>    
                        </div>
                    </div>
                );
            })}
            </Carousel>
        </div>
    )
}