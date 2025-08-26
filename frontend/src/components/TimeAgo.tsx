import { formatDistanceToNow } from "date-fns";

type Props = {
  timestamp: number;
};

const getTimeAgo = (timestamp: number) =>
  formatDistanceToNow(timestamp, { addSuffix: true });

export default function TimeAgo({ timestamp }: Props) {
  return getTimeAgo(timestamp);
}
