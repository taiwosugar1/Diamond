import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentForm.css"

// Load Stripe with your publishable key
const stripePromise = loadStripe("your-publishable-key");

const PaymentForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      // Create a PaymentIntent by calling your Node.js server
      const response = await axios.post("http://localhost:5000/create-payment-intent", {
        amount: amount * 100, // Convert amount to cents
        currency: "usd",
      });

      const clientSecret = response.data.clientSecret;

      // Confirm the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        setMessage("Payment successful!");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setMessage("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pay ${amount}</h2>
      <CardElement options={{ hidePostalCode: true }} />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

const PaymentPage = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm amount={50} /> {/* Replace 50 with your dynamic amount */}
  </Elements>
);

export default PaymentPage;
