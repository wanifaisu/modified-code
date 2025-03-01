import { createSlice } from "@reduxjs/toolkit";
import { IApi } from "@/types/api";

const initialState: IApi[] = [
  {
    id: "1a",
    companyName: "Tech Solutions Inc.",
    apiName: "TechAPI",
    publishableKey: "pubkey123",
    secretKey: "secret123",
    status: true,
  },
  {
    id: "2b",
    companyName: "DataCorp Ltd.",
    apiName: "DataAPI",
    publishableKey: "pubkey456",
    secretKey: "secret456",
    status: false,
  },
  {
    id: "3c",
    companyName: "Cloud Innovations LLC",
    apiName: "CloudAPI",
    publishableKey: "pubkey789",
    secretKey: "secret789",
    status: true,
  },
  {
    id: "4d",
    companyName: "Secure Systems Co.",
    apiName: "SecureAPI",
    publishableKey: "pubkey101",
    secretKey: "secret101",
    status: false,
  },
  {
    id: "5e",
    companyName: "WebTech Enterprises",
    apiName: "WebAPI",
    publishableKey: "pubkey202",
    secretKey: "secret202",
    status: true,
  },
];
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    addApi: (state, action) => {
      // console.log(action);
      state.push(action.payload);
    },
  },
});

export const { addApi } = apiSlice.actions;
export default apiSlice.reducer;
