import Head from 'next/head'
import Link from 'next/link'

export default function AboutUs(){
    return (
        <>  
            <Head>
                <title>About us</title>
            </Head>
            <div>
                <div className="container p-5 mx-auto">
                    <h1 className="text-4xl font-semibold text-gray-600 dark:text-gray-50 py-5">About us</h1>                    
                    <div className="flex flex-col md:flex-row justify-center gap-4 space-y-5 md:space-y-0">
                        <div className="bg-gray-200 dark:bg-dark-card p-10 rounded-xl md:w-1/2 filter shadow-lg">
                            <div className="text-2xl py-5">
                                <h2 className="text-gray-700 dark:text-gray-50">About</h2>
                            </div>
                            <div className="text-lg">
                                <p className="text-gray-700 dark:text-gray-50">
                                    Dailylife is an e-commerce shopping system project for our 2nd year college of <span className="text-blue-700 dark:text-indigo-200">BSIT in Saint Jude College manila</span>.
                                </p>
                                <p className="text-gray-700 dark:text-gray-50 mt-2">
                                    Dailylife will make our lives more convenient to shop online specially to those people who does not have enough time to go to mall.
                                </p> 
                                <p className="float-right text-blue-800 dark:text-indigo-100 text-sm mt-2">
                                    Dailylife ⓒ2021
                                </p> 
                            </div>
                        </div>

                        <div className="bg-gray-200 dark:bg-dark-card p-10 rounded-xl md:w-1/2 filter shadow-lg">
                            <div className="text-2xl py-5">
                                <h2 className="text-gray-700 dark:text-gray-50">Goal</h2>
                            </div>
                            <div className="text-lg">
                                <p className="text-gray-700 dark:text-gray-50">Our goal is to provide a digitize way to sell an affordable, high quality and brand new products that will satisfy your daily life.</p>
                                <p className="text-gray-700 dark:text-gray-50 mt-2">
                                   We provide fast delivery of your parcel and we assure you that your orders are secured and handled with care.
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
                
                <div className="container p-5 mx-auto">
                    <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-50 py-5">Developers</h1>

                    <div className="flex flex-col md:flex-row flex-wrap md:gap-10 justify-center place-items-center place-items-center m-5 space-y-5 md:space-y-0">
                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-dark-card rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg md:w-80">  
                            <img alt="John Keneth Sidiangco" src="/johnkenethsidiangco.jpg" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
                            <div className="mt-4 md:mt-px text-gray-800 dark:text-gray-50 px-5 pb-5">
                                <p className="md:text-lg text-blue-700 dark:text-indigo-200 font-semibold">John Keneth Sidiangco</p>
                                <p className="md:text-md">kensidiangco@gmail.com</p>
                                <p className="md:text-md">Saint Jude College Manila</p>
                                <p className="md:text-md">Developer</p>
                            </div>
                        </div>
                        
                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-dark-card rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg md:w-80">  
                            <img alt="Valencia" src="/valencia.jpg" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
                            <div className="mt-4 md:mt-px text-gray-800 dark:text-gray-50 px-5 pb-5">
                                <p className="md:text-lg text-blue-700 dark:text-indigo-200 font-semibold">John Paul Valencia</p>
                                <p className="md:text-md">jpvalencia@gmail.com</p>
                                <p className="md:text-md">Saint Jude College Manila</p>
                                <p className="md:text-md">Developer</p>
                            </div>
                        </div>

                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-dark-card rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg md:w-80">  
                            <img alt="Nerio" src="/nerio.jpg" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
                            <div className="mt-4 md:mt-px text-gray-800 dark:text-gray-50 px-5 pb-5">
                                <p className="md:text-lg text-blue-700 dark:text-indigo-200 font-semibold">Maria Joana Nerio</p>
                                <p className="md:text-md">joananerio30@gmail.com</p>
                                <p className="md:text-md">Saint Jude College Manila</p>
                                <p className="md:text-md">Developer</p>
                            </div>
                        </div>

                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-dark-card rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg md:w-80">  
                            <img alt="Stephanie" src="/steph.jpg" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
                            <div className="mt-4 md:mt-px text-gray-800 dark:text-gray-50 px-5 pb-5">
                                <p className="md:text-lg text-blue-700 dark:text-indigo-200 font-semibold">Ma. Stephanie Oracoy</p>
                                <p className="md:text-md">oracoystephanie@gmail.com</p>
                                <p className="md:text-md">Saint Jude College Manila</p>
                                <p className="md:text-md">Developer</p>
                            </div>
                        </div>
                        
                        <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-dark-card rounded-2xl flex flex-col gap-4 md:rounded-2xl filter shadow-lg w-full md:w-80">  
                            <img alt="Brylle" src="/brylle.png" className="rounded-2xl object-contain filter shadow-lg transform hover:scale-95 transition duration-300"/>
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