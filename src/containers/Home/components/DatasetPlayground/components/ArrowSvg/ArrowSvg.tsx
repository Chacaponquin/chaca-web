import React from "react"
import { Point } from "../../interfaces/point.interface"
import { useTheme } from "@modules/app/modules/theme/hooks"
import { THEME } from "@modules/app/modules/theme/constants"
import { APP_COLORS } from "@modules/app/constants"

const SVG_STYLE: React.CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
}

export default function ArrowSvg({ points }: { points: Array<Point> }) {
  const { theme } = useTheme()

  const color = theme === THEME.LIGHT ? APP_COLORS.PRIMARY_COLOR : "#ffffff"

  return (
    <svg style={SVG_STYLE}>
      {[color].map((c) => (
        <defs key={c}>
          <marker
            id={`triangle-${c}`}
            markerHeight="5"
            markerUnits="strokeWidth"
            markerWidth="5"
            orient="auto"
            refX="1"
            refY="5"
            viewBox="0 0 10 10"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={c} />
            {/* <circle cx="5" cy="5" r="5" fill={c} /> */}
          </marker>
        </defs>
      ))}

      {points.map((p) => {
        return (
          <path
            id="p1"
            d={p.path}
            fill="none"
            key={p.path}
            markerEnd={`url(#triangle-${color})`}
            stroke={color}
            strokeWidth="2"
            strokeDasharray={"dashed"}
            strokeLinejoin="round"
          />
        )
      })}
    </svg>
  )
}
