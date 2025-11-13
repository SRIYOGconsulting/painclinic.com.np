import React from 'react'

const Pharmacy = () => {
  return (
   <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 font-[sans-serif] text-[#0A2241]">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Left Image Section */}
        <div className="bg-[#f3f6fa] rounded-xl">
          <img
            
            alt="product details"
            className="rounded-md object-cover h-120 w-full"
          />
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="md:text-xl font-semibold pb-6 text-[#0A2241] mt-20">Pharmacy</h2>
          <p className="text-[#707882] leading-relaxed mb-4">
            At our on-site pharmacy services are designed to support your pain management plan by ensuring safe, effective, and convenient access to the medications you need. We work closely with your healthcare team to provide personalized medication management, making sure you receive the best care possible. Our pharmacy services include:
          </p>
          <p className="text-[#707882] leading-relaxed">
            At our clinic, we understand that managing pain requires a comprehensive approach. Our pharmacy services are an essential part of that approach, providing you with the medications, guidance, and support needed to improve your quality of life.
          </p>
        </div>
      </div>

      {/* Bottom List Section */}
      <div className="space-y-6 text-[#707882]">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            1. Prescription Medications
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">Pain Relief Medications: </span>{" "}
              We offer a wide range of prescription medications, including analgesics, anti-inflammatory drugs, and muscle relaxants, to help manage your pain effectively.
            </li>
            <li>
              <span className="font-semibold ">
                Specialized Pain Medications:
              </span>{" "}
              For chronic or complex pain conditions, we provide specialized medications such as opioids, anticonvulsants for nerve pain, and antidepressants for managing pain-related mood disorders.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            2. Medication Counseling
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">
                Personalized Counseling:
              </span>{" "}
               Our pharmacists provide one-on-one counseling to ensure you understand how to take your medications safely, the potential side effects, and how to manage any risks.
            </li>
            <li>
              <span className="font-semibold">
                Medication Adherence Support:
              </span>{" "}
              We help you develop strategies to stay consistent with your prescribed regimen, which is crucial for managing chronic pain effectively.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            3. Medication Reviews
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">
                Comprehensive Reviews: 
              </span>{" "}
              We regularly review your medications to identify any potential interactions, redundancies, or side effects that may affect your treatment. This helps optimize your therapy and reduce risks.
            </li>
            <li>
              <span className="font-semibold">
                Drug Interaction Checks: 
              </span>{" "}
              Our pharmacists ensure that your pain medications do not interact negatively with other treatments or health conditions, ensuring a safe treatment plan.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            4. Medication Delivery & Refill Services
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">
                Convenient Medication Delivery:
              </span>{" "}
             For added convenience, we offer home delivery for your pain medications and refills, ensuring you never run out of essential treatments.
            </li>
            <li>
              <span className="font-semibold">
                Automated Refills:
              </span>{" "}
             Our system helps manage prescription refills to ensure you always have the medications you need, on time.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pharmacy
