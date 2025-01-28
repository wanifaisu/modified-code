"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import ChangeStatusModal from "./_components/ChangeStatusModal";
import DeleteConfirmationModal from "./_components/DeleteConfirmationModal";

import PaymentHistory from "./_components/PaymentHistory";
import StatusChangeModal from "./_components/StatusChangeModal";
import UpdatePageHeader from "./_components/UpdatePageHeader";

const inter = Inter({ subsets: ["latin"] });

interface ProjectFormData {
  fullName: string;
  projectRequirements: string;
  projectType: string;
  currency: string;
  budget: string;
  deadline: string;
  referenceName: string;
  minimumPay: string;
  projectDetails: string;
}

export default function PendingPage() {
  const [showStatusChangeModal, setShowStatusChangeModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showChangeStatus, setShowChangeStatus] = useState(false);
  const [isAccessDropdownOpen, setIsAccessDropdownOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [formData, setFormData] = useState<ProjectFormData>({
    fullName: "",
    projectRequirements: "Normal",
    projectType: "Government",
    currency: "USD",
    budget: "45.52",
    deadline: "",
    referenceName: "mr.mack",
    minimumPay: "",
    projectDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    console.log("File uploaded:", e.target.files);
  };

  const handleChangeStatusModal = () => {
    setShowStatusChangeModal(false);
  };

  const handleDeleteShowModal = () => {
    setShowDeleteConfirmation(false);
  };

  const handleChangeStatus = () => {
    setShowChangeStatus(false);
  };

  const handlePaymentModal = () => {
    setShowPaymentModal(false);
  };
  return (
    <div className={`bg-gray-100 ${inter.className}`}>
      {showStatusChangeModal && (
        <StatusChangeModal onClose={handleChangeStatusModal} />
      )}

      {showDeleteConfirmation && (
        <DeleteConfirmationModal onClose={handleDeleteShowModal} />
      )}

      {showChangeStatus && <ChangeStatusModal onClose={handleChangeStatus} />}

      {showPaymentModal && <PaymentHistory onClose={handlePaymentModal} />}

      <div className="max-w-5xl mx-auto p-4">
        <UpdatePageHeader
          isAccessDropdownOpen={isAccessDropdownOpen}
          setIsAccessDropdownOpen={setIsAccessDropdownOpen}
          handleDeleteShowModal={setShowDeleteConfirmation}
          handleChangeStatusModal={setShowStatusChangeModal}
          handleChangeStatus={setShowChangeStatus}
          handlePaymentModal={setShowPaymentModal}
        />
        <div className="bg-white text-black p-8 rounded shadow">
          <h2 className="text-center text-2xl font-semibold mb-2">
            Stunning Design
          </h2>
          <p className="text-center text-gray-500 mb-4">
            order ID: 00001
            <br />
            Order Date : UTC 02-02-2024(02:23 pm)
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">
                  Applicant&apos;s Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">
                  Project Requirements
                </label>
                <select
                  name="projectRequirements"
                  value={formData.projectRequirements}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option>Normal</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Type of Project</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option>Government</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Pay Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option>USD</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">Project deadline</label>
                <input
                  type="text"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  placeholder="MM / DD / YYYY"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">Reference Name</label>
                <input
                  type="text"
                  name="referenceName"
                  value={formData.referenceName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">
                  Provide the project related files
                </label>
                <label className="w-full border border-gray-300 rounded px-3 py-2 flex items-center justify-center cursor-pointer">
                  <i className="fas fa-upload mr-2"></i>
                  Upload file
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>

              <div>
                <label className="block text-gray-700">minimum pay</label>
                <input
                  type="text"
                  name="minimumPay"
                  value={formData.minimumPay}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700">
                Give some details about the project
              </label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                rows={4}
                placeholder="First, you need to create robust product requirement documentation that clearly defines your goals and the scope of your work. The success of a project is highly dependent on the thoroughness of documentation which gives a project direction and accountability.
                With project documentation in place, there will be fewer uncertainties about completing the project; everyone on the project team is on the same page and has greater visibility into the nature of the project. Project documentation allows you to clearly state who is assigned which tasks and ultimately responsible for which deliverables. When someone wants to ask questions about the project, they can easily see who is taking care of the relevant aspect and employ responsible tools while eliminating worries. Tasks that fall through the cracks are easy to track so the stakeholders will always know what the deliverables are and then they are more likely to be able to meet their targets. They can continually refer back to the documentation to find out the status of the project and ensure they are on track. Deliverables are given timelines and deadlines to ensure that they are handed in accountable and to complete the project successfully. Teams are more productive when they have access to the latest project documentation. They know what is within and without their scope of work and are better placed to meet the demands placed on the project teams. They know what tasks are their responsibility and are more willing to be held accountable for their work. Projects are completed more quickly as everyone is working at full capacity with an understanding of their role in the process. Documenting your project means you are much less likely to lose information that could be valuable later down the line. It's easy to forget what was said in meetings and projects become confused as everyone is relying on verbal communication to get things done. When you later want to look back on a project and learn from it, you have a written record of what took place."
                className="w-full border border-gray-300 rounded px-3 py-2 placeholder-text-black"
              ></textarea>
            </div>

            <div>
              <p className="text-gray-700 text-sm">
                I agree to all terms and conditions, privacy, order, payment,
                refund, policies and apply.
              </p>
            </div>

            <div className="flex">
              <p className="mt-5">{"Applicant's signature"} </p>
              <Image
                src="/signature.png"
                alt="Applicant's signature"
                width={100}
                height={50}
                className=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
