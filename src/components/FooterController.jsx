"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Footer from "./Footer";

export default function FooterController() {
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();

  // If the current path includes "/dashboard" (e.g. /de/dashboard) don't render footer
  if (pathname.includes("/dashboard")) return null;

  // If the UI requested no footer via query param (e.g. ?noFooter=1), hide footer
  if (searchParams && searchParams.get("") === "1") return null;

  return <Footer />;
}
