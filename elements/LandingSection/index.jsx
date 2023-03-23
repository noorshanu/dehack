import Button from '@/components/Button'
import detectOS from '@/utils/detectOS'
import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import LandingText from './LandingText'

const LandingSection = ({ IBM, image }) => {
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
        <h3 className="text-[#CFCFCF] text-2xl md:text-4xl">
          Use Intelligence To
        </h3>
        <div className="h-[70px] md:h-[148px] overflow-hidden my-6 md:my-10">
          <div className="flex flex-col text-animation">
            <LandingText IBM={IBM} text="MONITOR" />
            <LandingText IBM={IBM} text="DETECT" />
            <LandingText IBM={IBM} text="PREVENT" />
            <LandingText IBM={IBM} text="MONITOR" />
          </div>
        </div>
        <h3 className="text-[#CFCFCF] text-2xl md:text-4xl capitalize">
          against hacks
        </h3>
        <p className="text-[#8D8D8D] spacing px-10 md:px-0 md:text-[25px] leading-tight py-8 max-w-[700px] mx-auto">
          Securing Web3.0 against attacks using our State-Of-The-Art{' '}
          <span className="text-white"> AI Engine</span>.
        </p>
        <Button hasShadow borderWidth="3px" text="Join Waitlist" link="#join" />
        {/* <p className='mx-auto underline text-lg text-[#CFCFCF] my-6'>Learn More</p> */}
      </Container>
    </section>
  )
}

export default LandingSection
