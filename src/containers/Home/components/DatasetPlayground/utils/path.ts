import { ArrowCoords, ArrowDirection, Coords } from "../interfaces/point.interface"
import { v4 as uuid } from "uuid"

interface GetPathDataProps {
  from: DOMRect
  to: DOMRect
}

interface GroupArrows {
  arrows: Array<ArrowCoords>
  coords: Coords
}

const LINE_OFFSET = 9
const POS_OFFSET = 40

const DESVIATION = 35

const EQUAL_DESVIATION = 11

export function getPosition({ from, to }: GetPathDataProps): ArrowDirection {
  const allowYConnect =
    from.left - POS_OFFSET < to.right && from.right + to.width > to.right - POS_OFFSET

  const bottomToTop = from.bottom < to.top && allowYConnect
  const topToBottom = from.top > to.bottom && allowYConnect
  const rightToLeft = from.left > to.right
  const leftToRight = from.right < to.left

  const bottomToTopByRight = bottomToTop && from.left > to.left
  const bottomToTopByLeft = bottomToTop && from.left < to.left

  const topToBottomByRight = topToBottom && from.left > to.left
  const topToBottomByLeft = topToBottom && from.left < to.left

  if (bottomToTop) {
    if (bottomToTopByRight) return "bottom-to-top-by-right"
    else if (bottomToTopByLeft) return "bootom-to-top-by-left"
    else return "bootom-to-top-by-left"
  }

  if (topToBottom) {
    if (topToBottomByLeft) return "top-to-bottom-by-left"
    else if (topToBottomByRight) return "top-to-bottom-by-right"
    else return "top-to-bottom-by-left"
  }

  if (rightToLeft) {
    return "right-to-left"
  }

  if (leftToRight) {
    return "left-to-right"
  } else {
    return "right-to-left"
  }
}

function findGroup(groups: Array<GroupArrows>, coords: Coords): GroupArrows | undefined {
  return groups.find((g) => g.coords.x === coords.x && g.coords.y === coords.y)
}

export function groupArrows(arrows: Array<ArrowCoords>): Array<GroupArrows> {
  const groups: Array<GroupArrows> = []

  for (let i = 0; i < arrows.length; i++) {
    const actualArrow = arrows[i]
    const final1 = actualArrow.coords.at(-1)

    if (final1) {
      let actualGroup: GroupArrows
      const exists = findGroup(groups, final1)

      if (!exists) {
        const newGroup: GroupArrows = {
          arrows: [actualArrow],
          coords: final1,
        }
        groups.push(newGroup)

        actualGroup = newGroup
      } else {
        actualGroup = exists
      }

      for (let j = 0; j < arrows.length; j++) {
        if (j !== i) {
          const compareArrow = arrows[j]
          const final2 = compareArrow.coords.at(-1)

          if (final2 && final2.x === actualGroup.coords.x && final2.y === actualGroup.coords.y) {
            const exists = actualGroup.arrows.some((a) => a.id === compareArrow.id)

            if (!exists) {
              actualGroup.arrows.push(actualArrow)
            }
          }
        }
      }
    }
  }

  return groups
}

function calculateDesviation(value: number, operator: "+" | "-", index: number): number {
  if (operator === "+") {
    return value + EQUAL_DESVIATION + parseInt(String(index / 2)) + 4
  } else {
    return value - EQUAL_DESVIATION - parseInt(String(index / 2)) + 4
  }
}

