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

const institutionOptions = [
  { label: 'RS(B),Peddamadi', value: 'rs_b_peddamadi' },
  { label: 'RS(G),Seethampeta', value: 'rs_g_seethampeta' },
  { label: 'MG(G),Seethampeta', value: 'mg_g_seethampeta' },
  { label: 'MG(G),Kariguda', value: 'mg_g_kariguda' },
  { label: 'RS(PTG-B),Malli', value: 'rs_ptg_b_malli' },
  { label: 'RS(B),Seethampeta', value: 'rs_b_seethampeta' },
  { label: 'RJC(B),Peddamadi', value: 'rjc_b_peddamadi' },
  { label: 'RJC(B),Seethampeta', value: 'rjc_b_seethampeta' },
  { label: 'RJC(G),Seethampeta', value: 'rjc_g_seethampeta' },
  { label: 'COE(B),Malli', value: 'coe_b_malli' },
  { label: 'EMRS(Co-Edu),Bhamini', value: 'emrs_co_edu_bhamini' },
  { label: 'EMRS(Co-Edu),Meliaputi', value: 'emrs_co_edu_meliaputi' },
  { label: 'RS(B),P.Konavalasa', value: 'rs_b_p_konavalasa' },
  { label: 'RS(PTG-Girls),Bhadragiri', value: 'rs_ptg_girls_bhadragiri' },
  { label: 'MG(G),Pachipent', value: 'mg_g_pachipent' },
  { label: 'RJC(G),P.Konavalasa', value: 'rjc_g_p_konavalasa' },
  { label: 'URJC(G),Kurupam', value: 'urjc_g_kurupam' },
  { label: 'RS(B),Bhadragiri', value: 'rs_b_bhadragiri' },
  { label: 'RS(B),Komarada', value: 'rs_b_komarada' },
  { label: 'SOE(B),Parvathipuram', value: 'soe_b_parvathipuram' },
  { label: 'RJC(B),Bhadragiri', value: 'rjc_b_bhadragiri' },
  { label: 'RJC(B),P.Konavalasa', value: 'rjc_b_p_konavalasa' },
  { label: 'RJC(G),Bhadragiri', value: 'rjc_g_bhadragiri' },
  { label: 'EMRS(Co-Edu),Anasabhadra', value: 'emrs_co_edu_anasabhadra' },
  { label: 'EMRS(Co-Edu),Kotikapenta', value: 'emrs_co_edu_kotikapenta' },
  { label: 'EMRS(Co-Edu),Kurupam', value: 'emrs_co_edu_kurupam' },
  { label: 'EMRS(Co-Edu),GLPuram', value: 'emrs_co_edu_glpuram' },
  { label: 'RJC(B),Chintapally', value: 'rjc_b_chintapally' },
  { label: 'RS(B),Koyyuru', value: 'rs_b_koyyuru' },
  { label: 'RS(B),Peddabayalu', value: 'rs_b_peddabayalu' },
  { label: 'RS(B),UpperSileru', value: 'rs_b_uppersileru' },
  { label: 'RS(G),Paderu', value: 'rs_g_paderu' },
  { label: 'EMRS(Co-Edu),G.K.Veedhi', value: 'emrs_co_edu_g_k_veedhi' },
  { label: 'MG-Gomangi', value: 'mg_gomangi' },
  { label: 'MG-A.Senivaram', value: 'mg_a_senivaram' },
  { label: 'MG(G),G.Madugula', value: 'mg_g_g_madugula' },
  { label: 'RJC(G),G.K.Veedhi', value: 'rjc_g_g_k_veedhi' },
  { label: 'RS(PTG-B),Araku', value: 'rs_ptg_b_araku' },
  { label: 'RS(B),G.Madugula', value: 'rs_b_g_madugula' },
  { label: 'RS(B),Tummalavalasa', value: 'rs_b_tummalavalasa' },
  { label: 'RS(G),Arakualley', value: 'rs_g_arakualley' },
  { label: 'RS(B),VizagatMarikivalasa', value: 'rs_b_vizagatmarikivalasa' },
  { label: 'RJC(B),Araku', value: 'rjc_b_araku' },
  { label: 'RJC(B),G.Madugula', value: 'rjc_b_g_madugula' },
  { label: 'RJC(B),Koyyuru', value: 'rjc_b_koyyuru' },
  { label: 'RJC(B),Peddabayalu', value: 'rjc_b_peddabayalu' },
  { label: 'RJC(G),Arakuvalley', value: 'rjc_g_arakuvalley' },
  { label: 'RJC(G),Paderu', value: 'rjc_g_paderu' },
  { label: 'SOE(G),Vizag', value: 'soe_g_vizag' },
  { label: 'RS(B),VizagSportsSchool', value: 'rs_b_vizagsportsschool' },
  { label: 'EMRS(Co-Edu),Ananthagiri', value: 'emrs_co_edu_ananthagiri' },
  { label: 'EMRS(Co-Edu),Arakuvalley', value: 'emrs_co_edu_arakuvalley' },
  { label: 'EMRS(Co-Edu),Paderu', value: 'emrs_co_edu_paderu' },
  { label: 'EMRS(Co-Edu),Hukumpeta', value: 'emrs_co_edu_hukumpeta' },
  { label: 'EMRS(Co-Edu),Peddabayalu', value: 'emrs_co_edu_peddabayalu' },
  { label: 'EMRS(Co-Edu),G.Madugula', value: 'emrs_co_edu_g_madugula' },
  { label: 'EMRS(Co-Edu),Koyyuru', value: 'emrs_co_edu_koyyuru' },
  { label: 'EMRS(Co-Edu),Dumbriguda', value: 'emrs_co_edu_dumbriguda' },
  { label: 'EMRS(Co-Edu),Munchigput', value: 'emrs_co_edu_munchigput' },
  { label: 'EMRS(Co-Edu),Chintapalli', value: 'emrs_co_edu_chintapalli' },
  { label: 'RJC(B),Maredumilli', value: 'rjc_b_maredumilli' },
  { label: 'RS(B),Addatheegala', value: 'rs_b_addatheegala' },
  { label: 'RS(G),Rajavommangi', value: 'rs_g_rajavommangi' },
  { label: 'EMRS(G),Y.Ramavaram', value: 'emrs_g_y_ramavaram' },
  { label: 'URJC(G),Kunavaram', value: 'urjc_g_kunavaram' },
  { label: 'MG(G),V.R.Puram', value: 'mg_g_v_r_puram' },
  { label: 'RJC(G),R.C.Varam', value: 'rjc_g_r_c_varam' },
  { label: 'RS(PTG-Boys),Maredumilli', value: 'rs_ptg_boys_maredumilli' },
  { label: 'RS(B),R.C.Varam', value: 'rs_b_r_c_varam' },
  { label: 'RS(PTG-B),Chintoor', value: 'rs_ptg_b_chintoor' },
  { label: 'RS(G),R.C.Varam', value: 'rs_g_r_c_varam' },
  { label: 'RJC(B),Addateegala', value: 'rjc_b_addateegala' },
  { label: 'RJC(B),R.C.Varam', value: 'rjc_b_r_c_varam' },
  { label: 'RJC(B),Chintoor', value: 'rjc_b_chintoor' },
  { label: 'RJC(G),Y.Ramavaram', value: 'rjc_g_y_ramavaram' },
  { label: 'RJC(G),Rajavommangi', value: 'rjc_g_rajavommangi' },
  { label: 'EMRS(Co-Edu),Maredumilli', value: 'emrs_co_edu_maredumilli' },
  { label: 'EMRS(Co-Edu),R.C. Varam', value: 'emrs_co_edu_r_c_varam' },
  { label: 'EMRS(Co-Edu),Addatheegala', value: 'emrs_co_edu_addatheegala' },
  { label: 'EMRS(Co-Edu),Chintoor', value: 'emrs_co_edu_chintoor' },
  { label: 'EMRS(Co-Edu),Rajavommangi', value: 'emrs_co_edu_rajavommangi' },
  { label: 'RS(G),Buttayyagudem', value: 'rs_g_buttayyagudem' },
  { label: 'RS(B),Jeelugumilli', value: 'rs_b_jeelugumilli' },
  { label: 'RS(B),K.R.Puram', value: 'rs_b_k_r_puram' },
  { label: 'RJC(B),Jeelugumilli', value: 'rjc_b_jeelugumilli' },
  { label: 'RJC(B),K.R.Puram', value: 'rjc_b_k_r_puram' },
  { label: 'RJC(G),Buttayyagudem', value: 'rjc_g_buttayyagudem' },
  { label: 'EMRS(Co-Edu),Buttayagudem', value: 'emrs_co_edu_buttayagudem' },
  { label: 'RS(G),Vissannapeta', value: 'rs_g_vissannapeta' },
  { label: 'COE(G),Vissannapeta', value: 'coe_g_vissannapeta' },
  { label: 'HCRS(B),Jaggaiapeta', value: 'hcrs_b_jaggaiapeta' },
  { label: 'HCRS(B),Vuyyuru', value: 'hcrs_b_vuyyuru' },
  { label: 'HCRS(B),Vissannapeta', value: 'hcrs_b_vissannapeta' },
  { label: 'HCRS(G),Nandigama', value: 'hcrs_g_nandigama' },
  { label: 'HCRS(G),Mylavaram', value: 'hcrs_g_mylavaram' },
  { label: 'HCRS(G),Vijayawada at Kondapalli', value: 'hcrs_g_vijayawada_at_kondapalli' },
  { label: 'MG(G),G.P.Cheruvu', value: 'mg_g_g_p_cheruvu' },
  { label: 'RS(PTG-Boys),Nagarjunasagar', value: 'rs_ptg_boys_nagarjunasagar' },
  { label: 'HCRS(B),Stuvartpuram', value: 'hcrs_b_stuvartpuram' },
  { label: 'HCRS(G),Vinukonda', value: 'hcrs_g_vinukonda' },
  { label: 'HCRS(B),Guntur', value: 'hcrs_b_guntur' },
  { label: 'HCRS(B),Chilakaluripeta', value: 'hcrs_b_chilakaluripeta' },
  { label: 'HCRS(B),Repalle', value: 'hcrs_b_repalle' },
  { label: 'HCRS(B),PonnuruatTenali', value: 'hcrs_b_ponnuruattenali' },
  { label: 'HCRS(G),Narsaraopet', value: 'hcrs_g_narsaraopet' },
  { label: 'HCRS(B),Rentachintala', value: 'hcrs_b_rentachintala' },
  { label: 'HCRS(G),Piduguralla', value: 'hcrs_g_piduguralla' },
  { label: 'HCRS(B),Vinukonda', value: 'hcrs_b_vinukonda' },
  { label: 'HCRS(G),Karampudi', value: 'hcrs_g_karampudi' },
  { label: 'HCRS(B),Piduguralla', value: 'hcrs_b_piduguralla' },
  { label: 'HCRS(G),Tenali', value: 'hcrs_g_tenali' },
  { label: 'HCRS(B),Narasaraopeta', value: 'hcrs_b_narasaraopeta' },
  { label: 'HCRS(B),Karampudi', value: 'hcrs_b_karampudi' },
  { label: 'HCRS(B),Bellamkonda', value: 'hcrs_b_bellamkonda' },
  { label: 'HCRS(B),Addanki', value: 'hcrs_b_addanki' },
  { label: 'HCRS(B),Karedu', value: 'hcrs_b_karedu' },
  { label: 'HCRS(B),Parchur', value: 'hcrs_b_parchur' },
  { label: 'HCRS(B),Chirala', value: 'hcrs_b_chirala' },
  { label: 'HCRS(B),Dornala', value: 'hcrs_b_dornala' },
  { label: 'HCRS(G),Giddaluru', value: 'hcrs_g_giddaluru' },
  { label: 'HCRS(G),Chirala', value: 'hcrs_g_chirala' },
  { label: 'HCRS(G),Dornala', value: 'hcrs_g_dornala' },
  { label: 'MG(G),Y.Palem', value: 'mg_g_y_palem' },
  { label: 'RS(PTG-Boys),Y.Palem', value: 'rs_ptg_boys_y_palem' },
  { label: 'RJC(B),Y.Palem', value: 'rjc_b_y_palem' },
  { label: 'EMRS(Co-Edu),Dornala', value: 'emrs_co_edu_dornala' },
  { label: 'HCRS(B),Y.G.Palem', value: 'hcrs_b_y_g_palem' },
  { label: 'HCRS(G),Karedu', value: 'hcrs_g_karedu' },
  { label: 'HCRS(B),Kanigiri', value: 'hcrs_b_kanigiri' },
  { label: 'HCRS(G),Markapur', value: 'hcrs_g_markapur' },
  { label: 'HCRS(B),Giddaluru', value: 'hcrs_b_giddaluru' },
  { label: 'HCRS(B),Chimakurthy', value: 'hcrs_b_chimakurthy' },
  { label: 'HCRS(B),Kodavaluru', value: 'hcrs_b_kodavaluru' },
  { label: 'EMRS(Co-Edu),Kodavaluru', value: 'emrs_co_edu_kodavaluru' },
  { label: 'MG(G),Gudur', value: 'mg_g_gudur' },
  { label: 'RS(PTG-B),Chittedu', value: 'rs_ptg_b_chittedu' },
  { label: 'RS(PTG-B),Somasila', value: 'rs_ptg_b_somasila' },
  { label: 'RJC(B),Chittedu', value: 'rjc_b_chittedu' },
  { label: 'HCRS(G),Nellore', value: 'hcrs_g_nellore' },
  { label: 'HCRS(G),Gudur', value: 'hcrs_g_gudur' },
  { label: 'HCRS(B),Naidupeta at Gottiprolu', value: 'hcrs_b_naidupeta_at_gottiprolu' },
  { label: 'HCRS(G),Kota', value: 'hcrs_g_kota' },
  { label: 'HCRS(B),Kavali', value: 'hcrs_b_kavali' },
  { label: 'HCRS(G),Rapur', value: 'hcrs_g_rapur' },
  { label: 'HCRS(B),Sarvepalli at Nellore', value: 'hcrs_b_sarvepalli_at_nellore' },
  { label: 'HCRS(B),B.R.Palem', value: 'hcrs_b_b_r_palem' },
  { label: 'HCRS(G),Venkatagiri', value: 'hcrs_g_venkatagiri' },
  { label: 'HCRS(B),Indukurpet', value: 'hcrs_b_indukurpet' },
  { label: 'HCRS(G),Kavali', value: 'hcrs_g_kavali' },
  { label: 'HCRS(B),Guduru at Chennuru', value: 'hcrs_b_guduru_at_chennuru' },
  { label: 'EMRS(Co-Edu),Ojili', value: 'emrs_co_edu_ojili' },
  { label: 'URJC(G),Srikalahasthi', value: 'urjc_g_srikalahasthi' },
  { label: 'RS(B),Renigunta', value: 'rs_b_renigunta' },
  { label: 'RS(G),K.V.Palli', value: 'rs_g_k_v_palli' },
  { label: 'SOE(G),Srikalahasthi', value: 'soe_g_srikalahasthi' },
  { label: 'HCRS(G),Chittoor', value: 'hcrs_g_chittoor' },
  { label: 'HCRS(G),Tirupathi', value: 'hcrs_g_tirupathi' },
  { label: 'HCRS(B),Srikalahasthi', value: 'hcrs_b_srikalahasthi' },
  { label: 'HCRS(B),Madanapalli', value: 'hcrs_b_madanapalli' },
  { label: 'HCRS(B),Puttur', value: 'hcrs_b_puttur' },
  { label: 'HCRS(B),Bangarupalem', value: 'hcrs_b_bangarupalem' },
  { label: 'HCRS(B),Ramakuppam', value: 'hcrs_b_ramakuppam' },
  { label: 'HCRS(B),Pileru', value: 'hcrs_b_pileru' },
  { label: 'HCRS(B),Tambalapalle', value: 'hcrs_b_tambalapalle' },
  { label: 'HCRS(G),Punganur', value: 'hcrs_g_punganur' },
  { label: 'EMRS(Co-Edu),B.N.Khandriga', value: 'emrs_co_edu_b_n_khandriga' },
  { label: 'MG(G),RailwayKoduru', value: 'mg_g_railwaykoduru' },
  { label: 'RS(G),Rayachoti', value: 'rs_g_rayachoti' },
  { label: 'HCRS(B),T.Sundupalli', value: 'hcrs_b_t_sundupalli' },
  { label: 'HCRS(B),Porumamilla', value: 'hcrs_b_porumamilla' },
  { label: 'HCRS(B),Rayachoti', value: 'hcrs_b_rayachoti' },
  { label: 'HCRS(B),Pulivendala', value: 'hcrs_b_pulivendala' },
  { label: 'HCRS(B),Kadapa', value: 'hcrs_b_kadapa' },
  { label: 'HCRS(G),Kadapa', value: 'hcrs_g_kadapa' },
  { label: 'HCRS(B),Mydukuru', value: 'hcrs_b_mydukuru' },
  { label: 'MG(G),N.R.kunta', value: 'mg_g_n_r_kunta' },
  { label: 'RJC(G),Mahanandi', value: 'rjc_g_mahanandi' },
  { label: 'RS(B),Srisailam', value: 'rs_b_srisailam' },
  { label: 'RS(PTG-G),Mahanandi', value: 'rs_ptg_g_mahanandi' },
  { label: 'SOE(B),Srisailam', value: 'soe_b_srisailam' },
  { label: 'RJC(B),Srisailam', value: 'rjc_b_srisailam' },
  { label: 'HCRS(G),Bairluty', value: 'hcrs_g_bairluty' },
  { label: 'HCRS(B),Panyam', value: 'hcrs_b_panyam' },
  { label: 'HCRS(G),Aluru', value: 'hcrs_g_aluru' },
  { label: 'HCRS(B),Allagadda', value: 'hcrs_b_allagadda' },
  { label: 'HCRS(G),Kurnool', value: 'hcrs_g_kurnool' },
  { label: 'HCRS(B),Tuggali', value: 'hcrs_b_tuggali' },
  { label: 'URJC(B),Golladoddi', value: 'urjc_b_golladoddi' },
  { label: 'RS(G),Thanakallu', value: 'rs_g_thanakallu' },
  { label: 'COE(G),Thanakallu', value: 'coe_g_thanakallu' },
  { label: 'HCRS(G),Anantapur', value: 'hcrs_g_anantapur' },
  { label: 'HCRS(G),Kadiri', value: 'hcrs_g_kadiri' },
  { label: 'HCRS(B),Ragulapadu', value: 'hcrs_b_ragulapadu' },
  { label: 'HCRS(G),Gorantla', value: 'hcrs_g_gorantla' },
  { label: 'HCRS(G),Penugonda', value: 'hcrs_g_penugonda' },
  { label: 'HCRS(B),Kalyanadurgam', value: 'hcrs_b_kalyanadurgam' },
  { label: 'HCRS(B),B.K.Samudram', value: 'hcrs_b_b_k_samudram' },
  { label: 'HCRS(B),Kadiri', value: 'hcrs_b_kadiri' },
  { label: 'HCRS(G),Uravakonda', value: 'hcrs_g_uravakonda' },
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
  const input = document.getElementById('input-' + name);
  if (!input) return;
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
      const input = document.getElementById('input-' + curr);
      if (input && input.value) {
        input.value = '';
        formData[curr] = '';
      }
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
 * Populates the Designation select dropdown based on the selected Position.
 * Enables the select when a position is chosen, disables it otherwise.
 * @param {string} position - The selected position value ('Teaching' or 'Non-Teaching')
 */
function updateDesignationOptions(position) {
  const designationSelect = document.getElementById('input-designation');
  if (!designationSelect) return;

  // Clear current options
  designationSelect.innerHTML = '';
  formData.designation = '';

  const wrapper = designationSelect.previousElementSibling;
  const isCustomDropdown = wrapper && wrapper.classList.contains('custom-dropdown');

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

  options.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d.replace(/_/g, ' ');
    designationSelect.appendChild(opt);
  });

  designationSelect.disabled = !shouldEnable;

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
      const displayValue = value.replace(/_/g, ' ');
      empDesignationInput.value = displayValue;
      formData.employeeDesignation = displayValue;
    }
  }

  // Dynamic Basic Pay update based on Scale of Pay
  if (name === 'scaleOfPay') {
    const basicPaySelect = document.getElementById('input-basicPay');
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
