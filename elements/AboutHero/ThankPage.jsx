import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container'
import Twitter from '../../public/icons/Twitter.svg'
import Github from '../../public/icons/Github.svg'
import Telegram from '../../public/icons/Telegram.svg'
import LinkedIn from '../../public/icons/LinkedIn.svg'


function ThankPage() {
  return (
    <div className='p-9 text-center'>
      <h1 className='text-white text-3xl sm:text-6xl font-[600] pb-6'>THANK YOU!</h1>
      <p className='text-white text-base pt-2 pb-9'>For Your Interest in DeHack. Our
        executive will reach out to you soon.
      </p>
      
        <div className='m-auto text-center'>
          <p className='text-white text-base'>you can follow us on social media to stay updated</p>

         <div className='m-auto pt-5 pb-2'>
          <ul className='text-center m-auto flex justify-center gap-4'>

          <li className="flex items-center gap-3">
              <Image src={Twitter} alt="Twitter" width={25} />
            </li>
            <li className="flex items-center gap-3">
              <Image src={LinkedIn} alt="LinkedIn" width={25} />
            </li>
            <li className="flex items-center gap-3">
              <Image src={Github} alt="Github" width={25} />
            </li>
            <li className="flex items-center gap-3">
              <Image src={Telegram} alt="Telegram" width={25} />
            </li>
          </ul>
     
          
         </div>
         
        </div>
    </div>
  )
}

export default ThankPage