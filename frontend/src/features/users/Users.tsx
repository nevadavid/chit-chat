import { useSelector } from "react-redux";
import List from "../../components/List";
import type { RootState } from "../../store";

export default function Users() {
  const users = useSelector((state: RootState) => state.users.users);

  // console.log("Users", { users });

  return <List items={users} title="Online users" labelKey="name" />;
}
