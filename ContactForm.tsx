import {FC, memo, useCallback, useMemo, useState} from 'react';


interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
 // Get data from the form.
 
  
  

// Send the data to the server in JSON format.
const JSONdata = JSON.stringify(data)

// API endpoint where we send form data.
const endpoint = 'https://sheetdb.io/api/v1/rdop7h1ysdxyx'

// Form the request for sending data to the server.
const options = {
  // The method is POST because we are sending data.
  method: 'POST',
  // Tell the server we're sending JSON.
  headers: {
    'Content-Type': 'application/json',
  },
  // Body of the request is the JSON data we created above.
  body: JSONdata,
}

// Send the form data to our forms API on Vercel and get a response.
const response = await fetch(endpoint, options)

// Get the response data from server as JSON.
// If server returns the name submitted, that means the form works.
const result = await response.json()
alert(`thank you for you contact ${result.data}`)
           


            


      console.log('data to sent ', data);
    },
    [data],
    );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
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
