import cancer from "/images/conditions/cancer-pain.jpg";
import muscle from "/images/conditions/muscle-pain.jpg";
import nerve from "/images/conditions/nerve-pain.jpg";
import whole from "/images/conditions/whole-body-pain.jpg";
import { Link } from "react-router-dom";

const CancerPainC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-[#707882] font-[sans-serif]">
      {/* Image */}
      <div className="my-4">
        <img
          src={cancer}
          alt="Person receiving treatment for cancer pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Short Description */}
      <p className="mb-10 leading-relaxed text-[#707882]">
        Cancer pain can arise from the tumor itself, its growth, and treatment methods like chemotherapy or radiation. Pain can be localized to the area of cancer, or it can be referred to other parts of the body. Managing cancer pain is an important part of treatment.
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
                What causes cancer pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Cancer pain can be caused by the tumor pressing on nearby tissues or organs, nerve compression, or treatment-related side effects.
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
                What are the symptoms of cancer pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Symptoms include persistent pain, throbbing sensations, sharp or dull aches, and pain that worsens over time.
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
                How is cancer pain treated?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Treatment includes pain medications, radiation therapy, chemotherapy, and palliative care.
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
                When should I see a doctor for cancer pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  See a doctor if the pain is severe or interferes with daily activities to adjust treatment and manage symptoms.
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
                Should I report pain to my doctor?  
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Yes, always inform your doctor about any new or worsening pain.
Prompt reporting allows adjustments in medication or therapy for better relief.
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
                How is cancer pain managed?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                 Treatment includes pain medications, radiation therapy, chemotherapy, and palliative care.
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
              Muscle pain can occur due to cancer treatments like chemotherapy or as a side effect of cancer-related fatigue.
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
              Nerve pain is common in cancer patients, especially due to tumor growth or treatments that damage nerves.
            </p>
            <Link to="/conditions/nerve-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
              Read More
            </button></Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={whole}
              alt="whole body pain"
              className="w-full h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900">Whole Body Pain</h3>
            <p className="text-[#707882] py-3">
              Cancer can cause whole-body pain, especially in advanced stages, affecting muscles, bones, and organs.
            </p>
            <Link to="/conditions/whole-body-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
              Read More
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancerPainC;
