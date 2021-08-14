import Head from 'next/head'
import Link from 'next/link'

export default function AboutUs(){
    return (
        <>  
            <Head>
                <title>About us</title>
            </Head>
            <div className="container">
                <div className="container p-5 md:mx-10">
                    <h1 className="text-4xl font-semibold text-gray-600 dark:text-gray-50 py-5">About us</h1>                    
                    <div className="flex flex-col md:flex-row justify-center gap-4 space-y-2">
                        <div className="bg-gray-200 dark:bg-gray-800 p-10 rounded-xl md:w-1/2 filter shadow-lg">
                            <div className="text-2xl py-5">
                                <h2 className="text-gray-700 dark:text-gray-50">About</h2>
                            </div>
                            <div className="text-lg">
                                <p className="text-gray-700 dark:text-gray-50">Dailylife is an e-commerce shopping system project for our 2nd year college at <span className="text-blue-700 dark:text-indigo-200">Saint Jude College manila</span> in course of Bachelor Science in Information Technology.</p>
                                <p className="text-gray-700 dark:text-gray-50 mt-2">
                                    Dailylife can make life easier to do shop, specially to those people who are not have enough time to go in malls just to buy clothes.
                                </p> 
                                <p className="float-right text-blue-800 dark:text-indigo-100 text-sm mt-2">
                                    Dailylife ⓒ2021
                                </p> 
                            </div>
                        </div>

                        <div className="bg-gray-200 dark:bg-gray-800 p-10 rounded-xl md:w-1/2 filter shadow-lg">
                            <div className="text-2xl py-5">
                                <h2 className="text-gray-700 dark:text-gray-50">Goal</h2>
                            </div>
                            <div className="text-lg">
                                <p className="text-gray-700 dark:text-gray-50">Our goal is to provide a digitize way to sell an affordable, high quality and brand new products that will satisfy your daily life.</p>
                                <p className="text-gray-700 dark:text-gray-50 mt-2">
                                    We provide a fast delivery for your orders and you can be sure that your orders are well good and safe.
                                </p>
                                <p className="text-gray-700 dark:text-gray-50 mt-2">
                                    Dailylife is here to server you.
                                </p>
                                <p className="float-right text-blue-800 dark:text-indigo-100 text-sm mt-2">
                                    Dailylife ⓒ2021
                                </p> 
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="container p-5 md:mx-10">
                    <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-50 py-5">Developers</h1>

                    <div className="flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-10 justify-center place-items-center place-items-center m-5 space-y-5">
                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg md:w-80">  
                            <img src="/johnkenethsidiangco.jpg" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
                            <div className="mt-4 md:mt-px text-gray-800 dark:text-gray-50 px-5 pb-5">
                                <p className="md:text-lg text-blue-700 dark:text-indigo-200 font-semibold">John Keneth Sidiangco</p>
                                <p className="md:text-md">kensidiangco@gmail.com</p>
                                <p className="md:text-md">Saint Jude College Manila</p>
                                <p className="md:text-md">Developer</p>
                            </div>
                        </div>
                        
                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg md:w-80">  
                            <img src="/valencia.jpg" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
                            <div className="mt-4 md:mt-px text-gray-800 dark:text-gray-50 px-5 pb-5">
                                <p className="md:text-lg text-blue-700 dark:text-indigo-200 font-semibold">John Paul Valencia</p>
                                <p className="md:text-md">jpvalencia@gmail.com</p>
                                <p className="md:text-md">Saint Jude College Manila</p>
                                <p className="md:text-md">Developer</p>
                            </div>
                        </div>

                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg md:w-80">  
                            <img src="/nerio.jpg" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
                            <div className="mt-4 md:mt-px text-gray-800 dark:text-gray-50 px-5 pb-5">
                                <p className="md:text-lg text-blue-700 dark:text-indigo-200 font-semibold">Maria Joana Nerio</p>
                                <p className="md:text-md">joananerio30@gmail.com</p>
                                <p className="md:text-md">Saint Jude College Manila</p>
                                <p className="md:text-md">Developer</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-10 justify-center place-items-center place-items-center m-5 gap-5 space-y-5">
                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg md:w-80">  
                            <img src="/steph.jpg" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
                            <div className="mt-4 md:mt-px text-gray-800 dark:text-gray-50 px-5 pb-5">
                                <p className="md:text-lg text-blue-700 dark:text-indigo-200 font-semibold">Ma. Stephanie Oracoy</p>
                                <p className="md:text-md">oracoystephanie@gmail.com</p>
                                <p className="md:text-md">Saint Jude College Manila</p>
                                <p className="md:text-md">Developer</p>
                            </div>
                        </div>
                        
                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg w-full md:w-80">  
                            <img src="/brylle.png" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
                            <div className="mt-4 md:mt-px text-gray-800 dark:text-gray-50 px-5 pb-5">
                                <p className="md:text-lg text-blue-700 dark:text-indigo-200 font-semibold">Brylle Renzon Antonio</p>
                                <p className="md:text-md">antoniobrylle4@gmail.com</p>
                                <p className="md:text-md">Saint Jude College Manila</p>
                                <p className="md:text-md">Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}