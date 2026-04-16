import { lazy, Suspense } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
import { usePortfolio } from "./context/PortfolioContext";

const App = () => {
  const { loading, error } = usePortfolio();

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#0a0f1f", color: "#00d4ff", fontSize: "1.5rem", fontFamily: "monospace" }}>
        Loading Portfolio Data...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#0a0f1f", color: "#ff4400" }}>
        Error loading portfolio data: {error}
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#0a0f1f", color: "#00d4ff", fontSize: "1.2rem", fontFamily: "monospace" }}>
          Loading...
        </div>
      }
    >
      <MainContainer />
    </Suspense>
  );
};

export default App;
