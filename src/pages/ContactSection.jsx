import React from "react";
import {
  ContactForm,
  ContactHeading,
  ContactFormBackground,
} from "../components/contact-section";

const ContactSection = () => {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-20 lg:px-8">
      <ContactFormBackground />
      <ContactHeading />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
