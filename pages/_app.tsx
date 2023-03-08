import '../styles/globals.css'
import Layout from '../Components/Layout'
import type { AppProps } from 'next/app'
import { Archivo } from 'next/font/google'
import Head from 'next/head'

const archivo = Archivo({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bfox</title>
        <meta name="description" content="A portfolio website for a web developer" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔩</text></svg>"
        />
      </Head>

      <style jsx global>{`
        html {
          font-family: ${archivo.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
