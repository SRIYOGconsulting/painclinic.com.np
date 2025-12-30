import physiotherapy from "/images/physiotherapy/physiotherapy.png"
const Physiotherapy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 font-[sans-serif] text-[#0A2241]">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Left Image Section */}
        <div className="bg-[#f3f6fa] rounded-xl">
          <img
            src={physiotherapy}
            alt="product details"
            className="rounded-md object-cover h-120 w-full"
          />
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="md:text-xl font-semibold pb-6 text-[#0A2241] mt-20">Physiotherapy</h2>
          <p className="text-[#707882] leading-relaxed mb-4">
            At [Pain Clinic Name], our physiotherapy services are an integral part of our comprehensive pain management approach. Our team of experienced physiotherapists works closely with you to help reduce pain, improve mobility, and enhance overall function. Through personalized treatment plans, we aim to address the root causes of pain and prevent future injuries. Our physiotherapy services include:
          </p>
          <p className="text-[#707882] leading-relaxed">
            At [Pain Clinic Name], we are committed to providing the highest level of physiotherapy care, working closely with you to reduce pain, enhance mobility, and improve your overall well-being. Whether you're recovering from surgery, managing a chronic condition, or simply looking to improve your movement, our physiotherapists are here to support you every step of the way.
          </p>
        </div>
      </div>

      {/* Bottom List Section */}
      <div className="space-y-6 text-[#707882]">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            1. Pain Relief and Rehabilitation
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold"> Manual Therapy:</span>{" "}
              Skilled hands-on techniques such as joint mobilizations, soft tissue release, and massage to reduce pain and stiffness, improve joint mobility, and relieve muscle tension.
            </li>
            <li>
              <span className="font-semibold ">
                Therapeutic Exercises:
              </span>{" "}
              Targeted exercises to strengthen muscles, improve flexibility, and correct postural imbalances, addressing the underlying causes of pain.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            2. Post-Surgical Rehabilitation
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">
                Post-Surgery Recovery:
              </span>{" "}
              After surgery (e.g., joint replacement, spine surgery, etc.), our physiotherapists help you regain strength, mobility, and function through specialized rehabilitation programs.
            </li>
            <li>
              <span className="font-semibold">
                Scar Tissue Management:
              </span>{" "}
              Techniques to minimize scar tissue buildup and enhance the healing process after surgery.

            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            3. Chronic Pain Management
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">
                Tailored Pain Management Programs:
              </span>{" "}
              We offer physiotherapy programs that focus on chronic pain conditions, such as fibromyalgia, osteoarthritis, and back pain, with an emphasis on improving quality of life through functional rehabilitation.
            </li>
            <li>
              <span className="font-semibold">
                Neuromuscular Re-education:
              </span>{" "}
              Using techniques to retrain the nervous system, improving how the brain and muscles communicate to decrease pain and enhance movement.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            4. Sports Injury Rehabilitation
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">
                Sports-Specific Rehab:
              </span>{" "}
              Whether it's a sprain, strain, or post-surgery rehabilitation, we provide sports-specific physiotherapy to help you recover and return to activity safely.
            </li>
            <li>
              <span className="font-semibold">
                Injury Prevention Education:
              </span>{" "}
              Guidance on avoiding future injuries through proper technique, stretching, and strengthening exercises.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Physiotherapy
