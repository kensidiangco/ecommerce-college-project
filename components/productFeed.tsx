import { selectProducts } from '../slices/cartSlice'
import { useSelector } from 'react-redux'

export default function ProductFeed() {
    const products = useSelector(selectProducts)

    return (
        <>
        </>
    )
}