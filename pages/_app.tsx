import '../styles/globals.css'
import Layout from '../Components/Layout'
import type { AppProps } from 'next/app'
import { Archivo } from '@next/font/google'

const archivo = Archivo()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
