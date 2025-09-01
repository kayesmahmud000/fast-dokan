"use client";
import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { IconSettings } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ current route ধরতে
import { CgLogOut } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { LucidePackage2, LaptopMinimal } from "lucide-react";

export function DashboardSidebar() {
  const pathname = usePathname(); // ✅ এখন pathname থেকে active check করবো

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <RxDashboard className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Retailers",
      href: "/retailer",
      icon: <FaUsers className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Products",
      href: "/all-products",
      icon: <LucidePackage2 className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Performance",
      href: "/performance",
      icon: <LaptopMinimal className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5 shrink-0" />,
    },
  ];

  return (
    <div
      className={cn(
        "mx-auto flex md:w-2/12 flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-[#F6F6F6] md:flex-row dark:border-neutral-700 dark:bg-neutral-800 md:h-screen lg:fixed"
      )}
    >
      <Sidebar open={true} setOpen={() => {}} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              <span className="text-[#8E8E93] font-medium px-3">Menu</span>
              {links.map((link, idx) => {
                const isActive = pathname === link.href; // ✅ এখানে check হচ্ছে
                return (
                  <div
                    key={idx}
                    className={cn(
                      "mx-2 rounded-full font-normal p-2 transition-colors",
                      isActive
                        ? "bg-[#007AFF] text-white"
                        : "hover:bg-[#007AFF] hover:text-white"
                    )}
                  >
                    <SidebarLink
                      link={{
                        ...link,
                        icon: React.cloneElement(link.icon, {
                          className: cn(
                            "h-5 w-5 shrink-0",
                            isActive
                              ? "text-white"
                              : "text-neutral-700 dark:text-neutral-200"
                          ),
                        }),
                      }}
                    />
                  </div>
                );
              })}
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
      className="relative z-20 flex items-center justify-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image src="/logo.png" width={60} height={60} alt="logo" />
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};
