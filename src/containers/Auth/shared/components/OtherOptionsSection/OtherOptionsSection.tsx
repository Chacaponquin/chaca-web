import { Fragment } from "react"
import { GitHub, Google } from "@modules/app/modules/icon/components"
import { useUserServices } from "@modules/user/services"

const divClass =
  "border-[3px] py-3 flex gap-3 rounded items-center justify-center transition-all duration-300 hover:text-white cursor-pointer esm:py-2"

const OtherOptionsSection = ({ loading }: { loading: boolean }) => {
  return (
    <Fragment>
      {!loading && (
        <div className='grid grid-cols-2 w-full gap-2 mb-3 exsm:grid-cols-1'>
          <GoogleButton />
          <GitHubButton />
        </div>
      )}
    </Fragment>
  )
}

const GitHubButton = () => {
  const { handleGithubLogin } = useUserServices()

  return (
    <button
      className={divClass + " border-black text-black hover:bg-black hover:fill-white"}
      onClick={handleGithubLogin}
      type='button'
    >
      <GitHub />
      <p className='mb-0 text-xl'>Github</p>
    </button>
  )
}

const GoogleButton = () => {
  const { handleGoogleLogin } = useUserServices()

  return (
    <button
      className={
        divClass +
        " border-secondColor fill-secondColor text-secondColor hover:bg-secondColor hover:fill-white"
      }
      type='button'
      onClick={handleGoogleLogin}
    >
      <Google />
      <p className='mb-0 text-xl'>Google</p>
    </button>
  )
}

export default OtherOptionsSection
