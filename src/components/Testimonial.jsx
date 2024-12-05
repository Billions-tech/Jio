const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Staying at JIO Royal Hotel was a delightful experience. The rooms were luxurious, and the staff went above and beyond to make our stay memorable.",
      name: "Simon Peter",
      role: "Business Traveler",
    },
    {
      quote:
        "The outdoor bar was perfect for a relaxing evening. Excellent service and ambiance!",
      name: "Mercy Gold",
      role: "Tourist",
    },
    {
      quote:
        "JIO Royal Hotel exceeded our expectations. We hosted our wedding reception here, and it was flawless.",
      name: "Felix Royal",
      role: "Event Organizer",
    },
  ];

  return (
    <section className=" py-12">
      <div className="container bg-yellow-100 mx-auto px-6 p-10 text-center">
        <h2 className="section-heading mb-4">What Our Guests Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
            >
              <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              <h3 className="text-lg font-bold text-yellow-800">
                {testimonial.name}
              </h3>
              <span className="text-sm text-yellow-600">
                {testimonial.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
