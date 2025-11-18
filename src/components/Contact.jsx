import React, { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.ok) {
        setStatus({ ok: true, msg: data.message })
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ ok: false, msg: 'Something went wrong' })
      }
    } catch (e) {
      setStatus({ ok: false, msg: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Get in touch</h2>
            <p className="mt-2 text-slate-600">Questions about pricing, features, or anything else? We’re here to help.</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="grid grid-cols-1 gap-4">
              <input className="rounded-xl border border-slate-200 px-4 py-3" name="name" placeholder="Name" value={form.name} onChange={onChange} required />
              <input className="rounded-xl border border-slate-200 px-4 py-3" name="email" placeholder="Email" value={form.email} onChange={onChange} type="email" required />
              <input className="rounded-xl border border-slate-200 px-4 py-3" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
              <textarea className="rounded-xl border border-slate-200 px-4 py-3" name="message" placeholder="Message" rows="4" value={form.message} onChange={onChange} required />
              <button disabled={loading} className="rounded-xl bg-slate-900 text-white px-4 py-3 hover:bg-slate-800 transition disabled:opacity-60">{loading ? 'Sending...' : 'Send message'}</button>
              {status && (
                <p className={`${status.ok ? 'text-emerald-600' : 'text-rose-600'} text-sm`}>{status.msg}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact