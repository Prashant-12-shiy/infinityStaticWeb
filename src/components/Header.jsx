import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="z-50">
      <div className="flex w-[70vw] items-center justify-center gap-16 m-auto rounded-3xl font-bold max-md:w-full max-md:gap-8">
        {/* <Link to="/" className="max-md:text-sm">Home</Link> */}
        {/* <img src="/logo1.png" alt='logo' className='h-20 w-20'/> */}
        <p className="flex flex-col text-2xl max-md:text-base max-md:tracking-tighter items-center tracking-wide logo">
          Infinity <span className="rotate-180 ">Esport Hub </span>
        </p>
        {/* <Link to="/tournament" className="max-md:text-sm">Tournament</Link> */}
      </div>
    </div>
  );
};

export default Header;
