import React from 'react'
import aboutImage from "../assets/images/home/1.jpg";
import director from "../assets/images/home/director.png";
import pain from "../assets/images/pain.jpg";

const About = () => {
  return (
    <div className="px-4 md:px-8 py-20 font-sans">
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
          <p className="text-gray-600 mb-6 leading-relaxed">
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
      <div className="px-4 md:px-8 py-40 font-sans">
        <div className="flex max-w-6xl mx-auto items-center gap-30">
          {/* Left Content Section */}
          <div className="w-1/2">
            <h2 className="text-[48px] font-bold mb-2">
              Journey of Pain to Happiness
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
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
                Book an Appointment
              </button>
              <button className="border border-gray-700  px-8 py-2 rounded-md text-[#234179]">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-1/2">
            <img
              src={pain} // This is the new image you uploaded
              alt="Pain to Happiness"
              className=" w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
