import UserRound from "/icons/user-round.svg";
import headacheImg from "/images/home/headache-pain.jpg";
const Headache = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-30 text-[#707882] font-[sans-serif]">
      {/* Author and read time */}
      <div className="text-[12px] text-[#707882] mb-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={UserRound} alt="userround" className="w-4 h-4 text-[#234179] stroke-current"/>
          <p>
            By{" "}
            <span className="font-medium text-[#707882]">Salina Bastola</span>
          </p>
        </div>
        <p>3 Minutes Read</p>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">What is Headache?</h1>

      {/* Paragraphs */}
      <p className="mb-4 leading-relaxed text-[#707882]">
        A headache is pain in the head or neck area. It can also range from mild to severe and may be caused by factors like stress, dehydration, or lack of sleep. Common types include tension headaches, migraines, cluster headaches, and sinus headaches. Symptoms can include throbbing, tightness, nausea, and sensitivity to light or sound.
      </p>
      <p className="mb-4 leading-relaxed text-[#707882]">
        There are different types of headaches, including tension headaches, migraines, sinus headaches, and cluster headaches. Tension headaches are the most common and often result from stress or muscle tension. Migraines are more intense, often causing throbbing pain on one side of the head, and are usually accompanied by other symptoms. Sinus headaches occur when the sinuses become inflamed, while cluster headaches involve severe pain on one side of the head, typically around the eye. Treatment depends on the type of headache and its cause, ranging from over-the-counter pain relievers to lifestyle changes or medical treatments
      </p>

      {/* Image */}
      <div className="my-8">
        <img
          src={headacheImg}
          alt="Person holding neck due to pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Causes of headache
      </h2>

      {/* List */}
      <ul className="list-disc list-inside space-y-3 mb-6 text-[#707882]">
        <li>
          Stress and Tension: Emotional or physical stress can lead to tension headaches, the most common type. These headaches often feel like a tight band around the forehead or a dull ache across the head and neck. Stress can cause muscle tension, especially in the neck and shoulders, leading to pain in the head area.
        </li>
        <li>
          Dehydration: When your body doesn’t have enough water, it can cause a dehydration headache. Your brain temporarily shrinks from fluid loss, leading to pain. This can be exacerbated by factors like hot weather or not drinking enough water throughout the day.
        </li>
        <li>
          Lack of Sleep: Poor sleep quality or insufficient sleep can disrupt brain function, increasing the likelihood of headaches. Migraines, in particular, are often triggered by inconsistent sleep patterns or inadequate rest.
        </li>
        <li>
          Dietary Factors: Certain foods and drinks can be headache triggers for some people. Common culprits include caffeine, alcohol (especially red wine), aged cheeses, processed meats, and foods with high amounts of MSG. These foods can cause blood vessels to constrict or dilate, which may result in pain.
        </li>
        <li>
          Eye Strain: Spending extended periods staring at screens, reading in poor lighting, or having an outdated prescription for eyeglasses can strain the eye muscles. This can lead to headaches, especially in people who already have visual problems.
        </li>
        <li>
          Sinus Issues: Sinus headaches are often caused by inflammation or infection in the sinuses, which can block airflow and cause pressure buildup in the forehead, cheeks, or around the eyes. These are common during colds or allergies and are often accompanied by facial tenderness.
        </li>
        <li>
          Hormonal Changes: Hormonal fluctuations, particularly in women, are often linked to headaches. For example, migraines are common during menstruation due to the drop in estrogen levels. Pregnancy and menopause can also trigger hormonal headaches.
        </li>
        <li>
          Medical Conditions: Various medical conditions can lead to headaches. High blood pressure (hypertension) can cause headaches due to increased pressure in the blood vessels. Other conditions like infections (e.g., meningitis), concussions, or neck injuries can also be headache triggers.
        </li>
      </ul>
      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Symptoms of headache
      </h2>

      {/* List */}
      <ul className="list-disc list-inside space-y-3 mb-6 text-[#707882]">
        <li>
          Pain: This is the primary symptom of any headache. The pain can vary in intensity, type, and location. It might feel dull, throbbing, sharp, or pressure-like. It can occur anywhere on the head, including the temples, forehead, behind the eyes, or at the back of the head and neck.
        </li>
        <li>
          Sensitivity to Light (Photophobia): Many people with headaches, particularly migraines, become sensitive to bright lights. This can make daily activities like being outside or using screens more difficult.
        </li>
        <li>
          Sensitivity to Sound (Phonophobia): Similar to light sensitivity, some people experience increased sensitivity to sounds, where even normal noise can feel overwhelming.
        </li>
        <li>
          Nausea or Vomiting: This is often associated with migraines and can make the headache feel more intense. It can also occur with other types of headaches, particularly if they are severe.
        </li>
        <li>
          Dizziness or Lightheadedness: Some people may feel dizzy, off-balance, or lightheaded during a headache, especially with migraines or sinus headaches.
        </li>
        <li>
          Blurred Vision: Migraines, in particular, may cause visual disturbances like blurred vision, or a phenomenon known as an "aura" (flashes of light or blind spots in the vision).
        </li>
      </ul>

      {/* Categories */}
      <div className="border-t border-gray-200 pt-4 pb-4 flex flex-wrap justify-between items-center text-sm text-[#707882]">
        <div className="flex items-center gap-3">
          <span className=" text-[#234179] uppercase">Categories:</span>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-md text-[#707882]">
              Health Care
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-md text-[#707882]">
              Medical Service
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-3 mt-3 sm:mt-0">
          <span className=" text-[#234179] uppercase">Tags:</span>

          <p className="text-[#707882]">
            Headaches, Migraines
          </p>
        </div>

      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  )
}

export default Headache
