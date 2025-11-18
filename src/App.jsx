import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Auth from './components/Auth'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="font-semibold">PastelPay</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#auth" className="hover:text-slate-900">Login</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#pricing" className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-800">Get started</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Auth />
        <Blog />
        <Contact />
      </main>

      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App