"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.MenuSortField = exports.MenuItemsSortField = exports.MenuErrorCode = exports.MeasurementUnitsEnum = exports.LanguageCodeEnum = exports.JobStatusEnum = exports.InvoiceErrorCode = exports.GiftCardSortField = exports.GiftCardSettingsExpiryTypeEnum = exports.GiftCardSettingsErrorCode = exports.GiftCardEventsEnum = exports.GiftCardErrorCode = exports.FulfillmentStatus = exports.FileTypesEnum = exports.ExternalNotificationErrorCodes = exports.ExportScope = exports.ExportFileSortField = exports.ExportEventsEnum = exports.ExportErrorCode = exports.EventDeliveryStatusEnum = exports.EventDeliverySortField = exports.EventDeliveryAttemptSortField = exports.DistanceUnitsEnum = exports.DiscountValueTypeEnum = exports.DiscountStatusEnum = exports.DiscountErrorCode = exports.CustomerEventsEnum = exports.CountryCode = exports.ConfigurationTypeFieldEnum = exports.CollectionSortField = exports.CollectionPublished = exports.CollectionErrorCode = exports.CheckoutSortField = exports.CheckoutErrorCode = exports.ChannelErrorCode = exports.CategorySortField = exports.AttributeTypeEnum = exports.AttributeSortField = exports.AttributeInputTypeEnum = exports.AttributeErrorCode = exports.AttributeEntityTypeEnum = exports.AttributeChoicesSortField = exports.AreaUnitsEnum = exports.AppTypeEnum = exports.AppSortField = exports.AppExtensionTargetEnum = exports.AppExtensionMountEnum = exports.AppErrorCode = exports.AddressTypeEnum = exports.AccountErrorCode = void 0;
exports.UploadErrorCode = exports.TranslationErrorCode = exports.TranslatableKinds = exports.TransactionKind = exports.TimePeriodTypeEnum = exports.StorePaymentMethodEnum = exports.StockErrorCode = exports.StockAvailability = exports.StaffMemberStatus = exports.ShopErrorCode = exports.ShippingMethodTypeEnum = exports.ShippingErrorCode = exports.SaleType = exports.SaleSortField = exports.ReportingPeriod = exports.ProductVariantSortField = exports.ProductTypeSortField = exports.ProductTypeKindEnum = exports.ProductTypeEnum = exports.ProductTypeConfigurable = exports.ProductOrderField = exports.ProductMediaType = exports.ProductFieldEnum = exports.ProductErrorCode = exports.ProductAttributeType = exports.PostalCodeRuleInclusionTypeEnum = exports.PluginSortField = exports.PluginErrorCode = exports.PluginConfigurationType = exports.PermissionGroupSortField = exports.PermissionGroupErrorCode = exports.PermissionEnum = exports.PaymentErrorCode = exports.PaymentChargeStatusEnum = exports.PageTypeSortField = exports.PageSortField = exports.PageErrorCode = exports.OrderStatusFilter = exports.OrderStatus = exports.OrderSortField = exports.OrderSettingsErrorCode = exports.OrderOriginEnum = exports.OrderEventsEnum = exports.OrderEventsEmailsEnum = exports.OrderErrorCode = exports.OrderDiscountType = exports.OrderDirection = exports.OrderAction = exports.NavigationType = exports.MetadataErrorCode = void 0;
exports.useLatestProductsLazyQuery = exports.useLatestProductsQuery = exports.LatestProductsDocument = exports.WeightUnitsEnum = exports.WebhookSampleEventTypeEnum = exports.WebhookEventTypeSyncEnum = exports.WebhookEventTypeEnum = exports.WebhookEventTypeAsyncEnum = exports.WebhookErrorCode = exports.WarehouseSortField = exports.WarehouseErrorCode = exports.WarehouseClickAndCollectOptionEnum = exports.VoucherTypeEnum = exports.VoucherSortField = exports.VoucherDiscountType = exports.VolumeUnitsEnum = exports.VariantAttributeScope = exports.UserSortField = void 0;
// THIS FILE IS GENERATED WITH `npm run generate`
var client_1 = require("@apollo/client");
var Apollo = require("@apollo/client");
var defaultOptions = {};
/** An enumeration. */
var AccountErrorCode;
(function (AccountErrorCode) {
    AccountErrorCode["AccountNotConfirmed"] = "ACCOUNT_NOT_CONFIRMED";
    AccountErrorCode["ActivateOwnAccount"] = "ACTIVATE_OWN_ACCOUNT";
    AccountErrorCode["ActivateSuperuserAccount"] = "ACTIVATE_SUPERUSER_ACCOUNT";
    AccountErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
    AccountErrorCode["DeactivateOwnAccount"] = "DEACTIVATE_OWN_ACCOUNT";
    AccountErrorCode["DeactivateSuperuserAccount"] = "DEACTIVATE_SUPERUSER_ACCOUNT";
    AccountErrorCode["DeleteNonStaffUser"] = "DELETE_NON_STAFF_USER";
    AccountErrorCode["DeleteOwnAccount"] = "DELETE_OWN_ACCOUNT";
    AccountErrorCode["DeleteStaffAccount"] = "DELETE_STAFF_ACCOUNT";
    AccountErrorCode["DeleteSuperuserAccount"] = "DELETE_SUPERUSER_ACCOUNT";
    AccountErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    AccountErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    AccountErrorCode["Inactive"] = "INACTIVE";
    AccountErrorCode["Invalid"] = "INVALID";
    AccountErrorCode["InvalidCredentials"] = "INVALID_CREDENTIALS";
    AccountErrorCode["InvalidPassword"] = "INVALID_PASSWORD";
    AccountErrorCode["JwtDecodeError"] = "JWT_DECODE_ERROR";
    AccountErrorCode["JwtInvalidCsrfToken"] = "JWT_INVALID_CSRF_TOKEN";
    AccountErrorCode["JwtInvalidToken"] = "JWT_INVALID_TOKEN";
    AccountErrorCode["JwtMissingToken"] = "JWT_MISSING_TOKEN";
    AccountErrorCode["JwtSignatureExpired"] = "JWT_SIGNATURE_EXPIRED";
    AccountErrorCode["LeftNotManageablePermission"] = "LEFT_NOT_MANAGEABLE_PERMISSION";
    AccountErrorCode["MissingChannelSlug"] = "MISSING_CHANNEL_SLUG";
    AccountErrorCode["NotFound"] = "NOT_FOUND";
    AccountErrorCode["OutOfScopeGroup"] = "OUT_OF_SCOPE_GROUP";
    AccountErrorCode["OutOfScopePermission"] = "OUT_OF_SCOPE_PERMISSION";
    AccountErrorCode["OutOfScopeUser"] = "OUT_OF_SCOPE_USER";
    AccountErrorCode["PasswordEntirelyNumeric"] = "PASSWORD_ENTIRELY_NUMERIC";
    AccountErrorCode["PasswordTooCommon"] = "PASSWORD_TOO_COMMON";
    AccountErrorCode["PasswordTooShort"] = "PASSWORD_TOO_SHORT";
    AccountErrorCode["PasswordTooSimilar"] = "PASSWORD_TOO_SIMILAR";
    AccountErrorCode["Required"] = "REQUIRED";
    AccountErrorCode["Unique"] = "UNIQUE";
})(AccountErrorCode = exports.AccountErrorCode || (exports.AccountErrorCode = {}));
/** An enumeration. */
var AddressTypeEnum;
(function (AddressTypeEnum) {
    AddressTypeEnum["Billing"] = "BILLING";
    AddressTypeEnum["Shipping"] = "SHIPPING";
})(AddressTypeEnum = exports.AddressTypeEnum || (exports.AddressTypeEnum = {}));
/** An enumeration. */
var AppErrorCode;
(function (AppErrorCode) {
    AppErrorCode["Forbidden"] = "FORBIDDEN";
    AppErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    AppErrorCode["Invalid"] = "INVALID";
    AppErrorCode["InvalidManifestFormat"] = "INVALID_MANIFEST_FORMAT";
    AppErrorCode["InvalidPermission"] = "INVALID_PERMISSION";
    AppErrorCode["InvalidStatus"] = "INVALID_STATUS";
    AppErrorCode["InvalidUrlFormat"] = "INVALID_URL_FORMAT";
    AppErrorCode["ManifestUrlCantConnect"] = "MANIFEST_URL_CANT_CONNECT";
    AppErrorCode["NotFound"] = "NOT_FOUND";
    AppErrorCode["OutOfScopeApp"] = "OUT_OF_SCOPE_APP";
    AppErrorCode["OutOfScopePermission"] = "OUT_OF_SCOPE_PERMISSION";
    AppErrorCode["Required"] = "REQUIRED";
    AppErrorCode["Unique"] = "UNIQUE";
})(AppErrorCode = exports.AppErrorCode || (exports.AppErrorCode = {}));
/** All places where app extension can be mounted. */
var AppExtensionMountEnum;
(function (AppExtensionMountEnum) {
    AppExtensionMountEnum["NavigationCatalog"] = "NAVIGATION_CATALOG";
    AppExtensionMountEnum["NavigationCustomers"] = "NAVIGATION_CUSTOMERS";
    AppExtensionMountEnum["NavigationDiscounts"] = "NAVIGATION_DISCOUNTS";
    AppExtensionMountEnum["NavigationOrders"] = "NAVIGATION_ORDERS";
    AppExtensionMountEnum["NavigationPages"] = "NAVIGATION_PAGES";
    AppExtensionMountEnum["NavigationTranslations"] = "NAVIGATION_TRANSLATIONS";
    AppExtensionMountEnum["ProductDetailsMoreActions"] = "PRODUCT_DETAILS_MORE_ACTIONS";
    AppExtensionMountEnum["ProductOverviewCreate"] = "PRODUCT_OVERVIEW_CREATE";
    AppExtensionMountEnum["ProductOverviewMoreActions"] = "PRODUCT_OVERVIEW_MORE_ACTIONS";
})(AppExtensionMountEnum = exports.AppExtensionMountEnum || (exports.AppExtensionMountEnum = {}));
/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 *
 */
