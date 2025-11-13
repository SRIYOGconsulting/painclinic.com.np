import React, { useState } from 'react';
import faq1 from '../assets/images/Faq1.png';
import faq2 from '../assets/images/faq2.jpg';

const faqDataTop = [
  {
    question: 'What Is Advance Pain Specialist Clinic?',
    answer: 'Advance Pain Specialist Clinic is a dedicated medical center in Birtamode, Jhapa, specializing in the diagnosis and treatment of various types of acute and chronic pain.',
  },
  {
    question: 'What Types Of Pain Conditions Do You Treat?',
    answer: 'We provide expert care for Headaches , Joint pain, Neck pain, Shoulder pain, Orofacial pain, Back pain, including disc prolapse (slipped disc), Knee pain, Ankle pain, Nerve-related pain, Muscle pain, Fibromyalgia, Sports injuries, Whole body pain and Cancer pain.',
  },
  {
    question: 'How Do I Book An Appointment?',
    answer: 'You can call us directly at our clinics phone number or visit us at our location in Birtamode, Jhapa. Online booking options are also available through our website.',
  },
  {
    question: 'Do I Need A Referral To Visit The Clinic?',
    answer: 'No, a referral is not required. You can visit us directly for consultation and treatment.',
  },
  {
    question: 'Are Your Treatments Covered By Insurance?',
    answer: 'Please contact us to check if your insurance provider covers pain management services. We can assist with documentation for claims.',
  },
];

const faqDataBottom = [
  {
    question: 'How Do You Diagnose The Cause Of My Pain?',
    answer: 'Our specialists use a combination of medical history, physical examination, and advanced diagnostic tools such as X-rays, MRIs, and nerve studies to pinpoint the root cause of your pain.',
  },
  {
    question: 'What Treatment Methods Do You Offer?',
    answer: 'We provide a range of treatments including, Medications, Physiotherapy, Pain-relief injections, Nerve blocks, Advanced interventional procedures, Lifestyle modification and counseling.',
  },
  {
    question: 'How Long Will It Take To See Results?',
    answer: 'The time for improvement depends on the type and severity of your pain. Many patients experience relief after a few sessions, while chronic conditions may require long-term management.',
  },
  {
    question: 'Are Your Treatments Safe?',
    answer: 'Yes, all treatments at our clinic are evidence-based and performed by experienced specialists. Patient safety and comfort are our top priorities.',
  },
  {
    question: 'Do You Treat Sports Injuries?',
    answer: 'Yes, we specialize in treating sports-related injuries, helping athletes recover faster and regain strength and mobility.',
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className='font-[sans-serif]'>
      <button
        onClick={onToggle}
        className="flex items-center w-full bg-white border border-gray-300 rounded-full px-4 py-3 focus:outline-none"
        aria-expanded={isOpen}
      >
        {/* Icon and question text side by side with no gap */}
        <span className="flex items-center justify-center w-12 h-12 bg-[#234179] rounded-full text-white font-bold text-lg select-none">
          {isOpen ? '−' : '+'}
        </span>
        <span className="text-[16px] text-gray-900 ml-0 pl-3">
          {question}
        </span>
      </button>
      {isOpen && answer && (
        <p className="mt-2 ml-14 text-[16px] text-gray-500">{answer}</p>
      )}
    </div>
  );
};

const FAQs = () => {
  // State to track which question is open for each section (store the index)
  const [openTopIndex, setOpenTopIndex] = useState(null);
  const [openBottomIndex, setOpenBottomIndex] = useState(null);

  return (
    <div className="bg-[#ECF0F5] min-h-screen w-full p-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Top Left Image */}
        <div className="flex justify-center items-center">
          <img src={faq1} alt="faq1" className="max-w-[480px]" />
        </div>

        {/* Top Right FAQs */}
        <div className="flex flex-col space-y-4">
          {faqDataTop.map(({ question, answer }, i) => (
            <FAQItem
              key={i}
              question={question}
              answer={answer}
              isOpen={openTopIndex === i}
              onToggle={() => setOpenTopIndex(openTopIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom Left Image */}
        <div className="flex justify-center items-center">
          <img src={faq2} alt="faq2" className="max-w-[480px]" />
        </div>

        {/* Bottom Right FAQs */}
        <div className="flex flex-col space-y-4">
          {faqDataBottom.map(({ question, answer }, i) => (
            <FAQItem
              key={i}
              question={question}
              answer={answer}
              isOpen={openBottomIndex === i}
              onToggle={() => setOpenBottomIndex(openBottomIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
