import React from 'react'
import Button from '@/components/Button'
import detectOS from '@/utils/detectOS'
import Image from 'next/image'

import Container from '../Container'
import FormAll from './FormAll'

function ConnectUs({ image }) {
  return (
    <section className="text-center relative landing-section" id='join'>
      <Container className="py-36 pb-48 lg:py-48 lg:pb-52">
        <div className="hidden md:block absolute inset-0 -z-10 lines">
          <Image
            height={1000}
            width={4000}
            src={image}
            alt="Landing"
            className="w-full h-full lines-image mx-auto"
          />
        </div>
        <h3 className="font-[300] px-14 md:px-0 text-3xl md:text-7xl text-center spacing text-[#fff] mb-10">
        Connect With <span className="font-normal">Us</span>  
      
          </h3>
          <div className=" w-full max-w-[600px] line m-auto mb-6"></div>
          <p className='text-[#8D8D8D]  max-w-[530px] m-auto'>Join us in our journey to make web3 a safer and healthier experience for everyone. </p>
        {typeof window !== 'undefined' && detectOS() !== 'IOS' && (
          <div className="flex items-center absolute gradient">
            <div className="green"></div>
            <div className="blue"></div>
          </div>
        )}
        <div className='m-auto flex justify-center'>
       <FormAll/>
        </div>
   
      </Container>
    </section>
  )
}

export default ConnectUs
