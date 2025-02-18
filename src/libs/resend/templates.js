import * as React from 'react';

// A simple welcome email template
export const EmailTemplate = ({ firstName }) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
            <h1>Welcome, {firstName}!</h1>
            <p>Thank you for signing up. We're excited to have you on board!</p>
        </div>
    );
};

// An example order confirmation template
export const OrderConfirmationTemplate = ({ orderId, customerName, items }) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
            <h1>Order Confirmation</h1>
            <p>Hi {customerName},</p>
            <p>
                Thank you for your order. Your order ID is: <strong>{orderId}</strong>.
            </p>
            {items && items.length > 0 && (
                <>
                    <h2>Items:</h2>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            )}
            <p>We appreciate your business!</p>
        </div>
    );
};