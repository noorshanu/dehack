import React from 'react'

const Button = ({
  link,
  text,
  borderWidth = '2px',
  hasShadow = false,
  className,
}) => {
  return (
    <div className={'relative w-fit mx-auto group ' + className}>
      <a
        href={link}
        style={{ borderWidth }}
        className="gradient-border inline-block relative z-10 bg-black p-3 text-[18px] px-10 md:px-14 text-white spacing cursor-pointer sm:text-lg"
      >
        {text}
      </a>
      {hasShadow && (
        <div className="flex items-center absolute gradient -top-4 w-full !animate-none -z-2">
          <div className="green !w-[50%] !h-[80px] group-hover:!h-[100px] group-hover:!w-[120px] transitions !blur-xl"></div>
          <div className="blue !w-[50%] !h-[80px] group-hover:!h-[100px] group-hover:!w-[120px] transitions !blur-xl"></div>
        </div>
      )}
    </div>
  )
}

export default Button
