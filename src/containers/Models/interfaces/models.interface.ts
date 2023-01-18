export interface UserDatasetModel {
  _id: string
  name: string
  descripttion: string
  model: string
  author: string
  likes: number
  tags: Array<string>
}
