import orofacial from "/images/orofacialpain/orafacial-pain.jpg";
import UserRound from "/icons/user-round.svg";

const OrofacialPain = () => {
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
      <h1 className="text-3xl font-bold text-gray-900 mb-4">What is Orofacial Pain?</h1>

      {/* Paragraphs */}
      <p className="text-[#707882] mb-4 leading-relaxed">
        Orofacial pain refers to discomfort in the areas of the face, mouth, and jaw, which can be caused by a variety of issues such as dental problems, jaw disorders, nerve conditions, or even sinus infections. Common causes include temporomandibular joint (TMJ) disorders, where the jaw joint and surrounding muscles become painful, toothaches, gum disease, or issues like trigeminal neuralgia, which causes sharp, stabbing pain along the facial nerves. It can also be linked to sinusitis or migraines, where the pain radiates into the face, or myofascial pain syndrome, which involves pain from muscle trigger points.
      </p>

      <p className="text-[#707882] mb-6 leading-relaxed">
        Treatment for orofacial pain depends on the underlying cause and may include dental treatments, physical therapy for jaw issues, pain medications, or muscle relaxants. In some cases, stress management techniques or lifestyle changes might help, especially for conditions like TMJ disorders where jaw clenching or grinding is involved. Proper diagnosis is essential, as the pain could stem from a wide range of sources, requiring different approaches for effective relief.
      </p>

      {/* Image */}
      <div className="my-8">
        <img
          src={orofacial}
          alt="Person holding neck due to pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Causes of Orofacial Pain
      </h2>

      {/* List */}
      <ul className="text-[#707882] list-disc list-inside space-y-3 mb-6">
        <li>
          Dental Issues: Tooth decay, abscesses, gum disease, and other dental problems can cause localized pain in the teeth and gums.
        </li>
        <li>
          Temporomandibular Joint (TMJ) Disorders: Misalignment, teeth grinding, or jaw clenching can cause pain in the jaw, face, and neck.
        </li>
        <li>
          Trigeminal Neuralgia: A nerve disorder that causes intense, sharp pain along the trigeminal nerve, affecting the face.
        </li>
        <li>
          Sinus Infections (Sinusitis): Inflammation in the sinuses can cause pain in the cheeks, forehead, and upper teeth due to pressure buildup.
        </li>
        <li>
          Headaches (Migraines, Cluster Headaches): Pain from headaches can radiate to the face and jaw
        </li>
        <li>
          Myofascial Pain Syndrome: Trigger points in facial or jaw muscles cause referred pain in the face or jaw.
        </li>
      </ul>
      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Care for Orofacial Pain
      </h2>

      {/* List */}
      <ul className="text-[#707882] list-disc list-inside space-y-3 mb-6">
        <li>
          Dental Treatment: Fillings, root canals, or gum disease treatments to address tooth-related pain.
        </li>
        <li>
          TMJ Disorder Management: Physical therapy, jaw exercises, medications, and mouthguards to alleviate pain from TMJ dysfunction.
        </li>
        <li>
          Sinus Infection Treatment: Decongestants, nasal sprays, or antibiotics (if bacterial) for sinus-related pain.
        </li>
        <li>
          Sinus Infections (Sinusitis): Inflammation in the sinuses can cause pain in the cheeks, forehead, and upper teeth due to pressure buildup.
        </li>
        <li>
          Headache Management: Pain relief medications and lifestyle adjustments, such as hydration, rest, and stress management, for headache-related facial pain.
        </li>
        <li>
          Muscle Relaxation: Stress reduction techniques, warm compresses, and trigger point therapy for muscle-related facial pain.
        </li>
      </ul>

      {/* Final paragraph */}
      <p className="text-[#707882] leading-relaxed mb-8">
        Accurate diagnosis and appropriate treatment are key to managing orofacial pain effectively.
      </p>

      {/* Categories & Tags */}
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
            Orofacial pain, Tooth Pain Relief
          </p>
        </div>

      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  )
}

export default OrofacialPain
