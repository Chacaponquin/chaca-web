import { CardHeader, Field } from "./components"

export default function DatasetCard() {
  return (
    <div className='bg-darkColor flex flex-col w-[400px] rounded text-white stroke-white'>
      <CardHeader />

      <div className='flex flex-col py-2'>
        {["id", "username", "password"].map((field, i) => (
          <Field key={i} field={field} />
        ))}
      </div>
    </div>
  )
}
