import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      "your-client-secret-from-backend", // Replace with your backend client secret endpoint
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      alert(`Payment failed: ${error.message}`);
    } else if (paymentIntent) {
      alert("Payment successful!");
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pay ${amount}</h2>
      <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
