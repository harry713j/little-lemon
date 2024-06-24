import React from "react";
import { LoginForm } from "../components";

function Login() {
  return (
    <section
      className="bg-lemon bg-cover bg-center relative block overflow-hidden z-10 w-full h-full min-h-screen
  before:content-[''] before:absolute before:bg-gradient-to-r before:from-yellow before:to-yellow 
  before:opacity-40 before:block before:inset-0 before:z-[-5]"
    >
      <div className="flex w-full h-full items-center justify-center p-4 xl:mt-8 sm:mt-6 mt-4 ">
        <LoginForm />
      </div>
    </section>
  );
}

export default Login;
