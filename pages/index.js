import Head from 'next/head'
import Image from 'next/image'
import { IBM_Plex_Mono } from 'next/font/google'
import Header from '@/elements/Header'
import Rectangle from '@/public/Rectangle.svg'
import Defi from '@/public/icons/Defi.svg'
import Icon1 from '@/public/icons/Icon1.gif'
import Icon2 from '@/public/icons/Icon2.gif'
import Icon3 from '@/public/icons/Icon3.gif'
import Grid2 from '@/public/icons/Grid2.svg'
import Cross from '@/public/icons/cross.svg'
import Supported from '@/public/icons/Supported.svg'
import SupportedMobile from '@/public/icons/SupportedMobile.svg'
import Footer from '@/elements/Footer'
import LandingSection from '@/elements/LandingSection'
import StatsSection from '@/elements/StatsSection'
import ServicesSection from '@/elements/ServicesSection'
import WorksSection from '@/elements/WorksSection'
import Banner from '@/elements/Banner'
import Explanation from '@/elements/Explanation'
import Mission from '@/elements/Mission'
import Waitlist from '@/elements/Waitlist'
import Metaverse from '@/public/icons/dex.png'
import Governance from '@/public/icons/Governance.svg'
import Wallet from '@/public/icons/Wallet.svg'
import Web3 from '@/public/icons/Web3.svg'
import Container from '@/elements/Container'
import useWindowSize from '@/hooks/useSize'
import CountUp from 'react-countup';
import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(
  () => import('../components/crisp'),
  { ssr: false }
)
const IBM = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '700', '400', '600'],
})

export default function Home() {
  const { width } = useWindowSize()
  return (
    <>
      <Head>
        
        <title>
          DeHack is a real-time monitoring and threat intelligence tool, for
          blockchain projects, that smartly detects malicious activity and
          mitigates the impact.
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ik.imagekit.io/l4k8brcjb/dehack/favicon.png?updatedAt=1681468319878" />
        <meta charSet="utf-8" />

        <meta name="description" content="DeHack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="title"
          content="DeHack is a real-time monitoring and threat intelligence tool, for blockchain projects, that smartly detects malicious activity and mitigates the impact."
        />
        <meta
          name="keywords"
          content="DeHack is a real-time monitoring and threat intelligence tool, for blockchain projects, that smartly detects malicious activity and mitigates the impact."
        />
        <meta
          name="description"
          content="DeHack is a real-time monitoring and threat intelligence tool, for blockchain projects, that smartly detects malicious activity and mitigates the impact."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://DeHack.ai/" />
        <meta property="og:site_name" content="DeHack" />
        <meta
          property="og:title"
          content="DeHack is a real-time monitoring and threat intelligence tool, for blockchain projects, that smartly detects malicious activity and mitigates the impact."
        />
        <meta
          property="og:description"
          content="DeHack is a real-time monitoring and threat intelligence tool, for blockchain projects, that smartly detects malicious activity and mitigates the impact."
        />
        <meta property="og:image" content="/_next/static/media/card.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/_next/static/media/card.png" />
        <meta
          property="twitter:title"
          content="DeHack is a real-time monitoring and threat intelligence tool, for blockchain projects, that smartly detects malicious activity and mitigates the impact."
        />
        <meta name="twitter:site" content="@DeHack" />
        <meta name="twitter:creator" content="@DeHack" />
        <meta
          property="twitter:description"
          content="DeHack is a real-time monitoring and threat intelligence tool, for blockchain projects, that smartly detects malicious activity and mitigates the impact."
        />
        <meta property="twitter:image" content="/_next/static/media/card.png" />
        <meta name="fortmatic-site-verification" content="u93afMgAyFfi5z0o" />
        <meta name="next-head-count" content="28" />
        <link rel="icon" href="/favicon.png" />
       
      </Head>
      <Header image={Cross} />
      <main className="bg-[#000000]/95 backdrop-blur-lg min-h-screen">
        <LandingSection image={Grid2} IBM={IBM} />
        <StatsSection IBM={IBM} />
        <ServicesSection
          width={width}
          images={[Rectangle, Icon2, Icon1, Icon3]}
          IBM={IBM}
        />
        <WorksSection
          width={width}
          images={[
            Defi,
            Governance,
            Metaverse,
            Wallet,
            Defi,
            Governance,
            Metaverse,
            Web3,
          ]}
        />
        <section>
          <Container>
            <div className="flex gap-2 items-center">
              <div className="supported-line flex-1 hidden md:block"></div>
              <h4 className="text-xl mx-auto md:text-4xl uppercase text-white md:text-[#8D8D8D] font-[250] tracking-[3px] md:tracking-wider px-6">
                Supported Blockchains
              </h4>
              <div className="supported-line rotate-180 flex-1 hidden md:block"></div>
            </div>
            <Image
              width={width >= 768 ? 1400 : 250}
              height={120}
              className="mx-auto mt-5 md:mt-10"
              src={width >= 768 ? Supported : SupportedMobile}
              alt="Supported"
            />
          </Container>
        </section>
        <Banner />
        <Explanation width={width} />
        <Mission />
        <section className="py-20 px-4  text-white text-center">
          <div className="mx-auto flex flex-col items-center gap-6 max-w-2xl">
            <p>
              {/* <span className={`text-7xl font-bold`}>350</span> */}
              <CountUp start={0} end={350} enableScrollSpy={true} delay={0} className='text-7xl font-bold' />

              <span className={`text-7xl dollar ${IBM.className} font-bold`}>
                +
              </span>
            </p>
            <p className="text-xl md:text-3xl font-[250] max-w-xl spacing">
              projects have <span className="font-normal">signed</span> up to
              try our Beta.
            </p>
            <p
              className={`md:text-xl px-4 md:px-0 text-[#CFCFCF] font-light ${IBM.className}`}
            >
              Limited spots remaining!
            </p>
          </div>
        </section>
        <Waitlist IBM={IBM} />
        <Footer width={width} IBM={IBM}  />
        <CrispWithNoSSR />
      </main>
    </>
  )
}
