import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './NewsletterComponent.css';  // Import the CSS file

const NewsletterComponent = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      sendEmail(email);
      setEmail('');
    }
  };

  const sendEmail = (email) => {
    const templateParams = {
      email,
    };

    emailjs.send('service_t6mkxje', 'template_09dkr2y', templateParams, 'uYcQfADfKeUw-K3Js')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (error) => {
        console.log('Failed to send email.', error);
      });
  };

  return (
    <div className='newsletter'>
      <div className="newsletter-container">
        <div className='newsletter-box-for-form'>
          <h2>Subscribe to our newsletter</h2>
          <form onSubmit={handleSubmit} className='newsletter-form'>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email address"
              className='newsletter-input'
            />
            <button type="submit" className='newsletter-button'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterComponent;