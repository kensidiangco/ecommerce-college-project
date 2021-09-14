import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function User(){
    const [tab, setTab] = useState('Orders')

    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <div className="container mx-auto h-screen">
                <div className="flex p-5 justify-center">
                    <div className="flex p-4 hidden md:block" id="right">
                        <div className="flex flex-col gap-4 p-4 bg-gray-200 dark:bg-dark-card rounded-md shadow-md transition delay-50">
                            <div className="flex gap-2">
                                <input type="radio" id="Orders" name="tab" className="appearance-none" onChange={() => setTab('Orders')}/>
                                <label htmlFor="Orders" className={`py-2 px-6 hover:bg-white transition delay-50 rounded-md cursor-pointer ${tab === 'Orders' ? 'bg-white shadow dark:bg-button-hover' : 'bg-gray-100'} dark:bg-dark-button dark:hover:bg-button-hover text-gray-700 dark:text-gray-50 transition delay-50`}>Orders</label>

                                <input type="radio" id="To Pay" name="tab" className="appearance-none" onChange={() => setTab('To Pay')}/>
                                <label htmlFor="To Pay" className={`py-2 px-6 hover:bg-white transition delay-50 rounded-md cursor-pointer ${tab === 'To Pay' ? 'bg-white shadow dark:bg-button-hover' : 'bg-gray-100'} dark:bg-dark-button dark:hover:bg-button-hover text-gray-700 dark:text-gray-50 transition delay-50`}>To Pay</label>
                            
                                <input type="radio" id="To Ship" name="tab" className="appearance-none" onChange={() => setTab('To Ship')}/>
                                <label htmlFor="To Ship" className={`py-2 px-6 hover:bg-white transition delay-50 rounded-md cursor-pointer ${tab === 'To Ship' ? 'bg-white shadow dark:bg-button-hover' : 'bg-gray-100'} dark:bg-dark-button dark:hover:bg-button-hover text-gray-700 dark:text-gray-50 transition delay-50`}>To Ship</label>
                            
                                <input type="radio" id="To Recieve" name="tab" className="appearance-none" onChange={() => setTab('To Recieve')}/>
                                <label htmlFor="To Recieve" className={`py-2 px-6 hover:bg-white transition delay-50 rounded-md cursor-pointer ${tab === 'To Recieve' ? 'bg-white shadow dark:bg-button-hover' : 'bg-gray-100'} dark:bg-dark-button dark:hover:bg-button-hover text-gray-700 dark:text-gray-50 transition delay-50`}>To Recieve</label>
                            
                                <input type="radio" id="Completed" name="tab" className="appearance-none" onChange={() => setTab('Completed')}/>
                                <label htmlFor="Completed" className={`py-2 px-6 hover:bg-white transition delay-50 rounded-md cursor-pointer ${tab === 'Completed' ? 'bg-white shadow dark:bg-button-hover' : 'bg-gray-100'} dark:bg-dark-button dark:hover:bg-button-hover text-gray-700 dark:text-gray-50 transition delay-50`}>Completed</label>
                            </div>
                            {tab === 'Orders' &&
                                <div className="dark:bg-dark-card flex flex-col gap-4 p-4 bg-gray-100 rounded-md transition delay-50">
                                    <div className="flex items-center gap-2">
                                        <Image src='/third.jpeg' height={110} width={110} objectFit='contain' className="cursor-pointer rounded-md"/>
                                        <div>
                                            <p className="text-xl text-gray-700 dark:text-gray-50 transition delay-50">Sample shirt <span className="text-sm text-gray-800 dark:text-gray-400 transition delay-50">2pcs</span></p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: wheat</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: M</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">₱2,798</p>
                                            <button className="py-1 px-10 rounded-md text-sm text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-dark-button dark:hover:bg-button-hover hover:bg-gray-100 transition delay-50">View order</button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Image src='/second.jpeg' height={110} width={110} objectFit='contain' className="cursor-pointer rounded-md"/>
                                        <div>
                                            <p className="text-xl text-gray-700 dark:text-gray-50 transition delay-50">Sample shirt <span className="text-sm text-gray-800 dark:text-gray-400 transition delay-50"></span></p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: wheat</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: M</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">₱1,299</p>
                                            <button className="py-1 px-10 rounded-md text-sm text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-dark-button dark:hover:bg-button-hover hover:bg-gray-100 transition delay-50">View order</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            {tab === 'To Pay' &&
                                <div className="dark:bg-dark-card flex flex-col gap-4 p-4 bg-gray-100 rounded-md transition delay-50">
                                    <div className="flex items-center gap-2">
                                        <Image src='/third.jpeg' height={110} width={110} objectFit='contain' className="cursor-pointer rounded-md"/>
                                        <div>
                                            <p className="text-xl text-gray-700 dark:text-gray-50 transition delay-50">Sample shirt <span className="text-sm text-gray-800 dark:text-gray-400 transition delay-50">2pcs</span></p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: wheat</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: M</p>
                                            <p className="text-sm text-blue-600 transition delay-50 dark:text-blue-400">Subtotal: ₱2,798</p>
                                            <button className="py-1 px-10 rounded-md text-sm text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-dark-button dark:hover:bg-button-hover hover:bg-gray-100 trasition delay-50">Pay now</button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Image src='/second.jpeg' height={110} width={110} objectFit='contain' className="cursor-pointer rounded-md"/>
                                        <div>
                                            <p className="text-xl text-gray-700 dark:text-gray-50 transition delay-50">Sample shirt <span className="text-sm text-gray-800 dark:text-gray-400 transition delay-50"></span></p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: wheat</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: M</p>
                                            <p className="text-sm text-blue-600 transition delay-50 dark:text-blue-400">Subtotal: ₱1,299</p>
                                            <button className="py-1 px-10 rounded-md text-sm text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-dark-button dark:hover:bg-button-hover hover:bg-gray-100 transition delay-50">Pay now</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <input type='button' value="Pay now ₱4,097" className="text-2xl text-blue-600 py-2 w-full rounded-md bg-gray-300 cursor-pointer hover:bg-gray-200 transition delay-50 dark:bg-dark-button dark:hover:bg-button-hover transition delay-50 dark:text-blue-400"/>
                                    </div>
                                </div>
                            }
                            {tab === 'To Ship' &&
                                <div className="dark:bg-dark-card flex flex-col gap-4 p-4 bg-gray-100 rounded-md transition delay-50">
                                    <div className="flex items-center gap-2">
                                        <Image src='/third.jpeg' height={110} width={110} objectFit='contain' className="cursor-pointer rounded-md"/>
                                        <div>
                                            <p className="text-xl text-gray-700 dark:text-gray-50 transition delay-50">Sample shirt <span className="text-sm text-gray-800 dark:text-gray-400 transition delay-50">2pcs</span></p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: wheat</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: M</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">₱2,798</p>
                                            <p className="text-sm text-green-700 dark:text-green-400 transition delay-50">Shipped out to drop off (29-9-21)</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            {tab === 'To Recieve' &&
                                <div className="dark:bg-dark-card flex flex-col gap-4 p-4 bg-gray-100 rounded-md transition delay-50">
                                    <p className="text-sm text-gray-500 dark:text-gray-300 text-center transition delay-50">Nothing to show.</p>
                                </div>
                            }
                            {tab === 'Completed' &&
                                <div className="dark:bg-dark-card flex flex-col gap-4 p-4 bg-gray-100 rounded-md transition delay-50">
                                     <div className="flex items-center gap-2">
                                        <Image src='/fourth.png' height={110} width={110} objectFit='contain' className="cursor-pointer rounded-md"/>
                                        <div>
                                            <p className="text-xl text-gray-700 dark:text-gray-50 transition delay-50">Sample shirt <span className="text-sm text-gray-800 dark:text-gray-400 transition delay-50"></span></p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Color: wheat</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-50 transition delay-50">Size: M</p>
                                            <button className="text-sm py-1 px-10 text-white bg-yellow-500 rounded-md mt-1">Rate now</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}