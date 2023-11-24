/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/v2/organizations/{organizationId}/billing/update-subscription": {
    put: operations["updateSubscription"];
  };
  "/v2/organizations/{organizationId}/billing/self-hosted-ee/refresh-subscriptions": {
    put: operations["refreshSelfHostedEeSubscriptions"];
  };
  "/v2/organizations/{organizationId}/billing/refresh-subscription": {
    put: operations["refresh"];
  };
  "/v2/organizations/{organizationId}/billing/prepare-update-subscription": {
    put: operations["prepareUpdateSubscription"];
  };
  "/v2/organizations/{organizationId}/billing/cancel-subscription": {
    put: operations["cancelSubscription"];
  };
  "/v2/administration/billing/self-hosted-ee-plans/{planId}": {
    get: operations["getPlan"];
    put: operations["updatePlan"];
    delete: operations["deletePlan"];
  };
  "/v2/administration/billing/cloud-plans/{planId}": {
    get: operations["getPlan_1"];
    put: operations["updatePlan_1"];
    delete: operations["deletePlan_1"];
  };
  "/v2/organizations/{organizationId}/billing/subscribe": {
    post: operations["subscribe"];
  };
  "/v2/organizations/{organizationId}/billing/self-hosted-ee/subscriptions": {
    get: operations["getSelfHostedEeSubscriptions"];
    post: operations["setupEeSubscription"];
  };
  "/v2/organizations/{organizationId}/billing/buy-more-credits": {
    post: operations["getBuyMoreCreditsCheckoutSessionUrl"];
  };
  "/v2/administration/billing/self-hosted-ee-plans": {
    get: operations["getPlans_1"];
    post: operations["create"];
  };
  "/v2/administration/billing/cloud-plans": {
    get: operations["getPlans_2"];
    post: operations["create_1"];
  };
  "/v2/public/billing/plans": {
    get: operations["getPlans"];
  };
  "/v2/public/billing/mt-credit-prices": {
    get: operations["getMtCreditPrices"];
  };
  "/v2/organizations/{organizationId}/billing/subscription": {
    get: operations["getSubscription"];
  };
  "/v2/organizations/{organizationId}/billing/self-hosted-ee/subscriptions/{subscriptionId}/expected-usage": {
    get: operations["getExpectedUsage"];
  };
  "/v2/organizations/{organizationId}/billing/self-hosted-ee/plans": {
    get: operations["getSelfHostedPlans"];
  };
  "/v2/organizations/{organizationId}/billing/plans": {
    get: operations["getCloudPlans"];
  };
  "/v2/organizations/{organizationId}/billing/invoices": {
    /** Returns organization invoices */
    get: operations["getInvoices"];
  };
  "/v2/organizations/{organizationId}/billing/invoices/{invoiceId}/usage": {
    get: operations["getUsage"];
  };
  "/v2/organizations/{organizationId}/billing/invoices/{invoiceId}/usage/{type}.csv": {
    get: operations["getUsageDetail"];
  };
  "/v2/organizations/{organizationId}/billing/invoices/{invoiceId}/pdf": {
    /** Returns organization invoices */
    get: operations["getInvoicePdf"];
  };
  "/v2/organizations/{organizationId}/billing/expected-usage": {
    get: operations["getExpectedUsage_1"];
  };
  "/v2/organizations/{organizationId}/billing/customer-portal": {
    get: operations["goToCustomerPortal"];
  };
  "/v2/organizations/{organizationId}/billing/billing-info": {
    get: operations["getBillingInfo"];
  };
  "/v2/administration/billing/stripe-products": {
    get: operations["getStripeProducts"];
  };
  "/v2/administration/billing/self-hosted-ee-plans/{planId}/organizations": {
    get: operations["getPlanOrganizations"];
  };
  "/v2/administration/billing/features": {
    get: operations["getAllFeatures"];
  };
  "/v2/administration/billing/cloud-plans/{planId}/organizations": {
    get: operations["getPlanOrganizations_1"];
  };
  "/v2/organizations/{organizationId}/billing/self-hosted-ee/subscriptions/{subscriptionId}": {
    delete: operations["cancelEeSubscription"];
  };
}

