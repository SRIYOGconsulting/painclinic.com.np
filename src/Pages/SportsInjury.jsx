import sportsinjury from "/images/sportsinjury/sports-injury.jpg";
import UserRound from "/icons/user-round.svg";

const SportsInjury = () => {
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
      <h1 className="text-3xl font-bold text-[#0A2241] mb-4">What is Sports Injury?</h1>

      {/* Paragraphs */}
      <p className="text-[#707882] mb-4 leading-relaxed">
        A sports injury refers to any injury that occurs during physical activity, exercise, or sports performance. These injuries can affect muscles, ligaments, tendons, bones, and joints, and can range from mild to severe. Sports injuries can be caused by various factors, such as direct impact, overuse, improper technique, lack of proper warm-up or cool-down, or accidents during physical activities. They can happen in individual sports like running or cycling, as well as in team sports like football or basketball.
      </p>
      <p className="text-[#707882] mb-4 leading-relaxed">
        Common types of sports injuries include sprains (ligament injuries), strains (muscle or tendon injuries), fractures, dislocations, and contusions (bruises). Overuse injuries like tendinitis or stress fractures can also occur when a person engages in repetitive movements without allowing enough time for recovery. Treatment for sports injuries typically involves rest, ice, compression, and elevation (the R.I.C.E. method), physical therapy, pain management, and in more severe cases, surgery. Preventing sports injuries involves proper training, warming up, using appropriate equipment, and staying aware of the body's limits during activity.
      </p>
      <p className="text-[#707882] mb-4 leading-relaxed">
        Preventing sports injuries during outdoor activities requires a combination of proper preparation, awareness, and good habits. Here are some key strategies to reduce the risk of injury:
      </p>

      {/* Image */}
      <div className="my-8">
        <img
          src={sportsinjury}
          alt="sports pain"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* List */}
      <ul className="text-[#707882] list-disc list-inside space-y-3 mb-6">
        <li>
          Warm-up and Stretching: Properly warming up before engaging in outdoor sports helps increase blood flow to the muscles and improves flexibility. Stretching helps loosen the muscles and prepare them for physical activity. A good warm-up could include light cardio (like jogging or brisk walking) followed by dynamic stretching (such as leg swings or arm circles).
        </li>
        <li>
          Use the Right Equipment: Ensure that you’re using appropriate and well-maintained equipment for your activity, such as proper footwear, helmets, padding, and any protective gear. For instance, wearing shoes that offer the right support and cushioning for running or hiking can help prevent stress fractures and ankle injuries.
        </li>
        <li>
          Stay Hydrated: Dehydration can lead to muscle cramps and fatigue, increasing the risk of injury. Drinking enough water before, during, and after physical activity is crucial, especially in hot weather.
        </li>
        <li>
          Practice Good Technique: Using proper form and technique during outdoor activities can significantly reduce the chance of injury. Whether it's running, biking, or hiking, make sure to follow the recommended techniques to avoid putting undue stress on joints and muscles.
        </li>
        <li>
          Know Your Limits: Listen to your body and avoid pushing yourself too hard, especially if you're trying a new activity or increasing intensity. Overexertion can lead to muscle strains, sprains, or even more serious injuries. Gradually build up your endurance and strength over time.
        </li>
        <li>
          Cool Down: After completing an outdoor activity, take time to cool down by doing light cardio and stretching. This helps muscles relax and reduces the risk of soreness or injury.
        </li>
        <li>
          Cool Down: After completing an outdoor activity, take time to cool down by doing light cardio and stretching. This helps muscles relax and reduces the risk of soreness or injury.
        </li>
        <li>
          Rest and Recovery: Adequate rest between activities is essential for preventing overuse injuries. Ensure that your muscles and joints have time to recover before engaging in another physically demanding activity.
        </li>
        <li>
          Pay Attention to the Environment: Outdoor activities often involve varying terrain and conditions. Always check the weather forecast, and be mindful of your surroundings to avoid slips, trips, or falls. For instance, hiking on slippery trails or running on uneven surfaces can increase the risk of injury.
        </li>
        <li>
          Get Regular Check-ups: If you engage in regular outdoor activities or sports, consider having regular check-ups with a healthcare provider or a sports specialist to ensure that you're physically fit and not developing any potential issues.
        </li>
      </ul>
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
            Muscle pain, Myalgia
          </p>
        </div>

      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  )
}

export default SportsInjury
