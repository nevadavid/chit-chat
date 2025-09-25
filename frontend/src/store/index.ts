import { configureStore, type Middleware } from "@reduxjs/toolkit";
import chatReducer from "../features/chat/chatSlice";
import usersReducer from "../features/users/usersSlice";
import { clockMiddleware } from "./clockMiddleware";
import { socketMiddleware } from "./socketMiddleware";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("prev", store.getState());
  console.log("action", action);

  const result = next(action);

  console.log("next", store.getState());

  return result;
};

export const store = configureStore({
  reducer: { chat: chatReducer, users: usersReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loggerMiddleware)
      .concat(clockMiddleware)
      .concat(socketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
