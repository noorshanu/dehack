import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container'
import Twitter from '../../public/icons/Twitter.svg'
import Github from '../../public/icons/Github.svg'
import Telegram from '../../public/icons/Telegram.svg'
import LinkedIn from '../../public/icons/LinkedIn.svg'
import Logo from '@/public/logo.png'
import FooterList from './FooterList'

const Footer = ({ width }) => {
  return (
    <footer className="mt-10 text-[#929292] m-auto sm:mx-auto">
      <Container className="m-auto sm:mx-auto">
        <div className="w-full line"></div>

        <div className="py-16 lg:py-16 px-10 lg:px-16 flex flex-wrap flex-col items-start md:items-center md:flex-row gap-10 lg:justify-between m-auto sm:m-0">
          <div className="m-auto text-center sm:m-0">
            <Link href="/">
              
              <Image src={Logo} alt='' className='w-auto h-[90px] pb-6 m-auto'/>
            
            </Link>
            <p className="md:text-lg font-[300] -mt-4 text-white spacing">
              Using AI to secure Web3.
            </p>
          </div>

          <FooterList className="m-auto sm:m-0">
            <ul className="flex flex-col m-auto sm:m-0 text-center sm:text-start">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>{' '}
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>{' '}
              </li>
            </ul>
          </FooterList>

          <FooterList className="m-auto sm:m-0 ">
          <li className="flex items-center gap-3">
            <a href="https://twitter.com/DeHackAI"><Image src={Twitter} alt="Twitter" width={25} /></a>
              
            </li>
            <li className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/dehack/"><Image src={LinkedIn} alt="LinkedIn" width={25} /></a>
              
            </li>
            <li className="flex items-center gap-3">
            <a href="https://discord.com/users/DeHack#8560"><Image src={Github} alt="Github" width={25} /></a>
            </li>
            <li className="flex items-center gap-3">
              <a href="https://t.me/DeHackAI "><Image src={Telegram} alt="Telegram" width={25} /></a>
              
            </li>
          </FooterList>
        </div>
        <div className="w-full footer-line"></div>
        <div className="text-center p-4">
          <p
            className="spacing text-sm md:text-lg tracking-widest footer-text font-thin md:font-normal text-white md:text-inherit"
            style={{ fontFamily: '__IBM_Plex_Mono_830e4a' }}
          >
            All Rights Reserved {width >= 768 ? '|' : <br />} DeHack 2023
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
