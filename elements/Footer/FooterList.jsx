import React from 'react'

const FooterList = ({
  children,

 
}) => {
  return (
    <div
      
      
      className="w-full md:w-fit footer-list flex items-center md:items-start flex-col  md:rounded-none py-3.5 md:p-0 max-h-[150px] md:max-h-full cursor-pointer md:cursor-auto overflow-y-hidden gap-2 sm:gap-4 m-auto sm:m-0 "
    >
   
      <div className="w-full md:w-fit items-center sm:items-start flex flex-col gap-3 ">
     
        <ul className="flex md:flex gap-6  font-light md:font-normal tracking-widest">
          {children}
        </ul>
      </div>
    </div>
  )
}

export default FooterList
