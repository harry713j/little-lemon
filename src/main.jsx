import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { AuthLayout as AuthLayer } from "./components/index.js";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            <AuthLayer authentication={false}>
              <Home />
            </AuthLayer>
          }
        />
        <Route
          path="about"
          element={
            <AuthLayer authentication={false}>
              <About />
            </AuthLayer>
          }
        />
        <Route
          path="menu"
          element={
            <AuthLayer authentication={false}>
              <Menu />
            </AuthLayer>
          }
        />
      </Route>
      <Route
        path="/signup"
        element={
          <AuthLayer authentication={false}>
            <Signup />
          </AuthLayer>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayer authentication={false}>
            <Login />
          </AuthLayer>
        }
      />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
