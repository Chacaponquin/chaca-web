import { Adventage } from "../interfaces"
import { useMemo } from "react"

export default function useAdventages() {
  const CARDS: Array<Adventage> = useMemo(() => {
    return [
      {
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non provident odio ad pariatur sed nihil, harum corrupti maxime suscipit.",
        icon: "📦",
      },
      {
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non provident odio ad pariatur sed nihil, harum corrupti maxime suscipit.",
        icon: "📦",
      },
      {
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non provident odio ad pariatur sed nihil, harum corrupti maxime suscipit.",
        icon: "📦",
      },
      {
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non provident odio ad pariatur sed nihil, harum corrupti maxime suscipit.",
        icon: "📦",
      },
    ]
  }, [])

  return { CARDS }
}
