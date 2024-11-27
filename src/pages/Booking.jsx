const Booking = () => {
  return (
    <div className="container mx-auto my-12">
      <h1 className="text-4xl font-bold text-center">Book Your Stay</h1>
      <p className="mt-6 text-center">
        Plan your stay with us and enjoy an unforgettable experience.
      </p>
      <form className="mt-8 max-w-lg p-5 mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="date"
          name="checkin"
          placeholder="Check-in Date"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="date"
          name="checkout"
          placeholder="Check-out Date"
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
