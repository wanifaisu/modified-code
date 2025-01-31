import ServiceTab from "@/components/services/Tabs/ServiceTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USUKC | Our Services",
  description: "We provide proffesional services",
};

const ServicePage = () => {
  return (
    <div className="w-full 2xl:p-10 ml-[-2rem]">
      <div>
        <ServiceTab />
      </div>
    </div>
  );
};

export default ServicePage;
