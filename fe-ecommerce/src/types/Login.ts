// Admin Login

export interface LoginData {
  email: string;
  password: string;
}

export interface APIResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}
