import React from 'react'

import detectOS from '@/utils/detectOS'
import Image from 'next/image'

import Container from '../Container'

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
        <p className="text-[#8D8D8D] max-w-[950px] m-auto text-3xl font-[300] text-center">
        Please fill out the form below and DeHack team will reach out to you soon 
        </p>
        
        {typeof window !== 'undefined' && detectOS() !== 'IOS' && (
          <div className="flex items-center absolute gradient">
            <div className="green"></div>
            <div className="blue"></div>
          </div>
        )}
        <div className="m-auto flex justify-center p-8 sm:p-0">
          <form className="flex flex-col gap-4 w-full max-w-[600px] mt-10">
            <label className="text-[#fff] text-start">Your Name*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
              placeholder="Your Name"
              type="text"
            />

            <label className="text-[#fff] text-start">Company Name*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
              placeholder="Company Name"
              type="text"
            />

            <label className="text-[#fff] text-start">Email*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
              placeholder="Email"
              type="email"
            />
            <label className="text-[#fff] text-start">Message*</label>
            <textarea
              class="resize-y p-3 rounded-md outline-none border-none pl-4 text-black h-[200px]"
              placeholder="Message"
            ></textarea>
            <button
              type="button"
              onClick={() => alert('Hello')}
              className="px-10 md:w-[200px] h-[45px] border-[3px] mx-auto md: border-white rounded-md mt-auto text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactPage
