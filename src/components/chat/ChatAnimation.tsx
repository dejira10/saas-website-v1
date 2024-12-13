import React, { useState, useEffect, useRef } from 'react';
import { chatMessages } from './chatMessages';
import { ChatMessage } from './types';
import Message from './Message';

const VISIBLE_MESSAGES_COUNT = 5;
const MESSAGE_DELAY = 2000;

export default function ChatAnimation() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % chatMessages.length;
        
        if (nextIndex === 0) {
          clearInterval(timer);
          setTimeout(() => {
            setVisibleMessages([]);
            setCurrentIndex(0);
          }, MESSAGE_DELAY * 2);
        }
        
        return nextIndex;
      });

      setVisibleMessages((prev) => {
        const nextMessage = chatMessages[currentIndex];
        const newMessages = [...prev, nextMessage];
        return newMessages.slice(-VISIBLE_MESSAGES_COUNT);
      });

      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, MESSAGE_DELAY);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div 
      ref={chatContainerRef}
      className="p-4 h-[520px] overflow-y-auto scroll-smooth"
    >
      <div className="w-full max-w-[280px] mx-auto">
        {visibleMessages.map((message, index) => (
          <Message
            key={`${index}-${message.time}`}
            text={message.text}
            time={message.time}
            isAgent={message.isAgent}
            isDelivered={message.isAgent}
          />
        ))}
      </div>
    </div>
  );
}