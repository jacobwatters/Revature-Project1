import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSessionStorage from '../hooks/useSessionStorage'
import Router from 'next/router'
import {
  Button,
  TextField
} from "@material-ui/core";

function login() {
    const router = useRouter();
    const jwt = useSessionStorage('jwt')
    

    const postLogin = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/auth/signin',
            data: {
                usernameOrEmail: document.getElementById('loginusername').value,
                password: document.getElementById('loginpassword').value
            }
        }).then(function(response) {
            //console.log(jwtDecode(response.data.accessToken))
            sessionStorage.setItem('jwt', response.data.accessToken)
            Router.push('/')
            Router.reload
        })
        .catch(function(e) {
            console.log(e)
        })
    }

  return (
    <>
    <div className="min-h-full flex items-center justify-center mt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-18 w-auto"
            src='initech.png'
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
         <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="loginusername"
              label="Username"
              name="loginusername"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="loginpassword"
              label="Password"
              type="password"
              id="loginpassword"
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={postLogin}
            >
              Sign In
            </Button>
          </form>
      </div>
    </div>
  </>
    // <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
    //   <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
    //     <div className='w-3/5 p-5'>
    //       <p>Sign in</p>
    //       <form noValidate>
    //         <TextField
    //           variant="outlined"
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="loginusername"
    //           label="Username"
    //           name="loginusername"
    //           autoComplete="username"
    //           autoFocus
    //         />
    //         <TextField
    //           variant="outlined"
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="loginpassword"
    //           label="Password"
    //           type="password"
    //           id="loginpassword"
    //           autoComplete="current-password"
    //         />
    //         <Button
    //           fullWidth
    //           variant="contained"
    //           color="primary"
    //           onClick={postLogin}
    //         >
    //           Sign In
    //         </Button>
    //       </form>
    //     </div>
    //     <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-38'>
    //       <p>Sign up</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default login