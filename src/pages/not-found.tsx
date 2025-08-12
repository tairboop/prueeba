import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-tr from-content4 to-primary-500 bg-clip-text text-transparent text-6xl font-bold"
      >
        404 - Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-foreground text-opacity-70 text-lg"
      >
        Sorry, but the page you were trying to view does not exist.
      </motion.p>
    </div>
  )
}
