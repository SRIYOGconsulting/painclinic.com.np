import JointImg from "/images/jointpain/joint-pain.jpg";
import UserRound from "/icons/user-round.svg";

const JointPain = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-30 text-[#707882] font-[sans-serif]">
      {/* Author and read time */}
      <div className="text-[12px] text-[#707882] mb-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={UserRound} alt="userround" className="w-4 h-4 text-[#234179] stroke-current"/>
          <p>
            By{" "}
            <span className="font-medium text-[#707882]">Salina Bastola</span>
          </p>
        </div>
        <p>3 Minutes Read</p>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">What is Joint pain?</h1>

      {/* Paragraphs */}
      <p className="mb-4 leading-relaxed  text-[#707882]">
        Joint pain refers to discomfort, aches, or soreness in the joints, which are the areas where two bones meet, such as the knees, elbows, shoulders, or hips. It can be caused by a variety of factors, including injury, arthritis, overuse, or infection. Conditions like osteoarthritis, rheumatoid arthritis, or gout are common causes of chronic joint pain, while injuries such as sprains or strains can cause acute pain. Joint pain may be accompanied by swelling, stiffness, or reduced range of motion. Treatment often involves rest, physical therapy, pain relievers, and sometimes surgery, depending on the severity and cause of the pain. Preventive measures include maintaining a healthy weight, staying active, and using proper body mechanics to avoid strain on the joints.
      </p>

      {/* Image */}
      <div className="my-8">
        <img
          src={JointImg}
          alt="Person holding neck due to pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Causes of Joint Pain
      </h2>

      {/* List */}
      <ul className="list-disc list-inside space-y-3 mb-6  text-[#707882]">
        <li>
          Arthritis: One of the most common causes of joint pain, arthritis refers to inflammation of the joints. Types of arthritis, such as osteoarthritis (caused by wear and tear on the joint cartilage) and rheumatoid arthritis (an autoimmune disease that attacks the joints), can lead to pain, stiffness, and swelling.
        </li>
        <li>
          Injury: Trauma such as sprains, strains, fractures, or dislocations can cause joint pain. Injuries to ligaments, tendons, or cartilage can also lead to swelling, bruising, and difficulty moving the joint.
        </li>
        <li>
          Overuse or Repetitive Motion: Repetitive movements or overuse of a joint in activities like running, sports, or manual labor can strain the joint and lead to pain or inflammation (often referred to as "overuse injuries").
        </li>
        <li>
          Bursitis: Bursae are fluid-filled sacs that cushion the joints. Bursitis occurs when these sacs become inflamed due to overuse or injury, leading to pain and swelling around the joint.
        </li>
        <li>
          Gout: Gout is a form of arthritis caused by the buildup of uric acid crystals in the joints, often affecting the big toe. It leads to intense, sudden pain, swelling, and redness, usually in the lower joints.
        </li>
        <li>
          Rest and Recovery: Adequate rest between activities is essential for preventing overuse injuries. Ensure that your muscles and joints have time to recover before engaging in another physically demanding activity.
        </li>
        <li>
          Age: As people age, the cartilage in the joints can wear down, leading to conditions like osteoarthritis, which causes pain, stiffness, and reduced mobility.
        </li>
        <li>
          Obesity: Excess weight puts additional strain on weight-bearing joints, especially the knees, hips, and lower back, increasing the risk of joint pain and conditions like osteoarthritis.
        </li>
      </ul>
      <p className="leading-relaxed mb-8  text-[#707882]">
        Addressing the underlying cause of joint pain is important for effective treatment, whether through lifestyle changes, medical interventions, or physical therapy.
      </p>
      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        How to Protect Joints
      </h2>

      {/* List */}
      <ul className="list-disc list-inside space-y-3 mb-6  text-[#707882]">
        <li>
          Stay Active: Regular exercise helps keep the muscles around your joints strong, providing better support and stability. Low-impact activities like swimming, walking, or cycling are especially gentle on the joints while still offering benefits. Strength training also helps improve joint function.
        </li>
        <li>
          Maintain a Healthy Weight: Excess weight puts additional stress on weight-bearing joints, especially the knees, hips, and lower back. By maintaining a healthy weight, you reduce the risk of developing joint pain and conditions like osteoarthritis.
        </li>
        <li>
          Use Proper Technique: Whether you're lifting heavy objects, exercising, or performing daily tasks, always use proper body mechanics. Avoid overextending your joints, and lift objects with your legs, not your back. Practicing good posture can also prevent unnecessary strain on the joints.
        </li>
        <li>
          Stretch Regularly: Flexibility plays a key role in joint health. Regular stretching helps maintain the range of motion in your joints and can prevent stiffness. Incorporate dynamic stretching before exercise and static stretching afterward.
        </li>
        <li>
          Warm-Up and Cool-Down: Warming up before exercise prepares your joints and muscles for activity, while cooling down afterward helps relax the muscles and restore flexibility. This can help prevent injuries and soreness.
        </li>
        <li>
          Protect Your Joints During Activity: If you're engaging in high-impact or repetitive activities, use supportive gear like braces, knee pads, or wrist guards to reduce the risk of injury. Ensure you're wearing comfortable shoes that provide proper arch support.
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
            Sports injury, Injury prevention
          </p>
        </div>

      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  )
}

export default JointPain
