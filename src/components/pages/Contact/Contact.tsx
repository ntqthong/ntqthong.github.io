import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Message sent! (placeholder — wire up your backend or Formspree here)')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact">
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text" name="name" placeholder="Full name"
              value={form.name} onChange={handleChange} required
            />
            <input
              type="email" name="email" placeholder="Email address"
              value={form.email} onChange={handleChange} required
            />
          </div>
          <input
            type="text" name="subject" placeholder="Subject"
            value={form.subject} onChange={handleChange} required
          />
          <textarea
            name="message" placeholder="Your message..." rows={6}
            value={form.message} onChange={handleChange} required
          />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="map-wrap">
          <iframe
            title="Ho Chi Minh City"
            src="https://maps.google.com/maps?q=10.7438802,106.6955646&z=15&output=embed"
            width="100%"
            height="280"
            style={{ border: 0, borderRadius: '14px' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
