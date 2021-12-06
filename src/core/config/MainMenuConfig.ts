const DocMenuConfig = [
  // Top Pages
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        svgIcon: "media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
      {
        sectionTitle: "gettingStarted",
        route: "/getting-started",
        svgIcon: "media/icons/duotune/coding/cod001.svg",
        // fontIcon: "bi-layers",
        sub: [
          {
            heading: "Items",
            route: "dummy-route",
          },
          {
            heading: "Customer List",
            route: "dummy-route",
          },
          {
            heading: "Supplier",
            route: "dummy-route",
          },
          {
            heading: "Chart of Accounts",
            route: "dummy-route",
          },
          {
            heading: "Truck Drivers",
            route: "dummy-route",
          },
        ],
      },
    ],
  },

  // ***Bottom Menus***

  // Buying

  {
    heading: "buying",
    route: "/buying",
    pages: [
      {
        heading: "LC / Purchase Order",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Purchase Invoice",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Truck Loading For Purchase",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
    ],
  },

  // Selling

  {
    heading: "selling",
    route: "/selling",
    pages: [
      {
        heading: "Sales Order",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Sales Invoice",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Projects",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Truck Loading For Deliver",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
    ],
  },

  // Accounting

  {
    heading: "accounting",
    route: "/accounting",
    pages: [
      {
        heading: "Sales Invoice",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Payment Entry",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Manage Generator",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
    ],
  },

  // Stock

  {
    heading: "stock",
    route: "/stock",
    pages: [
      {
        heading: "Stock Entry",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Item Delivery",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Purchase Receipt",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Stock Reconciliation",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
    ],
  },

  // Reports

  {
    heading: "reports",
    route: "/reports",
    pages: [
      {
        heading: "Stock Ledger",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Stock Balance",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Accounts Receivable",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Accounts Receivablen",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Accounts Receivablen",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Profit & Loss",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Bank Statement",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Cash Statement",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "A/C Receivable Summary",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "A/C Payable Summary",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Sales Report",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Purchase Report",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
    ],
  },

  // Settings

  {
    heading: "settings",
    route: "/settings",
    pages: [
      {
        heading: "Stock settings",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
      {
        heading: "Warehouse",
        route: "dummy-route",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
      },
    ],
  },

  {
    heading: "craft",
    route: "/crafted",
    pages: [
      {
        sectionTitle: "pages",
        route: "/pages",
        svgIcon: "media/icons/duotune/general/gen022.svg",
        fontIcon: "bi-archive",
        sub: [
          {
            sectionTitle: "profile",
            route: "/profile",
            sub: [
              {
                heading: "profileOverview",
                route: "/crafted/pages/profile/overview",
              },
              {
                heading: "projects",
                route: "/crafted/pages/profile/projects",
              },
              {
                heading: "campaigns",
                route: "/crafted/pages/profile/campaigns",
              },
              {
                heading: "documents",
                route: "/crafted/pages/profile/documents",
              },
              {
                heading: "connections",
                route: "/crafted/pages/profile/connections",
              },
              {
                heading: "activity",
                route: "/crafted/pages/profile/activity",
              },
            ],
          },
          {
            sectionTitle: "wizards",
            route: "/wizard",
            sub: [
              {
                heading: "horizontal",
                route: "/crafted/pages/wizards/horizontal",
              },
              {
                heading: "vertical",
                route: "/crafted/pages/wizards/vertical",
              },
            ],
          },
        ],
      },
      {
        sectionTitle: "account",
        route: "/account",
        svgIcon: "media/icons/duotune/communication/com006.svg",
        fontIcon: "bi-person",
        sub: [
          {
            heading: "accountOverview",
            route: "/crafted/account/overview",
          },
          {
            heading: "settings",
            route: "/crafted/account/settings",
          },
        ],
      },
      {
        sectionTitle: "authentication",
        svgIcon: "media/icons/duotune/technology/teh004.svg",
        fontIcon: "bi-sticky",
        sub: [
          {
            sectionTitle: "basicFlow",
            sub: [
              {
                heading: "signIn",
                route: "/sign-in",
              },
              {
                heading: "signUp",
                route: "/sign-up",
              },
              {
                heading: "passwordReset",
                route: "/password-reset",
              },
            ],
          },
          {
            heading: "error404",
            route: "/404",
          },
          {
            heading: "error500",
            route: "/500",
          },
        ],
      },
      {
        sectionTitle: "modals",
        route: "/modals",
        svgIcon: "media/icons/duotune/art/art009.svg",
        fontIcon: "bi-shield-check",
        sub: [
          {
            sectionTitle: "general",
            route: "/general",
            sub: [
              {
                heading: "inviteFriends",
                route: "/crafted/modals/general/invite-friends",
              },
              {
                heading: "viewUsers",
                route: "/crafted/modals/general/view-user",
              },
              {
                heading: "upgradePlan",
                route: "/crafted/modals/general/upgrade-plan",
              },
              {
                heading: "shareAndEarn",
                route: "/crafted/modals/general/share-and-earn",
              },
            ],
          },
          {
            sectionTitle: "forms",
            route: "/forms",
            sub: [
              {
                heading: "newTarget",
                route: "/crafted/modals/forms/new-target",
              },
              {
                heading: "newCard",
                route: "/crafted/modals/forms/new-card",
              },
              {
                heading: "newAddress",
                route: "/crafted/modals/forms/new-address",
              },
              {
                heading: "createAPIKey",
                route: "/crafted/modals/forms/create-api-key",
              },
            ],
          },
          {
            sectionTitle: "wizards",
            route: "/wizards",
            sub: [
              {
                heading: "twoFactorAuth",
                route: "/crafted/modals/wizards/two-factor-auth",
              },
              {
                heading: "createApp",
                route: "/crafted/modals/wizards/create-app",
              },
              {
                heading: "createAccount",
                route: "/crafted/modals/wizards/create-account",
              },
            ],
          },
        ],
      },
      {
        sectionTitle: "widgets",
        route: "/widgets",
        svgIcon: "media/icons/duotune/general/gen025.svg",
        fontIcon: "bi-layers",
        sub: [
          {
            heading: "widgetsLists",
            route: "/crafted/widgets/lists",
          },
          {
            heading: "widgetsStatistics",
            route: "/crafted/widgets/statistics",
          },
          {
            heading: "widgetsCharts",
            route: "/crafted/widgets/charts",
          },
          {
            heading: "widgetsMixed",
            route: "/crafted/widgets/mixed",
          },
          {
            heading: "widgetsTables",
            route: "/crafted/widgets/tables",
          },
          {
            heading: "widgetsFeeds",
            route: "/crafted/widgets/feeds",
          },
        ],
      },
    ],
  },

  {
    heading: "apps",
    route: "/apps",
    pages: [
      {
        sectionTitle: "customers",
        route: "/customers",
        svgIcon: "media/icons/duotune/finance/fin006.svg",
        fontIcon: "bi-printer",
        sub: [
          {
            heading: "gettingStarted",
            route: "/apps/customers/getting-started",
          },
          {
            heading: "customersListing",
            route: "/apps/customers/customers-listing",
          },
          {
            heading: "customerDetails",
            route: "/apps/customers/customer-details",
          },
        ],
      },
      {
        sectionTitle: "subscriptions",
        route: "/subscriptions",
        svgIcon: "media/icons/duotune/ecommerce/ecm002.svg",
        fontIcon: "bi-cart",
        sub: [
          {
            heading: "getStarted",
            route: "/subscriptions/getting-started",
          },
          {
            heading: "subscriptionList",
            route: "/subscriptions/subscription-list",
          },
          {
            heading: "addSubscription",
            route: "/subscriptions/add-subscription",
          },
          {
            heading: "viewSubscription",
            route: "/subscriptions/view-subscription",
          },
        ],
      },
      {
        heading: "calendarApp",
        route: "/apps/calendar",
        svgIcon: "media/icons/duotune/general/gen014.svg",
        fontIcon: "bi-calendar3-event",
      },
      {
        sectionTitle: "chat",
        route: "/chat",
        svgIcon: "media/icons/duotune/communication/com012.svg",
        fontIcon: "bi-chat-left",
        sub: [
          {
            heading: "privateChat",
            route: "/apps/chat/private-chat",
          },
          {
            heading: "groupChat",
            route: "/apps/chat/group-chat",
          },
          {
            heading: "drawerChat",
            route: "/apps/chat/drawer-chat",
          },
        ],
      },
    ],
  },

  {
    heading: "-------",
    route: "/builder",
    pages: [
      {
        heading: "layoutBuilder",
        route: "/builder",
        svgIcon: "media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-layers",
      },
    ]
  }
];

export default DocMenuConfig;
