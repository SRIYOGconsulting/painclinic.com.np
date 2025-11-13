import React, { useEffect, useState } from "react";
import background from "../assets/images/home/background.png";
import aboutImage from "../assets/images/home/1.jpg";
import director from "../assets/images/home/director.png";

const Home = () => {
  const slides = [
    { id: 1, title: "Joint Pain", bigImage: aboutImage, smallImage: director },
    { id: 2, title: "Back Pain", bigImage: aboutImage, smallImage: director },
    { id: 3, title: "Neck Pain", bigImage: aboutImage, smallImage: director },
    { id: 4, title: "Shoulder Pain", bigImage: aboutImage, smallImage: director },
    { id: 5, title: "Knee Pain", bigImage: aboutImage, smallImage: director },
    { id: 6, title: "Hip Pain", bigImage: aboutImage, smallImage: director },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 3 >= slides.length ? 0 : prev + 3
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 3 >= slides.length ? 0 : prev + 3));
  const goToPrev = () =>
    setCurrentIndex((prev) =>
      prev - 3 < 0 ? slides.length - (slides.length % 3 || 3) : prev - 3
    );

  return (
    <div className="font-[sans-serif] overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute top-50 left-20 w-full h-full flex z-10">
          <div className="transition-all duration-500 ease-in-out">
            <p className="text-[18px]">Advance Pain Clinic</p>
            <p className="text-[65px] font-semibold">
              Pain Clinic In <br />Birtamode, Jhapa
            </p>
            <p className="text-[18px]">
              Advance Pain Specialist Clinic in Birtamode, Jhapa, Nepal offers expert care for managing chronic and acute pain conditions.
            </p>
            <button>View all conditions</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <div className="px-4 md:px-8 py-12 font-sans">
            <div className="flex max-w-6xl mx-auto items-center gap-30">
              {/* Left Image Section */}
              <div className="relative w-1/2">
                <img
                  src={aboutImage}
                  alt="aboutImage"
                  className="rounded-3xl shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 right-[-80px] bg-[#6b85be] rounded-2xl px-6 py-5 text-white text-center w-[110px] opacity-90">
        <p className="text-4xl font-bold leading-none">10+</p>
        <p className="text-xs font-semibold mt-1">
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
                  Welcome to Advance Pain Clinic, Birtamode
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
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
          </div>

      {/* Services Section */}
<section className="bg-blue-900 py-16 px-4">
  <div className="text-center text-white mb-10">
    <p className="text-sm mb-2">Our Services</p>
    <h2 className="text-4xl font-bold">Pain Conditions That We Treat</h2>
  </div>

  <div className="overflow-hidden relative max-w-6xl mx-auto">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map(({ id, title }, index) => (
        <div key={id} className="min-w-full flex justify-between space-x-4 px-2">
          {/* Three composite images per slide */}
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="relative w-1/3">
              {/* Big image */}
              <div className="w-full h-64 bg-white rounded-xl overflow-hidden relative">
                <img
                  src={aboutImage}
                  alt={`big-${idx}`}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath:
                      'polygon(0 0, 100% 0, 100% 65%, 70% 65%, 70% 100%, 0 100%)',
                  }}
                />
                {/* Small image */}
                <img
                  src={director}
                  alt={`small-${idx}`}
                  className="absolute top-0 right-0 w-16 h-16 rounded-full border-4 border-white -translate-x-4 -translate-y-4"
                />
              </div>
              {/* Title */}
              <h3 className="text-white text-center mt-2">{title}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Navigation */}
    <button
      onClick={goToPrev}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-50 text-white rounded-full p-2"
      aria-label="Previous slide"
    >
      &#8592;
    </button>
    <button
      onClick={goToNext}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-50 text-white rounded-full p-2"
      aria-label="Next slide"
    >
      &#8594;
    </button>
  </div>

  {/* Pagination dots */}
  <div className="flex justify-center mt-6 space-x-3">
    {slides.map((_, idx) => (
      <button
        key={idx}
        className={`w-3 h-3 rounded-full ${
          idx === currentIndex ? 'bg-white' : 'bg-white/50'
        }`}
        onClick={() => goToIndex(idx)}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ))}
  </div>
</section>

    </div>
  );
};

export default Home;
