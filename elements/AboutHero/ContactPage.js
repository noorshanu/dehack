import React from 'react'

import detectOS from '@/utils/detectOS'
import Image from 'next/image'

import Container from '../Container'
import FormAll from './FormAll'

function ContactPage({ image }) {
  return (
    <section className="text-center relative landing-section">
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
        <h3 className="font-[250] px-14 md:px-0 text-3xl md:text-7xl text-center spacing text-[#fff] mb-4">
         <span className="font-normal">Contact</span> Us 
        </h3>
        <div className=" w-full max-w-[800px] line m-auto mb-6"></div>
        <p className="text-[#8D8D8D] max-w-[770px] m-auto  font-[300] text-center text-sm p-4 sm:p-0  sm:text-2xl  ">
        Please fill out the form below and DeHack team will reach out to you soon 
        </p>
        
        {typeof window !== 'undefined' && detectOS() !== 'IOS' && (
          <div className="flex items-center absolute gradient">
            <div className="green"></div>
            <div className="blue"></div>
          </div>
        )}
        <div className="m-auto flex justify-center p-8 sm:p-0">
         <FormAll/>
        </div>
      </Container>
    </section>
  )
}

export default ContactPage
