import React from 'react'
import Container from '../Container'

function Quote() {
  return (
    <section className="pb-20 md:pb-24 lg:pb-32 px-4 text-white">
      <Container className="relative">
<div className='m-auto'>
<div className="w-full max-w-[1000px] line m-auto" ></div>
    <div className='quote py-6 px-3'>
        <p className='font-[#fff] text-9xl '>“</p>
        <h1 className='font-[#fff] text-5xl font-[300] text-left pb-4'>
        We wish to see an exploit-free web3 that is safe, secure and comfortable for everyone to use. 
        </h1>

        <div>
            <h1 className='font-[#fff] text-5xl font-[300] text-right py-4'>
            We are persistently working on increasingly advanced technologies in security space for mass adoption of protocols.
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