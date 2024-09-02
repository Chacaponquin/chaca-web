import { Options as IOptions } from "../../interfaces"
import { Button } from "./components"

interface Props {
  handleChangeOption(o: IOptions): void
  selectedOption: IOptions
  body?: never
}

export default function Options({ handleChangeOption, selectedOption, body }: Props) {
  return (
    <div className="w-full grid grid-cols-2 bg-code-dark py-3 px-3">
      <Button
        text="Response"
        handleChange={handleChangeOption}
        selectedOption={selectedOption}
        option="response"
      />

      {body && (
        <Button
          text="Body"
          handleChange={handleChangeOption}
          selectedOption={selectedOption}
          option="body"
        />
      )}
    </div>
  )
}
