import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import background from "../assets/images/home/background.png";
import aboutImage from "../assets/images/home/1.jpg";
import director from "../assets/images/home/director.png";
import headacheImg from "../assets/images/headache-pain.jpg";
import JointImg from "../assets/images/joint-pain.jpg";
import neckImg from "../assets/images/neck-pain.jpg";
import shoulderImg from "../assets/images/shoulder-pain.jpg";
import orofacial from "../assets/images/orafacial-pain.jpg";
import offer from "../assets/images/offer.jpg";
import choose from "../assets/images/why-choose-1-2.jpg";
import backpain from "../assets/images/back-pain (1).jpg";
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
import { UserRound, Hospital, HeartPulse } from "lucide-react";


const Home = () => {
  const slides = [
    { id: 1, title: "Joint Pain", bigImage: JointImg, smallImage: director },
    { id: 2, title: "Back Pain", bigImage: shoulderImg, smallImage: director },
    { id: 3, title: "Neck Pain", bigImage: neckImg, smallImage: director },
    { id: 4, title: "Shoulder Pain", bigImage: shoulderImg, smallImage: director },
    { id: 5, title: "Knee Pain", bigImage: headacheImg, smallImage: director },
    { id: 6, title: "Hip Pain", bigImage: orofacial, smallImage: director },
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

  // BLOG SLIDES (3 cards)
  const blogSlides = [
    {
      id: 1,
      category: "Neck Pain",
      doctor: "Dr. Sagar",
      date: "07 Dec, 2024",
      title: "Neck Pain From Air Conditioning: Causes And Remedies",
      path : "what-is-neck-pain",
      image: neckImg,
    },
    {
      id: 2,
      category: "Headache",
      doctor: "Dr. Niru",
      date: "6 Aug, 2024",
      title: "How Weather Changes Trigger Headaches: Causes And Solutions",
      path : "what-is-headache",
      image: headacheImg,
    },
    {
      id: 3,
      category: "Joint Pain",
      doctor: "Dr. Puspak",
      date: "3 Nov, 2024",
      title: "Best Excersises To Ease Stiff Joints During Chilly Mornings",
      path : "what-is-joint-pain",
      image: JointImg,
    },
  ];
  
 const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const nextBlog = () => {
    setCurrentBlogIndex((prev) => (prev + 1 >= blogSlides.length - 1 ? 0 : prev + 1));
  };

  const prevBlog = () => {
    setCurrentBlogIndex((prev) => (prev - 1 < 0 ? blogSlides.length - 2 : prev - 1));
  };

  
  // for doodle like image
  const doodleImages = [
  { src: orofacialI, alt: 'Oral Pain', label: 'Orafacial Pain' },
  { src: shoulderI, alt: 'Shoulder Pain', label: 'Shoulder Pain' },
  { src: sportsI, alt: 'Sports Injury', label: 'Sports Injury' },
  { src: headacheIcon, alt: 'Headache', label: 'Headache' },
  { src: ankelI, alt: 'Ankle Pain', label: 'Ankle Pain' }
];


  return (
    <div className="font-[sans-serif] overflow-x-hidden w-full max-w-screen mx-auto">
      {/* Hero Section */}
     <section
        className="relative w-full h-[1000px] bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 flex items-center px-6 md:px-20">
          <div className="transition-all duration-500 ease-in-out">
            <p className="text-[18px]">Advance Pain Clinic</p>
            <p className="text-[45px] md:text-[65px] font-semibold">
              Pain Clinic In <br />Birtamode, Jhapa
            </p>
            <p className="text-[16px] md:text-[18px]">
              Advance Pain Specialist Clinic in Birtamode, Jhapa, Nepal offers expert care for managing chronic and acute pain conditions.
            </p>
            <button className="mt-4 px-6 py-2 bg-[#234179] text-white rounded-full">View all conditions</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <div className="px-4 md:px-8 py-12 font-sans mt-15">
        <Link to='/about'>
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
      <section className="bg-[#234179] py-16 px-4 mt-15">
        <div className="text-center text-white mb-10">
          <p className="text-sm mb-2">Our Services</p>
          <h2 className="text-4xl font-bold">Pain Conditions That We Treat</h2>
        </div>

        <div className="overflow-hidden relative max-w-6xl mx-auto">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map(({ id, title, bigImage }, index) => (
              <div className="min-w-full shrink-0 flex justify-between gap-3 px-2 overflow-hidden">

                {/* SHOW 3 CARDS PER SLIDE */}
                {[0, 1, 2].map((offset) => {
                  const slideIndex = (index + offset) % slides.length;
                  const item = slides[slideIndex];

                  return (
                    <div key={offset} className="relative w-1/3 min-w-0">

                      {/* IMAGE CARD */}
                      <div className="w-full h-64 rounded-xl overflow-hidden relative">
                        <img
                          src={item.bigImage}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-xl"
                        />

                        {/* HEADING OVER IMAGE */}
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-white text-lg font-semibold">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                    </div>
                  );
                })}

              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3"
          >
            &#8592;
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3"
          >
            &#8594;
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              onClick={() => setCurrentIndex(idx)}
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
            <h3 className="text-sm text-white mb-1">
              Say Goodbye To Your Pain
            </h3>

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

      {/* New Section - Why Choose Us */}
      <section className="bg-white py-20 font-[sans-serif] relative">

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

            <p className="text-[#234179] font-semibold mb-2 text-sm flex items-center gap-2">
              <span className="text-[#234179] text-xl"></span> Reasons To Choose Us
            </p>

            <h2 className="text-[42px] md:text-[45px] font-bold text-[#0A2241] leading-tight mb-10">
              Why Choose Us?
            </h2>

            {/* FEATURE LIST */}
            <div className="space-y-8">

              {/* Feature 1 */}
              <div className="flex gap-6 items-start">
                <div className="w-18 h-14 bg-[#234179] text-white rounded-full flex items-center justify-center mt-2">
                  <UserRound size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2241]">Expertise You Can Trust</h3>
                  <p className="text-[#707882] text-sm mt-1">
                    Our team of skilled doctors brings decades of experience in treating pain-related conditions.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Feature 2 */}
              <div className="flex gap-6 items-start">
                <div className="w-17 h-14 bg-[#234179] text-white rounded-full flex items-center justify-center mt-2">
                  <Hospital size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2241]">Comprehensive Care</h3>
                  <p className="text-[#707882] text-sm mt-1">
                    From diagnosis to rehabilitation, we offer a full spectrum of pain management services.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Feature 3 */}
              <div className="flex gap-6 items-start">
                <div className="w-22 h-14 bg-[#234179] text-white rounded-full flex items-center justify-center mt-2">
                  <HeartPulse size={28} />
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

            <p className="text-[#234179] font-semibold text-sm mb-1">
              Professional Pain Management
            </p>

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

            <div className="absolute bottom-6 left-11 bg-white shadow-lg rounded-full w-30 h-30 flex items-center justify-center text-center ">
              <p className="text-[#234179] font-semibold text-sm leading-tight">
                Get Rid <br /> of<br /> Your Pain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES SECTION */}
      <section className="bg-[#e8f5ff] py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <p className="text-[#234179] font-semibold text-sm mb-2">
            Pain Clinic Blog
          </p>
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
    style={{ transform: `translateX(-${currentBlogIndex * 50}%)` }}
  >
    {blogSlides.map((item) => (
      <Link
        to={`/${item.path}`}
        key={item.id}
        className="min-w-[50%] max-w-[50%] px-3 block"
      >
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">

          {/* IMAGE */}
<div className="relative h-full w-full rounded-3xl overflow-hidden bg-white p-6">
  <div className="w-full h-full rounded-2xl overflow-hidden">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* CATEGORY TAG */}
  <div className="absolute top-10 left-10 bg-[#234179] text-white text-sm px-4 py-1 rounded-full z-10">
    {item.category}
  </div>
</div>


          {/* CONTENT */}
          <div className="p-5">

            {/* Doctor + Date */}
            <p className="text-gray-500 text-sm mb-2">
              {item.doctor} · {item.date}
            </p>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#0A2241] leading-snug mb-4">
              {item.title}
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

      {/* icon image slideshow section */}

  {/* DOODLE ICON AUTO SLIDER SECTION */}
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* AUTO SLIDER WRAPPER */}
    <div className="overflow-hidden relative">
      <div
        className="flex gap-10 animate-slide whitespace-nowrap"
      >
        {doodleImages.concat(doodleImages).map((item, index) => (
          <div
            key={index}
            className="w-32 mx-auto flex-shrink-0 flex flex-col items-center text-center"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-20 h-20 object-contain mb-3"
            />
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
