export default function DatasetCard() {
  return (
    <div className='bg-darkColor flex flex-col w-[400px] rounded text-white'>
      <header className='flex font-fontBold justify-center py-5 px-10 text-3xl border-b-[1px] border-white'>
        User
      </header>

      <div className='flex flex-col py-2'>
        {["id", "username", "password"].map((field, i) => (
          <div key={i} className='flex text-lg items-center py-2 px-10 justify-between'>
            <p className='font-fontMedium'>{field}</p>
            <p className='font-fontMedium'>id.uuid</p>
          </div>
        ))}
      </div>
    </div>
  )
}
