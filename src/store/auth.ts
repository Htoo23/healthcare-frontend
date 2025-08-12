
import { create } from 'zustand'

type AuthState = {
  user: null | { id: string; name: string; role: 'doctor' | 'patient' | 'admin' }
  login: (name: string) => void
  logout: () => void
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  login: (name) => set({ user: { id: '1', name, role: 'patient' } }),
  logout: () => set({ user: null })
}))
