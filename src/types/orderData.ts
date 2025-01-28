export interface OrderData {
  sl: number
  id: number
  orderNumber: string
  applicantsName: string
  projectName: string
  dateOfOrder: string
  projectAmount: number
  totalPaidAmount: number
  moneyLeft: number
  projectDeliveryDay: string
  profit: number
  referenceName: string
  minimumPay: number
  projectRequirement: string
  projectType: string
  userSignature: string
  acceptedTerms: Boolean
  projectDetails: string
  payCurrency: string
  Budget: string
  projectFiles: string
  //status: "Pending" | "Waiting" | "Working" | "Completed" |  "Delivery"| "Cancel" | "Payment";
  status:
    | 'Pending'
    | 'Payment'
    | 'Waiting'
    | 'Working'
    | 'Complete'
    | 'Delivery'
    | 'Cancel'

  view?: string
}
