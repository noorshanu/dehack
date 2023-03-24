import Image from "next/image"
import Link from "next/link"
import Container from '../Container'
import Twitter from '../../public/icons/Twitter.svg'
import Medium from '../../public/icons/Medium.svg'
import Github from '../../public/icons/Github.svg'
import Telegram from '../../public/icons/Telegram.svg'
import LinkedIn from '../../public/icons/LinkedIn.svg'
import { useState } from 'react'
import FooterList from "./FooterList"

const Footer = ({ IBM, width }) => {
  const [footerItem, setFooterItem] = useState(0)

  const handleFooterActive = (number) => {
    if (number === footerItem) return setFooterItem(0)
    setFooterItem(number)
  }
  return (
    <footer className="mt-10 text-[#929292]">
      <Container>
        <div className="w-full line"></div>
     
        <div className='py-16 lg:py-16 px-10 lg:px-16 flex flex-wrap flex-col items-center md:items-start md:flex-row gap-10 lg:justify-between'>
            <div>
                <Link href='/'>
                    <h2 className="md:-mt-4 stroke text-[60px] font-bold tracking-[0.08em] text-white md:text-transparent">DeHack</h2>
                </Link>
                <p className="md:text-lg font-[300] -mt-4 text-white spacing">Using AI to secure Web3.</p>
            </div>
       
          
            <FooterList active={footerItem === 3 } IBM={IBM} number={3}  handleFooterActive={handleFooterActive}>
              <ul className="flex flex-col">
              <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
               
              </ul>
               
            </FooterList>



            <FooterList active={footerItem === 1 } IBM={IBM} number={1}  handleFooterActive={handleFooterActive}>
                    <li className="flex items-center gap-3">
                        <Image src={Twitter} alt='Twitter' width={25} />
                        
                    </li>
                    <li className="flex items-center gap-3">
                        <Image src={LinkedIn} alt='LinkedIn' width={25} />
                      
                    </li>
                    <li className="flex items-center gap-3">
                        <Image src={Github} alt='Github' width={25} />
                      
                    </li>
                    <li className="flex items-center gap-3">
                        <Image src={Telegram} alt='Telegram' width={25} />
                       
                    </li>
                    <li className="flex items-center gap-3">
                        <Image src={Medium} alt='Medium' width={25} />
                       
                    </li>
            </FooterList>
        </div>
        <div className="w-full footer-line"></div>
        <div className="text-center p-4">
          <p className="spacing text-sm md:text-lg tracking-widest footer-text font-thin md:font-normal text-white md:text-inherit">
            All Rights Reserved {width >= 768 ? '|' : <br />} DeHack 2023
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
