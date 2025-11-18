import React, { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Auth() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register'
      const body = mode === 'login' ? { email: form.email, password: form.password } : form
      const res = await fetch(`${API}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      if (data.ok) {
        setStatus({ ok: true, msg: mode === 'login' ? `Welcome back, ${data.name}` : 'Account created!' })
        if (mode === 'register') setMode('login')
      } else {
        setStatus({ ok: false, msg: data.detail || 'Something went wrong' })
      }
    } catch (e) {
      setStatus({ ok: false, msg: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="auth" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Sign in or create an account</h2>
            <p className="mt-2 text-slate-600">Access your dashboard to manage cards and spend.</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="flex gap-2 mb-4">
              <button type="button" onClick={() => setMode('login')} className={`px-3 py-2 rounded-lg ${mode==='login' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'}`}>Login</button>
              <button type="button" onClick={() => setMode('register')} className={`px-3 py-2 rounded-lg ${mode==='register' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'}`}>Register</button>
            </div>
            {mode === 'register' && (
              <input className="mb-3 w-full rounded-xl border border-slate-200 px-4 py-3" name="name" placeholder="Full name" value={form.name} onChange={onChange} required />
            )}
            <input className="mb-3 w-full rounded-xl border border-slate-200 px-4 py-3" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
            <input className="mb-3 w-full rounded-xl border border-slate-200 px-4 py-3" name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} required />
            <button disabled={loading} className="w-full rounded-xl bg-slate-900 text-white px-4 py-3 hover:bg-slate-800 transition disabled:opacity-60">{loading ? 'Please wait...' : (mode === 'login' ? 'Login' : 'Create account')}</button>
            {status && (
              <p className={`mt-2 ${status.ok ? 'text-emerald-600' : 'text-rose-600'} text-sm`}>{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Auth