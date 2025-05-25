import { AxiosError } from "axios";

interface APIErrorResponse {
  success: false;
  message: string;
  errors?: string[];
}

export const handleApiError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const apiError = error.response?.data as APIErrorResponse;

    if (apiError?.message) {
      return apiError.message;
    } else {
      switch (status) {
        case 401:
          return "Invalid credentials. Please check your email and password.";

        case 403:
          return "Access denied. You don't have permission to perform this action.";

        case 404:
          return "The requested resource was not found.";

        case 422:
        case 400:
          if (apiError?.errors && apiError.errors.length > 0) {
            return apiError.errors.join(", ");
          }
          return "Invalid request. Please check your input.";

        case 429:
          return "Too many requests. Please try again later.";

        case 500:
          return "Server error. Please try again later.";

        case 503:
          return "Service temporarily unavailable. Please try again later.";

        default:
          if (apiError?.message) {
            return apiError.message;
          }
          return "Something went wrong. Please try again.";
      }
    }
  }

  if (error instanceof Error) {
    if (error.message.includes("Network Error")) {
      return "Network connection failed. Please check your internet connection.";
    }
    if (error.message.includes("timeout")) {
      return "Request timed out. Please try again.";
    }
    return error.message;
  }

  return "An unexpected error occurred. Please try again.";
};
