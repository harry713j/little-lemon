import React from "react";
import logo_secondary from "../../assets/logo_secondary.svg";

function FooterLogo({ className }) {
  return (
    <div>
      <img src={logo_secondary} className={`${className}`} />
    </div>
  );
}

export default FooterLogo;
