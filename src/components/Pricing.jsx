import React from 'react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'For early projects and small teams',
    features: ['Free virtual cards', 'Basic analytics', 'Community support'],
  },
  {
    name: 'Growth',
    price: '$29',
    desc: 'For growing startups',
    features: ['Physical cards', 'Advanced insights', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99',
    desc: 'For established businesses',
    features: ['Unlimited cards', 'Custom limits & roles', 'Dedicated manager'],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Simple, fair pricing</h2>
          <p className="mt-2 text-slate-600">Choose a plan that fits your stage</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-6 border ${t.highlight ? 'border-slate-900 shadow-lg bg-white' : 'border-slate-200 bg-white'} `}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-800">{t.name}</h3>
                <div className="text-3xl font-bold text-slate-900">{t.price}<span className="text-base font-normal text-slate-500">/mo</span></div>
              </div>
              <p className="mt-2 text-slate-600">{t.desc}</p>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-3 ${t.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-900/10 text-slate-900 hover:bg-slate-900/20'} transition`}>
                Choose {t.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing