import ankel from "/images/conditions/ankle-pain.jpg";
import muscle from "/images/conditions/muscle-pain.jpg";
import nerve from "/images/conditions/nerve-pain.jpg";
import knee from "/images/conditions/knee-pain.jpg";
import { Link } from "react-router-dom";

const AnklePainC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-[#707882] font-[sans-serif]">
      {/* Image */}
      <div className="my-4">
        <img
          src={ankel}
          alt="Person holding their ankle due to pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Short Description */}
      <p className="mb-10 leading-relaxed text-[#707882]">
        Ankle pain can occur due to injuries like sprains, fractures, or tendinitis. It can also result from conditions like arthritis. Symptoms may include swelling, bruising, difficulty walking, or limited range of motion.
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
                What causes ankle pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Ankle pain can be caused by injuries like sprains or fractures, as well as conditions like tendinitis and arthritis.
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
                What are the symptoms of ankle pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Symptoms include swelling, bruising, tenderness, difficulty walking, and restricted ankle movement.
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
                How is ankle pain treated?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  Treatment includes rest, ice, compression, elevation (R.I.C.E.), physical therapy, and in severe cases, surgery.
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
                When should I see a doctor for ankle pain?
              </h3>
              <div className="mt-2 border-l-2 border-gray-300 pl-4">
                <p className="text-[#707882]">
                  See a doctor if the pain is severe, or if you notice swelling, difficulty walking, or if the pain doesn't improve with basic treatment.
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
              Muscle pain in the leg or ankle can be caused by strains or overuse, often accompanying joint injuries.
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
              Nerve pain can occur in the ankle due to compression or injury, causing sharp, radiating pain down the leg.
            </p>
            <Link to="/conditions/nerve-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
              Read More
            </button></Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={knee}
              alt="knee pain"
              className="w-full h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900">Knee Pain</h3>
            <p className="text-[#707882] py-3">
              Knee pain often accompanies ankle pain due to compensatory movements or issues like arthritis or ligament tears.
            </p>
            <Link to="/conditions/knee-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
              Read More
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnklePainC;
