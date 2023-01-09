import { buttonClass } from "../../helpers/buttonClass";
import { ChacaSimpleButtonInterface } from "../../interfaces/chacaButton.intrface";

const ChacaSimpleButton = (props: ChacaSimpleButtonInterface) => {
  return (
    <button onClick={props.onClick} className={buttonClass(props)}>
      {props.text}
    </button>
  );
};

export default ChacaSimpleButton;
