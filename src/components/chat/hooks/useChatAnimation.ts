import { useState, useEffect, RefObject } from 'react';
import { ChatMessage } from '../types';
import { chatMessages } from '../chatMessages';
import { CHAT_CONSTANTS } from '../../../utils/constants';

export function useChatAnimation(chatContainerRef: RefObject<HTMLDivElement>) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % chatMessages.length;
        
        if (nextIndex === 0) {
          clearInterval(timer);
          setTimeout(() => {
            setVisibleMessages([]);
            setCurrentIndex(0);
          }, CHAT_CONSTANTS.MESSAGE_DELAY * 2);
        }
        
        return nextIndex;
      });

      setVisibleMessages((prev) => {
        const nextMessage = chatMessages[currentIndex];
        const newMessages = [...prev, nextMessage];
        return newMessages.slice(-CHAT_CONSTANTS.VISIBLE_MESSAGES_COUNT);
      });

      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, CHAT_CONSTANTS.MESSAGE_DELAY);

    return () => clearInterval(timer);
  }, [currentIndex, chatContainerRef]);

  return visibleMessages;
}