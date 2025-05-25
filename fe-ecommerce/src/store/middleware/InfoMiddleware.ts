import {
  isFulfilled,
  isRejectedWithValue,
  type Middleware,
} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const errorToastMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const payload = action.payload;

    if (typeof payload === "object" && payload !== null) {
      if ("silent" in payload) {
        return next(action);
      }

      if ("message" in payload) {
        const message = payload.message || "Something went wrong";
        toast.error(String(message));
      }
    } else if (typeof payload === "string") {
      toast.error(payload);
    } else {
      toast.error("Something went wrong.");
    }
  }

  return next(action);
};

interface SuccPayload {
  message: string;
  silent: boolean;
}

export const successToastMiddleware: Middleware = () => (next) => (action) => {
  if (isFulfilled(action)) {
    const payload = action?.payload as SuccPayload;

    if (typeof payload === "object" && payload !== null) {
      if (payload?.silent) {
        return next(action);
      }

      if (payload.message && typeof payload.message === "string") {
        toast.success(payload.message);
      }
    }
  }

  return next(action);
};
