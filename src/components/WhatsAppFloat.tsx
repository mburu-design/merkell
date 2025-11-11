import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 animate-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-[#333333]">Chat with us!</h4>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-[#666666] mb-4">
            Hi there! How can we help you today? Send us a message and we'll get back to you shortly.
          </p>
          <a 
            href="https://wa.me/254701403428?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20b358] transition-colors font-medium"
          >
            Start Chat
          </a>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20b358] transition-all duration-300 flex items-center justify-center hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;