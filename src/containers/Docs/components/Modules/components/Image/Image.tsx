import { OVERVIEW } from "@modules/docs/domain/core/sections/api"
import { IMAGE } from "@modules/docs/domain/core/sections/modules"
import {
  ExternalLink,
  Link,
  P,
  Tip,
  Warning,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { MethodSection } from "../../shared/components"
import { SectionProvider } from "../../shared/context"
import { COMMON_PARAMS } from "./domain/params"
import { ANIMATED_AVATAR, CATEGORY } from "@modules/docs/domain/core/sections/modules/image"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function Image() {
  const LOREM_FLICKR_URL = "https://loremflickr.com/"

  return (
    <SectionProvider section={IMAGE} result="image">
      <Warning title="Imágenes generadas en la librería">
        <P>
          En la librería de Chaca al utilizar un módulo perteneciente a esta sección (exceptuando
          los módulos <Link to={IMAGE.animatedAvatarUrl}>animateAvatar</Link> o{" "}
          <Link to={IMAGE.categoryUrl}>category</Link>) se genera una URL de{" "}
          <ExternalLink to={LOREM_FLICKR_URL}>Lorem Flickr</ExternalLink> con la categoría del
          módulo utilizado, pero esta URL no representa una imagen específica, sino que{" "}
          <ExternalLink to={LOREM_FLICKR_URL}>Lorem Flickr</ExternalLink> genera una imagen con esta
          categoría, pero esta imagen varía cada vez que se visualiza.
        </P>
      </Warning>

      <Tip title="Imágenes únicas">
        <P>
          Si deseas generar URLs únicas para cada imagen puedes generarlas a través de la{" "}
          <Link to={OVERVIEW.redirect}>API REST</Link> donde se tiene una gran cantidad de imágenes
          de distintas fuentes para cada una de las categorías.
        </P>
      </Tip>

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
            description: "Categoría de la imagen",
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
