import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "../fetures/bank/bankSlice";
import adminReducer from "../fetures/admin/adminSlice";
import apiReducer from "../fetures/api/apiSlice";
import userReducer from "../fetures/liveChat/userSlice";
import chatPartnerReducer from "../fetures/liveChat/chatPartnerSlice";

export const store = () => {
  return configureStore({
    reducer: {
      bank: bankReducer,
      users: userReducer,
      admin: adminReducer,
      api: apiReducer,
      chatPartner: chatPartnerReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
