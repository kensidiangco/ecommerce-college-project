import Link from 'next/link'

export default function Footer() {
    return(
        <footer className="bg-gray-200 shadow-lg dark:bg-black text-gray-700 dark:text-gray-50 transition delay-100">
            <div className="py-10 px-10 md:flex justify-center md:space-x-20 text-center grid gap-3">
                <ul className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold hover:underline py-px">
                        <Link href="/dailylife/contact">
                            Contact us!
                        </Link>
                    </h2>
                    <li>0921-401-5874</li>
                    <li>dailylife@gmail.com</li>
                </ul>
                <ul className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold py-px">Address</h2>
                    <li>123 Dimalaman St. Tondo, Manila</li>
                </ul>
            </div>
            <div className="text-center py-2">
                <small className="flext-basis">Group-5 ITE-031 Project Dailylife (c) 2021</small>
            </div>
      </footer>
    )
}