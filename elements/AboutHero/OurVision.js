import Container from '../Container'
import Lottie from 'react-lottie'
import WorkItem from './AboutItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import Next from '../../public/icons/Next.svg'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import { useRef } from 'react'
import Image from 'next/image'
import Meta from '@/public/comp.json'
import Second from '@/public/increase.json'
import Third from '@/public/sphere.json'

const OurVision = ({ images, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Meta,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }


  const SecondBox = {
    loop: true,
    autoplay: true,
    animationData: Second,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }


  const ThirdBox = {
    loop: true,
    autoplay: true,
    animationData: Third,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const prevRef = useRef()
  const nextRef = useRef()
  return (
    <section className="pb-20 md:pb-24 lg:pb-32 px-4 text-white">
      <Container className="relative">
        <div className="stats_container flex flex-col gap-14 items-center bg-[#111111] p-14 lg:p-24 lg:py-24 xl:py-16 text-white mx-auto !rounded-[30px] relative">
          <div className="flex flex-col gap-10 lg:gap-14 items-center">
            <h3 className="font-[250] px-14 md:px-0 text-3xl md:text-7xl text-center spacing">
              Our <span className="font-normal">Vision</span>
            </h3>
            <div className=" w-full max-w-[800px] line"></div>
            {width >= 768 && (
              <div className="hidden md:grid grid-cols-3 works-wrapper md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 gap-y-20 mt-10">
                <div className="p-4 py-6 md:p-5 md:py-8 2xl:p-8 text-white border border-white bg-[#111111] flex flex-col gap-5 rounded-lg md:rounded-[20px] w-full md:w-[240px] 2xl:w-[280px]">
                  <Lottie
                    style={{ margin: 0 }}
                    options={ThirdBox}
                    className="loti-1"
                    width={100}
                  />

                  <p className="text-xs md:text-base 2xl:text-xl font-light md:font-light tracking-[1px]">
                    The web3 technology has the potential to be a revolutionary
                    force which can change the way humans interact with
                    technology, and eventually have a positive impact on the
                    world.
                  </p>
                </div>
               



                <div className="p-4 py-6 md:p-5 md:py-8 2xl:p-8 text-white border border-white bg-[#111111] flex flex-col gap-5 rounded-lg md:rounded-[20px] w-full md:w-[240px] 2xl:w-[280px]">
                  <Lottie
                    style={{ margin: 0 }}
                    options={SecondBox}
                    className="loti-1"
                    width={100}
                  />

                  <p className="text-xs md:text-base 2xl:text-xl font-light md:font-light tracking-[1px]">
                  The ethos of blockchain technology is community, and we are working towards making sure that this community is safe for everyone to be a part of.
                  </p>
                </div>
                <div className="p-4 py-6 md:p-5 md:py-8 2xl:p-8 text-white border border-white bg-[#111111] flex flex-col gap-5 rounded-lg md:rounded-[20px] w-full md:w-[240px] 2xl:w-[280px]">
                  <Lottie
                    style={{ margin: 0 }}
                    options={defaultOptions}
                    className="loti-1"
                    width={100}
                    height={120}
                  />

                  <p className="text-xs md:text-base 2xl:text-xl font-light md:font-light tracking-[1px]">
                  We believe that security concerns are the primary reason for slow growth of web3 adopters and we are working to create a solution to that problem.
                  </p>
                </div>
              </div>
            )}
            {width < 768 && (
              <>
                {/* <Swiper
                  slidesPerView="1"
                  spaceBetween={16}
                  navigation={{ prevEl: '.prev', nextEl: '.next' }}
                  modules={[Navigation]}
                  className="mySwiper max-w-full"
                >
                  <SwiperSlide className="!grid grid-cols-1 gap-4"> */}
                  <div className="p-4 py-6 md:p-5 md:py-8 2xl:p-8 text-white border border-white bg-[#111111] flex flex-col gap-5 rounded-lg md:rounded-[20px] w-full md:w-[240px] 2xl:w-[280px]">
                  <Lottie
                    style={{ margin: 0 }}
                    options={ThirdBox}
                    className="loti-1"
                    width={100}
                  />

                  <p className="text-xs md:text-base 2xl:text-xl font-light md:font-light tracking-[1px]">
                    The web3 technology has the potential to be a revolutionary
                    force which can change the way humans interact with
                    technology, and eventually have a positive impact on the
                    world.
                  </p>
                </div>
               



                <div className="p-4 py-6 md:p-5 md:py-8 2xl:p-8 text-white border border-white bg-[#111111] flex flex-col gap-5 rounded-lg md:rounded-[20px] w-full md:w-[240px] 2xl:w-[280px]">
                  <Lottie
                    style={{ margin: 0 }}
                    options={SecondBox}
                    className="loti-1"
                    width={100}
                  />

                  <p className="text-xs md:text-base 2xl:text-xl font-light md:font-light tracking-[1px]">
                  The ethos of blockchain technology is community, and we are working towards making sure that this community is safe for everyone to be a part of.
                  </p>
                </div>





                 <div className="p-4 py-6 md:p-5 md:py-8 2xl:p-8 text-white border border-white bg-[#111111] flex flex-col gap-5 rounded-lg md:rounded-[20px] w-full md:w-[240px] 2xl:w-[280px]">
                  <Lottie
                    style={{ margin: 0 }}
                    options={defaultOptions}
                    className="loti-1"
                    width={100}
                    height={120}
                  />

                  <p className="text-xs md:text-base 2xl:text-xl font-light md:font-light tracking-[1px]">
                  We believe that security concerns are the primary reason for slow growth of web3 adopters and we are working to create a solution to that problem.
                  </p>
                </div>
                
                  {/* </SwiperSlide>
                </Swiper> */}
                {/* <div className="flex justify-center gap-2">
                  <button className="prev rotate-180 transitions" ref={prevRef}>
                    <Image src={Next} alt="prev" />
                  </button>
                  <button className="next transitions" ref={nextRef}>
                    <Image src={Next} alt="next" />
                  </button>
                </div> */}
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurVision
