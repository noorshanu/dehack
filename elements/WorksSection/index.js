import Container from '../Container'
import WorkItem from './WorkItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import Next from '../../public/icons/Next.svg'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import { useRef } from 'react'
import Image from 'next/image'

const WorksSection = ({ images, width }) => {
  const prevRef = useRef()
  const nextRef = useRef()
  return (
    <section className="pb-20 md:pb-24 lg:pb-32 px-4 text-white">
      <Container className="relative">
        <div className="flex flex-col gap-10 lg:gap-14 items-center">
          <h3 className="font-[250] px-14 md:px-0 text-3xl md:text-7xl text-center spacing">
            How <span className="font-normal">DeHack</span> Secures
          </h3>
          
          <div className="w-full max-w-[1000px] line"></div>
         
          {width >= 768 && (
            <div className="hidden md:grid grid-cols-4 works-wrapper md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-20 mt-10">
              <WorkItem
                image={images[0]}
                title="DeFi"
                desc="Prevent draining of funds using proactive security"
              />
              <WorkItem
                image={images[1]}
                title="Institutions"
                desc="Closely monitor High volume transaction and Detect targeted attacks"
              />
              <WorkItem
                image={images[2]}
                title="NFT"
                desc="Secure your NFT Marketplaces and NFT projects"
              />
              <WorkItem
                image={images[3]}
                title="Metaverse / GameFi"
                desc="Defend your Metaverse from malicious attacks"
              />
              {/* <WorkItem 
                    image={images[4]}  
                    title='DeFi/DeFi2.0/ CeDeFi'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                />
                <WorkItem 
                    image={images[5]}  
                    title='NFT/NFT Fi/ Governance'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                />
                <WorkItem 
                    image={images[6]}  
                    title='Metaverse/Gov Token/ GameFi'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                />
                <WorkItem 
                    image={images[7]}  
                    title='Wallets/ lP/ Treasury/ vaults'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                /> */}
            </div>
          )}
          {width < 768 && (
            <>
              <Swiper
                slidesPerView="1"
                spaceBetween={16}
                navigation={{ prevEl: '.prev', nextEl: '.next' }}
                modules={[Navigation]}
                className="mySwiper max-w-full"
              >
                <SwiperSlide className="!grid grid-cols-2 gap-4">
                  <WorkItem
                    image={images[0]}
                    title="DeFi"
                    desc="Prevent draining of funds using proactive security"
                  />
                  <WorkItem
                    image={images[1]}
                    title="Institutions"
                    desc="Closely monitor High volume transaction and Detect targeted attacks"
                  />
                  <WorkItem
                    image={images[2]}
                    title="NFT"
                    desc="Secure your NFT Marketplaces and NFT projects"
                  />
                  <WorkItem
                    image={images[3]}
                    title="Metaverse / GameFi"
                    desc="Defend your Metaverse from malicious attacks"
                  />
                </SwiperSlide>
                {/* <SwiperSlide className="!grid grid-cols-2 gap-4">
                <WorkItem 
                    image={images[0]}  
                    title='DeFi/DeFi2.0/ CeDeFi'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                />
                <WorkItem 
                    image={images[1]}  
                    title='NFT/NFT Fi/ Governance'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                />
                <WorkItem 
                    image={images[2]}  
                    title='Metaverse/Gov Token/ GameFi'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                />
                <WorkItem 
                    image={images[3]}  
                    title='Wallets/ lP/ Treasury/ vaults'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                />
                </SwiperSlide> */}
              </Swiper>
              <div className="flex justify-center gap-2">
                <button className="prev rotate-180 transitions" ref={prevRef}>
                  <Image src={Next} alt="prev" />
                </button>
                <button className="next transitions" ref={nextRef}>
                  <Image src={Next} alt="next" />
                </button>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  )
}

export default WorksSection
