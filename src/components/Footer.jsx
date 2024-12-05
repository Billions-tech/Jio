import { MdOutlineMail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto lg:flex justify-around text-center items-center">
        {/* Contact Information */}
        <div className="lg:text-left mb-4">
          <p className="mb-2">
            <a href="mailto:jioroyalinn@gmail.com" className="hover:text-yellow-400">
              <MdOutlineMail className="inline mr-2" />
              jioroyalinn@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <a href="tel:+08140063499" className="hover:text-yellow-400">
              <CiPhone className="inline mr-2" />
              081 4006 3499
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps?q=NO+2,+AKABAMAN+STREET,+OFF+EWAH+ROAD,+BENIN+CITY"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaMapMarkerAlt className="inline mr-2" />
              NO 2, AKABAMAN STREET, OFF EWAH ROAD, BENIN CITY
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mb-4">
          <p className="text-lg">Follow us:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div>
          <p>&copy; {new Date().getFullYear()} JIO ROYAL HOTEL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