export interface components {
  schemas: {
    UpdateSubscriptionRequest: {
      token: string;
    };
    CollectionModelSelfHostedEeSubscriptionModel: {
      _embedded?: {
        subscriptions?: components["schemas"]["SelfHostedEeSubscriptionModel"][];
      };
    };
    Links: { [key: string]: components["schemas"]["Link"] };
    PlanIncludedUsageModel: {
      /** Format: int64 */
      seats: number;
      /** Format: int64 */
      translationSlots: number;
      /** Format: int64 */
      translations: number;
      /** Format: int64 */
      mtCredits: number;
    };
    PlanPricesModel: {
      perSeat: number;
      perThousandTranslations?: number;
      perThousandMtCredits?: number;
      subscriptionMonthly: number;
      subscriptionYearly: number;
    };
    SelfHostedEePlanModel: {
      /** Format: int64 */
      id: number;
      name: string;
      public: boolean;
      enabledFeatures: (
        | "GRANULAR_PERMISSIONS"
        | "PRIORITIZED_FEATURE_REQUESTS"
        | "PREMIUM_SUPPORT"
        | "DEDICATED_SLACK_CHANNEL"
        | "ASSISTED_UPDATES"
        | "DEPLOYMENT_ASSISTANCE"
        | "BACKUP_CONFIGURATION"
        | "TEAM_TRAINING"
        | "ACCOUNT_MANAGER"
        | "STANDARD_SUPPORT"
        | "PROJECT_LEVEL_CONTENT_STORAGES"
        | "WEBHOOKS"
        | "MULTIPLE_CONTENT_DELIVERY_CONFIGS"
      )[];
      prices: components["schemas"]["PlanPricesModel"];
      includedUsage: components["schemas"]["PlanIncludedUsageModel"];
      hasYearlyPrice: boolean;
    };
    SelfHostedEeSubscriptionModel: {
      /** Format: int64 */
      id: number;
      /** Format: int64 */
      currentPeriodStart?: number;
      /** Format: int64 */
      currentPeriodEnd?: number;
      currentBillingPeriod: "MONTHLY" | "YEARLY";
      /** Format: int64 */
      createdAt: number;
      plan: components["schemas"]["SelfHostedEePlanModel"];
      status:
        | "ACTIVE"
        | "CANCELED"
        | "PAST_DUE"
        | "UNPAID"
        | "ERROR"
        | "KEY_USED_BY_ANOTHER_INSTANCE";
      licenseKey?: string;
      estimatedCosts?: number;
    };
    CloudPlanModel: {
      /** Format: int64 */
      id: number;
      name: string;
      free: boolean;
      enabledFeatures: (
        | "GRANULAR_PERMISSIONS"
        | "PRIORITIZED_FEATURE_REQUESTS"
        | "PREMIUM_SUPPORT"
        | "DEDICATED_SLACK_CHANNEL"
        | "ASSISTED_UPDATES"
        | "DEPLOYMENT_ASSISTANCE"
        | "BACKUP_CONFIGURATION"
        | "TEAM_TRAINING"
        | "ACCOUNT_MANAGER"
        | "STANDARD_SUPPORT"
        | "PROJECT_LEVEL_CONTENT_STORAGES"
        | "WEBHOOKS"
        | "MULTIPLE_CONTENT_DELIVERY_CONFIGS"
      )[];
      type: "PAY_AS_YOU_GO" | "FIXED" | "SLOTS_FIXED";
      prices: components["schemas"]["PlanPricesModel"];
      includedUsage: components["schemas"]["PlanIncludedUsageModel"];
      hasYearlyPrice: boolean;
      public: boolean;
    };
    CloudSubscriptionModel: {
      /** Format: int64 */
      organizationId: number;
      plan: components["schemas"]["CloudPlanModel"];
      /** Format: int64 */
      currentPeriodStart?: number;
      /** Format: int64 */
      currentPeriodEnd?: number;
      currentBillingPeriod?: "MONTHLY" | "YEARLY";
      cancelAtPeriodEnd: boolean;
      estimatedCosts?: number;
      /** Format: int64 */
      createdAt: number;
    };
    UpdateSubscriptionPrepareRequest: {
      /**
       * Format: int64
       * @description Id of the subscription plan
       */
      planId: number;
      period: "MONTHLY" | "YEARLY";
    };
    SubscriptionUpdatePreviewItem: {
      description: string;
      amount: number;
      taxRate: number;
    };
    SubscriptionUpdatePreviewModel: {
      items: components["schemas"]["SubscriptionUpdatePreviewItem"][];
      total: number;
      amountDue: number;
      updateToken: string;
      /** Format: int64 */
      prorationDate: number;
      endingBalance: number;
    };
    PlanIncludedUsageRequest: {
      /** Format: int64 */
      seats: number;
      /** Format: int64 */
      translations: number;
      /** Format: int64 */
      mtCredits: number;
    };
    PlanPricesRequest: {
      perSeat: number;
      perThousandTranslations?: number;
      perThousandMtCredits?: number;
      subscriptionMonthly: number;
      subscriptionYearly: number;
    };
    SelfHostedEePlanRequest: {
      name: string;
      free: boolean;
      enabledFeatures: (
        | "GRANULAR_PERMISSIONS"
        | "PRIORITIZED_FEATURE_REQUESTS"
        | "PREMIUM_SUPPORT"
        | "DEDICATED_SLACK_CHANNEL"
        | "ASSISTED_UPDATES"
        | "DEPLOYMENT_ASSISTANCE"
        | "BACKUP_CONFIGURATION"
        | "TEAM_TRAINING"
        | "ACCOUNT_MANAGER"
        | "STANDARD_SUPPORT"
        | "PROJECT_LEVEL_CONTENT_STORAGES"
        | "WEBHOOKS"
        | "MULTIPLE_CONTENT_DELIVERY_CONFIGS"
      )[];
      prices: components["schemas"]["PlanPricesRequest"];
      includedUsage: components["schemas"]["PlanIncludedUsageRequest"];
      public: boolean;
      stripeProductId: string;
      /** Format: date-time */
      notAvailableBefore?: string;
      /** Format: date-time */
      availableUntil?: string;
      /** Format: date-time */
      usableUntil?: string;
      forOrganizationIds: number[];
    };
    SelfHostedEePlanAdministrationModel: {
      /** Format: int64 */
      id: number;
      name: string;
      public: boolean;
      enabledFeatures: (
        | "GRANULAR_PERMISSIONS"
        | "PRIORITIZED_FEATURE_REQUESTS"
        | "PREMIUM_SUPPORT"
        | "DEDICATED_SLACK_CHANNEL"
        | "ASSISTED_UPDATES"
        | "DEPLOYMENT_ASSISTANCE"
        | "BACKUP_CONFIGURATION"
        | "TEAM_TRAINING"
        | "ACCOUNT_MANAGER"
        | "STANDARD_SUPPORT"
        | "PROJECT_LEVEL_CONTENT_STORAGES"
        | "WEBHOOKS"
        | "MULTIPLE_CONTENT_DELIVERY_CONFIGS"
      )[];
      prices: components["schemas"]["PlanPricesModel"];
      includedUsage: components["schemas"]["PlanIncludedUsageModel"];
      hasYearlyPrice: boolean;
      stripeProductId: string;
      forOrganizationIds: number[];
    };
    CloudPlanRequest: {
      name: string;
      free: boolean;
      enabledFeatures: (
        | "GRANULAR_PERMISSIONS"
        | "PRIORITIZED_FEATURE_REQUESTS"
        | "PREMIUM_SUPPORT"
        | "DEDICATED_SLACK_CHANNEL"
        | "ASSISTED_UPDATES"
        | "DEPLOYMENT_ASSISTANCE"
        | "BACKUP_CONFIGURATION"
        | "TEAM_TRAINING"
        | "ACCOUNT_MANAGER"
        | "STANDARD_SUPPORT"
        | "PROJECT_LEVEL_CONTENT_STORAGES"
        | "WEBHOOKS"
        | "MULTIPLE_CONTENT_DELIVERY_CONFIGS"
      )[];
      type: "PAY_AS_YOU_GO" | "FIXED" | "SLOTS_FIXED";
      prices: components["schemas"]["PlanPricesRequest"];
      includedUsage: components["schemas"]["PlanIncludedUsageRequest"];
      public: boolean;
      stripeProductId: string;
      /** Format: date-time */
      notAvailableBefore?: string;
      /** Format: date-time */
      availableUntil?: string;
      /** Format: date-time */
      usableUntil?: string;
      forOrganizationIds: number[];
    };
    CloudPlanAdministrationModel: {
      /** Format: int64 */
      id: number;
      name: string;
      free: boolean;
      enabledFeatures: (
        | "GRANULAR_PERMISSIONS"
        | "PRIORITIZED_FEATURE_REQUESTS"
        | "PREMIUM_SUPPORT"
        | "DEDICATED_SLACK_CHANNEL"
        | "ASSISTED_UPDATES"
        | "DEPLOYMENT_ASSISTANCE"
        | "BACKUP_CONFIGURATION"
        | "TEAM_TRAINING"
        | "ACCOUNT_MANAGER"
        | "STANDARD_SUPPORT"
        | "PROJECT_LEVEL_CONTENT_STORAGES"
        | "WEBHOOKS"
        | "MULTIPLE_CONTENT_DELIVERY_CONFIGS"
      )[];
      type: "PAY_AS_YOU_GO" | "FIXED" | "SLOTS_FIXED";
      prices: components["schemas"]["PlanPricesModel"];
      includedUsage: components["schemas"]["PlanIncludedUsageModel"];
      hasYearlyPrice: boolean;
      public: boolean;
      stripeProductId: string;
      forOrganizationIds: number[];
    };
    CloudSubscribeRequest: {
      /**
       * Format: int64
       * @description Id of the subscription plan
       */
      planId: number;
      period: "MONTHLY" | "YEARLY";
    };
    SubscribeModel: {
      url: string;
    };
    SelfHostedEeSubscribeRequest: {
      /**
       * Format: int64
       * @description Id of the subscription plan
       */
      planId: number;
      period: "MONTHLY" | "YEARLY";
    };
    BuyMoreCreditsRequest: {
      /** Format: int64 */
      priceId: number;
      /** Format: int64 */
      amount: number;
    };
    BuyMoreCreditsModel: {
      url: string;
    };
    CollectionModelCloudPlanModel: {
      _embedded?: {
        plans?: components["schemas"]["CloudPlanModel"][];
      };
    };
    CollectionModelMtCreditsPriceModel: {
      _embedded?: {
        prices?: components["schemas"]["MtCreditsPriceModel"][];
      };
    };
    MtCreditsPriceModel: {
      /** Format: int64 */
      id: number;
      price: number;
      /** Format: int64 */
      amount: number;
    };
    AverageProportionalUsageItemModel: {
      total: number;
      unusedQuantity: number;
      usedQuantity: number;
      usedQuantityOverPlan: number;
    };
    SumUsageItemModel: {
      total: number;
      /** Format: int64 */
      unusedQuantity: number;
      /** Format: int64 */
      usedQuantity: number;
      /** Format: int64 */
      usedQuantityOverPlan: number;
    };
    UsageModel: {
      subscriptionPrice?: number;
      /** @description Relevant for invoices only. When there are applied stripe credits, we need to reduce the total price by this amount. */
      appliedStripeCredits?: number;
      seats: components["schemas"]["AverageProportionalUsageItemModel"];
      translations: components["schemas"]["AverageProportionalUsageItemModel"];
      credits?: components["schemas"]["SumUsageItemModel"];
      total: number;
    };
    CollectionModelSelfHostedEePlanModel: {
      _embedded?: {
        plans?: components["schemas"]["SelfHostedEePlanModel"][];
      };
    };
    InvoiceModel: {
      /** Format: int64 */
      id: number;
      /** @description The number on the invoice */
      number: string;
      /** Format: int64 */
      createdAt: number;
      /** @description The Total amount with tax */
      total: number;
      taxRatePercentage?: number;
      /** @description Whether pdf is ready to download. If not, wait around few minutes until it's generated. */
      pdfReady: boolean;
      hasUsage: boolean;
    };
    PageMetadata: {
      /** Format: int64 */
      size?: number;
      /** Format: int64 */
      totalElements?: number;
      /** Format: int64 */
      totalPages?: number;
      /** Format: int64 */
      number?: number;
    };
    PagedModelInvoiceModel: {
      _embedded?: {
        invoices?: components["schemas"]["InvoiceModel"][];
      };
      page?: components["schemas"]["PageMetadata"];
    };
    GoToCustomerPortalModel: {
      url: string;
    };
    BillingInfoModel: {
      name?: string;
      street?: string;
      street2?: string;
      city?: string;
      zip?: string;
      state?: string;
      countryIso?: string;
      registrationNo?: string;
      vatNo?: string;
      email?: string;
    };
    CollectionModelStripeProductModel: {
      _embedded?: {
        stripeProductModels?: components["schemas"]["StripeProductModel"][];
      };
    };
    StripeProductModel: {
      id: string;
      name: string;
      /** Format: int64 */
      created: number;
    };
    CollectionModelSelfHostedEePlanAdministrationModel: {
      _embedded?: {
        plans?: components["schemas"]["SelfHostedEePlanAdministrationModel"][];
      };
    };
    /** @example Links to avatar images */
    Avatar: {
      large: string;
      thumbnail: string;
    };
    PagedModelSimpleOrganizationModel: {
      _embedded?: {
        organizations?: components["schemas"]["SimpleOrganizationModel"][];
      };
      page?: components["schemas"]["PageMetadata"];
    };
    PermissionModel: {
      /**
       * @description Granted scopes to the user. When user has type permissions, this field contains permission scopes of the type.
       * @example KEYS_EDIT,TRANSLATIONS_VIEW
       */
      scopes: (
        | "translations.view"
        | "translations.edit"
        | "keys.edit"
        | "screenshots.upload"
        | "screenshots.delete"
        | "screenshots.view"
        | "activity.view"
        | "languages.edit"
        | "admin"
        | "project.edit"
        | "members.view"
        | "members.edit"
        | "translation-comments.add"
        | "translation-comments.edit"
        | "translation-comments.set-state"
        | "translations.state-edit"
        | "keys.view"
        | "keys.delete"
        | "keys.create"
        | "batch-jobs.view"
        | "batch-jobs.cancel"
        | "translations.batch-by-tm"
        | "translations.batch-machine"
        | "content-delivery.manage"
        | "content-delivery.publish"
        | "webhooks.manage"
      )[];
      /** @description The user's permission type. This field is null if uses granular permissions */
      type?: "NONE" | "VIEW" | "TRANSLATE" | "REVIEW" | "EDIT" | "MANAGE";
      /**
       * @deprecated
       * @description Deprecated (use translateLanguageIds).
       *
       * List of languages current user has TRANSLATE permission to. If null, all languages edition is permitted.
       * @example 200001,200004
       */
      permittedLanguageIds?: number[];
      /**
       * @description List of languages user can translate to. If null, all languages editing is permitted.
       * @example 200001,200004
       */
      translateLanguageIds?: number[];
      /**
       * @description List of languages user can view. If null, all languages view is permitted.
       * @example 200001,200004
       */
      viewLanguageIds?: number[];
      /**
       * @description List of languages user can change state to. If null, changing state of all language values is permitted.
       * @example 200001,200004
       */
      stateChangeLanguageIds?: number[];
    };
    SimpleOrganizationModel: {
      /** Format: int64 */
      id: number;
      /** @example Beautiful organization */
      name: string;
      /** @example btforg */
      slug: string;
      /** @example This is a beautiful organization full of beautiful and clever people */
      description?: string;
      basePermissions: components["schemas"]["PermissionModel"];
      avatar?: components["schemas"]["Avatar"];
    };
    CollectionModelCloudPlanAdministrationModel: {
      _embedded?: {
        plans?: components["schemas"]["CloudPlanAdministrationModel"][];
      };
    };
    Link: {
      href?: string;
      hreflang?: string;
      title?: string;
      type?: string;
      deprecation?: string;
      profile?: string;
      name?: string;
      templated?: boolean;
    };
  };
}

