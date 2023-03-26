import React, { useState } from 'react'
import Container from '../Container'
import ExplanationItem from './ExplanationItem'
import Alert from '../../public/icons/Alert.svg'
import Monitor from '../../public/icons/Monitor.svg'
import Detect from '../../public/icons/Detect.svg'
import Prevent from '../../public/icons/Prevent.svg'
import Image from 'next/image'
import ExplanationMobile from './ExplanationMobile'
import detectOS from '@/utils/detectOS'

const data = {
  Monitor: {
    items: [
      'Feed Smart Contract Address',
      'Advance screening using DeHack Radar',
      'Constant Health Tracking',
    ],
    icon: Monitor,
  },
  Detect: {
    items: [
      'Identifying potential targeted threats',
      'Analyzing patterns of malicious activities',
      'Predicting attacks using Security Intelligence',
    ],
    icon: Detect,
  },
  Alert: {
    items: [
      'Lightning fast abnormality alarm',
      'Notifying targeted malicious interactions',
    ],
    icon: Alert,
  },
  Prevent: {
    items: ['Avoiding risk', 'Mitigating malicious attacks'],
    icon: Prevent,
  },
}

const Explanation = ({ width }) => {
  const [explanation, setExplanation] = useState('Monitor')

  return (
    <section className="py-20 px-4 text-white">
      <Container className="relative xl:!px-20">
        {typeof window !== 'undefined' && detectOS() !== 'IOS' && (
          <div className="flex items-center absolute gradient">
            <div className="green"></div>
            <div className="blue"></div>
          </div>
        )}
        <div className="bg-[#141414] rounded-[20px] md:rounded-[40px] p-10 py-16 md:p-16 lg:p-24 flex flex-col gap-12 items-center">
          <h3 className="text-center font-thin text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">
            How <span className="font-normal">DeHack</span> Secures..
          </h3>
          <div className='green-gret'></div>
          <div className="w-full max-w-2xl line"></div>
          <div className="flex flex-col gap-16 lg:gap-28">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:px-6 lg:px-20">
              <div className="flex flex-col gap-4">
                <ExplanationItem
                  explanation={explanation}
                  setExplanation={setExplanation}
                  text="Monitor"
                />
                {explanation === 'Monitor' && width < 768 && (
                  <ExplanationMobile data={data} explanation="Monitor" />
                )}
              </div>
              <div className="flex flex-col gap-4">
                <ExplanationItem
                  explanation={explanation}
                  setExplanation={setExplanation}
                  text="Detect"
                />
                {explanation === 'Detect' && width < 768 && (
                  <ExplanationMobile data={data} explanation="Detect" />
                )}
              </div>
              <div className="flex flex-col gap-4">
                <ExplanationItem
                  explanation={explanation}
                  setExplanation={setExplanation}
                  text="Alert"
                />
                {explanation === 'Alert' && width < 768 && (
                  <ExplanationMobile data={data} explanation="Alert" />
                )}
              </div>
              <div className="flex flex-col gap-4">
                <ExplanationItem
                  explanation={explanation}
                  setExplanation={setExplanation}
                  text="Prevent"
                />
                {explanation === 'Prevent' && width < 768 && (
                  <ExplanationMobile data={data} explanation="Prevent" />
                )}
              </div>
            </div>
            {width >= 768 && (
              <div className="hidden md:flex how-works-gradient p-8 px-10 md:px-16 xl:px-20 rounded-[20px] min-h-[215px] xl:items-center flex-col-reverse md:flex-col xl:flex-row relative">
                <ul className="flex flex-col transitions gap-2 list-none text-lg md:text-xl 2xl:text-2xl md:font-[250] spacing">
                  {data[explanation].items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="xl:absolute right-0  mx-auto">
                  {data[explanation].icon && (
                    <Image
                      src={data[explanation].icon}
                      className="w-[295px] fade lg:w-[400px] lg:h-[250px] transitions fade"
                      alt={explanation}
                      width={400}
                      height={400}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Explanation
