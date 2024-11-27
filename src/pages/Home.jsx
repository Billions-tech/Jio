import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const services = [
    {
      title: "Luxury Rooms",
      description: "Experience comfort and elegance.",
      image: "/src/assets/hotel-exterior.jpg",
    },
    {
      title: "Fine Dining",
      description: "Delight your taste buds with our gourmet cuisine.",
      image: "/src/assets/hotel-exterior.jpg",
    },
    {
      title: "Event Hosting",
      description: "Host your events with style and convenience.",
      image: "/src/assets/hotel-exterior.jpg",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Welcome to JIO Royal Hotel"
        subtitle="Your perfect getaway destination."
        videoUrl="/src/assets/hero-video.mp4"
      />

      <About />

      <section className="container mx-auto my-12">
        <h2 className="text-3xl font-bold underline text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8 p-5">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Home;
