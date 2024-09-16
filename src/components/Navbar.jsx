import React from "react";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 left-0 shadow-lg shadow-[#00000017]/50 bg-[#00000017] backdrop-blur-md z-50 sm:px-10">
      <div className="w-full h-full flex items-center justify-between px-4 sm:px-10">
      
        <div className="flex-grow flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-between w-full max-w-[800px] border border-[#00000017] bg-[#a19db25e] py-2 px-4 rounded-full text-gray-200">
            <a href="#" className="flex-shrink-0">
              <img
                src="/NavLogo.png"
                alt="logo"
                width={35}
                height={25}
                className="cursor-pointer hover:animate-slowspin"
              />
            </a>
            <a href="/" className="mx-2 cursor-pointer text-sm sm:text-base">
              About
            </a>
            <a href="/" className="mx-2 cursor-pointer text-sm sm:text-base">
              Projects
            </a>
            <a
              href="Contact"
              className="mx-2 cursor-pointer text-sm sm:text-base"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
