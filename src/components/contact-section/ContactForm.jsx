import React, { useState } from "react";
import { ChevronDownIcon } from "../../assets/icons";
import { ContactButton, ContactSwitchGroup } from "./";

const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <form className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="form-label-element ">
            First Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="form-input-element"
            />
          </div>
        </div>

        <div>
          <label htmlFor="last-name" className="form-label-element">
            Last Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="form-input-element"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="company" className="form-label-element">
            Company
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="organization"
              className="form-input-element"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="form-label-element">
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="form-input-element"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone-number" className="form-label-element">
            Phone Number
          </label>
          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                name="country"
                id="country"
                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <ChevronDownIcon
                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className="form-input-element"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="form-label-element">
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="form-input-element resize-none"
              defaultValue={""}
            />
          </div>
        </div>
        <ContactSwitchGroup agreed={agreed} setAgreed={setAgreed} />
      </div>
      <ContactButton />
    </form>
  );
};

export default ContactForm;
