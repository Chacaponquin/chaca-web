import { UserDatasetModel } from "@containers/Models/interfaces/models.interface"
import { useMemo } from "react"
import ExampleCode from "@shared/components/ExampleCode/ExampleCode"
import prettier from "prettier"
import tsParser from "prettier/parser-typescript"
import babelParser from "prettier/parser-babel"

export default function SelectModelContent({
  selectModel,
}: {
  selectModel: UserDatasetModel | null
}) {
  const code = (json: string) => {
    const c = prettier.format(json, {
      plugins: [tsParser, babelParser],
      parser: "json",
    })

    console.log(c)
    return c
  }

  return (
    <div className='2xl:flex hidden h-full min-w-[620px] bg-gradient-to-br from-principalColor to-secondColor px-10 py-8'>
      <div className='rounded bg-white w-full h-full'>
        {selectModel && <ExampleCode code={code(selectModel.model)} />}
      </div>
    </div>
  )
}
