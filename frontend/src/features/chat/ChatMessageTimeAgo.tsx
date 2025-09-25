import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import TimeAgo from "../../components/TimeAgo";

type Props = {
  timestamp: number;
};

export function ChatMessageTimeAgo({ timestamp }: Props) {
  const now = useSelector((state: RootState) => state.chat.now);

  return <TimeAgo now={now} timestamp={timestamp} />;
}
