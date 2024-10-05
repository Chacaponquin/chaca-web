import {
  BEAR,
  DOG,
  BIRD,
  CAT,
  COW,
  CROCODILIA,
  FISH,
  HORSE,
  INSECT,
  LION,
  RABBIT,
  RODENT,
  SNAKE,
  TYPE,
  CETACEAN,
} from "@modules/docs/domain/core/sections/modules/animal"
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
      <MethodSection params={[]} title={DOG} code={DOG_CODE} />

      <MethodSection title={BEAR} code={BEAR_CODE} params={[]} />

      <MethodSection code={BIRD_CODE} title={BIRD} params={[]} />

      <MethodSection title={CAT} code={CAT_CODE} params={[]} />

      <MethodSection title={CETACEAN} code={CETACEAN_CODE} params={[]} />

      <MethodSection title={COW} code={COW_CODE} params={[]} />

      <MethodSection title={CROCODILIA} code={CROCODILIA_CODE} params={[]} />

      <MethodSection code={FISH_CODE} title={FISH} params={[]} />

      <MethodSection code={HORSE_CODE} title={HORSE} params={[]} />

      <MethodSection code={INSECT_CODE} title={INSECT} params={[]} />

      <MethodSection code={LION_CODE} title={LION} params={[]} />

      <MethodSection code={RABBIT_CODE} params={[]} title={RABBIT} />

      <MethodSection code={RODENT_CODE} params={[]} title={RODENT} />

      <MethodSection code={SNAKE_CODE} params={[]} title={SNAKE} />

      <MethodSection code={TYPE_CODE} params={[]} title={TYPE} />
    </>
  )
}
