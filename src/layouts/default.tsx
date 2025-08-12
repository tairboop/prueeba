import Footer from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-background flex-1 px-6 pt-16">
        <div className="mx-auto  max-w-7xl  flex-grow">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
