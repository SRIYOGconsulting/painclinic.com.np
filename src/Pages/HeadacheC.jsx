import headacheImg from "/images/home/headache-pain.jpg";
import nerve from "/images/conditions/nerve-pain.jpg";
import muscle from "/images/conditions/muscle-pain.jpg";
import neckImg from "/images/conditions/neck-pain.jpg";
import { Link } from "react-router-dom";

const Headache = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-[#707882] font-[sans-serif]">
      {/* Image */}
      <div className="my-4">
        <img
          src={headacheImg}
          alt="Person holding neck due to pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Short Description */}
      <p className="mb-10 leading-relaxed text-[#707882]">
        A headache is pain in the head or neck area, which can range from mild to severe. Common causes include stress, dehydration, or lack of sleep. There are different types like tension headaches, migraines, and sinus headaches. Symptoms may include throbbing pain, nausea, and sensitivity to light or sound. Headaches can range from mild discomfort to severe, debilitating pain. They may be caused by stress, tension, migraines, or underlying medical conditions, requiring expert evaluation and targeted treatment.
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
        What are the main causes of headaches?
      </h3>
      <div className="mt-2 border-l-2 border-gray-300 pl-4">
        <p className="text-[#707882]">
          Common causes include stress, dehydration, lack of sleep, eye strain, and sinus issues.
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
        What are the symptoms of a migraine headache?
      </h3>
      <div className="mt-2 border-l-2 border-gray-300 pl-4">
        <p className="text-[#707882]">
          Symptoms include throbbing pain, nausea, light/sound sensitivity, and sometimes visual disturbances.
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
        How can I treat a headache at home?
      </h3>
      <div className="mt-2 border-l-2 border-gray-300 pl-4">
        <p className="text-[#707882]">
          Try over-the-counter pain relievers, hydration, rest, and cold/warm compresses.
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
        When should I see a doctor about my headache?
      </h3>
      <div className="mt-2 border-l-2 border-gray-300 pl-4">
        <p className="text-[#707882]">
          See a doctor if headaches are frequent, severe, or accompanied by unusual symptoms.
        </p>
      </div>
    </div>
  </div>

  {/* FAQ 5 */}
  <div className="flex items-start">
    <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
      <div className="text-xl">+</div>
    </div>
    <div className="ml-4 flex flex-col">
      <h3 className="font-medium text-gray-900">
        Can diet affect headaches?
      </h3>
      <div className="mt-2 border-l-2 border-gray-300 pl-4">
        <p className="text-[#707882]">
          Yes, foods like caffeine, alcohol, and processed meats can trigger headaches.
        </p>
      </div>
    </div>
  </div>

  {/* FAQ 6 */}
  <div className="flex items-start">
    <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
      <div className="text-xl">+</div>
    </div>
    <div className="ml-4 flex flex-col">
      <h3 className="font-medium text-gray-900">
        Are there any lifestyle changes that can help prevent headaches?
      </h3>
      <div className="mt-2 border-l-2 border-gray-300 pl-4">
        <p className="text-[#707882]">
          Regular sleep, hydration, stress management, and exercise can help reduce headaches.
        </p>
      </div>
    </div>
  </div>

  {/* FAQ 7 */}
  <div className="flex items-start">
    <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
      <div className="text-xl">+</div>
    </div>
    <div className="ml-4 flex flex-col">
      <h3 className="font-medium text-gray-900">
        What is a sinus headache, and how does it differ from other types of headaches?
      </h3>
      <div className="mt-2 border-l-2 border-gray-300 pl-4">
        <p className="text-[#707882]">
          Sinus headaches cause pressure and pain around the forehead and eyes, often with congestion.
        </p>
      </div>
    </div>
  </div>

  {/* FAQ 8 */}
  <div className="flex items-start">
    <div className="w-8 h-8 rounded-full bg-[#234179] flex items-center justify-center text-white">
      <div className="text-xl">+</div>
    </div>
    <div className="ml-4 flex flex-col">
      <h3 className="font-medium text-gray-900">
        Are headaches a sign of a more serious condition?
      </h3>
      <div className="mt-2 border-l-2 border-gray-300 pl-4">
        <p className="text-[#707882]">
          Most headaches aren't serious, but persistent or severe ones should be checked by a doctor.
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
              src={neckImg}
              alt="neckpain"
              className="w-full h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900">Neck Pain</h3>
            <p className="text-[#707882] py-3">
              Neck pain often results from poor posture, muscle strain, or conditions like cervical spondylosis. It can lead to stiffness, reduced motion, and discomfort, impacting daily activities.
            </p>
            <Link to="/conditions/nerve-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
                  Read More
                </button></Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={muscle}
              alt="muscle"
              className="w-full h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900"> Muscle Pain</h3>
            <p className="text-[#707882] py-3">
              Muscle pain can occur due to overexertion, injuries, or medical conditions like myalgia. It affects physical activity and requires tailored therapies for relief and recovery.
            </p>
            <Link to="/conditions/nerve-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
                  Read More
                </button></Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={nerve}
              alt="nerve"
              className="w-full h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900">Nerve Pain</h3>
            <p className="text-[#707882] py-3">
              Nerve pain, such as sciatica or neuropathy, manifests as sharp, burning, or tingling sensations. It often results from nerve damage or compression.
            </p>
            <Link to="/conditions/nerve-pain"><button className="border border-[#234179] px-3 py-2 hover:text-white hover:bg-[#234179] cursor-pointer rounded-md">
                  Read More
                </button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headache;
