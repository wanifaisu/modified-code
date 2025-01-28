import { createSlice } from "@reduxjs/toolkit";
import { IAdmin } from "@/types/admin";

const initialState: IAdmin[] = [
  {
    sl: "4",
    photo: "/icons/image 7657.png",
    name: "Mr. Jack",
    userName: "Mr Jack",
    email: "jack 4515@gmail.com",
    url: "/design/OWMRTkpM99MsqSpkPe1RS3/Untitled?node-id=2137-4817&t=yPxUkIrRzLBtKfAk-0",
    password: "45*************d4",
    accessList: "Main",
    active: true,
  },
  {
    sl: "3",
    photo: "/icons/image 7657.png",
    name: "Mr. Jack",
    userName: "Mr Jack",
    email: "maadmin@gmail.com",
    url: "/design/OWMRTkpM99MsqSpkPe1RS3/Untitled?node-id=2137-4817&t=yPxUkIrRzLBtKfAk-0",
    password: "45*************d4",
    accessList: "4",
    active: true,
  },
  {
    sl: "2",
    photo: "/icons/image 7657.png",
    name: "Mr. Jack",
    userName: "Mr Jack",
    email: "payment@gmail.com",
    url: "/design/OWMRTkpM99MsqSpkPe1RS3/Untitled?node-id=2137-4817&t=yPxUkIrRzLBtKfAk-0",
    password: "45*************d4",
    accessList: "10",
    active: false,
  },
  {
    sl: "1",
    photo: "/icons/image 7657.png",
    name: "Mr. Jack",
    userName: "Mr Jack",
    email: "oders@gmail.com",
    url: "/design/OWMRTkpM99MsqSpkPe1RS3/Untitled?node-id=2137-4817&t=yPxUkIrRzLBtKfAk-0",
    password: "45*************d4",
    accessList: "10",
    active: true,
  },
];

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.push(action.payload);
    },
    statusChange: (state, action) => {
      const { id, active } = action.payload;
      const adminIndex = state.findIndex((admin) => admin.sl === id);
      if (adminIndex !== -1) {
        state[adminIndex].active = active;
      }
    },
    updateAdmin: (state, action) => {
      const updatedAdmin = action.payload;
      const adminIndex = state.findIndex(
        (admin) => admin.sl === updatedAdmin.id,
      );
      if (adminIndex !== -1) {
        state[adminIndex] = updatedAdmin;
      }
    },
    removeAdmin: (state, action) => {
      const { id } = action.payload;
      return state.filter((admin) => admin.sl !== id);
    },
  },
});

export const { addAdmin, updateAdmin, removeAdmin, statusChange } =
  adminSlice.actions;
export default adminSlice.reducer;
