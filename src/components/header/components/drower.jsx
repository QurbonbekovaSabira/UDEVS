"use client";
import React from "react";
import { DeleteIcon } from "../../../../public/icon/delete-icon";
import { MenuIcon } from "../../../../public/icon/menu-icon";
import { YouTubeIcon } from "../../../../public/icon/youTube-icon";
import { TwitterIcon } from "../../../../public/icon/twitter-icon";
import { InstagramIcon } from "../../../../public/icon/instagram-icon";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/main/button";
export const Drower = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="drawer !w-6 !h-6 drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          onClick={() => setIsOpen(true)}
          htmlFor="my-drawer-4"
          className="drawer-button !w-6 !h-6 !mr-[150px]"
        >
          <MenuIcon />
        </label>
      </div>
      {isOpen && (
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-white  text-base-content min-h-full w-full p-4">
            <div className="flex mb-4 items-center justify-between">
              <div className="w-[96px] h-auto">
                <Image
                  src="/img/logo.svg"
                  alt="My Image"
                  width={16}
                  height={32}
                  layout="responsive"
                  quality={75}
                  priority={true}
                  placeholder="blur"
                  blurDataURL="/img/logo.svg"
                />
              </div>
              <div onClick={() => setIsOpen(false)} className="drawer-close">
                <DeleteIcon />
              </div>
            </div>
            <div className="flex items-center gap-3 flex-col">
              <Link
                className="text-river-styx font-extrabold text-3xl"
                href={"#services"}
              >
                Services
              </Link>
              <Link
                className="text-river-styx font-extrabold text-3xl"
                href={"#clients"}
              >
                Clients
              </Link>
              <Link
                className="text-river-styx font-extrabold text-3xl"
                href={"#team"}
              >
                Command
              </Link>
              <Button className={"w-full px-4 py-3 text-xl"}>
                <a href="#footer">Contact</a>{" "}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
