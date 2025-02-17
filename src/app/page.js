"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function Page() {
  const handleButtonClick = async () => {
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Context-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 200 * 1000,
        customer: cardInfo.customer,
        paymentMethodId: cardInfo.id,
        currency: "usd",
      }),
    });

    console.log(response);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="app">
        <h1>Apple Mac Laptop</h1>
        <div className="product">
          <img src="/assets/laptop.jpg" alt="laptop image" />
          <p>Applce Silicon Laptop, 8GB RAM, 256GB SSD</p>
        </div>
        <div className="button">
          <button onClick={handleButtonClick}>Pay 200$</button>
        </div>
      </div>
    </Elements>
  );
}

const cardInfo = {
  id: "pm_1QrbTXA5DKgBKLrPOrE1mRNX",
  object: "payment_method",
  allow_redisplay: "unspecified",
  billing_details: {
    address: {
      city: null,
      country: null,
      line1: null,
      line2: null,
      postal_code: null,
      state: null,
    },
    email: null,
    name: "Rupom",
    phone: null,
  },
  card: {
    brand: "visa",
    checks: {
      address_line1_check: null,
      address_postal_code_check: null,
      cvc_check: "pass",
    },
    country: "US",
    display_brand: "visa",
    exp_month: 10,
    exp_year: 2028,
    fingerprint: "04OU1Y1XQWVAMUZF",
    funding: "credit",
    generated_from: null,
    last4: "4242",
    networks: {
      available: ["visa"],
      preferred: null,
    },
    regulated_status: "unregulated",
    three_d_secure_usage: {
      supported: true,
    },
    wallet: null,
  },
  created: 1739349559,
  customer: "cus_RkJUwWcMkVvtaL",
  livemode: false,
  metadata: {},
  type: "card",
};
