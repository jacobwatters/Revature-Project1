import Head from 'next/head'
import useSessionStorage from '../hooks/useSessionStorage'
import '../styles/globals.css'
import Layout from '../components/layout'
import Login from './login'
function MyApp({ Component, pageProps }) {
  const jwt = useSessionStorage('jwt')

  const isLoggedIn = () => {
    if (jwt===''){
      window.location.replace('http://localhost:3000/login')
    }
  }

  return (
    <>
       <Head>
        <title>Initech Employee Reimbursement</title>
        <meta name="description" content="The reimbursement solution for Initech Employees" />
        <link rel="icon" href="/initechlogo.ico" />
      </Head>
      {jwt && (
          <Component {...pageProps} />
      )}
      {!jwt && (
        <Login/>
      )

      }
    </>
  )
}

export default MyApp
