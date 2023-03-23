const LandingText = ({ IBM, text }) => {
  return (
    <h3
      className={`${IBM.className} m-0 text-white font-medium tracking-wider uppercase text-7xl md:text-[150px]`}
    >
      {text}
    </h3>
  )
}

export default LandingText
