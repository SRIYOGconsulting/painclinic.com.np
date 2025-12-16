import drmuskaan from "../assets/images/drmuskaan.jpg";

const MuskanM = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-25 font-[sans-serif]">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Section */}
        <div className="md:col-span-2 bg-white rounded-xl">
          {/* Doctor Image */}
          <div className="flex mb-6">
            <img
              src={drmuskaan}
              alt="Dr. Muskaan Shrestha"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl md:text-3xl text-[#0A2241] mb-4 font-semibold">
            Namaste
          </h2>

          <p className="text-[#707882] leading-relaxed mb-4">
            I’m <span className="font-semibold">Dr. Muskaan Shrestha</span>, a dedicated Pain Specialist with over 10 years of experience in managing and treating chronic and acute pain. Holding degrees in MBBS, MD, and Fellowship in Interventional Pain Management (FIPM), I am committed to offering evidence-based, patient-centered care to help individuals live healthier, pain-free lives.
          </p>

          <p className="text-[#707882] leading-relaxed mb-4">
            AtAt our pain clinic in Birtamode, Jhapa, we understand how pain can affect every aspect of your life—physically, emotionally, and socially. Whether you are suffering from back pain, joint pain, nerve-related pain, or post-surgical discomfort, our clinic provides advanced diagnostic tools and a wide range of treatment options tailored to your unique needs.
          </p>

          <p className="text-[#707882] leading-relaxed">
            With empathy, expertise, and a commitment to your well-being, my goal is not just to treat symptoms, but to improve your overall quality of life.
            If you or your loved one is struggling with pain, I invite you to visit us. Let’s work together on your journey to recovery.
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
                  Dr. Muskaan Shrestha
                </p>
              </div>

              <div>
                <p className="text-[#0A2241] font-bold mb-1">Speciality:</p>
                <p className="text-[#707882] border-b border-gray-300 pb-3">
                  Pain Specialist
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
                  9235
                </p>
              </div>

              <div>
                <p className="text-[#0A2241] font-bold mb-1">
                  Years of Experience:
                </p>
                <p className="text-[#707882]">10+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuskanM
