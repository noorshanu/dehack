import Image from 'next/image'
import React from 'react'

const AboutItem = ({ image, title, desc }) => {
  return (
    <div className="p-4 py-6 md:p-5 md:py-8 2xl:p-8 text-white border gradient-border bg-[#111111] flex flex-col gap-5 rounded-lg md:rounded-[20px] w-full md:w-[240px] 2xl:w-[280px]">
      <Image
        className="w-[45px] aspect-square md:w-[60px] 2xl:w-[85px]"
        src={image}
        alt={title}
        height={85}
        width={85}
      />
      
      <p className="text-xs md:text-base 2xl:text-xl font-light md:font-light tracking-[1px]">
        {desc}
      </p>
    </div>
  )
}

export default AboutItem
