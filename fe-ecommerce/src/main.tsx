import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        toastOptions={{
          position: "top-right",
          style: {
            background: "#283046",
            color: "#fff",
          },
        }}
      />
    </Provider>
  </StrictMode>
);
