import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Feedback.css';  // Import the CSS file

const FeedbackComponent = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Load feedbacks from localStorage on component mount
    const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  const handleFeedbackChange = (e) => {
    setNewFeedback(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newFeedback.trim() && email.trim()) {
      const updatedFeedbacks = [...feedbacks, { feedback: newFeedback, email }];
      setFeedbacks(updatedFeedbacks);
      localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
      sendEmail();
      setNewFeedback('');
      setEmail('');
    }
  };

  const sendEmail = () => {
    const templateParams = {
      feedback: newFeedback,
      email: email,
    };

    emailjs.send('service_t6mkxje', 'template_09dkr2y', templateParams, 'uYcQfADfKeUw-K3Js')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (error) => {
        console.log('Failed to send email.', error);
      });
  };

  const handleClearFeedbacks = () => {
    localStorage.removeItem('feedbacks');
    setFeedbacks([]);
  };

  return (
    <div className='feedback'>
      <div className="feedback-container">
        <div className='feedback-box-for-form'>
          <form onSubmit={handleSubmit} className='feedback-form'>
            <textarea
              value={newFeedback}
              onChange={handleFeedbackChange}
              placeholder="Leave your feedback here"
              className='feedback-textarea'
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email address"
              className='feedback-input'
            />
            <button type="submit" className='feedback-button'>Send feedback</button>
          </form>
        </div>
        <h3 className='feedback-h3'>All Feedbacks</h3>
        <div className='feedback-map'>
          <div className='feedback-ul'>
            {feedbacks.map((item, index) => (
              <p key={index} className='feedback-li'>
                {item.feedback}  {item.email}
              </p>
            ))}
          </div>
        </div>
        <button onClick={handleClearFeedbacks} className='feedback-button-delete'>Clear Feedbacks</button>
      </div>
    </div>
  );
};

export default FeedbackComponent;

