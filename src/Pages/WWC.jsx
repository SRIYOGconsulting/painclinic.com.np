import { Brain, ClipboardList, Bed, Pill } from "lucide-react";
import { motion } from "motion/react"
import whychooseus from "../assets/images/why-choose-1.jpg";
import sectitles1 from "../assets/images/shapes/sec-title-s-1-1.png";

const WWC = () => {
  const steps = [
    {
      id: 1,
      icon: <Brain className="w-10 h-10 text-[#234179] stroke-current hover:text-white hover:bg-[#234179]" />,
      title: "Know The Problem",
      desc: "Knowing the problem is the first step.",
    },
    {
      id: 2,
      icon: <ClipboardList className="w-10 h-10 text-[#234179]" />,
      title: "Diagnose The Issue",
      desc: "In the second step, we diagnose the issue.",
    },
    {
      id: 3,
      icon: <Bed className="w-10 h-10 text-[#234179] stroke-current hover:text-white hover:bg-[#234179]" />,
      title: "Therapy",
      desc: "The process will undergo if the problem is cured by therapy.",
    },
    {
      id: 4,
      icon: <Pill className="w-10 h-10 text-[#234179]" />,
      title: "Medication",
      desc: "Medication will help to manage most of the pains from the root.",
    },
  ];

  return (
    <div className="font-[sans-serif]">
      <section className="bg-white py-20 ">
        {/* Intro paragraph */}
        <div className="max-w-6xl mx-auto text-[#707882] justify-text mb-12 px-4">
          <p>
            Whether it’s sports injuries, disc prolapse, fibromyalgia, or any
            other form of chronic or acute pain, we strive to provide solutions
            that are both effective and customized to each individual's needs. Our
            goal is to not only relieve pain but to empower our patients with the
            tools and knowledge to prevent future discomfort. Together, we aim to
            transform lives, ensuring that no one has to endure pain in silence.
            We are here to support you every step of the way, with compassion,
            expertise, and a commitment to excellence.
          </p>
        </div>

        {/* Section title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2"><motion.img src={sectitles1} animate={{ rotate: 360 }} transition={{ repeat: Infinity }} className="h-4" />
            <p className="text-[#234179] text-[16px] font-semibold flex items-center gap-1 mb-2">
              Our Curing Process
            </p></div>
          <h2 className="text-[45px] md:text-4xl font-bold text-[#0A2241] mt-2">
            How We Cure?
          </h2>
        </div>

        {/* Steps - horizontal zigzag */}
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-12 px-4">

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-56"
            >
              {/* Mobile & Desktop unified card */}
              <div
                className={`flex flex-col items-center ${index % 2 === 0 ? "md:mb-24" : "md:mt-24"
                  }`}
              >
                {/* Icon */}
                <div className="bg-white rounded-full shadow-lg w-20 h-20 flex items-center justify-center relative border border-white hover:bg-[#234179] transition-all duration-300">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#234179] text-white rounded-full flex items-center justify-center font-semibold text-sm shadow">
                    {step.id}
                  </div>
                  {step.icon}
                </div>

                {/* Text */}
                <h3 className="text-[#0A2241] font-semibold text-[20px] mt-4">
                  {step.title}
                </h3>
                <p className="text-[#707882] text-[16px] mt-2 max-w-xs">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* New Section - Why Choose Us */}
      <section className="bg-white py-20 font-[sans-serif]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={whychooseus}
              alt="Why Choose Us"
              className="rounded-full w-full max-w-md mx-auto shadow-lg object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            <p className="text-[#234179] font-semibold mb-3">Why Choose Us</p>
            <h2 className="text-[45px] md:text-4xl font-bold text-[#0A2241] mb-8 leading-snug">
              Solving Chronic Pains
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-[20px] text-[#0A2241] flex items-center gap-3">
                  Expert Team
                </h3>
                <p className="text-[#707882] mt-2 text-sm">
                  Led by experienced doctors with years of expertise in pain
                  management.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#0A2241] flex items-center gap-3">
                  <span className="w-12 h-12 bg-0A2241 flex items-center justify-center rounded-full">
                    <Brain />
                  </span>
                  Personalized Approach
                </h3>
                <p className="text-[#707882] mt-2 text-sm">
                  Compassionate approach for every patient to receive
                  personalized care.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#0A2241] flex items-center gap-3">

                  First & Fast Cure
                </h3>
                <p className="text-[#707882] mt-2 text-sm">
                  Proud to be the first dedicated pain management clinic in Koshi
                  Province.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WWC;
