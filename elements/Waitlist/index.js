import detectOS from '@/utils/detectOS'
import { useEffect, useRef ,useState} from 'react';
import Container from '../Container'
import {  scroller } from 'react-scroll';
import { useRouter } from 'next/router';

const Waitlist = ({ IBM }) => {
  const router = useRouter();
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      const { id } = router.query;
      if (id) {
        scroller.scrollTo(id, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      }
    }
  };

  useEffect(() => {
    // Add event listener to handle navigation events
    const handleRouteChange = () => {
      scrollToTarget();
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    // Remove event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [userData, setUserData] = useState({
    yourName: '',
   
    email: '',
    
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
    const { yourName,  email} = userData

    if (yourName  && email && !errorMsg) {
      const res = fetch(
        'https://dehack-conatct-default-rtdb.firebaseio.com/userDataRecords.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            yourName,
           
            email,
         
          }),
        }
      )

      if (res) {
        setUserData({
          yourName: '',
         
          email: '',
        
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
    <section className="py-20 px-4 text-white" id="join" ref={targetRef}>
      <Container className="relative">
        {typeof window !== 'undefined' && detectOS() !== 'IOS' && (
          <div className="flex items-center absolute gradient">
            <div className="green"></div>
            <div className="blue"></div>
          </div>
        )}
        <div className="p-8 md:p-12 lg:p-32 bg-black/50 flex flex-col text-center items-center gap-4 border border-white/20 rounded-[20px] md:rounded-[40px]">
          <h3 className="text-2xl md:text-3xl">Join </h3>
          <h2
            className={`${IBM.className} uppercase font-bold text-5xl md:text-7xl`}
          >
            WAITLIST
          </h2>
          <p className="max-w-[400px] text-sm md:text-xl font-light spacing">
            Be one of the first users to try DeHack beta when we first launch.
            <br />
          </p>
          <form className="flex flex-col gap-4 w-full max-w-[400px] mt-10 p-5 sm:p-0" method='POST'>
           
          <label className="text-[#fff] text-start">Your Name*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-9"
              placeholder="Name"
              type="text"
              name='yourName'
              value={userData.yourName}
              onChange={postUserData}
            />

          <label className="text-[#fff] text-start">Email*</label>
            <input
              className="p-3 rounded-md outline-none border-none pl-4 text-black mb-6"
              placeholder="Email"
              type="email"
              name='email'
              value={userData.email}
              onChange={postUserData}
            
            />
                 {errorMsg && <div className="error text-white">{errorMsg}</div>}
            <button
              type="button"
              onClick={submitData}
              className="px-10 md:w-[200px] h-[45px] border-[3px] mx-auto md: border-white rounded-md mt-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Waitlist
