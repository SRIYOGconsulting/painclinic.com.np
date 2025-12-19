import fibromyalgia from "/images/conditions/fibromyalgia-pain.jpg";
import muscle from "/images/conditions/muscle-pain.jpg";
import nerve from "/images/conditions/nerve-pain.jpg";
import whole from "/images/conditions/whole-body-pain.jpg";
import { Link } from "react-router-dom";

const FibromyalgiaC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-[#707882] font-[sans-serif]">
      {/* Image */}
      <div className="my-4">
        <img
          src={fibromyalgia}
          alt="Person experiencing fibromyalgia pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Short Description */}
      <p className="mb-10 leading-relaxed text-[#707882]">
        Fibromyalgia is a chronic condition that causes widespread pain, fatigue, and tenderness in the muscles, ligaments, and tendons. It is often accompanied by sleep disturbances, memory issues, and mood swings. The cause is not fully understood, but it may involve a combination of genetics, infections, and physical or emotional trauma.
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
                What causes fibromyalgia?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  The cause is unclear, but it may result from an abnormal response to pain signals, genetics, infections, or trauma.
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
                What are the symptoms of fibromyalgia?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Symptoms include widespread muscle pain, fatigue, sleep disturbances, memory problems, and mood issues.
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
                How is fibromyalgia treated?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Treatment includes medications, physical therapy, stress management, lifestyle changes, and sleep management.
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
                When should I see a doctor for fibromyalgia?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  See a doctor if you experience chronic pain, fatigue, or difficulty functioning in daily life due to these symptoms.
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
              Muscle pain is a common symptom of fibromyalgia, with tenderness and pain throughout the body.
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
              Nerve pain, such as tingling or burning sensations, often accompanies fibromyalgia and contributes to the discomfort.
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
              Whole body pain is a hallmark of fibromyalgia, affecting muscles, joints, and nerves throughout the body.
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

export default FibromyalgiaC;
