import Container from '../Container'

const Mission = () => {
  return (
    <section className="text-white text-center">
      <Container className="px-4 md:px-0">
        <div className="relative">
          <div className="green absolute top-1/4 -translate-x-1/2 left-[92%] !h-[50%] !blur-3xl -z-22"></div>
          <div className="blue absolute top-1/4 -translate-x-1/2 left-28 !h-[50%] !blur-3xl -z-2"></div>
          <div className="gradient-border p-6 py-10 md:p-10 lg:p-24 !rounded-[20px] md:!rounded-[40px] flex flex-col items-center gap-8 relative z-10">
            <h3 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-[250]">
              {' '}
              <span className="font-normal">Mission</span>
            </h3>
            <div className="w-full max-w-2xl line"></div>
            <p className="mt-6 mb-4 text-xl 2xl:text-3xl font-light md:px-20 lg:px-32 tracking-[1px]">
              Proactively securing Web3 protocols through intelligent
              mechanisms.
            </p>
            <p className="md:w-[50%] text-sm md:text-base 2xl:text-xl font-thin md:font-light tracking-[1px]">
              Preventive approach to secure protocols in blockchain ecosystem
              via ML powered Artificial Intelligence.
              <br />
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Mission
