const PaymentDescription = ({ paymentData }) => {
  return (
    <div className="bg-white mt-4">
      <p className="font-semibold items-start text-left">
        Dear, {paymentData?.Name}
      </p>
      <p className="font-semibold mb-4 items-start text-left">
        You have paid{" "}
        <span className="font-bold">{paymentData?.payAmount}</span>{" "}
        {paymentData?.Currency} to {paymentData?.bankid?.name}.{" "}
        <span className="text-[#5296D6]">
          Your payment status is {paymentData?.status}
        </span>
      </p>
    </div>
  );
};

export default PaymentDescription;
