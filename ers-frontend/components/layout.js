import useSessionStorage from '../hooks/useSessionStorage'
import Nav from '../components/Nav/Nav'
import Login from '../pages/login'
import useRouter from 'next/router'
import { useEffect } from 'react'
import Router from 'next/router'
import jwtDecode from 'jwt-decode'

export default function Layout({children}) {
    const jwt = useSessionStorage('jwt')
    // const router = useRouter

    // useEffect(()=>{
    //     if(!jwt){
    //         router.push('login')
    //     }
    // }), [jwt]
    const logout = () => {
        console.log('jwt' + JSON.stringify(jwtDecode(jwt)))
        sessionStorage.setItem('jwt', '')
        Router.push('/login')
        Router.reload
    }

    const isLoggedIn = () => {
        if (jwt===''){
          window.location.replace('http://localhost:3000/login')
        } 
      }
    
    return (
        <>
            <div>
                 <Nav logout={logout} jwt={jwt} />
                     <div className="flex-col pt-28 text-left font-bold lg:text-7xl text-6xl px-20 ">
                         <div className='flex-start justify-center items-center flex-col pt-5 text-center font-bold'>
                             <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
                                 <h1 className="text-center">Reimbursements</h1>
                             </div>
                             <main>{children}</main>
                     </div>
                 </div>
             </div>
            
            
           
        </>
        
    )
    
}