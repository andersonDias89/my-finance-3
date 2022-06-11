import '../styles/globals.css'
import { ContactContextProvider } from '../contexts/ContactContext'

function MyApp({ Component, pageProps }) {
  return (
    <ContactContextProvider>
      <Component {...pageProps} />
    </ContactContextProvider>
  )
}

export default MyApp
