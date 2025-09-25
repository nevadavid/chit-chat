import type { Middleware } from "@reduxjs/toolkit";
import { setNow } from "../features/chat/chatSlice";

export const clockMiddleware: Middleware = ({ dispatch }) => {
  setInterval(() => {
    dispatch(setNow());
  }, 1000);

  return (next) => (action) => next(action);
};
