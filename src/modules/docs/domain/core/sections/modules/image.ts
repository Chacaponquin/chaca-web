import { DocSection } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export interface ImageMethod {
  method: string
  id: string
  apiId: string
  params: boolean
}

export class Image extends ModuleDocSubSection {
  readonly animateAvatarId = "animated-avatar"
  readonly categoryId = "category"

  readonly methods: ImageMethod[]

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Image", url: "image", apiId: "image" })

    this.methods = [
      { apiId: "food", id: "food", method: "food", params: true },
      { apiId: "event", id: "event", method: "event", params: true },
      { apiId: "wallpaper", id: "wallpaper", method: "wallpaper", params: true },
      { apiId: "architecture", id: "architecture", method: "architecture", params: true },
      { apiId: "nature", id: "nature", method: "nature", params: true },
      { apiId: "fashion", id: "fashion", method: "fashion", params: true },
      { apiId: "film", id: "film", method: "film", params: true },
      { apiId: "people", id: "people", method: "people", params: true },
      { apiId: "health", id: "health", method: "health", params: true },
      { apiId: "house", id: "house", method: "house", params: true },
      { apiId: "street", id: "street", method: "street", params: true },
      { apiId: "animal", id: "animal", method: "animal", params: true },
      { apiId: "spiritual", id: "spiritual", method: "spiritual", params: true },
      { apiId: "travel", id: "travel", method: "travel", params: true },
      { apiId: "art", id: "art", method: "art", params: true },
      { apiId: "history", id: "history", method: "history", params: true },
      { apiId: "sport", id: "sport", method: "sport", params: true },
      { apiId: "3d", id: "3d", method: "threeDimension", params: true },
      { apiId: "category", id: this.categoryId, method: "category", params: true },
      {
        apiId: "animated_avatar",
        id: this.animateAvatarId,
        method: "animatedAvatar",
        params: false,
      },
    ]

    this.titles = [...this.methods.map((m) => ({ id: m.id, title: m.method }))]
  }
}
