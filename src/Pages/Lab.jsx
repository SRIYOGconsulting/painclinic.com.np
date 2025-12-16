import lab from "../assets/images/lab.png"

const Lab = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 font-[sans-serif] text-[#0A2241]">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Left Image Section */}
        <div className="bg-[#f3f6fa] rounded-xl">
          <img
            src={lab}
            alt="product details"
            className="rounded-md object-cover h-120 w-full"
          />
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="md:text-xl font-semibold pb-6 text-[#0A2241] mt-20">Lab</h2>
          <p className="text-[#707882] leading-relaxed mb-4">
            At our clinic, our in-house laboratory services are designed to
            support accurate diagnosis and effective pain management. We offer a
            comprehensive range of diagnostic tests that aid in identifying the
            root causes of pain and guide personalized treatment plans. Our lab
            services include:
          </p>
          <p className="text-[#707882] leading-relaxed">
            We understand that accurate diagnosis is essential for effective
            pain relief. Our laboratory services are a critical component of our
            commitment to providing you with personalized, evidence-based pain
            management solutions.
          </p>
        </div>
      </div>

      {/* Bottom List Section */}
      <div className="space-y-6 text-[#707882]">
        {/* 1. Diagnostic Testing */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            1. Diagnostic Testing
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">Blood Tests:</span>{" "}
              To assess inflammation markers, autoimmune disorders, and overall
              health conditions that may contribute to pain.
            </li>
            <li>
              <span className="font-semibold ">
                Genetic Testing:
              </span>{" "}
              To identify genetic predispositions that may affect pain
              sensitivity and response to treatment.
            </li>
            <li>
              <span className="font-semibold">
                Vitamin and Mineral Levels:
              </span>{" "}
              Testing for deficiencies (e.g., vitamin D, B12) that could be
              linked to musculoskeletal pain.
            </li>
          </ul>
        </div>

        {/* 2. Drug Screening */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            2. Drug Screening
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">
                Urine Drug Testing (UDT):
              </span>{" "}
              To monitor medication adherence and ensure appropriate use of
              prescribed pain medications.
            </li>
            <li>
              <span className="font-semibold">
                Prescription Drug Monitoring:
              </span>{" "}
              Helps to detect potential misuse or diversion of controlled
              substances.
            </li>
          </ul>
        </div>

        {/* 3. Imaging and Radiology Support */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            3. Imaging and Radiology Support
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">
                X-rays, MRIs, and CT Scans:
              </span>{" "}
              Through partnerships with local imaging centers, we provide
              diagnostic imaging services to identify structural causes of pain,
              such as herniated discs, fractures, or joint degeneration.
            </li>
          </ul>
        </div>

        {/* 4. Nerve Function and Pain Sensitivity Tests */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2241] mb-2">
            4. Nerve Function and Pain Sensitivity Tests
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">
                Electromyography (EMG) and Nerve Conduction Studies (NCS):
              </span>{" "}
              To evaluate nerve function and detect nerve damage or irritation
              that may be contributing to chronic pain conditions like
              neuropathy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lab;
