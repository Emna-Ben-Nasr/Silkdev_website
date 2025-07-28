import React, { useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export function withTextSkewAnimation<T extends React.ComponentType<any>>(Component: T): React.FC<React.ComponentProps<T>> {
  return (props) => {
    if (typeof window !== 'undefined' && window.matchMedia("(max-width: 810px)")?.matches) {
      return <Component {...props} />
    }
    const mouseX = useMotionValue(0)
    const progress = useTransform(mouseX, [-1, 0, 1], [0, 0.5, 1])

    const leftMatrix = [
      0.96, 0.11, 0, -0.001, -0.13, 0.29, 0, -0.0006, 0, 0, 1, 0, -150,
      -70, 0, 1,
    ]
    const centerMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    const rightMatrix = [
      0.91, -0.11, 0, 0.001, 0.27, 0.46, 0, -0.0004, 0, 0, 1, 0, 150, -70,
      0, 1,
    ]
    const matrixTransform = useTransform(progress, (latest) => {
      const interpolatedMatrix = leftMatrix.map((_, i) => {
        let value
        if (latest <= 0.5) {
          value =
            leftMatrix[i] +
            (centerMatrix[i] - leftMatrix[i]) * (latest * 2)
        } else {
          value =
            centerMatrix[i] +
            (rightMatrix[i] - centerMatrix[i]) *
              ((latest - 0.5) * 2)
        }
        return Number(value.toFixed(6))
      })
      return `matrix3d(${interpolatedMatrix.join(",")})`
    })

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1
        mouseX.set(x)
      }
      window.addEventListener("mousemove", handleMouseMove)
      return () =>
        window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX])

    return (
      <motion.div
        style={{
          transformOrigin: "center",
          transform: matrixTransform,
          transition: "transform 0.2s ease-out",
        }}
      >
        <Component {...props} />
      </motion.div>
    )
  }
}