import  { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const { name, roomType, checkIn, checkOut } = formData;

    const phone = +2348140063499;

    // Generate WhatsApp message
    const message = `Hello JIO Royal Hotel,%0A
    My name is ${name}.%0A
    I would like to book a ${roomType} room.%0A
    Check-In Date: ${checkIn}%0A
    Check-Out Date: ${checkOut}.%0A
    Please confirm my booking.%0A
    Thank you!`;

    // Redirect to WhatsApp
    const whatsappURL = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className=" mx-auto p-10 my-9">
      <h2 className="section-heading">Book a Room</h2>
      <form onSubmit={handleBooking} className="space-y-6 text-yellow-800">
        <div>
          <label htmlFor="name" className="block font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-800  rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="roomType" className="block font-medium">
            Room Type
          </label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-800 rounded-lg"
            required
          >
            <option value="">Select a Room</option>
            <option value="Single">Single Room</option>
            <option value="Double">Double Room</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkIn" className="block font-medium">
            Check-In Date
          </label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-800 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="checkOut" className="block font-medium">
            Check-Out Date
          </label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-800 rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
