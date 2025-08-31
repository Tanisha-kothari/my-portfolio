import React, {useState} from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm(){
  const [status,setStatus] = useState('')
  const sendEmail = (e) => {
    e.preventDefault()
    const form = e.target
    // NOTE: Replace the service/template/user ids after you create EmailJS account.
    emailjs.sendForm('service_fzvn78d','template_vjmw1ao',form,'z_jJu2zHGvFw4JMv3')
      .then(() => {
        setStatus('Message sent successfully! 🎀')
        form.reset()
      }, () => {
        setStatus('Oops — something went wrong. Try again later.')
      })
  }
  return (
    <form onSubmit={sendEmail} className="form-cozy bg-white p-6 rounded-2xl shadow-soft max-w-xl mx-auto space-y-4 relative">
      {/* decorative stickers */}
      <div className="sticker floaty" style={{left:10,top:-12}}>🎀</div>
      <div className="sticker" style={{right:12,top:-6}}>🧵</div>

      <label className="block">
        <span className="text-sm text-cocoa-700">Name</span>
        <input name="name" required className="mt-1 w-full p-3" placeholder="Your name" />
      </label>

      <label className="block">
        <span className="text-sm text-cocoa-700">Email</span>
        <input name="email" type="email" required className="mt-1 w-full p-3" placeholder="you@example.com" />
      </label>

      <label className="block">
        <span className="text-sm text-cocoa-700">Message</span>
        <textarea name="message" rows="5" required className="mt-1 w-full p-3" placeholder="Write me a cozy note..." />
      </label>

      <div className="flex items-center gap-3">
        <button type="submit" className="px-5 py-2 rounded-xl bg-pink-200">Send</button>
        {status && <div className="text-sm text-cocoa-700">{status}</div>}
      </div>

      <input type="hidden" name="to_email" value="kotharitanishanilesh@gmail.com" />
    </form>
  )
}
