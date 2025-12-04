"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import UnsubscribeHeader from "./UnsubscribeHeader";

export default function HeaderController() {
  const pathname = usePathname() || "";

  // If on account page (e.g. /de/account) render UnsubscribeHeader
  if (pathname.includes("/account")) return <UnsubscribeHeader />;

  // If on a dashboard path, render DashboardHeader otherwise render the normal Header
  if (pathname.includes("/dashboard")) return <DashboardHeader />;

  return <Header />;
}
