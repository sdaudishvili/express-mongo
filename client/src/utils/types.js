export const BankingSupervisionTypes = {
  RESULTS_BY_YEARS: 'resultsByYears',
  ANNUAL_FINANCIAL_REPORT: 'annualFinancialReport',
  PILAR3_ANNUAL: 'pilar3Annual',
  PILAR3_QUARTER: 'pilar3Quarter',
  BANKING_INSTITUTIONS: 'bankingInstitutions',
  CONSOLIDATED_FINANCIAL_INDICATORS: 'consolidatedFinancialPerformance',
  SECURITIES_MARKET_BROKERAGE_COMPANIES: 'licensedParticipantsBrokerageCompanies',
  SECURITIES_MARKET_SECURITIES_REGISTRARS: 'licensedParticipantsIndependentRegistrars',
  SECURITIES_MARKET_STOCK_EXCHANGES: 'licensedParticipantsLicensedStockExchange',
  SECURITIES_MARKET_CENTRAL_DEPOSITORYS: 'licensedParticipantsLicensedCentralDepository',
  INVESTMENT_FUNDS_INVESTMENT_FUNDS: 'investmentFundsInvestmentFunds',
  INVESTMENT_FUNDS_INVESTMENT_FUNDS_MANAGEMENT_COMPANIES: 'investmentFundsInvestmentFundManagementCompany',
  INVESTMENT_FUNDS_SOZIALIZED_DEPOSITORIES: 'investmentFundsSocializedDepositories',
  SECURITIES_MARKET_SECURITIES_BROKERAGE_COMPANIES_FINANCIAL_INDICATORS:
    'licensedParticipantsReportsBrokerageCompanies',
  SECURITIES_MARKET_SECURITIES_CENTRAL_DEPOSITORYS_FINANCIAL_INDICATORS:
    'licensedParticipantsReportsLicensedCentralDepository',
  SECURITIES_MARKET_SECURITIES_SECURITIES_REGISTRARS_FINANCIAL_INDICATORS:
    'licensedParticipantsReportsIndependentRegistrars',
  SECURITIES_MARKET_SECURITIES_STOCK_EXCHANGES_FINANCIAL_INDICATORS: 'licensedParticipantsReportsLicensedStockExchange',
  INVESTMENT_FUNDS_INVESTMENT_FUNDS_FINANCIAL_INDICATORS: 'investmentFundsReportsInvestmentFunds',
  INVESTMENT_FUNDS_INVESTMENT_FUNDS_MANAGEMENT_COMPANIES_FINANCIAL_INDICATORS:
    'investmentFundsReportsInvestmentFundManagementCompany',
  INVESTMENT_FUNDS_SOZIALIZED_DEPOSITORIES_FINANCIAL_INDICATORS: 'investmentFundsReportsSocializedDepositories',
  PUBLIC_COMPANIES: 'publicCompaniesAndPublicSecuritiesListOfPublicCompaniesAndPublicSecurities',
  PENSION_AGENCIES_PENSION_AGENCIES: 'pensionAgencyPensionAgencyAssetManagementCompanies',
  PENSION_AGENCIES_SOZIALIZED_DEPOSITORIES: 'pensionAgencySpecializedDepositoriesPage',
  REGULATORY_FRAMEWORK: 'publicCompaniesAndPublicSecuritiesRegulatoryFrameworkForPublicCompaniesAndPublicOffering',
  FINANCIAL_TECHNOLOGIES: 'financialTechnologies',
  PUBLIC_INFORMATION: 'publicInformation',
  SYSTEMS_BUFFER: 'financialStabilitySystemBuffer',
  CREDIT_TERMS_RESEARCH: 'financialStabilityCreditConditionsSurvey',
  ESG_REPORTING: 'financialStabilityESGAccounts',
  COMITEE: 'financialStabilityCommittee',
  COMITEE_CALENDAR: 'monetaryPolicyCommittee'
};

