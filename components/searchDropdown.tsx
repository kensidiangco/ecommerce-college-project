import { Disclosure, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { SearchCircleIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/client'

export default function SearchDropdown({CName}) {
    const [session] = useSession()

    const handleSearch = (e) => {
        e.preventDefault()


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
                                        className="text-gray-700 dark:text-white dark:text-white text-gray-900 flex rounded-md items-center w-full px-2 py-2 text-sm"
                                    >
                                        <span className="flex items-center">
                                            <SearchCircleIcon
                                                className="w-10 h-10 mr-2 text-violet-400"
                                                aria-hidden="true" />
                                            <form onSubmit={handleSearch} autoComplete="off" autoCapitalize="off">
                                                <input type="search" placeholder="Search" id="productSearch" className="p-2 rounded w-full" />
                                                <input type="submit" value="search" className="hidden cursor-pointer"/>
                                            </form>
                                        </span>
                                    </button>
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    )
}