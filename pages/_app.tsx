import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Instagram Clone by Singh</title>
        <Component {...pageProps} />
      </Head>
    </>
  )
}

export default MyApp
