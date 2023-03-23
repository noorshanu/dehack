import detectOS from '@/utils/detectOS'
import React from 'react'
import Container from '../Container'

const Waitlist = ({ IBM }) => {
  return (
    <section className="py-20 px-4 text-white" id="join">
      <Container className="relative">
        {typeof window !== 'undefined' && detectOS() !== 'IOS' && (
          <div className="flex items-center absolute gradient">
            <div className="green"></div>
            <div className="blue"></div>
          </div>
        )}
        <div className="p-8 md:p-12 lg:p-32 bg-black/50 flex flex-col text-center items-center gap-4 border border-white/20 rounded-[20px] md:rounded-[40px]">
          <h3 className="text-2xl md:text-3xl">Join Our</h3>
          <h2
            className={`${IBM.className} uppercase font-bold text-5xl md:text-7xl`}
          >
            WAITLIST
          </h2>
          <p className="max-w-[400px] text-sm md:text-xl font-light spacing">
            Be one of the first users to try DeHack beta when we first launch.
            <br />
          </p>
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
        </div>
      </Container>
    </section>
  )
}

export default Waitlist
