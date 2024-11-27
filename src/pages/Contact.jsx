import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container bg-gray-200 p-6  mx-auto">
      <h1 className="text-4xl font-bold underline text-center">Contact Us</h1>
      <p className="mt-6 text-center">
        Have questions or special requests? Get in touch with us!
      </p>
      <div className="mt-8 max-w-lg mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
