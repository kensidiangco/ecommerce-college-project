import { Disclosure, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { SearchCircleIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/client'
import Result from './result'

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { selectTotalItems, selectProducts } from "../slices/cartSlice";
import { useSelector } from "react-redux";

export default function SearchDropdown({CName}) {
    const [session] = useSession()

    const products = useSelector(selectProducts)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false)

    const handleSearch = (e) => {
        let trem = e.target.value
        let search = trem.toLowerCase()
        setSearchTerm(search)
        setSearchResults(products?.filter(product => product.title.toLowerCase().includes(search)))
    }

    return (
        <div className="text-center">
            <Disclosure as="div" className="relative inline-block">
                {({ open }) => (
                    <>
                        <div>
                            <Disclosure.Button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-button-hover transition delay-50">
                                Search
                            </Disclosure.Button>
                        </div>
                        
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Disclosure.Panel className={CName}>
                                <div className="px-1 py-1">
                                    <button
                                        className="text-gray-700 dark:text-white dark:text-white text-gray-900 flex rounded-md items-center w-full px-2 py-2 text-sm cursor-default"
                                    >
                                        <span className="flex items-center cursor-default">
                                            <SearchCircleIcon
                                                className="w-10 h-10 mr-2 text-violet-400"
                                                aria-hidden="true" />
                                            <form autoComplete="off" autoCapitalize="off">
                                                <input type="search" placeholder="Search" id="productSearch" className="p-2 rounded w-full" 
                                                    onMouseOver={() => setShowResults(true)} 
                                                    value={searchTerm} 
                                                    onChange={handleSearch} 
                                                />
                                            </form>
                                        </span>
                                    </button>
                                    {showResults && (
                                        <div 
                                            onClick={() => setShowResults(true)} 
                                            onMouseOver={() => setShowResults(true)} 
                                            onMouseLeave={() => setShowResults(false)} 
                                            style={{ marginTop: '5px', height: 'auto', maxHeight: '400px', overflowY: 'auto' }}>

                                            {(!!searchResults?.length) ? searchResults.map((product, idx) => (
                                                <Link key={idx} href={`/dailylife/product/${product.slug}`} passHref>
                                                    <Result  
                                                        title={product.title} 
                                                        price={product.regular_price} 
                                                        image={product.product_image} 
                                                        slug={product.slug}
                                                        category={product.category}
                                                    />
                                                </Link>
                                            )) : (
                                                <>
                                                    {searchTerm && <p className="">No product found</p>}
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    )
}