export function reubicateArrows(groups: Array<GroupArrows>): void {
  for (const group of groups) {
    group.arrows.forEach((arrow, i) => {
      if (i !== 0) {
        const operator = i % 2 === 0 ? "+" : "-"
        const final = arrow.coords.at(-1)

        if (final) {
          if (arrow.direction === "bootom-to-top-by-left") {
            final.y = calculateDesviation(final.y, operator, i)

            const semiFinal1 = arrow.coords.at(-2)
            const semiFinal2 = arrow.coords.at(-3)

            if (semiFinal1 && semiFinal2) {
              semiFinal1.y = calculateDesviation(semiFinal1.y, operator, i)
              semiFinal2.y = calculateDesviation(semiFinal2.y, operator, i)
            }
          } else if (arrow.direction === "bottom-to-top-by-right") {
            final.y = calculateDesviation(final.y, operator, i)

            const semiFinal1 = arrow.coords.at(-2)
            const semiFinal2 = arrow.coords.at(-3)

            if (semiFinal1 && semiFinal2) {
              semiFinal1.y = calculateDesviation(semiFinal1.y, operator, i)
              semiFinal2.y = calculateDesviation(semiFinal2.y, operator, i)
            }
          } else if (arrow.direction === "left-to-right") {
            final.y = calculateDesviation(final.y, operator, i)

            const semiFinal1 = arrow.coords.at(-2)
            if (semiFinal1) {
              semiFinal1.y = calculateDesviation(semiFinal1.y, operator, i)
            }
          } else if (arrow.direction === "right-to-left") {
            final.y = calculateDesviation(final.y, operator, i)

            const semiFinal1 = arrow.coords.at(-2)
            if (semiFinal1) {
              semiFinal1.y = calculateDesviation(semiFinal1.y, operator, i)
            }
          } else if (arrow.direction === "top-to-bottom-by-left") {
            final.y = calculateDesviation(final.y, operator, i)
          } else if (arrow.direction === "top-to-bottom-by-right") {
            final.y = calculateDesviation(final.y, operator, i)
            const semiFinal1 = arrow.coords.at(-2)
            const semiFinal2 = arrow.coords.at(-3)

            if (semiFinal1 && semiFinal2) {
              semiFinal1.y = calculateDesviation(semiFinal1.y, operator, i)
              semiFinal2.y = calculateDesviation(semiFinal2.y, operator, i)
            }
          }
        }
      }
    })
  }
}

export function getPathData({ from, to }: GetPathDataProps): ArrowCoords {
  const position = getPosition({ from, to })
  let coords: Array<Coords>

  switch (position) {
    case "top-to-bottom-by-left": {
      coords = [
        {
          x: from.left,
          y: from.top + from.height / 2,
        },
        {
          x: from.left - DESVIATION,
          y: from.top + from.height / 2,
        },
        {
          x: from.left - DESVIATION,
          y: from.top - (from.top - to.bottom) / 2,
        },
        {
          x: from.left - DESVIATION,
          y: to.top + to.height / 2,
        },
        {
          x: to.left - LINE_OFFSET,
          y: to.top + to.height / 2,
        },
      ]
      break
    }

    case "top-to-bottom-by-right": {
      coords = [
        {
          x: from.right,
          y: from.top + from.height / 2,
        },
        {
          x: from.right + DESVIATION,
          y: from.top + from.height / 2,
        },
        {
          x: from.right + DESVIATION,
          y: to.top + to.height / 2,
        },
        {
          x: to.right + DESVIATION,
          y: to.top + to.height / 2,
        },
        {
          x: to.right + LINE_OFFSET,
          y: to.top + to.height / 2,
        },
      ]
      break
    }

    case "right-to-left": {
      coords = [
        {
          x: from.left,
          y: from.bottom - from.height / 2,
        },
        {
          x: (to.right + from.left) / 2,
          y: from.bottom - from.height / 2,
        },
        {
          x: (to.right + from.left) / 2,
          y: to.top + to.height / 2,
        },
        {
          x: to.right + LINE_OFFSET,
          y: to.top + to.height / 2,
        },
      ]
      break
    }

    case "left-to-right": {
      coords = [
        {
          x: from.right,
          y: from.bottom - from.height / 2,
        },
        {
          x: (to.left + from.right) / 2,
          y: from.bottom - from.height / 2,
        },
        {
          x: (to.left + from.right) / 2,
          y: to.top + to.height / 2,
        },
        {
          x: to.left - LINE_OFFSET,
          y: to.top + to.height / 2,
        },
      ]
      break
    }

    case "bottom-to-top-by-right": {
      coords = [
        {
          x: from.left,
          y: from.top + from.height / 2,
        },
        {
          x: to.left - DESVIATION,
          y: from.top + from.height / 2,
        },
        { x: to.left - DESVIATION, y: to.top + to.height / 2 },
        {
          x: to.left - DESVIATION,
          y: to.top + to.height / 2,
        },
        {
          x: to.left - LINE_OFFSET,
          y: to.top + to.height / 2,
        },
      ]
      break
    }

    case "bootom-to-top-by-left":
      coords = [
        {
          x: from.right,
          y: from.top + from.height / 2,
        },
        {
          x: to.right + DESVIATION,
          y: from.top + from.height / 2,
        },
        { x: to.right + DESVIATION, y: from.top + from.height / 2 },
        {
          x: to.right + DESVIATION,
          y: to.top + to.height / 2,
        },
        {
          x: to.right + LINE_OFFSET,
          y: to.top + to.height / 2,
        },
      ]
      break

    default: {
      coords = []
      break
    }
  }

  return { coords: coords, direction: position, to: to, id: uuid() }
}
