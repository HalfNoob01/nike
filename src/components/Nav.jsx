import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger,cross } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [ showCross, setShowCross ] = useState(false)
  function handleClick () {
     setShowCross(old=>!old)
  }
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} className={`${showCross && "mb-[144px]"}`} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray  hover:text-black "
              >{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block items-center">
            <img src={showCross ? cross : hamburger} className={`${setShowCross && "pb-3"}`}  alt="HamburgerORCross" width={25} height={25} onClick={handleClick}/>

            {
              showCross && 

              <ul className=" flex flex-col gap-4 ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-4 text-lg text-slate-gray hover:text-black"
                  >{item.label}</a>
                </li>
              ))}
            </ul>
            }
        </div>
      </nav>
    </header>
  );
};

export default Nav;
