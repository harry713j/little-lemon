import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <main className="relative xl:px-[100px] md:px-[44px] px-[24px]">
        <Outlet />
      </main>
      <ToastContainer limit={5} />
      <Footer />
    </>
  );
}

export default App;
