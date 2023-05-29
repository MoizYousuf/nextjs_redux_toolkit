import { Suspense } from "react";
import Router from "./pages/routes";

const Home: React.FC = () => {

  function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
  };

  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  )
};

export default Home;