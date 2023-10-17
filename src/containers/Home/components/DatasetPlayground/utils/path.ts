import { ArrowCoords, ArrowDirection, Coords } from "../interfaces/point.interface"

interface GetPathDataProps {
  from: DOMRect
  to: DOMRect
}

const LINE_OFFSET = 9
const POS_OFFSET = 40

const DESVIATION = 35

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

export function orderCoords(arrows: Array<ArrowCoords>): void {
  const EQUAL_DESVIATION = 11

  for (let i = 0; i < arrows.length; i++) {
    const actualArrow = arrows[i]

    for (let j = 0; j < arrows.length; j++) {
      if (j !== i) {
        const compareArrow = arrows[j]

        const final1 = actualArrow.coords.at(-1)
        const final2 = compareArrow.coords.at(-1)

        if (final1 && final2) {
          if (final1.x === final2.x && final1.y === final2.y) {
            const { direction } = compareArrow

            if (direction === "bootom-to-top-by-left") {
              final2.y -= EQUAL_DESVIATION
            } else if (direction === "bottom-to-top-by-right") {
              final2.y -= EQUAL_DESVIATION
              const semiFinal1 = compareArrow.coords.at(-2)
              const semiFinal2 = compareArrow.coords.at(-3)

              if (semiFinal1 && semiFinal2) {
                semiFinal1.y -= EQUAL_DESVIATION
                semiFinal2.y -= EQUAL_DESVIATION
              }
            } else if (direction === "left-to-right") {
              final2.y -= EQUAL_DESVIATION
              const semiFinal1 = compareArrow.coords.at(-2)
              if (semiFinal1) {
                semiFinal1.y -= EQUAL_DESVIATION
              }
            } else if (direction === "right-to-left") {
              final2.y -= EQUAL_DESVIATION

              const semiFinal1 = compareArrow.coords.at(-2)
              if (semiFinal1) {
                semiFinal1.y -= EQUAL_DESVIATION
              }
            } else if (direction === "top-to-bottom-by-left") {
              final2.y -= EQUAL_DESVIATION
            } else if (direction === "top-to-bottom-by-right") {
              final2.y -= EQUAL_DESVIATION
              const semiFinal1 = compareArrow.coords.at(-2)
              const semiFinal2 = compareArrow.coords.at(-3)

              if (semiFinal1 && semiFinal2) {
                semiFinal1.y -= EQUAL_DESVIATION
                semiFinal2.y -= EQUAL_DESVIATION
              }
            }
          }
        }
      }
    }
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

  return { coords: coords, direction: position, to: to }
}
