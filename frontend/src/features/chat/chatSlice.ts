import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Message = {
  id: string;
  username: string;
  content: string;
  timestamp: number;
};

const initialState: { messages: Message[]; now: number } = {
  messages: [],
  now: Date.now(),
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMessages(state, { payload }: PayloadAction<Message[]>) {
      state.messages = payload;
    },
    setNow(state) {
      state.now = Date.now();
    },
  },
});

export const { setMessages, setNow } = chatSlice.actions;

export default chatSlice.reducer;
