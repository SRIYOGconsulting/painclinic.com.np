import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react"

import background from "/images/home/background.png";
import aboutImage from "/images/home/1.jpg";
import director from "/images/home/director.png";
import headacheImg from "/images/home/headache-pain.jpg";
import JointImg from "/images/home/joint-pain.jpg";
import neckImg from "/images/home/neck-pain.jpg";
import shoulderImg from "/images/home/shoulder-pain.jpg";
import orofacial from "/images/home/orafacial-pain.jpg";
import knee from "/images/home/knee-pain.jpg";
import muscle from "/images/home/muscle-pain.jpg";
import nerve from "/images/home/nerve-pain.jpg";
import offer from "/images/home/offer.jpg";
import choose from "/images/home/why-choose-1-2.jpg";
import cancerImg from "/images/home/cancer-pain.jpg";
import sportsImg from "/images/home/sports-injury.jpg";
import wholebody from "/images/home/whole-body-pain.jpg";
import backpain from "/images/home/backpain.jpg";
import headacheIcon from "/images/home/headache.png";
import JointIcon from "/images/home/joint.png";
import neckIcon from "/images/home/neck.png";
import shoulderI from "/images/home/shoulder.png";
import orofacialI from "/images/home/orofacial.png";
import discI from "/images/home/back.png";
import kneeI from "/images/home/knee.png";
import ankelI from "/images/home/ankle.png";
import nerveI from "/images/home/nerve.png";
import muscleI from "/images/home/muscle.png";
import fibromyalgiaI from "/images/home/fibromyalgia.png";
import sportsI from "/images/home/sports-injury.png";
import wholeI from "/images/home/whole-body.png";
import cancerI from "/images/home/cancer.png";
import kneehero from "/images/home/1Hero.png";
import headachehero from "/images/home/2Hero.png";
import sectitles1 from "/images/shapes/sec-title-s-1.png";
import sectitles2 from "/images/shapes/sec-title-s-2.png";
import thunder from "/images/shapes/why-choose-shape-1.png";
import aboutshape from "/images/shapes/about-shape-1.png";
import heroshape from "/images/shapes/main-slider-shape-3.png";
import clover from "/images/shapes/main-slider-shape-4.png";
import flower from "/images/shapes/main-slider-shape-2.png";
import latestupdate from "/images/shapes/welcome-inner-bg-1.jpg"
import UserIcon from "/icons/user-round.svg";
import Hospital from "/icons/hospital.svg";
import Heartpulse from "/icons/heart-pulse.svg";
import ThumbsUp from "/icons/thumbs-up.svg";

