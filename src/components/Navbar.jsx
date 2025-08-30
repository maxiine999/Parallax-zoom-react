import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 left-0 bg-[#00000020] backdrop-blur-lg border-b border-white/10 shadow-lg z-50">
      <div className="w-full h-full flex items-center justify-center px-6 sm:px-12">
      
        <div className="flex space-x-12">
          {["MOSAIC"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="relative group text-white/100 font-medium tracking-wide 
                         transform transition-transform duration-300 
                         hover:scale-110 hover:-translate-y-1 hover:rotate-1"
            >
              {item}
          
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white rounded-full shadow-[0_2px_10px_rgba(236,72,153,0.7)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
