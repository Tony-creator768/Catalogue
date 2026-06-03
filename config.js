// GU-Q Hotel & Serviced Apartment Catalogue configuration.
// Production rule: live data must come from the approved Apps Script API.
// Do not enable sample fallback on the official Finance website.
window.CATALOGUE_CONFIG = {
  ENV: "production",
  DATA_URL: "https://script.google.com/macros/s/AKfycbyyWi-pnBOP_H3ODGux2qRPhyGz1_YD_ip4gXf37gaxsKGEI1-S1ZClCnvp7dh2zw5QEQ/exec",
  APPROVED_ONLY: true,
  REQUIRE_READY_STATUS: true,
  ALLOW_SAMPLE_FALLBACK: false,
  SHOW_INTERNAL_NOTES: false,
  MAX_COMPARE: 4,
  CURRENCY: "QAR"
};
