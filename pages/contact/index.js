import Head from 'next/head'
import Image from 'next/image'
import { IBM_Plex_Mono } from 'next/font/google'
import Header from '@/elements/Header'
import Grid2 from '@/public/icons/Grid2.svg'
import Footer from '@/elements/Footer'
import useWindowSize from '@/hooks/useSize'
import ContactPage from '@/elements/AboutHero/ContactPage'

const IBM = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '700', '400', '600'],
})

export default function Contact() {
  const { width } = useWindowSize()
  return (
    <>
      <Head>
        <title>DeHack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <title>
          DeHack is a real-time monitoring and threat intelligence tool, for
          blockchain projects, that smartly detects malicious activity and
          mitigates the impact.
        </title>
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

        <link rel="icon" href="/favicon.png" />

       
      </Head>
      <Header />
      <main className="bg-[#000000]/95 backdrop-blur-lg min-h-screen">
    
        
        <ContactPage image={Grid2} IBM={IBM} />
        <Footer width={width} IBM={IBM} />  
       
      </main>
    </>
  )
}
