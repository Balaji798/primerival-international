/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  useEffect,
  useState,
} from 'react';

import {
  useSearchParams,
  useRouter,
} from 'next/navigation';

export default function SuccessContent() {
  const searchParams =
    useSearchParams();

  const router =
    useRouter();

  const sessionId =
    searchParams.get(
      'session_id'
    );

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');

  useEffect(() => {
    const saveOrder =
      async () => {
        try {
          if (!sessionId) {
            setLoading(false);
            return;
          }

          const response =
            await fetch(
              '/api/payment-success',
              {
                method: 'POST',

                headers: {
                  'Content-Type':
                    'application/json',
                },

                body:
                  JSON.stringify({
                    sessionId,
                  }),
              }
            );

          const data =
            await response.json();

          if (!response.ok) {
            throw new Error(
              data.error
            );
          }

        } catch (err: any) {
          setError(
            err.message
          );
        } finally {
          setLoading(false);
        }
      };

    saveOrder();

  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Processing payment...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">

        <h1 className="text-2xl font-bold mb-3">
          Payment Successful!
        </h1>

        <p className="mb-5">
          Order saved successfully.
        </p>

        <button
          onClick={() =>
            router.push('/')
          }
          className="bg-red-500 text-white px-6 py-3 rounded-full"
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}