import { DocSection, DocSubSection } from "../base"

class ModulesSection extends DocSection {
  constructor() {
    super({ title: "Modules", url: "modules" })
  }
}

export const SECTION = new ModulesSection()

class Address extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Address", url: "address" })
  }
}

class Animal extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Animal", url: "animal" })
  }
}

class Color extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Color", url: "color" })
  }
}

class Datatype extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Datatype", url: "datatype" })
  }
}

class Date extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Date", url: "date" })
  }
}

class Finance extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Finance", url: "finance" })
  }
}

class Id extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Id", url: "id" })
  }
}

class Image extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Image", url: "image" })
  }
}

class Internet extends DocSubSection {
  readonly emailId = "email"

  constructor() {
    super({ parent: SECTION, title: "Internet", url: "internet" })
  }
}

class Lorem extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Lorem", url: "lorem" })
  }
}

class Person extends DocSubSection {
  readonly firstNameId = "first-name"

  constructor() {
    super({ parent: SECTION, title: "Person", url: "person" })
  }
}

class Phone extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Phone", url: "phone" })
  }
}

class Science extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Science", url: "science" })
  }
}

class System extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "System", url: "system" })
  }
}

class Vehicle extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Vehicle", url: "vehicle" })
  }
}

class Video extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Video", url: "video" })
  }
}

class Word extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Word", url: "word" })
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
export const IMAGE = new Image()
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
