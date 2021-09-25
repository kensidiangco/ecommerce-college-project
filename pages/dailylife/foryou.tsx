import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function ForYou() {
    return (
        <>
            <Head>
                <title>For you</title>
            </Head>
            <div className="py-10 container mx-auto">
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-50">For you</h1>
                <div className="flex justify-center py-5">
                    <div className="flex flex-wrap">
                        <div className="grid grid-cols-4 gap-x-5 md:gap-x-10 gap-y-5">

                            <div className="flex flex-col bg-gray-50 dark:bg-dark-card rounded-md shadow-md">
                                <Image objectFit="contain" src="/third.jpeg" width={200} height={200} className="rounded-md"/>
                                <div className="py-2 px-4">
                                    <p>Sample Shirt</p>
                                    <p>Colors: Wheat</p>
                                    <p>Size: S,M,L</p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-50 dark:bg-dark-card rounded-md shadow-md">
                                <Image objectFit="contain" src="/third.jpeg" width={200} height={200} className="rounded-md"/>
                                <div className="py-2 px-4">
                                    <p>Sample Shirt</p>
                                    <p>Colors: Wheat</p>
                                    <p>Size: S,M,L</p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-50 dark:bg-dark-card rounded-md shadow-md">
                                <Image objectFit="contain" src="/third.jpeg" width={200} height={200} className="rounded-md"/>
                                <div className="py-2 px-4">
                                    <p>Sample Shirt</p>
                                    <p>Colors: Wheat</p>
                                    <p>Size: S,M,L</p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-50 dark:bg-dark-card rounded-md shadow-md">
                                <Image objectFit="contain" src="/third.jpeg" width={200} height={200} className="rounded-md"/>
                                <div className="py-2 px-4">
                                    <p>Sample Shirt</p>
                                    <p>Colors: Wheat</p>
                                    <p>Size: S,M,L</p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-50 dark:bg-dark-card rounded-md shadow-md">
                                <Image objectFit="contain" src="/third.jpeg" width={200} height={200} className="rounded-md"/>
                                <div className="py-2 px-4">
                                    <p>Sample Shirt</p>
                                    <p>Colors: Wheat</p>
                                    <p>Size: S,M,L</p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-50 dark:bg-dark-card rounded-md shadow-md">
                                <Image objectFit="contain" src="/third.jpeg" width={200} height={200} className="rounded-md"/>
                                <div className="py-2 px-4">
                                    <p>Sample Shirt</p>
                                    <p>Colors: Wheat</p>
                                    <p>Size: S,M,L</p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-50 dark:bg-dark-card rounded-md shadow-md">
                                <Image objectFit="contain" src="/third.jpeg" width={200} height={200} className="rounded-md"/>
                                <div className="py-2 px-4">
                                    <p>Sample Shirt</p>
                                    <p>Colors: Wheat</p>
                                    <p>Size: S,M,L</p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-50 dark:bg-dark-card rounded-md shadow-md">
                                <Image objectFit="contain" src="/third.jpeg" width={200} height={200} className="rounded-md"/>
                                <div className="py-2 px-4">
                                    <p>Sample Shirt</p>
                                    <p>Colors: Wheat</p>
                                    <p>Size: S,M,L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}