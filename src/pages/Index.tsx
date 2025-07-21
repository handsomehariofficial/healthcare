
import React from "react";
import ChatWidget from "@/components/ChatWidget";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 px-4 py-12 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Your Personal Health Assistant
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant guidance and precautions for common health symptoms. Our AI-powered assistant helps you understand your symptoms better.
          </p>
          <div className="max-w-xl mx-auto space-y-4 text-muted-foreground">
            <p>✓ 24/7 Instant Response</p>
            <p>✓ Evidence-based Recommendations</p>
            <p>✓ Easy-to-understand Guidance</p>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Click the chat icon in the bottom right corner to get started.
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center">
        <div className="max-w-7xl mx-auto px-4 text-sm text-muted-foreground">
          <p>This assistant provides general health information only and is not a substitute for professional medical advice.</p>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
