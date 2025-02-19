import * as React from 'react';

export const EmailTemplate = ({ message }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        {message}
    </div>
);


export const WelcomeEmailTemplate = ({ firstName }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        <h1>Welcome, {firstName}!</h1>
        <p>Thank you for joining our platform. We’re thrilled to have you with us.</p>
    </div>
);

export const ThankYouEmailTemplate = ({ firstName }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        <h1>Thank You, {firstName}!</h1>
        <p>Thank you for your recent payment. We appreciate your support!</p>
    </div>
);

export const OrderConfirmationTemplate = ({ orderId, customerName, items }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        <h1>Order Confirmation</h1>
        <p>Hi {customerName},</p>
        <p>Your order <strong>{orderId}</strong> has been successfully placed.</p>
        {items && items.length > 0 && (
            <>
                <h2>Order Items:</h2>
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

export const PasswordResetTemplate = ({ resetLink, userEmail }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        <h1>Password Reset Request</h1>
        <p>Hello,</p>
        <p>We received a request to reset the password for <strong>{userEmail}</strong>.</p>
        <p>
            Please click the link below to reset your password:
            <br />
            <a href={resetLink} style={{ color: '#1a73e8' }}>
                Reset Password
            </a>
        </p>
        <p>If you did not request a password reset, please ignore this email.</p>
    </div>
);