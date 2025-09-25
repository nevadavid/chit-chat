import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function Chat() {
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );
  const messages = useSelector((state: RootState) => state.chat.messages);

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
