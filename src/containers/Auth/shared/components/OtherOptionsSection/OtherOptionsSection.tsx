import { Fragment } from "react"
import { GitHub, Google } from "@modules/app/modules/icon/components"
import { useUserServices } from "@modules/user/services"
import { SocialButton } from "./components"

const OtherOptionsSection = ({ loading }: { loading: boolean }) => {
  const { handleGithubLogin, handleGoogleLogin } = useUserServices()

  return (
    <Fragment>
      {!loading && (
        <section className="grid grid-cols-2 w-full gap-2 mb-3 exsm:grid-cols-1">
          <SocialButton
            text="Google"
            color="purple"
            icon={Google}
            id="google-button"
            loading={loading}
            onClick={handleGoogleLogin}
          />

          <SocialButton
            text="Github"
            color="black"
            icon={GitHub}
            id="github-button"
            loading={loading}
            onClick={handleGithubLogin}
          />
        </section>
      )}
    </Fragment>
  )
}

export default OtherOptionsSection
