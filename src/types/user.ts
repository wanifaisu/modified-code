export type Finance = {
  total_order: number
  total_amount: number
  total_paid: number
  money_left: number
  refund_amount: number
  profit: number
}

export type IUser = {
  userNumber: string
  no: number
  _id: string
  finance: Finance // Add the finance property here
  suspend: number
  status: string
}

// export type IUser = {
//   no: number;
//   userId: string;
//   userName: string;
//   gender: string;
//   email?: string;
//   country: string;
//   totalOrder: number;
//   totalAmount?: number;
//   totalPaid: number;
//   moneyLeft: number;
//   refundAmount: number;
//   profit?: number;
//   suspend?: number;
//   status?: string;
// };
