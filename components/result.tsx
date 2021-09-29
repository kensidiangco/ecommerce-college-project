import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Result({ title, price, category, slug, image }) {
	const router = useRouter()
	
	return (
		<div onClick={() => router.push(`/dailylife/product/${slug}`)} className="flex p-2 cursor-pointer items-center gap-2 dark:hover:bg-button-hover hover:bg-gray-200">
			<Image
				onClick={() => router.push(`/dailylife/product/${slug}`)}
				src={`${process.env.IMAGE_BASE}/${image[0].image}`}
				width={50}
				height={50}
				objectFit="contain"
				className="cursor-pointer rounded"
				alt="Dailylife"
			/>
			<div onClick={() => router.push(`/dailylife/product/${slug}`)}>
				<h5>{title}</h5>
				<small>{price}</small>
			</div>
		</div>	
	)
}