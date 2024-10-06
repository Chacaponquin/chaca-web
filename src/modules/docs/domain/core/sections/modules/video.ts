import { DocSection } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export class Video extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Video", url: "video", apiId: "video" })

    this.titles = [
      { id: "3D", title: "3D" },
      { id: "animal", title: "Animal" },
      { id: "architecture", title: "Architecture" },
      { id: "art", title: "Art" },
      { id: "event", title: "Event" },
      { id: "fashion", title: "Fashion" },
      { id: "food", title: "Food" },
      { id: "health", title: "Health" },
      { id: "history", title: "History" },
      { id: "nature", title: "Nature" },
      { id: "people", title: "People" },
      { id: "spiritual", title: "Spiritual" },
      { id: "sport", title: "Sport" },
      { id: "street", title: "Street" },
      { id: "travel", title: "Travel" },
      { id: "wallpaper", title: "Wallpaper" },
    ]
  }
}
