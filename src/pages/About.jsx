import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Gallery from "../components/Gallery";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="container p-5 mx-auto my-12">
      <h1 className="section-heading">About Us</h1>

      <motion.div
        className="lg:flex justify-between items-center p-3"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Content */}
        <div className="lg:text-left text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Welcome to JIO Royal Hotel
          </h2>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
          Nestled in the heart of the city, JIO Royal Hotel is a haven of
            sophistication, comfort, and elegance. With a commitment to
            providing world-class amenities and unparalleled hospitality, we go
            above and beyond to make your stay truly exceptional. Whether you're
            traveling for business, leisure, or a mix of both, JIO Royal Hotel
            offers the perfect blend of luxury and convenience.
            <br /> Our strategic location ensures easy access to the city's
            vibrant attractions, cultural landmarks, and bustling business
            districts making us the ideal choice for all kinds of travelers.{" "}
            <br />{" "}
            <span className="font-bold text-lg text-[#be952d]">
              Why Choose Us?
            </span>
            <br /> Luxurious Accommodations, Gastronomic Delights,
            State-of-the-Art Facilities, Personalized Service, Whether you're
            hosting a corporate event, planning a romantic getaway, or simply
            looking for a retreat to unwind, JIO Royal Hotel promises an
            experience that is as unique as it is unforgettable. Your comfort is
            our priority, and your satisfaction is our mission. Welcome to JIO
            Royal Hotel – where luxury meets hospitality at its finest.
          
          </p>
        </div>

        {/* Image */}
        <motion.img
          src="/assets/rep.jpeg"
          alt="Hotel Exterior"
          className="w-[700px] mt-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      <Gallery />
    </div>
  );
};

export default About;
