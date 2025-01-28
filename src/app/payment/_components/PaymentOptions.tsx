const PaymentOptions = ({ paymentData }) => {
  return (
    <div className="col-span-3 flex-1">
      <table className="w-full table-auto  text-left">
        <tbody className="text-left">
          <tr className="text-left">
            <td>Payment method</td>
            <td>:</td>
            <td>{paymentData?.paymentMethod}</td>
          </tr>
          <tr>
            <td>Account Holder Name</td>
            <td>:</td>
            <td>{paymentData?.acocuntHolderName}</td>
          </tr>
          <tr>
            <td>Account Name</td>
            <td>:</td>
            <td>{paymentData?.accountName}</td>
          </tr>
          <tr>
            <td>Account Number</td>
            <td>:</td>
            <td>{paymentData?.accountNumber}</td>
          </tr>
          <tr>
            <td>Transaction ID</td>
            <td>:</td>
            <td>{paymentData?.transactionId}</td>
          </tr>
          <tr>
            <td>Transaction Receipt</td>
            <td>:</td>
            <td>{paymentData?.transactionReceipt ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Any Additional information</td>
            <td>:</td>
            <td>{paymentData?.additionalNote}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentOptions;
