import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { DocSection } from "../../base"
import { ModuleDocSubSection } from "./module-section"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

const COMMON_PARAMS: Param[] = [
  {
    name: "width",
    description: "Ancho de la imagen en píxeles",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "height",
    description: "Altura de la imagen en píxeles",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
]

export interface ImageMethod {
  method: string
  id: string
  apiId: string
  params: Param[]
}

export class Image extends ModuleDocSubSection {
  readonly animateAvatarId = "animated-avatar"
  readonly categoryId = "category"

  readonly methods: ImageMethod[]

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Image", url: "image", apiId: "image" })

    this.methods = [
      { apiId: "food", id: "food", method: "food", params: COMMON_PARAMS },
      { apiId: "event", id: "event", method: "event", params: COMMON_PARAMS },
      { apiId: "wallpaper", id: "wallpaper", method: "wallpaper", params: COMMON_PARAMS },
      { apiId: "architecture", id: "architecture", method: "architecture", params: COMMON_PARAMS },
      { apiId: "nature", id: "nature", method: "nature", params: COMMON_PARAMS },
      { apiId: "fashion", id: "fashion", method: "fashion", params: COMMON_PARAMS },
      { apiId: "film", id: "film", method: "film", params: COMMON_PARAMS },
      { apiId: "people", id: "people", method: "people", params: COMMON_PARAMS },
      { apiId: "health", id: "health", method: "health", params: COMMON_PARAMS },
      { apiId: "house", id: "house", method: "house", params: COMMON_PARAMS },
      { apiId: "street", id: "street", method: "street", params: COMMON_PARAMS },
      { apiId: "animal", id: "animal", method: "animal", params: COMMON_PARAMS },
      { apiId: "spiritual", id: "spiritual", method: "spiritual", params: COMMON_PARAMS },
      { apiId: "travel", id: "travel", method: "travel", params: COMMON_PARAMS },
      { apiId: "art", id: "art", method: "art", params: COMMON_PARAMS },
      { apiId: "history", id: "history", method: "history", params: COMMON_PARAMS },
      { apiId: "sport", id: "sport", method: "sport", params: COMMON_PARAMS },
      { apiId: "3d", id: "3d", method: "threeDimension", params: COMMON_PARAMS },
      {
        apiId: "category",
        id: this.categoryId,
        method: "category",
        params: [
          ...COMMON_PARAMS,
          {
            name: "category",
            description: "Categoría de la imagen a generar",
            params: [],
            required: true,
            types: [COMMON_TYPES.STRING],
          },
        ],
      },
      {
        apiId: "animated_avatar",
        id: this.animateAvatarId,
        method: "animatedAvatar",
        params: [],
      },
    ]

    this.titles = [...this.methods.map((m) => ({ id: m.id, title: m.method }))]
  }
}
