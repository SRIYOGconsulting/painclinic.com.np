import wholebodypain from "/images/wholebodypain/whole-body-pain.jpg";
import UserRound from "/icons/user-round.svg";

const WholeBodyPain = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-30 text-[#707882] font-[sans-serif]">
      {/* Author and read time */}
      <div className="text-[12px] text-[#707882] mb-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={UserRound} alt="userround" className="w-4 h-4 text-[#234179] stroke-current" />
          <p>
            By{" "}
            <span className="font-medium text-[#707882]">Salina Bastola</span>
          </p>
        </div>
        <p>3 Minutes Read</p>
      </div>


      {/* Title */}
      <h1 className="text-3xl font-bold text-[#0A2241] mb-4">What is whole Body pain?</h1>

      {/* Paragraphs */}
      <p className="text-[#707882] mb-4 leading-relaxed">
        Whole body pain, also known as widespread pain, refers to discomfort or soreness that affects multiple areas of the body simultaneously. This kind of pain can be acute or chronic and is often associated with conditions that involve inflammation or other systemic factors.
      </p>
      {/* Image */}
      <div className="my-8">
        <img
          src={wholebodypain}
          alt="Whole body pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-[#0A2241] mb-4">
        Causes of Whole Body Pain
      </h2>

      {/* List */}
      <ul className="text-[#707882] list-disc list-inside space-y-3 mb-6">
        <li>
          Fibromyalgia: One of the most common causes of widespread pain, fibromyalgia is a chronic condition that leads to musculoskeletal pain throughout the body. The pain can be accompanied by fatigue, sleep disturbances, and cognitive issues ("fibro fog"). It affects muscles, ligaments, and tendons, causing tenderness and stiffness, particularly in certain areas.
        </li>
        <li>
          Infections: Viral or bacterial infections, such as the flu or Lyme disease, can cause whole body pain. Infections typically lead to inflammation and muscle aches, along with other symptoms like fever, chills, and fatigue.
        </li>
        <li>
          Chronic Fatigue Syndrome (CFS): CFS, also known as myalgic encephalomyelitis, causes persistent fatigue and widespread pain, affecting muscles and joints. People with CFS often experience sleep problems, memory issues, and difficulty concentrating, along with muscle aches and soreness.
        </li>
        <li>
          Autoimmune Diseases: Conditions like lupus, rheumatoid arthritis, and polymyalgia rheumatica occur when the immune system mistakenly attacks the body’s own tissues. These diseases often cause widespread inflammation and pain, affecting muscles, joints, and organs.
        </li>
        <li>
          Stress and Anxiety: Chronic stress or anxiety can contribute to muscle tension and pain throughout the body. This is often referred to as tension myositis syndrome, where muscle spasms, stiffness, and soreness develop due to stress.
        </li>
        <li>
          Vitamin Deficiencies: Deficiencies in certain vitamins, particularly vitamin D, B12, and folate, can lead to muscle and joint pain. Lack of these nutrients can affect nerve function, leading to widespread discomfort and weakness.
        </li>
        <li>
          Dehydration: Inadequate hydration can cause muscle cramping, aches, and discomfort throughout the body. Dehydration impacts the function of muscles and joints, making them more prone to pain.
        </li>
        <li>
          Poor Sleep: Insufficient or poor-quality sleep can lead to whole body pain. Lack of restorative sleep causes muscle stiffness and can exacerbate conditions like fibromyalgia or arthritis, making pain more widespread.
        </li>
      </ul>
      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-[#0A2241] mb-4">
        Symptoms of Whole Body Pain
      </h2>

      {/* List */}
      <ul className="text-[#707882] list-disc list-inside space-y-3 mb-6">
        <li>
          Persistent muscle and joint pain across multiple areas of the body.
        </li>
        <li>
          Fatigue, often extreme and not relieved by rest.
        </li>
        <li>
          Stiffness and tenderness in muscles, ligaments, and tendons.
        </li>
        <li>
          Headaches or migraines.
        </li>
        <li>
          Fever or chills, especially if caused by an infection.
        </li>
        <li>
          Reduced range of motion in joints or muscles.
        </li>
      </ul>
      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-[#0A2241] mb-4">
        Treatment and Management
      </h2>

      {/* List */}
      <ul className="text-[#707882] list-disc list-inside space-y-3 mb-6">
        <li>
          Medications: Pain relievers, anti-inflammatory drugs, antidepressants, and anti-seizure medications are commonly used to treat widespread pain.
        </li>
        <li>
          Physical Therapy: Can help improve flexibility, strength, and overall mobility, reducing discomfort.
        </li>
        <li>
          Lifestyle Changes: Regular exercise, proper hydration, and a balanced diet can help alleviate pain.
        </li>
        <li>
          Stress Management: Practices like yoga, meditation, and deep breathing can reduce muscle tension and help manage pain.
        </li>
        <li>
          Sleep Improvement: Addressing sleep quality and aiming for regular, restful sleep can improve pain symptoms.
        </li>
        <li>
          Addressing Underlying Conditions: Treating the root cause of widespread pain, whether it’s an autoimmune disorder, infection, or nutrient deficiency, can help reduce symptoms.
        </li>
      </ul>
      <p className="text-[#707882] mb-4 leading-relaxed">
        Whole body pain can be challenging to diagnose and manage because it’s often related to several interconnected factors. If you’re experiencing persistent or unexplained widespread pain, it’s important to consult a healthcare professional to determine the cause and receive appropriate treatment.
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
            Whole body pain, Prevent sports injuries
          </p>
        </div>

      </div>
      <div className="border-t border-gray-200"></div>

    </div>
  )
}

export default WholeBodyPain
