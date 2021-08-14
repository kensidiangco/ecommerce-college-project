export default function CategoryGallery(){
    return(
        <div className="container mx-auto">
            <div className="lg:ml-60 grid-cols-2 p-10 space-y-2 lg:space-y-0 lg:grid lg:gap-3 font-semibold">

                <figure className="lg:w-full transition duration-300 hover:shadow-md transform hover:scale-95 cursor-pointer">
                    <img className="rounded-sm" src="/1.jpg" alt=""/>
                    <figcaption className="absolute text-lg -mt-16 text-white px-4 filter drop-shadow-lg">
                        <h1 className="filter drop-shadow-lg">White T-shirt</h1>
                    </figcaption>
                </figure>

                <figure className="lg:w-1/2 row-span-2 transform hover:scale-95 transition duration-300 hover:shadow-md cursor-pointer">
                    <img className="rounded-sm" src="/2.jpeg" alt=""/>
                    <figcaption className="absolute text-lg -mt-16 text-white px-4 filter drop-shadow-lg">
                        <h1 className="filter drop-shadow-lg">Essential hoodie</h1>
                    </figcaption>
                </figure>

                <figure className="lg:w-full row-span-2 cursor-pointer transition duration-300 transform hover:scale-95">
                    <img className="hover:shadow-md transition duration-300 rounded-sm" src="/3.jpg" alt=""/>
                    <figcaption className="absolute text-lg -mt-16 text-white px-4 filter drop-shadow-lg">
                        <h1 className="filter drop-shadow-lg">Candy shirts</h1>
                    </figcaption>
                </figure>

                <figure className="lg:w-1/2 transition duration-300 transform hover:scale-95 cursor-pointer">
                    <img className="transition sm:w-full duration-300 hover:shadow-md rounded-sm" src="/4.jpg" alt=""/>
                    <figcaption className="absolute text-lg filter drop-shadow-lg -mt-16 text-white px-4">
                        <h1 className="filter drop-shadow-lg">Sports wear</h1>
                    </figcaption>
                </figure>

            </div>
        </div>
    )
}