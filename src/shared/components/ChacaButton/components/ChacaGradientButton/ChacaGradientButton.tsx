import "./principalButton.css"

const ChacaGradientButton = ({ text }: { text: string }) => {
  return (
    <button className={"cssbuttons-io rounded-sm"}>
      <span className='font-fontBold uppercase px-10'>{text}</span>
    </button>
  )
}

export default ChacaGradientButton
