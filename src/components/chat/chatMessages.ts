import { ChatMessage } from './types';

export const chatMessages: ChatMessage[] = [
  {
    text: "Hey there 👋, this is Chloe from SafeGuard Pest Control. I noticed we just missed your call. How can we help you today?",
    time: "08:24 PM",
    isAgent: true
  },
  {
    text: "Hi, I've been having issues with ants in my kitchen",
    time: "08:25 PM",
    isAgent: false
  },
  {
    text: "I'm sorry to hear that! To better assist you, could you tell me if you're seeing the ants indoors, outdoors, or both?",
    time: "08:25 PM",
    isAgent: true
  },
  {
    text: "Mainly indoors, especially around the kitchen sink and counters",
    time: "08:26 PM",
    isAgent: false
  },
  {
    text: "How long have you been noticing this issue?",
    time: "08:26 PM",
    isAgent: true
  },
  {
    text: "It started about a week ago and seems to be getting worse",
    time: "08:27 PM",
    isAgent: false
  },
  {
    text: "I understand the urgency. Would you like to schedule an inspection? We have appointments available as soon as tomorrow.",
    time: "08:27 PM",
    isAgent: true
  },
  {
    text: "Yes, tomorrow would be great",
    time: "08:28 PM",
    isAgent: false
  },
  {
    text: "Perfect! I have the following slots available tomorrow:\n• 10:00 AM\n• 2:00 PM\n• 4:30 PM\n\nWhich time works best for you?",
    time: "08:28 PM",
    isAgent: true
  },
  {
    text: "2:00 PM works for me",
    time: "08:29 PM",
    isAgent: false
  },
  {
    text: "Great! I've scheduled your appointment for tomorrow at 2:00 PM. Our technician will arrive in a marked vehicle and will call you 30 minutes before arrival. You'll receive a confirmation email shortly with all the details.",
    time: "08:29 PM",
    isAgent: true
  }
];