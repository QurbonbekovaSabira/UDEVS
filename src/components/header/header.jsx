import React from "react";
import { Button } from "../main/button";
import Image from "next/image";
import { Drower } from "./components/drower";
import { DesctopHeader } from "./components/desctop-header";
const Header = () => {
  return (
    <header className="bg-white z-50 py-4 descktop:py-5 shadow-[0_1px_0_#e5e9f2] fixed top-0 left-0 right-0">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[96px] h-auto">
            <Image
              src="/img/logo.svg"
              alt="uDevs logo"
              width={16}
              height={32}
              layout="responsive"
              quality={90}
              priority={true}
              blurDataURL="/img/logo.svg"
            />
          </div>
          <div className="block tablet:hidden">
            <Drower />
          </div>
          <div className="tablet:block max-w-[70%] gap-1 w-full grow hidden ml-auto">
            <DesctopHeader />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
