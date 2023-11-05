import { buttonClass } from "../../helpers/buttonClass"
import { ChacaButtonProps } from "../../interfaces"

export default function ChacaSimpleButton(props: ChacaButtonProps) {
  return (
    <button onClick={props.onClick} className={buttonClass(props)} id={props.id} type={props.type}>
      {props.text}
    </button>
  )
}
