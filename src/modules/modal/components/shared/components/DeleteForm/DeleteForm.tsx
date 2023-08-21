export default function DeleteForm({
  elementName,
  message,
}: {
  elementName: string
  message: string
}) {
  return (
    <div className='flex w-full flex-col'>
      <div className='text-lg flex gap-1'>
        {message} <h1 className='font-fontBold'>{elementName}</h1>?
      </div>
    </div>
  )
}
