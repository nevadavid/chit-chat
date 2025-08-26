import { cls } from "../utils";
import TimeAgo from "./TimeAgo";

type Props = {
  title: string;
  message: string;
  timestamp: number;
  isOwn?: boolean;
};

export default function ChatMessage({
  title,
  message,
  timestamp,
  isOwn = false,
}: Props) {
  return (
    <div className={cls("max-w-3/4", isOwn ? "ml-auto" : "mr-auto")}>
      <div className="flex justify-between gap-1">
        {!isOwn && <div className="text-xs ml-2">{title}</div>}
        <div className="text-xs ml-auto mr-2">
          <TimeAgo timestamp={timestamp} />
        </div>
      </div>
      <div
        className={cls(
          "inline-flex",
          "py-2",
          "px-3",
          "rounded-2xl",
          "text-sm",
          "break-all",
          {
            "float-right text-white bg-gray-700": isOwn,
            "float-left text-gray-700 bg-white": !isOwn,
          }
        )}
      >
        {message}
      </div>
    </div>
  );
}
