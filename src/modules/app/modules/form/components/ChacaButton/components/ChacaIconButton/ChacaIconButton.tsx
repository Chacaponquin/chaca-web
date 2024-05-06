import { buttonClass } from "../../helpers"
import { ChacaIconButtonInterface } from "../../interfaces"

export default function ChacaIconButton(props: ChacaIconButtonInterface) {
  return (
    <button
      onClick={props.onClick}
      className={buttonClass(props)}
      type={props.type ? props.type : "button"}
      disabled={props.disabled}
    >
      {props.icon}
      <p className="mb-0"> {props.text}</p>
    </button>
  )
}
