import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="relative xl:px-[100px] md:px-[44px] px-[24px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
