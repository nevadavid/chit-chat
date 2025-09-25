import { formatDistance } from "date-fns";

type Props = {
  now: number;
  timestamp: number;
};

export default function TimeAgo({ now, timestamp }: Props) {
  return formatDistance(now, timestamp);
}
