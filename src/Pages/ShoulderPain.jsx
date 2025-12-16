import shoulderImg from "../assets/images/shoulder-pain.jpg";
import { UserRound } from 'lucide-react';

const ShoulderPain = () => {
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
      <h1 className="text-3xl font-bold text-gray-900 mb-4">What is Shoulder Pain?</h1>

      {/* Paragraphs */}
      <p className="text-[#707882] mb-4 leading-relaxed">
        Shoulder pain is discomfort in or around the shoulder joint, which can be caused by a variety of factors. The shoulder is a highly mobile joint, so it's susceptible to injuries, muscle strains, tendinitis, and joint inflammation. Common causes of shoulder pain include rotator cuff injuries, where the muscles and tendons that stabilize the shoulder are torn or inflamed, as well as shoulder impingement, where tendons get pinched during movement. Other causes include arthritis, frozen shoulder, and bursitis, which result in stiffness, pain, and limited mobility.
      </p>

      <p className="text-[#707882] mb-6 leading-relaxed">
        Additionally, shoulder pain can arise from dislocations, where the upper arm bone pops out of the socket, or from overuse and poor posture. Repetitive motions, such as lifting or overhead movements, can put stress on the shoulder muscles and joints, leading to pain or discomfort. Treatment typically involves rest, ice or heat therapy, physical therapy to improve range of motion, anti-inflammatory medications, and in severe cases, surgical intervention may be necessary to address injuries or chronic conditions.
      </p>

      {/* Image */}
      <div className="my-8">
        <img
          src={shoulderImg}
          alt="Person holding neck due to pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Subheading */}
      <p className="text-[#707882] text-gray-900 mb-4">
        Shoulder pain can worsen during cold weather due to several factors related to temperature and changes in the body’s response to cold conditions.
      </p>

      {/* List */}
      <ul className="text-[#707882] list-disc list-inside space-y-3">
        <li>
          Muscle Stiffness: Cold weather causes muscles and tendons to contract, making them tighter and less flexible. This can lead to increased stiffness in the shoulder area, especially if there’s an existing injury or condition like arthritis. When muscles are stiff, they are more prone to strains or discomfort, making shoulder pain worse.
        </li>
        <li>
          Reduced Blood Flow: In colder temperatures, the blood vessels constrict, which reduces circulation to the muscles and joints. Reduced blood flow can make the shoulder muscles feel tense and sore, particularly for people with conditions like rotator cuff injuries, frozen shoulder, or osteoarthritis.
        </li>
        <li>
          Less Physical Activity: In cold weather, people tend to be less active, which can result in muscles becoming weaker or less flexible. Inactivity can make the shoulder joint more vulnerable to injury or pain. Additionally, when the body is less active, the natural lubricants in the joints (synovial fluid) decrease, which can increase friction and lead to discomfort.
        </li>
        <li>
          Pressure Changes: During the monsoon, the atmosphere often experiences changes in pressure due to storms and shifting weather patterns. These changes can affect the joints, especially in areas like the neck and spine, causing discomfort or worsening existing pain conditions like cervical spondylosis or herniated discs.
        </li>
        <li>
          Barometric Pressure Changes: Cold weather often comes with drops in barometric pressure, which can affect joints, especially those already dealing with inflammation, like in arthritis. The pressure changes can cause swelling and pain in the shoulder joints, making them feel more stiff or achy.
        </li>
      </ul>


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
            Shoulder Pain, Cold Weather Shoulder Pain
          </p>
        </div>

      </div>
      <div className="border-t border-gray-200"></div>

    </div>
  )
}

export default ShoulderPain
