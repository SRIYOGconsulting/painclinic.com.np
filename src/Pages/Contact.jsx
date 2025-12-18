import Phone from "/icons/phone.svg";
import Send from "/icons/send.svg";
import MapPin from "/icons/map-pin.svg";
import Clock from "/icons/clock.svg";
import { motion } from "motion/react"
import reception from "/images/contact/reception.jpg";
import sectitles1 from "/images/shapes/sec-title-s-1.png";

const Contact = () => {
  return (
    <div className="bg-[#eef3f9] min-h-screen mt-20 font-[sans-serif]">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center py-15 px-6">

        {/* Left Image Card */}
        <div className="bg-white rounded-3xl shadow-md p-8">
          <img
            src={reception}
            alt="Clinic Reception"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right Info Section */}
        <div className="space-y-6">
          <div className="flex gap-2"><motion.img src={sectitles1} animate={{ rotate: 360 }} transition={{ repeat: Infinity }} className="h-4" />
            <p className="text-sm text-gray-700 font-semibold flex items-center gap-1 mb-2">
              Contact Us
            </p></div>

          <h1 className="text-4xl font-bold text-[#1d2c4b] leading-tight">
            Advance Pain <br /> Specialist Clinic
          </h1>

          {/* Call */}
          <div className="flex items-start space-x-4">
            <div className="bg-[#e8f0fb] p-3 rounded-full">
              <img src={Phone} alt="phone icon" className="w-5 h-5 text-[#234179]" />
            </div>
            <div>
              <p className="font-semibold text-[#1d2c4b]">Call Now</p>
              <a href="tel:+9779701012345" className="text-gray-600">+977-97010-12345</a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="bg-[#e8f0fb] p-3 rounded-full">
              <img src={Send} alt="send icon" className="w-5 h-5 text-[#234179]" />
            </div>
            <div>
              <p className="font-semibold text-[#1d2c4b]">Info@Painclinic.Com.Np</p>
              <a href="mailto:info@painclinic.com.np" className="text-gray-600">info@painclinic.com.np</a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="bg-[#e8f0fb] p-3 rounded-full">
              <img src={MapPin} alt="map pin icon" className="w-5 h-5 text-[#234179]" />
            </div>
            <div>
              <p className="font-semibold text-[#1d2c4b]">Address</p>
              <p className="text-gray-600">Birtamode, Jhapa, Nepal</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-start space-x-4">
            <div className="bg-[#e8f0fb] p-3 rounded-full">
              <img src={Clock} alt="clock icon" className="w-5 h-5 text-[#234179]" />
            </div>
            <div>
              <p className="font-semibold text-[#1d2c4b]">Opening And Closing Time</p>
              <p className="text-gray-600">(Opening) 9:00 AM – 4:00 PM (Closing)</p>
            </div>
          </div>

        </div>
      </div>
      <div className="mt-16">
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d114119.01942035899!2d87.90179141821416!3d26.641458251071874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39e5bb007acd06ab%3A0xca6d4798d37c7569!2sJXRM%2BHMW%20Advance%20Pain%20Specialist%20Clinic%201%2C%20Mahendra%20Hwy%2C%20Birtamod%2057206!3m2!1d26.641517999999998!2d87.98420329999999!5e0!3m2!1sen!2snp!4v1763392465591!5m2!1sen!2snp" className="w-600 h-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Contact;
