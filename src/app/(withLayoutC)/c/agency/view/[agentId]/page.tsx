"use client";
import { AlertTriangle, Check, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface FormData {
  // Personal Information
  fullName: string;
  dob: string;
  nationality: string;
  idNumber: string;
  education: string;
  skills: string;
  languages: string;
  phoneNumber: string;
  email: string;

  // Permanent Address
  country: string;
  state: string;
  city: string;
  zipCode: string;
  address: string;

  // Agency Information
  agencyLogo: File | null;
  agencyName: string;
  serviceDivision: string;
  grade: string;
  employee: string;
  servicePeriod: string;
  serviceArea: string;
  phoneNumberAgency: string;
  emailAgency: string;

  // Agency's Physical Address
  countryAgency: string;
  stateAgency: string;
  cityAgency: string;
  zipCodeAgency: string;
  addressAgency: string;
  currency: string;
  feeAmount: string;
  depositAccount: string;
  description: string;
  termsAccepted: boolean;
}
interface PageProps {
  params: {
    agentId: string;
  };
}

// Types for status change table
interface StatusChange {
  adminName: string;
  date: string;
  from: string;
  to: string;
  avatar?: string;
}

export default function AgencyRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dob: "",
    nationality: "",
    idNumber: "",
    education: "",
    skills: "",
    languages: "",
    phoneNumber: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    address: "",
    agencyLogo: null,
    agencyName: "",
    serviceDivision: "",
    grade: "",
    employee: "",
    servicePeriod: "",
    serviceArea: "",
    phoneNumberAgency: "",
    emailAgency: "",
    countryAgency: "",
    stateAgency: "",
    cityAgency: "",
    zipCodeAgency: "",
    addressAgency: "",
    currency: "",
    feeAmount: "",
    depositAccount: "",
    description: "",
    termsAccepted: false,
  });

  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [pin, setPin] = useState("");

  // Sample status changes data
  const statusChanges: StatusChange[] = [
    {
      adminName: "Jack",
      date: "02-02-2024 02:00 AM",
      from: "Active",
      to: "Inactive",
    },
    {
      adminName: "Auto",
      date: "03-02-2024 02:00 AM",
      from: "Inactive",
      to: "Active",
    },
    {
      adminName: "Auto",
      date: "03-02-2024 02:00 AM",
      from: "Active",
      to: "Inactive",
    },
    {
      adminName: "Mack",
      date: "03-02-2024 02:00 AM",
      from: "Dormant",
      to: "Dissolved",
    },
  ];

  const handleInfoClick = () => {
    setShowStatusModal(true);
  };

  const handleDemandAgencyClick = () => {
    setShowConfirmModal(true);
  };

  const handleStoreClick = () => {
    setShowPinModal(true);
  };

  const handlePinSubmit = () => {
    setShowPinModal(false);
    setShowSuccessModal(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, agencyLogo: e.target.files![0] }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <>
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            className="text-black px-4 py-2 rounded bg-transparent border-2 border-[#ffb200]"
            onClick={handleInfoClick}
          >
            Info
          </button>
          <button
            className="bg-[#ffb200] text-black px-4 py-2 rounded"
            onClick={handleDemandAgencyClick}
          >
            Delete Agency
          </button>
        </div>
        <h1 className="text-xl text-black font-bold ml-[9.7rem]">
          Active Page
        </h1>
        <div className="flex items-center space-x-4">
          <button className="bg-transparent text-black px-4 py-2 rounded">
            Social Media
          </button>
          <select className="bg-transparent border-2 border-[#ffb200] text-black px-4 py-2 rounded">
            <option value="" disabled selected>
              Private
            </option>
            <option value="private">Private</option>
            <option value="Public">Public</option>
          </select>
          <select className="bg-transparent border-2 border-[#ffb200] text-black px-4 py-2 rounded">
            <option value="" disabled selected>
              Status
            </option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
            <option value="Active">Active</option>
            <option value="Dormant">Dormant</option>
            <option value="Dissolved">Dissolved</option>
          </select>
          <button
            className="bg-[#ffb200] text-black px-4 py-2 rounded"
            onClick={handleStoreClick}
          >
            Save
          </button>
        </div>
      </header>
      {/* Status Change Modal */}
      {showStatusModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Changing status</h2>
              <button onClick={() => setShowStatusModal(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Admin name</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">From</th>
                  <th className="text-left p-2">To</th>
                </tr>
              </thead>
              <tbody>
                {statusChanges.map((change, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 flex items-center">
                      {change.avatar && (
                        <Image
                          width={24}
                          height={24}
                          src={change.avatar}
                          alt=""
                          className="w-6 h-6 rounded-full mr-2"
                        />
                      )}
                      {change.adminName}
                    </td>
                    <td className="p-2">{change.date}</td>
                    <td className="p-2">{change.from}</td>
                    <td className="p-2">{change.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Confirmation</h2>
              <p className="text-gray-600 mb-6">
                Do you want to delete the order?
              </p>
              <div className="flex space-x-4 w-full">
                <button
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                  onClick={() => setShowConfirmModal(false)}
                >
                  No
                </button>
                <button
                  className="flex-1 px-4 py-2 bg-yellow-400 rounded-lg"
                  onClick={() => setShowConfirmModal(false)}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Enter your secure PIN code</h2>
              <button onClick={() => setShowPinModal(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex space-x-4">
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="flex-1 border border-blue-200 rounded-lg p-2"
              />
              <button
                onClick={handlePinSubmit}
                className="px-6 py-2 bg-yellow-400 rounded-lg"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Successful</h2>
              <p className="text-gray-600 mb-6">
                Your status has been changed.
              </p>
              <button
                className="w-full px-4 py-2 bg-yellow-400 rounded-lg"
                onClick={() => setShowSuccessModal(false)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-4xl text-black mx-auto bg-white p-8 mt-8 rounded-md shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">
          Agency Registration Form
        </h2>
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-700"
              >
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="idNumber"
                className="block text-sm font-medium text-gray-700"
              >
                National Identification Number/Passport Number
              </label>
              <input
                type="text"
                id="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="education"
                className="block text-sm font-medium text-gray-700"
              >
                Education Qualification
              </label>
              <input
                type="text"
                id="education"
                value={formData.education}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-gray-700"
              >
                Skills Acquired
              </label>
              <input
                type="text"
                id="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="languages"
                className="block text-sm font-medium text-gray-700"
              >
                Languages Spoken
              </label>
              <input
                type="text"
                id="languages"
                value={formData.languages}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4">Permanent Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <select
                id="state"
                value={formData.state}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <select
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4">
            Agency Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="agencyLogo"
                className="block text-sm font-medium text-gray-700"
              >
                Agency Logo
              </label>
              <input
                type="file"
                id="agencyLogo"
                onChange={handleFileChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="agencyName"
                className="block text-sm font-medium text-gray-700"
              >
                Agency Name
              </label>
              <input
                type="text"
                id="agencyName"
                value={formData.agencyName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="serviceDivision"
                className="block text-sm font-medium text-gray-700"
              >
                Service Division
              </label>
              <select
                id="serviceDivision"
                value={formData.serviceDivision}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="grade"
                className="block text-sm font-medium text-gray-700"
              >
                Grade
              </label>
              <select
                id="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>1</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="employee"
                className="block text-sm font-medium text-gray-700"
              >
                Employee
              </label>
              <select
                id="employee"
                value={formData.employee}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>5-10</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="servicePeriod"
                className="block text-sm font-medium text-gray-700"
              >
                Service Period
              </label>
              <select
                id="servicePeriod"
                value={formData.servicePeriod}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>1 year</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="serviceArea"
                className="block text-sm font-medium text-gray-700"
              >
                Service Area
              </label>
              <select
                id="serviceArea"
                value={formData.serviceArea}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="phoneNumberAgency"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <select
                id="phoneNumberAgency"
                value={formData.phoneNumberAgency}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Code 91</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="emailAgency"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="emailAgency"
                value={formData.emailAgency}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4">
            {"Agency's Physical Address"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="countryAgency"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="countryAgency"
                value={formData.countryAgency}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="stateAgency"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <select
                id="stateAgency"
                value={formData.stateAgency}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="cityAgency"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <select
                id="cityAgency"
                value={formData.cityAgency}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="zipCodeAgency"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCodeAgency"
                value={formData.zipCodeAgency}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="addressAgency"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="addressAgency"
                value={formData.addressAgency}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="currency"
                className="block text-sm font-medium text-gray-700"
              >
                Currency
              </label>
              <select
                id="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>USD</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="feeAmount"
                className="block text-sm font-medium text-gray-700"
              >
                Fee Amount
              </label>
              <input
                type="text"
                id="feeAmount"
                value={formData.feeAmount}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="depositAccount"
                className="block text-sm font-medium text-gray-700"
              >
                Deposit Account
              </label>
              <input
                type="text"
                id="depositAccount"
                value={formData.depositAccount}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4">
            Description of Services
          </h3>
          <div>
            <textarea
              id="description"
              rows={5}
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">
                I agree to all Terms and conditions, privacy policy
              </span>
            </label>
          </div>
        </form>
      </main>
    </>
  );
}
