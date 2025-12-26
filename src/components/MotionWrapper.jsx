import { motion } from 'framer-motion'

/**
 * Wrapper component for Framer Motion animations
 * Ready for future animation implementations
 */
function MotionWrapper({ children, ...motionProps }) {
  return <motion.div {...motionProps}>{children}</motion.div>
}

export default MotionWrapper

