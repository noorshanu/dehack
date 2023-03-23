import Image from 'next/image'
import React from 'react'

const ExplanationMobile = ({ explanation, data }) => {
  return (
    <div className="md:hidden explanation-mobile how-works-gradient p-8 px-10 md:px-16 xl:px-20 rounded-[20px] min-h-[215px] flex xl:items-center flex-col-reverse md:flex-col xl:flex-row relative">
      <ul className="flex flex-col transitions gap-2 list-none md:text-xl 2xl:text-2xl md:font-[250] spacing">
        {data[explanation].items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="xl:absolute right-0 -top-16 mx-auto">
        {data[explanation].icon && (
          <Image
            src={data[explanation].icon}
            className="w-[295px] fade lg:w-[400px] lg:h-[400px] transitions fade"
            alt={explanation}
            width={400}
            height={400}
          />
        )}
      </div>
    </div>
  )
}

export default ExplanationMobile
