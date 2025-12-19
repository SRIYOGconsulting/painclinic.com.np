// import { Link, Outlet } from "react-router-dom";
// import headacheImg from "/images/conditions/headache-pain.jpg";
// import JointImg from "/images/conditions/joint-pain.jpg";
// import neckImg from "/images/conditions/neck-pain.jpg";
// import shoulderImg from "/images/conditions/shoulder-pain.jpg";
// import orofacial from "/images/conditions/orafacial-pain.jpg";
// import disc from "/images/conditions/back-pain.jpg";
// import knee from "/images/conditions/knee-pain.jpg";
// import ankel from "/images/conditions/ankle-pain.jpg";
// import nerve from "/images/conditions/nerve-pain.jpg";
// import muscle from "/images/conditions/muscle-pain.jpg";
// import fibromyalgia from "/images/conditions/fibromyalgia-pain.jpg";
// import sports from "/images/conditions/sports-injury.jpg";
// import whole from "/images/conditions/whole-body-pain.jpg";
// import cancer from "/images/conditions/cancer-pain.jpg";
// import headacheIcon from "/images/conditions/headache.png";
// import JointIcon from "/images/conditions/joint.png";
// import neckIcon from "/images/conditions/neck.png";
// import shoulderI from "/images/conditions/shoulder.png";
// import orofacialI from "/images/conditions/orofacial.png";
// import discI from "/images/conditions/back.png";
// import kneeI from "/images/conditions/knee.png";
// import ankelI from "/images/conditions/ankle.png";
// import nerveI from "/images/conditions/nerve.png";
// import muscleI from "/images/conditions/muscle.png";
// import fibromyalgiaI from "/images/conditions/fibromyalgia.png";
// import sportsI from "/images/conditions/sports-injury.png";
// import wholeI from "/images/conditions/whole-body.png";
// import cancerI from "/images/conditions/cancer.png";

// const conditions = [
//   {
//     title: "Headache",
//     description:
//       "Headaches can range from mild discomfort to severe, debilitating pain. They may be caused by stress, tension, migraines, or underlying medical conditions, requiring expert evaluation and targeted treatment.",
//     image: headacheImg,
//     icon: headacheIcon,
//     path: "headache",
//   },
//   {
//     title: "Joint Pain",
//     description:
//       "Joint pain, whether due to arthritis, injury, or overuse, can limit mobility and reduce quality of life. It often worsens with age or weather changes and requires specialized care for effective relief.",
//     image: JointImg,
//     icon: JointIcon,
//     path: "joint-pain",
//   },
//   {
//     title: "Neck Pain",
//     description:
//       "Neck pain often results from poor posture, muscle strain, or conditions like cervical spondylosis. It can lead to stiffness, reduced motion, and discomfort, impacting daily activities.",
//     image: neckImg,
//     icon: neckIcon,
//     path: "neck-pain",
//   },
//   {
//     title: "Shoulder Pain",
//     description:
//       "Shoulder pain, caused by rotator cuff injuries, frozen shoulder, or inflammation, can hinder arm movement and affect routine tasks. Early diagnosis and treatment are key to recovery.",
//     image: shoulderImg,
//     icon: shoulderI,
//     path: "shoulder-pain",
//   },
//   {
//     title: "Orofacial Pain",
//     description:
//       "Orofacial pain, including jaw discomfort and facial pain, can stem from dental issues, nerve problems, or muscle strain. It requires a multi-disciplinary approach for effective relief.",
//     image: orofacial,
//     icon: orofacialI,
//     path: "orofacial-pain",
//   },
//   {
//     title: "Disc Prolapse",
//     description:
//       "Back pain, including conditions like slipped discs, can cause severe discomfort, radiating pain, or numbness in the legs. It is often triggered by injury, poor posture, or degenerative conditions.",
//     image: disc,
//     icon: discI,
//     path: "whole-body-pain",
//   },
//   {
//     title: "Knee Pain",
//     description:
//       "Knee pain can result from injuries, arthritis, or overuse. It affects mobility and may worsen with age or physical activity, making timely intervention crucial.",
//     image: knee,
//     icon: kneeI,
//     path: "knee-pain",
//   },
//   {
//     title: "Ankle Pain",
//     description:
//       "Ankle pain is commonly caused by sprains, fractures, or conditions like gout. It can hinder walking and requires proper care to prevent long-term complications.",
//     image: ankel,
//     icon: ankelI,
//     path: "knee-pain",
//   },
//   {
//     title: "Nerve Related Pain",
//     description:
//       "Nerve pain, such as sciatica or neuropathy, manifests as sharp, burning, or tingling sensations. It often results from nerve damage or compression and needs expert management.",
//     image: nerve,
//     icon: nerveI,
//     path: "nerve-pain",
//   },
//   {
//     title: "Muscle Pain",
//     description:
//       "Muscle pain can occur due to overexertion, injuries, or medical conditions like myalgia. It affects physical activity and requires tailored therapies for relief and recovery.",
//     image: muscle,
//     icon: muscleI,
//     path: "muscle-pain",
//   },
//   {
//     title: "Fibromyalgia",
//     description:
//       "Fibromyalgia is a chronic condition causing widespread pain, fatigue, and sleep disturbances. Managing this condition involves a combination of medication, therapy, and lifestyle changes.",
//     image: fibromyalgia,
//     icon: fibromyalgiaI,
//     path: "neck-pain",
//   },
//   {
//     title: "Sports Injury",
//     description:
//       "Sports injuries, including sprains, strains, and fractures, can impair athletic performance. Early diagnosis and rehabilitation are vital for a full recovery.",
//     image: sports,
//     icon: sportsI,
//     path: "sports-pain",
//   },
//   {
//     title: "Whole Body Pain",
//     description:
//       "Whole body pain, often linked to chronic conditions, stress, or fibromyalgia, affects overall well-being. Comprehensive care is essential for long-term management.",
//     image: whole,
//     icon: wholeI,
//     path: "whole-body-pain",
//   },
//   {
//     title: "Cancer Pain",
//     description:
//       "Cancer pain, caused by tumors or treatment side effects, can severely affect quality of life. Advanced pain management techniques provide significant relief for patients.",
//     image: cancer,
//     icon: cancerI,
//     path: "cancer-pain",
//   },
// ];

