import { formatDate3 } from "@/lib/formatDate";

const PaymentReception = ({ paymentData }) => {
  return (
    <div className="grid grid-cols-2">
      <h3 className="font-semibold text-2xl text-blue-600 text-left">
        Payment Reception
      </h3>
      <div className="font-semibold items-start text-[#FFB200] flex justify-center">
        <div className="text-left">
          <p>Payment ID: {paymentData?.paymentID}</p>
          <p>Payment Date: {formatDate3(paymentData?.paymentDay)}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentReception;
