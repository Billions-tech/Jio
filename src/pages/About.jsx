const About = () => {
  return (
    <div className="container p-5 mx-auto my-12">
      <h1 className="text-4xl font-bold text-center underline">About Us</h1>
      <p className="mt-6 text-lg text-center text-gray-700">
        Nestled in the heart of the city, our hotel offers world-class amenities
        and unparalleled hospitality. Whether you're here for business or
        leisure, we provide the perfect blend of luxury and comfort.
      </p>
      <img
        src="/src/assets/hotel-exterior.jpg"
        alt="Hotel Exterior"
        className="w-full mt-8 rounded-lg shadow-md"
      />
    </div>
  );
};

export default About;