// const Conditions = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-20 font-[sans-serif]">

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {conditions.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             {/* Image Section */}
//             <div className="relative">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-60 object-cover"
//               />

//               {/* Blue Circle with Image */}
//               <div className="absolute -bottom-6 left-6 object-cover h-20 w-20 rounded-full border-[6px] border-white bg-[#234179] shadow-md transition-all duration-300 hover:border-[#234179] hover:bg-white">
//                 <img
//                   src={item.icon}
//                   alt={`${item.title} icon`}
//                   className="object-cover h-14 w-14 mx-auto my-2"
//                 />
//               </div>
//             </div>

//             {/* Text Section */}
//             <div className="pt-10 px-6 pb-6">
//               <Link to={`/${item.path}`} ><h2 className="text-xl font-semibold text-gray-800 mb-2 hover:underline hover:text-[#234179]">
//                 {item.title}
//               </h2></Link>

//               <p className="text-[#707882] leading-relaxed text-[16px]">
//                 {item.description}
//               </p>
              
//             </div>
//             <div className="px-6 pb-4"><Link to={item.path} ><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">Read More</button></Link></div>
            
//           </div>
//         ))}
//       </div>
//       <Outlet/>
//     </div>
//   );
// };

// export default Conditions;


// src/Pages/Conditions.jsx
import { Link } from "react-router-dom";
import conditionsData from "../ConditionsData";

const Conditions = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 font-[sans-serif]">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {conditionsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute -bottom-6 left-6 object-cover h-20 w-20 rounded-full border-[6px] border-white bg-[#234179] shadow-md transition-all duration-300 hover:border-[#234179] hover:bg-white">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="object-cover h-14 w-14 mx-auto my-2"
                />
              </div>
            </div>

            <div className="pt-10 px-6 pb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2  hover:text-[#234179]">
                {item.title}
              </h2>
              <p className="text-[#707882] leading-relaxed text-[16px]">
                {item.description.substring(0, 100)}...
              </p>
            </div>

            <div className="px-6 pb-4">
              <Link to={`/conditions/${item.path}`}>
                <button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conditions;

