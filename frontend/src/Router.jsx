import React, { useContext } from 'react'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { AuthProvider, AuthContext } from './context/AuthContext'

export default function Router(){
  return (
    <AuthProvider>
      <Inner />
    </AuthProvider>
  )
}
function Inner(){
  const { user } = useContext(AuthContext)
  if(!user) return <AuthScreens />
  return <Dashboard />
}
function AuthScreens(){ const [mode,setMode]=React.useState('signin'); return (<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:20}}><div style={{width:420,maxWidth:'100%'}}>{mode==='signin'?<SignIn/>:<SignUp/>}<div style={{textAlign:'center',marginTop:12}}>{mode==='signin'?<><span>Don't have account? </span><button className='link' onClick={()=>setMode('signup')}>Sign up</button></>:<><span>Already have account? </span><button className='link' onClick={()=>setMode('signin')}>Sign in</button></>}</div></div></div>)}
