import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LoginData } from "../../types/Login";
import api from "~/api/api";

interface APIResponse {
  message: string;
}

export const admin_login = createAsyncThunk<Promise<APIResponse>, LoginData>(
  "admin/login",
  async (info) => {
    const { data } = await api.post("/login/admin", info, {
      withCredentials: true,
    });

    console.log(data);
    return {
      message: "User Logged in successfully",
    };
  }
);

export const auth = createSlice({
  name: "auth",
  initialState: {
    successMsg: "",
    errorMsg: "",
    loading: false,
    userInfo: "",
  },
  reducers: {},

  extraReducers: (builder) => {},
});

export default auth.reducer;
