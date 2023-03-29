import React, { useState } from 'react'

function FormAbout() {
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
  
    const [userData, setUserData] = useState({
      yourName: '',
      
      email: '',
      message: '',
    })
  
    const postUserData = (event) => {
      const { name, value } = event.target;
      setUserData({ ...userData, [name]: value });
  
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrorMsg("Please enter a valid email address.");
        } else {
          setErrorMsg("");
        }
      }
    }
  
    const submitData = async (event) => {
        event.preventDefault()
        const { yourName,  email, message } = userData
      
        if (yourName &&  email && message && !errorMsg) {
          const res = fetch(
            'https://dehack-conatct-default-rtdb.firebaseio.com/aboutUserDataRecords.json',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                yourName,
                
                email,
                message,
              }),
            }
          )
      
          if (res) {
            setUserData({
              yourName: '',
              
              email: '',
              message: '',
            })
            alert(
              'Thanks for filling the form. We will get back to you in appropriate time.'
            )
          } else {
            alert('Please fill the right information')
          }
        } else {
          alert('Please fill the right information')
        }
      }
  

  return (
    <>
      <form
        className="flex flex-col gap-4 w-full max-w-[600px] mt-10 p-5 sm:p-0"
        method="POST"
      >
        <label className="text-[#fff] text-start">Your Name*</label>
        <input
          className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
          
          type="text"
          name="yourName"
          value={userData.yourName}
          onChange={postUserData}
          required
        />s

    
   
<label className="text-[#fff] text-start">Email*</label>
     
        <input
          className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
          
          id='email'
          type="email"
          name="email"
          value={userData.email}
          onChange={postUserData}
        />
         {errorMsg && <div className="error text-white">{errorMsg}</div>}
         <label className="text-[#fff] text-start">Message*</label>
        <textarea
          className="resize-y p-3 rounded-md outline-none border-none pl-4 text-black h-[200px]"
         
          type='text'
          name="message"
          value={userData.message}
          onChange={postUserData}
        
        ></textarea>
        <button
          type="submit"
          onClick={submitData}
          className="px-10 md:w-[150px] h-[45px] border-[3px] mx-auto md: border-white rounded-md mt-auto text-white"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default FormAbout
