import React from 'react'
import Container from '../Container'

function Quote() {
  return (
    <section className="pb-20 md:pb-24 lg:pb-32 px-4 text-white">
        <div class="green absolute top-[0%] -translate-x-1/2 left-[0%] !h-[30%] !blur-3xl -z-22"></div>
      <Container className="relative">
<div className='m-auto'>
<div className="w-full max-w-[1000px] line m-auto" ></div>
    <div className='quote py-6 px-3'>
        <p className='font-[#fff] text-9xl '>“</p>
        <h1 className='text-[#ffffffb7] text-5xl font-[300] text-left pb-4'>
        We wish to see an <span className='font-[600] text-[#fff]'> exploit-free</span>  web3 that is safe, secure and comfortable for everyone to use. 
        </h1>

        <div>
            <h1 className='text-[#ffffffb7] text-5xl font-[300] text-right py-4'>
            We are <span className='font-[600] text-[#fff]'>  persistently</span> working on increasingly advanced technologies in security space for <span className='font-[600] text-[#fff]'>  mass adoption of protocols.</span>  
            </h1>
            <p className='font-[#fff] text-9xl  rotate-180'>
            “
            </p>
        </div>
        
    </div>
    <div className="w-full max-w-[1000px] line m-auto"></div>

</div>
        </Container>
        </section>
  )
}

export default Quote