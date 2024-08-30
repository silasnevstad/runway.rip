const ResendGuide = ({ selectedOption }) => {
    if (selectedOption !== 'resend') return <div></div>;

    return (
        <>
            <h3>1. Create a Resend account</h3>
            <p>First, sign up for a Resend account at <a href="https://resend.com">resend.com</a>.</p>

            <h3>2. Get your API key</h3>
            <p>After signing up, navigate to the API Keys section in your Resend dashboard and create a new API key.</p>

            <h3>3. Set up environment variables</h3>
            <p>Add your Resend API key to your project's environment variables:</p>

            <pre><code>RESEND_API_KEY=your_resend_api_key_here</code></pre>

            <h3>4. Install the Resend SDK</h3>
            <p>Install the Resend SDK in your project:</p>

            <pre><code>npm install resend</code></pre>

            <h3>5. Configure email sending</h3>
            <p>Use the following code to send emails with Resend:</p>

            <pre><code>{`
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'you@example.com',
  to: 'user@example.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your first email!</p>'
});
      `}</code></pre>
        </>
    );
};

export default ResendGuide;