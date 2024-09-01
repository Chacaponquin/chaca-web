export interface LoginUser {
  username: string
  isSuperUser: boolean
  image: string | null
}

export interface UserDataScehma {
  id: string
  name: string
  data: string
}
