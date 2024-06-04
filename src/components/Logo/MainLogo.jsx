import React from "react";
import logo_primary from "../../assets/logo_primary.svg";

function MainLogo({ className }) {
  return (
    <div>
      <img src={logo_primary} className={`${className}`} />
    </div>
  );
}

export default MainLogo;
