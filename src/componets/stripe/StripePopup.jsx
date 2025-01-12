import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"; // We'll create this next
import "./StripePopup.css"; // Add custom styles for popup

const stripePromise = loadStripe("your-publishable-key-here");

const StripePopup = ({ amount, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="stripe-popup-overlay">
      <div className="stripe-popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={amount} onClose={onClose} />
        </Elements>
      </div>
    </div>
  );
};

export default StripePopup;
