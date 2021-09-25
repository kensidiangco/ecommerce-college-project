import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <div className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-50">
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  )
}
export default MyApp
