import React from 'react'

const FooterList = ({
  children,
  active,
  handleFooterActive,
  number,
  title,
  IBM,
}) => {
  return (
    <div
      style={active ? { maxHeight: '500px' } : {}}
      onClick={() => handleFooterActive(number)}
      className="w-full md:w-fit footer-list flex items-center md:items-start flex-col rounded-xl md:rounded-none py-3.5 md:p-0 max-h-[50px] md:max-h-full cursor-pointer md:cursor-auto overflow-y-hidden gap-4"
    >
      <div className="flex justify-center items-center relative w-full">
        <h5
          className={`font-light md:font-bold md:text-xl text-white spacing ${IBM.className}`}
        >
          {title}
        </h5>
        <p
          style={{ opacity: active ? 0 : 1 }}
          className="absolute md:hidden transitions right-12 text-2xl"
        >
          +
        </p>
        <p
          style={{ opacity: active ? 1 : 0 }}
          className="absolute md:hidden transitions right-12 text-2xl"
        >
          -
        </p>
      </div>
      <div className="w-full md:w-fit items-center flex flex-col gap-3">
        <span className="h-0.5 bg-gray-400/60 rounded-lg w-[60%] mx-auto md:hidden"></span>
        <ul className="flex md:flex flex-col gap-2  font-light md:font-normal tracking-widest">
          {children}
        </ul>
      </div>
    </div>
  )
}

export default FooterList