export const LicenseTypes = {
  UNLICENSED: 'unlicensed',
  ACTIVE: 'active'
};

export const MessageReceiverTypes = {
  CONTACT: 'contact',
  PUBLIC_INFORMATION_REQUEST: 'publicInformationRequest',
  TRAINING: 'georgianMoneyTraining'
};

export const AgregateTypes = {
  event: { url: 'events', hasChild: true, hasId: true, name: 'Event' },
  news: { url: 'news', hasChild: true, hasId: true, name: 'News' },
  loaneffectiveinterestcontent: {
    url: 'calculators/loan-effective-interest-rate-calculator',
    hasChild: false,
    name: 'Loan effective interest rate calculator'
  },
  claimcontent: { url: 'claim/main-page', hasChild: false, name: 'Claim main page' },
  quizclient: { url: 'questionnaire', hasChild: true, name: 'Questionnaire' },
  compoundinterestaccrualmethodcalculator: {
    url: 'calculators/deposit-effective-interest-rate-calculator-diff',
    hasChild: false,
    name: 'Compund interest accrual method calculator'
  },
  albumtopic: { url: 'photo-albums/topics', hasChild: false, name: 'Photo album topic' },
  newstopic: { url: 'news/topics', hasChild: false, name: 'News topic' },
  newscategory: { url: 'news/categories', hasChild: false, name: 'News category' },
  eventtopic: { url: 'events/topics', hasChild: false, name: 'Event topic' },
  announcement: { url: 'announcements', hasChild: true, hasId: true, name: 'Announcement' },
  videotopic: { url: 'video-gallery/topics', hasChild: false, name: 'Video Topic' },
  video: { url: 'video-gallery', hasChild: true, hasId: true, name: 'Video' },
  socmediapostcontent: { url: 'soc-media/content', hasChild: false, name: 'Social media posts' },
  album: { url: 'photo-albums', hasChild: true, hasId: true, name: 'Photo Album' },
  socmediapostapi: { url: 'soc-media/posts', hasChild: false, name: 'Social media posts' },
  messagereceiver_georgianMoneyTraining: {
    url: 'georgian-money/trainings/message-receivers',
    hasChild: false,
    hasId: false,
    name: 'Georgian money messafe receivers'
  },
  template: { url: '', hasChild: false, hasId: false, name: 'Template' },
  pilar2buffertable: {
    url: 'financial-stability/pillar-2-buffers',
    hasChild: false,
    hasId: false,
    name: 'Pilar 2 buffer table'
  },
  staticpagecontent_publicCompaniesAndPublicSecuritiesRegulatoryFrameworkForPublicCompaniesAndPublicOffering: {
    url: 'regulatory-framework',
    hasChild: false,
    hasId: false,
    name: 'Regulatory framework for public companies and public offering'
  },
  ipscontent: { url: 'ips/content', hasChild: false, hasId: false, name: 'IPS' },
  annualinflation: { url: 'annual-inflation', hasChild: false, hasId: false, name: 'Annual inflation' },
  subscribe: { url: 'subscribe/subscribers', hasChild: false, hasId: false, name: 'Subscribers' },
  staticpagecontent_pensionAgencySpecializedDepositoriesPage: {
    url: 'pension-agencies/socialized-depositories',
    hasChild: false,
    hasId: false,
    name: 'Pension agencies socialized depositories content'
  },
  iban_rtgs: { url: 'iban-rtgs/file', hasChild: false, hasId: false, name: 'IBAN and RTGS File' },
  quizcontent: { url: 'questionnaire', hasChild: false, hasId: false, name: 'Quiz page content' },
  page: { url: 'pages', hasChild: true, hasId: true, name: 'Page' },
  easyinterestaccrualmethodcontent: {
    url: 'deposit-effective-interest-rate-calculator-simple',
    hasChild: false,
    hasId: false,
    name: 'Easy Interest Accrual Method Calculator'
  },
  structurecontent: { url: 'structure/content', hasChild: false, hasId: false, name: 'Structure content' },
  office: { url: 'contact/offices', hasChild: false, hasId: false, name: 'Contact offices' },
  quiz: { url: 'questionnaire/create', hasChild: false, hasId: true, name: 'Quiz' },
  question: { url: 'questionnaire/create', hasChild: true, hasId: false, hasChildId: true, name: 'Question' },
  answer: { url: 'questionnaire/create', hasChild: true, hasId: false, hasChildId: true, name: 'Answer' },
  scenariosforifrs9purposesfile: {
    url: 'financial-stability/scenario-of-ifrs-9-purposes',
    hasChild: false,
    hasId: false,
    name: 'Forecast Scenarios for IFRS 9  file'
  },
  staticpagecontent_investmentFundsReportsInvestmentFundManagementCompany: {
    url: 'investment-funds-financial-indicators-supervision/investment-funds-management-companies-financial-indicators',
    hasChild: false,
    hasId: false,
    name: 'Investment Funds Management Companies Financial Indicators'
  },
  staticpagecontent_financialTechnologies: {
    url: 'financial-technologies',
    hasChild: false,
    hasId: false,
    name: 'Financial technologies content'
  },
  compoundinterestaccrualmethodcontent: {
    url: 'calculators/deposit-effective-interest-rate-calculator-diff',
    hasChild: false,
    hasId: false,
    name: 'Compound interest accrual method calculator'
  },
  staticpagecontent_licensedParticipantsReportsLicensedCentralDepository: {
    url: 'securities-market-supervision-financial-indicators/central-depositorys-financial-indicators',
    hasChild: false,
    hasId: false,
    name: 'Central Depositorys Financial Indicators'
  },
  staticpagecontent_financialStabilityCreditConditionsSurvey: {
    url: 'financial-stability/credit-conditions-survey',
    hasChild: false,
    hasId: false,
    name: 'Credit confitions survey'
  },
  legalactcontent: { url: 'legal-acts/acts/content', hasChild: false, hasId: false, name: 'Legal acts content' },
  staticpagecontent_licensedParticipantsReportsBrokerageCompanies: {
    url: 'securities-market-supervision-financial-indicators/brokerage-companies',
    hasChild: false,
    hasId: false,
    name: 'Brokerage Companies Financial Indicators'
  },
  staticpagecontent_publicInformation: {
    url: 'public-information/content',
    hasChild: false,
    hasId: false,
    name: 'Public information'
  },
  staticpagecontent_consolidatedFinancialPerformance: {
    url: 'non-banking-supervision/consolidated-financial-indicators',
    hasChild: false,
    hasId: false,
    name: 'Consolidated Financial Indicators'
  },
  quizcategory: { url: 'questionnaire/categories', hasChild: false, hasId: false, name: 'Quiz category' },
  staticpagecontent_licensedParticipantsLicensedStockExchange: {
    url: 'securities-market-supervision/stock-exchanges',
    hasChild: false,
    hasId: false,
    name: 'Stock Exchanges'
  },
  tibr: { url: 'tibr', hasChild: false, hasId: false, name: 'TIBR' },
  staticpagecontent_licensedParticipantsIndependentRegistrars: {
    url: 'securities-market-supervision/securities-registrars',
    hasChild: false,
    hasId: false,
    name: 'Securities Registrars'
  },
  legalactrecipient: {
    url: 'legal-acts/document-recipient',
    hasChild: false,
    hasId: false,
    name: 'Legal act recipient'
  },
  staticpagecontent_investmentFundsInvestmentFunds: {
    url: 'investment-funds/investment-funds',
    hasChild: false,
    hasId: false,
    name: 'Investment funds'
  },
  users: { url: 'users', hasChild: false, hasId: false, name: 'User' },
  staticpagecontent_bankingInstitutions: {
    url: 'banking-supervision/banking-institutions',
    hasChild: false,
    hasId: false,
    name: 'Banking institutions'
  },
  staticpagecontent_monetaryPolicyCommittee: {
    url: 'monetary-policy/comitee-calendar',
    hasChild: false,
    hasId: false,
    name: 'Committee calendar'
  },
  contactmainoffice: { url: 'contact/main-office', hasChild: false, hasId: false, name: 'Contact main office' },
  monetarypolicymainpagecontent: {
    url: 'monetary-policy/main-directions',
    hasChild: false,
    hasId: false,
    name: 'Main directions of Monetary policy'
  },
  faqcategory: { url: 'faq/categories', hasChild: false, hasId: false, name: 'FAQ category' },
  staticpagecontent_investmentFundsSocializedDepositories: {
    url: 'investment-funds/socialized-depositories',
    hasChild: false,
    hasId: false,
    name: 'Investment funds socialized depositories'
  },
  capitalcountercyclicalbuffercontent: {
    url: 'financial-stability/capital-countercircular-buffer',
    hasChild: false,
    hasId: false,
    name: 'Countercyclical Capital Buffer'
  },
  staticpagecontent_financialStabilityCommittee: {
    url: 'financial-stability/comitee',
    hasChild: false,
    hasId: false,
    name: 'Financial stability commitee'
  },
  userpolicycontent: { url: 'footer/user-policy', hasChild: false, hasId: false, name: 'User Policy' },
  subscribetype: {
    url: 'subscribe/subscribe-type-content',
    hasChild: false,
    hasId: false,
    name: 'Subscribe type content'
  },
  galarcontent: { url: 'calculators/galar-calculator', hasChild: false, hasId: false, name: 'Galar calculator' },
  legalactdocumenttype: {
    url: 'legal-acts/document-types',
    hasChild: false,
    hasId: false,
    name: 'Legal acts document type'
  },
  messagereceiver_publicInformationRequest: {
    url: 'public-information/message-receivers',
    hasChild: false,
    hasId: false,
    name: 'Public information message receivers'
  },
  monetarypolicycontent: {
    url: 'monetary-policy/mainPage',
    hasChild: false,
    hasId: false,
    name: 'Monetary Policy main page'
  },
  auth: { url: 'users', hasChild: false, hasId: false, name: 'User added' },
  staticpagecontent_licensedParticipantsLicensedCentralDepository: {
    url: 'securities-market-supervision/central-depositorys',
    hasChild: false,
    hasId: false,
    name: 'Central Depositorys'
  },
  staticpagecontent_investmentFundsReportsInvestmentFunds: {
    url: 'investment-funds-financial-indicators-supervision/investment-funds-financial-indicators',
    hasChild: false,
    hasId: false,
    name: 'Investment Funds Financial Indicators'
  },
  company: {
    url: 'directories-and-applications/documents',
    hasChild: false,
    hasId: false,
    name: 'Directories and applications company'
  },
  legalactcategory: { url: 'legal-acts/categories', hasChild: false, hasId: false, name: 'Legal acts category' },
  messagereceiver_claim: { url: 'claim/record-the-claim', hasChild: false, hasId: false, name: 'Claim receiver' },
  file_deletefile: { url: 'storage', hasChild: false, hasId: false, name: 'File Deleted' },
  bankhistorycontent: { url: 'history/content', hasChild: false, hasId: false, name: 'Bank history content' },
  history_financialTechnologies: {
    url: 'financial-technologies-history',
    hasChild: false,
    hasId: false,
    name: 'Financial technologies history'
  },
  readypolicycontent: { url: 'footer/ready-policy', hasChild: false, hasId: false, name: 'Cookie policy' },
  widget: { url: 'widgets', hasChild: true, hasId: true, name: 'Widget' },
  staticpagecontent_resultsByYears: {
    url: 'banking-supervision/results',
    hasChild: false,
    hasId: false,
    name: '2006-2017(1Q) Results'
  },
  claimformcontent: { url: 'claim/record-the-claim', hasChild: false, hasId: false, name: 'Claim form content' },
  supervisioncategory: {
    url: 'directories-and-applications/supervisions',
    hasChild: false,
    hasId: false,
    name: 'Directories & applications supervisions'
  },
  opengraph: { url: 'open-graph', hasChild: false, hasId: false, name: 'Open graph' },
  rtgssystemparticipants: { url: 'rtgs/content', hasChild: false, hasId: false, name: 'RTGS participants' },
  ibanvalidatorcontent: { url: 'iban/content', hasChild: false, hasId: false, name: 'IBAN validation' },
  staticpagecontent_licensedParticipantsReportsIndependentRegistrars: {
    url: 'securities-market-supervision-financial-indicators/securities-registrars-financial-indicators',
    hasChild: false,
    hasId: false,
    name: 'Securities Registrars Financial Indicators'
  },
  aml_cftinstitution: {
    url: 'aml_cft-supervision/categories',
    hasChild: false,
    hasId: false,
    name: 'AML/CFT category'
  },
  boardcontent: { url: 'board/members/content', hasChild: false, hasId: false, name: 'Board members content' },
  staticpagecontent_investmentFundsReportsSocializedDepositories: {
    url: 'investment-funds-financial-indicators-supervision/socialized-depositories-financial-indicators',
    hasChild: false,
    hasId: false,
    name: 'Socialized Depositories Financial Indicators'
  },
  directoriesandapplications: {
    url: 'directories-and-applications',
    hasChild: true,
    hasId: true,
    name: 'Directories and applications'
  },
  pilar2buffercontent: {
    url: 'financial-stability/pillar-2-buffers',
    hasChild: false,
    hasId: false,
    name: 'Pilar 2 Buffer'
  },
  boardmember: { url: 'board/members', hasChild: true, hasId: true, name: 'Board member' },
  staticpagecontent_pilar3Annual: {
    url: 'banking-supervision/pilar3',
    hasChild: false,
    hasId: false,
    name: 'Pilar 3 annual report'
  },
  deposityieldbyauctions: {
    url: 'monetary-policy/deposit-certificate-average-income',
    hasChild: false,
    hasId: false,
    name: 'Deposit yield by auctions'
  },
  faq: { url: 'faq', hasChild: true, hasId: true, name: 'FAQ' },
  subjecttypecategory: {
    url: 'directories-and-applications/entity-types',
    hasChild: false,
    hasId: false,
    name: 'Directories and applications subject types'
  },
  staticpagecontent_financialStabilityESGAccounts: {
    url: 'financial-stability/esg-reporting',
    hasChild: false,
    hasId: false,
    name: 'ESG Reporting'
  },
  directory_createdirectory: { url: 'storage', hasChild: false, hasId: false, name: 'Directory' },
  contactmessagetheme: {
    url: 'contact/messages/themes',
    hasChild: false,
    hasId: false,
    name: 'Contact message theme'
  },
  scenariosforifrs9purposescontent: {
    url: 'financial-stability/scenario-of-ifrs-9-purposes',
    hasChild: false,
    hasId: false,
    name: 'Forecast Scenarios for IFRS 9 '
  },
  messagereceiver: {
    url: 'georgian-money/trainings/message-receivers',
    hasChild: false,
    hasId: false,
    name: 'Georgian money training receivers'
  },
  analytics: { url: 'analytics', hasChild: false, hasId: false, name: 'Analytics' },
  bankhistory: { url: 'history', hasChild: true, hasId: true, name: 'Bank history' },
  file_uploadfile: { url: 'storage', hasChild: false, hasId: false, name: 'File' },
  staticpagecontent_annualFinancialReport: {
    url: 'banking-supervision/annual-financial-report',
    hasChild: false,
    hasId: false,
    name: 'Annual Financial Report'
  },
  staticpagecontent_pensionAgencyPensionAgencyAssetManagementCompanies: {
    url: 'pension-agencies/pension-agencies',
    hasChild: false,
    hasId: false,
    name: 'Pension agencies'
  },
  legalactproject: { url: 'legal-acts/projects', hasChild: true, hasId: true, name: 'Legal acts project' },
  slider: {
    url: 'georgian-money/homepage/slider/create',
    hasChild: false,
    hasId: true,
    name: 'Georgian money slider'
  },
  staticpagecontent_pilar3Quarter: {
    url: 'banking-supervision/pilar3-by-quarters',
    hasChild: false,
    hasId: false,
    name: 'Pilar 3 Quarter'
  },
  staticpagecontent_publicCompaniesAndPublicSecuritiesListOfPublicCompaniesAndPublicSecurities: {
    url: 'public-companies',
    hasChild: false,
    hasId: false,
    name: 'Public companies and public securities'
  },
  staticpagecontent_licensedParticipantsReportsLicensedStockExchange: {
    url: 'securities-market-supervision-financial-indicators/stock-exchanges-financial-indicators',
    hasChild: false,
    hasId: false,
    name: 'Stock exchange financial indiicators'
  },
  staticpagecontent_financialStabilitySystemBuffer: {
    url: 'financial-stability/systems-buffer',
    hasChild: false,
    hasId: false,
    name: 'Systemic Buffers'
  },
  legalactprojectcontent: {
    url: 'legal-acts/project/content',
    hasChild: false,
    hasId: false,
    name: 'Legal act project content'
  },
  staticpagecontent_licensedParticipantsBrokerageCompanies: {
    url: 'securities-market-supervision/brokerage-companies',
    hasChild: false,
    hasId: false,
    name: 'Brokerage Companies'
  },
  legalact: { url: 'legal-acts/acts', hasChild: true, hasId: true, name: 'Legal act' },
  staticcontent_dynamic: {
    url: 'static-content/dynamic',
    hasChild: false,
    hasId: false,
    name: 'Static content - Dynamic'
  },
  capitalcountercyclicalbufferrate: {
    url: 'financial-stability/capital-countercircular-buffer',
    hasChild: false,
    hasId: false,
    name: 'Capital countercircular buffer rate'
  },
  social: { url: 'social-set', hasChild: false, hasId: false, name: 'Social' },
  providercontent: {
    url: 'payement-system-providers-content',
    hasChild: false,
    hasId: false,
    name: 'Payment system providers'
  },
  aml_cftpage: { url: 'aml_cft-supervision/pages', hasChild: true, hasId: true, name: 'AML/CFT page' },
  ibancontent: { url: 'iban/codes-content', hasChild: false, hasId: false, name: 'IBAN Codes content' },
  staticpagecontent_investmentFundsInvestmentFundManagementCompany: {
    url: 'investment-funds/investment-funds-management-companies',
    hasChild: false,
    hasId: false,
    name: 'Investment fund management company'
  },
  header_sort: { url: 'navigation', hasChild: false, hasId: false, name: 'Header Navigation' },
  footer_sort: { url: 'footer-navigation', hasChild: false, hasId: false, name: 'Footer Navigation' },
  top_nav_sort: { url: 'top-navigation', hasChild: false, hasId: false, name: 'Top Navigation' },
  organization_financialStabilitySystemBuffer: {
    url: 'financial-stability/systems-buffer',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'System Buffer organization'
  },
  document_pilar3Annual: {
    url: 'banking-supervision/pilar3',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Pilar 3 annual report document'
  },
  document_financialStabilityCreditConditionsSurvey: {
    url: 'financial-stability/credit-conditions-survey',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Credit conditions survey document'
  },
  document_financialStabilitySystemBuffer: {
    url: 'financial-stability/systems-buffer',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'fSystem buffer document'
  },
  document_licensedParticipantsReportsLicensedStockExchange: {
    url: 'securities-market-supervision-financial-indicators/stock-exchanges-financial-indicators',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Licensed participants reports stock exchange document'
  },
  organization_investmentFundsInvestmentFundManagementCompany: {
    url: 'investment-funds/investment-funds-management-companies',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Investment fund management companies organization'
  },
  organization_licensedParticipantsReportsIndependentRegistrars: {
    url: 'securities-market-supervision-financial-indicators/securities-registrars-financial-indicators',
    hasChild: true,
    hasId: false,
    name: 'Securities Registrars Financial Indicators organization',
    hasChildId: true
  },
  organization_annualFinancialReport: {
    url: 'banking-supervision/annual-financial-report',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Annual Financial Report Organization'
  },
  document_financialStabilityCommittee: {
    url: 'financial-stability/comitee',
    hasChild: false,
    hasId: false,
    name: 'Financial stability commitee document'
  },
  organization_investmentFundsReportsInvestmentFundManagementCompany: {
    url: 'investment-funds-financial-indicators-supervision/investment-funds-management-companies-financial-indicators',
    hasChild: true,
    hasId: false,
    name: 'Investment Funds Management Companies Financial Indicators organization',
    hasChildId: true
  },
  organization_investmentFundsInvestmentFunds: {
    url: 'investment-funds/investment-funds',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Investment funds organization'
  },
  organization_pilar3Annual: {
    url: 'banking-supervision/pilar3',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Pilar 3 annual report document'
  },
  document_resultsByYears: {
    url: 'banking-supervision/results',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: '2006-2017(1Q) Results document'
  },
  organization_pensionAgencyPensionAgencyAssetManagementCompanies: {
    url: 'pension-agencies/pension-agencies',
    hasChild: true,
    hasId: false,
    name: 'Pension agencies organization',
    hasChildId: true
  },
  organization_investmentFundsReportsInvestmentFunds: {
    url: 'investment-funds-financial-indicators-supervision/investment-funds-financial-indicators',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Investment Funds Financial Indicators organization'
  },
  organization_pilar3Quarter: {
    url: 'banking-supervision/pilar3-by-quarters',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Pilar 3 Quarter organization'
  },
  document_licensedParticipantsReportsBrokerageCompanies: {
    url: 'securities-market-supervision-financial-indicators/brokerage-companies',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Brokerage Companies Financial Indicators document'
  },
  organization_licensedParticipantsReportsLicensedStockExchange: {
    url: 'securities-market-supervision-financial-indicators/stock-exchanges-financial-indicators',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Licensed participants reports stock exchange organization'
  },
  organization_licensedParticipantsReportsLicensedCentralDepository: {
    url: 'securities-market-supervision-financial-indicators/central-depositorys-financial-indicators',
    hasChild: true,
    hasId: false,
    name: 'Central Depositorys Financial Indicators organization',
    hasChildId: true
  },
  document_financialStabilityESGAccounts: {
    url: 'financial-stability/esg-reporting',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'ESG Reporting document'
  },
  image_crop: { url: 'storage', hasChild: false, hasId: false, hasChildId: false, name: 'Image crop' },
  document_licensedParticipantsReportsLicensedCentralDepository: {
    url: 'securities-market-supervision-financial-indicators/central-depositorys-financial-indicators',
    hasChild: true,
    hasId: false,
    name: 'Central Depositorys Financial Indicators document',
    hasChildId: true
  },
  document_licensedParticipantsReportsIndependentRegistrars: {
    url: 'securities-market-supervision-financial-indicators/securities-registrars-financial-indicators',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Securities Registrars Financial Indicators document'
  },
  organization_financialStabilityCreditConditionsSurvey: {
    url: 'financial-stability/credit-conditions-survey',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Credit conditions survey organization'
  },
  document_pilar3Quarter: {
    url: 'banking-supervision/pilar3-by-quarters',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Pilar 3 Quarter document'
  },
  organization_licensedParticipantsReportsBrokerageCompanies: {
    url: 'securities-market-supervision-financial-indicators/brokerage-companies',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Brokerage Companies Financial Indicators organization'
  },
  emission: {
    url: 'georgian-money/emissions/create',
    hasChild: false,
    hasId: true,
    hasChildId: false,
    name: 'Emission'
  },
  organization_financialStabilityESGAccounts: {
    url: 'financial-stability/esg-reporting',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'ESG Reporting organization'
  },
  document_consolidatedFinancialPerformance: {
    url: 'non-banking-supervision/consolidated-financial-indicators',
    hasChild: false,
    hasId: false,
    name: 'Consolidated Financial Indicators document'
  },
  document_investmentFundsReportsInvestmentFunds: {
    url: 'investment-funds-financial-indicators-supervision/investment-funds-financial-indicators',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Investment Funds Financial Indicators document'
  },
  monetarypolicyrate: {
    url: 'monetary-policy-rate',
    hasChild: false,
    hasId: false,
    hasChildId: false,
    name: 'Monetary Policy rate'
  },
  document_investmentFundsReportsInvestmentFundManagementCompany: {
    url: 'investment-funds-financial-indicators-supervision/investment-funds-management-companies-financial-indicators',
    hasChild: true,
    hasId: false,
    name: 'Investment Funds Management Companies Financial Indicators document',
    hasChildId: true
  },
  organization_pensionAgencySpecializedDepositoriesPage: {
    url: 'pension-agencies/socialized-depositories',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Pension agencies socialized depositories organization'
  },
  organization_bankingInstitutions: {
    url: 'banking-supervision/banking-institutions',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Banking institutions Organization'
  },
  document_investmentFundsReportsSocializedDepositories: {
    url: 'investment-funds-financial-indicators-supervision/socialized-depositories-financial-indicators',
    hasChild: true,
    hasId: false,
    name: 'Socialized Depositories Financial Indicators document',
    hasChildId: true
  },
  document_annualFinancialReport: {
    url: 'banking-supervision/annual-financial-report',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Annual Financial Report Document'
  },
  document_bankingInstitutions: {
    url: 'banking-supervision/banking-institutions',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Banking institutions document'
  },
  organization_resultsByYears: {
    url: 'banking-supervision/results',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: '2006-2017(1Q) Results organization'
  },
  staticcontent_supervision: {
    url: 'static-content/supervision',
    hasChild: false,
    hasId: false,
    hasChildId: false,
    name: 'Supervision static content'
  },
  organization_investmentFundsSocializedDepositories: {
    url: 'investment-funds/socialized-depositories',
    hasChild: true,
    hasId: false,
    hasChildId: true,
    name: 'Investment funds socialized depositories organization'
  },
  organization_investmentFundsReportsSocializedDepositories: {
    url: 'investment-funds-financial-indicators-supervision/socialized-depositories-financial-indicators',
    hasChild: true,
    hasId: false,
    name: 'Socialized Depositories Financial Indicators document',
    hasChildId: true
  }
};

export const PublicationTypes = {
  ANALYTICAL_REPORTS: 'analyticalReports',
  ANNUAL_REPORTS: 'annualReports',
  FINANCIAL_STABILITY_REPORTS: 'financialStabilityReports',
  MONETARY_POLICY_REPORTS: 'monetaryPolicyReports',
  MONTHLY_REVIEWS: 'monthlyReviews',
  BALANCE_OF_PAYMENTS: 'balanceOfPayments',
  MONTHLY_BALANCE: 'monthlyBalance',
  PUBLICATIONS_MAIN_PAGE: 'publicationMainPage',
  CONFERENCES_AND_SPEECHES: 'conferencesAndSpeeches',
  FINANCIAL_EDUCATION: 'financialEducation',
  PRESENTATION: 'presentation',
  RESEARCH: 'research',
  JOURNAL: 'journal'
};
