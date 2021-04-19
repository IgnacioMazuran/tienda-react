import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({precio}) => {
    const precioStripe = precio * 100;
    const publishableKey = 'pk_test_51IgtTMGxYJN7xLRjtEDsEUgkgiSZPvevtfgX4hVQK0KQ6AzPlFcA6tp5vNrTWgMyV5EDX7l77q3UffjINmDn4k0y00ppdTqbVm'

    const onToken = token => {
        console.log(token);
        alert('Pago Realizado con Éxito');
    };

    return(
        <StripeCheckout label='Realizar Pago' 
        name='Tienda-Arg' 
        currency="ARS"
        billingAddress
        shippingAddress
        image='https://www.flaticon.com/svg/vstatic/svg/747/747156.svg?token=exp=1618845767~hmac=4a3ca38848d1472fee9143076802bc7d'
        description={`Su total es de $${precio}`}
        amount={precioStripe}
        panelLabel='Realizar Pago'
        token={onToken}
        stripeKey={publishableKey} />
    )

};

export default StripeCheckoutButton;