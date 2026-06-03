// GU-Q Hotel & Serviced Apartment Catalogue configuration.
// Production rule: live data must come from the approved Apps Script API.
// Do not enable sample fallback on the official Finance website.
window.CATALOGUE_CONFIG = {
  ENV: "production",
  DATA_URL: "https://script.google.com/macros/s/AKfycbyHIX_yzL1Dugjj9oa8gCRPysS5uftJl2I0XbUCEnA0ZEfJhs5uoRWPE8PAkfucztoI/exec",
  APPROVED_ONLY: true,
  REQUIRE_READY_STATUS: true,
  ALLOW_SAMPLE_FALLBACK: false,
  SHOW_INTERNAL_NOTES: false,
  MAX_COMPARE: 4,
  CURRENCY: "QAR"
};
