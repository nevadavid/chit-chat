import { createAction } from "@reduxjs/toolkit";

export const sendMessage = createAction<string>("socket/sendMessage");
