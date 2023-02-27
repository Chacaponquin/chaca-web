import { Fragment } from "react"
import { GitHub, Google } from "@modules/shared/assets/icons"
import { userServices } from "@modules/user/services"

const divClass =
  "border-[3px] py-3 flex gap-3 rounded items-center justify-center transition-all duration-300 hover:text-white cursor-pointer esm:py-2"

const OtherOptionsSection = ({ loading }: { loading: boolean }) => {
  /* useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "910053819134-3lb9n36c1d9tmf4g6271n4u3qi4ij9bi.apps.googleusercontent.com",
        scope: "email",
      })
    }

    gapi.load("client:auth2", start)
  }, []) */

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
  const { handleGithubLogin } = userServices()

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
  const { handleGoogleLogin } = userServices()

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
