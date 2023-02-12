import { FAQ, FirstPage, Services, WhyUs } from "./components"

const Landing = () => {
  return (
    <div className='h-screen overflow-y-auto absolute top-0 overflow-x-hidden z-50 w-full'>
      <div className='w-screen h-max flex flex-col items-center justify-center '>
        <FirstPage />
        <WhyUs />
        <Services />
        <FAQ />
      </div>
    </div>
  )
}

export default Landing
