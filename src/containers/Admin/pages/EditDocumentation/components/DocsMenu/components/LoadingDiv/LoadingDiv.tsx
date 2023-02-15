import { LoaderContainer } from "@modules/shared/components/Loader"

export default function LoadingDiv({ loading }: { loading: boolean }) {
  return (
    <div className='h-full flex justify-center items-center'>
      <LoaderContainer loading={loading} className='w-[90px]' />
    </div>
  )
}
