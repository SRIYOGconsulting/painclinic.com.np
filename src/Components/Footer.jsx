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
      className="bg-[#051739] text-white font-[sans-serif] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="absolute inset-0 bg-[#051739]/95"></div>

      <div className="relative z-10">
        {/* Top Section */}
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">

          {/* Left Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-20 w-60 object-contain" />
            </div>

            <p className="text-[#456EA1] leading-relaxed text-[16px]">
              Comprehensive Pain Management Clinic in Birtamode, Jhapa, Nepal specializing multiple treatment methods to cure your pain.
            </p>

            <button className="border border-gray-700 text-[15px] px-4 py-2 rounded-full text-[#234179]"><a href="https://www.facebook.com/painclinicbirtamode">BOOK AN APPOINTMENT</a>
            </button>

            {/* Social Icons */}
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
          <div className="md:pl-6">
            <h3 className="font-semibold text-[20px] mb-4 border-b border-gray-500 pb-1 w-fit">
              Our <span className="text-[#234179]">Treatments</span>
            </h3>
            <ul className="space-y-2 text-[#456EA1] text-[16px]">
              <li><Link className="hover:underline" to="/what-is-headache">Headache</Link></li>
              <li><Link className="hover:underline" to="/what-is-joint-pain">Joint Pain</Link></li>
              <li><Link className="hover:underline" to="/what-is-neck-pain">Neck Pain</Link></li>
              <li><Link className="hover:underline" to="/what-is-shoulder-pain">Shoulder Pain</Link></li>
              <li><Link className="hover:underline" to="/what-is-orofacial-pain">Orofacial Pain</Link></li>
              <li><Link className="hover:underline" to="/what-is-knee-pain">Knee Pain</Link></li>
            </ul>
          </div>

          {/* Browse More */}
          <div>
            <h3 className="font-semibold text-[20px] mb-4 border-b border-gray-500 pb-1 w-fit">
              Browse <span className="text-[#234179]">More</span>
            </h3>
            <ul className="space-y-2 text-[#456EA1] text-[16px]">
              <li><Link className="hover:underline" to="/what-is-nerve-pain">Nerve Related Pain</Link></li>
              <li><Link className="hover:underline" to="/what-is-muscle-pain">Muscle Pain</Link></li>
              <li><Link className="hover:underline" to="/what-is-sports-pain">Sports Injury</Link></li>
              <li><Link className="hover:underline" to="/what-is-whole-body-pain">Whole Body Pain</Link></li>
              <li><Link className="hover:underline" to="/what-is-cancer-pain">Cancer Pain</Link></li>
            </ul>
          </div>

          {/* Latest Tips */}
          <div>
            <h3 className="font-semibold text-[20px] mb-4 border-b border-gray-500 pb-1 w-fit">
              Latest <span className="text-[#234179]">Tips</span>
            </h3>

            <div className="space-y-4">

              {/* Tip 1 */}
              <div className="flex items-start space-x-3">
                <img src={headache} className="rounded-lg w-24 h-14 object-cover" />
                <div>
                  <div className="flex items-center gap-1 text-[#456EA1] text-[12px] font-semibold mb-1">
                    <UserRound size={12} /> <span>Isha Sunam</span>
                    <MessageCircleMore size={12} /> <span>2 Comments</span>
                  </div>
                  <Link to="/what-is-headache">
                    <p className="text-[15px] font-semibold hover:underline hover:text-gray-300">
                      How Weather Changes Trigger Headaches?
                    </p>
                  </Link>
                </div>
              </div>

              {/* Tip 2 */}
              <div className="flex items-start space-x-3">
                <img src={neckPain} className="rounded-lg w-24 h-14 object-cover" />
                <div>
                  <div className="flex items-center gap-1 text-[#456EA1] text-[12px] font-semibold mb-1">
                    <UserRound size={12} /> <span>Monika Sharma</span>
                    <MessageCircleMore size={12} /> <span>2 Comments</span>
                  </div>
                  <Link to="/what-is-neck-pain">
                    <p className="text-[15px] font-semibold hover:underline hover:text-gray-300">
                      Neck Pain: Causes Of Neck Pain During The Monsoon Season
                    </p>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="max-w-6xl mx-auto px-6 mt-4">
          <div className="bg-[#234179] rounded-2xl py-10 px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 text-sm">

            {/* Address */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <div className="bg-[#1d3770] p-3 rounded-full">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-semibold text-[14px]">Clinic Address</p>
                <p className="font-semibold text-[20px] hover:underline"><a href="https://www.google.com/maps/place/JXRM%2BHMW+Advance+Pain+Specialist+Clinic,+Advance+Pain+Specialist+Clinic+1,+Mahendra+Hwy,+Birtamod+57206/@26.641482,87.9841929,17z/data=!4m6!3m5!1s0x39e5bb007acd06ab:0xca6d4798d37c7569!8m2!3d26.641482!4d87.9841929!16s%2Fg%2F11l_0fb01s?g_ep=Eg1tbF8yMDI1MTExMl8wIJvbDyoASAJQAQ%3D%3D">Birtamode, Jhapa, Nepal</a></p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <div className="bg-[#1d3770] p-3 rounded-full">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-semibold text-[14px]">Email Enquiry</p>
                <p className="font-semibold hover:underline text-[20px]"><a href="mailto:info@painclinic.com.np">info@painclinic.com.np</a></p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <div className="bg-[#1d3770] p-3 rounded-full">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-semibold text-[14px]">Hotline</p>
                <p className="font-semibold hover:underline text-[20px]"><a href="tel:+9779701012345">97010-12345</a></p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-4 mt-6 border-t border-[#0b2354]/50">
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
