export function userServices() {
  const handleSignIn = (token: string) => {
    localStorage.setItem("token", token)
    window.location.reload()
  }

  const handleSignOut = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }

  return { handleSignIn, handleSignOut }
}
