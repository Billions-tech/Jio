import { useState } from "react";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    guests: "1",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const { checkin, checkout, guests } = formData;

    // Generate WhatsApp message
    const message = `Hello JIO Royal Hotel,
    I would like to book a stay.%0A
    %0A
    Check-in Date: ${checkin}%0A
    Check-out Date: ${checkout}%0A
    Number of Guests: ${guests}.%0A
    %0A
    Please confirm my booking.%0A
    Thank you!`;

    // Redirect to WhatsApp (replace with your phone number)
    const whatsappURL = `https://wa.me/2348140063499?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-6">
      <div className="container border-2 border-yellow-800 p-6 bg-yellow-100 rounded-lg shadow-lg mx-auto   ">
        <h2 className="text-center text-2xl font-bold mb-6 text-yellow-700">
          Book Your Stay
        </h2>
        <form onSubmit={handleBooking} className="w-full">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Check-in Date */}
            <div>
              <label
                htmlFor="checkin"
                className="block text-sm text-yellow-800 font-medium mb-1"
              >
                Check-in Date
              </label>
              <input
                type="date"
                id="checkin"
                value={formData.checkin}
                onChange={handleChange}
                className="w-full border border-yellow-800 text-yellow-800 rounded-lg p-2"
                required
              />
            </div>
            {/* Check-out Date */}
            <div>
              <label
                htmlFor="checkout"
                className="block text-sm text-yellow-800 font-medium mb-1"
              >
                Check-out Date
              </label>
              <input
                type="date"
                id="checkout"
                value={formData.checkout}
                onChange={handleChange}
                className="w-full border border-yellow-800 text-yellow-800 rounded-lg p-2"
                required
              />
            </div>
            {/* Number of Guests */}
            <div>
              <label
                htmlFor="guests"
                className="block text-yellow-800 text-sm font-medium mb-1"
              >
                Guests
              </label>
              <select
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full border border-yellow-800 text-yellow-800 rounded-lg p-2"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
              </select>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-yellow-900 font-bold text-white py-2 px-4 rounded-lg hover:bg-yellow-700"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
