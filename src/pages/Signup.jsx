import React from "react";
import { SignupForm } from "../components/index.js";

function Signup() {
  return (
    <section
      className="bg-lemon bg-cover bg-center relative block overflow-hidden z-10
      before:content-[''] before:absolute before:bg-gradient-to-r before:from-yellow before:to-yellow 
      before:opacity-40 before:block before:inset-0 before:z-[-5]"
    >
      <div className="flex w-full h-full items-center justify-center p-4">
        <SignupForm />
      </div>
    </section>
  );
}

export default Signup;
