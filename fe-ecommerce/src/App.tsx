import { Suspense } from "react";
import Routes from "./pages/admin/router";
import { LoadingSpinner } from "./components/Spinner";

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes />
    </Suspense>
  );
}