// Reusable hook for mobile detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const Home = () => {
  const heroSlides = [
    {
      id: 1,
      title: "Pain Clinic in Birtamode, Jhapa",
      description: "Advance Pain Specialist Clinic in Birtamode, Jhapa, Nepal offers expert care for managing chronic and acute pain conditions.",
      button: "View All Conditions",
      image: kneehero,
    },
    {
      id: 2,
      title: "Modern Diagnostic Technology",
      description: "At Advance Pain Specialist Clinic, we are committed to helping you regain a pain-free life. ",
      button: "Book An Appointment",
      image: headachehero,
    },
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);


  const isMobile = useIsMobile();

  // Conditions
  const slides = [
    { id: 1, title: "Headache", bigImage: headacheImg, path: "what-is-headache" },
    { id: 2, title: "Joint Pain", bigImage: JointImg, path: "what-is-joint-pain" },
    { id: 3, title: "Whole Body Pain", bigImage: wholebody, path: "what-is-whole-body-pain" },
    { id: 4, title: "Sports Injury", bigImage: sportsImg, path: "what-is-sports-pain" },
    { id: 5, title: "Cancer Pain", bigImage: cancerImg, path: "what-is-cancer-pain" },
    { id: 6, title: "Orofacial Pain", bigImage: orofacial, path: "what-is-orofacial-pain" },
    { id: 7, title: "Knee Pain", bigImage: knee, path: "what-is-knee-pain" },
    { id: 8, title: "Muscle Pain", bigImage: muscle, path: "what-is-muscle-pain" },
    { id: 9, title: "Nerve Pain", bigImage: nerve, path: "what-is-nerve-pain" },
    { id: 10, title: "Neck Pain", bigImage: neckImg, path: "what-is-neck-pain" },
    { id: 11, title: "Shoulder Pain", bigImage: shoulderImg, path: "what-is-shoulder-pain" },
    { id: 12, title: "Knee Pain", bigImage: knee, path: "what-is-knee-pain" },
    { id: 13, title: "Muscle Pain", bigImage: muscle, path: "what-is-muscle-pain" },
    { id: 13, title: "Knee Pain", bigImage: knee, path: "what-is-knee-pain" },
    { id: 13, title: "Muscle Pain", bigImage: muscle, path: "what-is-muscle-pain" },
    { id: 13, title: "Muscle Pain", bigImage: muscle, path: "what-is-muscle-pain" },
    { id: 13, title: "Muscle Pain", bigImage: muscle, path: "what-is-muscle-pain" },
  ];

  const [currentServiceIndex, setcurrentServiceIndex] = useState(0);

  const nextService = () =>
    setcurrentServiceIndex((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));

  const prevService = () =>
    setcurrentServiceIndex((prev) =>
      prev - 1 < 0 ? slides.length - 1 : prev - 1
    );

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentServiceIndex((prev) =>
        prev + 1 >= slides.length ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // BLOG SLIDER
  const blogSlides = [
    {
      id: 1,
      category: "Neck Pain",
      doctor: "Dr. Sagar",
      date: "07 Dec, 2024",
      title: "Neck Pain From Air Conditioning: Causes And Remedies",
      path: "what-is-neck-pain",
      image: neckImg,
    },
    {
      id: 2,
      category: "Headache",
      doctor: "Dr. Niru",
      date: "6 Aug, 2024",
      title: "How Weather Changes Trigger Headaches",
      path: "what-is-headache",
      image: headacheImg,
    },
    {
      id: 3,
      category: "Joint Pain",
      doctor: "Dr. Puspak",
      date: "3 Nov, 2024",
      title: "Exercises To Ease Stiff Joints",
      path: "what-is-joint-pain",
      image: JointImg,
    },
  ];

  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const loopedSlides = blogSlides.concat(blogSlides);

  const nextBlog = () =>
    setCurrentBlogIndex((prev) => (prev + 1 >= blogSlides.length ? 0 : prev + 1));

  const prevBlog = () =>
    setCurrentBlogIndex((prev) =>
      prev - 1 < 0 ? blogSlides.length - 1 : prev - 1
    );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlogIndex((prev) =>
        prev + 1 >= blogSlides.length ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // DOODLES
  const doodleImages = [
    { src: orofacialI, label: "Orafacial Pain" },
    { src: shoulderI, label: "Shoulder Pain" },
    { src: sportsI, label: "Sports Injury" },
    { src: headacheIcon, label: "Headache" },
    { src: kneeI, label: "Knee Pain" },
    { src: JointIcon, label: "Joint Pain" },
    { src: neckIcon, label: "Neck Pain" },
    { src: cancerI, label: "Cancer Pain" },
    { src: wholeI, label: "Whole Body Pain" },
    { src: fibromyalgiaI, label: "Fibromyalgia Pain" },
    { src: muscleI, label: "Muscle Pain" },
    { src: nerveI, label: "Nerve Pain" },
    { src: discI, label: "Disc Pain" },
    { src: ankelI, label: "Ankle Pain" },
  ];

  const loopedDoodles = doodleImages.concat(doodleImages);

  return (
    <div className="font-[sans-serif] overflow-x-hidden w-full max-w-screen mx-auto">
      {/* Hero Section */}
      <section
        className="relative w-full h-[600px] md:h-[850px] bg-cover bg-center overflow-hidden md:px-20"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Content + Sliding Image */}
        <div className="relative z-10 flex items-center justify-between h-full w-full">
          <motion.img src={flower} alt="clover" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, }} className="absolute top-70 left-90 h-15 w-15 "/>
          <motion.img src={clover} alt="clover" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, }} className="absolute bottom-90 right-0 h-15 w-15 "/>
          <motion.img src={clover} alt="clover" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, }} className="absolute bottom-5 left-0 h-15 w-15 "/>
          <motion.img src={heroshape} alt="clover" animate={{ x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute bottom-10 left-90 h-15 w-15 "/>
          {/* LEFT CONTENT */}

          <div className="text-[#0A2241] flex-1 py-20 md:py-30 px-6 md:px-12 mt-60">
            <p className="text-xs md:text-[18px] mb-3 font-semibold tracking-wide text-[#234179]">
              Advance Pain Clinic
            </p>

            <div className="relative inline-block overflow-hidden max-w- mb-5">
              <p className="text-5xl md:text-6xl font-semibold leading-tight mb-">
                {heroSlides[heroIndex].title}
              </p>
              <AnimatePresence>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`overlay-${heroIndex}-${i}`}
                    className="absolute top-0 h-full bg-[#234179] z-20"
                    style={{
                      left: `${(i * 100) / 5}%`, // split overlay into 5 vertical slices
                      width: `${100 / 5}%`,
                    }}
                    initial={{ y: "-100%" }}           // slice covers text fully
                    animate={{ y: "100%" }}      // slide down to reveal text
                    //  exit={{y:0}}            // reset for next slide
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </AnimatePresence>

            </div>

            <p className="text-xs md:text-base text-gray-600 leading-relaxed max-w-xl">
              {heroSlides[heroIndex].description}
            </p>

            <div className="mt-8 flex items-center gap-60">
              <button className="px-7 py-3 text-[13px] bg-[#234179] text-white font-semibold rounded-full hover:bg-[#1e3767] transition">
                {heroSlides[heroIndex].button}
              </button>

              <div className="hidden lg:flex items-center bg-white rounded-xl shadow-lg px-5 py-3 w-[200px] gap-4">
                <div className="bg-[#234179] text-white p-3 rounded-lg flex items-center justify-center">
                  <img src={ThumbsUp} alt="Thumbs Up" className="w-7 h-7"/>
                </div>

                <div className="flex flex-col leading-tight">
                  <span className="text-3xl text-[#234179]">100%</span>
                  <span className="text-sm font-medium text-gray-600">Pain Free Life</span>
                </div>
              </div>
            </div>


          </div>


          {/* RIGHT SLIDING IMAGE: hidden on small/medium, visible on large */}
          <div className="hidden lg:flex flex-1 h-full overflow-hidden relative justify-end mt-60">
            <AnimatePresence>
              <motion.img
                key={heroIndex}
                src={heroSlides[heroIndex].image}
                alt="Hero"
                className="w-full max-w-[650px] h-auto object-cover relative z-10"
                style={{ objectPosition: "center", zIndex: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }} // smooth fade
              />
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <div className="px-4 md:px-8 py-12 font-sans mt-15 relative max-w-6xl mx-auto">
        <motion.img src={aboutshape} alt="clover" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute top-80 right-5 h-24 w-24 opacity-30"/>
        <Link to='/about'>
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center gap-10 md:gap-30">

            {/* Left Image Section */}
            <div className="relative w-full md:w-1/2">
              <img
                src={aboutImage}
                alt="aboutImage"
                className="rounded-3xl shadow-lg w-auto h-auto md:w-100 md:h-100 object-cover"
              />
              <div className="absolute bottom-4 right-0 md:right-6 bg-[#6b85be] rounded-2xl px-6 py-5 text-white text-center w-[110px] opacity-90">
                <p className="text-4xl font-bold leading-none">10+</p>
                <p className="text-xs font-semibold mt-1">
                  Experience in <br />Medical Service
                </p>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-1/2">
              <div className="flex gap-2"><motion.img src={sectitles1} animate={{ rotate: 360 }} transition={{ repeat: Infinity }} className="h-4"/>
                <p className="text-sm text-gray-700 font-semibold flex items-center gap-1 mb-2">
                  About Us
                </p></div>
              <h2 className="text-4xl font-bold text-[#0A2241] mb-2">
                Welcome to Advance Pain Clinic, Birtamode
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Advance Pain Specialist Clinic, we strive to transform lives by helping individuals overcome the limitations of pain and embrace a healthier, happier future.
              </p>

              {/* Stats */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden mb-8">
                <div className="flex-1 flex items-center justify-center gap-3 p-6 border-r border-gray-300">
                  <p className="text-3xl text-[#234179] font-bold">100%</p>
                  <p className="text-sm text-gray-700 font-medium">Happy<br /> People</p>
                </div>
                <div className="flex-1 flex items-center justify-center gap-3 p-6">
                  <p className="text-3xl text-[#234179] font-bold">100%</p>
                  <p className="text-sm text-gray-700 font-medium">Pain Free <br />Life</p>
                </div>
              </div>

              {/* Button and Director Info */}
              <div className="flex items-center gap-6">
                <button className="bg-[#234179] hover:bg-[#1e3767] transition px-8 py-3 rounded-full text-white font-semibold">
                  Book Now
                </button>
                <img
                  src={director}
                  alt="Dr. Niru Nepal"
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="text-[#0A2241] font-bold text-lg leading-tight">Dr. Niru Nepal</p>
                  <p className="text-gray-500 text-sm leading-tight">Director</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>


      {/* Services Section */}
      <section className="bg-[#234179] py-25 px-4 mt-15 h-160">
        <div className="text-center flex flex-col items-center text-white mb-10">
          <div className="flex items-center gap-2">
            <motion.img
              src={sectitles2}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="h-4"
            />
            <p className="text-sm">Our Services</p>
          </div>

          <h2 className="text-4xl font-bold">Pain Conditions That We Treat</h2>
        </div>

        {/* Slider  */}
        <div className="overflow-hidden relative max-w-6xl mx-auto">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentServiceIndex * 33.33}%)` }}
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className="relative sm:w-1/2 lg:w-1/3 shrink-0 px-2"
              >
                <div className="w-full h-40 sm:h-52 md:h-64 rounded-xl overflow-hidden relative">
                  <img
                    src={item.bigImage}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl"
                  />

                  <Link to={`/${item.path}`}>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white text-lg font-semibold hover:underline hover:text-[#234179]">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {Array.from({ length: slides.length - 2 }).map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === currentServiceIndex ? "bg-white" : "bg-white/50"
                }`}
              onClick={() => setcurrentServiceIndex(idx)}
            />
          ))}
        </div>
      </section>




      {/* ggoodbye section */}
      <section className="py-16 px-4  mt-15">
        <div
          className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden relative flex flex-col md:flex-row"
        >
          {/* LEFT DECORATIVE BACKGROUND */}
          <div
            className="absolute left-0 top-0 w-full md:w-1/2 h-full opacity-80 bg-[#2E51A3]"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>


          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 p-10 relative z-10 mb-4">
            <div className="flex gap-2"><motion.img
              src={sectitles2}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="h-4"
            />
              <h3 className="text-sm text-white mb-1">
                Say Goodbye To Your Pain
              </h3></div>


            <h2 className="text-4xl font-bold text-white leading-tight mb-4">
              Special Offer For <br /> Senior Citizens
            </h2>

            <p className="text-white/90 leading-relaxed mb-6">
              At Advance Pain Specialist Clinic, we are proud to be the first
              dedicated pain management clinic in Koshi Province, addressing a
              long-standing need for specialized care in the region.
            </p>

            <button className="bg-[#234179] text-white px-4 py-2 rounded-full">
              Book an Appointment
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={offer}
              alt="Senior Citizen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/*Why Choose Us */}
      <section className="bg-white py-20 font-[sans-serif] relative">

        <motion.img src={sectitles1} alt="clover" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="absolute top-10 left-60 h-5 w-5"/>
        <motion.img src={sectitles1} alt="clover" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="absolute bottom-30 left-140 h-5 w-5"/>
        <motion.img src={sectitles1} alt="clover" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="absolute bottom-80 right-20 h-5 w-5"/>
        <motion.img src={sectitles1} alt="clover" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="absolute top-30 right-20 h-5 w-5"/>
        <motion.img src={thunder} alt="clover" animate={{ rotate: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute top-50 left-30 h-15 w-15"/>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12 relative">

          {/* LEFT SIDE IMAGES */}
          <div className="w-full md:w-1/2 relative flex justify-center">

            {/* Main Rounded Image */}
            <img
              src={JointImg}
              alt="Why Choose Us"
              className="w-[380px] h-[380px] rounded-full object-cover"
            />

            {/* Small Overlapping Doctor Image */}
            <img
              src={choose}
              alt="Doctor"
              className="w-40 h-40 rounded-full object-cover border-[10px] border-white shadow-xl absolute bottom-4 right-6"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center"><motion.img
              src={sectitles1}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="h-4"
            />
              <p className="text-[#234179] font-semibold text-sm flex items-center gap-2">
                <span className="text-[#234179] text-xl"></span> Reasons To Choose Us
              </p>
            </div>


            <h2 className="text-[42px] md:text-[45px] font-bold text-[#0A2241] leading-tight mb-10">
              Why Choose Us?
            </h2>

            {/* FEATURE LIST */}
            <div className="space-y-8">

              {/* Feature 1 */}
              <div className="flex gap-6 items-start">
                <div className="w-18 h-14 bg-[#234179] text-white rounded-full flex items-center justify-center mt-2">
                  <img src={UserIcon} alt="Expertise You Can Trust" className="w-7 h-7"/>
                  {/* <UserRound size={28} /> */}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2241]">Expertise You Can Trust</h3>
                  <p className="text-[#707882] text-sm mt-1">
                    Our team of skilled doctors brings decades of experience in treating pain-related conditions.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200"/>

              {/* Feature 2 */}
              <div className="flex gap-6 items-start">
                <div className="w-17 h-14 bg-[#234179] text-white rounded-full flex items-center justify-center mt-2">
                  <img src={Hospital} alt="Comprehensive Care" className="w-7 h-7"/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2241]">Comprehensive Care</h3>
                  <p className="text-[#707882] text-sm mt-1">
                    From diagnosis to rehabilitation, we offer a full spectrum of pain management services.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200"/>

              {/* Feature 3 */}
              <div className="flex gap-6 items-start">
                <div className="w-22 h-14 bg-[#234179] text-white rounded-full flex items-center justify-center mt-2">
                  <img src={Heartpulse} alt="Patient-Centered Approach" className="w-7 h-7"/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2241]">Commitment To The Community</h3>
                  <p className="text-[#707882] text-sm mt-1">
                    We aim to improve the quality of life for patients in Nepal and India by ensuring world-class care close to home.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#234179] py-18 mb-15">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-white px-6">

          {/* Item 1 */}
          <div className="text-center">
            <h3 className="text-6xl font-bold">100%</h3>
            <p className="text-xl mt-3 opacity-90">Happy Patients</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Item 2 */}
          <div className="text-center ">
            <h3 className="text-6xl font-bold">5+</h3>
            <p className="text-xl mt-3 opacity-90">Medical Professionals</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Item 3 */}
          <div className="text-center ">
            <h3 className="text-6xl font-bold">100%</h3>
            <p className="text-xl mt-3 opacity-90">Success Stories</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Item 4 */}
          <div className="text-center">
            <h3 className="text-6xl font-bold">125+</h3>
            <p className="text-xl mt-3 opacity-90">Operations</p>
          </div>

        </div>
      </section>


      {/* what we cure section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">

          {/* LEFT SIDE CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex gap-2"><motion.img src={sectitles1} animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="h-4"/><p className="text-[#234179] font-semibold text-sm mb-1">
                Professional Pain Management
              </p></div>

            <h2 className="text-4xl font-bold text-[#0A2241] mb-4">
              How We Cure?
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Our team of dedicated healthcare professionals combines years of
              experience with a genuine commitment to providing.
            </p>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-medium text-[#0A2241]">Critical Operation</h3>
                  <span className="text-[#234179] font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div className="bg-[#234179] h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-medium text-[#0A2241]">Physiotherapy</h3>
                  <span className="text-[#234179] font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div className="bg-[#234179] h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <img
              src={backpain}
              alt="Back pain illustration"
              className="w-[] h-[380px] object-cover rounded-2xl shadow-lg"
            />

            <div className="absolute bottom-6 left-11 bg-white shadow-lg rounded-full w-30 h-30 flex items-center justify-center text-center hover:bg-[#234179] ">
              <p className="text-[#234179] font-semibold text-sm leading-tight hover:text-white">
                Get Rid <br /> of<br /> Your Pain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES SECTION */}
      <section className="relative bg-[#e8f5ff] py-20 px-6 bg-cover" >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${latestupdate})`, opacity: 0.3 }}
        ></div>
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="flex gap-2"><motion.img src={sectitles1} animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="h-4"/><p className="text-[#234179] font-semibold text-sm mb-2">
              Pain Clinic Blog
            </p></div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold text-[#0A2241]">Latest Updates</h2>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={nextBlog}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-400 hover:bg-gray-100"
              >
                &#8592;
              </button>

              <button
                onClick={prevBlog}
                className="w-12 h-12 flex items-center bg-white justify-center rounded-full border border-gray-400 hover:bg-gray-100"
              >
                &#8594;
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentBlogIndex * (isMobile ? 100 : 50)}%)`, width: isMobile ? `${loopedSlides.length * 35}%` : "auto" }}
            >
              {loopedSlides.map((item1, index) => (
                <Link
                  to={`/${item1.path}`}
                  key={index}
                  className="min-w-[50%] max-w-[50%] px-3 block"
                >
                  <div className="bg-white rounded-3xl shadow-md overflow-hidden">

                    {/* IMAGE */}
                    <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white p-6">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <motion.img
                          src={item1.image}
                          alt={item1.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                        />
                      </div>

                      {/* CATEGORY TAG */}
                      <div className="absolute top-10 left-10 bg-[#234179] text-white text-sm px-4 py-1 rounded-full z-10">
                        {item1.category}
                      </div>
                    </div>


                    {/* CONTENT */}
                    <div className="p-5">

                      {/* Doctor + Date */}
                      <p className="text-gray-500 text-sm mb-2">
                        {item1.doctor} · {item1.date}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#0A2241] leading-snug mb-4">
                        {item1.title}
                      </h3>

                      {/* Read More Button */}
                      <button className="w-10 h-10 rounded-full border border-[#234179] text-[#234179] flex items-center justify-center">
                        {">"}
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* doodle image slideshow section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">

          {/* AUTO SLIDER WRAPPER */}
          <div className="overflow-hidden relative">
            <div
              className="
          flex 
          gap-19   
          whitespace-nowrap 
          transition-transform 
          duration-600
        "
              style={{ transform: `translateX(-${currentBlogIndex * 30}%)` }}
            >
              {loopedDoodles.map((item2, index) => (
                <div
                  key={index}
                  className="w-40 mx-auto flex-shrink-0 flex flex-col items-center text-center relative group"
                >
                  <img
                    src={item2.src}
                    alt={item2.label}
                    className="w-25 h-25 object-contain mb-4"
                  />
                  <p>{item2.label}</p>
                  <div className="absolute inset-0 bg-white opacity-60 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
