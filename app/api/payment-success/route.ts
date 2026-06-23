import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session missing" },
        { status: 400 }
      );
    }

    const session =
      await stripe.checkout.sessions.retrieve(
        sessionId
      );

    if (
      session.payment_status !==
      "paid"
    ) {
      return NextResponse.json(
        {
          error: "Payment not completed",
        },
        {
          status: 400,
        }
      );
    }

    const existing =
      await supabase
        .from("orders")
        .select("id")
        .eq(
          "stripe_session_id",
          session.id
        )
        .single();

    if (!existing.data) {
      await supabase
        .from("orders")
        .insert({
          stripe_session_id:
            session.id,

          user_id:
            session.metadata?.userId,

          user_name:
            session.metadata?.userName,

          email:
            session.metadata?.userEmail,

          items: JSON.parse(
            session.metadata?.items ||
              "[]"
          ),

          payment_status:
            session.payment_status,

          amount:
            session.amount_total,
        });
    }

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        error: "Failed",
      },
      {
        status: 500,
      }
    );
  }
}