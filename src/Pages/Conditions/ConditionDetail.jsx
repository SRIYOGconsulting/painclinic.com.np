// src/Pages/ConditionDetail.jsx
import { useParams } from "react-router-dom";
import conditionsData from "../../ConditionsData";

const ConditionDetail = () => {
  const { slug } = useParams();
  const condition = conditionsData.find((c) => c.path === slug);

  if (!condition) return <div className="p-6 text-center">Condition not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">{condition.title}</h1>
      <img
        src={condition.image}
        alt={condition.title}
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <p className="text-gray-700 text-lg leading-relaxed">{condition.description}</p>
    </div>
  );
};

export default ConditionDetail;
