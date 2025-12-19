import whole from "/images/conditions/whole-body-pain.jpg";
import muscle from "/images/conditions/muscle-pain.jpg";
import nerve from "/images/conditions/nerve-pain.jpg";
import cancer from "/images/conditions/cancer-pain.jpg";
import { Link } from "react-router-dom";

const WholeBodyPainC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-[#707882] font-[sans-serif]">
      {/* Image */}
      <div className="my-4">
        <img
          src={whole}
          alt="Person feeling whole body pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Short Description */}
      <p className="mb-10 leading-relaxed text-[#707882]">
        Whole-body pain can result from conditions like fibromyalgia, chronic fatigue syndrome, and severe infections. It causes widespread muscle and joint discomfort, stiffness, fatigue, and tenderness. Whole-body pain can significantly impact the quality of life and often requires long-term management.
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
                What causes whole-body pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Whole-body pain can be caused by conditions like fibromyalgia, arthritis, chronic fatigue syndrome, and infections.
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
                What are the symptoms of whole-body pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Symptoms include widespread muscle and joint pain, stiffness, fatigue, and often sensitivity to touch.
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
                How is whole-body pain treated?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Treatment includes medications, physical therapy, stress management, and lifestyle adjustments.
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
                When should I see a doctor for whole-body pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  If the pain is persistent, widespread, and affects your daily activities, see a doctor for a proper diagnosis.
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
              Muscle pain is often part of whole-body pain, as it’s common in conditions like fibromyalgia and chronic fatigue syndrome.
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
              Nerve pain is often part of whole-body pain syndromes, causing shooting, burning, or tingling sensations throughout the body.
            </p>
            <Link to="/conditions/nerve-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
              Read More
            </button></Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={cancer}
              alt="cancer"
              className="w-full h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900">Cancer Pain</h3>
            <p className="text-[#707882] py-3">
              Cancer pain can lead to whole-body pain, especially in advanced stages, affecting muscles, bones, and nerves.
            </p>
            <Link to="/conditions/cancer-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
              Read More
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeBodyPainC;
