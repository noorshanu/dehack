import React from 'react'

function FormAll() {
  return (
   <>
   <form className="flex flex-col gap-4 w-full max-w-[600px] mt-10">
            <label className="text-[#fff] text-start">Your Name*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
              placeholder="Your Name"
              type="text"
            />

            <label className="text-[#fff] text-start">Company Name*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
              placeholder="Company Name"
              type="text"
            />

            <label className="text-[#fff] text-start">Email*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
              placeholder="Email"
              type="email"
            />
            <label className="text-[#fff] text-start">Message*</label>
            <textarea
              class="resize-y p-3 rounded-md outline-none border-none pl-4 text-black h-[200px]"
              placeholder="Message"
            ></textarea>
            <button
              type="button"
              onClick={() => alert('Hello')}
              className="px-10 md:w-[150px] h-[45px] border-[3px] mx-auto md: border-white rounded-md mt-auto text-white"
            >
              Submit
            </button>
          </form>
   </>
  )
}

export default FormAll