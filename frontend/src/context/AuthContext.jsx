import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const AuthContext = createContext()
const API = import.meta.env.VITE_API_URL || 'http://localhost:4000'
export function AuthProvider({children}){
  const [user,setUser]=useState(null)
  useEffect(()=>{ const raw=localStorage.getItem('session_v1'); if(raw) setUser(JSON.parse(raw)) },[])
  async function signUp({name,email,password}){ const res = await axios.post(`${API}/auth/signup`,{name,email,password}); localStorage.setItem('session_v1', JSON.stringify(res.data)); setUser(res.data.user) }
  async function signIn({email,password}){ const res = await axios.post(`${API}/auth/login`,{email,password}); localStorage.setItem('session_v1', JSON.stringify(res.data)); setUser(res.data.user) }
  function signOut(){ localStorage.removeItem('session_v1'); setUser(null) }
  return <AuthContext.Provider value={{user, signUp, signIn, signOut}}>{children}</AuthContext.Provider>
}
