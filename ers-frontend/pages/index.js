import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './login.js'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import Layout from '../components/layout'
import useSessionStorage from '../hooks/useSessionStorage'
import Nav from '../components/Nav/Nav'
import Manager from '../components/Mangager/Manager'
import Employee from '../components/Employee/Employee'
import { getUserId, isEmployee, isManager } from '../helpers/jwthelpers'
import Reimbursement from '../components/Reimbursement/Reimbursement'
import Router from 'next/router'
import { useEffect } from 'react'
// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(localStorageKey) || ""
//   );
//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [value]);
//   return [value, setValue];
// };

// function isLoggedIn(value) {
//   const jwt = value ? value : sessionStorage.getItem("jwt");
//   console.log(jwt);
//   return !(jwt === "null" || jwt === null || jwt === "");
// }





export default function Home(data) {
  
  const jwt = useSessionStorage('jwt')
    // router = useRouter

    // useEffect(()=>{
    //     if(jwt===''){
    //         Router.push('login')

    //     }
    // }), [jwt]
    //console.log('UID ' + JSON.stringify(jwtDecode(jwt)))
    const logout = () => {
        
        sessionStorage.setItem('jwt', '')
        Router.push('login')
        Router.reload
    }

  return (
      <Layout>
          {isEmployee()&& (
            <Employee reimbursements={data.data}/>
              
          )}
         {isManager() && (
            <Manager reimbursements={data.data}/>
        )}
    </Layout>
  )
}

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	
	
	const data = await axios.get('http://localhost:8080/api/reimbursements').then(
    (res) => {
      res.data.map(r => {
        r.status = r.status.status
        r.type = r.type.type
      })
      return res.data
  })
  console.log(data)

	return {
	  props: {
		  data
	  },
	}
}
