import Image from "next/image";
import React from "react";

// Define the type for the order items
type SavingsItem = {
  name: string;
  avatar: string;
  bank: string;
  balance: string;
  time: string;
};

// Define the type for modal props
interface SavingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savings: SavingsItem[];
}

const SavingsModal: React.FC<SavingsModalProps> = ({ isOpen, onClose, savings }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed mt-28 inset-28 z-50 flex items-center justify-end bg-black bg-opacity-50">
      <div className="bg-[#fff] p-6 rounded-lg shadow-lg max-w-md w-fit">
        {/* Modal header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold">Savings</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
          x
          </button>
        </div>

        {/* Order list */}
        <ul className="space-y-4">
          {savings.map((savings, index) => (
            <li key={index} className="flex items-center space-x-3">
              {/* Avatar */}
              <Image
              width={30}
              height={32}
                src={savings.avatar}
                alt={savings.name}
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* Name and role */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{savings.name}</p>
                <p className="text-sm text-gray-600">{savings.bank}</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{savings.balance}</p>
                <p className="text-sm text-gray-500">{savings.time}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* View All button */}
        <div className="mt-6 flex justify-center">
          <button className="py-2 px-4 bg-[#ffb200] text-black font-semibold rounded hover:bg-yellow-600 transition">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavingsModal;
