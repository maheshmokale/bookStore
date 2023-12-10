import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51OLcI1BxeYhLgC7IkaiVC5w3CkXlzgJE1KhrDi3Q4D053aSbHcqCF0OoaIZMXId03r43CC5m3f2JKlCg0Hm5c8i200zEuoLQwQ');

    return (
        <section className="checkout-wrapper">
            <Authenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </Authenticator>
        </section>
    )
}

export default Checkout
