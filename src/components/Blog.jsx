import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${API}/api/blogs`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">From the blog</h2>
            <p className="mt-2 text-slate-600">Product updates and ideas</p>
          </div>
        </div>

        {loading ? (
          <p className="text-slate-500">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {posts.map((p) => (
              <article key={p.slug} className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-sm transition">
                <h3 className="text-lg font-semibold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.summary}</p>
                <div className="mt-4 text-sm text-slate-500">By {p.author}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog