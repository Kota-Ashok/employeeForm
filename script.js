// === DATA OPTIONS ===
const categoryOptions = [
  { label: "Regular", value: "regular" },
  { label: "Contract", value: "contract" },
  { label: "Outsourcing", value: "outsourcing" },
  { label: "MTS (Pay)", value: "mts_pay" },
  { label: "MTS (PAY=DA)", value: "mts_pay_da" },
  { label: "Guest", value: "guest" },
  { label: "Services Outsourcing", value: "services_outsourcing" },
];

const titleOptions = [
  { label: "Mr", value: "Mr" },
  { label: "Mrs", value: "Mrs" },
  { label: "Ms", value: "Ms" },
  { label: "Dr", value: "Dr" },
  { label: "Prof", value: "Prof" },
];

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const maritalOptions = [
  { label: "Single", value: "single" },
  { label: "Married", value: "married" },
  { label: "Widow", value: "widow" },
  { label: "Divorced", value: "divorced" },
];

const yesNoOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const religionOptions = [
  { label: "Hindu", value: "hindu" },
  { label: "Muslim", value: "muslim" },
  { label: "Christian", value: "christian" },
  { label: "Sikh", value: "sikh" },
  { label: "Buddhist", value: "buddhist" },
  { label: "Jain", value: "jain" },
  { label: "Others", value: "others" },
];

const recruitmentOptions = [
  { label: "Direct Recruitment", value: "direct" },
  { label: "Promotion", value: "promotion" },
  { label: "Deputation", value: "deputation" },
  {
    label: "Both Direct Recruitment & Promotion",
    value: "both_direct_promotion",
  },
  {
    label: "Both Direct Recruitment & Deputation",
    value: "both_direct_deputation",
  },
];

const hoaOptions = [
  { label: "2202", value: "2202-02-109" },
  { label: "2202", value: "2202-02-110" },
  { label: "2202", value: "2202-01-101" },
  { label: "2202-", value: "2202-01-102" },
];

const authorityOptions = [
  { label: "Head of Department (HoD)", value: "hod" },
  { label: "", value: "ddo" },
  { label: "District Collector", value: "collector" },
  { label: "Commissioner", value: "commissioner" },
];

const scaleTypeOptions = [
  { label: "RPS 2022", value: "rps_2022" },
  { label: "RPS 2015", value: "rps_2015" },
  { label: "RPS 2010", value: "rps_2010" },
];

const prcYearOptions = [
  { label: "2022", value: "2022" },
  { label: "2015", value: "2015" },
  { label: "2010", value: "2010" },
  { label: "2005", value: "2005" },
];

const payScaleOptions = [
  { label: "10000-25000", value: "scale_1" },
  { label: "25000-50000", value: "scale_2" },
  { label: "50000-75000", value: "scale_3" },
  { label: "75000-100000", value: "scale_4" },
];

const basicPayOptions = [
  { label: "20000", value: "20000" },
  { label: "30000", value: "30000" },
  { label: "40000", value: "40000" },
  { label: "50000", value: "50000" },
];

const daOptions = [
  { label: "10.5%", value: "10.5" },
  { label: "20.5%", value: "20.5" },
  { label: "30.5%", value: "30.5" },
  { label: "40.5%", value: "40.5" },
];

const ccaOptions = [
  { label: "Ananthapur", value: "ananthapur" },
  { label: "Chittoor", value: "chittoor" },
  { label: "Guntur", value: "guntur" },
  { label: "Nellore", value: "nellore" },
  { label: "Vijayawada", value: "vijayawada" },
  { label: "Visakhapatnam", value: "visakhapatnam" },
];

const gpfCpsOptions = [
  { label: "GPF ", value: "gpf" },
  { label: "CPS ", value: "cps" },
];

const gisOptions = [
  { label: "Group A (8 Units)", value: "group_a" },
  { label: "Group B (4 Units)", value: "group_b" },
  { label: "Group C (2 Units)", value: "group_c" },
  { label: "Group D (1 Unit)", value: "group_d" },
];

const hraOptions = [
  { label: "4%", value: "4" },
  { label: "6%", value: "6" },
  { label: "8%", value: "8" },
  { label: "17%", value: "17" },
  { label: "25%", value: "25" },
  { label: "9%", value: "9" },
];

const casteOptions = [
  { label: "OC", value: "oc" },
  { label: "BC-A", value: "bc_a" },
  { label: "BC-B", value: "bc_b" },
  { label: "BC-C", value: "bc_c" },
  { label: "BC-D", value: "bc_d" },
  { label: "BC-E", value: "bc_e" },
  { label: "SC", value: "sc" },
  { label: "ST", value: "st" },
];

const educationOptions = [
  { label: "SSC/10th", value: "ssc" },
  { label: "Intermediate/12th", value: "inter" },
  { label: "Diploma", value: "diploma" },
  { label: "Bachelor's Degree", value: "bachelor" },
  { label: "Master's Degree", value: "master" },
  { label: "Ph.D", value: "phd" },
  { label: "Post-Doctoral", value: "postdoc" },
];

// --- UGC Pay Scale Tables ---
const ugcData = {
  "2006": {
    "15600-39100+AGP 5400": [15600, 16250, 17610, 18320, 19050, 19810, 20590, 21390, 21920, 22220, 22830, 23070, 23140, 23950, 24850, 25780, 26740, 27730, 28750, 28830, 29800, 30060, 30570, 30880, 31990, 33130, 33960, 34310, 35520, 36770, 38060, 39100],
    "15600-39100+AGP 6000": [15600, 16250, 17610, 18320, 19050, 19810, 20590, 21390, 22520, 23410, 24330, 25270, 26240, 27040, 28070, 29130, 30220, 31340, 32490, 33680, 34900, 36160, 37460, 38800, 39100],
    "15600-39100+AGP 7000": [15600, 16280, 17700, 18450, 19220, 20010, 20820, 21660, 22520, 23410, 24330, 25270, 26240, 27040, 28070, 29130, 30220, 31340, 32490, 33680, 34900, 36160, 37460, 38800, 39100],
    "15600-39100+AGP 8000": [15600, 16310, 17800, 18580, 19380, 20210, 21060, 21940, 22840, 23770, 24730, 25720, 26740, 27790, 28870, 29980, 31120, 32300, 33510, 34760, 36050, 37380, 38750, 39100],
    "37400-67000+AGP 9000": [37400, 38800, 41720, 43250, 44820, 46440, 48110, 49830, 51600, 51655, 53420, 55300, 57230, 59220, 61270, 63380, 63500, 65560, 67000],
    "37400-67000+AGP 10000": [37400, 38830, 41810, 43370, 44980, 46630, 48330, 50080, 51890, 53750, 55670, 57640, 58200, 59670, 61270, 61760, 63570, 63640, 63920, 66140, 67000]
  },
  "2016": {
    "57700-182400": [57700, 59400, 61200, 63000, 64900, 66800, 68800, 70900, 73000, 75200, 77500, 79800, 82200, 84700, 87200, 89800, 92500, 95300, 98200, 101100, 104100, 107200, 110400, 113700, 117100, 120600, 124200, 127900, 131700, 135700, 139800, 144000, 148300, 152700, 157300, 162000, 166900, 171900, 177100, 182400],
    "68900-205500": [68900, 71000, 73100, 75300, 77600, 79900, 82300, 84800, 87300, 89900, 92600, 95400, 98300, 101200, 104200, 107300, 110500, 113800, 117200, 120700, 124300, 128000, 131800, 135800, 139900, 144100, 148400, 152900, 157500, 162200, 167100, 172100, 177300, 182600, 188100, 193700, 199500, 205500],
    "79800-211500": [79800, 82200, 84700, 87200, 89800, 92500, 95300, 98200, 101100, 104100, 107200, 110400, 113700, 117100, 120600, 124200, 127900, 131700, 135700, 139800, 144000, 148300, 152700, 157300, 162000, 166900, 171900, 177100, 182400, 187900, 193500, 199300, 205300, 211500],
    "131400-217100": [131400, 135300, 139400, 143600, 147900, 152300, 156900, 161600, 166400, 171400, 176500, 181800, 187300, 192900, 198700, 204700, 210800, 217100],
    "144200-218200": [144200, 148500, 153000, 157600, 162300, 167200, 172200, 177400, 182700, 188200, 193800, 199600, 205600, 211800, 218200],
    "182200-224100": [182200, 187700, 193300, 199100, 205100, 211300, 217600, 224100]
  }
};

