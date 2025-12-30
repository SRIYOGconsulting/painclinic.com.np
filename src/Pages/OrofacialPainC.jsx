import orofacial from "/images/conditions/orafacial-pain.jpg";
import muscle from "/images/conditions/muscle-pain.jpg";
import nerve from "/images/conditions/nerve-pain.jpg";
import back from "/images/conditions/back-pain.jpg";
import { Link } from "react-router-dom";

const OrofacialPainC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-[#707882] font-[sans-serif]">
      {/* Image */}
      <div className="my-4">
        <img
          src={orofacial}
          alt="Person holding jaw due to orofacial pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Short Description */}
      <p className="mb-10 leading-relaxed text-[#707882]">
        Orofacial pain includes pain that affects the mouth, jaw, face, and related structures. It can result from conditions like temporomandibular joint disorders (TMJ), tooth infections, sinus issues, or nerve pain. Symptoms may include sharp, aching, or throbbing pain in the affected area.
      </p>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">FAQ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* FAQ 1 */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
              <div className="text-xl">+</div>
            </div>
            <div className="ml-4 flex flex-col">
              <h3 className="font-medium text-gray-900">
                What causes orofacial pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Causes include TMJ disorders, tooth infections, nerve compression, and sinus issues.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
              <div className="text-xl">+</div>
            </div>
            <div className="ml-4 flex flex-col">
              <h3 className="font-medium text-gray-900">
                What are the symptoms of orofacial pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Symptoms include pain in the jaw, face, teeth, or gums, and sometimes difficulty chewing or opening the mouth.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
              <div className="text-xl">+</div>
            </div>
            <div className="ml-4 flex flex-col">
              <h3 className="font-medium text-gray-900">
                Is orofacial pain linked to dental issues?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Yes, cavities, misaligned teeth, or TMJ disorders can cause pain. Regular dental check-ups can help identify these issues.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
              <div className="text-xl">+</div>
            </div>
            <div className="ml-4 flex flex-col">
              <h3 className="font-medium text-gray-900">
                Can stress trigger orofacial pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Yes, stress can cause jaw clenching and teeth grinding.
This often leads to headaches and facial muscle pain.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
              <div className="text-xl">+</div>
            </div>
            <div className="ml-4 flex flex-col">
              <h3 className="font-medium text-gray-900">
                How is orofacial pain treated?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Treatment depends on the underlying cause and may include medications, physical therapy, or surgery.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
              <div className="text-xl">+</div>
            </div>
            <div className="ml-4 flex flex-col">
              <h3 className="font-medium text-gray-900">
                When should I see a doctor for orofacial pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  If pain persists, worsens, or is accompanied by swelling, see a doctor or dentist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Symptoms Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Related Symptoms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={muscle}
              alt="muscle"
              className="w-full h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900">Muscle Pain</h3>
            <p className="text-[#707882] py-3">
              Muscle pain in the neck or jaw can lead to discomfort and contribute to orofacial pain.
            </p>
            <Link to="/conditions/muscle-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
              Read More
            </button></Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={nerve}
              alt="nerve"
              className="w-full h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900">Nerve Pain</h3>
            <p className="text-[#707882] py-3">
              Nerve pain in the face or jaw can result from conditions like trigeminal neuralgia or nerve compression.
            </p>
            <Link to="/conditions/nerve-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
              Read More
            </button></Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={back}
              alt="back pain"
              className="w-full h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900">Back Pain</h3>
            <p className="text-[#707882] py-3">
              Back pain, particularly in the upper back, can be related to orofacial pain due to poor posture or muscle tension.
            </p>
            <Link to="/conditions/back-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
              Read More
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrofacialPainC;
