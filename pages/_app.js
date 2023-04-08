import '@/styles/globals.css'
import Loader from '@/public/loader.svg'
import Image from 'next/image'
import { useState,useEffect } from 'react'
export default function App({ Component, pageProps }) {
  const [loading,setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
  <>
   {
      loading ?
      <div className='bg-black flex justify-center loader'>
        <Image src={Loader} alt=''/>
      </div>
      :<Component {...pageProps} />
   }
  </>
  )
}
