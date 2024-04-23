import { buttonClass } from "../../helpers"
import { ChacaIconButtonInterface } from "../../interfaces"

export default function ChacaIconButton(props: ChacaIconButtonInterface) {
  return (
    <button onClick={props.onClick} className={buttonClass(props)} type={props.type}>
      {props.icon}
      <p className="mb-0 ml-2"> {props.text}</p>
    </button>
  )
}
