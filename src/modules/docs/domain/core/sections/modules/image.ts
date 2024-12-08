import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export interface ImageMethod {
  method: string
  apiId: string
}

export const CATEGORY: ModuleSubSectionTitle = { id: "category", title: "category" }

export const ANIMATED_AVATAR: ModuleSubSectionTitle = {
  id: "animated_avatar",
  title: "animatedAvatar",
}

const methods: ImageMethod[] = [
  { apiId: "food", method: "food" },
  { apiId: "event", method: "event" },
  { apiId: "wallpaper", method: "wallpaper" },
  { apiId: "architecture", method: "architecture" },
  { apiId: "nature", method: "nature" },
  { apiId: "fashion", method: "fashion" },
  { apiId: "film", method: "film" },
  { apiId: "people", method: "people" },
  { apiId: "health", method: "health" },
  { apiId: "house", method: "house" },
  { apiId: "street", method: "street" },
  { apiId: "animal", method: "animal" },
  { apiId: "spiritual", method: "spiritual" },
  { apiId: "travel", method: "travel" },
  { apiId: "art", method: "art" },
  { apiId: "history", method: "history" },
  { apiId: "sport", method: "sport" },
  { apiId: "3d", method: "threeDimension" },
]

export class Image extends ModuleDocSubSection {
  private readonly animateAvatarId = "animated_avatar"
  private readonly categoryId = "category"

  readonly animatedAvatarUrl = this.buildUrl(this.animateAvatarId)
  readonly categoryUrl = this.buildUrl(this.categoryId)

  readonly methods: ImageMethod[] = methods

  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Image", es: "Image" },
      url: "image",
      apiId: "image",
      titles: [
        ...methods.map((t) => {
          return { id: t.apiId, title: t.method }
        }),
        CATEGORY,
        ANIMATED_AVATAR,
      ],
    })
  }
}
