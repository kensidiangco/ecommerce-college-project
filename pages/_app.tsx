import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-gray-50 dark:bg-dark dark:text-gray-50 transition delay-150">
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default MyApp
