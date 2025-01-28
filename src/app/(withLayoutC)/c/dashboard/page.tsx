import Hero from "@/components/Dashboard/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TAST | ADMIN PANEL",
  description: "This is admin panel",
};

export default function Home() {
  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <Hero />
    </div>
  );
}
