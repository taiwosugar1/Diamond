import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Feedback.css';  // Import the CSS file

const FeedbackComponent = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('/feedbacks')
      .then(response => response.json())
      .then(data => setFeedbacks(data))
      .catch(error => console.error('Error fetching feedbacks:', error));
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
      const feedback = { feedback: newFeedback, email };

      fetch('/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setFeedbacks([...feedbacks, data]);
          sendEmail(newFeedback, email);
          setNewFeedback('');
          setEmail('');
        })
        .catch(error => console.error('Error submitting feedback:', error));
    }
  };

  const sendEmail = (feedback, email) => {
    const templateParams = {
      feedback,
      email,
    };

    emailjs.send('service_t6mkxje', 'template_09dkr2y', templateParams, 'uYcQfADfKeUw-K3Js')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (error) => {
        console.log('Failed to send email.', error);
      });
  };

  const handleClearFeedbacks = () => {
    fetch('/feedbacks', {
      method: 'DELETE',
    })
      .then(() => {
        setFeedbacks([]);
      })
      .catch(error => console.error('Error clearing feedbacks:', error));
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
            <button type="submit" className='feedback-button'>Submit</button>
          </form>
        </div>
        <h3 className='feedback-h3'> Feedbacks</h3>
        <div className='feedback-map'>
          <div className='feedback-ul'>
            {feedbacks.map((item, index) => (
              <p key={index} className='feedback-li'>
                {item.feedback} (Email: {item.email})
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