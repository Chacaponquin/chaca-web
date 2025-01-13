import { MethodSection } from "../../../shared/components"
import { COMMON_PARAMS } from "../domain/params"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"
import { SectionProvider } from "../../../shared/context"
import { IMAGE } from "@modules/docs/domain/core/sections/modules"
import { ANIMATED_AVATAR, CATEGORY } from "@modules/docs/domain/core/sections/modules/image"

export default function En() {
  return (
    <SectionProvider section={IMAGE} result="image">
      {IMAGE.methods.map((m, index) => (
        <MethodSection
          key={index}
          code={null}
          params={COMMON_PARAMS}
          title={{ id: m.apiId, title: m.method }}
        />
      ))}

      <MethodSection
        params={[
          ...COMMON_PARAMS,
          {
            name: "category",
            description: { es: "Categoría de la imagen", en: "Image category" },
            params: [],
            required: false,
            types: [COMMON_TYPES.STRING],
          },
        ]}
        title={CATEGORY}
        code={null}
      />

      <MethodSection title={ANIMATED_AVATAR} params={[]} code={null} />
    </SectionProvider>
  )
}
