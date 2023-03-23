import Image from 'next/image'

const Service = ({ image, IBM, serviceTitle, shortDesc, desc }) => {
  return (
    <div className="relative group inline-grid h-full">
      <div className="flex items-center absolute gradient top-[100%] group-hover:-top-4 w-full !animate-none -z-2 transitions opacity-0 group-hover:opacity-80">
        <div className="green !blur-[100px]"></div>
        <div className="blue !blur-[100px]"></div>
      </div>
      <div className="gradient-border !rounded-[15px] md:!rounded-[7px] md:min-w-[300px] relative z-10 p-6 md:px-12 2xl:px-20 hover:border-white transitions !border-2 md:!border-[3px]">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 md:items-center mb-4">
          <Image src={image} alt="Rect" width={80} height={80} />
          <div className="flex flex-col gap-1 2xl:gap-2">
            <h4
              className={`font-bold text-4xl md:text-xl lg:text-3xl 2xl:text-[36px] ${IBM?.className}`}
            >
              {serviceTitle}
            </h4>
            <p className="text-lg 2xl:text-xl">{shortDesc}</p>
          </div>
        </div>
        <p className="text-sm md:text-base 2xl:text-lg font-light spacing">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Service
