import drpuspak from "/images/message/drpuspak.jpg";

const PuspakM = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-25 font-[sans-serif]">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Section */}
        <div className="md:col-span-2 bg-white rounded-xl">
          {/* Doctor Image */}
          <div className="flex mb-6">
            <img
              src={drpuspak}
              alt="Dr. Puspak Regmi"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl md:text-3xl text-[#0A2241] mb-4 font-semibold">
            Towards Humanity
          </h2>

          <p className="text-[#707882] leading-relaxed mb-4">
            I’m <span className="font-semibold">Dr. Puspak Regmi</span>, a
            dedicated Pain Specialist with over 15 years of experience in
            managing and treating chronic and acute pain. Holding degrees in{" "}
            <span className="font-semibold">
              MBBS, MD, and Fellowship in Interventional Pain Management (FIPM)
            </span>
            , I am committed to offering evidence-based, patient-centered care
            to help individuals live healthier, pain-free lives.
          </p>

          <p className="text-[#707882] leading-relaxed mb-4">
            At{" "}
            <span className="font-semibold">
              Advance Pain Specialist Clinic
            </span>
            , we are committed to bringing world-class pain management solutions
            to the people of Koshi Province and beyond. We understand that
            living with pain can affect every aspect of your daily life—from
            your physical health to your mental well-being. That is why our team
            works tirelessly to provide comprehensive diagnosis and treatment
            for pain conditions such as back pain, joint pain, and
            nerve-related discomfort.
          </p>

          <p className="text-[#707882] leading-relaxed">
            With empathy, experience, and a commitment to your well-being, my
            goal is not just to treat symptoms, but to truly transform lives. I
            invite you to visit us and experience care that is not only
            professional but also deeply empathetic—ensuring you feel supported
            every step of the way.
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
                  Dr. Puspak Regmi
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
                  6977
                </p>
              </div>

              <div>
                <p className="text-[#0A2241] font-bold mb-1">
                  Years of Experience:
                </p>
                <p className="text-[#707882]">15+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuspakM;
