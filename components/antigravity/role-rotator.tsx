"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RoleRotatorProps {
  roles: string[]
  intervalMs?: number
  className?: string
}

export function RoleRotator({ roles, intervalMs = 3200, className }: RoleRotatorProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (roles.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, intervalMs)
    return () => clearInterval(interval)
  }, [roles, intervalMs])

  return (
    <div className={`inline-block relative h-[1.35em] overflow-hidden align-top ${className || ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 18, rotateX: -45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -18, rotateX: 45 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block whitespace-nowrap bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 dark:from-blue-400 dark:via-indigo-300 dark:to-rose-400 bg-clip-text text-transparent font-bold"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
