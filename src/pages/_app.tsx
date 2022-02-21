import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { store } from '../app/store'
import { Provider } from 'react-redux'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
