import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false); // ✅

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5e5gici',
      'template_xndhrja',
      form.current,
      'DTacKUXtPYRlbD24R'
    )
    .then(() => {
        setShowPopup(true); // ✅ Show popup
        setTimeout(() => setShowPopup(false), 3000); // ✅ Hide after 3s
        form.current.reset();
    }, (error) => {
        alert('Failed to send message ❌');
        console.error(error);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          Have a project or question? Drop a message below and I’ll respond soon.
        </p>

        {/* ✅ Popup Message */}
        {showPopup && (
          <div className="popup-message">
            ✅ Message sent successfully!
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
