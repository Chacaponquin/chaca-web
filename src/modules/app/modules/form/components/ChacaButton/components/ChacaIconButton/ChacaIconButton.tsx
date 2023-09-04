import { buttonClass } from "../../helpers/buttonClass"
import { ChacaIconButtonInterface } from "../../interfaces/chacaButton.intrface"

const ChacaIconButton = (props: ChacaIconButtonInterface) => {
  return (
    <button onClick={props.onClick} className={buttonClass(props)} type={props.type}>
      {props.icon}
      <p className="mb-0 ml-2"> {props.text}</p>
    </button>
  )
}

export default ChacaIconButton
