import Sidebar from '@/core/components/sidebar/sidebar'
import { motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'

export default function DashboardLayout() {
  const location = useLocation()

  return (
    <div className="flex h-screen overflow-hidden p-3 gap-3">
      <Sidebar />
      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  )
}
