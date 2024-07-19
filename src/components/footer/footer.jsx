import React from "react";
import { YouTubeIcon } from "../../../public/icon/youTube-icon";
import { InstagramIcon } from "../../../public/icon/instagram-icon";
import { TwitterIcon } from "../../../public/icon/twitter-icon";
const Footer = () => {
  return (
    <footer id="footer" className="bg-ma-white pt-12">
      <div className="container">
        <div
          className="tablet:mb-11 mb-4 flex justify-center
        "
        >
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <div className="pb-8 border-b border-primary flex flex-col tablet:flex-row gap-6 items-start tablet:justify-between">
          <div>
            <p className="text-base font-bold text-river-styx mb-[18px]">
              About Us
            </p>
            <div className="flex flex-col ">
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#directtion"
              >
                Direction
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#"
              >
                Command
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#tools"
              >
                Tools
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#clients"
              >
                Clients
              </a>
            </div>
          </div>
          <div>
            <p className="text-base font-bold text-river-styx mb-[18px]">
              Portfolio
            </p>
            <div className="flex flex-col ">
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#delever"
              >
                Delever
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#delever"
              >
                Sms.uz
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#delever"
              >
                Goodzone
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#delever"
              >
                Iman
              </a>
            </div>
          </div>
          <div>
            <p className="text-base font-bold text-river-styx mb-[18px]">
              Services
            </p>
            <div className="flex flex-col ">
              <a
                className="text-primary hover:underline text-lg font-normal"
                href="#services"
              >
                Development of mobile applications
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#erp"
              >
                Development and implementation ERP systems
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#ux/ui"
              >
                User interface,User experience design
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#consulting"
              >
                IT consulting
              </a>
              <a
                className="text-primary text-lg font-normal hover:underline"
                href="#optimization"
              >
                Optimization IT consulting infrastructure
              </a>
            </div>
          </div>
        </div>
        <div className="flex py-4 tablet:py-6 items-center tablet:justify-between tablet:flex-row flex-col-reverse">
          <p className="text-primary text-lg font-normal ">
            © 2024 Udevs. All rights reserved
          </p>
          <div className="flex items-center gap-2 justify-center">
            <div className="bg-primary rounded-full p-1">
              <InstagramIcon />
            </div>
            <div className="bg-primary rounded-full p-1">
              <TwitterIcon />
            </div>
            <div className="bg-primary rounded-full p-1">
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