// --- AIS (7TH PAY COMMISSION) Pay Scale Tables ---
const aisData = {
  "2016": {
    "56100-177500": [56100, 57800, 59500, 61300, 63100, 65000, 67000, 69000, 71100, 73200, 75400, 77700, 80000, 82400, 84900, 87400, 90000, 92700, 95500, 98400, 101400, 104400, 107500, 110700, 114000, 117400, 120900, 124500, 128200, 132000, 136000, 140100, 144300, 148600, 153100, 157700, 162400, 167300, 172300, 177500],
    "67700-208700": [67700, 69700, 71800, 74000, 76200, 78500, 80900, 83300, 85800, 88400, 91100, 93800, 96600, 99500, 102500, 105600, 108800, 112100, 115500, 119000, 122600, 126300, 130100, 134000, 138000, 142100, 146400, 150800, 155300, 160000, 164800, 169700, 174800, 180000, 185400, 191000, 196700, 202600, 208700],
    "78800-209200": [78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400, 146700, 151100, 155600, 160300, 165100, 170100, 175200, 180500, 185900, 191500, 197200, 203100, 209200],
    "123100-215900": [123100, 126800, 130600, 134500, 138500, 142700, 147000, 151400, 155900, 160600, 165400, 170400, 175500, 180800, 186200, 191800],
    "131100-216600": [131100, 135000, 139100, 143300, 147600, 152000, 156600, 161300, 166100, 171100, 176200, 181500, 186900, 192500, 198300, 204200, 210300, 216600],
    "144200-218200": [144200, 148500, 153000, 157600, 162300, 167200, 172200, 177400, 182700, 188200, 193800, 199600, 205600, 211800, 218200],
    "182200-224100": [182200, 187700, 193300, 199100, 205100, 211300, 217600, 224100],
    "205400-224400": [205400, 211600, 217900, 224400],
    "225000": [225000]
  }
};
const stateScales2022 = [
  "20000 - 61960", "20600 - 63660", "21200 - 65360", "22460 - 72810",
  "28280 - 89720", "23120 - 74770", "23780 - 76730", "25220 - 80910",
  "27500 - 87480", "29980 - 94500", "32670 - 101970", "34580 - 107210",
  "35570 - 109910", "37640 - 115500", "48440 - 137220", "38720 - 118390",
  "40970 - 124380", "44570 - 127480", "45830 - 130580", "54060 - 140540",
  "57100 - 147760", "61960 - 151370", "65360 - 154980", "70850 - 158880",
  "101970 - 174790", "76730 - 162780", "80910 - 166680", "87480 - 170580",
  "94500 - 170580", "112610 - 174790", "124380 - 179000"
];

// ============================================================================
// STATE & VALIDATION ENGINE
// ============================================================================

// The formData object holds the current value of every field in the form.
// This matches the format expected by the backend when submitting.
let formData = {
  institutionName: "", // Holds the selected Organization Unit or Office Name
  employeeCategory: "", // Category of the employee (e.g., Regular, Contract, Outsourcing)
  aadhaarSearch: "", // Aadhaar number entered in the search field
  aadhaarNumber: "", // The official 12-digit Aadhaar number of the employee
  cfmsId: "", // 12-digit numeric CFMS ID
  title: "", // Title of the employee (Mr, Mrs, Ms, Dr, Prof)
  name: "", // Full alphabetical name of the employee
  fatherName: "", // Alphabetical name of the employee's father
  dob: "", // Employee's date of birth (cannot be a future date)
  joiningDate: "", // Date when the employee joined (cannot be a future date)
  gender: "", // Gender of the employee (Male, Female, Other)
  maritalStatus: "", // Marital status (Single, Married, Widow, Divorced)
  spouseName: "", // Name of the spouse (Only visible/applicable if Married)
  caste: "", // Caste category (OC, BC-A/B/C/D/E, SC, ST)
  religion: "", // Religion of the employee (Hindu, Muslim, Christian, etc.)
  highestEducation: "", // Highest academic qualification attained
  isPhysicalChallenged: "", // 'yes' or 'no' indicating if the employee is physically challenged
  physicalChallengedPercentage: "", // Percentage of physical challenge (40-100%, if applicable)
  panNumber: "", // 10-character alphanumeric PAN number (e.g. ABCDE1234F)
  mobileNumber: "", // 10-digit mobile phone number
  postCategory: "", // Employment post category (Regular, Contract, Outsourcing, etc.)
  position: "", // Broad primary role position (Teaching or Non-Teaching)
  designation: "", // Specific job title dependent on Position
  subject: "", // Teaching subject (applicable only for PGT/TGT designations)
  modeOfRecruitment: "", // Method by which the employee was recruited
  hoa: "", // Head of Account (HoA) string
  appointingAuthority: "", // Authority who appointed the employee (e.g., Head of Department)
  appointingOrderNumber: "", // Number associated with the appointing order
  appointingOrderDate: "", // Date on the appointing order
  typeOfScale: "", // Selected type of pay scale (State, UGC, AICTE, etc.)
  typeOfScaleOthers: "", // Custom scale type if 'Others' is selected
  prcYear: "", // Pay Revision Commission year (e.g., 2022, 2015)
  scaleOfPay: "", // Pay scale range (e.g., "20000 - 61960")
  basicPay: "", // Actual basic pay amount selected
  dearAllowance: "", // Dearness Allowance percentage
  ccaLocation: "", // City Compensatory Allowance location
  gpfCpsCategory: "", // GPF or CPS category selection
  gisSlab: "", // Group Insurance Scheme slab (Group A, B, C, D)
  hra: "", // House Rent Allowance percentage
  paymentMode: "", // Method of payment selection
  apgliNumber: "", // Andhra Pradesh Government Life Insurance numeric ID
  typeOfPay: "", // Either 'minimum_time_scale' or 'consolidated_pay' (for contract)
  consolidatedPayAmount: "", // Fixed pay amount for consolidated setups
  employeeDesignation: "", // Syncs with regular designation for display in pay section
  epfNumber: "", // Employee Provident Fund numeric ID
  esiNumber: "", // Employee State Insurance numeric ID
};

// The formErrors object stores validation error messages for specific fields.
// An empty string means no error.
let formErrors = {};

// --- Validation Rules ---

/**
 * Validates the Aadhaar number to ensure it has exactly 12 digits.
 * @param {string} name  - The field name (aadhaarSearch or aadhaarNumber)
 * @param {string} value - The actual value entered by the user
 */
function validateAadhaar(name, value) {
  if (value && value.length < 12) {
    formErrors[name] = "Aadhaar number must be exactly 12 digits.";
    return false;
  }
  return true;
}

/**
 * Validates the mobile number to ensure it has exactly 10 digits.
 * @param {string} value - The actual mobile number entered
 */
function validateMobileNumber(value) {
  if (value && value.length < 10) {
    formErrors.mobileNumber = "Mobile number must be exactly 10 digits.";
    return false;
  }
  return true;
}

/**
 * Validates the IFSC code against standard format: 4 letters, 0, 6 alphanumeric.
 * @param {string} value - The entered IFSC code
 */
function validateIfsc(value) {
  const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  if (value && !ifscRegex.test(value)) {
    formErrors.bankIfscCode =
      "Invalid IFSC format. Expected: 4 letters, 0, 6 alphanumeric (e.g. HDFC0000509).";
    return false;
  }
  return true;
}

/**
 * Validates the CFMS ID to ensure it is not empty since it is required.
 * Note: Input parsing rules restrict this to numeric values already.
 * @param {string} value - The CFMS ID entered
 */
function validateCfmsId(value) {
  if (!value) {
    formErrors.cfmsId = "CFMS ID is required and must be numeric.";
    return false;
  }
  if (value.length !== 12) {
    formErrors.cfmsId = "CFMS ID must be exactly 12 digits.";
    return false;
  }
  return true;
}

/**
 * Validates text fields to ensure they contain alphabetical characters only.
 * @param {string} name  - The internal field name (e.g. 'title', 'name')
 * @param {string} label - The human-readable label for the error message
 */
function validateAlpha(name, label) {
  if (!formData[name]) {
    formErrors[name] = `${label} is required and must be alphabetical.`;
    return false;
  }
  return true;
}

/**
 * Validates the PAN number against the standard Indian PAN format.
 * Format: 5 uppercase letters, 4 numbers, 1 uppercase letter.
 * @param {string} value - The entered PAN number
 */
function validatePan(value) {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (value && !panRegex.test(value)) {
    formErrors.panNumber =
      "Invalid PAN format. Expected: 5 letters, 4 numbers, 1 letter (e.g. ABCDE1234F).";
    return false;
  }
  return true;
}

/**
 * Validates a date field to ensure it is not a future date.
 * @param {string} name  - The field name ('dob' or 'joiningDate')
 * @param {string} label - Human-readable label for error messages
 */
function validateDate(name, label) {
  const value = formData[name];
  if (!value) return true; // required check handled separately
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selected = new Date(value);
  if (selected > today) {
    formErrors[name] = `${label} cannot be a future date.`;
    return false;
  }
  formErrors[name] = "";
  return true;
}

// ============================================================================
// UI AND INTERACTIVITY HANDLERS
// ============================================================================

/**
 * Shows or hides a specific form group based on conditional logic.
 * Clears the value inside the input if the field is hidden so invalid invisible data isn't submitted.
 * @param {string} name - The name attribute of the field
 * @param {boolean} isVisible - True to show the field, false to hide
 */
function updateVisibility(name, isVisible) {
  const group = document.getElementById("group-" + name);
  const input = document.getElementById("input-" + name);
  if (group) {
    group.style.display = isVisible ? "flex" : "none";
  }
  if (!isVisible && input) {
    input.value = ""; // clear hidden field value
    formData[name] = "";
    delete formErrors[name];
  }
}

/**
 * Updates the error span text below a specific input field based on formErrors state.
 * @param {string} name - The name attribute of the field
 */
function updateError(name) {
  const errSpan = document.getElementById("error-" + name);
  if (errSpan) {
    errSpan.textContent = formErrors[name] || "";
  }
}

const regularFields = [
  "typeOfScale",
  "prcYear",
  "scaleOfPay",
  "basicPay",
  "dearAllowance",
  "ccaLocation",
  "gpfCpsCategory",
  "gisSlab",
  "hra",
  "apgliNumber",
];
const consolidatedFields = ["consolidatedPayAmount", "epfNumber", "esiNumber"];

/**
 * Enables or disables a field and its custom dropdown wrapper.
 * @param {string} name - The field name
 * @param {boolean} enabled - True to enable, false to disable
 */
function setFieldEnabled(name, enabled) {
  const inputs = document.querySelectorAll(`[name="${name}"]`);
  inputs.forEach((input) => {
    input.disabled = !enabled;
    // Also toggle the custom dropdown wrapper if present
    const wrapper = input.previousElementSibling;
    if (wrapper && wrapper.classList.contains("custom-dropdown")) {
      if (enabled) {
        wrapper.classList.remove("disabled");
      } else {
        wrapper.classList.add("disabled");
        // Reset display text when disabling
        const displayText = wrapper.querySelector(".display-text");
        if (displayText && !input.value) {
          displayText.textContent = input.placeholder || "Select...";
        }
      }
    }
  });
}

/**
 * The ordered sequence of fields to lock/unlock in Employment & Pay Details.
 * Each field is unlocked only when the previous one has a value.
 */
const paySequence = [
  "employeeCategory",
  "typeOfScale",
  "prcYear",
  "scaleOfPay",
  "basicPay",
  "dearAllowance",
  "ccaLocation",
  "gpfCpsCategory",
  "gisSlab",
  "hra",
  "paymentMode",
  "apgliNumber",
];

/**
 * Walks through paySequence and disables any field whose predecessor is empty.
 * Fields that are currently hidden (via visibility logic) are skipped.
 */
function refreshPaySequence() {
  for (let i = 1; i < paySequence.length; i++) {
    const prev = paySequence[i - 1];
    const curr = paySequence[i];
    const prevGroup = document.getElementById("group-" + prev);
    const currGroup = document.getElementById("group-" + curr);
    // Skip if either group is not visible
    if (!currGroup || currGroup.style.display === "none") continue;
    // If previous group is hidden or has no value, disable current
    const prevHidden = !prevGroup || prevGroup.style.display === "none";
    const prevFilled = prevHidden || !!formData[prev];
    setFieldEnabled(curr, prevFilled);
    if (!prevFilled) {
      // Also clear the field's value when disabling
      const inputs = document.querySelectorAll(`[name="${curr}"]`);
      inputs.forEach((input) => {
        if (input.value) input.value = "";
      });
      formData[curr] = "";
    }
  }
}

function updateEmploymentFieldsVisibility() {
  const category = formData.employeeCategory; // Current selected employee category
  const typeOfPay = formData.typeOfPay; // Current selected type of pay

  // 'typeOfPay' applies exclusively to contract employees
  updateVisibility("typeOfPay", category === "contract");

  if (category === "regular") {
    // Regular employees show regular fields and hide consolidated fields
    regularFields.forEach((f) => updateVisibility(f, true));
    consolidatedFields.forEach((f) => updateVisibility(f, false));
    updateVisibility("employeeDesignation", true);
    updateVisibility("paymentMode", true);
    updateVisibility("esiNumber", true);
  } else if (category === "contract") {
    // Contract paths fork into Minimum Time Scale or Consolidated Pay
    const isConsolidated = typeOfPay === "consolidated_pay";
    const isMinimumTime = typeOfPay === "minimum_time_scale";

    regularFields.forEach((f) => updateVisibility(f, isMinimumTime));
    consolidatedFields.forEach((f) => updateVisibility(f, isConsolidated));

    // Unhide common attributes if either contract path is chosen
    updateVisibility("employeeDesignation", isMinimumTime || isConsolidated);
    updateVisibility("paymentMode", isMinimumTime || isConsolidated);

    // APGLI is generally hidden for contract staff
    updateVisibility("apgliNumber", false);
    updateVisibility("esiNumber", isMinimumTime || isConsolidated);
  } else if (
    [
      "outsourcing",
      "mts_pay",
      "mts_pay_da",
      "guest",
      "services_outsourcing",
    ].includes(category)
  ) {
    // Show only consolidated fields for other temporary/outsourced categories
    regularFields.forEach((f) => updateVisibility(f, false));
    consolidatedFields.forEach((f) => updateVisibility(f, true));
    updateVisibility("employeeDesignation", true);
    updateVisibility("paymentMode", true);
  } else {
    // Hide all if no category selection is active
    regularFields.forEach((f) => updateVisibility(f, false));
    consolidatedFields.forEach((f) => updateVisibility(f, false));
    updateVisibility("employeeDesignation", false);
    updateVisibility("paymentMode", false);
  }

  // Display 'typeOfScaleOthers' input only when 'Others' is the explicitly selected scale type
  if (
    formData.typeOfScale !== "others" ||
    document.getElementById("group-typeOfScale").style.display === "none"
  ) {
    updateVisibility("typeOfScaleOthers", false);
  } else {
    updateVisibility("typeOfScaleOthers", true);
  }

  // Re-run the cascade locking logic to sync disabled states with the newly visible fields
  refreshPaySequence();
}

/**
 * Handler for the "Aadhaar Search" action button.
 * Triggers validation on the search field and populates the main Aadhaar field if valid.
 */
function handleAadhaarSearch() {
  if (!validateAadhaar("aadhaarSearch", formData.aadhaarSearch)) {
    updateError("aadhaarSearch");
    return;
  }
  if (formData.aadhaarSearch) {
    formData.aadhaarNumber = formData.aadhaarSearch;
    const aadhaarInput = document.getElementById("input-aadhaarNumber");
    if (aadhaarInput) aadhaarInput.value = formData.aadhaarNumber;
    formErrors.aadhaarNumber = "";
    updateError("aadhaarNumber");
  }
}

// Subject options per designation
const tgtSubjects = [
  "Telugu",
  "Hindi",
  "English",
  "Maths",
  "Science",
  "Social Studies",
];

const pgtSubjects = [
  "Telugu",
  "Hindi",
  "English",
  "Maths",
  "Physical Science",
  "Biological Science",
  "Social Studies",
];

/**
 * Shows/hides and populates the Subject dropdown based on the selected Designation.
 * Only visible when PGT or TGT is chosen.
 * @param {string} designation - The selected designation value
 */
function updateSubjectOptions(designation) {
  const subjectSelect = document.getElementById("input-subject");
  const subjectGroup = document.getElementById("group-subject");
  if (!subjectSelect || !subjectGroup) return;

  // Reset subject value
  formData.subject = "";

  let subjects = [];
  if (designation === "PGT") {
    subjects = pgtSubjects;
  } else if (designation === "TGT") {
    subjects = tgtSubjects;
  }

  if (subjects.length > 0) {
    // Populate and show
    subjectSelect.innerHTML =
      '<option value="" disabled selected>Select Subject</option>';
    subjects.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s;
      subjectSelect.appendChild(opt);
    });
    subjectGroup.style.display = "flex";

    // Sync custom dropdown wrapper if present
    const wrapper = subjectSelect.previousElementSibling;
    if (wrapper && wrapper.classList.contains("custom-dropdown")) {
      wrapper.classList.remove("disabled");
      const displayText = wrapper.querySelector(".display-text");
      if (displayText) displayText.textContent = "Select Subject";
      // Re-render options in the custom dropdown list
      const list = wrapper.querySelector(".options-list");
      if (list) {
        list.innerHTML = "";
        subjects.forEach((s) => {
          const li = document.createElement("li");
          li.className = "option-item";
          li.textContent = s;
          li.addEventListener("click", (e) => {
            e.stopPropagation();
            subjectSelect.value = s;
            formData.subject = s;
            if (displayText) displayText.textContent = s;
            wrapper.classList.remove("open");
          });
          list.appendChild(li);
        });
      }
    }
  } else {
    // Hide
    subjectGroup.style.display = "none";
    subjectSelect.innerHTML =
      '<option value="" disabled selected>Select Subject</option>';
  }
}

// Designation options per position type
const teachingDesignations = [
  "Principal",
  "Vice_Principal",
  "HM_Cum_Warden",
  "Junior_Lecturer",
  "PGT",
  "TGT",
  "Librarian",
  "PD",
  "PET",
  "Art_Craft_Music",
  "vocational",
  "CRT",
  "Coach",
  "Assistant_Coach",
];

const nonTeachingDesignations = [
  "Superintendent",
  "Sr_Assistant",
  "Staff_Nurse",
  "Junior_Assistant",
  "A_N_M",
  "Rec_Assistant",
  "Lab_Assistant",
  "Counsellor",
  "Hostel_Warden",
  "Accountant",
  "Office_Subordinate",
  "Cattering_asst",
  "Driver",
  "Electrician_cum_Plumber",
  "Gardener",
  "Chouwkidar",
  "Sweeper",
  "Cook",
  "K_Helper",
  "MPW",
  "Ayah",
  "Watch_Women-Men",
  "Sanitary_Worker",
  "Parttime_Docter",
  "Secretary",
  "Joint_Secretary",
  "Deputy_Secretary",
  "Asst_Secretary",
  "Sr_Steno",
  "Jr_Steno",
  "Typist_cum_computer_opperator",
];

/**
 * Filter the Employee Category options based on the selected Post Category.
 * If 'Regular' is selected, show all options.
 * Otherwise, show only the option that matches the Post Category (case-insensitive).
 * Blocks the dropdown if no Post Category is selected.
 * @param {string} postCategory - The selected post category value
 */
function updateEmployeeCategoryOptions(postCategory) {
  console.log("updateEmployeeCategoryOptions called with:", postCategory);
  const employeeCategorySelect = document.getElementById(
    "input-employeeCategory",
  );
  if (!employeeCategorySelect) return;

  const wrapper = employeeCategorySelect.previousElementSibling;
  const isCustomDropdown =
    wrapper && wrapper.classList.contains("custom-dropdown");

  // Use the global categoryOptions defined at the top of the script
  let filteredCategories = [];
  let shouldEnable = false;
  let placeholderText = "Select Employee Category";

  if (postCategory === "Regular") {
    filteredCategories = categoryOptions;
    shouldEnable = true;
  } else if (postCategory) {
    // Attempt to find a matching category (case-insensitive)
    filteredCategories = categoryOptions.filter(
      (cat) => cat.label.toLowerCase() === postCategory.toLowerCase(),
    );
    shouldEnable = true;
    console.log("Filtered to:", filteredCategories);
  } else {
    // Block if no Post Category selected
    filteredCategories = [];
    shouldEnable = false;
    placeholderText = "Select Post Category first";
  }

  // Clear current options and rebuild
  employeeCategorySelect.innerHTML = `<option value="" disabled selected>${placeholderText}</option>`;
  filteredCategories.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat.value;
    opt.textContent = cat.label;
    employeeCategorySelect.appendChild(opt);
  });

  employeeCategorySelect.disabled = !shouldEnable;

  // Reset value if current selection is no longer valid in the new list, or if disabled
  if (
    !shouldEnable ||
    (formData.employeeCategory &&
      !filteredCategories.find(
        (cat) => cat.value === formData.employeeCategory,
      ))
  ) {
    console.log(
      "Resetting employeeCategory because current value is invalid or disabled",
    );
    employeeCategorySelect.value = "";
    formData.employeeCategory = "";
    if (isCustomDropdown) {
      const displayText = wrapper.querySelector(".display-text");
      if (displayText) displayText.textContent = placeholderText;
    }
  } else if (!formData.employeeCategory && isCustomDropdown) {
    const displayText = wrapper.querySelector(".display-text");
    if (displayText) displayText.textContent = placeholderText;
  }

  // Sync custom dropdown UI
  if (isCustomDropdown) {
    if (shouldEnable) {
      wrapper.classList.remove("disabled");
    } else {
      wrapper.classList.add("disabled");
    }

    console.log("Syncing custom dropdown for employeeCategory");
    const list = wrapper.querySelector(".options-list");
    if (list) {
      list.innerHTML = "";
      filteredCategories.forEach((cat) => {
        const li = document.createElement("li");
        li.className = "option-item";
        li.textContent = cat.label;
        li.addEventListener("click", (e) => {
          e.stopPropagation();
          employeeCategorySelect.value = cat.value;
          formData.employeeCategory = cat.value;
          const displayText = wrapper.querySelector(".display-text");
          if (displayText) displayText.textContent = cat.label;
          handleInputChange(
            "employeeCategory",
            cat.value,
            employeeCategorySelect,
          );
          wrapper.classList.remove("open");
        });
        list.appendChild(li);
      });

      if (filteredCategories.length === 0) {
        const li = document.createElement("li");
        li.className = "no-options";
        li.textContent = "No matching categories found";
        list.appendChild(li);
      }
    }
  }

  // Trigger subsequent visibility updates
  updateEmploymentFieldsVisibility();
}

/**
 * Populates the Designation select dropdown based on the selected Position.
 * Enables the select when a position is chosen, disables it otherwise.
 * @param {string} position - The selected position value ('Teaching' or 'Non-Teaching')
 */
function updateDesignationOptions(position) {
  const designationSelect = document.getElementById("input-designation");
  const empDesignationSelect = document.getElementById(
    "input-employeeDesignation",
  );
  if (!designationSelect) return;

  // Clear current options
  designationSelect.innerHTML = "";
  formData.designation = "";

  if (empDesignationSelect) {
    empDesignationSelect.innerHTML = "";
    formData.employeeDesignation = "";
  }

  const wrapper = designationSelect.previousElementSibling;
  const isCustomDropdown =
    wrapper && wrapper.classList.contains("custom-dropdown");

  const empWrapper = empDesignationSelect
    ? empDesignationSelect.previousElementSibling
    : null;
  const empIsCustomDropdown =
    empWrapper && empWrapper.classList.contains("custom-dropdown");

  let options = [];
  let placeholderText = "Select Designation";
  let shouldEnable = false;

  if (position === "Teaching") {
    options = teachingDesignations;
    shouldEnable = true;
  } else if (position === "Non-Teaching") {
    options = nonTeachingDesignations;
    shouldEnable = true;
  } else {
    placeholderText = "Select Position first";
    shouldEnable = false;
  }

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = placeholderText;
  designationSelect.appendChild(placeholder);

  if (empDesignationSelect) {
    const empPlaceholder = placeholder.cloneNode(true);
    empDesignationSelect.appendChild(empPlaceholder);
  }

  options.forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d.replace(/_/g, " ");
    designationSelect.appendChild(opt);

    if (empDesignationSelect) {
      const empOpt = opt.cloneNode(true);
      empDesignationSelect.appendChild(empOpt);
    }
  });

  designationSelect.disabled = !shouldEnable;
  if (empDesignationSelect) empDesignationSelect.disabled = !shouldEnable;

  // Sync custom dropdown wrapper UI
  if (isCustomDropdown) {
    if (shouldEnable) {
      wrapper.classList.remove("disabled");
    } else {
      wrapper.classList.add("disabled");
    }
    const displayText = wrapper.querySelector(".display-text");
    if (displayText) {
      displayText.textContent = placeholderText;
    }
  }

  if (empIsCustomDropdown) {
    if (shouldEnable) {
      empWrapper.classList.remove("disabled");
    } else {
      empWrapper.classList.add("disabled");
    }
    const empDisplayText = empWrapper.querySelector(".display-text");
    if (empDisplayText) {
      empDisplayText.textContent = placeholderText;
    }
  }
}

/**
 * Updates the PRC Year dropdown based on Type of Scale.
 */
function updatePrcYearOptions(scaleType) {
  const prcSelect = document.getElementById("input-prcYear");
  if (!prcSelect) return;

  prcSelect.innerHTML = '<option value="" disabled selected>Select PRC Year</option>';
  let years = [];
  if (scaleType === 'ugc') {
    years = ["2016", "2006"];
  } else if (scaleType === 'ais_7th_pay') {
    years = ["2016"];
  } else if (scaleType === 'state') {
    years = ["2022", "2015", "2010", "2005"];
  } else {
    years = ["2022", "2016", "2015", "2010", "2006", "2005"];
  }

  years.forEach(y => {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    prcSelect.appendChild(opt);
  });

  prcSelect.value = "";
  formData.prcYear = "";
  handleInputChange("prcYear", "", prcSelect);
}

/**
 * Populates the hidden datalist for Scale of Pay which drives the custom dropdown options
 */
function populateScaleOfPayDatalist(scaleType, year) {
  const dataList = document.getElementById("list-scaleOfPay");
  if (!dataList) return;

  dataList.innerHTML = "";
  let scales = [];

  if (scaleType === "ugc" && ugcData[year]) {
    scales = Object.keys(ugcData[year]);
  } else if (scaleType === "ais_7th_pay" && aisData[year]) {
    scales = Object.keys(aisData[year]);
  } else if (scaleType === "state" && year === "2022") {
    scales = stateScales2022;
  }

  scales.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    dataList.appendChild(opt);
  });
}

/**
 * Main handler triggered whenever an input value changes.
 * Handles input sanitization (parsing rules), error clearing, and trigger-dependent field updates.
 * @param {string} name - The field name being changed
 * @param {string} value - The new value of the field
 * @param {HTMLElement} inputElement - The DOM element of the input (used to rewrite formatted values)
 */
function handleInputChange(name, value, inputElement) {
  // --- Parsing Rules (Sanitization) ---

  // Aadhaar: Only digits, max 12
  if (name === "aadhaarSearch" || name === "aadhaarNumber") {
    value = value.replace(/\D/g, "").slice(0, 12);
  }
  // Mobile: Only digits, max 10
  if (name === "mobileNumber") {
    value = value.replace(/\D/g, "").slice(0, 10);
  }
  // CFMS ID: Only digits, max 12
  if (name === "cfmsId") {
    value = value.replace(/\D/g, "").slice(0, 12);
  }
  // Name fields: Only alphabetical string and spaces
  if (
    name === "title" ||
    name === "name" ||
    name === "fatherName" ||
    name === "spouseName"
  ) {
    value = value.replace(/[^a-zA-Z\s]/g, "");
  }
  // Bank and numeric ID fields
  if (
    ["bankAccountNumber", "epfNumber", "esiNumber", "apgliNumber"].includes(
      name,
    )
  ) {
    value = value.replace(/\D/g, "");
  }
  // Basic Pay: Only numbers
  if (name === "basicPay") {
    value = value.replace(/\D/g, "");
  }
  // Scale of Pay: Numbers, spaces, hyphens, plus sign, and letters (for UGC AGP)
  if (name === "scaleOfPay") {
    value = value.replace(/[^\d\s\-\+A-Za-z]/g, "");
  }
  if (name === "bankIfscCode") {
    value = value
      .replace(/[^a-zA-Z0-9]/g, "")
      .toUpperCase()
      .slice(0, 11);
  }
  if (name === "bankAndBranch") {
    value = value.replace(/[^a-zA-Z\s]/g, "");
  }
  // PAN: Only alphanumeric, force uppercase, max 10
  if (name === "panNumber") {
    value = value
      .replace(/[^a-zA-Z0-9]/g, "")
      .toUpperCase()
      .slice(0, 10);
  }

  // Rewrite the actual value shown in the DOM if we stripped invalid characters above
  if (inputElement && inputElement.value !== value) {
    inputElement.value = value;
  }

  // Save sanitized value to unified state
  formData[name] = value;

  // Clear "as-you-type" errors for fields that have specific string/format rules
  if (
    [
      "aadhaarSearch",
      "aadhaarNumber",
      "mobileNumber",
      "cfmsId",
      "title",
      "name",
      "fatherName",
      "panNumber",
    ].includes(name)
  ) {
    formErrors[name] = "";
    updateError(name);
  }

  // --- Dynamic UI Logic ---

  // Update Search button style dynamically (Changes to Blue when fully entered)
  if (name === "aadhaarSearch") {
    const searchBtn = document.getElementById("btn-aadhaarSearch");
    if (searchBtn) {
      if (value.length === 12) {
        // Condition met: 12 digits entered! Make the button bright blue.
        searchBtn.classList.add("active");
        searchBtn.style.backgroundColor = "#007bff";
        searchBtn.style.color = "white";
      } else {
        // Less than 12 digits: Restore default grey styling
        searchBtn.classList.remove("active");
        searchBtn.style.backgroundColor = "";
        searchBtn.style.color = "";
      }
    }
  }

  // Toggle the spouse name field based on Marital Status
  if (name === "maritalStatus") {
    updateVisibility("spouseName", value === "married");
  }

  // Toggle the "Others" scale field based on Type of Scale
  if (name === "typeOfScale") {
    updateVisibility("typeOfScaleOthers", value === "others");
    updatePrcYearOptions(value);
  }

  // Employment category logic
  if (name === "employeeCategory" || name === "typeOfPay") {
    updateEmploymentFieldsVisibility();
  }
  // Toggle the physical challenge percentage based on Physical Challenge category
  if (name === "isPhysicalChallenged") {
    updateVisibility("physicalChallengedPercentage", value === "yes");
  }
  // Dynamic Designation update based on Position
  if (name === "position") {
    updateDesignationOptions(value);
    // Reset subject when position changes
    updateSubjectOptions("");
  }
  // Dynamic Subject update based on Designation (only for PGT / TGT)
  if (name === "designation") {
    updateSubjectOptions(value);

    // Sync with Employee Designation in Employment & Pay section
    const empDesignationInput = document.getElementById(
      "input-employeeDesignation",
    );
    if (empDesignationInput) {
      const displayValue = value ? value.replace(/_/g, " ") : "";
      empDesignationInput.value = value;
      formData.employeeDesignation = value;

      const empWrapper = empDesignationInput.previousElementSibling;
      if (empWrapper && empWrapper.classList.contains("custom-dropdown")) {
        const empDisplayText = empWrapper.querySelector(".display-text");
        if (empDisplayText) {
          empDisplayText.textContent = displayValue || "Select Designation";
        }
      }
    }
  }

  // Dynamic Employee Category update based on Post Category
  if (name === "postCategory") {
    updateEmployeeCategoryOptions(value);
  }

  // Dynamic Basic Pay update based on Scale of Pay
  if (name === "scaleOfPay") {
    const basicPaySelect = document.getElementById("input-basicPay-dropdown");
    if (basicPaySelect) {
      const payValues = [
        "20000",
        "20600",
        "21200",
        "21800",
        "22460",
        "23120",
        "23780",
        "24500",
        "25220",
        "25940",
        "26720",
        "27500",
        "28280",
        "29130",
        "29980",
        "30830",
        "31750",
        "32670",
        "33590",
        "34580",
        "35570",
        "36560",
        "37640",
        "38720",
        "39800",
        "40970",
        "42140",
        "43310",
        "44570",
        "45830",
        "47090",
        "48440",
        "49790",
        "51140",
        "52600",
        "54060",
        "55520",
        "57100",
        "58680",
        "60260",
        "61960",
        "63660",
        "65360",
        "67190",
        "69020",
        "70850",
        "72810",
        "74770",
        "76730",
        "78820",
        "80910",
        "83000",
        "85240",
        "87480",
        "89720",
        "92110",
        "94500",
        "96890",
        "99430",
        "101970",
        "104510",
        "107210",
        "109910",
        "112610",
        "115500",
        "118390",
        "121280",
        "124380",
        "127480",
        "130580",
        "133900",
        "137220",
        "140540",
        "144150",
        "147760",
        "151370",
        "154980",
        "158880",
        "162780",
        "166680",
        "170580",
        "174790",
        "179000",
        "183210",
        "187420",
        "191630",
        "195840",
        "200050",
      ];
      const scaleMaxLimits = {
        "20000 - 61960": "70850",
        "20600 - 63660": "70850",
        "21200 - 65360": "72810",
        "22460 - 72810": "83000",
        "23120 - 74770": "85240",
        "23780 - 76730": "87480",
        "25220 - 80910": "92110",
        "27500 - 87480": "99430",
        "28280 - 89720": "101970",
        "29980 - 94500": "107210",
        "32670 - 101970": "115500",
        "34580 - 107210": "121280",
        "35570 - 109910": "124380",
        "37640 - 115500": "130580",
        "38720 - 118390": "133900",
        "40970 - 124380": "140540",
        "44570 - 127480": "144150",
        "45830 - 130580": "147760",
        "48440 - 137220": "154980",
        "54060 - 140540": "147760",
        "57100 - 147760": "166680",
        "61960 - 151370": "170580",
        "65360 - 154980": "174790",
        "70850 - 158880": "179000",
        "76730 - 162780": "183210",
        "80910 - 166680": "166680",
        "87480 - 170580": "170580",
        "94500 - 170580": "170580",
        "101970 - 174790": "195840",
        "112610 - 174790": "174790",
        "124380 - 179000": "200050",
      };

      const wrapper = basicPaySelect.previousElementSibling;
      const isCustomDropdown =
        wrapper && wrapper.classList.contains("custom-dropdown");

      let optionsHtml =
        '<option value="" disabled selected>Select Basic Pay</option>';
      let foundValidScale = false;

      if (formData.typeOfScale === "ugc" && formData.prcYear && ugcData[formData.prcYear] && ugcData[formData.prcYear][value]) {
        const paySteps = ugcData[formData.prcYear][value];
        optionsHtml += '<option value="0">0</option>';
        paySteps.forEach(step => {
          optionsHtml += `<option value="${step}">${step}</option>`;
        });
        foundValidScale = true;
      } else if (formData.typeOfScale === "ais_7th_pay" && formData.prcYear && aisData[formData.prcYear] && aisData[formData.prcYear][value]) {
        const paySteps = aisData[formData.prcYear][value];
        optionsHtml += '<option value="0">0</option>';
        paySteps.forEach(step => {
          optionsHtml += `<option value="${step}">${step}</option>`;
        });
        foundValidScale = true;
      } else {
        const startVal = value ? value.split(" ")[0] : "";
        const startIndex = payValues.indexOf(startVal);

        if (startIndex !== -1) {
          foundValidScale = true;
          optionsHtml += '<option value="0">0</option>';

          let endIndex = payValues.length;
          if (scaleMaxLimits[value]) {
            const maxValIndex = payValues.indexOf(scaleMaxLimits[value]);
            if (maxValIndex !== -1) {
              endIndex = maxValIndex + 1;
            }
          }

          payValues.slice(startIndex, endIndex).forEach((val) => {
            optionsHtml += `<option value="${val}">${val}</option>`;
          });
        }
      }

      if (foundValidScale) {
        basicPaySelect.innerHTML = optionsHtml;
        basicPaySelect.disabled = false; // Enable when valid scale is selected
        if (isCustomDropdown) wrapper.classList.remove("disabled");
      } else {
        basicPaySelect.innerHTML =
          '<option value="" disabled selected>Select Basic Pay</option>';
        basicPaySelect.disabled = true; // Disable when no valid scale is selected
        if (isCustomDropdown) wrapper.classList.add("disabled");
      }

      basicPaySelect.value = "";
      formData.basicPay = "";
      if (isCustomDropdown) {
        const displayText = wrapper.querySelector(".display-text");
        if (displayText) {
          displayText.textContent = "Select Basic Pay";
        }
      }
    }
  }

  // Dynamic UI updates based on PRC Year
  // Ensure that 'Scale of Pay' and 'Basic Pay' show as dropdowns for supported scales.
  if (name === "prcYear") {
    populateScaleOfPayDatalist(formData.typeOfScale, value);

    const scaleDropdownInput = document.getElementById(
      "input-scaleOfPay-dropdown",
    );
    const scaleDropdownWrapper = scaleDropdownInput
      ? scaleDropdownInput.previousElementSibling
      : null;
    const scaleNumberInput = document.getElementById("input-scaleOfPay-number");

    const basicDropdownInput = document.getElementById(
      "input-basicPay-dropdown",
    );
    const basicDropdownWrapper = basicDropdownInput
      ? basicDropdownInput.previousElementSibling
      : null;
    const basicNumberInput = document.getElementById("input-basicPay-number");

    const isDropdownSupported = value === "2022" || 
      (formData.typeOfScale === "ugc" && (value === "2006" || value === "2016")) ||
      (formData.typeOfScale === "ais_7th_pay" && value === "2016");

    if (isDropdownSupported) {
      if (scaleDropdownWrapper) scaleDropdownWrapper.style.display = "";
      if (scaleNumberInput) scaleNumberInput.style.display = "none";

      if (basicDropdownWrapper) basicDropdownWrapper.style.display = "";
      if (basicNumberInput) basicNumberInput.style.display = "none";
    } else {
      if (scaleDropdownWrapper) scaleDropdownWrapper.style.display = "none";
      if (scaleNumberInput) scaleNumberInput.style.display = "";

      if (basicDropdownWrapper) basicDropdownWrapper.style.display = "none";
      if (basicNumberInput) basicNumberInput.style.display = "";
    }

    // Reset values when PRC year changes
    formData.scaleOfPay = "";
    formData.basicPay = "";
    if (scaleDropdownInput) scaleDropdownInput.value = "";
    if (scaleNumberInput) scaleNumberInput.value = "";
    if (basicDropdownInput) basicDropdownInput.value = "";
    if (basicNumberInput) basicNumberInput.value = "";

    if (
      scaleDropdownWrapper &&
      scaleDropdownWrapper.classList.contains("custom-dropdown")
    ) {
      const displayText = scaleDropdownWrapper.querySelector(".display-text");
      if (displayText) displayText.textContent = "Type to search...";
    }
    if (
      basicDropdownWrapper &&
      basicDropdownWrapper.classList.contains("custom-dropdown")
    ) {
      const displayText = basicDropdownWrapper.querySelector(".display-text");
      if (displayText) displayText.textContent = "Select Basic Pay";
    }
  }

  // Re-evaluate sequential locking whenever a pay-section field changes
  if (paySequence.includes(name)) {
    refreshPaySequence();
  }
}

