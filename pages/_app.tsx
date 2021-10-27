import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className="app">
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>

    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
    // Layout(<Component {...pageProps} />)
  ) 
    
}
export default MyApp
