import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { amount, customer, paymentMethodId, currency } = await req.json();

  const response = await stripe.paymentIntents.create({
    customer,
    amount,
    currency,
    confirm: true,
    payment_method: paymentMethodId,
    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never",
    },
  });
  console.log("++ response ++", response);

  return NextResponse.json({ message: "Hello from payment" });
}

// https://chatgpt.com/share/67b22cdb-aeb8-800d-868c-f3e9c8d69041
