import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import 'tailwindcss/tailwind.css'
import store from '../store'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'next-auth/client'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider session={pageProps.session}>
          <ThemeProvider attribute="class">
            <div className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-50">
              <Navigation />
              <Component {...pageProps} />
              <Footer />
            </div>
          </ThemeProvider>
        </Provider>
      </PersistGate>
    </ReduxProvider>
  )
}
export default MyApp
