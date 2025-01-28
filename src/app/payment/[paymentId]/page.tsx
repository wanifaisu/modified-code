"use client";
// src\app\(withLayoutC)\c\allpayments\view\[withdrawId]\page.tsx

import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import PaymentDescription from "../_components/PaymentDescription";
import PaymentOptions from "../_components/PaymentOptions";
import PaymentReception from "../_components/PaymentReception";
import DeleteConfirmationModal from "./_components/DeleteConfirmationModal";
import SecurePinModal from "./_components/SecurePinModal";
import StatusChangeModal from "./_components/StatusChangeModal";
import { usePayment } from "./paymentContext";

export default function PaymentDetailsPage() {
  const { paymentData, loading, error, modalType, closeModal } = usePayment();

  console.log("modal type", modalType);

  const [isImageVisible, setIsImageVisible] = useState(true);
  // Function to handle closing the modal (hiding the image)
  const closeImageModal = () => {
    setIsImageVisible(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleImageSize = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-3/4  md:p-6 2xl:p-10 mx-auto">
        <div className="relative rounded-lg bg-white px-4 py-8">
          <PaymentReception paymentData={paymentData} />

          <div>
            <PaymentDescription paymentData={paymentData} />

            <div className="grid grid-cols-7">
              <PaymentOptions paymentData={paymentData} />

              {isImageVisible && (
                <div className="col-span-3 flex flex-1 justify-center items-center relative">
                  {/* <div className="bg-red overflow-hidden relative h-32"> */}
                  <Image
                    src="/images/image 12130.png"
                    onClick={toggleImageSize}
                    alt="spam"
                    className="border-8 border-[#FFB200] rounded-lg"
                    width={300}
                    height={33}
                  />
                  {isOpen && (
                    <div
                      onClick={toggleImageSize}
                      style={{
                        position: "fixed", // Ensure it's fixed to the viewport
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000, // Higher than most other elements
                      }}
                    >
                      <Image
                        src="/images/image 12130.png"
                        alt="Order successful"
                        width={400} // Adjust as needed
                        height={400} // Adjust as needed
                        style={{ objectFit: "contain" }} // Maintain aspect ratio
                      />
                    </div>
                  )}
                  <button
                    onClick={closeImageModal}
                    className="relative bottom-20 -right-2  text-gray-700 text-lg border border-[#231F20] rounded"
                  >
                    <IoClose color="#231F20" />
                  </button>
                </div>
              )}
              {modalType === "adminTable" && (
                <StatusChangeModal onClose={closeModal} />
              )}
              {modalType === "confirmation" && (
                <DeleteConfirmationModal onClose={closeModal} />
              )}

              {modalType === "enterPin" && (
                <SecurePinModal onClose={closeModal} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
