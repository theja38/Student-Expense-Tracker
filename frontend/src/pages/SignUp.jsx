import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
export default function SignUp(){ const { signUp } = useContext(AuthContext); const [form,setForm]=useState({name:'',email:'',password:''}); const [err,setErr]=useState('')
  function change(e){ setForm({...form,[e.target.name]:e.target.value}) }
  async function submit(e){ e.preventDefault(); try{ await signUp(form) }catch(ex){ setErr(ex.response?.data?.message || ex.message) } }
  return (<div className='panel'><h2>Sign up</h2>{err && <div className='error'>{err}</div>}<form onSubmit={submit}><input name='name' placeholder='Full name' className='input' value={form.name} onChange={change} /><input name='email' placeholder='Email' className='input' value={form.email} onChange={change} /><input name='password' placeholder='Password' type='password' className='input' value={form.password} onChange={change} /><button className='btn' type='submit'>Create account</button></form></div>) }
