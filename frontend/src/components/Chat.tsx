import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import type { Message, User } from "../App";

type Props = {
  messages: Message[];
  currentUser: User;
};

export default function Chat({ messages, currentUser }: Props) {
  const [, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse h-full overflow-y-auto gap-4 p-4 bg-gray-100">
      {messages.map(({ id, username, content, timestamp }) => (
        <ChatMessage
          key={id}
          title={username}
          message={content}
          timestamp={timestamp}
          isOwn={username === currentUser?.name}
        />
      ))}
    </div>
  );
}
