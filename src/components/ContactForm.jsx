import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mkggpzoz");
  if (state.succeeded) {
    return <p>Thanks for Reaching Out! I will get back to you ASAP</p>;
  }
  return (
    <form onSubmit={handleSubmit} className=" space-y-5 p-5">
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="name" className="" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" name="email" className="" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col">
        <label>Message:</label>
        <textarea
          id="message"
          name="message"
          className="block resize-none p-2 w-[95%] h-32"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        id="standbutton"
        className="p-4"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
