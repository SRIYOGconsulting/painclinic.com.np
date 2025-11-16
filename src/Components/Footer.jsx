import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/pain-clinic-logo.png";
import footerBg from "../assets/images/footer-bg.png";
import headache from "../assets/images/headache-pain.jpg";
import neckPain from "../assets/images/neck-pain.jpg";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  UserRound,
  MessageCircleMore,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-[#051739] text-white font-[sans-serif] bg-cover bg-center bg-no-repeat relative font-[sans-serif]"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-[#051739]/95"></div>

      <div className="relative z-10">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4">
          {/* Left Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Logo" className="h-20 w-60" />
            </div>
            <p className="text-[#456EA1] leading-relaxed text-[16px] mb-4 ">
              Comprehensive Pain Management Clinic in Birtamode, Jhapa, Nepal specializing multiple treatment methods to cure your pain.
            </p>
            <button className="border border-gray-700 text-[15px] px-4 py-2 rounded-full text-[#234179]">
              BOOK AN APPOINTMENT
            </button>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube size={19} />
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div className="md:col-span-1 md:pl-10">
            <h3 className="font-semibold text-[20px] mb-4 border-b border-gray-500 pb-1 w-fit">
              Our <span className="text-[#234179]">Treatments</span>
            </h3>
            <ul className="space-y-2 text-[#456EA1] text-[16px]">
              <li className="hover:underline"><Link to="/what-is-headache">Headache</Link></li>
              <li className="hover:underline"><Link to="/what-is-joint-pain">Joint Pain</Link></li>
              <li className="hover:underline"><Link to="/what-is-neck-pain">Neck Pain</Link></li>
              <li className="hover:underline"><Link to="/what-is-shoulder-pain">Shoulder Pain</Link></li>
              <li className="hover:underline"><Link to="/what-is-orofacial-pain">Orofacial Pain</Link></li>
              <li className="hover:underline"><Link to="/what-is-knee-pain">Knee Pain</Link></li>
            </ul>
          </div>

          {/* Browse More */}
          <div>
            <h3 className="font-semibold text-[20px] mb-4 border-b border-gray-500 pb-1 w-fit">
              Browse <span className="text-[#234179]">More</span>
            </h3>
            <ul className="space-y-2 text-[#456EA1] text-[16px]">
              <li className="hover:underline"><Link to="/what-is-nerve-pain">Nerve Related Pain</Link></li>
              <li className="hover:underline"><Link to="/what-is-muscle-pain">Muscle Pain</Link></li>
              <li className="hover:underline"><Link to="/what-is-sports-pain">Sports Injury</Link></li>
              <li className="hover:underline"><Link to="/what-is-whole-body-pain">Whole Body Pain</Link></li>
              <li className="hover:underline"><Link to="/what-is-cancer-pain">Cancer Pain</Link></li>
            </ul>
          </div>

          {/* Latest Tips */}
          <div>
            <h3 className="font-semibold text-[20px] mb-4 border-b border-gray-500 pb-1 w-fit">
              Latest <span className="text-[#234179]">Tips</span>
            </h3>
            <div className="space-y-4">
              {/* Tip 1 */}
              <div className="flex items-center space-x-3">
                <img
                  src={headache}
                  alt="tip1"
                  className="rounded-lg w-16 h-12 object-cover"
                />
                <div>
                  <div className="flex items-center font-semibold  gap-2 text-[#456EA1] text-[12px] mb-1">
                    <UserRound size={12} /> <span>Isha Sunam</span>
                    <MessageCircleMore size={12} /> <span>2 Comments</span>
                  </div>
                  <Link to="/what-is-headache" >
                  <p className="text-[15px] font-semibold hover:underline hover:text-gray-300">
                    How Weather Changes Trigger Headaches?
                  </p></Link>
                </div>
              </div>

              {/* Tip 2 */}
              <div className="flex items-center space-x-3">
                <img
                  src={neckPain}
                  alt="tip2"
                  className="rounded-lg w-16 h-12 object-cover"
                />
                <div>
                  <div className="flex items-center font-semibold gap-2 text-[#456EA1] text-[12px] mb-1">
                    <UserRound size={12} /> <span>Monika Sharma</span>
                    <MessageCircleMore size={12} /> <span>2 Comments</span>
                  </div>
                  <Link to="/what-is-neck-pain" >
                  <p className="text-[15px] font-semibold hover:underline hover:text-gray-300">
                    Neck Pain: Causes Of Neck Pain During The Monsoon Season
                  </p></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Info Section */}
        <div className="max-w-7xl mx-auto px-6 -mt-4 md:-mt-8">
          <div className="bg-[#234179] rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-[#1d3770] p-3 rounded-full">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-xs">Clinic Address</p>
                <p className="font-semibold">Birtamode, Jhapa, Nepal</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-[#1d3770] p-3 rounded-full">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-xs">Email Enquiry</p>
                <p className="font-semibold">info@painclinic.com.np</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-[#1d3770] p-3 rounded-full">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-xs">Hotline</p>
                <p className="font-semibold">97010-12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-transparent py-4 mt-4 border-t border-[#0b2354]/50">
          <p className="text-center text-gray-400 text-xs">
            © Copyright 2025 Advance Pain Specialist Clinic Birtamode, Jhapa,
            Nepal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
