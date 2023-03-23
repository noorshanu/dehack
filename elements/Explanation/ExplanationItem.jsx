import React from 'react'

const ExplanationItem = ({ text, explanation, setExplanation }) => {
  return (
    <div
      style={
        text !== explanation ? { fontWeight: '300', color: '#929292' } : {}
      }
      onClick={() => setExplanation(text)}
      role="button"
      className={`border border-white/20 p-4 px-8 md:w-[200px] 2xl:w-[230px] h-[85px] transitions flex items-center justify-center bg-[#111111] rounded-lg backdrop-blur-lg ${
        text === explanation ? 'gradient-border-explanation' : ''
      }`}
    >
      <p className="text-xl xl:text-2xl 2xl:text-3xl spacing">{text}</p>
      {
        <span className="text-xl ml-2 text-inherit md:hidden">
          {text !== explanation ? '+' : '-'}
        </span>
      }
    </div>
  )
}

export default ExplanationItem
