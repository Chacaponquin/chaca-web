import { buttonClass } from "../../helpers/buttonClass"
import { ChacaButtonProps } from "../../interfaces/chacaButton.intrface"

const ChacaSimpleButton = (props: ChacaButtonProps) => {
  return (
    <button onClick={props.onClick} className={buttonClass(props)}>
      {props.text}
    </button>
  )
}

export default ChacaSimpleButton
