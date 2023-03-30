import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}
