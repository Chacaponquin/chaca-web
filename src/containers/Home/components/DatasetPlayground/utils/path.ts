import { Coords } from "../interfaces/point.interface"

interface GetPathDataProps {
  from: DOMRect
  to: DOMRect
}

const LINE_OFFSET = 9
const POS_OFFSET = 40

const DESVIATION = 35

function getPosition({ from, to }: GetPathDataProps) {
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
  }
}

export function getPathData({ from, to }: GetPathDataProps): Array<Coords> {
  const position = getPosition({ from, to })

  switch (position) {
    case "top-to-bottom-by-left": {
      return [
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
    }

    case "top-to-bottom-by-right": {
      return [
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
    }

    case "right-to-left": {
      return [
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
    }

    case "left-to-right": {
      return [
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
    }

    case "bottom-to-top-by-right":
      return [
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

    case "bootom-to-top-by-left":
      return [
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

    default:
      return []
  }
}
