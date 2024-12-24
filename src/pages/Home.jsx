import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import Contact from "./Contact";
import BookingSection from "../components/BookingSection";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";
import AboutUs from "../components/AboutUs";
const Home = () => {
  const services = [
    {
      title: "Luxury Rooms",
      description: "Experience comfort and elegance.",
      image: "/assets/fum.jpeg",
    },
    {
      title: "Fine Dining",
      description: "Delight your taste buds with our gourmet cuisine.",
      image: "/assets/JioFood.jpg",
    },
    {
      title: "Event Hosting",
      description: "Host your events with style and convenience.",
      image: "/assets/rooms.jpeg",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative">
        <HeroSection
          title="Welcome to JIO Royal Hotel"
          subtitle="Your Satisfaction Is Our Priority."
          videoUrl="/assets/hero-video.mp4"
        />

        {/* Booking Section Overlay */}
        <div className="absolute inset-x-0 top-[590px]  z-20 flex justify-center ">
          <div className="rounded-lg w-11/12 max-w-xl">
            <BookingSection />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="">
        <AboutUs />
      </div>

      {/* Services Section */}
      <Services />

      <section className="container mx-auto my-12">
        <h2 className="section-heading">JIO Royal Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8 p-5">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </section>

      <div>
        <Gallery />
      </div>

      <div>
        <Testimonial />
      </div>

      {/* Contact Section */}
      <div className="bg-white py-6">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
