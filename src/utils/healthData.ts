
export interface Precaution {
  id: number;
  text: string;
}

export interface Condition {
  id: string;
  name: string;
  description: string;
  precautions: Precaution[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  conditions: Condition[];
}

export const healthCategories: Category[] = [
  {
    id: "respiratory",
    name: "Respiratory",
    icon: "Lungs",
    color: "blue",
    conditions: [
      {
        id: "common-cold",
        name: "Common Cold",
        description: "A viral infection of the upper respiratory tract.",
        precautions: [
          { id: 1, text: "Rest and stay hydrated" },
          { id: 2, text: "Use a humidifier to ease congestion" },
          { id: 3, text: "Take over-the-counter pain relievers if needed" },
          { id: 4, text: "Wash hands frequently to prevent spreading" }
        ]
      },
      {
        id: "bronchitis",
        name: "Bronchitis",
        description: "Inflammation of the lining of the bronchial tubes.",
        precautions: [
          { id: 1, text: "Avoid smoking and second-hand smoke" },
          { id: 2, text: "Use a humidifier to loosen mucus" },
          { id: 3, text: "Take medication as prescribed by your doctor" },
          { id: 4, text: "Get plenty of rest and stay hydrated" }
        ]
      },
      {
        id: "asthma",
        name: "Asthma",
        description: "A condition that affects the airways in the lungs.",
        precautions: [
          { id: 1, text: "Identify and avoid triggers" },
          { id: 2, text: "Take medications as prescribed" },
          { id: 3, text: "Use an air purifier in your home" },
          { id: 4, text: "Develop an asthma action plan with your doctor" }
        ]
      }
    ]
  },
  {
    id: "digestive",
    name: "Digestive",
    icon: "Stomach",
    color: "green",
    conditions: [
      {
        id: "gastritis",
        name: "Gastritis",
        description: "Inflammation of the stomach lining.",
        precautions: [
          { id: 1, text: "Eat smaller, more frequent meals" },
          { id: 2, text: "Avoid spicy, acidic, or fried foods" },
          { id: 3, text: "Limit or avoid alcohol consumption" },
          { id: 4, text: "Take antacids or other medications as advised" }
        ]
      },
      {
        id: "ibs",
        name: "Irritable Bowel Syndrome",
        description: "A disorder affecting the large intestine.",
        precautions: [
          { id: 1, text: "Identify and avoid trigger foods" },
          { id: 2, text: "Manage stress through relaxation techniques" },
          { id: 3, text: "Eat high-fiber foods and stay hydrated" },
          { id: 4, text: "Exercise regularly but moderately" }
        ]
      },
      {
        id: "gerd",
        name: "GERD",
        description: "Gastroesophageal reflux disease affecting the digestive system.",
        precautions: [
          { id: 1, text: "Avoid lying down after eating" },
          { id: 2, text: "Elevate your head when sleeping" },
          { id: 3, text: "Avoid trigger foods like chocolate, coffee, and fatty foods" },
          { id: 4, text: "Maintain a healthy weight" }
        ]
      }
    ]
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular",
    icon: "Heart",
    color: "red",
    conditions: [
      {
        id: "hypertension",
        name: "Hypertension",
        description: "High blood pressure condition.",
        precautions: [
          { id: 1, text: "Maintain a low-sodium diet" },
          { id: 2, text: "Exercise regularly" },
          { id: 3, text: "Limit alcohol consumption" },
          { id: 4, text: "Take prescribed medications consistently" }
        ]
      },
      {
        id: "arrhythmia",
        name: "Arrhythmia",
        description: "Irregular heartbeat or abnormal heart rhythm.",
        precautions: [
          { id: 1, text: "Avoid stimulants like caffeine" },
          { id: 2, text: "Reduce stress" },
          { id: 3, text: "Take medications as prescribed" },
          { id: 4, text: "Get regular checkups" }
        ]
      },
      {
        id: "chf",
        name: "Congestive Heart Failure",
        description: "A chronic condition where the heart doesn't pump blood effectively.",
        precautions: [
          { id: 1, text: "Monitor your weight daily" },
          { id: 2, text: "Limit fluid and salt intake" },
          { id: 3, text: "Take all medications as prescribed" },
          { id: 4, text: "Get regular physical activity as recommended" }
        ]
      }
    ]
  },
  {
    id: "neurological",
    name: "Neurological",
    icon: "Brain",
    color: "purple",
    conditions: [
      {
        id: "migraine",
        name: "Migraine",
        description: "Severe recurring headaches.",
        precautions: [
          { id: 1, text: "Identify and avoid triggers" },
          { id: 2, text: "Maintain a regular sleep schedule" },
          { id: 3, text: "Practice stress management techniques" },
          { id: 4, text: "Take preventive medications if prescribed" }
        ]
      },
      {
        id: "vertigo",
        name: "Vertigo",
        description: "A sensation of spinning and dizziness.",
        precautions: [
          { id: 1, text: "Avoid sudden movements" },
          { id: 2, text: "Sit or lie down when feeling dizzy" },
          { id: 3, text: "Perform vestibular rehabilitation exercises" },
          { id: 4, text: "Reduce stress and anxiety" }
        ]
      },
      {
        id: "epilepsy",
        name: "Epilepsy",
        description: "A neurological disorder characterized by seizures.",
        precautions: [
          { id: 1, text: "Take anti-seizure medications regularly" },
          { id: 2, text: "Get adequate sleep" },
          { id: 3, text: "Avoid alcohol and recreational drugs" },
          { id: 4, text: "Wear medical alert identification" }
        ]
      }
    ]
  },
  {
    id: "musculoskeletal",
    name: "Musculoskeletal",
    icon: "Bone",
    color: "yellow",
    conditions: [
      {
        id: "back-pain",
        name: "Back Pain",
        description: "Pain in the back muscles or spine.",
        precautions: [
          { id: 1, text: "Practice good posture" },
          { id: 2, text: "Use proper lifting techniques" },
          { id: 3, text: "Strengthen core muscles" },
          { id: 4, text: "Apply heat or cold packs as needed" }
        ]
      },
      {
        id: "arthritis",
        name: "Arthritis",
        description: "Inflammation of one or more joints.",
        precautions: [
          { id: 1, text: "Maintain a healthy weight" },
          { id: 2, text: "Exercise regularly but gently" },
          { id: 3, text: "Apply hot or cold compresses" },
          { id: 4, text: "Use assistive devices when needed" }
        ]
      },
      {
        id: "tendonitis",
        name: "Tendonitis",
        description: "Inflammation of a tendon.",
        precautions: [
          { id: 1, text: "Rest the affected area" },
          { id: 2, text: "Apply ice to reduce inflammation" },
          { id: 3, text: "Use compression bandages" },
          { id: 4, text: "Gradually return to activities" }
        ]
      }
    ]
  },
  {
    id: "dermatological",
    name: "Dermatological",
    icon: "Skin",
    color: "gray",
    conditions: [
      {
        id: "eczema",
        name: "Eczema",
        description: "A condition that makes skin red and itchy.",
        precautions: [
          { id: 1, text: "Moisturize regularly" },
          { id: 2, text: "Avoid harsh soaps and detergents" },
          { id: 3, text: "Identify and avoid triggers" },
          { id: 4, text: "Use prescribed topical medications" }
        ]
      },
      {
        id: "psoriasis",
        name: "Psoriasis",
        description: "A skin condition causing red, scaly patches.",
        precautions: [
          { id: 1, text: "Keep skin moisturized" },
          { id: 2, text: "Avoid skin injuries and sunburn" },
          { id: 3, text: "Manage stress effectively" },
          { id: 4, text: "Take medications as prescribed" }
        ]
      },
      {
        id: "acne",
        name: "Acne",
        description: "A skin condition characterized by pimples and blackheads.",
        precautions: [
          { id: 1, text: "Wash face twice daily with mild cleanser" },
          { id: 2, text: "Avoid touching your face" },
          { id: 3, text: "Use non-comedogenic products" },
          { id: 4, text: "Consult a dermatologist for severe cases" }
        ]
      }
    ]
  }
];

export const getCategory = (categoryId: string): Category | undefined => {
  return healthCategories.find(category => category.id === categoryId);
};

export const getCondition = (categoryId: string, conditionId: string): Condition | undefined => {
  const category = getCategory(categoryId);
  if (!category) return undefined;
  return category.conditions.find(condition => condition.id === conditionId);
};
