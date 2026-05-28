import { useState, useEffect, useRef } from 'react'
import { X, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const API_BASE = import.meta.env.VITE_API_BASE ?? 'https://api.copantry.com'

const CONFIG = {
  contact: {
    title: 'Get in touch',
    intro: "We'd love to hear from you. Fill in the form and we'll reply to your email.",
  },
  investors: {
    title: 'Investor enquiry',
    intro: 'Interested in CoPantry? Tell us a bit about yourself and we\'ll be in touch.',
  },
}

export default function ContactModal({ type, onClose }) {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const backdropRef           = useRef(null)
  const firstFieldRef         = useRef(null)

  const { title, intro } = CONFIG[type] ?? CONFIG.contact

  // Close on ESC
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Auto-focus first field
  useEffect(() => { firstFieldRef.current?.focus() }, [])

  function set(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }))
  }

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type }),
      })
      if (!res.ok) throw new Error('server error')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputCls = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 transition'
  const remaining = 2000 - form.message.length

  return (
    <div
      ref={backdropRef}
      onClick={e => { if (e.target === backdropRef.current) onClose() }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{intro}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center py-8 text-center gap-3">
              <CheckCircle size={40} className="text-green-500" />
              <p className="font-bold text-gray-900">Message sent!</p>
              <p className="text-sm text-gray-500">We'll reply to your email as soon as we can.</p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                  Your name
                </label>
                <input
                  ref={firstFieldRef}
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Jane Smith"
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={set('email')}
                  placeholder="jane@example.com"
                  className={inputCls}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Message
                  </label>
                  <span className={`text-xs ${remaining < 100 ? 'text-orange-500' : 'text-gray-400'}`}>
                    {remaining} left
                  </span>
                </div>
                <textarea
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  placeholder={type === 'investors'
                    ? 'Tell us about your fund, thesis, or interest in CoPantry…'
                    : 'What can we help you with?'}
                  className={`${inputCls} resize-none`}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  <AlertCircle size={16} className="shrink-0" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold rounded-xl transition-colors"
              >
                {status === 'sending'
                  ? <><Loader size={16} className="animate-spin" /> Sending…</>
                  : <><Send size={15} /> Send message</>}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We typically reply within 1–2 business days.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
