import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Gallery from "../components/Gallery";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="container p-5 mx-auto my-12 mt-[180px]">
      <h1 className="section-heading">About Us</h1>

      <motion.div
        className="lg:flex justify-between items-center p-3"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Welcome to JIO Royal Hotel
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Nestled in the heart of the city, our hotel offers world-class
            amenities and unparalleled hospitality. Whether you're here for
            business or leisure, we provide the perfect blend of luxury and
            comfort.
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
