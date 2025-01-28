// src\app\(withLayoutC)\c\category\page.tsx

"use client";
import AddNewTechnology from "@/components/ui/MergedComponents/CategoryComponents/AddNewTechnology";
import CreateArchitecture from "@/components/ui/MergedComponents/CreateArchitecture";
import CreateBlog from "@/components/ui/MergedComponents/CreateBlog";
import CreateCompanyPolicy from "@/components/ui/MergedComponents/CreateCompanyPolicy";
import CreateFeatured from "@/components/ui/MergedComponents/CreateFeatured";
import CreateNotice from "@/components/ui/MergedComponents/CreateNotice";
import CreateOrder from "@/components/ui/MergedComponents/CreateOrder";
import CreateService from "@/components/ui/MergedComponents/CreateService";
import CreateTemplate from "@/components/ui/MergedComponents/CreateTemplate";
import CreateEmployee from "@/components/ui/MergedComponents/NewCategoryComponents/CreateEmployee";
import UpdateSecutiy from "@/components/ui/MergedComponents/UpdateSecutiy";
import React, { useState } from "react";

const Category: React.FC = () => {
  const [navName, setNavName] = useState<string>("Create Technology");
  const [currentTab, setCurrentTab] = useState<string>("tab1");

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };
  interface ContentData {
    id: number;
    title: string;
    content: object[];
  }
  const [contentItem, setContentItem] = useState<ContentData[]>([
    {
      id: 1,
      title: "Create Technology ",
      content: [<>This is techno page</>],
    },
    {
      id: 2,
      title: "Service creator",
      content: [],
    },
    {
      id: 3,
      title: "Creator templated",
      content: [],
    },
    {
      id: 4,
      title: "Creator blog",
      content: [{}],
    },
    {
      id: 5,
      title: "Update security",
      content: [{}],
    },
    {
      id: 6,
      title: "Create notice",
      content: [{}],
    },
    {
      id: 7,
      title: "Create Orders",
      content: [{}],
    },

    {
      id: 8,
      title: "Company Profile ",
      content: [{}],
    },
  ]);

  const handleBannerSubmit = (bannerData: any) => {
    const bannerIndex = contentItem.findIndex(
      (item) => item.title === "Create Technology",
    );

    // Update the content array with the submitted data
    setContentItem((prevContent) => {
      const updatedContent = [...prevContent];
      updatedContent[bannerIndex] = {
        ...updatedContent[bannerIndex],
        content: [bannerData],
      };
      return updatedContent;
    });
    console.log("Submitted Banner Data:", bannerData);
  };
  const [isOpen, setIsOpen] = useState({
    bannerOpen: true,
    paymentOpen: false,
    socialMedia: false,
    companyProfile: false,
    globalLocations: false,
    templates: false,
    orders: false,
    logo: false,
  });

  const handleButtonClick = (itemId: any) => {
    switch (itemId) {
      case 1:
        setNavName("Create Technology");
        setIsOpen({
          ...isOpen,
          bannerOpen: true,
          paymentOpen: false,
          socialMedia: false,
          companyProfile: false,
          globalLocations: false,
          templates: false,
          orders: false,
          logo: false,
        });
        break;
      case 2:
        setNavName("Service creator");
        setIsOpen({
          ...isOpen,
          bannerOpen: false,
          paymentOpen: true,
          socialMedia: false,
          companyProfile: false,
          globalLocations: false,
          templates: false,
          orders: false,
          logo: false,
        });
        break;
      case 3:
        setNavName("Creator templated");
        setIsOpen({
          ...isOpen,
          bannerOpen: false,
          paymentOpen: false,
          socialMedia: false,
          companyProfile: false,
          globalLocations: false,
          templates: false,
          orders: false,
          logo: false,
        });
        break;
      case 4:
        setNavName("Creator blog");
        setIsOpen({
          ...isOpen,
          bannerOpen: false,
          paymentOpen: false,
          socialMedia: false,
          companyProfile: false,
          globalLocations: false,
          templates: false,
          orders: false,
          logo: false,
        });
        break;
      case 5:
        setNavName("Update security");
        setIsOpen({
          ...isOpen,
          bannerOpen: false,
          paymentOpen: false,
          socialMedia: false,
          companyProfile: false,
          globalLocations: true,
          templates: false,
          orders: false,
          logo: true,
        });
        break;
      case 6:
        setNavName("Create notice");
        setIsOpen({
          ...isOpen,
          bannerOpen: false,
          paymentOpen: false,
          socialMedia: false,
          companyProfile: false,
          globalLocations: false,
          templates: true,
          orders: false,
          logo: true,
        });
        break;
      case 7:
        setNavName("Create Orders");
        setIsOpen({
          ...isOpen,
          bannerOpen: false,
          paymentOpen: false,
          socialMedia: false,
          companyProfile: false,
          globalLocations: false,
          templates: false,
          orders: true,
          logo: false,
        });
        break;
      case 8:
        setNavName("Company");
        setIsOpen({
          ...isOpen,
          bannerOpen: false,
          paymentOpen: false,
          socialMedia: false,
          companyProfile: false,
          globalLocations: false,
          templates: false,
          orders: false,
          logo: true,
        });
        break;

      default:
        return null;
    }
  };

  return (
    <section className="w-full p-4 md:p-6 2xl:p-10">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          className={`${"tab1"} ${
            currentTab === "tab1" ? "activeTab" : ""
          }  rounded border-2 bg-blue-600 px-3 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab1")}
        >
          Create Template
        </button>
        {/* <button
          className={`${"createFeatured"} ${
            currentTab === "createFeatured" ? "activeTab" : ""
          }  rounded border-2 bg-blue-600 px-3 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("createFeatured")}
        >
          Create Featured
        </button> */}

        <button
          className={`${"tab2"} ${
            currentTab === "tab2" ? "activeTab" : ""
          }  rounded border-2 bg-blue-600 px-3 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab2")}
        >
          Create Architecture
        </button>
        {/* <button
          className={`${"createArchitecture"} ${
            currentTab === "createArchitecture" ? "activeTab" : ""
          }  active:bg rounded border-2 bg-blue-600 px-3 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("createArchitecture")}
        >
          Create Architecture
        </button> */}
        <button
          className={`${"tab3"} ${
            currentTab === "tab3" ? "activeTab" : ""
          }  active:bg rounded border-2 bg-blue-600 px-3 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab3")}
        >
          Create Service
        </button>
        <button
          className={`${"tab4"} ${
            currentTab === "tab4" ? "activeTab" : ""
          }  rounded border-2 bg-blue-600 px-3 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab4")}
        >
          Create Notice
        </button>
        <button
          className={`${"tab5"} ${
            currentTab === "tab5" ? "activeTab" : ""
          }  rounded border-2 bg-blue-600 px-3 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab5")}
        >
          Create Order
        </button>
        <button
          className={`${"tab6"} ${
            currentTab === "tab6" ? "activeTab" : ""
          }  rounded border-2 bg-blue-600 px-3 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab6")}
        >
          Create Employee
        </button>
        <button
          className={`${"tab7"} ${
            currentTab === "tab7" ? "activeTab" : ""
          }  rounded border-2 bg-blue-600 px-3 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab7")}
        >
          Create Blog
        </button>
        
      </div>
      <div className="min-h-screen">
        {/* Buttons Contant */}
        {currentTab === "tab1" && (
          <div>
            {" "}
            <CreateTemplate />{" "}
          </div>
        )}
        {/* {currentTab === "createFeatured" && (
          <div>
            {" "}
            <CreateFeatured />{" "}
          </div>
        )} */}
        {currentTab === "tab2" && (
          <div>
            <CreateArchitecture />
          </div>
        )}
        {/* {currentTab === "createArchitecture" && (
          <div>
            <CreateArchitecture />
          </div>
        )} */}
        {currentTab === "tab3" && (
          <div>
            <CreateService />
          </div>
        )}
        {currentTab === "tab4" && (
          <div>
            <CreateNotice/>
          </div>
        )}
        {currentTab === "tab5" && (
          <div>
            <CreateOrder />
          </div>
        )}
        {currentTab === "tab6" && (
          <div>
            <CreateEmployee />
          </div>
        )}
        {currentTab === "tab7" && (
          <div>
            <CreateBlog />
          </div>
        )}
        

        
      </div>
    </section>
  );
};

export default Category;
