import React, { useState, useEffect } from 'react'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/facepen/png/logo.png'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { client } from '../client'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  })

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data))
          const { id, name, picture } = res.data
          const doc = {
            _id: id,
            _type: 'user',
            userName: name,
            image: picture
          }
          client.createIfNotExists(doc)
            .then(() => {
              navigate('/', { replace: true })
            })
        })
        .catch((err) => console.log(err))
    }
  }, [user])

  return (
    <div className='flex flex-col items-center justify-start h-screen'>
    <div className='relative h-full w-full'>
      <video
          src={shareVideo}
          type='video/mp4'
          loop
          autoPlay
          controls={false}
          muted
          className='w-full h-full object-cover'
      />
      <div className='absolute top-0 bottom-0 left-0 right-0
      bg-blackOverlay flex flex-col justify-center items-center'>
          <div className='p-5'>
              <img src={logo} width='130px' alt='logo' />
          </div>
          <div className='shadow-2xl'>
            <button
                onClick={loginGoogle}
                className='bg-white px-5 py-3 rounded-md'
            >Sign in with Google</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Login
