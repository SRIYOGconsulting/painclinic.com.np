import drniru from "../assets/images/drniru.jpg";

const NiruM = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-25 font-[sans-serif]">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Section */}
        <div className="md:col-span-2 bg-white rounded-xl">
          {/* Doctor Image */}
          <div className="flex mb-6">
            <img
              src={drniru}
              alt="Dr. Niru Nepal"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl md:text-3xl text-[#0A2241] mb-4 font-semibold">
            Providing Holistic Care
          </h2>

          <p className="text-[#707882] leading-relaxed mb-4">
            I’m <span className="font-semibold">Dr. Niru Nepal</span>, an expert in Anesthesiology with a Fellowship in Chronic Pain Management (FIPM). With over 15 years of hands-on experience and a commitment to excellence, I specialize in helping patients manage chronic pain through advanced, minimally invasive techniques.
          </p>

          <p className="text-[#707882] leading-relaxed mb-4">
            At{" "}
            <span className="font-semibold">
              Advance Pain Specialist Clinic
            </span>
            , we focus on restoring comfort, mobility, and quality of life. Whether you're dealing with persistent back pain, neuropathic pain, or complex pain conditions, we use modern pain management protocols to ensure personalized and effective care.
          </p>

          <p className="text-[#707882] leading-relaxed">
            My mission is to provide compassionate, scientifically grounded treatments tailored to each individual’s condition. If chronic pain is interfering with your daily life, we’re here to guide you toward relief and recovery with confidence and care.
          </p>
        </div>

        {/* Right Section - Doctor's Profile */}
        <div className="rounded-xl shadow-md overflow-hidden w-full">
          {/* Header */}
          <div className="bg-[#234279] text-white px-6 py-4">
            <h3 className="text-2xl font-semibold">Doctor’s Profile</h3>
          </div>

          {/* Profile Content */}
          <div className="bg-[#f5f7fa] p-6">
            <div className="space-y-3">
              <div>
                <p className="text-[#0A2241] font-bold mb-1">Full Name:</p>
                <p className="text-[#707882] border-b border-gray-300 pb-3">
                  Dr. Niru Nepal
                </p>
              </div>

              <div>
                <p className="text-[#0A2241] font-bold mb-1">Speciality:</p>
                <p className="text-[#707882] border-b border-gray-300 pb-3">
                  Anesthesiology , Fellowship in Chronic Pain Management (FIPM)
                </p>
              </div>

              <div>
                <p className="text-[#0A2241] font-bold mb-1">Education:</p>
                <p className="text-[#707882] border-b border-gray-300 pb-3">
                  MBBS, MD, FIPM
                </p>
              </div>

              <div>
                <p className="text-[#0A2241] font-bold mb-1">NMC No:</p>
                <p className="text-[#707882] border-b border-gray-300 pb-3">
                  6820
                </p>
              </div>

              <div>
                <p className="text-[#0A2241] font-bold mb-1">
                  Years of Experience:
                </p>
                <p className="text-[#707882] border-b border-gray-300 pb-3">15+ Years</p>
              </div>

              <div>
                <p className="text-[#0A2241] font-bold mb-1">
                  Affiliated to:
                </p>
                <p className="text-[#707882]">Advance Pain Specialist Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NiruM
