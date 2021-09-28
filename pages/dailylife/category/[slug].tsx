import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import NumberWithSpace from '../../../components/currency'

export default function Category({ products }) {
	const router = useRouter()
    const { slug } = router.query

	return(
		<>
			<Head>
				<title>{slug.toUpperCase()}</title>
			</Head>
            <div className="containter mx-auto py-10 px-20">
                <p className="text-xl font-semibold ml-20">FOR {slug.toUpperCase()}</p>
                <p className="text-xl font-semibold ml-20 text-center">{products.length < 1 && <>No products for {slug.toUpperCase()} :(</>}</p>
                <div className="flex felx-wrap gap-10 justify-center">
                    {products.map((product, idx) => (
                        <div key={idx} className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-md">
                            <Image
                                key={idx}
                                onClick={() => router.push(`../product/${encodeURIComponent(product.slug)}`)}
                                src={`${process.env.IMAGE_BASE}/${product.product_image[0].image}`}
                                width={250}
                                height={250}
                                alt={product.title}
                                className="rounded-md cursor-pointer"
                            />
                            <div className="">
                                <h2 className="text-xl">{product.title}</h2>
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

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await fetch(`${process.env.BACKEND_API_BASE}/store/api/categories`).then(response => response.json())

    const paths = categories.map(category => {
        return { 
            params: { slug: category.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params.slug
    const products = await fetch(`${process.env.BACKEND_API_BASE}/store/api/category/${slug}`).then(response => response.json())

    return {
        props: { products }
    }
}