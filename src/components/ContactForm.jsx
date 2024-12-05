import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;

    if (!name || !email || !message ||!phone ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Generate WhatsApp message
    const whatsappMessage = `Hello JIO Royal Hotel,%0A
    You have a new inquiry from your website contact form:%0A
    %0A
    Name: ${name}%0A
    Email: ${email}%0A
    Phone: ${phone}
    Message: ${message}%0A
    %0A
    Please respond at your earliest convenience.%0A
    Thank you!`;

    // Redirect to WhatsApp (replace with your phone number)
    const whatsappURL = `https://wa.me/23481040063499?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-yellow-800 text-yellow-800 rounded"
        required
      />
      <input
        type="number"
        name="phone"
        placeholder="Your Phone number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-yellow-800 text-yellow-800 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-yellow-800 text-yellow-800 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-yellow-800 text-yellow-800 rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-yellow-900 hover:bg-yellow-700 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
