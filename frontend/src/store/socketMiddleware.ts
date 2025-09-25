import type { Middleware } from "@reduxjs/toolkit";
import { io } from "socket.io-client";
import { setUsers, type User } from "../features/users/usersSlice";
import { setMessages, type Message } from "../features/chat/chatSlice";
import { sendMessage } from "./actions";

export const socketMiddleware: Middleware = ({ getState, dispatch }) => {
  const username = getState()?.users?.currentUser?.name;

  const socket = io(import.meta.env.VITE_SOCKET_SERVER, {
    auth: { username },
    transports: ["websocket"],
  });

  socket.on("registration", (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
  });

  socket.on("online", (users: User[]) => {
    dispatch(setUsers(users));
  });

  socket.on("message", (messages: Message[]) => {
    dispatch(setMessages(messages));
  });

  return (next) => (action) => {
    if (sendMessage.match(action)) {
      socket.emit("message", action.payload);
    }

    return next(action);
  };
};
