export type IPayment = {
  sl: number
  id: number
  ProjectName: string
  paymentType: string
  paymentID: string
  paymentMethod: string
  accountName: string
  accountNumber: string
  payAmount: number
  paymentDay: string
  acocuntHolderName: string
  transactionId: string
  transactionReceipt: string
  additionalNote: string
  Currency: string
  Name: string
  status: string
}

// export type IPayment = {
//   sl: number;
//   paymentID: string;
//   ProjectName: string;
//   paymentType: string;
//   accountName: string;
//   accountNumber: string;
//   transactionId: string;
//   payAmount : number;
//   paymentDay: string;
//   status: string;

// }
export type IWithdraw = {
  sl: number
  withdrawId: string
  projectName: string
  withdrawMethod: string
  accountName: string
  accountNumber: string
  withdrawAmount: number
  withdrawDay: string
  status: string
}
