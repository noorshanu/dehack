import Button from '@/components/Button'
import React from 'react'
import Container from '../Container'

const Banner = () => {
  return (
    <section className="py-20 lg:py-32 px-4 text-white">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <div className="w-full line"></div>
          <div className="gradient-gray p-10 py-16 flex flex-col gap-10 items-center text-center">
            <h3 className="text-[20px] md:text-[45px] max-w-[900px] font-light">
              <span className="font-normal">Secure</span> your project with the
              most advanced <span className="font-normal">Web3 security</span>{' '}
              system <span className="font-normal">now!</span>
            </h3>
            <Button
              borderWidth="3px"
              hasShadow
              text="Join Waitlist"
              link="#join"
            />
          </div>
          <div className="w-full line"></div>
        </div>
      </Container>
    </section>
  )
}

export default Banner