// ============================================================================
// SETUP HELPERS & EVENT HANDLERS
// ============================================================================

/**
 * Builds searchable dropdowns for both datalist-linked inputs and regular select elements.
 * @param {HTMLElement} form - The main form element
 */
function initializeSearchableDropdowns(form) {
  const dataLists = form.querySelectorAll("input[list], select");
  dataLists.forEach((input) => {
    const isSelect = input.tagName.toLowerCase() === "select";
    let dataListOptions = [];

    if (isSelect) {
      dataListOptions = Array.from(input.options).filter(
        (opt) => opt.value !== "",
      );
    } else {
      const dataListId = input.getAttribute("list");
      const dataList = document.getElementById(dataListId);
      if (dataList) {
        dataListOptions = Array.from(dataList.options);
      }
    }

    if (
      dataListOptions.length === 0 &&
      !isSelect &&
      input.id !== "input-designation"
    ) {
      // intentionally empty block inherited from original code
    }

    const wrapper = document.createElement("div");
    wrapper.className = `searchable-select custom-dropdown ${input.disabled ? "disabled" : ""}`;

    input.style.display = "none";

    if (input.required) {
      input.removeAttribute("required");
      input.dataset.wasRequired = "true";
    }

    const toggle = document.createElement("div");
    toggle.className = "select-toggle";

    let initialText = input.placeholder || "Select...";
    if (
      isSelect &&
      input.selectedIndex !== -1 &&
      input.options[input.selectedIndex].value !== ""
    ) {
      initialText = input.options[input.selectedIndex].text;
    } else if (input.value) {
      initialText = input.value;
    }

    toggle.innerHTML = `<span class="display-text">${initialText}</span> <span class="arrow down"></span>`;

    const dropdown = document.createElement("div");
    dropdown.className = "select-dropdown";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "search-input";
    searchInput.placeholder = "Search...";
    searchInput.name = "search-" + input.name;
    searchInput.id = "search-" + input.id;
    searchInput.autocomplete = "off";

    const list = document.createElement("ul");
    list.className = "options-list";

    const renderOptions = (filter = "") => {
      list.innerHTML = "";
      let hasMatch = false;

      let currentOptions = [];
      if (isSelect) {
        currentOptions = Array.from(input.options).filter(
          (opt) => opt.value !== "",
        );
      } else {
        const dListId = input.getAttribute("list");
        const dList = document.getElementById(dListId);
        if (dList) currentOptions = Array.from(dList.options);
      }

      currentOptions.forEach((opt) => {
        const text = isSelect ? opt.text : opt.value;
        const val = opt.value;
        if (text.toLowerCase().includes(filter.toLowerCase())) {
          hasMatch = true;
          const li = document.createElement("li");
          li.className = "option-item";
          li.textContent = text;
          li.addEventListener("click", (e) => {
            e.stopPropagation();
            input.value = val;
            toggle.querySelector(".display-text").textContent = text;
            handleInputChange(input.name, val, input);
            wrapper.classList.remove("open");
            const evt = new Event("blur");
            input.dispatchEvent(evt);
          });
          list.appendChild(li);
        }
      });

      if (!hasMatch) {
        const li = document.createElement("li");
        li.className = "no-options";
        li.textContent = "No results found";
        list.appendChild(li);
      }
    };

    renderOptions();

    dropdown.appendChild(searchInput);
    dropdown.appendChild(list);
    wrapper.appendChild(toggle);
    wrapper.appendChild(dropdown);

    input.parentNode.insertBefore(wrapper, input);

    toggle.addEventListener("click", (e) => {
      if (input.disabled || wrapper.classList.contains("disabled")) return;
      e.stopPropagation();
      const wasOpen = wrapper.classList.contains("open");
      document
        .querySelectorAll(".custom-dropdown")
        .forEach((el) => el.classList.remove("open"));
      if (!wasOpen) {
        wrapper.classList.add("open");
        searchInput.value = "";
        renderOptions();
        setTimeout(() => searchInput.focus(), 0);
      }
    });

    searchInput.addEventListener("input", (e) => {
      renderOptions(e.target.value);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        wrapper.classList.remove("open");
      }
      if (e.key === "Enter") {
        const firstOption = list.querySelector(".option-item");
        if (firstOption) {
          firstOption.click();
        }
      }
    });

    dropdown.addEventListener("click", (e) => e.stopPropagation());
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".custom-dropdown")
      .forEach((el) => el.classList.remove("open"));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document
        .querySelectorAll(".custom-dropdown")
        .forEach((el) => el.classList.remove("open"));
    }
  });
}

