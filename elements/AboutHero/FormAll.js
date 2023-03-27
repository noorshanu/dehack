import React,{useState} from 'react'



function FormAll() {
    const [userData, setUserData] = useState({
        yourName: "",
        CompanyName: "",
        
        email: "",
        
        message: "",
      });
    
      let name, value;
      const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
    
        setUserData({ ...userData, [name]: value });
      };
    
      // connect with firebase
      const submitData = async (event) => {
        event.preventDefault();
        const { yourName, companyName,  email, message } = userData;
    
        if (yourName && companyName && email  && message) {
          const res = fetch(
            "https://dehack-conatct-default-rtdb.firebaseio.com/userDataRecords.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                yourName,
                companyName,
                email,
                message,
              }),
            }
          );
    
          if (res) {
            setUserData({
              yourName: "",
              comapnyName: "",
              email: "",
              message: "",
            });
            alert("Thanks for filling the form. We will get back to you in appropriate time.");
          } else {
            alert("plz fill the data");
          }
        } else {
          alert("plz fill the data");
        }
      };

  return (
   <>
   <form className="flex flex-col gap-4 w-full max-w-[600px] mt-10" method='POST'>
            <label className="text-[#fff] text-start">Your Name*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
              placeholder="Your Name"
              type="text"
              name='yourName'
              value={userData.yourName}
              onChange={postUserData}
            />

            <label className="text-[#fff] text-start">Company Name*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
              placeholder="Company Name"
              type="text"
              name='companyName'
              value={userData.companyName}
              onChange={postUserData}
            />

            <label className="text-[#fff] text-start">Email*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-8"
              placeholder="Email"
              type="email"
              name='email'
              value={userData.email}
              onChange={postUserData}
            />
            <label className="text-[#fff] text-start">Message*</label>
            <textarea
              class="resize-y p-3 rounded-md outline-none border-none pl-4 text-black h-[200px]"
              placeholder="Message"
              name='message'
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

export default FormAll