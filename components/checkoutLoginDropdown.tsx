import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { signIn } from 'next-auth/client'
import { useSession } from 'next-auth/client'

export default function CheckoutLoginDropdown() {
  const [session] = useSession()
  
  return (
    <div className="mt-2 py-2 text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="p-3 md:p-2 md:px-4 flex items-center bg-blue-500 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover rounded-md hover:bg-blue-400 transition delay-50 cursor-pointer">
            Proceed to checkout
            {!session && <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />}
          </Menu.Button>
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
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-50 hover:bg-gray-100 dark:bg-dark-button dark:hover:bg-button-hover divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition delay-50">
            <div className="px-1 py-1">
              {!session && <>
                <Menu.Item onClick={() => signIn('google', { callbackUrl: `${window.location.origin}/dailylife/checkout` })}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'text-gray-700 dark:text-white' : 'dark:text-white text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <span className="flex items-center gap-2 justify-center text-center">
                        <Image src="/googleLogo.png" width={30} height={30} objectFit="contain" loading="eager"/>
                        Login with Google
                      </span>
                    </button>
                  )}
                </Menu.Item>
              </>}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}