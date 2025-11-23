import React from 'react'
import { useState, useEffect } from 'react';
import aboutImage from "../assets/images/home/1.jpg";
import director from "../assets/images/home/director.png";
import pain from "../assets/images/pain.jpg";
import headacheIcon from "../assets/images/headache.png";
import JointIcon from "../assets/images/joint.png";
import neckIcon from "../assets/images/neck.png";
import shoulderI from "../assets/images/shoulder.png";
import orofacialI from "../assets/images/orofacial.png";
import discI from "../assets/images/back.png";
import kneeI from "../assets/images/knee.png";
import ankelI from "../assets/images/ankle.png";
import nerveI from "../assets/images/nerve.png";
import muscleI from "../assets/images/muscle.png";
import fibromyalgiaI from "../assets/images/fibromyalgia.png";
import sportsI from "../assets/images/sports-injury.png";
import wholeI from "../assets/images/whole-body.png";
import cancerI from "../assets/images/cancer.png";

const About = () => {
   const [currentBlogIndex, setCurrentBlogIndex] = useState(0)
  
   // for doodle like image
    const doodleImages = [
      { src: orofacialI, alt: 'Oral Pain', label: 'Orafacial Pain' },
      { src: shoulderI, alt: 'Shoulder Pain', label: 'Shoulder Pain' },
      { src: sportsI, alt: 'Sports Injury', label: 'Sports Injury' },
      { src: headacheIcon, alt: 'Headache', label: 'Headache' },
      { src: kneeI, alt: 'Knee pain', label: 'Knee Pain' },
      { src: JointIcon, alt: 'Joint pain', label: 'Joint Pain' },
      { src: neckIcon, alt: 'Neck pain', label: 'Neck Pain' },
      { src: cancerI, alt: 'Cancer pain', label: 'Cancer Pain' },
      { src: wholeI, alt: 'whole body pain', label: 'whole body Pain' },
      { src: fibromyalgiaI, alt: 'fibromyalhia', label: 'fibromyalhia Pain' },
      { src: muscleI, alt: 'muscle pain', label: 'muscle Pain' },
      { src: nerveI, alt: 'nerve pain', label: 'nerve Pain' },
      { src: discI, alt: 'disc pain', label: 'disc Pain' },
      { src: ankelI, alt: 'ankel pain', label: 'Ankle Pain' },
    ];
  
    const loopedDoodles = doodleImages.concat(doodleImages  );
    // auto slide
    useEffect(()=>{
      const interval = setInterval(()=>{
        setCurrentBlogIndex((prev)=>prev+1 >= doodleImages.length ? 0 : prev +1)
      },4000)
      return()=> clearInterval(interval)
    }, [doodleImages.length])
  return (
    <div className="px-4 md:px-8 py-20 font-[sans-serif]">
      <div className="flex max-w-6xl mx-auto items-center gap-30">
        {/* Left Image Section */}
        <div className="relative w-1/2">
          <img
            src={aboutImage}
            alt="aboutImage"
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 right-[-80px] bg-[#6b85be] rounded-2xl px-4 py-6 text-white text-center w-[140px] opacity-90">
  <p className="text-5xl font-bold leading-none">10+</p>
  <p className="text-md font-semibold mt-1">
    Experience in <br />Medical Service
  </p>
</div>

        </div>

        {/* Right Content Section */}
        <div className="w-1/2">
          <p className="text-sm text-gray-700 font-semibold flex items-center gap-1 mb-2">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-[#0A2241] mb-2">
            Advance Pain
          </h2>
          <p className="text-[#707882] text-[16px] mb-6 leading-relaxed">
            Management <br /><br />
            At Advance Pain Specialist Clinic, we strive to transform lives by helping individuals overcome the limitations of pain and embrace a healthier, happier future.
          </p>

          {/* Stats */}
<div className="flex border border-gray-300 rounded-lg overflow-hidden mb-8">
  <div className="flex-1 flex items-center justify-center gap-3 p-6 border-r border-gray-300">
    <p className="text-3xl text-[#234179] font-bold">100%</p>
    <p className="text-sm text-gray-700 font-medium">Happy<br/> People</p>
  </div>
  <div className="flex-1 flex items-center justify-center gap-3 p-6">
    <p className="text-3xl text-[#234179] font-bold">100%</p>
    <p className="text-sm text-gray-700 font-medium">Pain Free <br/>Life</p>
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
      {/* Journey of Pain to Happiness Section */}
      <div className="px-4 md:px-8 py-40 font-[sans-serif]">
        <div className="flex max-w-6xl mx-auto items-center gap-30">
          {/* Left Content Section */}
          <div className="w-1/2">
            <h2 className="text-[48px] font-semibold mb-2">
              Journey of Pain to Happiness
            </h2>
            <p className="text-[#707882] text-[16px] mb-6 leading-relaxed">
             We are proud to be the first
                        dedicated pain management clinic in Koshi Province,
                        addressing a long-standing need for specialized care in
                        the region. Our facility serves not only the people of
                        Nepal but also patients from neighboring Indian states,
                        providing them with accessible and high-quality pain
                        relief services.    
            </p>

            <div className="flex gap-4">
              <button className="bg-[#0D6EFD] hover:bg-[#1e3767] transition px-8 rounded-md">
                <a href='https://www.facebook.com/painclinicbirtamode'>Book an Appointment</a>
              </button>
              <button className="border border-gray-700  px-8 py-2 rounded-md text-[#234179]">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-1/2">
            <img
              src={pain} 
              alt="Pain to Happiness"
              className=" w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* doodle image section */}
      <section className="py-10 ">
  <div className="max-w-5xl mx-auto">

    {/* AUTO SLIDER WRAPPER */}
    <div className="overflow-hidden relative">
      <div
        className="
          flex 
          gap-19   
          whitespace-nowrap 
          transition-transform 
          duration-700
        "
        style={{ transform: `translateX(-${currentBlogIndex * 30}%)` }}
      >
        {loopedDoodles.map((item, index) => (
          <div
            key={index}
            className="w-32 mx-auto flex-shrink-0 flex flex-col items-center text-center relative group"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-22 h-22 object-contain mb-6"
            />
            <p>{item.label}</p>
            <div className="absolute inset-0 bg-white opacity-60 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
    </div>
  )
}

export default About;
