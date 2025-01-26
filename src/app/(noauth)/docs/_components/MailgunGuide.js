const MailgunGuide = ({ selectedOption }) => {
    if (selectedOption !== 'mailgun') return <div></div>;

    return (
        <>
            <h3>1. Create a Mailgun account</h3>
            <p>Sign up for a Mailgun account at <a href="https://www.mailgun.com">mailgun.com</a>.</p>

            <h3>2. Get your API key and domain</h3>
            <p>After signing up, find your API key and sandbox domain in the Mailgun dashboard.</p>

            <h3>3. Set up environment variables</h3>
            <p>Add your Mailgun API key and domain to your project's environment variables:</p>

            <pre><code>{`
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_DOMAIN=your_mailgun_domain_here
      `}</code></pre>

            <h3>4. Install the Mailgun SDK</h3>
            <p>Install the Mailgun SDK in your project:</p>

            <pre><code>npm install mailgun-js</code></pre>

            <h3>5. Configure email sending</h3>
            <p>Use the following code to send emails with Mailgun:</p>

            <pre><code>{`
import mailgun from 'mailgun-js';

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

const data = {
  from: 'Excited User <you@example.com>',
  to: 'user@example.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your first email!</p>'
};

mg.messages().send(data, function (error, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(body);
  }
});
      `}</code></pre>
        </>
    );
};

export default MailgunGuide;