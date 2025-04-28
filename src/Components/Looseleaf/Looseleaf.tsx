import React, { useEffect, useRef, useState } from "react"
import styles from './Looseleaf.module.css'

const Looseleaf: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Only animate once
        }
      },
      { threshold: 0.1 } // How much needs to be visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.container} ${styles.fadeIn} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.looseleaf}>
        <div className={styles.title}>
          CSDE1 promotes miR-451 biogenesis
        </div>
      </div>
    </div>
  )
}

export default Looseleaf
