import type { ChatMessage, MessageType } from '../types';

interface MessageHistoryProps {
  list?: ChatMessage[];
}

const messageClass: Record<MessageType, string> = {
  response: 'message-response',
  message: 'message-own',
  typing: 'message-typing',
};

export default function MessageHistory({ list = [] }: MessageHistoryProps) {
  if (list.length === 0) {
    return null;
  }

  return (
    <div className="chat-history">
      {list.map((item) => (
        <div className={`message-item ${messageClass[item.type]}`} key={item.id}>
          <div className="message-header">
            <span className="message-author">{item.from.name}</span>
            <span className="message-time">{item.time}</span>
          </div>
          {item.type === 'typing' ? (
            <div className="typing-indicator">
              <span>печатает...</span>
              <div className="typing-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          ) : (
            <div className="message-bubble">{item.text}</div>
          )}
        </div>
      ))}
    </div>
  );
}
