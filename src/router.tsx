
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Appointments from './pages/Appointments'
import Patients from './pages/Patients'
import Chat from './pages/Chat'
import Settings from './pages/Settings'
import Admin from './pages/Admin'
import BookAppointment from './pages/BookAppointment'
import MedicalHistory from './pages/MedicalHistory'
import AIChat from './pages/AIChat'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'appointments', element: <Appointments /> },
      { path: 'book', element: <BookAppointment /> },
      { path: 'patients', element: <Patients /> },
      { path: 'chat', element: <Chat /> },
      { path: 'ai', element: <AIChat /> },
      { path: 'history', element: <MedicalHistory /> },
      { path: 'admin', element: <Admin /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])
