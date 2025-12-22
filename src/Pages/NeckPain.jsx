import neckImg from "/images/neckpain/neck-pain.jpg";
import UserRound from "/icons/user-round.svg";

const NeckPain = () => {
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
      <h1 className="text-3xl font-bold text-gray-900 mb-4">What Is Neck Pain?</h1>

      {/* Paragraphs */}
      <p className="text-[#707882] mb-4 leading-relaxed">
        Neck pain refers to discomfort or pain in the muscles, joints, or bones of the neck.
        It can result from poor posture, muscle strain, injury, or age-related wear and tear
        on the spine, such as cervical spondylosis. Other common causes include herniated discs,
        whiplash from car accidents, or nerve compression due to issues like a slipped disc or
        bone spurs.
      </p>

      <p className="text-[#707882] mb-6 leading-relaxed">
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
      <ul className="text-[#707882] list-disc list-inside space-y-3 mb-6">
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
      <p className="text-[#707882] leading-relaxed mb-8">
        If you find that monsoon humidity is aggravating neck pain, staying hydrated, stretching
        regularly, using heat or cold therapy, and maintaining good posture can help alleviate
        some discomfort. Consult a healthcare provider if the pain becomes persistent or severe.
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
            Neck pain, Inflammation
          </p>
        </div>

      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default NeckPain;
