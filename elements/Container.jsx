import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full max-w-[1600px] md:px-4 lg:px-10 xl:px-40 mx-auto ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
