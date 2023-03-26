import Service from '@/components/Services'
import Monit from '@/components/Services/Monit'
import Prevent from '@/components/Services/Prevent'
import React from 'react'
import Container from '../Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

const ServicesSection = ({ images, IBM, width }) => {
  return (
    <section className="py-32 lg:py-52 text-white">
      <Container className="relative">
        <div className="flex top-1/4 blur-[200px] right-1/3 -z-2 items-center absolute gradient !animate-none">
          <div className="green !w-[400px] !h-[600px]"></div>
          <div className="blue !w-[400px] !h-[600px]"></div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-14 items-center relative z-0">
          <h3 className="font-[250] text-3xl px-16 spacing md:px-0 md:text-7xl text-center">
            How <span className="font-normal">DeHack</span> can help
          </h3>
          
          <div className=" w-full max-w-[1000px] line"></div>
          {width >= 768 && (
            <div className="hidden md:grid grid-cols-4 md:grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
              <Monit
                serviceTitle="Monitor"
                shortDesc="Track Real Time Activity Of Your Project"
                desc="Get unparalleled visibility and insights from 24x7 event monitoring and keep track of your application health."
                IBM={IBM}
              />
              <Service
                serviceTitle="Detect"
                shortDesc="State-Of-The-Art Incident Detection"
                desc="Examine all activities and predict potential attacks before they happen by using an intelligent threat identification machine"
                image={images[1]}
                IBM={IBM}
              />
              <Service
                serviceTitle="Alert"
                shortDesc="Lightning Fast Incident And Threat Alerts"
                desc="Triggers warning when activity is identified as potentially suspicious."
                image={images[2]}
                IBM={IBM}
              />
              <Prevent
                serviceTitle="Prevent"
                shortDesc="Threat Elimination Using Robust Mitigation Techniques "
                desc="Prevent advanced targeted attacks to less sophisticated attacks. Intelligence take charge and eliminate the threat rapidly. "
                IBM={IBM}
              />
            </div>
          )}
          {width < 768 && (
            <Swiper
              slidesPerView="1.1"
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper max-w-full !pb-10 !px-8"
            >
              <SwiperSlide>
                <Monit
                  serviceTitle="Monitor"
                  shortDesc="Track Real Time Activity Of Your Project"
                  desc="Get unparalleled visibility and insights from 24x7 event monitoring and keep track of your application health."
                  IBM={IBM}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Service
                  serviceTitle="Detect"
                  shortDesc="State-Of-The-Art Incident Detection"
                  desc="Examine all activities and predict potential attacks before they happen by using an intelligent threat identification machine"
                  image={images[1]}
                  IBM={IBM}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Service
                  serviceTitle="Alert"
                  shortDesc="Lightning Fast Incident And Threat Alerts"
                  desc="Triggers warning when activity is identified as potentially suspicious."
                  image={images[2]}
                  IBM={IBM}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Service
                  serviceTitle="Prevent"
                  shortDesc="Threat Elimination Using Robust Mitigation Techniques "
                  desc="Prevent advanced targeted attacks to less sophisticated attacks. Intelligence take charge and eliminate the threat rapidly. "
                  image={images[3]}
                  IBM={IBM}
                />
              </SwiperSlide>
            </Swiper>
          )}
          <h4 className="text-[25px] md:text-[45px] font-[250] text-center px-10 lg:px-20">
            DeHack brings <span className="font-normal">AI</span> to blockchain
            to improve{' '}
            <span className="font-normal">
              security, scalability, adoption & experience
            </span>
          </h4>
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
