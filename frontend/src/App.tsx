import { useEffect, useMemo, useState } from "react";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";
import List from "./components/List";
import useSocket from "./hooks/useSocket";
import useLocalStorage from "./hooks/useLocalStorage";

export type User = {
  id: string;
  name: string;
};

export type Message = {
  id: string;
  username: string;
  content: string;
  timestamp: number;
};

export default function App() {
  const [currentUser, setCurrentUser] = useLocalStorage<User>("user");
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const onOnline = (onlineUsers: User[]) => {
    setUsers(onlineUsers);
  };

  const onMessage = (msgs: Message[]) => {
    setMessages(msgs);
  };

  const onRegistration = (registeredUser: User) => {
    setCurrentUser(registeredUser);
  };

  const onEvent = (event: string, ...args: unknown[]) => {
    switch (event) {
      case "registration":
        onRegistration(args[0] as User);

        break;

      case "online":
        onOnline(args[0] as User[]);

        break;

      case "message":
        onMessage(args[0] as Message[]);

        break;

      default:
        break;
    }
  };

  const { connect, socket } = useSocket({
    onEvent,
  });

  const orderedMessages = useMemo(
    () => messages.sort(({ timestamp: a }, { timestamp: b }) => b - a),
    [messages]
  );

  const onSend = (message: string) => {
    socket?.emit("message", message);
  };

  useEffect(() => {
    connect({ auth: { username: currentUser?.name } });
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-72 border-r border-gray-200">
        <List items={users} title="Online users" labelKey="name" />
      </div>
      <div className="flex flex-col w-full h-screen">
        <Chat currentUser={currentUser} messages={orderedMessages} />
        <ChatInput onSend={onSend} />
      </div>
    </div>
  );
}
