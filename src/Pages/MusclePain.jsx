import musclepain from "../assets/images/muscle-pain.jpg";
import { UserRound } from 'lucide-react'

const MusclePain = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-30 text-[#707882] font-[sans-serif]">
      {/* Author and read time */}
      <div className="text-[12px] text-[#707882] mb-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <UserRound className="w-4 h-4 stroke-current text-[#234179]" />
          <p>
            By{" "}
            <span className="font-medium text-[#707882]">Salina Bastola</span>
          </p>
        </div>
        <p>3 Minutes Read</p>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#0A2241] mb-4">What is Muscle Pain?</h1>

      {/* Paragraphs */}
      <p className="text-[#707882] mb-4 leading-relaxed">
        Muscle pain, or myalgia, refers to discomfort or soreness in the muscles, which can result from a variety of causes. It may occur due to overuse, injury, or strain, often from activities like intense exercise, heavy lifting, or sudden awkward movements. There are two main types of muscle pain: acute, which is short-term and usually occurs after physical exertion, and chronic, which persists for weeks or months and can be linked to conditions like fibromyalgia or repetitive stress. Symptoms of muscle pain typically include tenderness, stiffness, swelling, or a dull ache in the affected area. Treatment options often involve rest, stretching, applying heat or cold to the area, staying hydrated, and using over-the-counter pain relievers, depending on the severity and cause of the pain.
      </p>
      <p className="text-[#707882] mb-4 leading-relaxed">
        Cold weather can make muscle pain worse for several reasons. When the temperature drops, blood flow to the muscles tends to decrease as the body tries to conserve heat. This reduced circulation can lead to stiffer muscles, making them more prone to discomfort and soreness. Cold air can also cause the muscles to contract and tighten, increasing the sensation of pain, especially in people with existing muscle conditions or joint pain. Additionally, during colder months, people may be less active, which can further contribute to muscle stiffness and discomfort.
      </p>

      {/* Image */}
      <div className="my-8">
        <img
          src={musclepain}
          alt="Muscle pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-[#0A2241] mb-4">
        Symptoms of Muscle Pain
      </h2>

      {/* List */}
      <ul className="text-[#707882] list-disc list-inside space-y-3 mb-6">
        <li>
          Tenderness: The muscles may feel sore or sensitive when touched or pressed.
        </li>
        <li>
          Stiffness: The muscles can become tight and harder to move, especially after periods of rest.
        </li>
        <li>
          Swelling: In some cases, the affected area may appear swollen.
        </li>
        <li>
          Sciatica: A pinched or irritated sciatic nerve in the lower back can cause radiating pain, numbness, or tingling in the legs and feet.
        </li>
        <li>
          Aching or Throbbing: You may experience a dull or sharp ache that persists in the affected muscle.
        </li>
        <li>
          Weakness: You might feel a decrease in strength or range of motion in the affected area.
        </li>
      </ul>
      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-[#0A2241] mb-4">
        Causes of muscle pain
      </h2>

      {/* List */}
      <ul className="text-[#707882] list-disc list-inside space-y-3 mb-6">
        <li>
          Overuse or Strain: Intense physical activity, exercise, or lifting heavy objects can lead to muscle strain, causing pain and discomfort.
        </li>
        <li>
          Injury: A direct injury like a muscle tear or sprain can cause localized pain, swelling, and bruising.
        </li>
        <li>
          Post-exercise soreness (DOMS): Delayed Onset Muscle Soreness (DOMS) occurs after unusual or intense activity and can result in muscle tenderness and stiffness, usually within 12 to 48 hours.
        </li>
        <li>
          Infections: Certain viral or bacterial infections (e.g., flu, Lyme disease) can lead to muscle pain, along with other systemic symptoms like fever.
        </li>
        <li>
          Inflammatory Conditions: Conditions like fibromyalgia or rheumatoid arthritis can cause chronic muscle pain due to inflammation or sensitivity in the muscles.
        </li>
        <li>
          Dehydration or electrolyte imbalances: Lack of proper hydration or imbalances in electrolytes like potassium and magnesium can cause muscle cramps and pain.
        </li>
        <li>
          Cold Weather: As mentioned earlier, cold temperatures can lead to muscle stiffness and discomfort by reducing blood flow and causing muscles to tighten.
        </li>
        <li>
          Medications: Certain medications, like statins (used to lower cholesterol), can have muscle pain as a side effect.
        </li>
      </ul>
      <p className="text-[#707882] mb-4 leading-relaxed">
        In conclusion, muscle pain, or myalgia, can arise from a wide range of causes, including overuse, injury, infections, chronic conditions, poor posture, dehydration, and even cold weather or medications. The symptoms vary, but typically include tenderness, stiffness, swelling, aching, and weakness, which can range from temporary discomfort to chronic pain. Understanding the underlying cause of muscle pain is key to finding the right treatment, whether it’s rest, stretching, hydration, medication, or physical therapy. While muscle pain is often a result of physical activity or strain, it can also be linked to more serious health conditions, so it’s important to address persistent or severe pain with proper care. By recognizing the specific cause and symptoms, one can manage or prevent muscle pain more effectively.
      </p>

      {/* Categories & Tags */}
      <div className="border-t border-gray-200 pt-4 pb-4 flex flex-wrap justify-between items-center text-sm text-[#707882]">
        <div className="flex items-center gap-3">
          <span className=" text-[#234179] uppercase">Categories:</span>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-md text-[#707882]">
              Health Care
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-md text-[#707882]">
              Medical Service
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-3 mt-3 sm:mt-0">
          <span className=" text-[#234179] uppercase">Tags:</span>

          <p className="text-[#707882]">
            Muscle pain, Myalgia
          </p>
        </div>

      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  )
}

export default MusclePain
