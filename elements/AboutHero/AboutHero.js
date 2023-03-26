import Button from '@/components/Button'
import detectOS from '@/utils/detectOS'
import Image from 'next/image'
import React from 'react'
import Container from '../Container'


const AboutHero = () => {
  return (
    <section className="text-center relative landing-section">
              <div className="green1 absolute top-[0%] -translate-x-1/2 left-[0%] !h-[70%] !blur-3xl -z-22 w-[125px]"></div>
              <div className="blue2 absolute top-[0%] -translate-x-1/2 right-[0%] !h-[70%] !blur-3xl -z-22 w-[125px]"></div>
      <Container className="py-36 pb-48 lg:py-48 lg:pb-52">
        <div className="hidden md:block absolute inset-0 -z-10 lines">
        
        </div>
  
       
        <div className="h-[70px] md:h-[148px] overflow-hidden my-6 md:my-10">
          <div className="flex flex-col ">
            <h1 className="text-[#fff] text-2xl md:text-7xl">
        <span className='font-[800]'>
            Leading
            </span> the security front of 
          
            </h1>
            <h1 className="text-[#fff] text-2xl md:text-7xl">
            the <span className='font-[800]'>
            web3 revolution
            </span>
            </h1>
          </div>
        </div>
        
        <p className="text-[#8D8D8D] spacing px-10 md:px-0 md:text-[25px] leading-tight pt-8 pb-10 max-w-[900px] mx-auto text-center">
        We are creating infrastructure to make web3 space secure for generations to come.{' '}
        
        </p>
        <Button hasShadow borderWidth="3px" text="Join Waitlist" link="#join" />
      
      </Container>
    </section>
  )
}

export default AboutHero
