
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxFigmaLogo,
  
} from "react-icons/rx";



const Footer = () => {
  return (
    <div className="w-full z-10 relative bg-transparent text-gray-200 shadow-lg sm:p-[100px] mt-20 ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full  flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px]  flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://github.com/maxiine999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://www.figma.com/@madhav7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <RxFigmaLogo />
                <span className="text-[15px] ml-[6px]">Figma</span>
              </a>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://discord.com/user/zypherxx999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://www.instagram.com/_madhav_mishra_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://x.com/M4xi999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://www.linkedin.com/in/madhav-mishra-98a8a1282/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Learn About Me</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]"></span>
              <a href="#Contact" className="cursor-pointer">
                Contact
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]"></span>
              <a href="#" className="cursor-pointer">
                About me
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]"></span>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </p>
          </div>
        </div>

        <div className="py-20 mb-2- text-[15px] text-center">
          &copy; Madhav Mishra, 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
