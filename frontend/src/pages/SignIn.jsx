import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
export default function SignIn(){ const { signIn } = useContext(AuthContext); const [form,setForm]=useState({email:'',password:''}); const [err,setErr]=useState('')
  function change(e){ setForm({...form,[e.target.name]:e.target.value}) }
  async function submit(e){ e.preventDefault(); try{ await signIn(form) }catch(ex){ setErr(ex.response?.data?.message || ex.message) } }
  return (<div className='panel'><h2>Sign in</h2>{err && <div className='error'>{err}</div>}<form onSubmit={submit}><input name='email' placeholder='Email' className='input' value={form.email} onChange={change} /><input name='password' placeholder='Password' type='password' className='input' value={form.password} onChange={change} /><button className='btn' type='submit'>Sign in</button></form></div>) }
