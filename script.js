// === DATA OPTIONS ===
const categoryOptions = [
  { label: 'Regular', value: 'regular' },
  { label: 'Contract', value: 'contract' },
  { label: 'Outsourcing', value: 'outsourcing' },
  { label: 'MTS (Pay)', value: 'mts_pay' },
  { label: 'MTS (PAY=DA)', value: 'mts_pay_da' },
  { label: 'Guest', value: 'guest' },
  { label: 'Services Outsourcing', value: 'services_outsourcing' },
];

const titleOptions = [
  { label: 'Mr', value: 'Mr' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Ms', value: 'Ms' },
  { label: 'Dr', value: 'Dr' },
  { label: 'Prof', value: 'Prof' },
];

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const maritalOptions = [
  { label: 'Single', value: 'single' },
  { label: 'Married', value: 'married' },
  { label: 'Widow', value: 'widow' },
  { label: 'Divorced', value: 'divorced' },
];

const yesNoOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

const religionOptions = [
  { label: 'Hindu', value: 'hindu' },
  { label: 'Muslim', value: 'muslim' },
  { label: 'Christian', value: 'christian' },
  { label: 'Sikh', value: 'sikh' },
  { label: 'Buddhist', value: 'buddhist' },
  { label: 'Jain', value: 'jain' },
  { label: 'Others', value: 'others' },
];

const recruitmentOptions = [
  { label: 'Direct Recruitment', value: 'direct' },
  { label: 'Promotion', value: 'promotion' },
  { label: 'Deputation', value: 'deputation' },
  { label: 'Both Direct Recruitment & Promotion', value: 'both_direct_promotion' },
  { label: 'Both Direct Recruitment & Deputation', value: 'both_direct_deputation' },
];

const hoaOptions = [
  { label: '2202', value: '2202-02-109' },
  { label: '2202', value: '2202-02-110' },
  { label: '2202', value: '2202-01-101' },
  { label: '2202-', value: '2202-01-102' },
];

const authorityOptions = [
  { label: 'Head of Department (HoD)', value: 'hod' },
  { label: '', value: 'ddo' },
  { label: 'District Collector', value: 'collector' },
  { label: 'Commissioner', value: 'commissioner' },
];

const scaleTypeOptions = [
  { label: 'RPS 2022', value: 'rps_2022' },
  { label: 'RPS 2015', value: 'rps_2015' },
  { label: 'RPS 2010', value: 'rps_2010' },
];

const prcYearOptions = [
  { label: '2022', value: '2022' },
  { label: '2015', value: '2015' },
  { label: '2010', value: '2010' },
  { label: '2005', value: '2005' },
];

const payScaleOptions = [
  { label: '10000-25000', value: 'scale_1' },
  { label: '25000-50000', value: 'scale_2' },
  { label: '50000-75000', value: 'scale_3' },
  { label: '75000-100000', value: 'scale_4' },
];

const basicPayOptions = [
  { label: '20000', value: '20000' },
  { label: '30000', value: '30000' },
  { label: '40000', value: '40000' },
  { label: '50000', value: '50000' },
];

const daOptions = [
  { label: '10.5%', value: '10.5' },
  { label: '20.5%', value: '20.5' },
  { label: '30.5%', value: '30.5' },
  { label: '40.5%', value: '40.5' },
];

const ccaOptions = [
  { label: 'Ananthapur', value: 'ananthapur' },
  { label: 'Chittoor', value: 'chittoor' },
  { label: 'Guntur', value: 'guntur' },
  { label: 'Nellore', value: 'nellore' },
  { label: 'Vijayawada', value: 'vijayawada' },
  { label: 'Visakhapatnam', value: 'visakhapatnam' },
];

const gpfCpsOptions = [
  { label: 'GPF ', value: 'gpf' },
  { label: 'CPS ', value: 'cps' },
];

const gisOptions = [
  { label: 'Group A (8 Units)', value: 'group_a' },
  { label: 'Group B (4 Units)', value: 'group_b' },
  { label: 'Group C (2 Units)', value: 'group_c' },
  { label: 'Group D (1 Unit)', value: 'group_d' },
];

const hraOptions = [
  { label: '4%', value: '4' },
  { label: '6%', value: '6' },
  { label: '8%', value: '8' },
  { label: '17%', value: '17' },
  { label: '25%', value: '25' },
  { label: '9%', value: '9' },
];

const casteOptions = [
  { label: 'OC', value: 'oc' },
  { label: 'BC-A', value: 'bc_a' },
  { label: 'BC-B', value: 'bc_b' },
  { label: 'BC-C', value: 'bc_c' },
  { label: 'BC-D', value: 'bc_d' },
  { label: 'BC-E', value: 'bc_e' },
  { label: 'SC', value: 'sc' },
  { label: 'ST', value: 'st' },
];

const educationOptions = [
  { label: 'SSC/10th', value: 'ssc' },
  { label: 'Intermediate/12th', value: 'inter' },
  { label: 'Diploma', value: 'diploma' },
  { label: 'Bachelor\'s Degree', value: 'bachelor' },
  { label: 'Master\'s Degree', value: 'master' },
  { label: 'Ph.D', value: 'phd' },
  { label: 'Post-Doctoral', value: 'postdoc' },
];



// ============================================================================
// STATE & VALIDATION ENGINE
// ============================================================================

// The formData object holds the current value of every field in the form.
// This matches the format expected by the backend when submitting.
let formData = {
  institutionName: '',
  employeeCategory: '',
  aadhaarSearch: '',
  aadhaarNumber: '',
  cfmsId: '',
  title: '',
  name: '',
  fatherName: '',
  dob: '',
  joiningDate: '',
  gender: '',
  maritalStatus: '',
  spouseName: '',
  caste: '',
  religion: '',
  highestEducation: '',
  isPhysicalChallenged: '',
  physicalChallengedPercentage: '',
  panNumber: '',
  mobileNumber: '',
  postCategory: '',
  position: '',
  designation: '',
  subject: '',
  modeOfRecruitment: '',
  hoa: '',
  appointingAuthority: '',
  appointingOrderNumber: '',
  appointingOrderDate: '',
  typeOfScale: '',
  typeOfScaleOthers: '',
  prcYear: '',
  scaleOfPay: '',
  basicPay: '',
  dearAllowance: '',
  ccaLocation: '',
  gpfCpsCategory: '',
  gisSlab: '',
  hra: '',
  paymentMode: '',
  apgliNumber: '',
  typeOfPay: '',
  consolidatedPayAmount: '',
  employeeDesignation: '',
  epfNumber: '',
  esiNumber: '',
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
    formErrors[name] = 'Aadhaar number must be exactly 12 digits.';
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
    formErrors.mobileNumber = 'Mobile number must be exactly 10 digits.';
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
    formErrors.bankIfscCode = 'Invalid IFSC format. Expected: 4 letters, 0, 6 alphanumeric (e.g. HDFC0000509).';
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
    formErrors.cfmsId = 'CFMS ID is required and must be numeric.';
    return false;
  }
  if (value.length !== 12) {
    formErrors.cfmsId = 'CFMS ID must be exactly 12 digits.';
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
    formErrors.panNumber = 'Invalid PAN format. Expected: 5 letters, 4 numbers, 1 letter (e.g. ABCDE1234F).';
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
  formErrors[name] = '';
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
  const group = document.getElementById('group-' + name);
  const input = document.getElementById('input-' + name);
  if (group) {
    group.style.display = isVisible ? 'flex' : 'none';
  }
  if (!isVisible && input) {
    input.value = ''; // clear hidden field value
    formData[name] = '';
    delete formErrors[name];
  }
}

/**
 * Updates the error span text below a specific input field based on formErrors state.
 * @param {string} name - The name attribute of the field
 */
function updateError(name) {
  const errSpan = document.getElementById('error-' + name);
  if (errSpan) {
    errSpan.textContent = formErrors[name] || '';
  }
}

const regularFields = ['typeOfScale', 'prcYear', 'scaleOfPay', 'basicPay', 'dearAllowance', 'ccaLocation', 'gpfCpsCategory', 'gisSlab', 'hra', 'apgliNumber'];
const consolidatedFields = ['consolidatedPayAmount', 'epfNumber', 'esiNumber'];

/**
 * Enables or disables a field and its custom dropdown wrapper.
 * @param {string} name - The field name
 * @param {boolean} enabled - True to enable, false to disable
 */
function setFieldEnabled(name, enabled) {
  const inputs = document.querySelectorAll(`[name="${name}"]`);
  inputs.forEach(input => {
    input.disabled = !enabled;
    // Also toggle the custom dropdown wrapper if present
    const wrapper = input.previousElementSibling;
    if (wrapper && wrapper.classList.contains('custom-dropdown')) {
      if (enabled) {
        wrapper.classList.remove('disabled');
      } else {
        wrapper.classList.add('disabled');
        // Reset display text when disabling
        const displayText = wrapper.querySelector('.display-text');
        if (displayText && !input.value) {
          displayText.textContent = input.placeholder || 'Select...';
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
  'employeeCategory',
  'typeOfScale',
  'prcYear',
  'scaleOfPay',
  'basicPay',
  'dearAllowance',
  'ccaLocation',
  'gpfCpsCategory',
  'gisSlab',
  'hra',
  'paymentMode',
  'apgliNumber',
];

/**
 * Walks through paySequence and disables any field whose predecessor is empty.
 * Fields that are currently hidden (via visibility logic) are skipped.
 */
function refreshPaySequence() {
  for (let i = 1; i < paySequence.length; i++) {
    const prev = paySequence[i - 1];
    const curr = paySequence[i];
    const prevGroup = document.getElementById('group-' + prev);
    const currGroup = document.getElementById('group-' + curr);
    // Skip if either group is not visible
    if (!currGroup || currGroup.style.display === 'none') continue;
    // If previous group is hidden or has no value, disable current
    const prevHidden = !prevGroup || prevGroup.style.display === 'none';
    const prevFilled = prevHidden || !!formData[prev];
    setFieldEnabled(curr, prevFilled);
    if (!prevFilled) {
      // Also clear the field's value when disabling
      const inputs = document.querySelectorAll(`[name="${curr}"]`);
      inputs.forEach(input => {
        if (input.value) input.value = '';
      });
      formData[curr] = '';
    }
  }
}

function updateEmploymentFieldsVisibility() {
  const category = formData.employeeCategory;
  const typeOfPay = formData.typeOfPay;

  updateVisibility('typeOfPay', category === 'contract');

  if (category === 'regular') {
    regularFields.forEach(f => updateVisibility(f, true));
    consolidatedFields.forEach(f => updateVisibility(f, false));
    updateVisibility('employeeDesignation', true);
    updateVisibility('paymentMode', true);
  } else if (category === 'contract') {
    const isConsolidated = typeOfPay === 'consolidated_pay';
    const isMinimumTime = typeOfPay === 'minimum_time_scale';

    regularFields.forEach(f => updateVisibility(f, isMinimumTime));
    consolidatedFields.forEach(f => updateVisibility(f, isConsolidated));
    updateVisibility('employeeDesignation', isMinimumTime || isConsolidated);
    updateVisibility('paymentMode', isMinimumTime || isConsolidated);
    updateVisibility('apgliNumber', false);
    updateVisibility('esiNumber', isMinimumTime || isConsolidated);
  } else if (['outsourcing', 'mts_pay', 'mts_pay_da', 'guest', 'services_outsourcing'].includes(category)) {
    // Show consolidated fields for other categories
    regularFields.forEach(f => updateVisibility(f, false));
    consolidatedFields.forEach(f => updateVisibility(f, true));
    updateVisibility('employeeDesignation', true);
    updateVisibility('paymentMode', true);
  } else {
    // Hide all if no selection
    regularFields.forEach(f => updateVisibility(f, false));
    consolidatedFields.forEach(f => updateVisibility(f, false));
    updateVisibility('employeeDesignation', false);
    updateVisibility('paymentMode', false);
  }

  if (formData.typeOfScale !== 'others' || document.getElementById('group-typeOfScale').style.display === 'none') {
    updateVisibility('typeOfScaleOthers', false);
  } else {
    updateVisibility('typeOfScaleOthers', true);
  }
  refreshPaySequence();
}

/**
 * Handler for the "Aadhaar Search" action button.
 * Triggers validation on the search field and populates the main Aadhaar field if valid.
 */
function handleAadhaarSearch() {
  if (!validateAadhaar('aadhaarSearch', formData.aadhaarSearch)) {
    updateError('aadhaarSearch');
    return;
  }
  if (formData.aadhaarSearch) {
    formData.aadhaarNumber = formData.aadhaarSearch;
    const aadhaarInput = document.getElementById('input-aadhaarNumber');
    if (aadhaarInput) aadhaarInput.value = formData.aadhaarNumber;
    formErrors.aadhaarNumber = '';
    updateError('aadhaarNumber');
  }
}


// Subject options per designation
const tgtSubjects = [
  'Telugu',
  'Hindi',
  'English',
  'Maths',
  'Science',
  'Social Studies',
];

const pgtSubjects = [
  'Telugu',
  'Hindi',
  'English',
  'Maths',
  'Physical Science',
  'Biological Science',
  'Social Studies',
];

/**
 * Shows/hides and populates the Subject dropdown based on the selected Designation.
 * Only visible when PGT or TGT is chosen.
 * @param {string} designation - The selected designation value
 */
function updateSubjectOptions(designation) {
  const subjectSelect = document.getElementById('input-subject');
  const subjectGroup = document.getElementById('group-subject');
  if (!subjectSelect || !subjectGroup) return;

  // Reset subject value
  formData.subject = '';

  let subjects = [];
  if (designation === 'PGT') {
    subjects = pgtSubjects;
  } else if (designation === 'TGT') {
    subjects = tgtSubjects;
  }

  if (subjects.length > 0) {
    // Populate and show
    subjectSelect.innerHTML = '<option value="" disabled selected>Select Subject</option>';
    subjects.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      subjectSelect.appendChild(opt);
    });
    subjectGroup.style.display = 'flex';

    // Sync custom dropdown wrapper if present
    const wrapper = subjectSelect.previousElementSibling;
    if (wrapper && wrapper.classList.contains('custom-dropdown')) {
      wrapper.classList.remove('disabled');
      const displayText = wrapper.querySelector('.display-text');
      if (displayText) displayText.textContent = 'Select Subject';
      // Re-render options in the custom dropdown list
      const list = wrapper.querySelector('.options-list');
      if (list) {
        list.innerHTML = '';
        subjects.forEach(s => {
          const li = document.createElement('li');
          li.className = 'option-item';
          li.textContent = s;
          li.addEventListener('click', (e) => {
            e.stopPropagation();
            subjectSelect.value = s;
            formData.subject = s;
            if (displayText) displayText.textContent = s;
            wrapper.classList.remove('open');
          });
          list.appendChild(li);
        });
      }
    }
  } else {
    // Hide
    subjectGroup.style.display = 'none';
    subjectSelect.innerHTML = '<option value="" disabled selected>Select Subject</option>';
  }
}

// Designation options per position type
const teachingDesignations = [
  'Principal',
  'Vice_Principal',
  'HM_Cum_Warden',
  'Junior_Lecturer',
  'PGT',
  'TGT',
  'Librarian',
  'PD',
  'PET',
  'Art_Craft_Music',
  'vocational',
  'CRT',
  'Coach',
  'Assistant_Coach',
];

const nonTeachingDesignations = [
  'Superintendent',
  'Sr_Assistant',
  'Staff_Nurse',
  'Junior_Assistant',
  'A_N_M',
  'Rec_Assistant',
  'Lab_Assistant',
  'Counsellor',
  'Hostel_Warden',
  'Accountant',
  'Office_Subordinate',
  'Cattering_asst',
  'Driver',
  'Electrician_cum_Plumber',
  'Gardener',
  'Chouwkidar',
  'Sweeper',
  'Cook',
  'K_Helper',
  'MPW',
  'Ayah',
  'Watch_Women-Men',
  'Sanitary_Worker',
  'Parttime_Docter',
  'Junior_Lecturer',
  'Secretary',
  'Joint_Secretary',
  'Deputy_Secretary',
  'Asst_Secretary',
  'Sr_Steno',
  'Jr_Steno',
  'Typist_cum_computer_opperator',
];

/**
 * Filter the Employee Category options based on the selected Post Category.
 * If 'Regular' is selected, show all options.
 * Otherwise, show only the option that matches the Post Category (case-insensitive).
 * Blocks the dropdown if no Post Category is selected.
 * @param {string} postCategory - The selected post category value
 */
function updateEmployeeCategoryOptions(postCategory) {
  console.log('updateEmployeeCategoryOptions called with:', postCategory);
  const employeeCategorySelect = document.getElementById('input-employeeCategory');
  if (!employeeCategorySelect) return;

  const wrapper = employeeCategorySelect.previousElementSibling;
  const isCustomDropdown = wrapper && wrapper.classList.contains('custom-dropdown');

  // Use the global categoryOptions defined at the top of the script
  let filteredCategories = [];
  let shouldEnable = false;
  let placeholderText = 'Select Employee Category';

  if (postCategory === 'Regular') {
    filteredCategories = categoryOptions;
    shouldEnable = true;
  } else if (postCategory) {
    // Attempt to find a matching category (case-insensitive)
    filteredCategories = categoryOptions.filter(cat => 
      cat.label.toLowerCase() === postCategory.toLowerCase()
    );
    shouldEnable = true;
    console.log('Filtered to:', filteredCategories);
  } else {
    // Block if no Post Category selected
    filteredCategories = [];
    shouldEnable = false;
    placeholderText = 'Select Post Category first';
  }

  // Clear current options and rebuild
  employeeCategorySelect.innerHTML = `<option value="" disabled selected>${placeholderText}</option>`;
  filteredCategories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.value;
    opt.textContent = cat.label;
    employeeCategorySelect.appendChild(opt);
  });

  employeeCategorySelect.disabled = !shouldEnable;

  // Reset value if current selection is no longer valid in the new list, or if disabled
  if (!shouldEnable || (formData.employeeCategory && !filteredCategories.find(cat => cat.value === formData.employeeCategory))) {
    console.log('Resetting employeeCategory because current value is invalid or disabled');
    employeeCategorySelect.value = '';
    formData.employeeCategory = '';
    if (isCustomDropdown) {
      const displayText = wrapper.querySelector('.display-text');
      if (displayText) displayText.textContent = placeholderText;
    }
  } else if (!formData.employeeCategory && isCustomDropdown) {
     const displayText = wrapper.querySelector('.display-text');
     if (displayText) displayText.textContent = placeholderText;
  }

  // Sync custom dropdown UI
  if (isCustomDropdown) {
    if (shouldEnable) {
      wrapper.classList.remove('disabled');
    } else {
      wrapper.classList.add('disabled');
    }

    console.log('Syncing custom dropdown for employeeCategory');
    const list = wrapper.querySelector('.options-list');
    if (list) {
      list.innerHTML = '';
      filteredCategories.forEach(cat => {
        const li = document.createElement('li');
        li.className = 'option-item';
        li.textContent = cat.label;
        li.addEventListener('click', (e) => {
          e.stopPropagation();
          employeeCategorySelect.value = cat.value;
          formData.employeeCategory = cat.value;
          const displayText = wrapper.querySelector('.display-text');
          if (displayText) displayText.textContent = cat.label;
          handleInputChange('employeeCategory', cat.value, employeeCategorySelect);
          wrapper.classList.remove('open');
        });
        list.appendChild(li);
      });

      if (filteredCategories.length === 0) {
        const li = document.createElement('li');
        li.className = 'no-options';
        li.textContent = 'No matching categories found';
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
  const designationSelect = document.getElementById('input-designation');
  const empDesignationSelect = document.getElementById('input-employeeDesignation');
  if (!designationSelect) return;

  // Clear current options
  designationSelect.innerHTML = '';
  formData.designation = '';

  if (empDesignationSelect) {
    empDesignationSelect.innerHTML = '';
    formData.employeeDesignation = '';
  }

  const wrapper = designationSelect.previousElementSibling;
  const isCustomDropdown = wrapper && wrapper.classList.contains('custom-dropdown');

  const empWrapper = empDesignationSelect ? empDesignationSelect.previousElementSibling : null;
  const empIsCustomDropdown = empWrapper && empWrapper.classList.contains('custom-dropdown');

  let options = [];
  let placeholderText = 'Select Designation';
  let shouldEnable = false;

  if (position === 'Teaching') {
    options = teachingDesignations;
    shouldEnable = true;
  } else if (position === 'Non-Teaching') {
    options = nonTeachingDesignations;
    shouldEnable = true;
  } else {
    placeholderText = 'Select Position first';
    shouldEnable = false;
  }

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = placeholderText;
  designationSelect.appendChild(placeholder);

  if (empDesignationSelect) {
    const empPlaceholder = placeholder.cloneNode(true);
    empDesignationSelect.appendChild(empPlaceholder);
  }

  options.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d.replace(/_/g, ' ');
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
      wrapper.classList.remove('disabled');
    } else {
      wrapper.classList.add('disabled');
    }
    const displayText = wrapper.querySelector('.display-text');
    if (displayText) {
      displayText.textContent = placeholderText;
    }
  }

  if (empIsCustomDropdown) {
    if (shouldEnable) {
      empWrapper.classList.remove('disabled');
    } else {
      empWrapper.classList.add('disabled');
    }
    const empDisplayText = empWrapper.querySelector('.display-text');
    if (empDisplayText) {
      empDisplayText.textContent = placeholderText;
    }
  }
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
  if (name === 'aadhaarSearch' || name === 'aadhaarNumber') {
    value = value.replace(/\D/g, '').slice(0, 12);
  }
  // Mobile: Only digits, max 10
  if (name === 'mobileNumber') {
    value = value.replace(/\D/g, '').slice(0, 10);
  }
  // CFMS ID: Only digits, max 12
  if (name === 'cfmsId') {
    value = value.replace(/\D/g, '').slice(0, 12);
  }
  // Name fields: Only alphabetical string and spaces
  if (name === 'title' || name === 'name' || name === 'fatherName' || name === 'spouseName') {
    value = value.replace(/[^a-zA-Z\s]/g, '');
  }
  // Bank and numeric ID fields
  if (['bankAccountNumber', 'epfNumber', 'esiNumber', 'apgliNumber'].includes(name)) {
    value = value.replace(/\D/g, '');
  }
  // Basic Pay: Only numbers
  if (name === 'basicPay') {
    value = value.replace(/\D/g, '');
  }
  // Scale of Pay: Numbers, spaces, and hyphens
  if (name === 'scaleOfPay') {
    value = value.replace(/[^\d\s\-]/g, '');
  }
  if (name === 'bankIfscCode') {
    value = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 11);
  }
  if (name === 'bankAndBranch') {
    value = value.replace(/[^a-zA-Z\s]/g, '');
  }
  // PAN: Only alphanumeric, force uppercase, max 10
  if (name === 'panNumber') {
    value = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 10);
  }

  // Rewrite the actual value shown in the DOM if we stripped invalid characters above
  if (inputElement && inputElement.value !== value) {
    inputElement.value = value;
  }

  // Save sanitized value to unified state
  formData[name] = value;

  // Clear "as-you-type" errors for fields that have specific string/format rules
  if (['aadhaarSearch', 'aadhaarNumber', 'mobileNumber', 'cfmsId', 'title', 'name', 'fatherName', 'panNumber'].includes(name)) {
    formErrors[name] = '';
    updateError(name);
  }

  // --- Dynamic UI Logic ---

  // Update Search button style dynamically (Changes to Blue when fully entered)
  if (name === 'aadhaarSearch') {
    const searchBtn = document.getElementById('btn-aadhaarSearch');
    if (searchBtn) {
      if (value.length === 12) {
        // Condition met: 12 digits entered! Make the button bright blue.
        searchBtn.classList.add('active');
        searchBtn.style.backgroundColor = '#007bff';
        searchBtn.style.color = 'white';
      } else {
        // Less than 12 digits: Restore default grey styling
        searchBtn.classList.remove('active');
        searchBtn.style.backgroundColor = '';
        searchBtn.style.color = '';
      }
    }
  }


  // Toggle the spouse name field based on Marital Status
  if (name === 'maritalStatus') {
    updateVisibility('spouseName', value === 'married');
  }

  // Toggle the "Others" scale field based on Type of Scale
  if (name === 'typeOfScale') {
    updateVisibility('typeOfScaleOthers', value === 'others');
  }

  // Employment category logic
  if (name === 'employeeCategory' || name === 'typeOfPay') {
    updateEmploymentFieldsVisibility();
  }
  // Toggle the physical challenge percentage based on Physical Challenge category
  if (name === 'isPhysicalChallenged') {
    updateVisibility('physicalChallengedPercentage', value === 'yes');
  }
  // Dynamic Designation update based on Position
  if (name === 'position') {
    updateDesignationOptions(value);
    // Reset subject when position changes
    updateSubjectOptions('');
  }
  // Dynamic Subject update based on Designation (only for PGT / TGT)
  if (name === 'designation') {
    updateSubjectOptions(value);

    // Sync with Employee Designation in Employment & Pay section
    const empDesignationInput = document.getElementById('input-employeeDesignation');
    if (empDesignationInput) {
      const displayValue = value ? value.replace(/_/g, ' ') : '';
      empDesignationInput.value = value;
      formData.employeeDesignation = value;

      const empWrapper = empDesignationInput.previousElementSibling;
      if (empWrapper && empWrapper.classList.contains('custom-dropdown')) {
        const empDisplayText = empWrapper.querySelector('.display-text');
        if (empDisplayText) {
          empDisplayText.textContent = displayValue || 'Select Designation';
        }
      }
    }
  }

  // Dynamic Employee Category update based on Post Category
  if (name === 'postCategory') {
    updateEmployeeCategoryOptions(value);
  }

  // Dynamic Basic Pay update based on Scale of Pay
  if (name === 'scaleOfPay') {
    const basicPaySelect = document.getElementById('input-basicPay-dropdown');
    if (basicPaySelect) {
      const payValues = [
        '20000', '20600', '21200', '21800', '22460', '23120', '23780', '24500',
        '25220', '25940', '26720', '27500', '28280', '29130', '29980', '30830',
        '31750', '32670', '33590', '34580', '35570', '36560', '37640', '38720',
        '39800', '40970', '42140', '43310', '44570', '45830', '47090', '48440',
        '49790', '51140', '52600', '54060', '55520', '57100', '58680', '60260',
        '61960', '63660', '65360', '67190', '69020', '70850', '72810', '74770',
        '76730', '78820', '80910', '83000', '85240', '87480', '89720', '92110',
        '94500', '96890', '99430', '101970', '104510', '107210', '109910', '112610',
        '115500', '118390', '121280', '124380', '127480', '130580', '133900', '137220',
        '140540', '144150', '147760', '151370', '154980', '158880', '162780', '166680', '170580', '174790', '179000', '183210', '187420', '191630', '195840', '200050'
      ];
      const scaleMaxLimits = {
        '20000 - 61960': '70850',
        '20600 - 63660': '70850',
        '21200 - 65360': '72810',
        '22460 - 72810': '83000',
        '23120 - 74770': '85240',
        '23780 - 76730': '87480',
        '25220 - 80910': '92110',
        '27500 - 87480': '99430',
        '28280 - 89720': '101970',
        '29980 - 94500': '107210',
        '32670 - 101970': '115500',
        '34580 - 107210': '121280',
        '35570 - 109910': '124380',
        '37640 - 115500': '130580',
        '38720 - 118390': '133900',
        '40970 - 124380': '140540',
        '44570 - 127480': '144150',
        '45830 - 130580': '147760',
        '48440 - 137220': '154980',
        '54060 - 140540': '147760',
        '57100 - 147760': '166680',
        '61960 - 151370': '170580',
        '65360 - 154980': '174790',
        '70850 - 158880': '179000',
        '76730 - 162780': '183210',
        '80910 - 166680': '166680',
        '87480 - 170580': '170580',
        '94500 - 170580': '170580',
        '101970 - 174790': '195840',
        '112610 - 174790': '174790',
        '124380 - 179000': '200050'
      };

      const startVal = value ? value.split(' ')[0] : '';
      const startIndex = payValues.indexOf(startVal);

      const wrapper = basicPaySelect.previousElementSibling;
      const isCustomDropdown = wrapper && wrapper.classList.contains('custom-dropdown');

      if (startIndex !== -1) {
        let optionsHtml = '<option value="" disabled selected>Select Basic Pay</option>';
        optionsHtml += '<option value="0">0</option>';

        let endIndex = payValues.length;
        if (scaleMaxLimits[value]) {
          const maxValIndex = payValues.indexOf(scaleMaxLimits[value]);
          if (maxValIndex !== -1) {
            endIndex = maxValIndex + 1;
          }
        }

        payValues.slice(startIndex, endIndex).forEach(val => {
          optionsHtml += `<option value="${val}">${val}</option>`;
        });
        basicPaySelect.innerHTML = optionsHtml;
        basicPaySelect.disabled = false; // Enable when valid scale is selected
        if (isCustomDropdown) wrapper.classList.remove('disabled');
      } else {
        basicPaySelect.innerHTML = '<option value="" disabled selected>Select Basic Pay</option>';
        basicPaySelect.disabled = true; // Disable when no valid scale is selected
        if (isCustomDropdown) wrapper.classList.add('disabled');
      }

      basicPaySelect.value = '';
      formData.basicPay = '';
      if (isCustomDropdown) {
        const displayText = wrapper.querySelector('.display-text');
        if (displayText) {
          displayText.textContent = 'Select Basic Pay';
        }
      }
    }
  }

  // Dynamic UI updates based on PRC Year
  // Ensure that 'Scale of Pay' and 'Basic Pay' show as dropdowns for 2022, but number inputs otherwise.
  if (name === 'prcYear') {
    const scaleDropdownInput = document.getElementById('input-scaleOfPay-dropdown');
    const scaleDropdownWrapper = scaleDropdownInput ? scaleDropdownInput.previousElementSibling : null;
    const scaleNumberInput = document.getElementById('input-scaleOfPay-number');

    const basicDropdownInput = document.getElementById('input-basicPay-dropdown');
    const basicDropdownWrapper = basicDropdownInput ? basicDropdownInput.previousElementSibling : null;
    const basicNumberInput = document.getElementById('input-basicPay-number');

    if (value === '2022') {
       if (scaleDropdownWrapper) scaleDropdownWrapper.style.display = '';
       if (scaleNumberInput) scaleNumberInput.style.display = 'none';

       if (basicDropdownWrapper) basicDropdownWrapper.style.display = '';
       if (basicNumberInput) basicNumberInput.style.display = 'none';
    } else {
       if (scaleDropdownWrapper) scaleDropdownWrapper.style.display = 'none';
       if (scaleNumberInput) scaleNumberInput.style.display = '';

       if (basicDropdownWrapper) basicDropdownWrapper.style.display = 'none';
       if (basicNumberInput) basicNumberInput.style.display = '';
    }

    // Reset values when PRC year changes
    formData.scaleOfPay = '';
    formData.basicPay = '';
    if (scaleDropdownInput) scaleDropdownInput.value = '';
    if (scaleNumberInput) scaleNumberInput.value = '';
    if (basicDropdownInput) basicDropdownInput.value = '';
    if (basicNumberInput) basicNumberInput.value = '';

    if (scaleDropdownWrapper && scaleDropdownWrapper.classList.contains('custom-dropdown')) {
       const displayText = scaleDropdownWrapper.querySelector('.display-text');
       if (displayText) displayText.textContent = 'Type to search...';
    }
    if (basicDropdownWrapper && basicDropdownWrapper.classList.contains('custom-dropdown')) {
       const displayText = basicDropdownWrapper.querySelector('.display-text');
       if (displayText) displayText.textContent = 'Select Basic Pay';
    }
  }

  // Re-evaluate sequential locking whenever a pay-section field changes
  if (paySequence.includes(name)) {
    refreshPaySequence();
  }

}

// === INTIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
  // Initial conditional setup
  updateVisibility('spouseName', false);
  updateVisibility('physicalChallengedPercentage', false);
  updateVisibility('typeOfScaleOthers', false);
  updateEmploymentFieldsVisibility();

  // Populate Physical Challenge Percentage dropdown (40-100%)
  const percentageSelect = document.getElementById('input-physicalChallengedPercentage');
  if (percentageSelect) {
    for (let i = 40; i <= 100; i++) {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = i + '%';
      percentageSelect.appendChild(opt);
    }
  }

  // Disable future dates for Date of Birth, Date of Joining and Appointing Order Date
  const today = new Date().toISOString().split('T')[0];
  const dobInput = document.getElementById('input-dob');
  const joiningDateInput = document.getElementById('input-joiningDate');
  const appointingOrderDateInput = document.getElementById('input-appointingOrderDate');

  if (dobInput) dobInput.setAttribute('max', today);
  if (joiningDateInput) joiningDateInput.setAttribute('max', today);
  if (appointingOrderDateInput) appointingOrderDateInput.setAttribute('max', today);

  const form = document.getElementById('employeeForm');

  // Build searchable dropdowns for both datalist-linked inputs and regular select elements
  const dataLists = form.querySelectorAll('input[list], select');
  dataLists.forEach(input => {
    // If it's a select, we'll treat its options as the datalist source
    const isSelect = input.tagName.toLowerCase() === 'select';
    let dataListOptions = [];

    if (isSelect) {
      dataListOptions = Array.from(input.options).filter(opt => opt.value !== '');
    } else {
      const dataListId = input.getAttribute('list');
      const dataList = document.getElementById(dataListId);
      if (dataList) {
        dataListOptions = Array.from(dataList.options);
      }
    }

    // For the Designation field, we expect it to start empty and be populated dynamically.
    // For other inputs with datalists, even if empty, we still want to wrap them.
    if (dataListOptions.length === 0 && !isSelect && input.id !== 'input-designation') {
      // If it's not Designation and has no options, skip only if it's not a select.
      // But actually, we want all our inputs to look consistent, so let's allow it.
    }

    const wrapper = document.createElement('div');
    wrapper.className = `searchable-select custom-dropdown ${input.disabled ? 'disabled' : ''}`;

    input.style.display = 'none';

    if (input.required) {
      input.removeAttribute('required');
      input.dataset.wasRequired = 'true';
    }

    const toggle = document.createElement('div');
    toggle.className = 'select-toggle';

    // Initial display text logic
    let initialText = input.placeholder || 'Select...';
    if (isSelect && input.selectedIndex !== -1 && input.options[input.selectedIndex].value !== '') {
      initialText = input.options[input.selectedIndex].text;
    } else if (input.value) {
      initialText = input.value;
    }

    toggle.innerHTML = `<span class="display-text">${initialText}</span> <span class="arrow down"></span>`;

    const dropdown = document.createElement('div');
    dropdown.className = 'select-dropdown';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Search...';
    searchInput.name = 'search-' + input.name;
    searchInput.id = 'search-' + input.id;
    searchInput.autocomplete = 'off';

    const list = document.createElement('ul');
    list.className = 'options-list';

    const renderOptions = (filter = '') => {
      list.innerHTML = '';
      let hasMatch = false;

      // Re-fetch options in case they changed (like for Designation)
      let currentOptions = [];
      if (isSelect) {
        currentOptions = Array.from(input.options).filter(opt => opt.value !== '');
      } else {
        const dListId = input.getAttribute('list');
        const dList = document.getElementById(dListId);
        if (dList) currentOptions = Array.from(dList.options);
      }

      currentOptions.forEach(opt => {
        const text = isSelect ? opt.text : opt.value;
        const val = opt.value;
        if (text.toLowerCase().includes(filter.toLowerCase())) {
          hasMatch = true;
          const li = document.createElement('li');
          li.className = 'option-item';
          li.textContent = text;
          li.addEventListener('click', (e) => {
            e.stopPropagation();
            input.value = val;
            toggle.querySelector('.display-text').textContent = text;
            handleInputChange(input.name, val, input);
            wrapper.classList.remove('open');
            const evt = new Event('blur');
            input.dispatchEvent(evt);
          });
          list.appendChild(li);
        }
      });

      if (!hasMatch) {
        const li = document.createElement('li');
        li.className = 'no-options';
        li.textContent = 'No results found';
        list.appendChild(li);
      }
    };

    renderOptions();

    dropdown.appendChild(searchInput);
    dropdown.appendChild(list);
    wrapper.appendChild(toggle);
    wrapper.appendChild(dropdown);

    input.parentNode.insertBefore(wrapper, input);

    toggle.addEventListener('click', (e) => {
      if (input.disabled || wrapper.classList.contains('disabled')) return;
      e.stopPropagation();
      const wasOpen = wrapper.classList.contains('open');
      document.querySelectorAll('.custom-dropdown').forEach(el => el.classList.remove('open')); // close others
      if (!wasOpen) {
        wrapper.classList.add('open');
        searchInput.value = '';
        renderOptions();
        setTimeout(() => searchInput.focus(), 0);
      }
    });

    searchInput.addEventListener('input', (e) => {
      renderOptions(e.target.value);
    });

    // Keyboard support
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        wrapper.classList.remove('open');
      }
      if (e.key === 'Enter') {
        const firstOption = list.querySelector('.option-item');
        if (firstOption) {
          firstOption.click();
        }
      }
    });

    dropdown.addEventListener('click', e => e.stopPropagation());
  });

  // Close dropdowns on outside click or Esc
  document.addEventListener('click', () => {
    document.querySelectorAll('.custom-dropdown').forEach(el => el.classList.remove('open'));
  });

  // After all dropdowns are built, apply initial sequential locking
  refreshPaySequence();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.custom-dropdown').forEach(el => el.classList.remove('open'));
    }
  });

  // Attach input listeners (regular ones)
  const inputs = form.querySelectorAll('input:not(.search-input), select');
  inputs.forEach(input => {
    // Lighthouse accessibility fix for missing autocomplete attribute
    if (!input.hasAttribute('autocomplete')) {
      input.setAttribute('autocomplete', 'off');
    }

    input.addEventListener('input', (e) => {
      handleInputChange(input.name, e.target.value, input);
    });

    // Blur validations
    input.addEventListener('blur', () => {
      // Manual trigger of specific validations
      if (input.name === 'aadhaarSearch') validateAadhaar('aadhaarSearch', formData.aadhaarSearch);
      if (input.name === 'aadhaarNumber') validateAadhaar('aadhaarNumber', formData.aadhaarNumber);
      if (input.name === 'cfmsId') validateCfmsId(formData.cfmsId);
      if (['title', 'name', 'fatherName'].includes(input.name)) validateAlpha(input.name, input.name);
      if (input.name === 'panNumber') validatePan(formData.panNumber);
      if (input.name === 'mobileNumber') validateMobileNumber(formData.mobileNumber);
      if (input.name === 'bankIfscCode') validateIfsc(formData.bankIfscCode);
      if (input.name === 'dob') validateDate('dob', 'Date of Birth');
      if (input.name === 'joiningDate') validateDate('joiningDate', 'Date of Joining');
      if (input.name === 'appointingOrderDate') validateDate('appointingOrderDate', 'Appointing Order Date');

      updateError(input.name);
    });
  });

  // Attach action button listener
  const searchBtn = document.getElementById('btn-aadhaarSearch');
  if (searchBtn) {
    searchBtn.addEventListener('click', handleAadhaarSearch);
  }

  // Handle final form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Trigger all validations
    validateAadhaar('aadhaarSearch', formData.aadhaarSearch);
    validateAadhaar('aadhaarNumber', formData.aadhaarNumber);
    validateCfmsId(formData.cfmsId);
    validateAlpha('title', 'Title');
    validateAlpha('name', 'Name');
    validateAlpha('fatherName', 'Father Name');
    validatePan(formData.panNumber);
    validateMobileNumber(formData.mobileNumber);
    validateIfsc(formData.bankIfscCode);
    validateDate('dob', 'Date of Birth');
    validateDate('joiningDate', 'Date of Joining');
    validateDate('appointingOrderDate', 'Appointing Order Date');

    inputs.forEach(input => updateError(input.name));

    const hasErrors = Object.values(formErrors).some(err => err !== '');
    if (hasErrors) {
      alert('Please fix the errors before submitting.');
      return;
    }

    console.log('Form Submitted:', formData);
    alert('Form Submitted Successfully!');
  });
});
