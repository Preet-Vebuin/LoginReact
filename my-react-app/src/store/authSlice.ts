import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  role: string | null; // ✅ Store role in Redux
}

const initialState: AuthState = {
  token: null,
  role: null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; role: string }>) => {
      state.token = action.payload.token;
      state.role = action.payload.role; 
    },
    logout: (state) => {
      state.token = null;
      state.role = null; 
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
