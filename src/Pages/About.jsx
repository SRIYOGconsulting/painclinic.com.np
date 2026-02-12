import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import aboutImage from "/images/about/1.jpg";
import director from "/images/about/director.png";
import pain from "/images/about/pain.jpg";
import headacheIcon from "/images/about/headache.png";
import JointIcon from "/images/about/joint.png";
import neckIcon from "/images/about/neck.png";
import shoulderI from "/images/about/shoulder.png";
import orofacialI from "/images/about/orofacial.png";
import discI from "/images/about/back.png";
import kneeI from "/images/about/knee.png";
import ankelI from "/images/about/ankle.png";
import nerveI from "/images/about/nerve.png";
import muscleI from "/images/about/muscle.png";
import fibromyalgiaI from "/images/about/fibromyalgia.png";
import sportsI from "/images/about/sports-injury.png";
import wholeI from "/images/about/whole-body.png";
import cancerI from "/images/about/cancer.png";
import sectitles1 from "/images/shapes/sec-title-s-1.png";

const About = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  // doodle icons
  const doodleImages = [
    { src: orofacialI, alt: 'Oral Pain', label: 'Orofacial Pain' },
    { src: shoulderI, alt: 'Shoulder Pain', label: 'Shoulder Pain' },
    { src: sportsI, alt: 'Sports Injury', label: 'Sports Injury' },
    { src: headacheIcon, alt: 'Headache', label: 'Headache' },
    { src: kneeI, alt: 'Knee pain', label: 'Knee Pain' },
    { src: JointIcon, alt: 'Joint pain', label: 'Joint Pain' },
    { src: neckIcon, alt: 'Neck pain', label: 'Neck Pain' },
    { src: cancerI, alt: 'Cancer pain', label: 'Cancer Pain' },
    { src: wholeI, alt: 'whole body pain', label: 'Whole Body Pain' },
    { src: fibromyalgiaI, alt: 'fibromyalgia', label: 'Fibromyalgia Pain' },
    { src: muscleI, alt: 'muscle pain', label: 'muscle Pain' },
    { src: nerveI, alt: 'nerve pain', label: 'nerve Pain' },
    { src: discI, alt: 'disc pain', label: 'disc Pain' },
    { src: ankelI, alt: 'ankle pain', label: 'Ankle Pain' },
  ];

  const loopedDoodles = doodleImages.concat(doodleImages);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlogIndex((prev) =>
        prev + 1 >= doodleImages.length ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 font-[sans-serif]">

      {/* Advance Pain section */}
      <div className="px-4 md:px-8 py-12 font-sans mt-16 relative">


        <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center gap-10 md:gap-30">

          {/* Left Image Section */}
          <div className="relative w-full md:w-1/2">
            <img
              src={aboutImage}
              alt="aboutImage"
              className="rounded-3xl shadow-lg w-full h-auto object-cover"
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
            <div className="flex gap-2"><motion.img src={sectitles1} animate={{ rotate: 360 }} transition={{ repeat: Infinity }} className="h-4" />
              <p className="text-sm text-gray-700 font-semibold flex items-center gap-1 mb-2">
                About Us
              </p></div>
            <h2 className="text-5xl font-bold text-[#0A2241] mb-3">
              Advance Pain
            </h2>
            <p className='text-gray-600 mb-6 '>Management</p>
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
      </div>
      {/* journey of pain section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 mt-24">

        {/* IMAGE FIRST (mobile) */}
        <div className="w-full lg:w-1/2">
          <img
            src={pain}
            alt="Pain to Happiness"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[36px] md:text-[48px] font-semibold mb-4">
            Journey of Pain to Happiness
          </h2>

          <p className="text-[#707882] text-[15px] md:text-[16px] mb-6 leading-relaxed">
            We are proud to be the first dedicated pain management clinic in Koshi Province, helping thousands overcome pain and live healthier lives.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-[#0D6EFD] hover:bg-[#1e3767] transition px-6 md:px-8 py-2 rounded-md text-white">
              Book an Appointment
            </button>

            <button className="border border-gray-700 px-6 md:px-8 py-2 rounded-md text-[#234179]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- DOODLE SLIDER ---------------- */}
      <section className="mt-20 py-20">
        <div className="max-w-6xl mx-auto">

          {/* AUTO SLIDER WRAPPER */}
          <div className="overflow-hidden relative">
            <div
              className="
          flex 
          gap-28   
          whitespace-nowrap 
          transition-transform 
          duration-500
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
                    className="w-24 h-24 object-contain mb-4"
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


export default About;
