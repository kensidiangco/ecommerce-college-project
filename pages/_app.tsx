import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-50">
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default MyApp
