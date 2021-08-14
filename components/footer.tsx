import Link from 'next/link'

export default function Footer() {
    return(
        <footer className="bg-gray-200 shadow-lg dark:bg-black text-gray-700 dark:text-gray-50 transition delay-100">
            <div className="py-10 px-10 md:flex justify-center md:space-x-20 text-center grid gap-3">
                <ul>
                    <h2 className="text-lg font-semibold mb-2">Social</h2>
                    <li className="mb-1"><a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noreferrer">Facebook</a></li>
                    <li className="mb-1"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
                    <li className="mb-1"><a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
                </ul>
                <ul>
                    <h2 className="text-lg font-semibold  mb-2">
                        <Link href="/dailylife/contact">
                            Contact us
                        </Link>
                    </h2>
                    <li className="mb-1">0912-567-1234</li>
                    <li className="mb-1">dailylife@dailylife.com</li>
                </ul>
                <ul>
                    <h2 className="text-lg font-semibold mb-2">Address</h2>
                    <li className="mb-1">123 Dimalaman St. Tondo, Manila</li>
                </ul>
            </div>
            <div className="text-center p-2">
                <small className="flext-basis">Group-5 ITE-031-Project Dailylife (c) 2021</small>
            </div>
      </footer>
    )
}