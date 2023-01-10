import "./secondButton.css"

const ChacaArrowButton = ({ text }: { text: string }) => {
  return (
    <button className='secondButton'>
      <span className='circle' aria-hidden='true'>
        <span className='icon arrow'></span>
      </span>
      <p className='button-text mb-0 flex items-center font-fontBold pl-8'>{text}</p>
    </button>
  )
}

export default ChacaArrowButton
