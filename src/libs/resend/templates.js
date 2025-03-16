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

export const ThankYouEmailTemplate = () => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        <h1>Thank you for your purchase!</h1>
        <p>We appreciate your business.</p>
    </div>
);

export const TrialEndEmailTemplate = ({ daysLeft }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        <h1>Trial Ending Soon</h1>
        <p>Your trial ends in {daysLeft} days. Don't miss out!</p>
    </div>
);

export const InvoicePaidEmailTemplate = () => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        <h1>Invoice Paid</h1>
        <p>Your invoice has been successfully paid. Thank you!</p>
    </div>
);

export const InvoiceFailedEmailTemplate = () => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        <h1>Invoice Payment Failed</h1>
        <p>There was an issue with your invoice payment. Please check your details.</p>
    </div>
);