export interface operations {
  updateSubscription: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateSubscriptionRequest"];
      };
    };
  };
  refreshSelfHostedEeSubscriptions: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelSelfHostedEeSubscriptionModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  refresh: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CloudSubscriptionModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  prepareUpdateSubscription: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["SubscriptionUpdatePreviewModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateSubscriptionPrepareRequest"];
      };
    };
  };
  cancelSubscription: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getPlan: {
    parameters: {
      path: {
        planId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["SelfHostedEePlanAdministrationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  updatePlan: {
    parameters: {
      path: {
        planId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["SelfHostedEePlanAdministrationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SelfHostedEePlanRequest"];
      };
    };
  };
  deletePlan: {
    parameters: {
      path: {
        planId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getPlan_1: {
    parameters: {
      path: {
        planId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CloudPlanAdministrationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  updatePlan_1: {
    parameters: {
      path: {
        planId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CloudPlanAdministrationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CloudPlanRequest"];
      };
    };
  };
  deletePlan_1: {
    parameters: {
      path: {
        planId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  subscribe: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["SubscribeModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CloudSubscribeRequest"];
      };
    };
  };
  getSelfHostedEeSubscriptions: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelSelfHostedEeSubscriptionModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  setupEeSubscription: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["SubscribeModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SelfHostedEeSubscribeRequest"];
      };
    };
  };
  getBuyMoreCreditsCheckoutSessionUrl: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["BuyMoreCreditsModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["BuyMoreCreditsRequest"];
      };
    };
  };
  getPlans_1: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelSelfHostedEePlanAdministrationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  create: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["SelfHostedEePlanAdministrationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SelfHostedEePlanRequest"];
      };
    };
  };
  getPlans_2: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelCloudPlanAdministrationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  create_1: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CloudPlanAdministrationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CloudPlanRequest"];
      };
    };
  };
  getPlans: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelCloudPlanModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getMtCreditPrices: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelMtCreditsPriceModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getSubscription: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CloudSubscriptionModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getExpectedUsage: {
    parameters: {
      path: {
        organizationId: number;
        subscriptionId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["UsageModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getSelfHostedPlans: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelSelfHostedEePlanModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getCloudPlans: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelCloudPlanModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  /** Returns organization invoices */
  getInvoices: {
    parameters: {
      path: {
        organizationId: number;
      };
      query: {
        /** Zero-based page index (0..N) */
        page?: number;
        /** The size of the page to be returned */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelInvoiceModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getUsage: {
    parameters: {
      path: {
        organizationId: number;
        invoiceId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["UsageModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getUsageDetail: {
    parameters: {
      path: {
        organizationId: number;
        invoiceId: number;
        type: "SEATS" | "TRANSLATIONS";
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "text/csv": string;
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  /** Returns organization invoices */
  getInvoicePdf: {
    parameters: {
      path: {
        organizationId: number;
        invoiceId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/pdf": string;
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getExpectedUsage_1: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["UsageModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  goToCustomerPortal: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["GoToCustomerPortalModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getBillingInfo: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["BillingInfoModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getStripeProducts: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelStripeProductModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getPlanOrganizations: {
    parameters: {
      path: {
        planId: number;
      };
      query: {
        /** Zero-based page index (0..N) */
        page?: number;
        /** The size of the page to be returned */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
        search?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelSimpleOrganizationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getAllFeatures: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": (
            | "GRANULAR_PERMISSIONS"
            | "PRIORITIZED_FEATURE_REQUESTS"
            | "PREMIUM_SUPPORT"
            | "DEDICATED_SLACK_CHANNEL"
            | "ASSISTED_UPDATES"
            | "DEPLOYMENT_ASSISTANCE"
            | "BACKUP_CONFIGURATION"
            | "TEAM_TRAINING"
            | "ACCOUNT_MANAGER"
            | "STANDARD_SUPPORT"
            | "PROJECT_LEVEL_CONTENT_STORAGES"
            | "WEBHOOKS"
            | "MULTIPLE_CONTENT_DELIVERY_CONFIGS"
          )[];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  getPlanOrganizations_1: {
    parameters: {
      path: {
        planId: number;
      };
      query: {
        /** Zero-based page index (0..N) */
        page?: number;
        /** The size of the page to be returned */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
        search?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelSimpleOrganizationModel"];
        };
      };
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  cancelEeSubscription: {
    parameters: {
      path: {
        organizationId: number;
        subscriptionId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
      /** Bad Request */
      400: {
        content: {
          "*/*": string;
        };
      };
      /** Not Found */
      404: {
        content: {
          "*/*": string;
        };
      };
    };
  };
}

export interface external {}
