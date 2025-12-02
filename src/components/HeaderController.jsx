"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";

export default function HeaderController() {
  const pathname = usePathname() || "";

  // If on a dashboard path, render DashboardHeader otherwise render the normal Header
  if (pathname.includes("/dashboard")) return <DashboardHeader />;

  return <Header />;
}
