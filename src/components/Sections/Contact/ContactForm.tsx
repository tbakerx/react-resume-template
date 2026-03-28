// src/components/Sections/Contact/ContactForm.tsx

import {FC, memo} from 'react';

const ContactForm: FC = memo(() => {
  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    // Add your Formspree action URL here. The method should be "POST".
    <form
      className="grid min-h-[320px] grid-cols-1 gap-y-4"
      method="POST"
      action="https://formspree.io/f/mnnojnro" // <-- IMPORTANT: PASTE YOUR URL HERE
    >
      <input
        className={inputClasses}
        name="name" // "name" attribute is required for Formspree
        placeholder="Name"
        required
        type="text"
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email" // "email" attribute is required for Formspree
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message" // "message" attribute is required for Formspree
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;