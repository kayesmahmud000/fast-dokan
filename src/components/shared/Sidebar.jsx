"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconSettings,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CgLogOut } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { LucidePackage2 , LaptopMinimal} from "lucide-react";


export function DashboardSidebar() {
  const [activeLink, setActiveLink] = useState("Dashboard");
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <RxDashboard  className="h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Retailers",
      href: "#",
      icon: (
        <FaUsers className="h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Products",
      href: "#",
      icon: (
        <LucidePackage2 className="h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Performance",
      href: "#",
      icon: (
        <LaptopMinimal className="h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0" />
      ),
    },
  ];
  
  const [open, setOpen] = useState(false);
  
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-[#F6F6F6] md:flex-row dark:border-neutral-700 dark:bg-neutral-800 h-screen",
      )}>
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
                <span className="text-[#8E8E93] font-medium px-3">Menu</span>
              {links.map((link, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "mx-2 rounded-full font-normal p-2 transition-colors",
                    activeLink === link.label 
                      ? "bg-[#007AFF] text-white" 
                      : "hover:bg-[#007AFF] hover:text-white"
                  )}
                  onClick={() => setActiveLink(link.label)}
                >
                  <SidebarLink 
                    link={{
                      ...link,
                      icon: React.cloneElement(link.icon, {
                        className: cn(
                          "h-5 w-5 shrink-0",
                          activeLink === link.label 
                            ? "text-white" 
                            : "text-neutral-700 dark:text-neutral-200"
                        )
                      })
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white w-full"></div>
          <div 
            className={cn(
              "flex items-center bg-[#FFFFFF] justify-center mx-2 font-medium rounded-md transition-colors hover:bg-blue-400 hover:text-white"
            )}
          >
            <SidebarLink
              link={{
                label: "Logout",
                href: "#",
                icon: (
                  <CgLogOut 
                    size={24} 
                    className="text-neutral-700 dark:text-neutral-200"
                  />
                ),
              }} 
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center justify-center space-x-2 py-1 text-sm font-normal text-black">
      <Image src='/logo.png' width='60' height='60' alt="logo"/>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div
        className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};