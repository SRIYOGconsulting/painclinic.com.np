import React from "react";
import neckImg from "../assets/images/neck-pain.jpg";

const NeckPain = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      {/* Author and read time */}
      <div className="text-sm text-gray-500 mb-4 flex items-center justify-between">
        <p>By <span className="font-medium text-gray-700">Salina Bastola</span></p>
        <p>3 minutes read</p>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">What Is Neck Pain?</h1>

      {/* Paragraphs */}
      <p className="mb-4 leading-relaxed">
        Neck pain refers to discomfort or pain in the muscles, joints, or bones of the neck.
        It can result from poor posture, muscle strain, injury, or age-related wear and tear
        on the spine, such as cervical spondylosis. Other common causes include herniated discs,
        whiplash from car accidents, or nerve compression due to issues like a slipped disc or
        bone spurs.
      </p>

      <p className="mb-6 leading-relaxed">
        Symptoms of neck pain can range from mild stiffness to severe, sharp pain. It can also
        lead to headaches, numbness, or tingling in the arms. While many cases of neck pain
        improve with rest, heat, or over-the-counter pain relievers, persistent or severe pain
        should be evaluated by a healthcare professional.
      </p>

      {/* Image */}
      <div className="my-8">
        <img
          src={neckImg}
          alt="Person holding neck due to pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Causes Of Neck Pain During The Monsoon Season
      </h2>

      {/* List */}
      <ul className="list-disc list-inside space-y-3 mb-6">
        <li>
          Increased Muscle Tension:Humidity can cause
          the body to feel warmer and sweat more, leading to discomfort. This discomfort,
          combined with changes in barometric pressure during the monsoon season, can cause
          muscles to tense up more than usual.
        </li>
        <li>
          Fluid Retention and Inflammation: High humidity
          can lead to increased fluid retention, contributing to inflammation in joints and
          muscles.
        </li>
        <li>
          Reduced Blood Circulation:Humid conditions can
          make it harder for your body to regulate temperature, reducing circulation in the neck
          and shoulders.
        </li>
        <li>
         Pressure Changes: Atmospheric pressure shifts
          during monsoon weather can affect joints and worsen existing pain conditions.
        </li>
        <li>
          Poor Posture: Staying indoors for long periods
          can encourage poor posture, further aggravating neck pain.
        </li>
        <li>
          Exacerbation of Pre-existing Conditions: Those
          with arthritis or fibromyalgia may experience worsening symptoms during humid weather.
        </li>
      </ul>

      {/* Final paragraph */}
      <p className="leading-relaxed mb-8">
        If you find that monsoon humidity is aggravating neck pain, staying hydrated, stretching
        regularly, using heat or cold therapy, and maintaining good posture can help alleviate
        some discomfort. Consult a healthcare provider if the pain becomes persistent or severe.
      </p>

      {/* Categories & Tags */}
      <div className="border-t border-gray-200 pt-4 flex flex-wrap justify-between text-sm text-gray-600">
        <div>
          <span className="font-semibold text-gray-800">Categories:</span>{" "}
          Health Care, Medical Service
        </div>
        <div>
          <span className="font-semibold text-gray-800">Tags:</span>{" "}
          Neck Pain, Inflammation
        </div>
      </div>
    </div>
  );
};

export default NeckPain;
