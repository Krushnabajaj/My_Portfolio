// components/ContactForm.js
export default function ContactForm() {
  return (
      <form
          name="contact"
          method="POST"
          netlify
          data-netlify="true"
          action="/success" // Optional: Redirect after form submission
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name:
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
  );
}