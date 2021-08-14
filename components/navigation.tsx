import Link from "next/link"
import {useTheme} from 'next-themes'
import { Disclosure, Transition } from '@headlessui/react'

export default function Navigation() {
    const {theme, setTheme} = useTheme()
    
    return(
        <>  
            <nav className="bg-white sticky shadow-md top-0 z-50 dark:bg-black dark:text-gray-50 text-gray-700 transition delay-100">
                <ul className="float-left hidden md:flex items-center space-x-1 px-10 text-sm static">
                    <li className="py-2 px-2 cursor-pointer">
                        <Link href="/dailylife/aboutus">About us</Link>
                    </li>
                    <li className="absolute left-28 flex items-center">
                        <input 
                            aria-label="Toggle Dark Mode"
                            type="submit"
                            className="p-3 order-2 md:order-3"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            value={theme === 'dark' ? 'Light' : 'Dark'}
                        />
                    </li>
                </ul>
                <ul className="float-right hidden md:flex items-center space-x-1 px-10 text-sm">
                    <li className="py-2 px-2 cursor-pointer">
                        <a>Login</a>
                    </li>
                    <li className="py-2 px-2 cursor-pointer">
                        <a>Signup</a>
                    </li>
                </ul>
                <div className="max-w-6xl mx-auto px-4 p-6">
                    <div className="flex justify-between">
                        <div className="flex space-x-7 items-center cursor-pointer">

                            <div>
                                <Link href="/" passHref>
                                    <span className="flex items-center py-4 px-2 font-semibold text-lg">Dailylife</span>
                                </Link>
                            </div>
                            <ul className="hidden md:flex items-center space-x-1">
                                <li className="py-4 px-2">
                                    <Link href="#">Search</Link>
                                </li>
                                <li className="py-4 px-2">
                                    <Link href="#">Men</Link>
                                </li>
                                <li className="py-4 px-2">
                                    <Link href="#">Women</Link>
                                </li>
                                <li className="py-4 px-2">
                                    <Link href="#">Unisex</Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="hidden md:flex items-center space-x-3">
                            <li className="py-4 px-2">
                                <span className="relative inline-block cursor-pointer">    
                                    <Link href="#" passHref>
                                        <span className="text-lg">Cart</span>
                                    </Link>
                                    <span className="absolute bottom-2 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-3 bg-red-600 rounded-full">2</span>
                                </span>
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
                                        <Disclosure.Panel className="bg-white flex flex-col gap-2 items-center absolute inset-x-0 top-2/3 w-full dark:bg-black transition delay-150 py-10" static>
                                            <Disclosure.Button as="span" className="dark:text-gray-50 text-black py-5">
                                                <span className="relative inline-block cursor-pointer text-2xl">    
                                                    <Link href="/">
                                                        Cart
                                                    </Link>
                                                    <span className="absolute bottom-2 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-4 bg-red-600 rounded-full">2</span>
                                                </span>
                                            </Disclosure.Button>
                                            <ul className="flex flex-col gap-4 items-center">
                                                <li className="cursor-pointer py-1">
                                                    <Link href="#">Search</Link>
                                                </li>
                                                <li className="cursor-pointer py-1">
                                                    <Link href="#">Men</Link>
                                                </li>
                                                <li className="cursor-pointer py-1">
                                                    <Link href="#">Women</Link>
                                                </li>
                                                <li className="cursor-pointer py-1">
                                                    <Link href="#">Unisex</Link>
                                                </li>
                                            </ul>
                                            <ul className="flex md:gap-2 py-2">
                                                <li className="cursor-pointer m-2">
                                                    <a>Login</a>
                                                </li>
                                                <li className="cursor-pointer m-2">
                                                    <a>Signup</a>
                                                </li>
                                            </ul>
                                            <Disclosure.Button as="span" className="dark:text-gray-50 text-black py-4">
                                                <Link href="/dailylife/aboutus">
                                                    About us
                                                </Link>
                                            </Disclosure.Button>
                                            <Disclosure.Button as="span">
                                                <input 
                                                    aria-label="Toggle Dark Mode"
                                                    type="submit"
                                                    className="p-3 order-2 md:order-3 dark:bg-gray-900" 
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