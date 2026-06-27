export type Category = 'all' | 'coconut' | 'jaggery';

export interface ProductSpec {
  labelKey: string;
  valueKey: string;
}

export interface Product {
  id: string;
  category: Exclude<Category, 'all'>;
  nameKey: string;
  descKey: string;
  image: string;
  priceKey: string;
  availabilityKey: string;
  specs: ProductSpec[];
}

export interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  message: string;
}

export interface LanguageDictionary {
  logoCaption: string;
  // Navigation
  navHome: string;
  navProducts: string;
  navAbout: string;
  navContact: string;
  navInquiry: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  heroBadge: string;
  badge1Title: string;
  badge1Sub: string;
  badge2Title: string;
  badge2Sub: string;
  
  // Trust/Stats Section
  statFarmers: string;
  statFarmersDesc: string;
  statExperience: string;
  statExperienceDesc: string;
  statPurity: string;
  statPurityDesc: string;
  statDelivery: string;
  statDeliveryDesc: string;

  // Catalog Section
  catalogTitle: string;
  catalogSubtitle: string;
  catAll: string;
  catCoconut: string;
  catJaggery: string;
  viewDetails: string;
  availability: string;
  priceRange: string;
  specifications: string;
  close: string;
  inquireNow: string;

  // Product Data Key Translations
  prodBrownHuskedName: string;
  prodBrownHuskedDesc: string;
  prodSemiHuskedName: string;
  prodSemiHuskedDesc: string;
  prodCoconutOilName: string;
  prodCoconutOilDesc: string;
  prodCoirRopeName: string;
  prodCoirRopeDesc: string;
  prodCoconutPowderName: string;
  prodCoconutPowderDesc: string;
  
  prodJaggeryName: string;
  prodJaggeryDesc: string;

  // Spec details
  specOrigin: string;
  specOriginValue: string;
  specGrade: string;
  specGradePremium: string;
  specGradeA: string;
  specPackaging: string;
  specPackCrates: string;
  specPackBags: string;
  specPackBottles: string;
  specPackBox: string;
  specPackBundle: string;
  specSugarContent: string;
  specSugarHigh: string;
  specSugarNatural: string;
  specUses: string;
  specUsesDesc: string;
  specUsesJaggery: string;

  // About Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutFeature1Title: string;
  aboutFeature1Desc: string;
  aboutFeature2Title: string;
  aboutFeature2Desc: string;
  aboutFeature3Title: string;
  aboutFeature3Desc: string;

  // Inquiry Section
  inquiryTitle: string;
  inquirySubtitle: string;
  formName: string;
  formPhone: string;
  formEmail: string;
  formProduct: string;
  formQuantity: string;
  formMessage: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccess: string;
  formSuccessDesc: string;
  validationError: string;
  selectProduct: string;
  optional: string;

  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  contactAddressTitle: string;
  contactAddressValue: string;
  contactPhoneTitle: string;
  contactPhoneValue: string;
  contactEmailTitle: string;
  contactEmailValue: string;
  contactHoursTitle: string;
  contactHoursValue: string;
  mapTitle: string;

  // Footer
  footerRights: string;
  footerTagline: string;
}
