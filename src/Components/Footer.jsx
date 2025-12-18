import { Link } from "react-router-dom";
import logo from "/images/home/pain-clinic-logo.png";
import footerBg from "/images/home/footer-bg.png";
import headache from "/images/home/headache-pain.jpg";
import neckPain from "/images/home/neck-pain.jpg";
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
  MoveUpRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-[#051739] text-white font-[sans-serif] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="absolute inset-0 bg-[#051739]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Left Section: Logo & Description */}
          <div className="space-y-4 order-1">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-20 w-60 object-contain" />
            </div>

            <p className="text-[#456EA1] leading-relaxed text-[16px]">
              Comprehensive Pain Management Clinic in Birtamode, Jhapa, Nepal specializing multiple treatment methods to cure your pain.
            </p>

            <button className="border border-gray-700 text-[15px] px-4 py-2 rounded-full text-[#234179] hover:bg-[#234179] hover:text-white transition flex">
              <a href="https://www.facebook.com/painclinicbirtamode" target="_blank" rel="noopener noreferrer">
                BOOK AN APPOINTMENT
              </a> <MoveUpRight />
            </button>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6 text-gray-300">
              <a href="#" className="hover:text-white"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white"><Twitter size={18} /></a>
              <a href="#" className="hover:text-white"><Instagram size={18} /></a>
              <a href="#" className="hover:text-white"><Youtube size={19} /></a>
            </div>
          </div>

          {/* Treatments */}
          <div className="order-2">
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
          <div className="order-3 sm:col-span-1 md:order-3">
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
          <div className="order-4 sm:col-span-1 md:order-4">
            <h3 className="font-semibold text-[20px] mb-4 border-b border-gray-500 pb-1 w-fit">
              Latest <span className="text-[#234179]">Tips</span>
            </h3>

            <div className="space-y-4">

              {/* Tip 1 */}
              <div className="flex items-start space-x-3">
                <img src={headache} className="rounded-lg w-20 h-12 object-cover" alt="Headache" />
                <div>
                  <div className="flex items-center gap-1 text-[#456EA1] text-[10px] font-semibold mb-1">
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
                <img src={neckPain} className="rounded-lg w-20 h-12 object-cover" alt="Neck Pain" />
                <div>
                  <div className="flex items-center gap-1 text-[#456EA1] text-[10px] font-semibold mb-1">
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
        <div className="bg-[#234179] rounded-2xl py-10 px-6 md:px-10 mt-12 flex flex-col md:flex-row items-center justify-around gap-6 text-center md:text-left text-sm">

          {/* Address */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="bg-[#1d3770] p-3 rounded-full">
              <MapPin size={18} />
            </div>
            <p className="font-semibold text-[14px]">Clinic Address</p>
            <p className="font-semibold hover:underline text-[20px]">
              <a href="https://www.google.com/maps/place/JXRM%2BHMW+Advance+Pain+Specialist+Clinic,+Advance+Pain+Specialist+Clinic+1,+Mahendra+Hwy,+Birtamod+57206" target="_blank" rel="noopener noreferrer">
                Birtamode, Jhapa, Nepal
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="bg-[#1d3770] p-3 rounded-full">
              <Mail size={18} />
            </div>
            <p className="font-semibold text-[14px]">Email Enquiry</p>
            <p className="font-semibold hover:underline text-[20px]">
              <a href="mailto:info@painclinic.com.np">info@painclinic.com.np</a>
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="bg-[#1d3770] p-3 rounded-full">
              <Phone size={18} />
            </div>
            <p className="font-semibold text-[14px]">Hotline</p>
            <p className="font-semibold hover:underline text-[20px]">
              <a href="tel:+9779701012345">97010-12345</a>
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="py-4 mt-6 border-t border-[#0b2354]/50">
          <p className="text-center text-gray-400 text-xs">
            © Copyright 2025 Advance Pain Specialist Clinic Birtamode, Jhapa, Nepal. Built with : <a href="https://broadpress.org/" className="hover:underline">BroadPress</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
