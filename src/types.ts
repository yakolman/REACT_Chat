export type MessageType = 'response' | 'message' | 'typing';

export interface ChatMessage {
  id: string;
  from: { name: string };
  type: MessageType;
  time: string;
  text?: string;
}
