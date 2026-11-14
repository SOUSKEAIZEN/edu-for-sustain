import type { Metadata } from "next";
import EwasteNavbar from "@/components/ewaste/EwasteNavbar";
import EwasteFooter from "@/components/ewaste/EwasteFooter";

export const metadata: Metadata = {
  title: "ECOCYCLE — Smart E-Waste Collection Point Finder | Delhi NCR & Haryana",
  description:
    "Discover verified e-waste collection points, find authorized recycling facilities, and schedule doorstep pickups across Delhi, New Delhi, and Haryana. Powered by ECOLEARN.",
  keywords: [
    "E-Waste Collection Delhi",
    "Electronic Waste Recycling NCR",
    "E-Waste Drop-off Faridabad",
    "Gurugram E-Waste Pickup",
    "Battery Disposal Delhi",
    "ECOCYCLE",
    "Smart E-Waste Finder",
  ],
};

export default function EwasteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EE] text-[#172D49]">
      <EwasteNavbar />
      <main className="flex-1">{children}</main>
      <EwasteFooter />
    </div>
  );
}
