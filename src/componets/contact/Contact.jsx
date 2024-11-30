import React, { useRef } from 'react';
import "./Contact.css";
import Swal from 'sweetalert2';

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_EMAILJS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success"
      });
      clearForm();
    }
  };

  const clearForm = () => {
    formRef.current.reset();
  };

  return (
    <section className='contact-form'>
      <p className="abbout-title" data-aos="zoom-in">// SEND US MESSAGE //</p>
      <h2 className="abbout-heading">Feel Free to write</h2>
      <form onSubmit={onSubmit} ref={formRef}>
        <div className="input-box" data-aos="flip-up">
          <input type="text" placeholder='Full Name' name='Your Name' required className='field' />
        </div>

        <div className="input-box" data-aos="flip-up">
          <input type="email" placeholder='Enter Email' name='email' required className='field' />
        </div>

        <div className="input-box" data-aos="flip-up">
          <input type="text" placeholder='Subject' name='subject' required className='field' />
        </div>

        <div className="input-box" data-aos="flip-up">
          <input type="text" placeholder='Phone' name='phone number' required className='field' />
        </div>

        <div className="input-box" data-aos="flip-up">
          <textarea name="message" placeholder='Enter your message' required className='field message'></textarea>
        </div>

        <button type='submit' data-aos="flip-up">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;