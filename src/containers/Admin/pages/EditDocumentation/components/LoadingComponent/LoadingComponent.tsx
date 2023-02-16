import { LoaderContainer } from "@modules/shared/components/Loader"

export default function LoadingComponent() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <LoaderContainer loading={true} className='w-[150px]' />
    </div>
  )
}
