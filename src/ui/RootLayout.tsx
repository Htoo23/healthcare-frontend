
import { Outlet, NavLink } from 'react-router-dom'
import { Menu, MessageSquare, CalendarDays, Stethoscope, Settings, Home } from 'lucide-react'
import { useState } from 'react'

export default function RootLayout() {
  const [open, setOpen] = useState(true)

  const nav = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/dashboard', label: 'Overview', icon: Stethoscope },
    { to: '/appointments', label: 'Appointments', icon: CalendarDays },
    { to: '/chat', label: 'Chat', icon: MessageSquare },
    { to: '/settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center gap-3 h-14">
          <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)}>
            <Menu size={20} />
          </button>
          <div className="font-semibold">AI Medical</div>
          <nav className="ml-auto hidden md:flex gap-4">
            <NavLink to="/ai" className="px-3 py-2 rounded-md bg-black text-white">Try AI Assistant</NavLink>
            <NavLink to="/book" className="px-3 py-2 rounded-md bg-blue-600 text-white">Book Now</NavLink>
          </nav>
        </div>
      </header>
      <div className="container grid md:grid-cols-[240px_1fr] gap-6 py-6">
        <aside className={`${open ? 'block' : 'hidden'} md:block`}>
          <div className="card p-0">
            <nav className="p-2 text-sm">
              {nav.map(i => (
                <NavLink
                  key={i.to}
                  to={i.to}
                  className={({isActive}) => 
                    'flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 ' + (isActive ? 'bg-gray-100 font-medium' : '')
                  }>
                  <i.icon size={18} />
                  {i.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="mt-3 md:hidden card">
            <div className="text-sm">On mobile, use the buttons at the top to access AI and booking.</div>
          </div>
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
      <footer className="border-t py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AI Medical — Demo UI
      </footer>
    </div>
  )
}
