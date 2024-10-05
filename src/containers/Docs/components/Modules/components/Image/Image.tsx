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
import { Fragment } from "react"
import { TryRoute } from "@containers/Docs/shared/components"

export default function Image() {
  const LOREM_FLICKR_URL = "https://loremflickr.com/"

  return (
    <>
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
        <Fragment key={index}>
          <MethodSection code={null} params={m.params} title={{ id: m.apiId, title: m.method }} />

          <TryRoute
            result="image"
            method="post"
            body="{}"
            params={[]}
            url={IMAGE.methodUrl(m.apiId)}
            disableBody
            initFetch
          />
        </Fragment>
      ))}
    </>
  )
}
