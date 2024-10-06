import { DocSection } from "../../base"
import { Address } from "./address"
import { Animal } from "./animal"
import { Color } from "./color"
import { Datatype } from "./datatype"
import { Date } from "./date"
import { Finance } from "./finance"
import { Id } from "./id"
import { Image } from "./image"
import { Internet } from "./internet"
import { Lorem } from "./lorem"
import { Overview } from "./overview"
import { Person } from "./person"
import { Phone } from "./phone"
import { Science } from "./science"
import { System } from "./system"
import { Vehicle } from "./vehicle"
import { Video } from "./video"
import { Word } from "./word"

class ModulesSection extends DocSection {
  constructor() {
    super({ title: "Modules", url: "modules" })
  }
}

export const SECTION = new ModulesSection()

export const ADDRESS = new Address(SECTION)
export const ANIMAL = new Animal(SECTION)
export const COLOR = new Color(SECTION)
export const DATATYPE = new Datatype(SECTION)
export const DATE = new Date(SECTION)
export const FINANCE = new Finance(SECTION)
export const ID = new Id(SECTION)
export const IMAGE = new Image(SECTION)
export const INTERNET = new Internet(SECTION)
export const LOREM = new Lorem(SECTION)
export const PERSON = new Person(SECTION)
export const PHONE = new Phone(SECTION)
export const SCIENCE = new Science(SECTION)
export const SYSTEM = new System(SECTION)
export const VEHICLE = new Vehicle(SECTION)
export const VIDEO = new Video(SECTION)
export const WORD = new Word(SECTION)
export const OVERVIEW = new Overview(SECTION)

SECTION.push([
  OVERVIEW,
  ADDRESS,
  ANIMAL,
  COLOR,
  DATATYPE,
  DATE,
  FINANCE,
  ID,
  IMAGE,
  INTERNET,
  LOREM,
  PERSON,
  PHONE,
  SCIENCE,
  SYSTEM,
  VEHICLE,
  VIDEO,
  WORD,
])
