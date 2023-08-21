import { LinksSection } from "./components"

const Landing = () => {
  return (
    <div className='min-h-screen overflow-y-auto absolute top-0 overflow-x-hidden z-50 w-full'>
      <div className='w-full h-max flex flex-col items-center justify-center '>
        <LinksSection />
      </div>
    </div>
  )
}

export default Landing