/**
 * Attaches generic input listeners (blur, input) for form validation.
 * @param {HTMLElement} form
 */
function attachInputListeners(form) {
  const inputs = form.querySelectorAll("input:not(.search-input), select");
  inputs.forEach((input) => {
    if (!input.hasAttribute("autocomplete")) {
      input.setAttribute("autocomplete", "off");
    }

    input.addEventListener("input", (e) => {
      handleInputChange(input.name, e.target.value, input);
    });

    input.addEventListener("blur", () => {
      if (input.name === "aadhaarSearch")
        validateAadhaar("aadhaarSearch", formData.aadhaarSearch);
      if (input.name === "aadhaarNumber")
        validateAadhaar("aadhaarNumber", formData.aadhaarNumber);
      if (input.name === "cfmsId") validateCfmsId(formData.cfmsId);
      if (["title", "name", "fatherName"].includes(input.name))
        validateAlpha(input.name, input.name);
      if (input.name === "panNumber") validatePan(formData.panNumber);
      if (input.name === "mobileNumber")
        validateMobileNumber(formData.mobileNumber);
      if (input.name === "bankIfscCode") validateIfsc(formData.bankIfscCode);
      if (input.name === "dob") validateDate("dob", "Date of Birth");
      if (input.name === "joiningDate")
        validateDate("joiningDate", "Date of Joining");
      if (input.name === "appointingOrderDate")
        validateDate("appointingOrderDate", "Appointing Order Date");

      updateError(input.name);
    });
  });

  const searchBtn = document.getElementById("btn-aadhaarSearch");
  if (searchBtn) {
    searchBtn.addEventListener("click", handleAadhaarSearch);
  }
}

/**
 * Handles validation and submission of the entire form.
 * @param {Event} e
 * @param {HTMLElement} form
 * @param {NodeList} inputs
 */
function handleFormSubmit(e, form, inputs) {
  e.preventDefault();

  validateAadhaar("aadhaarSearch", formData.aadhaarSearch);
  validateAadhaar("aadhaarNumber", formData.aadhaarNumber);
  validateCfmsId(formData.cfmsId);
  validateAlpha("title", "Title");
  validateAlpha("name", "Name");
  validateAlpha("fatherName", "Father Name");
  validatePan(formData.panNumber);
  validateMobileNumber(formData.mobileNumber);
  validateIfsc(formData.bankIfscCode);
  validateDate("dob", "Date of Birth");
  validateDate("joiningDate", "Date of Joining");
  validateDate("appointingOrderDate", "Appointing Order Date");

  inputs.forEach((input) => updateError(input.name));

  const hasErrors = Object.values(formErrors).some((err) => err !== "");
  if (hasErrors) {
    alert("Please fix the errors before submitting.");
    return;
  }

  console.log("Form Submitted:", formData);
  alert("Form Submitted Successfully!");
}

// === INTIALIZATION ===
document.addEventListener("DOMContentLoaded", () => {
  updateVisibility("spouseName", false);
  updateVisibility("physicalChallengedPercentage", false);
  updateVisibility("typeOfScaleOthers", false);
  updateEmploymentFieldsVisibility();

  const percentageSelect = document.getElementById(
    "input-physicalChallengedPercentage",
  );
  if (percentageSelect) {
    for (let i = 40; i <= 100; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = i + "%";
      percentageSelect.appendChild(opt);
    }
  }

  const today = new Date().toISOString().split("T")[0];
  const dobInput = document.getElementById("input-dob");
  const joiningDateInput = document.getElementById("input-joiningDate");
  const appointingOrderDateInput = document.getElementById(
    "input-appointingOrderDate",
  );

  if (dobInput) dobInput.setAttribute("max", today);
  if (joiningDateInput) joiningDateInput.setAttribute("max", today);
  if (appointingOrderDateInput)
    appointingOrderDateInput.setAttribute("max", today);

  const form = document.getElementById("employeeForm");

  // Build searchable dropdowns
  initializeSearchableDropdowns(form);

  // Apply sequential locking after building UI
  refreshPaySequence();

  // Register all blur events, input sanitizations, etc.
  attachInputListeners(form);

  // Listen for the final submit
  const inputs = form.querySelectorAll("input:not(.search-input), select");
  form.addEventListener("submit", (e) => handleFormSubmit(e, form, inputs));
});
