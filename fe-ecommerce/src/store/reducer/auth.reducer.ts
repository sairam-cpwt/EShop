import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIService } from "~/api/api";
import type { LoginData } from "~/types/Login";
import { handleApiError } from "~/utils/APIErrorHandler";

interface APIResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}

export const admin_login = createAsyncThunk<APIResponse, LoginData>(
  "admin/login",
  async (info, thunkAPI) => {
    try {
      const data = await APIService.post<APIResponse>("/login/admin", info, {
        withCredentials: true,
      });

      return data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleApiError(error));
    }
  }
);

interface InitialState {
  successMsg: string;
  errorMsg: string | null;
  loading: boolean;
  userInfo: string;
}

const initialState: InitialState = {
  successMsg: "",
  errorMsg: "",
  loading: false,
  userInfo: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(admin_login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(admin_login.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = null;
      state.userInfo = action.payload.data?.token;
    });

    builder.addCase(admin_login.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.error.message || "Login Failed";
    });
  },
});

export default auth.reducer;
