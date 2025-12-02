"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterController() {
  const pathname = usePathname() || "";

  // If the current path includes "/dashboard" (e.g. /de/dashboard) don't render footer
  if (pathname.includes("/dashboard")) return null;

  return <Footer />;
}
