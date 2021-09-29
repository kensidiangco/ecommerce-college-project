import Link from "next/link"
import Image from "next/image"
import {useTheme} from 'next-themes'
import { Disclosure, Transition } from '@headlessui/react'
import { useSession } from "next-auth/client"
import { signOut, signIn } from 'next-auth/client'
import LoginDropdown from '../components/dropdown'
import SearchDropdown from '../components/searchDropdown'

import { selectTotalItems } from "../slices/cartSlice"
import { useSelector } from "react-redux"

export default function Navigation() {
    const [session] = useSession()
    const {theme, setTheme} = useTheme()
    const totalItems = useSelector(selectTotalItems)

    return(
        <>  
            <nav className="bg-gray-50 sticky shadow-md top-0 z-50 dark:bg-dark-nav-footer dark:text-gray-50 text-gray-700 transition delay-100">
                <ul className="float-left hidden md:flex items-center space-x-1 px-10 text-sm static mt-px">
                    <li className="py-1 px-2 mt-2 rounded-md hover:bg-gray-100 dark:hover:bg-button-hover transition delay-50 cursor-pointer">
                        <Link href="/dailylife/aboutus">About us</Link>
                    </li>
                    <li className="absolute left-28 flex">
                        <input 
                            aria-label="Toggle Dark Mode"
                            type="submit"
                            className="inline-flex justify-center w-full px-4 mt-2 py-1 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition delay-50 cursor-pointer"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            value={theme === 'dark' ? 'Light' : 'Dark'}
                        />
                    </li>
                </ul>
                
                <ul className="float-right hidden md:flex items-center text-sm">
                    {/* <Link href="/dailylife/login" passHref>
                        <span className="py-2 px-2 rounded-md bg-blue-500 text-gray-50 hover:bg-blue-300 dark:hover:bg-blue-300 transition delay-50 cursor-pointer">
                            Login
                        </span>                        
                    </Link>

                    <li className="py-2 px-2 rounded-md bg-blue-500 text-gray-50 hover:bg-blue-300 dark:hover:bg-blue-300 transition delay-50 cursor-pointer">
                        <Link href="/dailylife/signup">Signup</Link>
                    </li>

                    <Link href="/dailylife/login" passHref>
                        <span className="mt-2 py-1 px-3 rounded-md bg-blue-500 text-gray-50 hover:bg-blue-300 dark:hover:bg-blue-300 transition delay-50 cursor-pointer">
                            Login
                        </span>                        
                    </Link>*/}

                    <LoginDropdown />
                    
                </ul> 
                <div className="max-w-6xl mx-auto md:pt-6 px-6 py-1">
                    <div className="flex justify-between">
                        <div className="flex space-x-7 items-center cursor-pointer">

                            <div>
                                <Link href="/" passHref>
                                    <span className="flex items-center py-4 px-2 font-semibold text-2xl">Dailylife</span>
                                </Link>
                            </div>
                            <ul className="hidden md:flex items-center space-x-1">
                                <li>
                                    <SearchDropdown CName="absolute right-0 w-56 mt-2 origin-top-right bg-gray-50 dark:bg-dark-button divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition delay-50"/>
                                </li>
                                <Link href="/dailylife/category/men" passHref>
                                    <li className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-button-hover transition delay-50">
                                        Men
                                    </li>
                                </Link>
                                <Link href="/dailylife/category/women" passHref>
                                    <li className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-button-hover transition delay-50">
                                        Women
                                    </li>
                                </Link>
                                <Link href="/dailylife/category/unisex" passHref>
                                    <li className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-button-hover transition delay-50">
                                        Unisex
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <ul className="hidden md:flex items-center space-x-3">
                            <li className="relative inline-block cursor-pointer">    
                                <Link href="/dailylife/cart" passHref>
                                    <span className="py-4 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-button-hover transition delay-50 text-lg dark:text-gray-50 text-gray-900">Cart</span>
                                </Link>
                                    {totalItems !== 0 && <span className="absolute bottom-2 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-3 bg-red-600 rounded-full">{totalItems}</span>}
                            </li>
                        </ul>
                        <Disclosure as="div" className="md:hidden flex items-center">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="outline-none mobile-menu-button">
                                        <svg
                                            className={`${open ? "transform rotate-90 duration-100 transition delay-100 w-6 h-6 text-gray-500" : "w-6 h-6 text-gray-500"}`}
                                            x-show="!showMenu"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                                        </svg>
                                    </Disclosure.Button>
                                    <Transition
                                        enter="transition-opacity duration-75"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition-opacity duration-150"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Disclosure.Panel className="bg-gray-50 flex flex-col gap-2 items-center absolute inset-x-0 top-2/3 w-full dark:bg-dark-nav-footer transition delay-150 py-10" static>
                                            <Disclosure.Button as="span" className="dark:text-gray-50 text-black py-5">
                                                <span className="relative inline-block cursor-pointer text-2xl">    
                                                    <Link href="/dailylife/cart">
                                                        Cart
                                                    </Link>
                                                    {totalItems !== 0 && <span className="absolute bottom-2 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-4 bg-red-600 rounded-full">{totalItems}</span>}
                                                </span>
                                            </Disclosure.Button>
                                            <div className="flex flex-col gap-4 items-center">
                                                {/* <span className="flex justify-center items-center dark:text-gray-50 text-gray-900 cursor-pointer py-1">
                                                    <SearchDropdown CName="w-56 mt-2 origin-top-right bg-gray-50 hover:bg-gray-100 dark:bg-dark-button dark:hover:bg-button-hover divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition delay-50 w-full"/>
                                                </span> */}
                                                <Disclosure.Button className="dark:text-gray-50 text-gray-900 cursor-pointer py-1">
                                                    <Link href="/dailylife/category/men">Men</Link>
                                                </Disclosure.Button>
                                                <Disclosure.Button className="dark:text-gray-50 text-gray-900 cursor-pointer py-1">
                                                    <Link href="/dailylife/category/women">Women</Link>
                                                </Disclosure.Button>
                                                <Disclosure.Button className="dark:text-gray-50 text-gray-900 cursor-pointer py-1">
                                                    <Link href="/dailylife/category/unisex">Unisex</Link>
                                                </Disclosure.Button>
                                            </div>
                                            {!session &&
                                                <div className="flex md:gap-2 py-2" onClick={() => signIn('google', { callbackUrl: `${window.location.origin}/` })}>
                                                    <Disclosure.Button className="py-px px-5 rounded-md bg-gray-100 text-gray-600 dark:text-gray-50 hover:bg-gray-200 dark:bg-dark-button dark:hover:bg-button-hover transition delay-50 cursor-pointer m-2">
                                                        <span className="flex items-center flex-row gap-1 font-semibold">
                                                            <Image alt="Google" src="/googleLogo.png" width={40} height={40} objectFit='contain' loading="eager" />
                                                            <p className="text-sm">Login with Google</p>
                                                        </span>
                                                    </Disclosure.Button>
                                                </div>
                                            }
                                            {session &&
                                                <div className="flex md:gap-2 py-2" onClick={() => signOut()}>
                                                    <Disclosure.Button className="py-1 px-10 dark:text-gray-50 text-gray-900 cursor-pointer m-2">
                                                        <p>Logout</p>
                                                    </Disclosure.Button>
                                                </div>
                                            }
                                            <Disclosure.Button as="span" className="dark:text-gray-50 text-gray-900 py-1 px-10">
                                                <Link href="/dailylife/aboutus">
                                                    About us
                                                </Link>
                                            </Disclosure.Button>
                                            <Disclosure.Button as="span">
                                                <input 
                                                    aria-label="Toggle Dark Mode"
                                                    type="submit"
                                                    className="inline-flex justify-center w-full px-4 py-2 mt-1 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition delay-50"
                                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                                    value={theme === 'dark' ? 'Light' : 'Dark'}
                                                />
                                            </Disclosure.Button>
                                            
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </nav>
        </>
    )
}