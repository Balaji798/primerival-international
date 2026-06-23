/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
  typescript: true,
});

export const getStripeProducts = async () => {
  const products = await stripe.products.list({
    active: true,
    limit: 100,
  });

  return products.data;
};

export const createCheckoutSession = async ({ items, user }: any) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items.map((item: { name: string; price: number; quantity: number; }) => ({
      price_data: {
        currency: "thb",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Convert to cents
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    metadata: {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,

      items: JSON.stringify(items),
    },
    shipping_address_collection: {
      allowed_countries: ["TH", "US", "GB"],
    },
  });

  return session;
};
