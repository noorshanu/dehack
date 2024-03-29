
import Image from 'next/image'
import Container from './Container'
import Menu from '../public/icons/Menu.svg'
import Logo from '@/public/logo.png'
import Link from 'next/link'
import { useState } from 'react'
import OutsideClickDetector from '@/hooks/OutsideClickDetector'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useRouter } from 'next/router'
import { animateScroll, scroller } from 'react-scroll'
const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact Us' },
]

const Header = ({ image }) => {
  const router = useRouter()
  const currentPath = router.pathname
  const [sidebarVisible, setSidebarVisibility] = useState(false)
  const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false))
  const isAbove1024px = useMediaQuery('(min-width: 1024px)')
  const scrollToElement = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }
  return (
    <>
      <header className="py-6 px-8 lg:px-4 fixed w-full top-0 z-50 bg-header">
        <Container className="xl:!px-20">
          <div className="flex justify-between items-center gap-4 relative">
          <Link href="/" className="text-white font-[900] text-3xl">
              <Image src='https://ik.imagekit.io/l4k8brcjb/dehack/logo.png' alt='' className='w-auto h-[58px]' width={58} height={58}/>
            </Link>

            <div
              ref={sidebarRef}
              className={`flex flex-col lg:flex-row lg:justify-end flex-1 fixed top-0 right-0 w-[280px] lg:w-auto h-screen lg:h-auto lg:static bg-black lg:bg-transparent py-10 px-12 lg:py-0 lg:px-0 lg:p-0 border-l-2 lg:border-none transition-all duration-300 z-[200] ${
                !sidebarVisible
                  ? 'translate-x-[280px] lg:translate-x-0'
                  : 'translate-x-0'
              }`}
            >
              {!isAbove1024px && (
                <div className="flex items-center justify-between mb-6 lg:hidden">
                  <Link href="/" className="text-white font-[900] text-2xl">
                    DeHack
                  </Link>

                  <button
                    className="block w-[20px]"
                    onClick={() => setSidebarVisibility(false)}
                  >
                    <Image src={image} className="invert w-full" alt="" />
                  </button>
                </div>
              )}

              {/*  */}
              <nav className="flex space-y-4 lg:space-y-[unset] flex-col lg:flex-row lg:gap-12 lg:items-center lg:justify-center lg:flex-1 text-[#8D8D8D] text-lg font-[300]  mb-8 lg:mb-0">
                {navItems.map((item) => (
                  <Link href={item.path} key={item.path}>
                    <p
                      className={
                        currentPath === item.path
                          ? 'active underline underline-offset-4'
                          : 'text-[#a6a6a6] hover:text-white '
                      }
                    >
                      {item.label}
                    </p>
                  </Link>
                ))}
              </nav>

              <div>
                <Link
                  href="/#join"
                  className="block mx-[unset] text-sm gradient-border relative z-10 bg-black p-3 text-[15px] sm:text-[18px] px-6 sm:px-10 md:px-14 text-white spacing cursor-pointer sm:text-lg"
                >
                  <p onClick={() => scrollToElement('join')}>Join Waitlist</p>
                </Link>
              </div>
            </div>

            {!isAbove1024px && (
              <div
                className={`black-screen z-[100] ${
                  sidebarVisible ? 'show' : ''
                }`}
              ></div>
            )}

            {!isAbove1024px && (
              <button
                className="lg:hidden"
                onClick={() => setSidebarVisibility(true)}
              >
                <Image src={Menu} alt="Nav bar" />
              </button>
            )}
          </div>
        </Container>
      </header>
    </>
  )
}

export default Header
