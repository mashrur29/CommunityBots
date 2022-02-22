import FormData from "form-data";
import WebSocket from "isomorphic-ws";
import util from "util";

export interface Chat {
  id?: string,
  startedAt: Date,
  endedAt?: Date,
  open: boolean,
  displayName: string,
  systemName: string,
  userTyping?: boolean,
  chatbotTyping?: boolean,
  messages: ChatMessage[],
};

export interface ChatMessage {
  id?: string,
  messageText: string,
  sentAt: Date,
  sentBy: ChatSender,
  topic: string,
};

export type ChatSender = 'chatbotAgentA' | 'chatbotAgentB' | 'chatbotAgentC' | 'chatbotAgentD' | 'chatbotAgentE' | 'user';

export type Topic = "Dwelling" | "Worship" | "Family - Homelife" | "Virtual Connection" | "Delivery" | "Transportation - Commute" | "Work" | "Education" | "Zoom / Screens / Computers" |  "Healthcare" | "Leisure" | "Virtual travel" | "Hobbies";
