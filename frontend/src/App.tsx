import { useDispatch } from "react-redux";
import Chat from "./features/chat/Chat";
import ChatInput from "./features/chat/ChatInput";
import Users from "./features/users/Users";
import { sendMessage } from "./store/actions";

export default function App() {
  const dispatch = useDispatch();

  const onSend = (message: string) => {
    dispatch(sendMessage(message));
  };

  return (
    <div className="flex w-full">
      <div className="w-72 max-h-screen flex flex-col border-r border-gray-200">
        <Users />
      </div>
      <div className="flex flex-col w-full h-screen">
        <Chat />
        <ChatInput onSend={onSend} />
      </div>
    </div>
  );
}
