import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: string;
  name: string;
};

const currentUser = localStorage.getItem("user")
  ? (JSON.parse(localStorage.getItem("user") as string) as User)
  : null;

const initialState: { users: User[]; currentUser: User | null } = {
  users: [],
  currentUser,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, { payload }: PayloadAction<User[]>) {
      state.users = payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
