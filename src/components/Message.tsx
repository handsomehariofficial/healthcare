
import React from "react";
import { cn } from "@/lib/utils";
import { Precaution } from "@/utils/healthData";

export type MessageType = "user" | "bot";

export interface MessageProps {
  type: MessageType;
  content: string;
  precautions?: Precaution[];
  animate?: boolean;
}

const Message: React.FC<MessageProps> = ({ 
  type, 
  content, 
  precautions, 
  animate = true 
}) => {
  return (
    <div 
      className={cn(
        "mb-4 max-w-[85%] animate-fade-in",
        type === "user" ? "ml-auto" : "mr-auto",
      )}
      style={{ animationDelay: animate ? "0.1s" : "0s" }}
    >
      <div 
        className={cn(
          "px-4 py-3 rounded-2xl shadow-sm",
          type === "user" 
            ? "bg-primary text-primary-foreground rounded-tr-none" 
            : "bg-white border border-border shadow-sm rounded-tl-none"
        )}
      >
        <p className="text-sm md:text-base">{content}</p>
        
        {precautions && precautions.length > 0 && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="font-medium mb-2 text-sm md:text-base">Precautions:</p>
            <ul className="space-y-1.5">
              {precautions.map((precaution) => (
                <li 
                  key={precaution.id} 
                  className="flex items-start text-sm"
                >
                  <span className="mr-2 text-xs">•</span>
                  <span>{precaution.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
