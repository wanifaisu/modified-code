"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { CAUVNavItem, CNavItem } from "@/constants/navItems";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isUserRoute =
    pathname.includes("c/allUsers") &&
    (pathname.includes("/profile") ||
      pathname.includes("/orders") ||
      pathname.includes("/settings") ||
      pathname.includes("/payments"));
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}

        <Sidebar
          activeSidebarItems={isUserRoute ? CAUVNavItem : CNavItem}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#CCCCFF]">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}

          <main className="bg-[#CCCCFF]">{children}</main>

          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