var AppExtensionTargetEnum;
(function (AppExtensionTargetEnum) {
    AppExtensionTargetEnum["AppPage"] = "APP_PAGE";
    AppExtensionTargetEnum["Popup"] = "POPUP";
})(AppExtensionTargetEnum = exports.AppExtensionTargetEnum || (exports.AppExtensionTargetEnum = {}));
var AppSortField;
(function (AppSortField) {
    /** Sort apps by creation date. */
    AppSortField["CreationDate"] = "CREATION_DATE";
    /** Sort apps by name. */
    AppSortField["Name"] = "NAME";
})(AppSortField = exports.AppSortField || (exports.AppSortField = {}));
/** Enum determining type of your App. */
var AppTypeEnum;
(function (AppTypeEnum) {
    /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
    AppTypeEnum["Local"] = "LOCAL";
    /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
    AppTypeEnum["Thirdparty"] = "THIRDPARTY";
})(AppTypeEnum = exports.AppTypeEnum || (exports.AppTypeEnum = {}));
/** An enumeration. */
var AreaUnitsEnum;
(function (AreaUnitsEnum) {
    AreaUnitsEnum["SqCm"] = "SQ_CM";
    AreaUnitsEnum["SqFt"] = "SQ_FT";
    AreaUnitsEnum["SqInch"] = "SQ_INCH";
    AreaUnitsEnum["SqKm"] = "SQ_KM";
    AreaUnitsEnum["SqM"] = "SQ_M";
    AreaUnitsEnum["SqYd"] = "SQ_YD";
})(AreaUnitsEnum = exports.AreaUnitsEnum || (exports.AreaUnitsEnum = {}));
var AttributeChoicesSortField;
(function (AttributeChoicesSortField) {
    /** Sort attribute choice by name. */
    AttributeChoicesSortField["Name"] = "NAME";
    /** Sort attribute choice by slug. */
    AttributeChoicesSortField["Slug"] = "SLUG";
})(AttributeChoicesSortField = exports.AttributeChoicesSortField || (exports.AttributeChoicesSortField = {}));
/** An enumeration. */
var AttributeEntityTypeEnum;
(function (AttributeEntityTypeEnum) {
    AttributeEntityTypeEnum["Page"] = "PAGE";
    AttributeEntityTypeEnum["Product"] = "PRODUCT";
})(AttributeEntityTypeEnum = exports.AttributeEntityTypeEnum || (exports.AttributeEntityTypeEnum = {}));
/** An enumeration. */
var AttributeErrorCode;
(function (AttributeErrorCode) {
    AttributeErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    AttributeErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    AttributeErrorCode["Invalid"] = "INVALID";
    AttributeErrorCode["NotFound"] = "NOT_FOUND";
    AttributeErrorCode["Required"] = "REQUIRED";
    AttributeErrorCode["Unique"] = "UNIQUE";
})(AttributeErrorCode = exports.AttributeErrorCode || (exports.AttributeErrorCode = {}));
/** An enumeration. */
var AttributeInputTypeEnum;
(function (AttributeInputTypeEnum) {
    AttributeInputTypeEnum["Boolean"] = "BOOLEAN";
    AttributeInputTypeEnum["Date"] = "DATE";
    AttributeInputTypeEnum["DateTime"] = "DATE_TIME";
    AttributeInputTypeEnum["Dropdown"] = "DROPDOWN";
    AttributeInputTypeEnum["File"] = "FILE";
    AttributeInputTypeEnum["Multiselect"] = "MULTISELECT";
    AttributeInputTypeEnum["Numeric"] = "NUMERIC";
    AttributeInputTypeEnum["Reference"] = "REFERENCE";
    AttributeInputTypeEnum["RichText"] = "RICH_TEXT";
    AttributeInputTypeEnum["Swatch"] = "SWATCH";
})(AttributeInputTypeEnum = exports.AttributeInputTypeEnum || (exports.AttributeInputTypeEnum = {}));
var AttributeSortField;
(function (AttributeSortField) {
    /** Sort attributes based on whether they can be displayed or not in a product grid. */
    AttributeSortField["AvailableInGrid"] = "AVAILABLE_IN_GRID";
    /** Sort attributes by the filterable in dashboard flag */
    AttributeSortField["FilterableInDashboard"] = "FILTERABLE_IN_DASHBOARD";
    /** Sort attributes by the filterable in storefront flag */
    AttributeSortField["FilterableInStorefront"] = "FILTERABLE_IN_STOREFRONT";
    /** Sort attributes by the variant only flag */
    AttributeSortField["IsVariantOnly"] = "IS_VARIANT_ONLY";
    /** Sort attributes by name */
    AttributeSortField["Name"] = "NAME";
    /** Sort attributes by slug */
    AttributeSortField["Slug"] = "SLUG";
    /** Sort attributes by their position in storefront */
    AttributeSortField["StorefrontSearchPosition"] = "STOREFRONT_SEARCH_POSITION";
    /** Sort attributes by the value required flag */
    AttributeSortField["ValueRequired"] = "VALUE_REQUIRED";
    /** Sort attributes by visibility in the storefront */
    AttributeSortField["VisibleInStorefront"] = "VISIBLE_IN_STOREFRONT";
})(AttributeSortField = exports.AttributeSortField || (exports.AttributeSortField = {}));
/** An enumeration. */
var AttributeTypeEnum;
(function (AttributeTypeEnum) {
    AttributeTypeEnum["PageType"] = "PAGE_TYPE";
    AttributeTypeEnum["ProductType"] = "PRODUCT_TYPE";
})(AttributeTypeEnum = exports.AttributeTypeEnum || (exports.AttributeTypeEnum = {}));
var CategorySortField;
(function (CategorySortField) {
    /** Sort categories by name. */
    CategorySortField["Name"] = "NAME";
    /** Sort categories by product count. */
    CategorySortField["ProductCount"] = "PRODUCT_COUNT";
    /** Sort categories by subcategory count. */
    CategorySortField["SubcategoryCount"] = "SUBCATEGORY_COUNT";
})(CategorySortField = exports.CategorySortField || (exports.CategorySortField = {}));
/** An enumeration. */
var ChannelErrorCode;
(function (ChannelErrorCode) {
    ChannelErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    ChannelErrorCode["ChannelsCurrencyMustBeTheSame"] = "CHANNELS_CURRENCY_MUST_BE_THE_SAME";
    ChannelErrorCode["ChannelWithOrders"] = "CHANNEL_WITH_ORDERS";
    ChannelErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    ChannelErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    ChannelErrorCode["Invalid"] = "INVALID";
    ChannelErrorCode["NotFound"] = "NOT_FOUND";
    ChannelErrorCode["Required"] = "REQUIRED";
    ChannelErrorCode["Unique"] = "UNIQUE";
})(ChannelErrorCode = exports.ChannelErrorCode || (exports.ChannelErrorCode = {}));
/** An enumeration. */
var CheckoutErrorCode;
(function (CheckoutErrorCode) {
    CheckoutErrorCode["BillingAddressNotSet"] = "BILLING_ADDRESS_NOT_SET";
    CheckoutErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
    CheckoutErrorCode["CheckoutNotFullyPaid"] = "CHECKOUT_NOT_FULLY_PAID";
    CheckoutErrorCode["DeliveryMethodNotApplicable"] = "DELIVERY_METHOD_NOT_APPLICABLE";
    CheckoutErrorCode["EmailNotSet"] = "EMAIL_NOT_SET";
    CheckoutErrorCode["GiftCardNotApplicable"] = "GIFT_CARD_NOT_APPLICABLE";
    CheckoutErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    CheckoutErrorCode["InsufficientStock"] = "INSUFFICIENT_STOCK";
    CheckoutErrorCode["Invalid"] = "INVALID";
    CheckoutErrorCode["InvalidShippingMethod"] = "INVALID_SHIPPING_METHOD";
    CheckoutErrorCode["MissingChannelSlug"] = "MISSING_CHANNEL_SLUG";
    CheckoutErrorCode["NotFound"] = "NOT_FOUND";
    CheckoutErrorCode["NoLines"] = "NO_LINES";
    CheckoutErrorCode["PaymentError"] = "PAYMENT_ERROR";
    CheckoutErrorCode["ProductNotPublished"] = "PRODUCT_NOT_PUBLISHED";
    CheckoutErrorCode["ProductUnavailableForPurchase"] = "PRODUCT_UNAVAILABLE_FOR_PURCHASE";
    CheckoutErrorCode["QuantityGreaterThanLimit"] = "QUANTITY_GREATER_THAN_LIMIT";
    CheckoutErrorCode["Required"] = "REQUIRED";
    CheckoutErrorCode["ShippingAddressNotSet"] = "SHIPPING_ADDRESS_NOT_SET";
    CheckoutErrorCode["ShippingMethodNotApplicable"] = "SHIPPING_METHOD_NOT_APPLICABLE";
    CheckoutErrorCode["ShippingMethodNotSet"] = "SHIPPING_METHOD_NOT_SET";
    CheckoutErrorCode["ShippingNotRequired"] = "SHIPPING_NOT_REQUIRED";
    CheckoutErrorCode["TaxError"] = "TAX_ERROR";
    CheckoutErrorCode["UnavailableVariantInChannel"] = "UNAVAILABLE_VARIANT_IN_CHANNEL";
    CheckoutErrorCode["Unique"] = "UNIQUE";
    CheckoutErrorCode["VoucherNotApplicable"] = "VOUCHER_NOT_APPLICABLE";
    CheckoutErrorCode["ZeroQuantity"] = "ZERO_QUANTITY";
})(CheckoutErrorCode = exports.CheckoutErrorCode || (exports.CheckoutErrorCode = {}));
var CheckoutSortField;
(function (CheckoutSortField) {
    /** Sort checkouts by creation date. */
    CheckoutSortField["CreationDate"] = "CREATION_DATE";
    /** Sort checkouts by customer. */
    CheckoutSortField["Customer"] = "CUSTOMER";
    /** Sort checkouts by payment. */
    CheckoutSortField["Payment"] = "PAYMENT";
})(CheckoutSortField = exports.CheckoutSortField || (exports.CheckoutSortField = {}));
/** An enumeration. */
var CollectionErrorCode;
(function (CollectionErrorCode) {
    CollectionErrorCode["CannotManageProductWithoutVariant"] = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT";
    CollectionErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    CollectionErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    CollectionErrorCode["Invalid"] = "INVALID";
    CollectionErrorCode["NotFound"] = "NOT_FOUND";
    CollectionErrorCode["Required"] = "REQUIRED";
    CollectionErrorCode["Unique"] = "UNIQUE";
})(CollectionErrorCode = exports.CollectionErrorCode || (exports.CollectionErrorCode = {}));
var CollectionPublished;
(function (CollectionPublished) {
    CollectionPublished["Hidden"] = "HIDDEN";
    CollectionPublished["Published"] = "PUBLISHED";
})(CollectionPublished = exports.CollectionPublished || (exports.CollectionPublished = {}));
var CollectionSortField;
(function (CollectionSortField) {
    /** Sort collections by availability. */
    CollectionSortField["Availability"] = "AVAILABILITY";
    /** Sort collections by name. */
    CollectionSortField["Name"] = "NAME";
    /** Sort collections by product count. */
    CollectionSortField["ProductCount"] = "PRODUCT_COUNT";
    /** Sort collections by publication date. */
    CollectionSortField["PublicationDate"] = "PUBLICATION_DATE";
})(CollectionSortField = exports.CollectionSortField || (exports.CollectionSortField = {}));
/** An enumeration. */
var ConfigurationTypeFieldEnum;
(function (ConfigurationTypeFieldEnum) {
    ConfigurationTypeFieldEnum["Boolean"] = "BOOLEAN";
    ConfigurationTypeFieldEnum["Multiline"] = "MULTILINE";
    ConfigurationTypeFieldEnum["Output"] = "OUTPUT";
    ConfigurationTypeFieldEnum["Password"] = "PASSWORD";
    ConfigurationTypeFieldEnum["Secret"] = "SECRET";
    ConfigurationTypeFieldEnum["Secretmultiline"] = "SECRETMULTILINE";
    ConfigurationTypeFieldEnum["String"] = "STRING";
})(ConfigurationTypeFieldEnum = exports.ConfigurationTypeFieldEnum || (exports.ConfigurationTypeFieldEnum = {}));
/** An enumeration. */
var CountryCode;
(function (CountryCode) {
    CountryCode["Ad"] = "AD";
    CountryCode["Ae"] = "AE";
    CountryCode["Af"] = "AF";
    CountryCode["Ag"] = "AG";
    CountryCode["Ai"] = "AI";
    CountryCode["Al"] = "AL";
    CountryCode["Am"] = "AM";
    CountryCode["Ao"] = "AO";
    CountryCode["Aq"] = "AQ";
    CountryCode["Ar"] = "AR";
    CountryCode["As"] = "AS";
    CountryCode["At"] = "AT";
    CountryCode["Au"] = "AU";
    CountryCode["Aw"] = "AW";
    CountryCode["Ax"] = "AX";
    CountryCode["Az"] = "AZ";
    CountryCode["Ba"] = "BA";
    CountryCode["Bb"] = "BB";
    CountryCode["Bd"] = "BD";
    CountryCode["Be"] = "BE";
    CountryCode["Bf"] = "BF";
    CountryCode["Bg"] = "BG";
    CountryCode["Bh"] = "BH";
    CountryCode["Bi"] = "BI";
    CountryCode["Bj"] = "BJ";
    CountryCode["Bl"] = "BL";
    CountryCode["Bm"] = "BM";
    CountryCode["Bn"] = "BN";
    CountryCode["Bo"] = "BO";
    CountryCode["Bq"] = "BQ";
    CountryCode["Br"] = "BR";
    CountryCode["Bs"] = "BS";
    CountryCode["Bt"] = "BT";
    CountryCode["Bv"] = "BV";
    CountryCode["Bw"] = "BW";
    CountryCode["By"] = "BY";
    CountryCode["Bz"] = "BZ";
    CountryCode["Ca"] = "CA";
    CountryCode["Cc"] = "CC";
    CountryCode["Cd"] = "CD";
    CountryCode["Cf"] = "CF";
    CountryCode["Cg"] = "CG";
    CountryCode["Ch"] = "CH";
    CountryCode["Ci"] = "CI";
    CountryCode["Ck"] = "CK";
    CountryCode["Cl"] = "CL";
    CountryCode["Cm"] = "CM";
    CountryCode["Cn"] = "CN";
    CountryCode["Co"] = "CO";
    CountryCode["Cr"] = "CR";
    CountryCode["Cu"] = "CU";
    CountryCode["Cv"] = "CV";
    CountryCode["Cw"] = "CW";
    CountryCode["Cx"] = "CX";
    CountryCode["Cy"] = "CY";
    CountryCode["Cz"] = "CZ";
    CountryCode["De"] = "DE";
    CountryCode["Dj"] = "DJ";
    CountryCode["Dk"] = "DK";
    CountryCode["Dm"] = "DM";
    CountryCode["Do"] = "DO";
    CountryCode["Dz"] = "DZ";
    CountryCode["Ec"] = "EC";
    CountryCode["Ee"] = "EE";
    CountryCode["Eg"] = "EG";
    CountryCode["Eh"] = "EH";
    CountryCode["Er"] = "ER";
    CountryCode["Es"] = "ES";
    CountryCode["Et"] = "ET";
    CountryCode["Eu"] = "EU";
    CountryCode["Fi"] = "FI";
    CountryCode["Fj"] = "FJ";
    CountryCode["Fk"] = "FK";
    CountryCode["Fm"] = "FM";
    CountryCode["Fo"] = "FO";
    CountryCode["Fr"] = "FR";
    CountryCode["Ga"] = "GA";
    CountryCode["Gb"] = "GB";
    CountryCode["Gd"] = "GD";
    CountryCode["Ge"] = "GE";
    CountryCode["Gf"] = "GF";
    CountryCode["Gg"] = "GG";
    CountryCode["Gh"] = "GH";
    CountryCode["Gi"] = "GI";
    CountryCode["Gl"] = "GL";
    CountryCode["Gm"] = "GM";
    CountryCode["Gn"] = "GN";
    CountryCode["Gp"] = "GP";
    CountryCode["Gq"] = "GQ";
    CountryCode["Gr"] = "GR";
    CountryCode["Gs"] = "GS";
    CountryCode["Gt"] = "GT";
    CountryCode["Gu"] = "GU";
    CountryCode["Gw"] = "GW";
    CountryCode["Gy"] = "GY";
    CountryCode["Hk"] = "HK";
    CountryCode["Hm"] = "HM";
    CountryCode["Hn"] = "HN";
    CountryCode["Hr"] = "HR";
    CountryCode["Ht"] = "HT";
    CountryCode["Hu"] = "HU";
    CountryCode["Id"] = "ID";
    CountryCode["Ie"] = "IE";
    CountryCode["Il"] = "IL";
    CountryCode["Im"] = "IM";
    CountryCode["In"] = "IN";
    CountryCode["Io"] = "IO";
    CountryCode["Iq"] = "IQ";
    CountryCode["Ir"] = "IR";
    CountryCode["Is"] = "IS";
    CountryCode["It"] = "IT";
    CountryCode["Je"] = "JE";
    CountryCode["Jm"] = "JM";
    CountryCode["Jo"] = "JO";
    CountryCode["Jp"] = "JP";
    CountryCode["Ke"] = "KE";
    CountryCode["Kg"] = "KG";
    CountryCode["Kh"] = "KH";
    CountryCode["Ki"] = "KI";
    CountryCode["Km"] = "KM";
    CountryCode["Kn"] = "KN";
    CountryCode["Kp"] = "KP";
    CountryCode["Kr"] = "KR";
    CountryCode["Kw"] = "KW";
    CountryCode["Ky"] = "KY";
    CountryCode["Kz"] = "KZ";
    CountryCode["La"] = "LA";
    CountryCode["Lb"] = "LB";
    CountryCode["Lc"] = "LC";
    CountryCode["Li"] = "LI";
    CountryCode["Lk"] = "LK";
    CountryCode["Lr"] = "LR";
    CountryCode["Ls"] = "LS";
    CountryCode["Lt"] = "LT";
    CountryCode["Lu"] = "LU";
    CountryCode["Lv"] = "LV";
    CountryCode["Ly"] = "LY";
    CountryCode["Ma"] = "MA";
    CountryCode["Mc"] = "MC";
    CountryCode["Md"] = "MD";
    CountryCode["Me"] = "ME";
    CountryCode["Mf"] = "MF";
    CountryCode["Mg"] = "MG";
    CountryCode["Mh"] = "MH";
    CountryCode["Mk"] = "MK";
    CountryCode["Ml"] = "ML";
    CountryCode["Mm"] = "MM";
    CountryCode["Mn"] = "MN";
    CountryCode["Mo"] = "MO";
    CountryCode["Mp"] = "MP";
    CountryCode["Mq"] = "MQ";
    CountryCode["Mr"] = "MR";
    CountryCode["Ms"] = "MS";
    CountryCode["Mt"] = "MT";
    CountryCode["Mu"] = "MU";
    CountryCode["Mv"] = "MV";
    CountryCode["Mw"] = "MW";
    CountryCode["Mx"] = "MX";
    CountryCode["My"] = "MY";
    CountryCode["Mz"] = "MZ";
    CountryCode["Na"] = "NA";
    CountryCode["Nc"] = "NC";
    CountryCode["Ne"] = "NE";
    CountryCode["Nf"] = "NF";
    CountryCode["Ng"] = "NG";
    CountryCode["Ni"] = "NI";
    CountryCode["Nl"] = "NL";
    CountryCode["No"] = "NO";
    CountryCode["Np"] = "NP";
    CountryCode["Nr"] = "NR";
    CountryCode["Nu"] = "NU";
    CountryCode["Nz"] = "NZ";
    CountryCode["Om"] = "OM";
    CountryCode["Pa"] = "PA";
    CountryCode["Pe"] = "PE";
    CountryCode["Pf"] = "PF";
    CountryCode["Pg"] = "PG";
    CountryCode["Ph"] = "PH";
    CountryCode["Pk"] = "PK";
    CountryCode["Pl"] = "PL";
    CountryCode["Pm"] = "PM";
    CountryCode["Pn"] = "PN";
    CountryCode["Pr"] = "PR";
    CountryCode["Ps"] = "PS";
    CountryCode["Pt"] = "PT";
    CountryCode["Pw"] = "PW";
    CountryCode["Py"] = "PY";
    CountryCode["Qa"] = "QA";
    CountryCode["Re"] = "RE";
    CountryCode["Ro"] = "RO";
    CountryCode["Rs"] = "RS";
    CountryCode["Ru"] = "RU";
    CountryCode["Rw"] = "RW";
    CountryCode["Sa"] = "SA";
    CountryCode["Sb"] = "SB";
    CountryCode["Sc"] = "SC";
    CountryCode["Sd"] = "SD";
    CountryCode["Se"] = "SE";
    CountryCode["Sg"] = "SG";
    CountryCode["Sh"] = "SH";
    CountryCode["Si"] = "SI";
    CountryCode["Sj"] = "SJ";
    CountryCode["Sk"] = "SK";
    CountryCode["Sl"] = "SL";
    CountryCode["Sm"] = "SM";
    CountryCode["Sn"] = "SN";
    CountryCode["So"] = "SO";
    CountryCode["Sr"] = "SR";
    CountryCode["Ss"] = "SS";
    CountryCode["St"] = "ST";
    CountryCode["Sv"] = "SV";
    CountryCode["Sx"] = "SX";
    CountryCode["Sy"] = "SY";
    CountryCode["Sz"] = "SZ";
    CountryCode["Tc"] = "TC";
    CountryCode["Td"] = "TD";
    CountryCode["Tf"] = "TF";
    CountryCode["Tg"] = "TG";
    CountryCode["Th"] = "TH";
    CountryCode["Tj"] = "TJ";
    CountryCode["Tk"] = "TK";
    CountryCode["Tl"] = "TL";
    CountryCode["Tm"] = "TM";
    CountryCode["Tn"] = "TN";
    CountryCode["To"] = "TO";
    CountryCode["Tr"] = "TR";
    CountryCode["Tt"] = "TT";
    CountryCode["Tv"] = "TV";
    CountryCode["Tw"] = "TW";
    CountryCode["Tz"] = "TZ";
    CountryCode["Ua"] = "UA";
    CountryCode["Ug"] = "UG";
    CountryCode["Um"] = "UM";
    CountryCode["Us"] = "US";
    CountryCode["Uy"] = "UY";
    CountryCode["Uz"] = "UZ";
    CountryCode["Va"] = "VA";
    CountryCode["Vc"] = "VC";
    CountryCode["Ve"] = "VE";
    CountryCode["Vg"] = "VG";
    CountryCode["Vi"] = "VI";
    CountryCode["Vn"] = "VN";
    CountryCode["Vu"] = "VU";
    CountryCode["Wf"] = "WF";
    CountryCode["Ws"] = "WS";
    CountryCode["Ye"] = "YE";
    CountryCode["Yt"] = "YT";
    CountryCode["Za"] = "ZA";
    CountryCode["Zm"] = "ZM";
    CountryCode["Zw"] = "ZW";
})(CountryCode = exports.CountryCode || (exports.CountryCode = {}));
/** An enumeration. */
var CustomerEventsEnum;
(function (CustomerEventsEnum) {
    CustomerEventsEnum["AccountCreated"] = "ACCOUNT_CREATED";
    CustomerEventsEnum["CustomerDeleted"] = "CUSTOMER_DELETED";
    CustomerEventsEnum["DigitalLinkDownloaded"] = "DIGITAL_LINK_DOWNLOADED";
    CustomerEventsEnum["EmailAssigned"] = "EMAIL_ASSIGNED";
    CustomerEventsEnum["EmailChanged"] = "EMAIL_CHANGED";
    CustomerEventsEnum["EmailChangedRequest"] = "EMAIL_CHANGED_REQUEST";
    CustomerEventsEnum["NameAssigned"] = "NAME_ASSIGNED";
    CustomerEventsEnum["NoteAdded"] = "NOTE_ADDED";
    CustomerEventsEnum["NoteAddedToOrder"] = "NOTE_ADDED_TO_ORDER";
    CustomerEventsEnum["PasswordChanged"] = "PASSWORD_CHANGED";
    CustomerEventsEnum["PasswordReset"] = "PASSWORD_RESET";
    CustomerEventsEnum["PasswordResetLinkSent"] = "PASSWORD_RESET_LINK_SENT";
    CustomerEventsEnum["PlacedOrder"] = "PLACED_ORDER";
})(CustomerEventsEnum = exports.CustomerEventsEnum || (exports.CustomerEventsEnum = {}));
/** An enumeration. */
var DiscountErrorCode;
(function (DiscountErrorCode) {
    DiscountErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    DiscountErrorCode["CannotManageProductWithoutVariant"] = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT";
    DiscountErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    DiscountErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    DiscountErrorCode["Invalid"] = "INVALID";
    DiscountErrorCode["NotFound"] = "NOT_FOUND";
    DiscountErrorCode["Required"] = "REQUIRED";
    DiscountErrorCode["Unique"] = "UNIQUE";
})(DiscountErrorCode = exports.DiscountErrorCode || (exports.DiscountErrorCode = {}));
var DiscountStatusEnum;
(function (DiscountStatusEnum) {
    DiscountStatusEnum["Active"] = "ACTIVE";
    DiscountStatusEnum["Expired"] = "EXPIRED";
    DiscountStatusEnum["Scheduled"] = "SCHEDULED";
})(DiscountStatusEnum = exports.DiscountStatusEnum || (exports.DiscountStatusEnum = {}));
var DiscountValueTypeEnum;
(function (DiscountValueTypeEnum) {
    DiscountValueTypeEnum["Fixed"] = "FIXED";
    DiscountValueTypeEnum["Percentage"] = "PERCENTAGE";
})(DiscountValueTypeEnum = exports.DiscountValueTypeEnum || (exports.DiscountValueTypeEnum = {}));
/** An enumeration. */
var DistanceUnitsEnum;
(function (DistanceUnitsEnum) {
    DistanceUnitsEnum["Cm"] = "CM";
    DistanceUnitsEnum["Ft"] = "FT";
    DistanceUnitsEnum["Inch"] = "INCH";
    DistanceUnitsEnum["Km"] = "KM";
    DistanceUnitsEnum["M"] = "M";
    DistanceUnitsEnum["Yd"] = "YD";
})(DistanceUnitsEnum = exports.DistanceUnitsEnum || (exports.DistanceUnitsEnum = {}));
var EventDeliveryAttemptSortField;
(function (EventDeliveryAttemptSortField) {
    /** Sort event delivery attempts by created at. */
    EventDeliveryAttemptSortField["CreatedAt"] = "CREATED_AT";
})(EventDeliveryAttemptSortField = exports.EventDeliveryAttemptSortField || (exports.EventDeliveryAttemptSortField = {}));
var EventDeliverySortField;
(function (EventDeliverySortField) {
    /** Sort event deliveries by created at. */
    EventDeliverySortField["CreatedAt"] = "CREATED_AT";
})(EventDeliverySortField = exports.EventDeliverySortField || (exports.EventDeliverySortField = {}));
var EventDeliveryStatusEnum;
(function (EventDeliveryStatusEnum) {
    EventDeliveryStatusEnum["Failed"] = "FAILED";
    EventDeliveryStatusEnum["Pending"] = "PENDING";
    EventDeliveryStatusEnum["Success"] = "SUCCESS";
})(EventDeliveryStatusEnum = exports.EventDeliveryStatusEnum || (exports.EventDeliveryStatusEnum = {}));
/** An enumeration. */
var ExportErrorCode;
(function (ExportErrorCode) {
    ExportErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    ExportErrorCode["Invalid"] = "INVALID";
    ExportErrorCode["NotFound"] = "NOT_FOUND";
    ExportErrorCode["Required"] = "REQUIRED";
})(ExportErrorCode = exports.ExportErrorCode || (exports.ExportErrorCode = {}));
/** An enumeration. */
var ExportEventsEnum;
(function (ExportEventsEnum) {
    ExportEventsEnum["ExportedFileSent"] = "EXPORTED_FILE_SENT";
    ExportEventsEnum["ExportDeleted"] = "EXPORT_DELETED";
    ExportEventsEnum["ExportFailed"] = "EXPORT_FAILED";
    ExportEventsEnum["ExportFailedInfoSent"] = "EXPORT_FAILED_INFO_SENT";
    ExportEventsEnum["ExportPending"] = "EXPORT_PENDING";
    ExportEventsEnum["ExportSuccess"] = "EXPORT_SUCCESS";
})(ExportEventsEnum = exports.ExportEventsEnum || (exports.ExportEventsEnum = {}));
var ExportFileSortField;
(function (ExportFileSortField) {
    ExportFileSortField["CreatedAt"] = "CREATED_AT";
    ExportFileSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
    ExportFileSortField["Status"] = "STATUS";
    ExportFileSortField["UpdatedAt"] = "UPDATED_AT";
})(ExportFileSortField = exports.ExportFileSortField || (exports.ExportFileSortField = {}));
var ExportScope;
(function (ExportScope) {
    /** Export all products. */
    ExportScope["All"] = "ALL";
    /** Export the filtered products. */
    ExportScope["Filter"] = "FILTER";
    /** Export products with given ids. */
    ExportScope["Ids"] = "IDS";
})(ExportScope = exports.ExportScope || (exports.ExportScope = {}));
/** An enumeration. */
var ExternalNotificationErrorCodes;
(function (ExternalNotificationErrorCodes) {
    ExternalNotificationErrorCodes["ChannelInactive"] = "CHANNEL_INACTIVE";
    ExternalNotificationErrorCodes["InvalidModelType"] = "INVALID_MODEL_TYPE";
    ExternalNotificationErrorCodes["NotFound"] = "NOT_FOUND";
    ExternalNotificationErrorCodes["Required"] = "REQUIRED";
})(ExternalNotificationErrorCodes = exports.ExternalNotificationErrorCodes || (exports.ExternalNotificationErrorCodes = {}));
/** An enumeration. */
var FileTypesEnum;
(function (FileTypesEnum) {
    FileTypesEnum["Csv"] = "CSV";
    FileTypesEnum["Xlsx"] = "XLSX";
})(FileTypesEnum = exports.FileTypesEnum || (exports.FileTypesEnum = {}));
/** An enumeration. */
var FulfillmentStatus;
(function (FulfillmentStatus) {
    FulfillmentStatus["Canceled"] = "CANCELED";
    FulfillmentStatus["Fulfilled"] = "FULFILLED";
    FulfillmentStatus["Refunded"] = "REFUNDED";
    FulfillmentStatus["RefundedAndReturned"] = "REFUNDED_AND_RETURNED";
    FulfillmentStatus["Replaced"] = "REPLACED";
    FulfillmentStatus["Returned"] = "RETURNED";
    FulfillmentStatus["WaitingForApproval"] = "WAITING_FOR_APPROVAL";
})(FulfillmentStatus = exports.FulfillmentStatus || (exports.FulfillmentStatus = {}));
/** An enumeration. */
var GiftCardErrorCode;
(function (GiftCardErrorCode) {
    GiftCardErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    GiftCardErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    GiftCardErrorCode["ExpiredGiftCard"] = "EXPIRED_GIFT_CARD";
    GiftCardErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    GiftCardErrorCode["Invalid"] = "INVALID";
    GiftCardErrorCode["NotFound"] = "NOT_FOUND";
    GiftCardErrorCode["Required"] = "REQUIRED";
    GiftCardErrorCode["Unique"] = "UNIQUE";
})(GiftCardErrorCode = exports.GiftCardErrorCode || (exports.GiftCardErrorCode = {}));
/** An enumeration. */
var GiftCardEventsEnum;
(function (GiftCardEventsEnum) {
    GiftCardEventsEnum["Activated"] = "ACTIVATED";
    GiftCardEventsEnum["BalanceReset"] = "BALANCE_RESET";
    GiftCardEventsEnum["Bought"] = "BOUGHT";
    GiftCardEventsEnum["Deactivated"] = "DEACTIVATED";
    GiftCardEventsEnum["ExpiryDateUpdated"] = "EXPIRY_DATE_UPDATED";
    GiftCardEventsEnum["Issued"] = "ISSUED";
    GiftCardEventsEnum["NoteAdded"] = "NOTE_ADDED";
    GiftCardEventsEnum["Resent"] = "RESENT";
    GiftCardEventsEnum["SentToCustomer"] = "SENT_TO_CUSTOMER";
    GiftCardEventsEnum["TagsUpdated"] = "TAGS_UPDATED";
    GiftCardEventsEnum["Updated"] = "UPDATED";
    GiftCardEventsEnum["UsedInOrder"] = "USED_IN_ORDER";
})(GiftCardEventsEnum = exports.GiftCardEventsEnum || (exports.GiftCardEventsEnum = {}));
/** An enumeration. */
var GiftCardSettingsErrorCode;
(function (GiftCardSettingsErrorCode) {
    GiftCardSettingsErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    GiftCardSettingsErrorCode["Invalid"] = "INVALID";
    GiftCardSettingsErrorCode["Required"] = "REQUIRED";
})(GiftCardSettingsErrorCode = exports.GiftCardSettingsErrorCode || (exports.GiftCardSettingsErrorCode = {}));
/** An enumeration. */
var GiftCardSettingsExpiryTypeEnum;
(function (GiftCardSettingsExpiryTypeEnum) {
    GiftCardSettingsExpiryTypeEnum["ExpiryPeriod"] = "EXPIRY_PERIOD";
    GiftCardSettingsExpiryTypeEnum["NeverExpire"] = "NEVER_EXPIRE";
})(GiftCardSettingsExpiryTypeEnum = exports.GiftCardSettingsExpiryTypeEnum || (exports.GiftCardSettingsExpiryTypeEnum = {}));
var GiftCardSortField;
(function (GiftCardSortField) {
    /** Sort orders by current balance. */
    GiftCardSortField["CurrentBalance"] = "CURRENT_BALANCE";
    /** Sort orders by product. */
    GiftCardSortField["Product"] = "PRODUCT";
    /** Sort orders by used by. */
    GiftCardSortField["UsedBy"] = "USED_BY";
})(GiftCardSortField = exports.GiftCardSortField || (exports.GiftCardSortField = {}));
/** An enumeration. */
var InvoiceErrorCode;
(function (InvoiceErrorCode) {
    InvoiceErrorCode["EmailNotSet"] = "EMAIL_NOT_SET";
    InvoiceErrorCode["InvalidStatus"] = "INVALID_STATUS";
    InvoiceErrorCode["NotFound"] = "NOT_FOUND";
    InvoiceErrorCode["NotReady"] = "NOT_READY";
    InvoiceErrorCode["NoInvoicePlugin"] = "NO_INVOICE_PLUGIN";
    InvoiceErrorCode["NumberNotSet"] = "NUMBER_NOT_SET";
    InvoiceErrorCode["Required"] = "REQUIRED";
    InvoiceErrorCode["UrlNotSet"] = "URL_NOT_SET";
})(InvoiceErrorCode = exports.InvoiceErrorCode || (exports.InvoiceErrorCode = {}));
/** An enumeration. */
var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["Deleted"] = "DELETED";
    JobStatusEnum["Failed"] = "FAILED";
    JobStatusEnum["Pending"] = "PENDING";
    JobStatusEnum["Success"] = "SUCCESS";
})(JobStatusEnum = exports.JobStatusEnum || (exports.JobStatusEnum = {}));
/** An enumeration. */
var LanguageCodeEnum;
(function (LanguageCodeEnum) {
    LanguageCodeEnum["Af"] = "AF";
    LanguageCodeEnum["AfNa"] = "AF_NA";
    LanguageCodeEnum["AfZa"] = "AF_ZA";
    LanguageCodeEnum["Agq"] = "AGQ";
    LanguageCodeEnum["AgqCm"] = "AGQ_CM";
    LanguageCodeEnum["Ak"] = "AK";
    LanguageCodeEnum["AkGh"] = "AK_GH";
    LanguageCodeEnum["Am"] = "AM";
    LanguageCodeEnum["AmEt"] = "AM_ET";
    LanguageCodeEnum["Ar"] = "AR";
    LanguageCodeEnum["ArAe"] = "AR_AE";
    LanguageCodeEnum["ArBh"] = "AR_BH";
    LanguageCodeEnum["ArDj"] = "AR_DJ";
    LanguageCodeEnum["ArDz"] = "AR_DZ";
    LanguageCodeEnum["ArEg"] = "AR_EG";
    LanguageCodeEnum["ArEh"] = "AR_EH";
    LanguageCodeEnum["ArEr"] = "AR_ER";
    LanguageCodeEnum["ArIl"] = "AR_IL";
    LanguageCodeEnum["ArIq"] = "AR_IQ";
    LanguageCodeEnum["ArJo"] = "AR_JO";
    LanguageCodeEnum["ArKm"] = "AR_KM";
    LanguageCodeEnum["ArKw"] = "AR_KW";
    LanguageCodeEnum["ArLb"] = "AR_LB";
    LanguageCodeEnum["ArLy"] = "AR_LY";
    LanguageCodeEnum["ArMa"] = "AR_MA";
    LanguageCodeEnum["ArMr"] = "AR_MR";
    LanguageCodeEnum["ArOm"] = "AR_OM";
    LanguageCodeEnum["ArPs"] = "AR_PS";
    LanguageCodeEnum["ArQa"] = "AR_QA";
    LanguageCodeEnum["ArSa"] = "AR_SA";
    LanguageCodeEnum["ArSd"] = "AR_SD";
    LanguageCodeEnum["ArSo"] = "AR_SO";
    LanguageCodeEnum["ArSs"] = "AR_SS";
    LanguageCodeEnum["ArSy"] = "AR_SY";
    LanguageCodeEnum["ArTd"] = "AR_TD";
    LanguageCodeEnum["ArTn"] = "AR_TN";
    LanguageCodeEnum["ArYe"] = "AR_YE";
    LanguageCodeEnum["As"] = "AS";
    LanguageCodeEnum["Asa"] = "ASA";
    LanguageCodeEnum["AsaTz"] = "ASA_TZ";
    LanguageCodeEnum["Ast"] = "AST";
    LanguageCodeEnum["AstEs"] = "AST_ES";
    LanguageCodeEnum["AsIn"] = "AS_IN";
    LanguageCodeEnum["Az"] = "AZ";
    LanguageCodeEnum["AzCyrl"] = "AZ_CYRL";
    LanguageCodeEnum["AzCyrlAz"] = "AZ_CYRL_AZ";
    LanguageCodeEnum["AzLatn"] = "AZ_LATN";
    LanguageCodeEnum["AzLatnAz"] = "AZ_LATN_AZ";
    LanguageCodeEnum["Bas"] = "BAS";
    LanguageCodeEnum["BasCm"] = "BAS_CM";
    LanguageCodeEnum["Be"] = "BE";
    LanguageCodeEnum["Bem"] = "BEM";
    LanguageCodeEnum["BemZm"] = "BEM_ZM";
    LanguageCodeEnum["Bez"] = "BEZ";
    LanguageCodeEnum["BezTz"] = "BEZ_TZ";
    LanguageCodeEnum["BeBy"] = "BE_BY";
    LanguageCodeEnum["Bg"] = "BG";
    LanguageCodeEnum["BgBg"] = "BG_BG";
    LanguageCodeEnum["Bm"] = "BM";
    LanguageCodeEnum["BmMl"] = "BM_ML";
    LanguageCodeEnum["Bn"] = "BN";
    LanguageCodeEnum["BnBd"] = "BN_BD";
    LanguageCodeEnum["BnIn"] = "BN_IN";
    LanguageCodeEnum["Bo"] = "BO";
    LanguageCodeEnum["BoCn"] = "BO_CN";
    LanguageCodeEnum["BoIn"] = "BO_IN";
    LanguageCodeEnum["Br"] = "BR";
    LanguageCodeEnum["Brx"] = "BRX";
    LanguageCodeEnum["BrxIn"] = "BRX_IN";
    LanguageCodeEnum["BrFr"] = "BR_FR";
    LanguageCodeEnum["Bs"] = "BS";
    LanguageCodeEnum["BsCyrl"] = "BS_CYRL";
    LanguageCodeEnum["BsCyrlBa"] = "BS_CYRL_BA";
    LanguageCodeEnum["BsLatn"] = "BS_LATN";
    LanguageCodeEnum["BsLatnBa"] = "BS_LATN_BA";
    LanguageCodeEnum["Ca"] = "CA";
    LanguageCodeEnum["CaAd"] = "CA_AD";
    LanguageCodeEnum["CaEs"] = "CA_ES";
    LanguageCodeEnum["CaEsValencia"] = "CA_ES_VALENCIA";
    LanguageCodeEnum["CaFr"] = "CA_FR";
    LanguageCodeEnum["CaIt"] = "CA_IT";
    LanguageCodeEnum["Ccp"] = "CCP";
    LanguageCodeEnum["CcpBd"] = "CCP_BD";
    LanguageCodeEnum["CcpIn"] = "CCP_IN";
    LanguageCodeEnum["Ce"] = "CE";
    LanguageCodeEnum["Ceb"] = "CEB";
    LanguageCodeEnum["CebPh"] = "CEB_PH";
    LanguageCodeEnum["CeRu"] = "CE_RU";
    LanguageCodeEnum["Cgg"] = "CGG";
    LanguageCodeEnum["CggUg"] = "CGG_UG";
    LanguageCodeEnum["Chr"] = "CHR";
    LanguageCodeEnum["ChrUs"] = "CHR_US";
    LanguageCodeEnum["Ckb"] = "CKB";
    LanguageCodeEnum["CkbIq"] = "CKB_IQ";
    LanguageCodeEnum["CkbIr"] = "CKB_IR";
    LanguageCodeEnum["Cs"] = "CS";
    LanguageCodeEnum["CsCz"] = "CS_CZ";
    LanguageCodeEnum["Cu"] = "CU";
    LanguageCodeEnum["CuRu"] = "CU_RU";
    LanguageCodeEnum["Cy"] = "CY";
    LanguageCodeEnum["CyGb"] = "CY_GB";
    LanguageCodeEnum["Da"] = "DA";
    LanguageCodeEnum["Dav"] = "DAV";
    LanguageCodeEnum["DavKe"] = "DAV_KE";
    LanguageCodeEnum["DaDk"] = "DA_DK";
    LanguageCodeEnum["DaGl"] = "DA_GL";
    LanguageCodeEnum["De"] = "DE";
    LanguageCodeEnum["DeAt"] = "DE_AT";
    LanguageCodeEnum["DeBe"] = "DE_BE";
    LanguageCodeEnum["DeCh"] = "DE_CH";
    LanguageCodeEnum["DeDe"] = "DE_DE";
    LanguageCodeEnum["DeIt"] = "DE_IT";
    LanguageCodeEnum["DeLi"] = "DE_LI";
    LanguageCodeEnum["DeLu"] = "DE_LU";
    LanguageCodeEnum["Dje"] = "DJE";
    LanguageCodeEnum["DjeNe"] = "DJE_NE";
    LanguageCodeEnum["Dsb"] = "DSB";
    LanguageCodeEnum["DsbDe"] = "DSB_DE";
    LanguageCodeEnum["Dua"] = "DUA";
    LanguageCodeEnum["DuaCm"] = "DUA_CM";
    LanguageCodeEnum["Dyo"] = "DYO";
    LanguageCodeEnum["DyoSn"] = "DYO_SN";
    LanguageCodeEnum["Dz"] = "DZ";
    LanguageCodeEnum["DzBt"] = "DZ_BT";
    LanguageCodeEnum["Ebu"] = "EBU";
    LanguageCodeEnum["EbuKe"] = "EBU_KE";
    LanguageCodeEnum["Ee"] = "EE";
    LanguageCodeEnum["EeGh"] = "EE_GH";
    LanguageCodeEnum["EeTg"] = "EE_TG";
    LanguageCodeEnum["El"] = "EL";
    LanguageCodeEnum["ElCy"] = "EL_CY";
    LanguageCodeEnum["ElGr"] = "EL_GR";
    LanguageCodeEnum["En"] = "EN";
    LanguageCodeEnum["EnAe"] = "EN_AE";
    LanguageCodeEnum["EnAg"] = "EN_AG";
    LanguageCodeEnum["EnAi"] = "EN_AI";
    LanguageCodeEnum["EnAs"] = "EN_AS";
    LanguageCodeEnum["EnAt"] = "EN_AT";
    LanguageCodeEnum["EnAu"] = "EN_AU";
    LanguageCodeEnum["EnBb"] = "EN_BB";
    LanguageCodeEnum["EnBe"] = "EN_BE";
    LanguageCodeEnum["EnBi"] = "EN_BI";
    LanguageCodeEnum["EnBm"] = "EN_BM";
    LanguageCodeEnum["EnBs"] = "EN_BS";
    LanguageCodeEnum["EnBw"] = "EN_BW";
    LanguageCodeEnum["EnBz"] = "EN_BZ";
    LanguageCodeEnum["EnCa"] = "EN_CA";
    LanguageCodeEnum["EnCc"] = "EN_CC";
    LanguageCodeEnum["EnCh"] = "EN_CH";
    LanguageCodeEnum["EnCk"] = "EN_CK";
    LanguageCodeEnum["EnCm"] = "EN_CM";
    LanguageCodeEnum["EnCx"] = "EN_CX";
    LanguageCodeEnum["EnCy"] = "EN_CY";
    LanguageCodeEnum["EnDe"] = "EN_DE";
    LanguageCodeEnum["EnDg"] = "EN_DG";
    LanguageCodeEnum["EnDk"] = "EN_DK";
    LanguageCodeEnum["EnDm"] = "EN_DM";
    LanguageCodeEnum["EnEr"] = "EN_ER";
    LanguageCodeEnum["EnFi"] = "EN_FI";
    LanguageCodeEnum["EnFj"] = "EN_FJ";
    LanguageCodeEnum["EnFk"] = "EN_FK";
    LanguageCodeEnum["EnFm"] = "EN_FM";
    LanguageCodeEnum["EnGb"] = "EN_GB";
    LanguageCodeEnum["EnGd"] = "EN_GD";
    LanguageCodeEnum["EnGg"] = "EN_GG";
    LanguageCodeEnum["EnGh"] = "EN_GH";
    LanguageCodeEnum["EnGi"] = "EN_GI";
    LanguageCodeEnum["EnGm"] = "EN_GM";
    LanguageCodeEnum["EnGu"] = "EN_GU";
    LanguageCodeEnum["EnGy"] = "EN_GY";
    LanguageCodeEnum["EnHk"] = "EN_HK";
    LanguageCodeEnum["EnIe"] = "EN_IE";
    LanguageCodeEnum["EnIl"] = "EN_IL";
    LanguageCodeEnum["EnIm"] = "EN_IM";
    LanguageCodeEnum["EnIn"] = "EN_IN";
    LanguageCodeEnum["EnIo"] = "EN_IO";
    LanguageCodeEnum["EnJe"] = "EN_JE";
    LanguageCodeEnum["EnJm"] = "EN_JM";
    LanguageCodeEnum["EnKe"] = "EN_KE";
    LanguageCodeEnum["EnKi"] = "EN_KI";
    LanguageCodeEnum["EnKn"] = "EN_KN";
    LanguageCodeEnum["EnKy"] = "EN_KY";
    LanguageCodeEnum["EnLc"] = "EN_LC";
    LanguageCodeEnum["EnLr"] = "EN_LR";
    LanguageCodeEnum["EnLs"] = "EN_LS";
    LanguageCodeEnum["EnMg"] = "EN_MG";
    LanguageCodeEnum["EnMh"] = "EN_MH";
    LanguageCodeEnum["EnMo"] = "EN_MO";
    LanguageCodeEnum["EnMp"] = "EN_MP";
    LanguageCodeEnum["EnMs"] = "EN_MS";
    LanguageCodeEnum["EnMt"] = "EN_MT";
    LanguageCodeEnum["EnMu"] = "EN_MU";
    LanguageCodeEnum["EnMw"] = "EN_MW";
    LanguageCodeEnum["EnMy"] = "EN_MY";
    LanguageCodeEnum["EnNa"] = "EN_NA";
    LanguageCodeEnum["EnNf"] = "EN_NF";
    LanguageCodeEnum["EnNg"] = "EN_NG";
    LanguageCodeEnum["EnNl"] = "EN_NL";
    LanguageCodeEnum["EnNr"] = "EN_NR";
    LanguageCodeEnum["EnNu"] = "EN_NU";
    LanguageCodeEnum["EnNz"] = "EN_NZ";
    LanguageCodeEnum["EnPg"] = "EN_PG";
    LanguageCodeEnum["EnPh"] = "EN_PH";
    LanguageCodeEnum["EnPk"] = "EN_PK";
    LanguageCodeEnum["EnPn"] = "EN_PN";
    LanguageCodeEnum["EnPr"] = "EN_PR";
    LanguageCodeEnum["EnPw"] = "EN_PW";
    LanguageCodeEnum["EnRw"] = "EN_RW";
    LanguageCodeEnum["EnSb"] = "EN_SB";
    LanguageCodeEnum["EnSc"] = "EN_SC";
    LanguageCodeEnum["EnSd"] = "EN_SD";
    LanguageCodeEnum["EnSe"] = "EN_SE";
    LanguageCodeEnum["EnSg"] = "EN_SG";
    LanguageCodeEnum["EnSh"] = "EN_SH";
    LanguageCodeEnum["EnSi"] = "EN_SI";
    LanguageCodeEnum["EnSl"] = "EN_SL";
    LanguageCodeEnum["EnSs"] = "EN_SS";
    LanguageCodeEnum["EnSx"] = "EN_SX";
    LanguageCodeEnum["EnSz"] = "EN_SZ";
    LanguageCodeEnum["EnTc"] = "EN_TC";
    LanguageCodeEnum["EnTk"] = "EN_TK";
    LanguageCodeEnum["EnTo"] = "EN_TO";
    LanguageCodeEnum["EnTt"] = "EN_TT";
    LanguageCodeEnum["EnTv"] = "EN_TV";
    LanguageCodeEnum["EnTz"] = "EN_TZ";
    LanguageCodeEnum["EnUg"] = "EN_UG";
    LanguageCodeEnum["EnUm"] = "EN_UM";
    LanguageCodeEnum["EnUs"] = "EN_US";
    LanguageCodeEnum["EnVc"] = "EN_VC";
    LanguageCodeEnum["EnVg"] = "EN_VG";
    LanguageCodeEnum["EnVi"] = "EN_VI";
    LanguageCodeEnum["EnVu"] = "EN_VU";
    LanguageCodeEnum["EnWs"] = "EN_WS";
    LanguageCodeEnum["EnZa"] = "EN_ZA";
    LanguageCodeEnum["EnZm"] = "EN_ZM";
    LanguageCodeEnum["EnZw"] = "EN_ZW";
    LanguageCodeEnum["Eo"] = "EO";
    LanguageCodeEnum["Es"] = "ES";
    LanguageCodeEnum["EsAr"] = "ES_AR";
    LanguageCodeEnum["EsBo"] = "ES_BO";
    LanguageCodeEnum["EsBr"] = "ES_BR";
    LanguageCodeEnum["EsBz"] = "ES_BZ";
    LanguageCodeEnum["EsCl"] = "ES_CL";
    LanguageCodeEnum["EsCo"] = "ES_CO";
    LanguageCodeEnum["EsCr"] = "ES_CR";
    LanguageCodeEnum["EsCu"] = "ES_CU";
    LanguageCodeEnum["EsDo"] = "ES_DO";
    LanguageCodeEnum["EsEa"] = "ES_EA";
    LanguageCodeEnum["EsEc"] = "ES_EC";
    LanguageCodeEnum["EsEs"] = "ES_ES";
    LanguageCodeEnum["EsGq"] = "ES_GQ";
    LanguageCodeEnum["EsGt"] = "ES_GT";
    LanguageCodeEnum["EsHn"] = "ES_HN";
    LanguageCodeEnum["EsIc"] = "ES_IC";
    LanguageCodeEnum["EsMx"] = "ES_MX";
    LanguageCodeEnum["EsNi"] = "ES_NI";
    LanguageCodeEnum["EsPa"] = "ES_PA";
    LanguageCodeEnum["EsPe"] = "ES_PE";
    LanguageCodeEnum["EsPh"] = "ES_PH";
    LanguageCodeEnum["EsPr"] = "ES_PR";
    LanguageCodeEnum["EsPy"] = "ES_PY";
    LanguageCodeEnum["EsSv"] = "ES_SV";
    LanguageCodeEnum["EsUs"] = "ES_US";
    LanguageCodeEnum["EsUy"] = "ES_UY";
    LanguageCodeEnum["EsVe"] = "ES_VE";
    LanguageCodeEnum["Et"] = "ET";
    LanguageCodeEnum["EtEe"] = "ET_EE";
    LanguageCodeEnum["Eu"] = "EU";
    LanguageCodeEnum["EuEs"] = "EU_ES";
    LanguageCodeEnum["Ewo"] = "EWO";
    LanguageCodeEnum["EwoCm"] = "EWO_CM";
    LanguageCodeEnum["Fa"] = "FA";
    LanguageCodeEnum["FaAf"] = "FA_AF";
    LanguageCodeEnum["FaIr"] = "FA_IR";
    LanguageCodeEnum["Ff"] = "FF";
    LanguageCodeEnum["FfAdlm"] = "FF_ADLM";
    LanguageCodeEnum["FfAdlmBf"] = "FF_ADLM_BF";
    LanguageCodeEnum["FfAdlmCm"] = "FF_ADLM_CM";
    LanguageCodeEnum["FfAdlmGh"] = "FF_ADLM_GH";
    LanguageCodeEnum["FfAdlmGm"] = "FF_ADLM_GM";
    LanguageCodeEnum["FfAdlmGn"] = "FF_ADLM_GN";
    LanguageCodeEnum["FfAdlmGw"] = "FF_ADLM_GW";
    LanguageCodeEnum["FfAdlmLr"] = "FF_ADLM_LR";
    LanguageCodeEnum["FfAdlmMr"] = "FF_ADLM_MR";
    LanguageCodeEnum["FfAdlmNe"] = "FF_ADLM_NE";
    LanguageCodeEnum["FfAdlmNg"] = "FF_ADLM_NG";
    LanguageCodeEnum["FfAdlmSl"] = "FF_ADLM_SL";
    LanguageCodeEnum["FfAdlmSn"] = "FF_ADLM_SN";
    LanguageCodeEnum["FfLatn"] = "FF_LATN";
    LanguageCodeEnum["FfLatnBf"] = "FF_LATN_BF";
    LanguageCodeEnum["FfLatnCm"] = "FF_LATN_CM";
    LanguageCodeEnum["FfLatnGh"] = "FF_LATN_GH";
    LanguageCodeEnum["FfLatnGm"] = "FF_LATN_GM";
    LanguageCodeEnum["FfLatnGn"] = "FF_LATN_GN";
    LanguageCodeEnum["FfLatnGw"] = "FF_LATN_GW";
    LanguageCodeEnum["FfLatnLr"] = "FF_LATN_LR";
    LanguageCodeEnum["FfLatnMr"] = "FF_LATN_MR";
    LanguageCodeEnum["FfLatnNe"] = "FF_LATN_NE";
    LanguageCodeEnum["FfLatnNg"] = "FF_LATN_NG";
    LanguageCodeEnum["FfLatnSl"] = "FF_LATN_SL";
    LanguageCodeEnum["FfLatnSn"] = "FF_LATN_SN";
    LanguageCodeEnum["Fi"] = "FI";
    LanguageCodeEnum["Fil"] = "FIL";
    LanguageCodeEnum["FilPh"] = "FIL_PH";
    LanguageCodeEnum["FiFi"] = "FI_FI";
    LanguageCodeEnum["Fo"] = "FO";
    LanguageCodeEnum["FoDk"] = "FO_DK";
    LanguageCodeEnum["FoFo"] = "FO_FO";
    LanguageCodeEnum["Fr"] = "FR";
    LanguageCodeEnum["FrBe"] = "FR_BE";
    LanguageCodeEnum["FrBf"] = "FR_BF";
    LanguageCodeEnum["FrBi"] = "FR_BI";
    LanguageCodeEnum["FrBj"] = "FR_BJ";
    LanguageCodeEnum["FrBl"] = "FR_BL";
    LanguageCodeEnum["FrCa"] = "FR_CA";
    LanguageCodeEnum["FrCd"] = "FR_CD";
    LanguageCodeEnum["FrCf"] = "FR_CF";
    LanguageCodeEnum["FrCg"] = "FR_CG";
    LanguageCodeEnum["FrCh"] = "FR_CH";
    LanguageCodeEnum["FrCi"] = "FR_CI";
    LanguageCodeEnum["FrCm"] = "FR_CM";
    LanguageCodeEnum["FrDj"] = "FR_DJ";
    LanguageCodeEnum["FrDz"] = "FR_DZ";
    LanguageCodeEnum["FrFr"] = "FR_FR";
    LanguageCodeEnum["FrGa"] = "FR_GA";
    LanguageCodeEnum["FrGf"] = "FR_GF";
    LanguageCodeEnum["FrGn"] = "FR_GN";
    LanguageCodeEnum["FrGp"] = "FR_GP";
    LanguageCodeEnum["FrGq"] = "FR_GQ";
    LanguageCodeEnum["FrHt"] = "FR_HT";
    LanguageCodeEnum["FrKm"] = "FR_KM";
    LanguageCodeEnum["FrLu"] = "FR_LU";
    LanguageCodeEnum["FrMa"] = "FR_MA";
    LanguageCodeEnum["FrMc"] = "FR_MC";
    LanguageCodeEnum["FrMf"] = "FR_MF";
    LanguageCodeEnum["FrMg"] = "FR_MG";
    LanguageCodeEnum["FrMl"] = "FR_ML";
    LanguageCodeEnum["FrMq"] = "FR_MQ";
    LanguageCodeEnum["FrMr"] = "FR_MR";
    LanguageCodeEnum["FrMu"] = "FR_MU";
    LanguageCodeEnum["FrNc"] = "FR_NC";
    LanguageCodeEnum["FrNe"] = "FR_NE";
    LanguageCodeEnum["FrPf"] = "FR_PF";
    LanguageCodeEnum["FrPm"] = "FR_PM";
    LanguageCodeEnum["FrRe"] = "FR_RE";
    LanguageCodeEnum["FrRw"] = "FR_RW";
    LanguageCodeEnum["FrSc"] = "FR_SC";
    LanguageCodeEnum["FrSn"] = "FR_SN";
    LanguageCodeEnum["FrSy"] = "FR_SY";
    LanguageCodeEnum["FrTd"] = "FR_TD";
    LanguageCodeEnum["FrTg"] = "FR_TG";
    LanguageCodeEnum["FrTn"] = "FR_TN";
    LanguageCodeEnum["FrVu"] = "FR_VU";
    LanguageCodeEnum["FrWf"] = "FR_WF";
    LanguageCodeEnum["FrYt"] = "FR_YT";
    LanguageCodeEnum["Fur"] = "FUR";
    LanguageCodeEnum["FurIt"] = "FUR_IT";
    LanguageCodeEnum["Fy"] = "FY";
    LanguageCodeEnum["FyNl"] = "FY_NL";
    LanguageCodeEnum["Ga"] = "GA";
    LanguageCodeEnum["GaGb"] = "GA_GB";
    LanguageCodeEnum["GaIe"] = "GA_IE";
    LanguageCodeEnum["Gd"] = "GD";
    LanguageCodeEnum["GdGb"] = "GD_GB";
    LanguageCodeEnum["Gl"] = "GL";
    LanguageCodeEnum["GlEs"] = "GL_ES";
    LanguageCodeEnum["Gsw"] = "GSW";
    LanguageCodeEnum["GswCh"] = "GSW_CH";
    LanguageCodeEnum["GswFr"] = "GSW_FR";
    LanguageCodeEnum["GswLi"] = "GSW_LI";
    LanguageCodeEnum["Gu"] = "GU";
    LanguageCodeEnum["Guz"] = "GUZ";
    LanguageCodeEnum["GuzKe"] = "GUZ_KE";
    LanguageCodeEnum["GuIn"] = "GU_IN";
    LanguageCodeEnum["Gv"] = "GV";
    LanguageCodeEnum["GvIm"] = "GV_IM";
    LanguageCodeEnum["Ha"] = "HA";
    LanguageCodeEnum["Haw"] = "HAW";
    LanguageCodeEnum["HawUs"] = "HAW_US";
    LanguageCodeEnum["HaGh"] = "HA_GH";
    LanguageCodeEnum["HaNe"] = "HA_NE";
    LanguageCodeEnum["HaNg"] = "HA_NG";
    LanguageCodeEnum["He"] = "HE";
    LanguageCodeEnum["HeIl"] = "HE_IL";
    LanguageCodeEnum["Hi"] = "HI";
    LanguageCodeEnum["HiIn"] = "HI_IN";
    LanguageCodeEnum["Hr"] = "HR";
    LanguageCodeEnum["HrBa"] = "HR_BA";
    LanguageCodeEnum["HrHr"] = "HR_HR";
    LanguageCodeEnum["Hsb"] = "HSB";
    LanguageCodeEnum["HsbDe"] = "HSB_DE";
    LanguageCodeEnum["Hu"] = "HU";
    LanguageCodeEnum["HuHu"] = "HU_HU";
    LanguageCodeEnum["Hy"] = "HY";
    LanguageCodeEnum["HyAm"] = "HY_AM";
    LanguageCodeEnum["Ia"] = "IA";
    LanguageCodeEnum["Id"] = "ID";
    LanguageCodeEnum["IdId"] = "ID_ID";
    LanguageCodeEnum["Ig"] = "IG";
    LanguageCodeEnum["IgNg"] = "IG_NG";
    LanguageCodeEnum["Ii"] = "II";
    LanguageCodeEnum["IiCn"] = "II_CN";
    LanguageCodeEnum["Is"] = "IS";
    LanguageCodeEnum["IsIs"] = "IS_IS";
    LanguageCodeEnum["It"] = "IT";
    LanguageCodeEnum["ItCh"] = "IT_CH";
    LanguageCodeEnum["ItIt"] = "IT_IT";
    LanguageCodeEnum["ItSm"] = "IT_SM";
    LanguageCodeEnum["ItVa"] = "IT_VA";
    LanguageCodeEnum["Ja"] = "JA";
    LanguageCodeEnum["JaJp"] = "JA_JP";
    LanguageCodeEnum["Jgo"] = "JGO";
    LanguageCodeEnum["JgoCm"] = "JGO_CM";
    LanguageCodeEnum["Jmc"] = "JMC";
    LanguageCodeEnum["JmcTz"] = "JMC_TZ";
    LanguageCodeEnum["Jv"] = "JV";
    LanguageCodeEnum["JvId"] = "JV_ID";
    LanguageCodeEnum["Ka"] = "KA";
    LanguageCodeEnum["Kab"] = "KAB";
    LanguageCodeEnum["KabDz"] = "KAB_DZ";
    LanguageCodeEnum["Kam"] = "KAM";
    LanguageCodeEnum["KamKe"] = "KAM_KE";
    LanguageCodeEnum["KaGe"] = "KA_GE";
    LanguageCodeEnum["Kde"] = "KDE";
    LanguageCodeEnum["KdeTz"] = "KDE_TZ";
    LanguageCodeEnum["Kea"] = "KEA";
    LanguageCodeEnum["KeaCv"] = "KEA_CV";
    LanguageCodeEnum["Khq"] = "KHQ";
    LanguageCodeEnum["KhqMl"] = "KHQ_ML";
    LanguageCodeEnum["Ki"] = "KI";
    LanguageCodeEnum["KiKe"] = "KI_KE";
    LanguageCodeEnum["Kk"] = "KK";
    LanguageCodeEnum["Kkj"] = "KKJ";
    LanguageCodeEnum["KkjCm"] = "KKJ_CM";
    LanguageCodeEnum["KkKz"] = "KK_KZ";
    LanguageCodeEnum["Kl"] = "KL";
    LanguageCodeEnum["Kln"] = "KLN";
    LanguageCodeEnum["KlnKe"] = "KLN_KE";
    LanguageCodeEnum["KlGl"] = "KL_GL";
    LanguageCodeEnum["Km"] = "KM";
    LanguageCodeEnum["KmKh"] = "KM_KH";
    LanguageCodeEnum["Kn"] = "KN";
    LanguageCodeEnum["KnIn"] = "KN_IN";
    LanguageCodeEnum["Ko"] = "KO";
    LanguageCodeEnum["Kok"] = "KOK";
    LanguageCodeEnum["KokIn"] = "KOK_IN";
    LanguageCodeEnum["KoKp"] = "KO_KP";
    LanguageCodeEnum["KoKr"] = "KO_KR";
    LanguageCodeEnum["Ks"] = "KS";
    LanguageCodeEnum["Ksb"] = "KSB";
    LanguageCodeEnum["KsbTz"] = "KSB_TZ";
    LanguageCodeEnum["Ksf"] = "KSF";
    LanguageCodeEnum["KsfCm"] = "KSF_CM";
    LanguageCodeEnum["Ksh"] = "KSH";
    LanguageCodeEnum["KshDe"] = "KSH_DE";
    LanguageCodeEnum["KsArab"] = "KS_ARAB";
    LanguageCodeEnum["KsArabIn"] = "KS_ARAB_IN";
    LanguageCodeEnum["Ku"] = "KU";
    LanguageCodeEnum["KuTr"] = "KU_TR";
    LanguageCodeEnum["Kw"] = "KW";
    LanguageCodeEnum["KwGb"] = "KW_GB";
    LanguageCodeEnum["Ky"] = "KY";
    LanguageCodeEnum["KyKg"] = "KY_KG";
    LanguageCodeEnum["Lag"] = "LAG";
    LanguageCodeEnum["LagTz"] = "LAG_TZ";
    LanguageCodeEnum["Lb"] = "LB";
    LanguageCodeEnum["LbLu"] = "LB_LU";
    LanguageCodeEnum["Lg"] = "LG";
    LanguageCodeEnum["LgUg"] = "LG_UG";
    LanguageCodeEnum["Lkt"] = "LKT";
    LanguageCodeEnum["LktUs"] = "LKT_US";
    LanguageCodeEnum["Ln"] = "LN";
    LanguageCodeEnum["LnAo"] = "LN_AO";
    LanguageCodeEnum["LnCd"] = "LN_CD";
    LanguageCodeEnum["LnCf"] = "LN_CF";
    LanguageCodeEnum["LnCg"] = "LN_CG";
    LanguageCodeEnum["Lo"] = "LO";
    LanguageCodeEnum["LoLa"] = "LO_LA";
    LanguageCodeEnum["Lrc"] = "LRC";
    LanguageCodeEnum["LrcIq"] = "LRC_IQ";
    LanguageCodeEnum["LrcIr"] = "LRC_IR";
    LanguageCodeEnum["Lt"] = "LT";
    LanguageCodeEnum["LtLt"] = "LT_LT";
    LanguageCodeEnum["Lu"] = "LU";
    LanguageCodeEnum["Luo"] = "LUO";
    LanguageCodeEnum["LuoKe"] = "LUO_KE";
    LanguageCodeEnum["Luy"] = "LUY";
    LanguageCodeEnum["LuyKe"] = "LUY_KE";
    LanguageCodeEnum["LuCd"] = "LU_CD";
    LanguageCodeEnum["Lv"] = "LV";
    LanguageCodeEnum["LvLv"] = "LV_LV";
    LanguageCodeEnum["Mai"] = "MAI";
    LanguageCodeEnum["MaiIn"] = "MAI_IN";
    LanguageCodeEnum["Mas"] = "MAS";
    LanguageCodeEnum["MasKe"] = "MAS_KE";
    LanguageCodeEnum["MasTz"] = "MAS_TZ";
    LanguageCodeEnum["Mer"] = "MER";
    LanguageCodeEnum["MerKe"] = "MER_KE";
    LanguageCodeEnum["Mfe"] = "MFE";
    LanguageCodeEnum["MfeMu"] = "MFE_MU";
    LanguageCodeEnum["Mg"] = "MG";
    LanguageCodeEnum["Mgh"] = "MGH";
    LanguageCodeEnum["MghMz"] = "MGH_MZ";
    LanguageCodeEnum["Mgo"] = "MGO";
    LanguageCodeEnum["MgoCm"] = "MGO_CM";
    LanguageCodeEnum["MgMg"] = "MG_MG";
    LanguageCodeEnum["Mi"] = "MI";
    LanguageCodeEnum["MiNz"] = "MI_NZ";
    LanguageCodeEnum["Mk"] = "MK";
    LanguageCodeEnum["MkMk"] = "MK_MK";
    LanguageCodeEnum["Ml"] = "ML";
    LanguageCodeEnum["MlIn"] = "ML_IN";
    LanguageCodeEnum["Mn"] = "MN";
    LanguageCodeEnum["Mni"] = "MNI";
    LanguageCodeEnum["MniBeng"] = "MNI_BENG";
    LanguageCodeEnum["MniBengIn"] = "MNI_BENG_IN";
    LanguageCodeEnum["MnMn"] = "MN_MN";
    LanguageCodeEnum["Mr"] = "MR";
    LanguageCodeEnum["MrIn"] = "MR_IN";
    LanguageCodeEnum["Ms"] = "MS";
    LanguageCodeEnum["MsBn"] = "MS_BN";
    LanguageCodeEnum["MsId"] = "MS_ID";
    LanguageCodeEnum["MsMy"] = "MS_MY";
    LanguageCodeEnum["MsSg"] = "MS_SG";
    LanguageCodeEnum["Mt"] = "MT";
    LanguageCodeEnum["MtMt"] = "MT_MT";
    LanguageCodeEnum["Mua"] = "MUA";
    LanguageCodeEnum["MuaCm"] = "MUA_CM";
    LanguageCodeEnum["My"] = "MY";
    LanguageCodeEnum["MyMm"] = "MY_MM";
    LanguageCodeEnum["Mzn"] = "MZN";
    LanguageCodeEnum["MznIr"] = "MZN_IR";
    LanguageCodeEnum["Naq"] = "NAQ";
    LanguageCodeEnum["NaqNa"] = "NAQ_NA";
    LanguageCodeEnum["Nb"] = "NB";
    LanguageCodeEnum["NbNo"] = "NB_NO";
    LanguageCodeEnum["NbSj"] = "NB_SJ";
    LanguageCodeEnum["Nd"] = "ND";
    LanguageCodeEnum["Nds"] = "NDS";
    LanguageCodeEnum["NdsDe"] = "NDS_DE";
    LanguageCodeEnum["NdsNl"] = "NDS_NL";
    LanguageCodeEnum["NdZw"] = "ND_ZW";
    LanguageCodeEnum["Ne"] = "NE";
    LanguageCodeEnum["NeIn"] = "NE_IN";
    LanguageCodeEnum["NeNp"] = "NE_NP";
    LanguageCodeEnum["Nl"] = "NL";
    LanguageCodeEnum["NlAw"] = "NL_AW";
    LanguageCodeEnum["NlBe"] = "NL_BE";
    LanguageCodeEnum["NlBq"] = "NL_BQ";
    LanguageCodeEnum["NlCw"] = "NL_CW";
    LanguageCodeEnum["NlNl"] = "NL_NL";
    LanguageCodeEnum["NlSr"] = "NL_SR";
    LanguageCodeEnum["NlSx"] = "NL_SX";
    LanguageCodeEnum["Nmg"] = "NMG";
    LanguageCodeEnum["NmgCm"] = "NMG_CM";
    LanguageCodeEnum["Nn"] = "NN";
    LanguageCodeEnum["Nnh"] = "NNH";
    LanguageCodeEnum["NnhCm"] = "NNH_CM";
    LanguageCodeEnum["NnNo"] = "NN_NO";
    LanguageCodeEnum["Nus"] = "NUS";
    LanguageCodeEnum["NusSs"] = "NUS_SS";
    LanguageCodeEnum["Nyn"] = "NYN";
    LanguageCodeEnum["NynUg"] = "NYN_UG";
    LanguageCodeEnum["Om"] = "OM";
    LanguageCodeEnum["OmEt"] = "OM_ET";
    LanguageCodeEnum["OmKe"] = "OM_KE";
    LanguageCodeEnum["Or"] = "OR";
    LanguageCodeEnum["OrIn"] = "OR_IN";
    LanguageCodeEnum["Os"] = "OS";
    LanguageCodeEnum["OsGe"] = "OS_GE";
    LanguageCodeEnum["OsRu"] = "OS_RU";
    LanguageCodeEnum["Pa"] = "PA";
    LanguageCodeEnum["PaArab"] = "PA_ARAB";
    LanguageCodeEnum["PaArabPk"] = "PA_ARAB_PK";
    LanguageCodeEnum["PaGuru"] = "PA_GURU";
    LanguageCodeEnum["PaGuruIn"] = "PA_GURU_IN";
    LanguageCodeEnum["Pcm"] = "PCM";
    LanguageCodeEnum["PcmNg"] = "PCM_NG";
    LanguageCodeEnum["Pl"] = "PL";
    LanguageCodeEnum["PlPl"] = "PL_PL";
    LanguageCodeEnum["Prg"] = "PRG";
    LanguageCodeEnum["Ps"] = "PS";
    LanguageCodeEnum["PsAf"] = "PS_AF";
    LanguageCodeEnum["PsPk"] = "PS_PK";
    LanguageCodeEnum["Pt"] = "PT";
    LanguageCodeEnum["PtAo"] = "PT_AO";
    LanguageCodeEnum["PtBr"] = "PT_BR";
    LanguageCodeEnum["PtCh"] = "PT_CH";
    LanguageCodeEnum["PtCv"] = "PT_CV";
    LanguageCodeEnum["PtGq"] = "PT_GQ";
    LanguageCodeEnum["PtGw"] = "PT_GW";
    LanguageCodeEnum["PtLu"] = "PT_LU";
    LanguageCodeEnum["PtMo"] = "PT_MO";
    LanguageCodeEnum["PtMz"] = "PT_MZ";
    LanguageCodeEnum["PtPt"] = "PT_PT";
    LanguageCodeEnum["PtSt"] = "PT_ST";
    LanguageCodeEnum["PtTl"] = "PT_TL";
    LanguageCodeEnum["Qu"] = "QU";
    LanguageCodeEnum["QuBo"] = "QU_BO";
    LanguageCodeEnum["QuEc"] = "QU_EC";
    LanguageCodeEnum["QuPe"] = "QU_PE";
    LanguageCodeEnum["Rm"] = "RM";
    LanguageCodeEnum["RmCh"] = "RM_CH";
    LanguageCodeEnum["Rn"] = "RN";
    LanguageCodeEnum["RnBi"] = "RN_BI";
    LanguageCodeEnum["Ro"] = "RO";
    LanguageCodeEnum["Rof"] = "ROF";
    LanguageCodeEnum["RofTz"] = "ROF_TZ";
    LanguageCodeEnum["RoMd"] = "RO_MD";
    LanguageCodeEnum["RoRo"] = "RO_RO";
    LanguageCodeEnum["Ru"] = "RU";
    LanguageCodeEnum["RuBy"] = "RU_BY";
    LanguageCodeEnum["RuKg"] = "RU_KG";
    LanguageCodeEnum["RuKz"] = "RU_KZ";
    LanguageCodeEnum["RuMd"] = "RU_MD";
    LanguageCodeEnum["RuRu"] = "RU_RU";
    LanguageCodeEnum["RuUa"] = "RU_UA";
    LanguageCodeEnum["Rw"] = "RW";
    LanguageCodeEnum["Rwk"] = "RWK";
    LanguageCodeEnum["RwkTz"] = "RWK_TZ";
    LanguageCodeEnum["RwRw"] = "RW_RW";
    LanguageCodeEnum["Sah"] = "SAH";
    LanguageCodeEnum["SahRu"] = "SAH_RU";
    LanguageCodeEnum["Saq"] = "SAQ";
    LanguageCodeEnum["SaqKe"] = "SAQ_KE";
    LanguageCodeEnum["Sat"] = "SAT";
    LanguageCodeEnum["SatOlck"] = "SAT_OLCK";
    LanguageCodeEnum["SatOlckIn"] = "SAT_OLCK_IN";
    LanguageCodeEnum["Sbp"] = "SBP";
    LanguageCodeEnum["SbpTz"] = "SBP_TZ";
    LanguageCodeEnum["Sd"] = "SD";
    LanguageCodeEnum["SdArab"] = "SD_ARAB";
    LanguageCodeEnum["SdArabPk"] = "SD_ARAB_PK";
    LanguageCodeEnum["SdDeva"] = "SD_DEVA";
    LanguageCodeEnum["SdDevaIn"] = "SD_DEVA_IN";
    LanguageCodeEnum["Se"] = "SE";
    LanguageCodeEnum["Seh"] = "SEH";
    LanguageCodeEnum["SehMz"] = "SEH_MZ";
    LanguageCodeEnum["Ses"] = "SES";
    LanguageCodeEnum["SesMl"] = "SES_ML";
    LanguageCodeEnum["SeFi"] = "SE_FI";
    LanguageCodeEnum["SeNo"] = "SE_NO";
    LanguageCodeEnum["SeSe"] = "SE_SE";
    LanguageCodeEnum["Sg"] = "SG";
    LanguageCodeEnum["SgCf"] = "SG_CF";
    LanguageCodeEnum["Shi"] = "SHI";
    LanguageCodeEnum["ShiLatn"] = "SHI_LATN";
    LanguageCodeEnum["ShiLatnMa"] = "SHI_LATN_MA";
    LanguageCodeEnum["ShiTfng"] = "SHI_TFNG";
    LanguageCodeEnum["ShiTfngMa"] = "SHI_TFNG_MA";
    LanguageCodeEnum["Si"] = "SI";
    LanguageCodeEnum["SiLk"] = "SI_LK";
    LanguageCodeEnum["Sk"] = "SK";
    LanguageCodeEnum["SkSk"] = "SK_SK";
    LanguageCodeEnum["Sl"] = "SL";
    LanguageCodeEnum["SlSi"] = "SL_SI";
    LanguageCodeEnum["Smn"] = "SMN";
    LanguageCodeEnum["SmnFi"] = "SMN_FI";
    LanguageCodeEnum["Sn"] = "SN";
    LanguageCodeEnum["SnZw"] = "SN_ZW";
    LanguageCodeEnum["So"] = "SO";
    LanguageCodeEnum["SoDj"] = "SO_DJ";
    LanguageCodeEnum["SoEt"] = "SO_ET";
    LanguageCodeEnum["SoKe"] = "SO_KE";
    LanguageCodeEnum["SoSo"] = "SO_SO";
    LanguageCodeEnum["Sq"] = "SQ";
    LanguageCodeEnum["SqAl"] = "SQ_AL";
    LanguageCodeEnum["SqMk"] = "SQ_MK";
    LanguageCodeEnum["SqXk"] = "SQ_XK";
    LanguageCodeEnum["Sr"] = "SR";
    LanguageCodeEnum["SrCyrl"] = "SR_CYRL";
    LanguageCodeEnum["SrCyrlBa"] = "SR_CYRL_BA";
    LanguageCodeEnum["SrCyrlMe"] = "SR_CYRL_ME";
    LanguageCodeEnum["SrCyrlRs"] = "SR_CYRL_RS";
    LanguageCodeEnum["SrCyrlXk"] = "SR_CYRL_XK";
    LanguageCodeEnum["SrLatn"] = "SR_LATN";
    LanguageCodeEnum["SrLatnBa"] = "SR_LATN_BA";
    LanguageCodeEnum["SrLatnMe"] = "SR_LATN_ME";
    LanguageCodeEnum["SrLatnRs"] = "SR_LATN_RS";
    LanguageCodeEnum["SrLatnXk"] = "SR_LATN_XK";
    LanguageCodeEnum["Su"] = "SU";
    LanguageCodeEnum["SuLatn"] = "SU_LATN";
    LanguageCodeEnum["SuLatnId"] = "SU_LATN_ID";
    LanguageCodeEnum["Sv"] = "SV";
    LanguageCodeEnum["SvAx"] = "SV_AX";
    LanguageCodeEnum["SvFi"] = "SV_FI";
    LanguageCodeEnum["SvSe"] = "SV_SE";
    LanguageCodeEnum["Sw"] = "SW";
    LanguageCodeEnum["SwCd"] = "SW_CD";
    LanguageCodeEnum["SwKe"] = "SW_KE";
    LanguageCodeEnum["SwTz"] = "SW_TZ";
    LanguageCodeEnum["SwUg"] = "SW_UG";
    LanguageCodeEnum["Ta"] = "TA";
    LanguageCodeEnum["TaIn"] = "TA_IN";
    LanguageCodeEnum["TaLk"] = "TA_LK";
    LanguageCodeEnum["TaMy"] = "TA_MY";
    LanguageCodeEnum["TaSg"] = "TA_SG";
    LanguageCodeEnum["Te"] = "TE";
    LanguageCodeEnum["Teo"] = "TEO";
    LanguageCodeEnum["TeoKe"] = "TEO_KE";
    LanguageCodeEnum["TeoUg"] = "TEO_UG";
    LanguageCodeEnum["TeIn"] = "TE_IN";
    LanguageCodeEnum["Tg"] = "TG";
    LanguageCodeEnum["TgTj"] = "TG_TJ";
    LanguageCodeEnum["Th"] = "TH";
    LanguageCodeEnum["ThTh"] = "TH_TH";
    LanguageCodeEnum["Ti"] = "TI";
    LanguageCodeEnum["TiEr"] = "TI_ER";
    LanguageCodeEnum["TiEt"] = "TI_ET";
    LanguageCodeEnum["Tk"] = "TK";
    LanguageCodeEnum["TkTm"] = "TK_TM";
    LanguageCodeEnum["To"] = "TO";
    LanguageCodeEnum["ToTo"] = "TO_TO";
    LanguageCodeEnum["Tr"] = "TR";
    LanguageCodeEnum["TrCy"] = "TR_CY";
    LanguageCodeEnum["TrTr"] = "TR_TR";
    LanguageCodeEnum["Tt"] = "TT";
    LanguageCodeEnum["TtRu"] = "TT_RU";
    LanguageCodeEnum["Twq"] = "TWQ";
    LanguageCodeEnum["TwqNe"] = "TWQ_NE";
    LanguageCodeEnum["Tzm"] = "TZM";
    LanguageCodeEnum["TzmMa"] = "TZM_MA";
    LanguageCodeEnum["Ug"] = "UG";
    LanguageCodeEnum["UgCn"] = "UG_CN";
    LanguageCodeEnum["Uk"] = "UK";
    LanguageCodeEnum["UkUa"] = "UK_UA";
    LanguageCodeEnum["Ur"] = "UR";
    LanguageCodeEnum["UrIn"] = "UR_IN";
    LanguageCodeEnum["UrPk"] = "UR_PK";
    LanguageCodeEnum["Uz"] = "UZ";
    LanguageCodeEnum["UzArab"] = "UZ_ARAB";
    LanguageCodeEnum["UzArabAf"] = "UZ_ARAB_AF";
    LanguageCodeEnum["UzCyrl"] = "UZ_CYRL";
    LanguageCodeEnum["UzCyrlUz"] = "UZ_CYRL_UZ";
    LanguageCodeEnum["UzLatn"] = "UZ_LATN";
    LanguageCodeEnum["UzLatnUz"] = "UZ_LATN_UZ";
    LanguageCodeEnum["Vai"] = "VAI";
    LanguageCodeEnum["VaiLatn"] = "VAI_LATN";
    LanguageCodeEnum["VaiLatnLr"] = "VAI_LATN_LR";
    LanguageCodeEnum["VaiVaii"] = "VAI_VAII";
    LanguageCodeEnum["VaiVaiiLr"] = "VAI_VAII_LR";
    LanguageCodeEnum["Vi"] = "VI";
    LanguageCodeEnum["ViVn"] = "VI_VN";
    LanguageCodeEnum["Vo"] = "VO";
    LanguageCodeEnum["Vun"] = "VUN";
    LanguageCodeEnum["VunTz"] = "VUN_TZ";
    LanguageCodeEnum["Wae"] = "WAE";
    LanguageCodeEnum["WaeCh"] = "WAE_CH";
    LanguageCodeEnum["Wo"] = "WO";
    LanguageCodeEnum["WoSn"] = "WO_SN";
    LanguageCodeEnum["Xh"] = "XH";
    LanguageCodeEnum["XhZa"] = "XH_ZA";
    LanguageCodeEnum["Xog"] = "XOG";
    LanguageCodeEnum["XogUg"] = "XOG_UG";
    LanguageCodeEnum["Yav"] = "YAV";
    LanguageCodeEnum["YavCm"] = "YAV_CM";
    LanguageCodeEnum["Yi"] = "YI";
    LanguageCodeEnum["Yo"] = "YO";
    LanguageCodeEnum["YoBj"] = "YO_BJ";
    LanguageCodeEnum["YoNg"] = "YO_NG";
    LanguageCodeEnum["Yue"] = "YUE";
    LanguageCodeEnum["YueHans"] = "YUE_HANS";
    LanguageCodeEnum["YueHansCn"] = "YUE_HANS_CN";
    LanguageCodeEnum["YueHant"] = "YUE_HANT";
    LanguageCodeEnum["YueHantHk"] = "YUE_HANT_HK";
    LanguageCodeEnum["Zgh"] = "ZGH";
    LanguageCodeEnum["ZghMa"] = "ZGH_MA";
    LanguageCodeEnum["Zh"] = "ZH";
    LanguageCodeEnum["ZhHans"] = "ZH_HANS";
    LanguageCodeEnum["ZhHansCn"] = "ZH_HANS_CN";
    LanguageCodeEnum["ZhHansHk"] = "ZH_HANS_HK";
    LanguageCodeEnum["ZhHansMo"] = "ZH_HANS_MO";
    LanguageCodeEnum["ZhHansSg"] = "ZH_HANS_SG";
    LanguageCodeEnum["ZhHant"] = "ZH_HANT";
    LanguageCodeEnum["ZhHantHk"] = "ZH_HANT_HK";
    LanguageCodeEnum["ZhHantMo"] = "ZH_HANT_MO";
    LanguageCodeEnum["ZhHantTw"] = "ZH_HANT_TW";
    LanguageCodeEnum["Zu"] = "ZU";
    LanguageCodeEnum["ZuZa"] = "ZU_ZA";
})(LanguageCodeEnum = exports.LanguageCodeEnum || (exports.LanguageCodeEnum = {}));
/** An enumeration. */
var MeasurementUnitsEnum;
(function (MeasurementUnitsEnum) {
    MeasurementUnitsEnum["AcreFt"] = "ACRE_FT";
    MeasurementUnitsEnum["AcreIn"] = "ACRE_IN";
    MeasurementUnitsEnum["Cm"] = "CM";
    MeasurementUnitsEnum["CubicCentimeter"] = "CUBIC_CENTIMETER";
    MeasurementUnitsEnum["CubicDecimeter"] = "CUBIC_DECIMETER";
    MeasurementUnitsEnum["CubicFoot"] = "CUBIC_FOOT";
    MeasurementUnitsEnum["CubicInch"] = "CUBIC_INCH";
    MeasurementUnitsEnum["CubicMeter"] = "CUBIC_METER";
    MeasurementUnitsEnum["CubicMillimeter"] = "CUBIC_MILLIMETER";
    MeasurementUnitsEnum["CubicYard"] = "CUBIC_YARD";
    MeasurementUnitsEnum["FlOz"] = "FL_OZ";
    MeasurementUnitsEnum["Ft"] = "FT";
    MeasurementUnitsEnum["G"] = "G";
    MeasurementUnitsEnum["Inch"] = "INCH";
    MeasurementUnitsEnum["Kg"] = "KG";
    MeasurementUnitsEnum["Km"] = "KM";
    MeasurementUnitsEnum["Lb"] = "LB";
    MeasurementUnitsEnum["Liter"] = "LITER";
    MeasurementUnitsEnum["M"] = "M";
    MeasurementUnitsEnum["Oz"] = "OZ";
    MeasurementUnitsEnum["Pint"] = "PINT";
    MeasurementUnitsEnum["Qt"] = "QT";
    MeasurementUnitsEnum["SqCm"] = "SQ_CM";
    MeasurementUnitsEnum["SqFt"] = "SQ_FT";
    MeasurementUnitsEnum["SqInch"] = "SQ_INCH";
    MeasurementUnitsEnum["SqKm"] = "SQ_KM";
    MeasurementUnitsEnum["SqM"] = "SQ_M";
    MeasurementUnitsEnum["SqYd"] = "SQ_YD";
    MeasurementUnitsEnum["Tonne"] = "TONNE";
    MeasurementUnitsEnum["Yd"] = "YD";
})(MeasurementUnitsEnum = exports.MeasurementUnitsEnum || (exports.MeasurementUnitsEnum = {}));
/** An enumeration. */
var MenuErrorCode;
(function (MenuErrorCode) {
    MenuErrorCode["CannotAssignNode"] = "CANNOT_ASSIGN_NODE";
    MenuErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    MenuErrorCode["Invalid"] = "INVALID";
    MenuErrorCode["InvalidMenuItem"] = "INVALID_MENU_ITEM";
    MenuErrorCode["NotFound"] = "NOT_FOUND";
    MenuErrorCode["NoMenuItemProvided"] = "NO_MENU_ITEM_PROVIDED";
    MenuErrorCode["Required"] = "REQUIRED";
    MenuErrorCode["TooManyMenuItems"] = "TOO_MANY_MENU_ITEMS";
    MenuErrorCode["Unique"] = "UNIQUE";
})(MenuErrorCode = exports.MenuErrorCode || (exports.MenuErrorCode = {}));
var MenuItemsSortField;
(function (MenuItemsSortField) {
    /** Sort menu items by name. */
    MenuItemsSortField["Name"] = "NAME";
})(MenuItemsSortField = exports.MenuItemsSortField || (exports.MenuItemsSortField = {}));
var MenuSortField;
(function (MenuSortField) {
    /** Sort menus by items count. */
    MenuSortField["ItemsCount"] = "ITEMS_COUNT";
    /** Sort menus by name. */
    MenuSortField["Name"] = "NAME";
})(MenuSortField = exports.MenuSortField || (exports.MenuSortField = {}));
/** An enumeration. */
var MetadataErrorCode;
(function (MetadataErrorCode) {
    MetadataErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    MetadataErrorCode["Invalid"] = "INVALID";
    MetadataErrorCode["NotFound"] = "NOT_FOUND";
    MetadataErrorCode["NotUpdated"] = "NOT_UPDATED";
    MetadataErrorCode["Required"] = "REQUIRED";
})(MetadataErrorCode = exports.MetadataErrorCode || (exports.MetadataErrorCode = {}));
var NavigationType;
(function (NavigationType) {
    /** Main storefront navigation. */
    NavigationType["Main"] = "MAIN";
    /** Secondary storefront navigation. */
    NavigationType["Secondary"] = "SECONDARY";
})(NavigationType = exports.NavigationType || (exports.NavigationType = {}));
var OrderAction;
(function (OrderAction) {
    /** Represents the capture action. */
    OrderAction["Capture"] = "CAPTURE";
    /** Represents a mark-as-paid action. */
    OrderAction["MarkAsPaid"] = "MARK_AS_PAID";
    /** Represents a refund action. */
    OrderAction["Refund"] = "REFUND";
    /** Represents a void action. */
    OrderAction["Void"] = "VOID";
})(OrderAction = exports.OrderAction || (exports.OrderAction = {}));
var OrderDirection;
(function (OrderDirection) {
    /** Specifies an ascending sort order. */
    OrderDirection["Asc"] = "ASC";
    /** Specifies a descending sort order. */
    OrderDirection["Desc"] = "DESC";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
/** An enumeration. */
var OrderDiscountType;
(function (OrderDiscountType) {
    OrderDiscountType["Manual"] = "MANUAL";
    OrderDiscountType["Voucher"] = "VOUCHER";
})(OrderDiscountType = exports.OrderDiscountType || (exports.OrderDiscountType = {}));
/** An enumeration. */
var OrderErrorCode;
(function (OrderErrorCode) {
    OrderErrorCode["BillingAddressNotSet"] = "BILLING_ADDRESS_NOT_SET";
    OrderErrorCode["CannotCancelFulfillment"] = "CANNOT_CANCEL_FULFILLMENT";
    OrderErrorCode["CannotCancelOrder"] = "CANNOT_CANCEL_ORDER";
    OrderErrorCode["CannotDelete"] = "CANNOT_DELETE";
    OrderErrorCode["CannotDiscount"] = "CANNOT_DISCOUNT";
    OrderErrorCode["CannotFulfillUnpaidOrder"] = "CANNOT_FULFILL_UNPAID_ORDER";
    OrderErrorCode["CannotRefund"] = "CANNOT_REFUND";
    OrderErrorCode["CaptureInactivePayment"] = "CAPTURE_INACTIVE_PAYMENT";
    OrderErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
    OrderErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    OrderErrorCode["FulfillOrderLine"] = "FULFILL_ORDER_LINE";
    OrderErrorCode["GiftCardLine"] = "GIFT_CARD_LINE";
    OrderErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    OrderErrorCode["InsufficientStock"] = "INSUFFICIENT_STOCK";
    OrderErrorCode["Invalid"] = "INVALID";
    OrderErrorCode["InvalidQuantity"] = "INVALID_QUANTITY";
    OrderErrorCode["NotAvailableInChannel"] = "NOT_AVAILABLE_IN_CHANNEL";
    OrderErrorCode["NotEditable"] = "NOT_EDITABLE";
    OrderErrorCode["NotFound"] = "NOT_FOUND";
    OrderErrorCode["OrderNoShippingAddress"] = "ORDER_NO_SHIPPING_ADDRESS";
    OrderErrorCode["PaymentError"] = "PAYMENT_ERROR";
    OrderErrorCode["PaymentMissing"] = "PAYMENT_MISSING";
    OrderErrorCode["ProductNotPublished"] = "PRODUCT_NOT_PUBLISHED";
    OrderErrorCode["ProductUnavailableForPurchase"] = "PRODUCT_UNAVAILABLE_FOR_PURCHASE";
    OrderErrorCode["Required"] = "REQUIRED";
    OrderErrorCode["ShippingMethodNotApplicable"] = "SHIPPING_METHOD_NOT_APPLICABLE";
    OrderErrorCode["ShippingMethodRequired"] = "SHIPPING_METHOD_REQUIRED";
    OrderErrorCode["TaxError"] = "TAX_ERROR";
    OrderErrorCode["Unique"] = "UNIQUE";
    OrderErrorCode["VoidInactivePayment"] = "VOID_INACTIVE_PAYMENT";
    OrderErrorCode["ZeroQuantity"] = "ZERO_QUANTITY";
})(OrderErrorCode = exports.OrderErrorCode || (exports.OrderErrorCode = {}));
/** An enumeration. */
var OrderEventsEmailsEnum;
(function (OrderEventsEmailsEnum) {
    OrderEventsEmailsEnum["Confirmed"] = "CONFIRMED";
    OrderEventsEmailsEnum["DigitalLinks"] = "DIGITAL_LINKS";
    OrderEventsEmailsEnum["FulfillmentConfirmation"] = "FULFILLMENT_CONFIRMATION";
    OrderEventsEmailsEnum["OrderCancel"] = "ORDER_CANCEL";
    OrderEventsEmailsEnum["OrderConfirmation"] = "ORDER_CONFIRMATION";
    OrderEventsEmailsEnum["OrderRefund"] = "ORDER_REFUND";
    OrderEventsEmailsEnum["PaymentConfirmation"] = "PAYMENT_CONFIRMATION";
    OrderEventsEmailsEnum["ShippingConfirmation"] = "SHIPPING_CONFIRMATION";
    OrderEventsEmailsEnum["TrackingUpdated"] = "TRACKING_UPDATED";
})(OrderEventsEmailsEnum = exports.OrderEventsEmailsEnum || (exports.OrderEventsEmailsEnum = {}));
/** An enumeration. */
var OrderEventsEnum;
(function (OrderEventsEnum) {
    OrderEventsEnum["AddedProducts"] = "ADDED_PRODUCTS";
    OrderEventsEnum["Canceled"] = "CANCELED";
    OrderEventsEnum["Confirmed"] = "CONFIRMED";
    OrderEventsEnum["DraftCreated"] = "DRAFT_CREATED";
    OrderEventsEnum["DraftCreatedFromReplace"] = "DRAFT_CREATED_FROM_REPLACE";
    OrderEventsEnum["EmailSent"] = "EMAIL_SENT";
    OrderEventsEnum["ExternalServiceNotification"] = "EXTERNAL_SERVICE_NOTIFICATION";
    OrderEventsEnum["FulfillmentAwaitsApproval"] = "FULFILLMENT_AWAITS_APPROVAL";
    OrderEventsEnum["FulfillmentCanceled"] = "FULFILLMENT_CANCELED";
    OrderEventsEnum["FulfillmentFulfilledItems"] = "FULFILLMENT_FULFILLED_ITEMS";
    OrderEventsEnum["FulfillmentRefunded"] = "FULFILLMENT_REFUNDED";
    OrderEventsEnum["FulfillmentReplaced"] = "FULFILLMENT_REPLACED";
    OrderEventsEnum["FulfillmentRestockedItems"] = "FULFILLMENT_RESTOCKED_ITEMS";
    OrderEventsEnum["FulfillmentReturned"] = "FULFILLMENT_RETURNED";
    OrderEventsEnum["InvoiceGenerated"] = "INVOICE_GENERATED";
    OrderEventsEnum["InvoiceRequested"] = "INVOICE_REQUESTED";
    OrderEventsEnum["InvoiceSent"] = "INVOICE_SENT";
    OrderEventsEnum["InvoiceUpdated"] = "INVOICE_UPDATED";
    OrderEventsEnum["NoteAdded"] = "NOTE_ADDED";
    OrderEventsEnum["OrderDiscountAdded"] = "ORDER_DISCOUNT_ADDED";
    OrderEventsEnum["OrderDiscountAutomaticallyUpdated"] = "ORDER_DISCOUNT_AUTOMATICALLY_UPDATED";
    OrderEventsEnum["OrderDiscountDeleted"] = "ORDER_DISCOUNT_DELETED";
    OrderEventsEnum["OrderDiscountUpdated"] = "ORDER_DISCOUNT_UPDATED";
    OrderEventsEnum["OrderFullyPaid"] = "ORDER_FULLY_PAID";
    OrderEventsEnum["OrderLineDiscountRemoved"] = "ORDER_LINE_DISCOUNT_REMOVED";
    OrderEventsEnum["OrderLineDiscountUpdated"] = "ORDER_LINE_DISCOUNT_UPDATED";
    OrderEventsEnum["OrderLineProductDeleted"] = "ORDER_LINE_PRODUCT_DELETED";
    OrderEventsEnum["OrderLineVariantDeleted"] = "ORDER_LINE_VARIANT_DELETED";
    OrderEventsEnum["OrderMarkedAsPaid"] = "ORDER_MARKED_AS_PAID";
    OrderEventsEnum["OrderReplacementCreated"] = "ORDER_REPLACEMENT_CREATED";
    OrderEventsEnum["Other"] = "OTHER";
    OrderEventsEnum["OversoldItems"] = "OVERSOLD_ITEMS";
    OrderEventsEnum["PaymentAuthorized"] = "PAYMENT_AUTHORIZED";
    OrderEventsEnum["PaymentCaptured"] = "PAYMENT_CAPTURED";
    OrderEventsEnum["PaymentFailed"] = "PAYMENT_FAILED";
    OrderEventsEnum["PaymentRefunded"] = "PAYMENT_REFUNDED";
    OrderEventsEnum["PaymentVoided"] = "PAYMENT_VOIDED";
    OrderEventsEnum["Placed"] = "PLACED";
    OrderEventsEnum["PlacedFromDraft"] = "PLACED_FROM_DRAFT";
    OrderEventsEnum["RemovedProducts"] = "REMOVED_PRODUCTS";
    OrderEventsEnum["TrackingUpdated"] = "TRACKING_UPDATED";
    OrderEventsEnum["UpdatedAddress"] = "UPDATED_ADDRESS";
})(OrderEventsEnum = exports.OrderEventsEnum || (exports.OrderEventsEnum = {}));
/** An enumeration. */
var OrderOriginEnum;
(function (OrderOriginEnum) {
    OrderOriginEnum["Checkout"] = "CHECKOUT";
    OrderOriginEnum["Draft"] = "DRAFT";
    OrderOriginEnum["Reissue"] = "REISSUE";
})(OrderOriginEnum = exports.OrderOriginEnum || (exports.OrderOriginEnum = {}));
/** An enumeration. */
var OrderSettingsErrorCode;
(function (OrderSettingsErrorCode) {
    OrderSettingsErrorCode["Invalid"] = "INVALID";
})(OrderSettingsErrorCode = exports.OrderSettingsErrorCode || (exports.OrderSettingsErrorCode = {}));
var OrderSortField;
(function (OrderSortField) {
    /**
     * Sort orders by creation date.
     *
     * DEPRECATED: this field will be removed in Saleor 4.0.
     */
    OrderSortField["CreatedAt"] = "CREATED_AT";
    /**
     * Sort orders by creation date.
     *
     * DEPRECATED: this field will be removed in Saleor 4.0.
     */
    OrderSortField["CreationDate"] = "CREATION_DATE";
    /** Sort orders by customer. */
    OrderSortField["Customer"] = "CUSTOMER";
    /** Sort orders by fulfillment status. */
    OrderSortField["FulfillmentStatus"] = "FULFILLMENT_STATUS";
    /** Sort orders by last modified at. */
    OrderSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
    /** Sort orders by number. */
    OrderSortField["Number"] = "NUMBER";
    /** Sort orders by payment. */
    OrderSortField["Payment"] = "PAYMENT";
})(OrderSortField = exports.OrderSortField || (exports.OrderSortField = {}));
/** An enumeration. */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Canceled"] = "CANCELED";
    OrderStatus["Draft"] = "DRAFT";
    OrderStatus["Fulfilled"] = "FULFILLED";
    OrderStatus["PartiallyFulfilled"] = "PARTIALLY_FULFILLED";
    OrderStatus["PartiallyReturned"] = "PARTIALLY_RETURNED";
    OrderStatus["Returned"] = "RETURNED";
    OrderStatus["Unconfirmed"] = "UNCONFIRMED";
    OrderStatus["Unfulfilled"] = "UNFULFILLED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var OrderStatusFilter;
(function (OrderStatusFilter) {
    OrderStatusFilter["Canceled"] = "CANCELED";
    OrderStatusFilter["Fulfilled"] = "FULFILLED";
    OrderStatusFilter["PartiallyFulfilled"] = "PARTIALLY_FULFILLED";
    OrderStatusFilter["ReadyToCapture"] = "READY_TO_CAPTURE";
    OrderStatusFilter["ReadyToFulfill"] = "READY_TO_FULFILL";
    OrderStatusFilter["Unconfirmed"] = "UNCONFIRMED";
    OrderStatusFilter["Unfulfilled"] = "UNFULFILLED";
})(OrderStatusFilter = exports.OrderStatusFilter || (exports.OrderStatusFilter = {}));
/** An enumeration. */
var PageErrorCode;
(function (PageErrorCode) {
    PageErrorCode["AttributeAlreadyAssigned"] = "ATTRIBUTE_ALREADY_ASSIGNED";
    PageErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    PageErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    PageErrorCode["Invalid"] = "INVALID";
    PageErrorCode["NotFound"] = "NOT_FOUND";
    PageErrorCode["Required"] = "REQUIRED";
    PageErrorCode["Unique"] = "UNIQUE";
})(PageErrorCode = exports.PageErrorCode || (exports.PageErrorCode = {}));
var PageSortField;
(function (PageSortField) {
    /** Sort pages by creation date. */
    PageSortField["CreationDate"] = "CREATION_DATE";
    /** Sort pages by publication date. */
    PageSortField["PublicationDate"] = "PUBLICATION_DATE";
    /** Sort pages by slug. */
    PageSortField["Slug"] = "SLUG";
    /** Sort pages by title. */
    PageSortField["Title"] = "TITLE";
    /** Sort pages by visibility. */
    PageSortField["Visibility"] = "VISIBILITY";
})(PageSortField = exports.PageSortField || (exports.PageSortField = {}));
var PageTypeSortField;
(function (PageTypeSortField) {
    /** Sort page types by name. */
    PageTypeSortField["Name"] = "NAME";
    /** Sort page types by slug. */
    PageTypeSortField["Slug"] = "SLUG";
})(PageTypeSortField = exports.PageTypeSortField || (exports.PageTypeSortField = {}));
/** An enumeration. */
var PaymentChargeStatusEnum;
(function (PaymentChargeStatusEnum) {
    PaymentChargeStatusEnum["Cancelled"] = "CANCELLED";
    PaymentChargeStatusEnum["FullyCharged"] = "FULLY_CHARGED";
    PaymentChargeStatusEnum["FullyRefunded"] = "FULLY_REFUNDED";
    PaymentChargeStatusEnum["NotCharged"] = "NOT_CHARGED";
    PaymentChargeStatusEnum["PartiallyCharged"] = "PARTIALLY_CHARGED";
    PaymentChargeStatusEnum["PartiallyRefunded"] = "PARTIALLY_REFUNDED";
    PaymentChargeStatusEnum["Pending"] = "PENDING";
    PaymentChargeStatusEnum["Refused"] = "REFUSED";
})(PaymentChargeStatusEnum = exports.PaymentChargeStatusEnum || (exports.PaymentChargeStatusEnum = {}));
/** An enumeration. */
var PaymentErrorCode;
(function (PaymentErrorCode) {
    PaymentErrorCode["BalanceCheckError"] = "BALANCE_CHECK_ERROR";
    PaymentErrorCode["BillingAddressNotSet"] = "BILLING_ADDRESS_NOT_SET";
    PaymentErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
    PaymentErrorCode["CheckoutEmailNotSet"] = "CHECKOUT_EMAIL_NOT_SET";
    PaymentErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    PaymentErrorCode["Invalid"] = "INVALID";
    PaymentErrorCode["InvalidShippingMethod"] = "INVALID_SHIPPING_METHOD";
    PaymentErrorCode["NotFound"] = "NOT_FOUND";
    PaymentErrorCode["NotSupportedGateway"] = "NOT_SUPPORTED_GATEWAY";
    PaymentErrorCode["NoCheckoutLines"] = "NO_CHECKOUT_LINES";
    PaymentErrorCode["PartialPaymentNotAllowed"] = "PARTIAL_PAYMENT_NOT_ALLOWED";
    PaymentErrorCode["PaymentError"] = "PAYMENT_ERROR";
    PaymentErrorCode["Required"] = "REQUIRED";
    PaymentErrorCode["ShippingAddressNotSet"] = "SHIPPING_ADDRESS_NOT_SET";
    PaymentErrorCode["ShippingMethodNotSet"] = "SHIPPING_METHOD_NOT_SET";
    PaymentErrorCode["UnavailableVariantInChannel"] = "UNAVAILABLE_VARIANT_IN_CHANNEL";
    PaymentErrorCode["Unique"] = "UNIQUE";
})(PaymentErrorCode = exports.PaymentErrorCode || (exports.PaymentErrorCode = {}));
/** An enumeration. */
var PermissionEnum;
(function (PermissionEnum) {
    PermissionEnum["HandlePayments"] = "HANDLE_PAYMENTS";
    PermissionEnum["ImpersonateUser"] = "IMPERSONATE_USER";
    PermissionEnum["ManageApps"] = "MANAGE_APPS";
    PermissionEnum["ManageChannels"] = "MANAGE_CHANNELS";
    PermissionEnum["ManageCheckouts"] = "MANAGE_CHECKOUTS";
    PermissionEnum["ManageDiscounts"] = "MANAGE_DISCOUNTS";
    PermissionEnum["ManageGiftCard"] = "MANAGE_GIFT_CARD";
    PermissionEnum["ManageMenus"] = "MANAGE_MENUS";
    PermissionEnum["ManageOrders"] = "MANAGE_ORDERS";
    PermissionEnum["ManagePages"] = "MANAGE_PAGES";
    PermissionEnum["ManagePageTypesAndAttributes"] = "MANAGE_PAGE_TYPES_AND_ATTRIBUTES";
    PermissionEnum["ManagePlugins"] = "MANAGE_PLUGINS";
    PermissionEnum["ManageProducts"] = "MANAGE_PRODUCTS";
    PermissionEnum["ManageProductTypesAndAttributes"] = "MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES";
    PermissionEnum["ManageSettings"] = "MANAGE_SETTINGS";
    PermissionEnum["ManageShipping"] = "MANAGE_SHIPPING";
    PermissionEnum["ManageStaff"] = "MANAGE_STAFF";
    PermissionEnum["ManageTranslations"] = "MANAGE_TRANSLATIONS";
    PermissionEnum["ManageUsers"] = "MANAGE_USERS";
})(PermissionEnum = exports.PermissionEnum || (exports.PermissionEnum = {}));
/** An enumeration. */
var PermissionGroupErrorCode;
(function (PermissionGroupErrorCode) {
    PermissionGroupErrorCode["AssignNonStaffMember"] = "ASSIGN_NON_STAFF_MEMBER";
    PermissionGroupErrorCode["CannotRemoveFromLastGroup"] = "CANNOT_REMOVE_FROM_LAST_GROUP";
    PermissionGroupErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    PermissionGroupErrorCode["LeftNotManageablePermission"] = "LEFT_NOT_MANAGEABLE_PERMISSION";
    PermissionGroupErrorCode["OutOfScopePermission"] = "OUT_OF_SCOPE_PERMISSION";
    PermissionGroupErrorCode["OutOfScopeUser"] = "OUT_OF_SCOPE_USER";
    PermissionGroupErrorCode["Required"] = "REQUIRED";
    PermissionGroupErrorCode["Unique"] = "UNIQUE";
})(PermissionGroupErrorCode = exports.PermissionGroupErrorCode || (exports.PermissionGroupErrorCode = {}));
var PermissionGroupSortField;
(function (PermissionGroupSortField) {
    /** Sort permission group accounts by name. */
    PermissionGroupSortField["Name"] = "NAME";
})(PermissionGroupSortField = exports.PermissionGroupSortField || (exports.PermissionGroupSortField = {}));
var PluginConfigurationType;
(function (PluginConfigurationType) {
    PluginConfigurationType["Global"] = "GLOBAL";
    PluginConfigurationType["PerChannel"] = "PER_CHANNEL";
})(PluginConfigurationType = exports.PluginConfigurationType || (exports.PluginConfigurationType = {}));
/** An enumeration. */
var PluginErrorCode;
(function (PluginErrorCode) {
    PluginErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    PluginErrorCode["Invalid"] = "INVALID";
    PluginErrorCode["NotFound"] = "NOT_FOUND";
    PluginErrorCode["PluginMisconfigured"] = "PLUGIN_MISCONFIGURED";
    PluginErrorCode["Required"] = "REQUIRED";
    PluginErrorCode["Unique"] = "UNIQUE";
})(PluginErrorCode = exports.PluginErrorCode || (exports.PluginErrorCode = {}));
var PluginSortField;
(function (PluginSortField) {
    PluginSortField["IsActive"] = "IS_ACTIVE";
    PluginSortField["Name"] = "NAME";
})(PluginSortField = exports.PluginSortField || (exports.PluginSortField = {}));
/** An enumeration. */
var PostalCodeRuleInclusionTypeEnum;
(function (PostalCodeRuleInclusionTypeEnum) {
    PostalCodeRuleInclusionTypeEnum["Exclude"] = "EXCLUDE";
    PostalCodeRuleInclusionTypeEnum["Include"] = "INCLUDE";
})(PostalCodeRuleInclusionTypeEnum = exports.PostalCodeRuleInclusionTypeEnum || (exports.PostalCodeRuleInclusionTypeEnum = {}));
var ProductAttributeType;
(function (ProductAttributeType) {
    ProductAttributeType["Product"] = "PRODUCT";
    ProductAttributeType["Variant"] = "VARIANT";
})(ProductAttributeType = exports.ProductAttributeType || (exports.ProductAttributeType = {}));
/** An enumeration. */
var ProductErrorCode;
(function (ProductErrorCode) {
    ProductErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    ProductErrorCode["AttributeAlreadyAssigned"] = "ATTRIBUTE_ALREADY_ASSIGNED";
    ProductErrorCode["AttributeCannotBeAssigned"] = "ATTRIBUTE_CANNOT_BE_ASSIGNED";
    ProductErrorCode["AttributeVariantsDisabled"] = "ATTRIBUTE_VARIANTS_DISABLED";
    ProductErrorCode["CannotManageProductWithoutVariant"] = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT";
    ProductErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    ProductErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    ProductErrorCode["Invalid"] = "INVALID";
    ProductErrorCode["NotFound"] = "NOT_FOUND";
    ProductErrorCode["NotProductsImage"] = "NOT_PRODUCTS_IMAGE";
    ProductErrorCode["NotProductsVariant"] = "NOT_PRODUCTS_VARIANT";
    ProductErrorCode["PreorderVariantCannotBeDeactivated"] = "PREORDER_VARIANT_CANNOT_BE_DEACTIVATED";
    ProductErrorCode["ProductNotAssignedToChannel"] = "PRODUCT_NOT_ASSIGNED_TO_CHANNEL";
    ProductErrorCode["ProductWithoutCategory"] = "PRODUCT_WITHOUT_CATEGORY";
    ProductErrorCode["Required"] = "REQUIRED";
    ProductErrorCode["Unique"] = "UNIQUE";
    ProductErrorCode["UnsupportedMediaProvider"] = "UNSUPPORTED_MEDIA_PROVIDER";
    ProductErrorCode["VariantNoDigitalContent"] = "VARIANT_NO_DIGITAL_CONTENT";
})(ProductErrorCode = exports.ProductErrorCode || (exports.ProductErrorCode = {}));
var ProductFieldEnum;
(function (ProductFieldEnum) {
    ProductFieldEnum["Category"] = "CATEGORY";
    ProductFieldEnum["ChargeTaxes"] = "CHARGE_TAXES";
    ProductFieldEnum["Collections"] = "COLLECTIONS";
    ProductFieldEnum["Description"] = "DESCRIPTION";
    ProductFieldEnum["Name"] = "NAME";
    ProductFieldEnum["ProductMedia"] = "PRODUCT_MEDIA";
    ProductFieldEnum["ProductType"] = "PRODUCT_TYPE";
    ProductFieldEnum["ProductWeight"] = "PRODUCT_WEIGHT";
    ProductFieldEnum["VariantId"] = "VARIANT_ID";
    ProductFieldEnum["VariantMedia"] = "VARIANT_MEDIA";
    ProductFieldEnum["VariantSku"] = "VARIANT_SKU";
    ProductFieldEnum["VariantWeight"] = "VARIANT_WEIGHT";
})(ProductFieldEnum = exports.ProductFieldEnum || (exports.ProductFieldEnum = {}));
/** An enumeration. */
var ProductMediaType;
(function (ProductMediaType) {
    ProductMediaType["Image"] = "IMAGE";
    ProductMediaType["Video"] = "VIDEO";
})(ProductMediaType = exports.ProductMediaType || (exports.ProductMediaType = {}));
var ProductOrderField;
(function (ProductOrderField) {
    /** Sort products by collection. Note: This option is available only for the `Collection.products` query. */
    ProductOrderField["Collection"] = "COLLECTION";
    /** Sort products by update date. */
    ProductOrderField["Date"] = "DATE";
    /** Sort products by update date. */
    ProductOrderField["LastModified"] = "LAST_MODIFIED";
    /** Sort products by update date. */
    ProductOrderField["LastModifiedAt"] = "LAST_MODIFIED_AT";
    /** Sort products by a minimal price of a product's variant. */
    ProductOrderField["MinimalPrice"] = "MINIMAL_PRICE";
    /** Sort products by name. */
    ProductOrderField["Name"] = "NAME";
    /** Sort products by price. */
    ProductOrderField["Price"] = "PRICE";
    /** Sort products by publication date. */
    ProductOrderField["PublicationDate"] = "PUBLICATION_DATE";
    /** Sort products by publication status. */
    ProductOrderField["Published"] = "PUBLISHED";
    /** Sort products by publication date. */
    ProductOrderField["PublishedAt"] = "PUBLISHED_AT";
    /** Sort products by name. */
    ProductOrderField["Rank"] = "RANK";
    /** Sort products by rating. */
    ProductOrderField["Rating"] = "RATING";
    /** Sort products by type. */
    ProductOrderField["Type"] = "TYPE";
})(ProductOrderField = exports.ProductOrderField || (exports.ProductOrderField = {}));
var ProductTypeConfigurable;
(function (ProductTypeConfigurable) {
    ProductTypeConfigurable["Configurable"] = "CONFIGURABLE";
    ProductTypeConfigurable["Simple"] = "SIMPLE";
})(ProductTypeConfigurable = exports.ProductTypeConfigurable || (exports.ProductTypeConfigurable = {}));
var ProductTypeEnum;
(function (ProductTypeEnum) {
    ProductTypeEnum["Digital"] = "DIGITAL";
    ProductTypeEnum["Shippable"] = "SHIPPABLE";
})(ProductTypeEnum = exports.ProductTypeEnum || (exports.ProductTypeEnum = {}));
/** An enumeration. */
var ProductTypeKindEnum;
(function (ProductTypeKindEnum) {
    ProductTypeKindEnum["GiftCard"] = "GIFT_CARD";
    ProductTypeKindEnum["Normal"] = "NORMAL";
})(ProductTypeKindEnum = exports.ProductTypeKindEnum || (exports.ProductTypeKindEnum = {}));
var ProductTypeSortField;
(function (ProductTypeSortField) {
    /** Sort products by type. */
    ProductTypeSortField["Digital"] = "DIGITAL";
    /** Sort products by name. */
    ProductTypeSortField["Name"] = "NAME";
    /** Sort products by shipping. */
    ProductTypeSortField["ShippingRequired"] = "SHIPPING_REQUIRED";
})(ProductTypeSortField = exports.ProductTypeSortField || (exports.ProductTypeSortField = {}));
var ProductVariantSortField;
(function (ProductVariantSortField) {
    /** Sort products variants by last modified at. */
    ProductVariantSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
})(ProductVariantSortField = exports.ProductVariantSortField || (exports.ProductVariantSortField = {}));
var ReportingPeriod;
(function (ReportingPeriod) {
    ReportingPeriod["ThisMonth"] = "THIS_MONTH";
    ReportingPeriod["Today"] = "TODAY";
})(ReportingPeriod = exports.ReportingPeriod || (exports.ReportingPeriod = {}));
var SaleSortField;
(function (SaleSortField) {
    /** Sort sales by created at. */
    SaleSortField["CreatedAt"] = "CREATED_AT";
    /** Sort sales by end date. */
    SaleSortField["EndDate"] = "END_DATE";
    /** Sort sales by last modified at. */
    SaleSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
    /** Sort sales by name. */
    SaleSortField["Name"] = "NAME";
    /** Sort sales by start date. */
    SaleSortField["StartDate"] = "START_DATE";
    /** Sort sales by type. */
    SaleSortField["Type"] = "TYPE";
    /** Sort sales by value. */
    SaleSortField["Value"] = "VALUE";
})(SaleSortField = exports.SaleSortField || (exports.SaleSortField = {}));
var SaleType;
(function (SaleType) {
    SaleType["Fixed"] = "FIXED";
    SaleType["Percentage"] = "PERCENTAGE";
})(SaleType = exports.SaleType || (exports.SaleType = {}));
/** An enumeration. */
var ShippingErrorCode;
(function (ShippingErrorCode) {
    ShippingErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    ShippingErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
    ShippingErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    ShippingErrorCode["Invalid"] = "INVALID";
    ShippingErrorCode["MaxLessThanMin"] = "MAX_LESS_THAN_MIN";
    ShippingErrorCode["NotFound"] = "NOT_FOUND";
    ShippingErrorCode["Required"] = "REQUIRED";
    ShippingErrorCode["Unique"] = "UNIQUE";
})(ShippingErrorCode = exports.ShippingErrorCode || (exports.ShippingErrorCode = {}));
/** An enumeration. */
var ShippingMethodTypeEnum;
(function (ShippingMethodTypeEnum) {
    ShippingMethodTypeEnum["Price"] = "PRICE";
    ShippingMethodTypeEnum["Weight"] = "WEIGHT";
})(ShippingMethodTypeEnum = exports.ShippingMethodTypeEnum || (exports.ShippingMethodTypeEnum = {}));
/** An enumeration. */
var ShopErrorCode;
(function (ShopErrorCode) {
    ShopErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    ShopErrorCode["CannotFetchTaxRates"] = "CANNOT_FETCH_TAX_RATES";
    ShopErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    ShopErrorCode["Invalid"] = "INVALID";
    ShopErrorCode["NotFound"] = "NOT_FOUND";
    ShopErrorCode["Required"] = "REQUIRED";
    ShopErrorCode["Unique"] = "UNIQUE";
})(ShopErrorCode = exports.ShopErrorCode || (exports.ShopErrorCode = {}));
var StaffMemberStatus;
(function (StaffMemberStatus) {
    /** User account has been activated. */
    StaffMemberStatus["Active"] = "ACTIVE";
    /** User account has not been activated yet. */
    StaffMemberStatus["Deactivated"] = "DEACTIVATED";
})(StaffMemberStatus = exports.StaffMemberStatus || (exports.StaffMemberStatus = {}));
var StockAvailability;
(function (StockAvailability) {
    StockAvailability["InStock"] = "IN_STOCK";
    StockAvailability["OutOfStock"] = "OUT_OF_STOCK";
})(StockAvailability = exports.StockAvailability || (exports.StockAvailability = {}));
/** An enumeration. */
var StockErrorCode;
(function (StockErrorCode) {
    StockErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    StockErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    StockErrorCode["Invalid"] = "INVALID";
    StockErrorCode["NotFound"] = "NOT_FOUND";
    StockErrorCode["Required"] = "REQUIRED";
    StockErrorCode["Unique"] = "UNIQUE";
})(StockErrorCode = exports.StockErrorCode || (exports.StockErrorCode = {}));
/** Enum representing the type of a payment storage in a gateway. */
var StorePaymentMethodEnum;
(function (StorePaymentMethodEnum) {
    /** Storage is disabled. The payment is not stored. */
    StorePaymentMethodEnum["None"] = "NONE";
    /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
    StorePaymentMethodEnum["OffSession"] = "OFF_SESSION";
    /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
    StorePaymentMethodEnum["OnSession"] = "ON_SESSION";
})(StorePaymentMethodEnum = exports.StorePaymentMethodEnum || (exports.StorePaymentMethodEnum = {}));
/** An enumeration. */
var TimePeriodTypeEnum;
(function (TimePeriodTypeEnum) {
    TimePeriodTypeEnum["Day"] = "DAY";
    TimePeriodTypeEnum["Month"] = "MONTH";
    TimePeriodTypeEnum["Week"] = "WEEK";
    TimePeriodTypeEnum["Year"] = "YEAR";
})(TimePeriodTypeEnum = exports.TimePeriodTypeEnum || (exports.TimePeriodTypeEnum = {}));
/** An enumeration. */
var TransactionKind;
(function (TransactionKind) {
    TransactionKind["ActionToConfirm"] = "ACTION_TO_CONFIRM";
    TransactionKind["Auth"] = "AUTH";
    TransactionKind["Cancel"] = "CANCEL";
    TransactionKind["Capture"] = "CAPTURE";
    TransactionKind["Confirm"] = "CONFIRM";
    TransactionKind["External"] = "EXTERNAL";
    TransactionKind["Pending"] = "PENDING";
    TransactionKind["Refund"] = "REFUND";
    TransactionKind["RefundOngoing"] = "REFUND_ONGOING";
    TransactionKind["Void"] = "VOID";
})(TransactionKind = exports.TransactionKind || (exports.TransactionKind = {}));
var TranslatableKinds;
(function (TranslatableKinds) {
    TranslatableKinds["Attribute"] = "ATTRIBUTE";
    TranslatableKinds["AttributeValue"] = "ATTRIBUTE_VALUE";
    TranslatableKinds["Category"] = "CATEGORY";
    TranslatableKinds["Collection"] = "COLLECTION";
    TranslatableKinds["MenuItem"] = "MENU_ITEM";
    TranslatableKinds["Page"] = "PAGE";
    TranslatableKinds["Product"] = "PRODUCT";
    TranslatableKinds["Sale"] = "SALE";
    TranslatableKinds["ShippingMethod"] = "SHIPPING_METHOD";
    TranslatableKinds["Variant"] = "VARIANT";
    TranslatableKinds["Voucher"] = "VOUCHER";
})(TranslatableKinds = exports.TranslatableKinds || (exports.TranslatableKinds = {}));
/** An enumeration. */
var TranslationErrorCode;
(function (TranslationErrorCode) {
    TranslationErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    TranslationErrorCode["Invalid"] = "INVALID";
    TranslationErrorCode["NotFound"] = "NOT_FOUND";
    TranslationErrorCode["Required"] = "REQUIRED";
})(TranslationErrorCode = exports.TranslationErrorCode || (exports.TranslationErrorCode = {}));
/** An enumeration. */
var UploadErrorCode;
(function (UploadErrorCode) {
    UploadErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
})(UploadErrorCode = exports.UploadErrorCode || (exports.UploadErrorCode = {}));
var UserSortField;
(function (UserSortField) {
    /** Sort users by created at. */
    UserSortField["CreatedAt"] = "CREATED_AT";
    /** Sort users by email. */
    UserSortField["Email"] = "EMAIL";
    /** Sort users by first name. */
    UserSortField["FirstName"] = "FIRST_NAME";
    /** Sort users by last modified at. */
    UserSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
    /** Sort users by last name. */
    UserSortField["LastName"] = "LAST_NAME";
    /** Sort users by order count. */
    UserSortField["OrderCount"] = "ORDER_COUNT";
})(UserSortField = exports.UserSortField || (exports.UserSortField = {}));
var VariantAttributeScope;
(function (VariantAttributeScope) {
    VariantAttributeScope["All"] = "ALL";
    VariantAttributeScope["NotVariantSelection"] = "NOT_VARIANT_SELECTION";
    VariantAttributeScope["VariantSelection"] = "VARIANT_SELECTION";
})(VariantAttributeScope = exports.VariantAttributeScope || (exports.VariantAttributeScope = {}));
/** An enumeration. */
var VolumeUnitsEnum;
(function (VolumeUnitsEnum) {
    VolumeUnitsEnum["AcreFt"] = "ACRE_FT";
    VolumeUnitsEnum["AcreIn"] = "ACRE_IN";
    VolumeUnitsEnum["CubicCentimeter"] = "CUBIC_CENTIMETER";
    VolumeUnitsEnum["CubicDecimeter"] = "CUBIC_DECIMETER";
    VolumeUnitsEnum["CubicFoot"] = "CUBIC_FOOT";
    VolumeUnitsEnum["CubicInch"] = "CUBIC_INCH";
    VolumeUnitsEnum["CubicMeter"] = "CUBIC_METER";
    VolumeUnitsEnum["CubicMillimeter"] = "CUBIC_MILLIMETER";
    VolumeUnitsEnum["CubicYard"] = "CUBIC_YARD";
    VolumeUnitsEnum["FlOz"] = "FL_OZ";
    VolumeUnitsEnum["Liter"] = "LITER";
    VolumeUnitsEnum["Pint"] = "PINT";
    VolumeUnitsEnum["Qt"] = "QT";
})(VolumeUnitsEnum = exports.VolumeUnitsEnum || (exports.VolumeUnitsEnum = {}));
var VoucherDiscountType;
(function (VoucherDiscountType) {
    VoucherDiscountType["Fixed"] = "FIXED";
    VoucherDiscountType["Percentage"] = "PERCENTAGE";
    VoucherDiscountType["Shipping"] = "SHIPPING";
})(VoucherDiscountType = exports.VoucherDiscountType || (exports.VoucherDiscountType = {}));
var VoucherSortField;
(function (VoucherSortField) {
    /** Sort vouchers by code. */
    VoucherSortField["Code"] = "CODE";
    /** Sort vouchers by end date. */
    VoucherSortField["EndDate"] = "END_DATE";
    /** Sort vouchers by minimum spent amount. */
    VoucherSortField["MinimumSpentAmount"] = "MINIMUM_SPENT_AMOUNT";
    /** Sort vouchers by start date. */
    VoucherSortField["StartDate"] = "START_DATE";
    /** Sort vouchers by type. */
    VoucherSortField["Type"] = "TYPE";
    /** Sort vouchers by usage limit. */
    VoucherSortField["UsageLimit"] = "USAGE_LIMIT";
    /** Sort vouchers by value. */
    VoucherSortField["Value"] = "VALUE";
})(VoucherSortField = exports.VoucherSortField || (exports.VoucherSortField = {}));
var VoucherTypeEnum;
(function (VoucherTypeEnum) {
    VoucherTypeEnum["EntireOrder"] = "ENTIRE_ORDER";
    VoucherTypeEnum["Shipping"] = "SHIPPING";
    VoucherTypeEnum["SpecificProduct"] = "SPECIFIC_PRODUCT";
})(VoucherTypeEnum = exports.VoucherTypeEnum || (exports.VoucherTypeEnum = {}));
/** An enumeration. */
var WarehouseClickAndCollectOptionEnum;
(function (WarehouseClickAndCollectOptionEnum) {
    WarehouseClickAndCollectOptionEnum["All"] = "ALL";
    WarehouseClickAndCollectOptionEnum["Disabled"] = "DISABLED";
    WarehouseClickAndCollectOptionEnum["Local"] = "LOCAL";
})(WarehouseClickAndCollectOptionEnum = exports.WarehouseClickAndCollectOptionEnum || (exports.WarehouseClickAndCollectOptionEnum = {}));
/** An enumeration. */
var WarehouseErrorCode;
(function (WarehouseErrorCode) {
    WarehouseErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    WarehouseErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    WarehouseErrorCode["Invalid"] = "INVALID";
    WarehouseErrorCode["NotFound"] = "NOT_FOUND";
    WarehouseErrorCode["Required"] = "REQUIRED";
    WarehouseErrorCode["Unique"] = "UNIQUE";
})(WarehouseErrorCode = exports.WarehouseErrorCode || (exports.WarehouseErrorCode = {}));
var WarehouseSortField;
(function (WarehouseSortField) {
    /** Sort warehouses by name. */
    WarehouseSortField["Name"] = "NAME";
})(WarehouseSortField = exports.WarehouseSortField || (exports.WarehouseSortField = {}));
/** An enumeration. */
var WebhookErrorCode;
(function (WebhookErrorCode) {
    WebhookErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
    WebhookErrorCode["Invalid"] = "INVALID";
    WebhookErrorCode["NotFound"] = "NOT_FOUND";
    WebhookErrorCode["Required"] = "REQUIRED";
    WebhookErrorCode["Unique"] = "UNIQUE";
})(WebhookErrorCode = exports.WebhookErrorCode || (exports.WebhookErrorCode = {}));
/** Enum determining type of webhook. */
var WebhookEventTypeAsyncEnum;
(function (WebhookEventTypeAsyncEnum) {
    /** All the events. */
    WebhookEventTypeAsyncEnum["AnyEvents"] = "ANY_EVENTS";
    /** A new checkout is created. */
    WebhookEventTypeAsyncEnum["CheckoutCreated"] = "CHECKOUT_CREATED";
    /** A checkout is updated. It also triggers all updates related to the checkout. */
    WebhookEventTypeAsyncEnum["CheckoutUpdated"] = "CHECKOUT_UPDATED";
    /** A new collection is created. */
    WebhookEventTypeAsyncEnum["CollectionCreated"] = "COLLECTION_CREATED";
    /** A collection is deleted. */
    WebhookEventTypeAsyncEnum["CollectionDeleted"] = "COLLECTION_DELETED";
    /** A collection is updated. */
    WebhookEventTypeAsyncEnum["CollectionUpdated"] = "COLLECTION_UPDATED";
    /** A new customer account is created. */
    WebhookEventTypeAsyncEnum["CustomerCreated"] = "CUSTOMER_CREATED";
    /** A customer account is updated. */
    WebhookEventTypeAsyncEnum["CustomerUpdated"] = "CUSTOMER_UPDATED";
    WebhookEventTypeAsyncEnum["DraftOrderCreated"] = "DRAFT_ORDER_CREATED";
    WebhookEventTypeAsyncEnum["DraftOrderDeleted"] = "DRAFT_ORDER_DELETED";
    WebhookEventTypeAsyncEnum["DraftOrderUpdated"] = "DRAFT_ORDER_UPDATED";
    /** A fulfillment is cancelled. */
    WebhookEventTypeAsyncEnum["FulfillmentCanceled"] = "FULFILLMENT_CANCELED";
    /** A new fulfillment is created. */
    WebhookEventTypeAsyncEnum["FulfillmentCreated"] = "FULFILLMENT_CREATED";
    /** An invoice is deleted. */
    WebhookEventTypeAsyncEnum["InvoiceDeleted"] = "INVOICE_DELETED";
    /** An invoice for order requested. */
    WebhookEventTypeAsyncEnum["InvoiceRequested"] = "INVOICE_REQUESTED";
    /** Invoice has been sent. */
    WebhookEventTypeAsyncEnum["InvoiceSent"] = "INVOICE_SENT";
    /** User notification triggered. */
    WebhookEventTypeAsyncEnum["NotifyUser"] = "NOTIFY_USER";
    /** An order is cancelled. */
    WebhookEventTypeAsyncEnum["OrderCancelled"] = "ORDER_CANCELLED";
    /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
    WebhookEventTypeAsyncEnum["OrderConfirmed"] = "ORDER_CONFIRMED";
    /** A new order is placed. */
    WebhookEventTypeAsyncEnum["OrderCreated"] = "ORDER_CREATED";
    /** An order is fulfilled. */
    WebhookEventTypeAsyncEnum["OrderFulfilled"] = "ORDER_FULFILLED";
    /** Payment is made and an order is fully paid. */
    WebhookEventTypeAsyncEnum["OrderFullyPaid"] = "ORDER_FULLY_PAID";
    /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
    WebhookEventTypeAsyncEnum["OrderUpdated"] = "ORDER_UPDATED";
    /** A new page is created. */
    WebhookEventTypeAsyncEnum["PageCreated"] = "PAGE_CREATED";
    /** A page is deleted. */
    WebhookEventTypeAsyncEnum["PageDeleted"] = "PAGE_DELETED";
    /** A page is updated. */
    WebhookEventTypeAsyncEnum["PageUpdated"] = "PAGE_UPDATED";
    /** A new product is created. */
    WebhookEventTypeAsyncEnum["ProductCreated"] = "PRODUCT_CREATED";
    /** A product is deleted. */
    WebhookEventTypeAsyncEnum["ProductDeleted"] = "PRODUCT_DELETED";
    /** A product is updated. */
    WebhookEventTypeAsyncEnum["ProductUpdated"] = "PRODUCT_UPDATED";
    WebhookEventTypeAsyncEnum["ProductVariantBackInStock"] = "PRODUCT_VARIANT_BACK_IN_STOCK";
    /** A new product variant is created. */
    WebhookEventTypeAsyncEnum["ProductVariantCreated"] = "PRODUCT_VARIANT_CREATED";
    /** A product variant is deleted. */
    WebhookEventTypeAsyncEnum["ProductVariantDeleted"] = "PRODUCT_VARIANT_DELETED";
    WebhookEventTypeAsyncEnum["ProductVariantOutOfStock"] = "PRODUCT_VARIANT_OUT_OF_STOCK";
    /** A product variant is updated. */
    WebhookEventTypeAsyncEnum["ProductVariantUpdated"] = "PRODUCT_VARIANT_UPDATED";
    WebhookEventTypeAsyncEnum["SaleCreated"] = "SALE_CREATED";
    WebhookEventTypeAsyncEnum["SaleDeleted"] = "SALE_DELETED";
    WebhookEventTypeAsyncEnum["SaleUpdated"] = "SALE_UPDATED";
    WebhookEventTypeAsyncEnum["TranslationCreated"] = "TRANSLATION_CREATED";
    WebhookEventTypeAsyncEnum["TranslationUpdated"] = "TRANSLATION_UPDATED";
})(WebhookEventTypeAsyncEnum = exports.WebhookEventTypeAsyncEnum || (exports.WebhookEventTypeAsyncEnum = {}));
/** Enum determining type of webhook. */
var WebhookEventTypeEnum;
(function (WebhookEventTypeEnum) {
    WebhookEventTypeEnum["AnyEvents"] = "ANY_EVENTS";
    WebhookEventTypeEnum["CheckoutCreated"] = "CHECKOUT_CREATED";
    WebhookEventTypeEnum["CheckoutFilterShippingMethods"] = "CHECKOUT_FILTER_SHIPPING_METHODS";
    WebhookEventTypeEnum["CheckoutUpdated"] = "CHECKOUT_UPDATED";
    WebhookEventTypeEnum["CollectionCreated"] = "COLLECTION_CREATED";
    WebhookEventTypeEnum["CollectionDeleted"] = "COLLECTION_DELETED";
    WebhookEventTypeEnum["CollectionUpdated"] = "COLLECTION_UPDATED";
    WebhookEventTypeEnum["CustomerCreated"] = "CUSTOMER_CREATED";
    WebhookEventTypeEnum["CustomerUpdated"] = "CUSTOMER_UPDATED";
    WebhookEventTypeEnum["DraftOrderCreated"] = "DRAFT_ORDER_CREATED";
    WebhookEventTypeEnum["DraftOrderDeleted"] = "DRAFT_ORDER_DELETED";
    WebhookEventTypeEnum["DraftOrderUpdated"] = "DRAFT_ORDER_UPDATED";
    WebhookEventTypeEnum["FulfillmentCanceled"] = "FULFILLMENT_CANCELED";
    WebhookEventTypeEnum["FulfillmentCreated"] = "FULFILLMENT_CREATED";
    WebhookEventTypeEnum["InvoiceDeleted"] = "INVOICE_DELETED";
    WebhookEventTypeEnum["InvoiceRequested"] = "INVOICE_REQUESTED";
    WebhookEventTypeEnum["InvoiceSent"] = "INVOICE_SENT";
    WebhookEventTypeEnum["NotifyUser"] = "NOTIFY_USER";
    WebhookEventTypeEnum["OrderCancelled"] = "ORDER_CANCELLED";
    WebhookEventTypeEnum["OrderConfirmed"] = "ORDER_CONFIRMED";
    WebhookEventTypeEnum["OrderCreated"] = "ORDER_CREATED";
    WebhookEventTypeEnum["OrderFilterShippingMethods"] = "ORDER_FILTER_SHIPPING_METHODS";
    WebhookEventTypeEnum["OrderFulfilled"] = "ORDER_FULFILLED";
    WebhookEventTypeEnum["OrderFullyPaid"] = "ORDER_FULLY_PAID";
    WebhookEventTypeEnum["OrderUpdated"] = "ORDER_UPDATED";
    WebhookEventTypeEnum["PageCreated"] = "PAGE_CREATED";
    WebhookEventTypeEnum["PageDeleted"] = "PAGE_DELETED";
    WebhookEventTypeEnum["PageUpdated"] = "PAGE_UPDATED";
    WebhookEventTypeEnum["PaymentAuthorize"] = "PAYMENT_AUTHORIZE";
    WebhookEventTypeEnum["PaymentCapture"] = "PAYMENT_CAPTURE";
    WebhookEventTypeEnum["PaymentConfirm"] = "PAYMENT_CONFIRM";
    WebhookEventTypeEnum["PaymentListGateways"] = "PAYMENT_LIST_GATEWAYS";
    WebhookEventTypeEnum["PaymentProcess"] = "PAYMENT_PROCESS";
    WebhookEventTypeEnum["PaymentRefund"] = "PAYMENT_REFUND";
    WebhookEventTypeEnum["PaymentVoid"] = "PAYMENT_VOID";
    WebhookEventTypeEnum["ProductCreated"] = "PRODUCT_CREATED";
    WebhookEventTypeEnum["ProductDeleted"] = "PRODUCT_DELETED";
    WebhookEventTypeEnum["ProductUpdated"] = "PRODUCT_UPDATED";
    WebhookEventTypeEnum["ProductVariantBackInStock"] = "PRODUCT_VARIANT_BACK_IN_STOCK";
    WebhookEventTypeEnum["ProductVariantCreated"] = "PRODUCT_VARIANT_CREATED";
    WebhookEventTypeEnum["ProductVariantDeleted"] = "PRODUCT_VARIANT_DELETED";
    WebhookEventTypeEnum["ProductVariantOutOfStock"] = "PRODUCT_VARIANT_OUT_OF_STOCK";
    WebhookEventTypeEnum["ProductVariantUpdated"] = "PRODUCT_VARIANT_UPDATED";
    WebhookEventTypeEnum["SaleCreated"] = "SALE_CREATED";
    WebhookEventTypeEnum["SaleDeleted"] = "SALE_DELETED";
    WebhookEventTypeEnum["SaleUpdated"] = "SALE_UPDATED";
    WebhookEventTypeEnum["ShippingListMethodsForCheckout"] = "SHIPPING_LIST_METHODS_FOR_CHECKOUT";
    WebhookEventTypeEnum["TranslationCreated"] = "TRANSLATION_CREATED";
    WebhookEventTypeEnum["TranslationUpdated"] = "TRANSLATION_UPDATED";
})(WebhookEventTypeEnum = exports.WebhookEventTypeEnum || (exports.WebhookEventTypeEnum = {}));
/** Enum determining type of webhook. */
var WebhookEventTypeSyncEnum;
(function (WebhookEventTypeSyncEnum) {
    WebhookEventTypeSyncEnum["CheckoutFilterShippingMethods"] = "CHECKOUT_FILTER_SHIPPING_METHODS";
    WebhookEventTypeSyncEnum["OrderFilterShippingMethods"] = "ORDER_FILTER_SHIPPING_METHODS";
    WebhookEventTypeSyncEnum["PaymentAuthorize"] = "PAYMENT_AUTHORIZE";
    WebhookEventTypeSyncEnum["PaymentCapture"] = "PAYMENT_CAPTURE";
    WebhookEventTypeSyncEnum["PaymentConfirm"] = "PAYMENT_CONFIRM";
    WebhookEventTypeSyncEnum["PaymentListGateways"] = "PAYMENT_LIST_GATEWAYS";
    WebhookEventTypeSyncEnum["PaymentProcess"] = "PAYMENT_PROCESS";
    WebhookEventTypeSyncEnum["PaymentRefund"] = "PAYMENT_REFUND";
    WebhookEventTypeSyncEnum["PaymentVoid"] = "PAYMENT_VOID";
    WebhookEventTypeSyncEnum["ShippingListMethodsForCheckout"] = "SHIPPING_LIST_METHODS_FOR_CHECKOUT";
})(WebhookEventTypeSyncEnum = exports.WebhookEventTypeSyncEnum || (exports.WebhookEventTypeSyncEnum = {}));
/** An enumeration. */
var WebhookSampleEventTypeEnum;
(function (WebhookSampleEventTypeEnum) {
    WebhookSampleEventTypeEnum["CheckoutCreated"] = "CHECKOUT_CREATED";
    WebhookSampleEventTypeEnum["CheckoutUpdated"] = "CHECKOUT_UPDATED";
    WebhookSampleEventTypeEnum["CollectionCreated"] = "COLLECTION_CREATED";
    WebhookSampleEventTypeEnum["CollectionDeleted"] = "COLLECTION_DELETED";
    WebhookSampleEventTypeEnum["CollectionUpdated"] = "COLLECTION_UPDATED";
    WebhookSampleEventTypeEnum["CustomerCreated"] = "CUSTOMER_CREATED";
    WebhookSampleEventTypeEnum["CustomerUpdated"] = "CUSTOMER_UPDATED";
    WebhookSampleEventTypeEnum["DraftOrderCreated"] = "DRAFT_ORDER_CREATED";
    WebhookSampleEventTypeEnum["DraftOrderDeleted"] = "DRAFT_ORDER_DELETED";
    WebhookSampleEventTypeEnum["DraftOrderUpdated"] = "DRAFT_ORDER_UPDATED";
    WebhookSampleEventTypeEnum["FulfillmentCanceled"] = "FULFILLMENT_CANCELED";
    WebhookSampleEventTypeEnum["FulfillmentCreated"] = "FULFILLMENT_CREATED";
    WebhookSampleEventTypeEnum["InvoiceDeleted"] = "INVOICE_DELETED";
    WebhookSampleEventTypeEnum["InvoiceRequested"] = "INVOICE_REQUESTED";
    WebhookSampleEventTypeEnum["InvoiceSent"] = "INVOICE_SENT";
    WebhookSampleEventTypeEnum["NotifyUser"] = "NOTIFY_USER";
    WebhookSampleEventTypeEnum["OrderCancelled"] = "ORDER_CANCELLED";
    WebhookSampleEventTypeEnum["OrderConfirmed"] = "ORDER_CONFIRMED";
    WebhookSampleEventTypeEnum["OrderCreated"] = "ORDER_CREATED";
    WebhookSampleEventTypeEnum["OrderFulfilled"] = "ORDER_FULFILLED";
    WebhookSampleEventTypeEnum["OrderFullyPaid"] = "ORDER_FULLY_PAID";
    WebhookSampleEventTypeEnum["OrderUpdated"] = "ORDER_UPDATED";
    WebhookSampleEventTypeEnum["PageCreated"] = "PAGE_CREATED";
    WebhookSampleEventTypeEnum["PageDeleted"] = "PAGE_DELETED";
    WebhookSampleEventTypeEnum["PageUpdated"] = "PAGE_UPDATED";
    WebhookSampleEventTypeEnum["ProductCreated"] = "PRODUCT_CREATED";
    WebhookSampleEventTypeEnum["ProductDeleted"] = "PRODUCT_DELETED";
    WebhookSampleEventTypeEnum["ProductUpdated"] = "PRODUCT_UPDATED";
    WebhookSampleEventTypeEnum["ProductVariantBackInStock"] = "PRODUCT_VARIANT_BACK_IN_STOCK";
    WebhookSampleEventTypeEnum["ProductVariantCreated"] = "PRODUCT_VARIANT_CREATED";
    WebhookSampleEventTypeEnum["ProductVariantDeleted"] = "PRODUCT_VARIANT_DELETED";
    WebhookSampleEventTypeEnum["ProductVariantOutOfStock"] = "PRODUCT_VARIANT_OUT_OF_STOCK";
    WebhookSampleEventTypeEnum["ProductVariantUpdated"] = "PRODUCT_VARIANT_UPDATED";
    WebhookSampleEventTypeEnum["SaleCreated"] = "SALE_CREATED";
    WebhookSampleEventTypeEnum["SaleDeleted"] = "SALE_DELETED";
    WebhookSampleEventTypeEnum["SaleUpdated"] = "SALE_UPDATED";
    WebhookSampleEventTypeEnum["TranslationCreated"] = "TRANSLATION_CREATED";
    WebhookSampleEventTypeEnum["TranslationUpdated"] = "TRANSLATION_UPDATED";
})(WebhookSampleEventTypeEnum = exports.WebhookSampleEventTypeEnum || (exports.WebhookSampleEventTypeEnum = {}));
/** An enumeration. */
var WeightUnitsEnum;
(function (WeightUnitsEnum) {
    WeightUnitsEnum["G"] = "G";
    WeightUnitsEnum["Kg"] = "KG";
    WeightUnitsEnum["Lb"] = "LB";
    WeightUnitsEnum["Oz"] = "OZ";
    WeightUnitsEnum["Tonne"] = "TONNE";
})(WeightUnitsEnum = exports.WeightUnitsEnum || (exports.WeightUnitsEnum = {}));
exports.LatestProductsDocument = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query LatestProducts {\n  products(first: 12, channel: \"default-channel\") {\n    edges {\n      node {\n        id\n        name\n        description\n        thumbnail {\n          url\n        }\n        pricing {\n          priceRange {\n            start {\n              gross {\n                amount\n              }\n            }\n          }\n        }\n        category {\n          name\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query LatestProducts {\n  products(first: 12, channel: \"default-channel\") {\n    edges {\n      node {\n        id\n        name\n        description\n        thumbnail {\n          url\n        }\n        pricing {\n          priceRange {\n            start {\n              gross {\n                amount\n              }\n            }\n          }\n        }\n        category {\n          name\n        }\n      }\n    }\n  }\n}\n    "])));
/**
 * __useLatestProductsQuery__
 *
 * To run a query within a React component, call `useLatestProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestProductsQuery({
 *   variables: {
 *   },
 * });
 */
function useLatestProductsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.LatestProductsDocument, options);
}
exports.useLatestProductsQuery = useLatestProductsQuery;
function useLatestProductsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.LatestProductsDocument, options);
}
exports.useLatestProductsLazyQuery = useLatestProductsLazyQuery;
var templateObject_1;
