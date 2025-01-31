import React from "react";

type OrderItem = {
  name: string;
  bank: string;
  amount: string;
  time: string;
};

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: OrderItem[];
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, orders }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed text-black -mt-4 top-24 z-50 flex items-center justify-end">
      <div className="bg-white rounded-lg shadow-lg w-80 p-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-4 mt-2">
          <h2 className="text-lg font-bold">New Order</h2>
          <span className="text-gray-600 mr-4">New 59</span>
        </div>

        {/* Transaction list */}
        <div className="space-y-3">
          {orders.map((order, index) => (
            <div
              key={index}
              className="p-3 bg-white rounded-lg border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-900">{order.name}</p>
                  <p className="text-sm text-gray-500">{order.bank}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{order.amount}</p>
                  <p className="text-sm text-gray-500">{order.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 text-right">
          <button className="text-gray-600 text-sm">see All Orders</button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
