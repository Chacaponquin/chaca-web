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

  apiId: string
  params: Param[]
}

export class Image extends ModuleDocSubSection {
  private readonly animateAvatarId = "animated_avatar"
  private readonly categoryId = "category"

  readonly animatedAvatarUrl = this.buildUrl(this.animateAvatarId)
  readonly categoryUrl = this.buildUrl(this.categoryId)

  readonly methods: ImageMethod[]

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Image", url: "image", apiId: "image" })

    this.methods = [
      { apiId: "food", method: "food", params: COMMON_PARAMS },
      { apiId: "event", method: "event", params: COMMON_PARAMS },
      { apiId: "wallpaper", method: "wallpaper", params: COMMON_PARAMS },
      { apiId: "architecture", method: "architecture", params: COMMON_PARAMS },
      { apiId: "nature", method: "nature", params: COMMON_PARAMS },
      { apiId: "fashion", method: "fashion", params: COMMON_PARAMS },
      { apiId: "film", method: "film", params: COMMON_PARAMS },
      { apiId: "people", method: "people", params: COMMON_PARAMS },
      { apiId: "health", method: "health", params: COMMON_PARAMS },
      { apiId: "house", method: "house", params: COMMON_PARAMS },
      { apiId: "street", method: "street", params: COMMON_PARAMS },
      { apiId: "animal", method: "animal", params: COMMON_PARAMS },
      { apiId: "spiritual", method: "spiritual", params: COMMON_PARAMS },
      { apiId: "travel", method: "travel", params: COMMON_PARAMS },
      { apiId: "art", method: "art", params: COMMON_PARAMS },
      { apiId: "history", method: "history", params: COMMON_PARAMS },
      { apiId: "sport", method: "sport", params: COMMON_PARAMS },
      { apiId: "3d", method: "threeDimension", params: COMMON_PARAMS },
      {
        apiId: this.categoryId,
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
        apiId: this.animateAvatarId,
        method: "animatedAvatar",
        params: [],
      },
    ]

    this.titles = [...this.methods.map((m) => ({ id: m.apiId, title: m.method }))]
  }
}
