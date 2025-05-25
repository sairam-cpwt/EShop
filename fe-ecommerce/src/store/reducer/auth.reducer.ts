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

      return thunkAPI.fulfillWithValue(data);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleApiError(error));
    }
  }
);

interface InitialState {
  successMsg: string;
  errorMsg: string | null;
  loading: boolean;
  userInfo: string | null;
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
  reducers: {
    reset: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(admin_login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(admin_login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.userInfo = action.payload.data?.token;
      state.successMsg = action.payload.message;

      localStorage.setItem("token", action.payload.data.token);
    });

    builder.addCase(admin_login.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = (action.payload as string) || "Login Failed";
    });
  },
});

export default auth.reducer;
