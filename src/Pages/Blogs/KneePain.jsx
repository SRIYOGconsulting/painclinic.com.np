import knee from "/images/kneepain/knee-pain.jpg";
import UserRound from "/icons/user-round.svg";

const KneePain = () => {
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
      <h1 className="text-3xl font-bold text-gray-900 mb-4">What is Knee Pain?</h1>

      {/* Paragraphs */}
      <p className="mb-4 leading-relaxed  text-[#707882]">
        Knee pain refers to any discomfort, soreness, or injury that affects the knee joint,
        which connects the thigh bone (femur), shin bone (tibia), and kneecap (patella).
        This type of pain can result from a variety of causes, including injury, overuse,
        or underlying health conditions. Common causes of knee pain include ligament injuries
        (such as ACL tears), cartilage damage (like meniscus tears), arthritis, patellar
        tendinitis, and bursitis. Other factors such as age, weight, or improper movement
        patterns during exercise or daily activities can also contribute to knee pain.
      </p>

      <p className="mb-6 leading-relaxed text-[#707882]">
        As temperatures drop during the winter months, many people experience an increase
        in knee pain, whether it's from old injuries or underlying conditions like arthritis.
        The cold weather can lead to stiffer joints, reduced blood flow, and changes in air
        pressure that exacerbate discomfort in the knees. For those who already have
        conditions like osteoarthritis, the cold can increase the sensitivity of the joint,
        making pain more pronounced. Additionally, people tend to be less active in winter,
        which can lead to muscle stiffness and weakness, further stressing the knee joints.
      </p>

      {/* Image */}
      <div className="my-8">
        <img
          src={knee}
          alt="Person holding knee due to pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Why Winter Makes Knee Pain Worse
      </h2>

      {/* List */}
      <ul className="list-disc list-inside space-y-3 mb-6 text-[#707882]">
        <li>
          Cold and Damp Weather:  Cold temperatures
          can cause muscles and tissues around the knee to stiffen, restricting movement and
          causing pain. Damp weather can also increase the sensitivity of the joints.
        </li>
        <li>
          Barometric Pressure Changes:  The shift in air
          pressure during winter months can affect the joints, causing swelling and discomfort,
          especially in people with arthritis.
        </li>
        <li>
          Reduced Activity:  The cold weather often keeps
          people indoors, leading to less physical activity and weakened muscles that support
          the knee, making it more vulnerable to pain.
        </li>
        <li>
          Poor Footwear:  Ice and snow can make walking
          treacherous, and wearing improper footwear increases the risk of knee strain or falls.
        </li>
      </ul>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        What You Can Do to Relieve Winter Knee Pain
      </h2>

      {/* List */}
      <ul className="list-disc list-inside space-y-3 mb-6 text-[#707882]">
        <li>
          Stay Active:  Regular low-impact exercises like
          swimming, cycling, or walking can help maintain flexibility and strength around the
          knee, preventing stiffness and pain. Make sure to stretch before and after exercise.
        </li>
        <li>
          Warm Up Properly:  Always warm up before engaging
          in physical activities, especially in cold weather, to keep muscles and joints flexible
          and avoid strain.
        </li>
        <li>
          Layer Up:  Wear warm, breathable clothing to keep
          your muscles and joints warm. Knee sleeves or wraps can help provide additional warmth
          and support.
        </li>
        <li>
          Use Hot or Cold Therapy:  Applying a heating pad
          or warm compress to the knee can relax muscles and improve circulation. Cold packs can
          be helpful for reducing swelling and inflammation after activity.
        </li>
        <li>
          Mind Your Posture and Footwear:  Wear supportive
          shoes with good cushioning to prevent unnecessary stress on your knees. Avoid walking
          on icy or uneven surfaces to reduce the risk of falls.
        </li>
        <li>
          Consider Supplements or Medication:
          Over-the-counter anti-inflammatory medications, joint supplements (like glucosamine),
          or prescribed medications can help reduce pain and inflammation. Always consult with a
          healthcare professional before starting any new treatments.
        </li>
        <li>
          Consult a Doctor or Physical Therapist:
          If knee pain persists or worsens, it's important to seek medical advice. A doctor or
          physical therapist can help diagnose the underlying cause and provide a personalized
          treatment plan, including specific exercises or therapies.
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
            Knee pain, Knee Pain Causes
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default KneePain;
