
import React from "react";
import { Category } from "@/utils/healthData";
import { Heart, Activity, Skull, Pill, ActivitySquare, Bone } from "lucide-react";

interface CategorySelectorProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  categories, 
  onSelectCategory 
}) => {
  // Map category icons to Lucide components
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Heart":
        return <Heart className={className} />;
      case "Lungs":
        return <Activity className={className} />; // Using Activity icon for Lungs
      case "Brain":
        return <Skull className={className} />;
      case "Stomach":
        return <Pill className={className} />;
      case "Skin":
        return <ActivitySquare className={className} />;
      case "Bone":
        return <Bone className={className} />;
      default:
        return <Heart className={className} />;
    }
  };

  // Get background color class based on category color
  const getBgColorClass = (color: string) => {
    return `bg-health-${color}`;
  };

  // Get text/icon color class based on category color
  const getTextColorClass = (color: string) => {
    return `text-health-${color}-dark`;
  };

  return (
    <div className="w-full animate-slide-up">
      <h2 className="text-lg font-medium mb-2 text-center">Select a symptom category</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4" role="group" aria-label="Symptom categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${getBgColorClass(category.color)} ${getTextColorClass(category.color)} 
              p-4 rounded-xl flex flex-col items-center justify-center gap-3 
              transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:translate-y-0`}
            onClick={() => onSelectCategory(category.id)}
            aria-label={`Select ${category.name} category`}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              {getIcon(category.icon, "w-6 h-6")}
            </div>
            <span className="font-medium text-sm">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
