import React from 'react'
import Container from '../Container'

const StatsSection = ({ IBM }) => {
  return (
    <section className="pb-10 lg:pb-12 px-4 ">
      <Container>
        <div className="relative">
          <div className="green absolute top-1/4 -translate-x-1/2 left-[92%] !h-[50%] !blur-3xl -z-22"></div>
          <div className="blue absolute top-1/4 -translate-x-1/2 left-28 !h-[50%] !blur-3xl -z-2"></div>
          <div className="stats_container flex flex-col gap-14 items-center gradient-border p-14 lg:p-24 lg:py-24 xl:py-32 text-white mx-auto !rounded-[30px] relative">
            <h3 className="text-center font-thin text-2xl tracking-[1px] md:text-5xl xl:text-6xl 2xl:text-7xl">
              Due to the <span className="text-white font-normal">lack</span> of{' '}
              <br />{' '}
              <span className="text-white font-normal">Proactive Security</span>
            </h3>
            <div className=" w-full max-w-[1000px] line"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-14">
              <div className="flex flex-col gap-3 items-start">
                <p>
                  <span
                    className={`text-3xl xl:text-4xl 2xl:text-[65px] dollar ${IBM.className} font-bold`}
                  >
                    $
                  </span>
                  <span
                    className={`text-3xl xl:text-4xl 2xl:text-[65px] font-bold`}
                  >
                    6.15
                  </span>
                  <span
                    className={`text-xl xl:text-2xl 2xl:text-3xl ${IBM.className} pl-1`}
                  >
                    Bn
                  </span>
                </p>
                <p className="font-light md:font-normal spacing md:!tracking-normal md:text-lg 2xl:text-xl">
                  Reported loss in 2021 and 2022
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <p>
                  <span
                    className={`text-3xl xl:text-4xl 2xl:text-[65px] dollar ${IBM.className} font-bold`}
                  >
                    $
                  </span>
                  <span
                    className={`text-3xl xl:text-4xl 2xl:text-[65px] font-bold`}
                  >
                    164
                  </span>
                  <span
                    className={`text-xl xl:text-2xl 2xl:text-3xl ${IBM.className} pl-1`}
                  >
                    Mn
                  </span>
                </p>
                <p className="font-light md:font-normal spacing md:!tracking-normal md:text-lg 2xl:text-xl">
                  Already Lost in the month of February of 2023
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <p>
                  <span
                    className={`text-3xl xl:text-4xl 2xl:text-[65px] font-bold`}
                  >
                    450
                  </span>
                  <span
                    className={`text-3xl xl:text-4xl 2xl:text-[65px] dollar ${IBM.className} font-bold`}
                  >
                    +
                  </span>
                </p>
                <p className="font-light md:font-normal spacing md:!tracking-normal md:text-lg 2xl:text-xl">
                  Major attacks happened in the year 2022 alone
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StatsSection
