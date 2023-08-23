import { CardHeader, Field } from "./components"
import { useDatasetCard } from "./hooks"

export default function DatasetCard() {
  const { openConfig } = useDatasetCard()

  return (
    <div className='bg-darkColor flex flex-col w-[400px] rounded-md text-white stroke-white'>
      <CardHeader openConfig={openConfig} />

      <div className='flex flex-col py-2'>
        {["id", "username", "password"].map((field, i) => (
          <Field key={i} field={field} />
        ))}
      </div>
    </div>
  )
}
