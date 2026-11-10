"use client"

import React, { useRef, useState, useCallback, type MouseEvent, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  maxTilt?: number
  scaleOnHover?: number
  perspective?: number
  enableGlare?: boolean
  className?: string
  innerClassName?: string
}

export function TiltCard({
  children,
  maxTilt = 8,
  scaleOnHover = 1.015,
  perspective = 1000,
  enableGlare = true,
  className,
  innerClassName,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transformStyle, setTransformStyle] = useState<string>("")
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return

      // Check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -maxTilt
      const rotateY = ((x - centerX) / centerX) * maxTilt

      setTransformStyle(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, 1)`
      )

      if (enableGlare) {
        const glareX = (x / rect.width) * 100
        const glareY = (y / rect.height) * 100
        setGlarePosition({
          x: glareX,
          y: glareY,
          opacity: 1,
        })
      }
    },
    [maxTilt, scaleOnHover, perspective, enableGlare]
  )

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`)
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl transition-all duration-300 ease-out preserve-3d will-change-transform",
        className
      )}
      style={{
        transform: transformStyle || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
        transition: isHovered
          ? "transform 0.1s ease-out, box-shadow 0.25s ease-out"
          : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease-out",
      }}
      {...props}
    >
      <div className={cn("relative w-full h-full preserve-3d", innerClassName)}>
        {children}

        {enableGlare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-300"
            style={{
              opacity: glarePosition.opacity,
              background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.15), transparent 70%)`,
            }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  )
}
