import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JWdhBLJ2TwM3d8FdFgqcAAdUQ245ouHYUZSR9vGmpq3Anoco9ip6PgEgiKtJ4iHcw3mHVTZOSS5upu662tiAjWr000ExQJ640";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
      <StripeCheckout
        label="Pay Now"
        name="Crwn Shopping"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
}
 
export default StripeButton;