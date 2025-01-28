"use client";

import Loader from "@/components/common/Loader";
import "@/css/satoshi.css";
import "@/css/style.css";
import StoreProvider from "@/types/providers/StoreProvider";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Dynamically import JS libraries (JSvectormap and Flatpickr)
const Flatpickr = dynamic(() => import("flatpickr") as any, { ssr: false });
const Jsvectormap = dynamic(() => import("jsvectormap"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  // Load CSS conditionally for flatpickr and jsvectormap
  useEffect(() => {
    // import("jsvectormap/dist/css/jsvectormap.css").catch(console.error);
    // import("flatpickr/dist/flatpickr.min.css").catch(console.error);
    setLoading(false); // Adjust to control the loading state as needed
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <StoreProvider>
            {loading ? <Loader /> : <AntdRegistry>{children}</AntdRegistry>}
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
