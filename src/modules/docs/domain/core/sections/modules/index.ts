import { DocSection, DocSubSection } from "../../base"
import { Image } from "./image"
import { ModuleDocSubSection } from "./module-section"

class ModulesSection extends DocSection {
  constructor() {
    super({ title: "Modules", url: "modules" })
  }
}

export const SECTION = new ModulesSection()

class Address extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Address", url: "address", apiId: "address" })
  }
}

class Animal extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Animal", url: "animal", apiId: "animal" })
  }
}

class Color extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Color", url: "color", apiId: "color" })
  }
}

class Datatype extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Datatype", url: "datatype", apiId: "datatype" })
  }
}

class Date extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Date", url: "date", apiId: "date" })
  }
}

class Finance extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Finance", url: "finance", apiId: "finance" })
  }
}

class Id extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Id", url: "id", apiId: "id" })
  }
}

class Internet extends ModuleDocSubSection {
  readonly emailId = "email"

  constructor() {
    super({ parent: SECTION, title: "Internet", url: "internet", apiId: "email" })
  }
}

class Lorem extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Lorem", url: "lorem", apiId: "lorem" })
  }
}

class Person extends ModuleDocSubSection {
  readonly firstNameId = "first-name"

  constructor() {
    super({ parent: SECTION, title: "Person", url: "person", apiId: "person" })
  }
}

class Phone extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Phone", url: "phone", apiId: "phone" })
  }
}

class Science extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Science", url: "science", apiId: "science" })
  }
}

class System extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "System", url: "system", apiId: "system" })
  }
}

class Vehicle extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Vehicle", url: "vehicle", apiId: "vehicle" })
  }
}

class Video extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Video", url: "video", apiId: "video" })
  }
}

class Word extends ModuleDocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Word", url: "word", apiId: "word" })
  }
}

class Overview extends DocSubSection {
  readonly apiIdId = "api-id"

  constructor() {
    super({ parent: SECTION, title: "Overview", url: "overview" })
  }
}

export const ADDRESS = new Address()
export const ANIMAL = new Animal()
export const COLOR = new Color()
export const DATATYPE = new Datatype()
export const DATE = new Date()
export const FINANCE = new Finance()
export const ID = new Id()
export const IMAGE = new Image(SECTION)
export const INTERNET = new Internet()
export const LOREM = new Lorem()
export const PERSON = new Person()
export const PHONE = new Phone()
export const SCIENCE = new Science()
export const SYSTEM = new System()
export const VEHICLE = new Vehicle()
export const VIDEO = new Video()
export const WORD = new Word()
export const OVERVIEW = new Overview()

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
