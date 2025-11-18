import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-[#F4F5FF]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90 pointer-events-none" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600 border border-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Now in soft pastel beta
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800">
              Simple, modern banking for builders
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600">
              A minimalist fintech platform with transparent pricing, built for digital businesses. Issue cards, manage spend, and scale with ease.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">Get started</a>
              <a href="#features" className="px-5 py-3 rounded-xl bg-white/80 text-slate-900 border border-slate-200 hover:bg-white transition">See features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero