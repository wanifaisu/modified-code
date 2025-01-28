export const treeData = [
  {
    title: "Main Admin",
    value: "admin",
    key: "admin",
  },
  {
    title: "Dashboards",
    value: "dashboard",
    key: "dashboard",
    children: [
      {
        title: "View",
        value: "view",
        key: "view",
      },
    ],
  },
  {
    title: "Monthly Pay Track",
    value: "monthlyPay",
    key: "monthlyPay",
    children: [
      {
        title: "View",
        value: "view",
        key: "view",
      },
    ],
  },
  {
    title: "User",
    value: "user",
    key: "user",
    children: [
      {
        title: "View",
        value: "view",
        key: "view",
        children: [
          {
            title: "profile",
            value: "profile",
            key: "profile",
          },
          {
            title: "Orders",
            value: "order",
            key: "order",
          },
          {
            title: "Payment",
            value: "payment",
            key: "payment",
          },
          {
            title: "Refund",
            value: "refund",
            key: "refund",
          },
        ],
      },
      {
        title: "Edit",
        value: "edit",
        key: "edit",
        children: [
          {
            title: "Settings",
            value: "Settings",
            key: "Settings",
            children: [
              {
                title: "Account Delete",
                value: "accountDelete",
                key: "accountDelete",
              },
              {
                title: "Account Active",
                value: "accountActive",
                key: "accountActive",
              },
              {
                title: "Account Block",
                value: "accountBlock",
                key: "accountBlock",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Order Access",
    value: "orders",
    key: "orders",
    children: [
      {
        title: "Pending",
        value: "orders-pending",
        key: "orders-pending",
      },
      {
        title: "Payment",
        value: "orders-payment",
        key: "orders-payment",
      },
      {
        title: "Waiting",
        value: "orders-waiting",
        key: "orders-waiting",
      },
      {
        title: "Working",
        value: "orders-working",
        key: "orders-working",
      },
      {
        title: "Complete",
        value: "orders-complete",
        key: "orders-complete",
      },
      {
        title: "Canceled",
        value: "orders-canceled",
        key: "orders-canceled",
      },
    ],
  },
  {
    title: "Contact Us",
    value: "contactUs",
    key: "0-1",
    children: [
      {
        title: "All",
        value: "all",
        key: "all",
      },
    ],
  },
  {
    title: "Live Chat",
    value: "liveChat",
    key: "liveChat",
    children: [
      {
        title: "Offline Payment Issue",
        value: "liveChat-oflinePaymentIssue",
        key: "liveChat-oflinePaymentIssue",
      },
      {
        title: "Online Payment Issue",
        value: "liveChat-onlinePaymentIssue",
        key: "liveChat-onlinePaymentIssue",
      },
      {
        title: "Order Problems",
        value: "liveChat-orderProblems",
        key: "liveChat-orderProblems",
      },
      {
        title: "Account Problems",
        value: "liveChat-accountProblems",
        key: "liveChat-accountProblems",
      },
      {
        title: "Work Problem",
        value: "liveChat-workProblems",
        key: "liveChat-workProblems",
      },
      {
        title: "Others",
        value: "liveChat-others",
        key: "liveChat-others",
      },
    ],
  },
];
