import { updateQuantity } from "../slices/cartSlice";
import { useDispatch } from 'react-redux';
import { useState } from 'react'

export default function QuantityCount({ setQuantity, quantity = 1, dispatch = false, id = null }) {
	const newDispatch = useDispatch()

	const increaseCount = () => {
		setQuantity(quantity + 1)
		updateQuantityHere(quantity + 1)
	}

	const decreaseCount = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
            updateQuantityHere(quantity - 1)
        }
    }

    const updateQuantityHere = count => {
        if(dispatch){
            const product = {id, quantity: count}
            newDispatch(updateQuantity(product))
        }
    }

	return (
        <div className="flex p-2 gap-2 justify-center items-center">
            <button className="py-px px-3 rounded bg-gray-400 hover:bg-gray-300 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover" onClick={decreaseCount} disabled={quantity === 1 ? true : false}>-</button>
            <div className="text-md">{quantity}<small>{quantity > 1 ? "pcs" : ""}</small></div>
            <button className="py-px px-3 rounded bg-gray-400 hover:bg-gray-300 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover" onClick={increaseCount}>+</button>
        
        </div>

	)
}