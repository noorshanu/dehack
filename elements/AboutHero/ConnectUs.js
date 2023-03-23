import React from 'react'
import Button from '@/components/Button'
import detectOS from '@/utils/detectOS'
import Image from 'next/image'

import Container from '../Container'


function ConnectUs({image}) {
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
        {typeof window !== 'undefined' && detectOS() !== 'IOS' && (
          <div className="flex items-center absolute gradient">
            <div className="green"></div>
            <div className="blue"></div>
          </div>
        )}
         <form className="flex flex-col gap-4 w-full max-w-[400px] mt-10">
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black"
              placeholder="Name"
              type="text"
            />
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black"
              placeholder="Email"
              type="email"
            />
            <button
              type="button"
              onClick={() => alert('Hello')}
              className="px-10 md:w-[200px] h-[45px] border-[3px] mx-auto md: border-white rounded-md mt-auto"
            >
              Submit
            </button>
          </form>
        
      </Container>
    </section>
  )
}

export default ConnectUs