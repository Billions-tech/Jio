import { useEffect } from "react";
import { BiDrink } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdLocalLaundryService } from "react-icons/md";
import { FcElectricity } from "react-icons/fc";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const services = [
    { icon: <IoRestaurantOutline />, label: "Restaurant & Bar" },
    { icon: <BiDrink />, label: "Indoor VIP Bar" },
    { icon: <FaUmbrellaBeach />, label: "Outdoor Relaxation Bar" },
    { icon: <MdLocalLaundryService />, label: "Laundry" },
    { icon: <MdOutlineSecurity />, label: "Top Security Guaranteed" },
    { icon: <FcElectricity />, label: "24/7 Power Supply" },
    { icon: <IoRestaurantOutline />, label: "Continental Dishes" },
    { icon: <MdLocalLaundryService />, label: "Laundry" },
  ];

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container bg-yellow-100 mx-auto my-auto p-1  text-center overflow-hidden shadow-md rounded-lg">
      {/* Section Heading */}
      <h2 className="section-heading" data-aos="fade-down">
        Our Services
      </h2>

      {/* Services List */}
      <div className="grid grid-cols-2  gap-y-4 m-5 mx-auto md:grid-cols-3 lg:grid-cols-4 lg:gap-6  ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col mx-auto justify-center items-center bg-white rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ width: "170px", height: "170px" }}
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Staggered animation
          >
            <div className="text-7xl text-yellow-800 mb-3">{service.icon}</div>
            <p className="text-yellow-800 font-bold text-lg text-center">
              {service.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
