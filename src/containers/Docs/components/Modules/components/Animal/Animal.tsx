import { MethodSection } from "../../shared/components"
import {
  BEAR_CODE,
  BIRD_CODE,
  CAT_CODE,
  CETACEAN_CODE,
  COW_CODE,
  CROCODILIA_CODE,
  DOG_CODE,
  FISH_CODE,
  HORSE_CODE,
  INSECT_CODE,
  LION_CODE,
  RABBIT_CODE,
  RODENT_CODE,
  TYPE_CODE,
  SNAKE_CODE,
} from "./domain"

export default function Animal() {
  return (
    <>
      <MethodSection apiId="dog" method="dog" params={[]} title="Dog" code={DOG_CODE} />

      <MethodSection apiId="bear" method="bear" code={BEAR_CODE} title="Bear" params={[]} />

      <MethodSection apiId="bird" code={BIRD_CODE} method="bird" params={[]} title="Bird" />

      <MethodSection apiId="cat" title="Cat" code={CAT_CODE} method="cat" params={[]} />

      <MethodSection
        apiId="cetacean"
        title="Cetacean"
        code={CETACEAN_CODE}
        method="cetacean"
        params={[]}
      />

      <MethodSection apiId="cow" title="Cow" code={COW_CODE} method="cow" params={[]} />

      <MethodSection
        apiId="crocodilia"
        code={CROCODILIA_CODE}
        method="crocodilia"
        params={[]}
        title="Crocodilia"
      />

      <MethodSection apiId="fish" code={FISH_CODE} method="fish" params={[]} title="Fish" />

      <MethodSection apiId="horse" code={HORSE_CODE} method="horse" params={[]} title="Horse" />

      <MethodSection apiId="insect" code={INSECT_CODE} method="insect" params={[]} title="Insect" />

      <MethodSection apiId="lion" code={LION_CODE} method="lion" params={[]} title="Lion" />

      <MethodSection apiId="rabbit" code={RABBIT_CODE} method="rabbit" params={[]} title="Rabbit" />

      <MethodSection apiId="rodent" code={RODENT_CODE} method="rodent" params={[]} title="Rodent" />

      <MethodSection apiId="snake" code={SNAKE_CODE} method="snake" params={[]} title="Snake" />

      <MethodSection apiId="type" code={TYPE_CODE} method="type" params={[]} title="Animal type" />
    </>
  )
}
