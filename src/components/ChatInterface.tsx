
import React, { useState, useRef, useEffect } from "react";
import Message, { MessageProps } from "./Message";
import CategorySelector from "./CategorySelector";
import ConditionSelector from "./ConditionSelector";
import { healthCategories, getCategory, getCondition } from "@/utils/healthData";

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      type: "bot",
      content: "Hello! I'm your health symptom assistant. Please select a symptom category to get started.",
      animate: false
    }
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleCategorySelect = (categoryId: string) => {
    const category = getCategory(categoryId);
    if (!category) return;

    setSelectedCategory(categoryId);
    
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        type: "user",
        content: `I'm having issues with my ${category.name.toLowerCase()} health.`
      }
    ]);
    
    // Add bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          type: "bot",
          content: `I understand you're having ${category.name.toLowerCase()} issues. What specific symptoms are you experiencing?`
        }
      ]);
    }, 500);
  };

  const handleConditionSelect = (categoryId: string, conditionId: string) => {
    const condition = getCondition(categoryId, conditionId);
    if (!condition) return;

    // Add user message about condition
    setMessages(prev => [
      ...prev,
      {
        type: "user",
        content: `I think I might have ${condition.name}.`
      }
    ]);
    
    // Add bot response with precautions
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          type: "bot",
          content: `Based on your symptoms, here are some precautions and recommendations for ${condition.name}:`,
          precautions: condition.precautions
        }
      ]);
      
      // Reset selection after showing precautions
      setTimeout(() => {
        setSelectedCategory(null);
      }, 500);
      
    }, 600);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat messages area with padding and scrollable content */}
      <div className="flex-1 overflow-y-auto px-3 pt-3 pb-4 space-y-3 bg-gray-50">
        <div className="w-full">
          {messages.map((message, index) => (
            <Message
              key={index}
              type={message.type}
              content={message.content}
              precautions={message.precautions}
              animate={message.animate}
            />
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>
      
      {/* Input area - fixed at bottom */}
      <div className="bg-white border-t p-3 sticky bottom-0">
        <div className="w-full">
          {selectedCategory ? (
            <ConditionSelector
              category={getCategory(selectedCategory)!}
              onSelectCondition={handleConditionSelect}
              onBack={handleBack}
            />
          ) : (
            <CategorySelector 
              categories={healthCategories}
              onSelectCategory={handleCategorySelect}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
