import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/features/auth/authSlice";

function LogButton() {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(state);
  const handleLogin = () => {
    // navigate to the login page
    navigate("/login");
  };

  const handleLogout = () => {
    // log out from store
    dispatch(logout());
  };

  return (
    <>
      {state.status ? (
        <button
          onClick={handleLogout}
          className="font-karla uppercase rounded-md font-extrabold md:text-yellow bg-transparent 
      xl:text-[15px] xl:px-4 xl:py-2 md:text-[13px] md:px-2.5 md:py-1.5 text-xs px-2.5 py-1.5
      outline md:outline-[1.5px] outline-1 md:outline-yellow text-darkYellow outline-darkYellow duration-500
       hover:bg-yellow hover:text-bluishWhite hover:outline-yellow
      active:ring-2 active:ring-offset-2 active:ring-yellow "
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="font-karla uppercase rounded-md font-extrabold md:text-yellow bg-transparent 
      xl:text-[15px] xl:px-4 xl:py-2 md:text-[13px] md:px-2.5 md:py-1.5 text-xs px-2.5 py-1.5
      outline md:outline-[1.5px] outline-1 md:outline-yellow text-darkYellow outline-darkYellow duration-500
       hover:bg-yellow hover:text-bluishWhite hover:outline-yellow
      active:ring-2 active:ring-offset-2 active:ring-yellow "
        >
          Login
        </button>
      )}
    </>
  );
}

export default LogButton;
