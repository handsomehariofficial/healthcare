
import React from "react";
import { Category, Condition } from "@/utils/healthData";
import { ArrowLeft } from "lucide-react";

interface ConditionSelectorProps {
  category: Category;
  onSelectCondition: (categoryId: string, conditionId: string) => void;
  onBack: () => void;
}

const ConditionSelector: React.FC<ConditionSelectorProps> = ({ 
  category, 
  onSelectCondition, 
  onBack 
}) => {
  const getBgColorClass = (color: string) => {
    return `bg-health-${color}`;
  };

  const getTextColorClass = (color: string) => {
    return `text-health-${color}-dark`;
  };

  return (
    <div className="w-full animate-fade-in">
      <div className="flex items-center mb-4">
        <button 
          onClick={onBack}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>
        
        <h2 className="text-lg font-medium mx-auto pr-5">
          {category.name} Symptoms
        </h2>
      </div>

      <div className="space-y-3 mt-4">
        {category.conditions.map((condition) => (
          <button
            key={condition.id}
            className={`${getBgColorClass(category.color)} w-full p-4 rounded-xl text-left
              transition-all duration-200 hover:shadow-md
              active:translate-y-0.5`}
            onClick={() => onSelectCondition(category.id, condition.id)}
          >
            <h3 className={`font-medium mb-1 ${getTextColorClass(category.color)}`}>
              {condition.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {condition.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConditionSelector;
