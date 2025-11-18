import React from 'react'

const features = [
  {
    title: 'Issue virtual & physical cards',
    desc: 'Create pastel-branded cards in seconds with spend controls and budgets.',
  },
  {
    title: 'Real-time insights',
    desc: 'See every transaction instantly and track categories with ease.',
  },
  {
    title: 'Developer-friendly',
    desc: 'Simple APIs and webhooks to automate payouts, refunds, and more.',
  },
]

function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-b from-white to-slate-50">
              <h3 className="text-lg font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features