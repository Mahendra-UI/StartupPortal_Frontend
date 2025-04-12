import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incubatorsaccelaratorstwo',
  templateUrl: './incubatorsaccelaratorstwo.component.html',
  styleUrls: ['./incubatorsaccelaratorstwo.component.css']
})
export class IncubatorsaccelaratorstwoComponent implements OnInit {

  totalList: any = {};
  selectedIncubator: any = null;
  searchTerm: string = '';
  filteredIncubators: any[] = [];
  governmentCount: number = 0;
  privateCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalList  =  {
      "government" :
      [
        {
            "incubator_id": "1",
            "incubator_name": "aHUB (Andhra University Incubation Council)",
            "organization_university_college_name": "Andhra University",
            "govt_private": "Govt",
            "bhaskar_id": "OI-0424-7607KK",
            "district_name": "Visakhapatnam",
            "registration_type": "Section 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Mr. Ravi Eswarapu, CEO",
            "email_id": "ceo.incubation@andhrauniversity.edu.in",
            "contact_number": "+91 9949832000",
            "website_url": "https://www.a-hub.co/",
            "linkedin_url": "https://www.linkedin.com/company/auincubation/",
            "facilities_list": [
            "Access to funds, Business Education", 
            "Coaching/Mentoring",
             "Networking",
             "Legal & PR/Media exposure",
             "Co-working space", 
             "Access to markets",
             "Human resources",
             "Accounting/Tax",
             "Incorporation",
             "Skill Development",
             "Patent filing & Technology transfer",
             "Tools and Lab access"
        ],
        "sector_focus_areas_list": [
            "Sector Agnostic"
        ],
        "incubation_center_address": "AU North Campus, Andhra University North Campus, Andhra University, Visakhapatnam, Andhra Pradesh - 530003",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/ahub.png"
        },
        {
            "incubator_id": "2",
            "incubator_name": "AIC-AMTZ - Medi valley Incubation Council",
            "organization_university_college_name": "Andhra Pradesh Medtech Zone Ltd",
            "govt_private": "Govt",
            "bhaskar_id": "---",
            "district_name": "Visakhapatnam",
            "registration_type": "Govt. Scheme",
            "estd": "2018",
            "name_of_the_director_ceo_spoc": "Dr. Dilip Kumar Chekuri, CEO, Mr. Nagaraju, Asst.",
            "email_id": "ceo@medivalley-aic.in",
            "contact_number": "+91 9849698986",
            "website_url": "https://www.medivalley-aic.in/",
            "linkedin_url": "https://www.linkedin.com/company/aic-medivalley/",
    "facilities_list": [
            "State-of-the-art healthcare research labs",
            "Co-working spaces and private offices",
            "Prototyping and testing facilities",
            "Clinical validation support with medical experts",
            "Networking opportunities with healthcare professionals",
            "Workshops and training sessions",
            "Access to funding support and investor connections",
            "Mentorship from industry experts",
            "Business and regulatory advisory services",
            "Event spaces for product demos and pitch sessions"
        ],
        "sector_focus_areas_list": [
            "Medical Devices and Diagnostics",
            "Healthcare Technology and Digital Health",
            "Biotechnology and Biomedical Research",
            "Telemedicine and Remote Healthcare",
            "Pharmaceuticals and Drug Development",
            "Hospital and Clinical Management Solutions",
            "Preventive and Personalized Medicine",
            "Rehabilitation and Assistive Technologies",
            "Public Health and Community Healthcare",
            "Health Data Analytics and AI in Healthcare"
        ],
        "incubation_center_address": "I-Hub Building, AMTZ Campus, Pragati Maidan, VM Steel Project S.O, Visakhapatnam: 530031.",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/aic-amtz.png"
        },
        {
            "incubator_id": "3",
            "incubator_name": "AIC-SKU Confederation",
            "organization_university_college_name": "Sri Krishnadevaraya University",
            "govt_private": "Govt",
            "bhaskar_id": "OI-1024-9085QQ",
            "district_name": "Anantapuram",
            "registration_type": "Section 8",
            "estd": "2018",
            "name_of_the_director_ceo_spoc": "Dr. Chandra Mouli, CEO",
            "email_id": "ceo@aic-sku.com, manager@aic-sku.com",
            "contact_number": "+91 8328589345",
            "website_url": "https://www.aic-sku.com/",
            "linkedin_url": "https://www.linkedin.com/company/aic-sku/",
            "facilities_list": [
            "Access to MFP",
            "Conference Room",
            "AC Co-working Space",
            "Business Plan Writing",
            "IPR & Technology Transfer",
            "Mentoring",
            "Linkages with Start-up Community",
            "Financial Assistance", 
            "Training"
            ],
            "sector_focus_areas_list": [
            "Agritech & Food", 
            "Circular Economy & Waste Management",
            "Renewable Energy and IT/Saas"
        ],
        "incubation_center_address": "AIC-SKU Confederation, An Atal Incubation Centre, Sri Krishnadevaraya University, Anantapuramu - 515003, Andhra Pradesh, India.",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/aic-sku.png"
        },
        {
            "incubator_id": "4",
            "incubator_name": "ANGRAU Poshan Incubation Centre",
            "organization_university_college_name": "Acharya NG Rangarao University",
            "govt_private": "Govt",
            "bhaskar_id": "OI-1224-9106BE",
            "district_name": "Tirupati",
            "registration_type": "GoI Scheme",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. Kadiri Mohan,Principal Investigator & Chief Executive Officer",
            "email_id": "rabirarstpt@angrau.ac.in",
            "contact_number": "+91 9848383955",
            "website_url": "https://www.angraurabitpt.org/",
            "linkedin_url": "https://www.linkedin.com/in/angrau-agri-business-incubator-62b132219/",
            "facilities_list": [
                "Mentoring Services",
                "Supply Chain Management",
                "Customer Relations Developmen",
                "Fund raising & Access to Investors",
                "Linkage to Strategic Partners",
                "Intellectual Property Services",
                "Marketing & Networking Assistance",
                "General Legal Assistance & Regulatory Compliance",
                "Technical Assistance"
            ],
            "sector_focus_areas_list": [
                "Agricultural Biotechnology",
                "Supply Chain Management",
                "Farm Retailing",
                "Waste to Wealth",
                "Secondary Agriculture",
                "Agri Extension Services",
                "Organic Farming",
                "IOT",
                "Bioagents & Bio fertilizers",
                "Other Frontier technologies in Agriculture"
            ],
            "incubation_center_address": "ANGRAU Poshan Incubator, Regional Agricultural Research Station, S.V.Agricultural College campus, Chandragiri Road, Tirupati - 517502, Chittoor District, Andhra Pradesh, India.",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/angrau.png"
        },
        {
            "incubator_id": "5",
            "incubator_name": "Audisankara Innovation & Incubation Centre (ACIC - ASIIC)",
            "organization_university_college_name": "Audisankara College of Engineering & Technology",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "Tirupati",
            "registration_type": "Section 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. Immanule Anupalli, CEO",
            "email_id": "acic-asiic@audisankara.ac.in",
            "contact_number": "+91 9490099717",
            "website_url": "https://acic-asiic.audisankara.ac.in/",
            "linkedin_url": "https://www.linkedin.com/in/acic-asiic-608115234/",
            "facilities_list": [
            "Co-working Spaces for startups",
            "Prototyping and Product Development Labs",
            "Mentorship and Advisory Support",
            "Business Development Assistance",
            "Networking Opportunities with investors and industry professionals",
            "Access to Funding and Grants",
            "Workshops and Training Programs"
        ],
            "sector_focus_areas_list": [
                "Agri-Tech",
                "Clean Energy",
                "IT & Software Solutions"
            ],
            "incubation_center_address": "ACIC-AUDISANKARA INNOVATION AND INCUBATION CENTRE, NH - 5 Bypass Road, Aravinda Nagar, Gudur - 524101, Tirupati Dist.,A.P., India.",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/audisankara.png"
        },
    //     {
    //         "incubator_id": "6",
    //         "incubator_name": "Bio Valley Incubation Council (BVIC)- AMTZ",
    //         "organization_university_college_name": "Andhra Pradesh Medtech Zone Ltd",
    //         "govt_private": "Govt",
    //         "bhaskar_id": "NA",
    //         "district_name": "Visakhapatnam",
    //         "registration_type": "Section 8",
    //         "estd": "2018",
    //         "name_of_the_director_ceo_spoc": "Dr. K. Suseela Bhramam, CEO",
    //         "email_id": "info@biovalley-amtz.in",
    //         "contact_number":  "+91 8056122888",
    //         "website_url": "https://www.biovalley-amtz.in/",
    //         "linkedin_url": "https://www.linkedin.com/company/andhra-pradesh-medtech-zone-limited-medical-technology-park-in-india/",
    // "facilities_list": [
    //         "High-end biotech and molecular biology labs",
    //         "Prototyping and manufacturing units for medical devices",
    //         "Regulatory and compliance support for medical products",
    //         "Co-working and private office spaces",
    //         "Clinical testing and validation support",
    //         "Mentorship and access to healthcare experts",
    //         "Funding assistance and investor connections",
    //         "Workshop and training programs on industry-relevant topics",
    //         "Event spaces for product demos and networking"
    //     ],
    //     "sector_focus_areas_list": [
    //         "Medical Devices",
    //         "Biotechnology",
    //         "Diagnostics and Testing Solutions",
    //         "Digital Health and Health Informatics",
    //         "Pharmaceuticals and Drug Development",
    //         "Public Health and Community Health Innovations"
    //     ],
    //     "incubation_center_address": "I-Hub Building, AMTZ Campus, Pragati Maidan, VM Steel Project S.O, Visakhapatnam: 530031.",
    //     "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/biovalley.png"
    //     },
        {
            "incubator_id": "7",
            "incubator_name": "Centre for Innovation & Entrepreneurship Development (CIEDI)",
            "organization_university_college_name": "IIIT Sri City",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "Tirupati",
            "registration_type": "Section 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Mr. krishna murthy Palanisamy, TBI Manager, Somayajulu, Registrar ",
            "email_id": "gyancircle.ventures@iiits.in",
            "contact_number": "+91 7598132728, +91 9154857418",
            "website_url": "https://www.iiits.ac.in/innovation-tbi/",
            "linkedin_url": "https://www.linkedin.com/school/indian-institute-of-information-technology-sricity/",
    "facilities_list": [
            "Co-working spaces",
            "Knowledge Sessions",
            "Lab facilities",
            "Prototyping facilities",
            "Industry and Investor Connect",
            "Mentorship and Advisory support"
        ],
        "sector_focus_areas_list": [
            "Artificial Intelligence (AI)",
            "Data Science",
            "Cybersecurity",
            "IoT (Internet of Things)",
            "Software Development"
        ],
        "incubation_center_address": "Indian Institute of Information Technology, Sri City, Chittoor 630 Gnan Marg, Sri City, Satyavedu Mandal, Chittoor District - 517646, Andhra Pradesh, India",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/ciedi.png"
        },
        {
            "incubator_id": "8",
            "incubator_name": "IIMV Foundation for Incubation Enterpreneurial Learning and Devolpment",
            "organization_university_college_name": "Indian Institute of Management ",
            "govt_private": "Govt",
            "bhaskar_id": "01-1124-9100CU",
            "district_name": "Visakhapatnam",
            "registration_type": "Section 8",
            "estd": "2020",
            "name_of_the_director_ceo_spoc": "Mr. Guhesh Ramanathan, CEO Mr. Harsha, Manager",
            "email_id": "guhesh.ramanathan@gmail.com, incubationcenter@iimv.ac.in, coo@iimvfield.com",
            "contact_number": "+91 9848071516, +91 8884000845",
            "website_url": "https://iimvfield.com/",
            "linkedin_url": "https://www.linkedin.com/company/iimvfield/",
    "facilities_list": [
            "Mentoring Support",
            "Networking Support",
            "Infrastructure & Access to Learning Resources",
            "Capacity Building Programs",
            "Promotions in Internal Digital media channels",
            "Interns Support",
            "Customized Business Challenge Competitions & Opportunities",
            "Startup Kit",
            "etc."
        ],
        "sector_focus_areas_list": [
            "EduTech",
            "FinTech",
            "Logistics",
            "Marine",
            "Health & Wellness",
            "etc."
        ],
        "incubation_center_address": "IIMV FIELD IIM Visakhapatnam Permanent Campus, Gambheeram, Visakhapatnam, Andhra Pradesh, India, 531163",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/iimv.png"
        },
        {
            "incubator_id": "9",
            "incubator_name": "IIT Tirupati Navavishkar I-Hub Foundation (IITTNiF)",
            "organization_university_college_name": "IIT Tirupati ",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "Tirupati",
            "registration_type": "Section 8",
            "estd": "2022",
            "name_of_the_director_ceo_spoc": "Dr. Roshan Srivastav, Project Director",
            "email_id": "shihab@iittp.ac.in",
            "contact_number": "+91 9154989951",
            "website_url": "https://iittnif.com/",
            "linkedin_url": "https://www.linkedin.com/company/iittniftih/",
    "facilities_list": [
            "Incubation Spaces",
            "Mentorship",
            "Equipment and Infrastructure",
            "Networking Opportunities",
            "Access to Government Schemes",
            "Training and Workshops"
        ],
        "sector_focus_areas_list": [
            "Quantum Technologies",
            "Geospatial Tools",
            "Data Science",
            "Radio Frequency",
            "Image Processing",
            "Indoor Mapping",
            "Robotics",
            "Defence",
            "Applied Areas",
            "Precision Agriculture",
            "Disaster Management",
            "Smart Cities",
            "Smart Villages"
        ],
        "incubation_center_address": "IIT Tirupati Navavishkar I-Hub Foundation, Central Instrumentation Facility (CIF), Indian Institute of Technology Tirupati, Yerpedu – Venkatagiri Road, Yerpedu Post, Tirupati District, Andhra Pradesh - 517619",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/iitnif.png"
        },
        {
            "incubator_id": "10",
            "incubator_name": "Kalpataru - Centre of Entrepreneurship",
            "organization_university_college_name": "STPI, Govt. of India",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "Visakhapatnam",
            "registration_type": "Section 8",
            "estd": "2022",
            "name_of_the_director_ceo_spoc": "Mr. Chithranjan Sethi",
            "email_id": "kalpataru@stpi.in",
            "contact_number": "+91 8260164412",
            "website_url": "https://kalpataru.stpi.in/",
            "linkedin_url": "https://https//www.linkedin.com/company/stpi-kalpataru-coe.linkedin.com/in/kalpataru-coe-634608249/",
    "facilities_list": [
            "Ready-to-Work Plug-and-Play Space",
            "Industry 4.0 Laboratories",
            "Mentorship",
            "Funding & Investment Support",
            "Marketing Support",
            "Legal & Statutory Support",
            "etc."
        ],
        "sector_focus_areas_list": [
            "Digital Solutions",
            "Technology Product Development",
            "Manufacturing and Process Innovations",
            "etc."
        ],
        "incubation_center_address": "Software Technology Parks of India, KALPATARU – Centre of Entrepreneurship, Sector-1, Ukkunagaram, Visakhapatnam – 530032",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/kalpataru.png"
        },
        {
            "incubator_id": "11",
            "incubator_name": "MeitY Centre of Excellence IoT & AI ",
            "organization_university_college_name": "NASSCOM",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "Visakhapatnam",
            "registration_type": "Section 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Smt. Pooja Vidyashankar, Center Head, Mr. Om Prakash, Business Manager",
            "email_id": "PVidyaShankar@mail.nasscom.in, sanjeev@nasscom.in, omprakash@nasscom.in",
            "contact_number": "+91 7702460777",
            "website_url": "https://www.coe-iot.com/",
            "linkedin_url": "https://www.linkedin.com/company/nasscomcoe-iot/",
    "facilities_list": [
            "State-of-the-art Infrastructure",
            "Innovation Labs",
            "Incubation Space",
            "Seed Funding",
            "Industry Mentorship",
            "Investment Opportunities",
            "Student-Run Labs",
            "etc."
        ],
        "sector_focus_areas_list": [
            "Artificial Intelligence (AI)",
            "Internet of Things (IoT)",
            "Robotics",
            "Edge Computing",
            "Cybersecurity",
            "etc."
        ],
        "incubation_center_address": "NASSCOM CoE-IoT & AI, Opp. Department of Marine Engineering, North Campus, Andhra University, Visakhapatnam-530003, AP.",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/nasscom.png"
        },
        {
            "incubator_id": "12",
            "incubator_name": "NRI institute of Technology",
            "organization_university_college_name": "NRI institute of Technology",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "NTR",
            "registration_type": "",
            "estd": "2022",
            "name_of_the_director_ceo_spoc": "Mr. Naga Bhaskar ",
            "email_id": "ao@nriit.edu.in, principal@nriit.edu.in",
            "contact_number": "+91 9390686868",
            "website_url": "https://nriit.edu.in/",
            "linkedin_url": "https://www.linkedin.com/company/nri-institute-of-technology-vij/",
    "facilities_list": [
            "Co-working Spaces for startups",
            "Prototyping and Product Development Labs",
            "Mentorship and Advisory Support",
            "Business Development Assistance"
        ],
        "sector_focus_areas_list": [
            "Agri-Tech",
            "Clean Energy",
            "IT & Software Solutions"
        ],
        "incubation_center_address": "NRI INSTITUTE OF TECHNOLOGY, Pothavarappadu (V), Via Nunna, Agiripalli (M), Vijayawada Rural, Krishna District, Andhra Pradesh.",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/nri.png"
        },
        {
            "incubator_id": "13",
            "incubator_name": "SPMVV - SIIE - TBI",
            "organization_university_college_name": "Sri Padmavati Mahila Visvavidyalayam",
            "govt_private": "Govt",
            "bhaskar_id": "OI-1124-9097TV",
            "district_name": "Tirupati",
            "registration_type": "Section 8",
            "estd": "2018",
            "name_of_the_director_ceo_spoc": "Dr.J. Sury Kumar, CEO",
            "email_id": "ceo.spmvv@gmail.com",
            "contact_number": "+91 8056022121",
            "website_url": "https://spmvv-tbi.in/",
            "linkedin_url": "https://www.linkedin.com/in/ssiietbi-spmvv-641ba5263/",
    "facilities_list": [
            "State-of-the-art Infrastructure",
            "Innovation Labs",
            "Incubation Space",
            "Seed Funding",
            "Industry Mentorship",
            "Investment Opportunities",
            "Student-Run Labs",
            "etc."
        ],
        "sector_focus_areas_list": [
            "Agriculture and Food Technology",
            "Healthcare and Wellness",
            "Education Technology (EdTech)",
            "Textiles and Handicrafts"
        ],
        "incubation_center_address": "SSIIE-TBI, C.V. Raman Block, School of Engineering & Technology, Sri Padmavati Mahila Visvavidyalayam, Tirupati - 517502",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/spmvvsiietbi.png"
        },
        {
            "incubator_id": "14",
            "incubator_name": "SPMVV-Livelihood Business Incubator (LBI)",
            "organization_university_college_name": "Sri Padmavati Mahila Visvavidyalayam",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "Tirupati",
            "registration_type": "Section 8",
            "estd": "2020",
            "name_of_the_director_ceo_spoc": "Prof. B. Jeevana Jyothi, Coordinator",
            "email_id": "info@spmvv.ac.in, registrar@spmvv.ac.in",
            "contact_number": "+91 9705988430",
            "website_url": "https://www.spmvv.ac.in/incubators/livelihood-business-incubator-lbi/",
            "linkedin_url": "NA",
    "facilities_list": [
            "Skill Development Programs",
            "Business Mentorship",
            "Financial Literacy",
            "Market Linkages",
            "Access to Government Schemes"
        ],
        "sector_focus_areas_list": [
            "Technology of manufacturing Bakery products",
            "Traditional Embroidery",
            "Manufacturing of Traditional Foods and Functional Foods",
            "Mushroom cultivation",
            "Distillation unit operator"
        ],
        "incubation_center_address": "Padmavati Nagar, Tirupati, Tirupati District, Andhra Pradesh-517502",
        "logo_url": NaN
        },
        {
            "incubator_id": "15",
            "incubator_name": "SPMVV-Women Biotech Incubation Facility",
            "organization_university_college_name": "Sri Padmavati Mahila Visvavidyalayam",
            "govt_private": "Govt",
            "bhaskar_id": "OI-1124-9097TV",
            "district_name": "Tirupati",
            "registration_type": "Section 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr.V.Kalarani, CEO",
            "email_id": "spmvvwbif@gmail.com",
            "contact_number": "+91 9704271015",
            "website_url": "https://www.spmvvwbif.com/",
            "linkedin_url": "NA",
    "facilities_list": [
            "State-of-the-art Infrastructure",
            "Innovation Labs",
            "Incubation Space",
            "Seed Funding",
            "Industry Mentorship",
            "Investment Opportunities",
            "Student-Run Labs",
            "etc."
        ],
        "sector_focus_areas_list": [
            "Agriculture and Food Technology",
            "Healthcare and Wellness",
            "Education Technology (EdTech)",
            "Textiles and Handicrafts"
        ],
        "incubation_center_address": "SPMVV-WBIF, SSIIE DBT-Bio-NEST, 2nd Floor Kalpana Chawla Building,Science Block II, Sri Padmavati Mahila Visvavidyalayam(Women's University), Tirupati.",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/spmvvwomen.png"
        },
        {
            "incubator_id": "16",
            "incubator_name": "SVU - RUSA INNOVATION HUB",
            "organization_university_college_name": "Sri Venkateswara University ",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "Tirupati",
            "registration_type": "Section 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Mr. Vamsi Krishna Rayala, CEO",
            "email_id": "acm@svce.ac.in, principal@svce.ac.in, enquiry@svce.ac.in",
            "contact_number": "+91 9848022556",
            "website_url": "https://svuniversity.edu.in/about-svu-rusa",
            "linkedin_url": "NA",
    "facilities_list": [
            "Incubation Spaces",
            "Mentorship",
            "Equipment and Infrastructure",
            "Networking Opportunities",
            "Access to Government Schemes",
            "Training and Workshops"
        ],
        "sector_focus_areas_list": [
            "Nano & Micro Satellite Technology",
            "Earth & Atmospheric Sciences",
            "Material Sciences",
            "Herbal Drug Development",
            "Bio Sciences",
            "Bio Energy"
        ],
        "incubation_center_address": "Sri Venkateswara University, Tirupati, Andhra Pradesh - 517502",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/svurusa.png"
        },
        {
            "incubator_id": "17",
            "incubator_name": "Vincity Incubation Services, Vijayawada",
            "organization_university_college_name": "STPI, Govt. of India",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "NTR",
            "registration_type": "Section 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Mr. B. Vinaykumar, Joint Director",
            "email_id": "vinaykumar.b@stpi.in, vijayawada@stpi.in",
            "contact_number": " +91 9666672749",
            "website_url": "https://stpi.in/en/about-hyderabad-vijayawada",
            "linkedin_url": "https://www.linkedin.com/company/stpiindia/posts/?feedView=all",
    "facilities_list": [
            "Plug & Play Space",
            "Mentorship",
            "Networking Opportunities",
            "Workshops and Training",
            "Funding Support"
        ],
        "sector_focus_areas_list": [
            "Technology and Innovation",
            "Sustainable Development",
            "Market Readiness"
        ],
        "incubation_center_address": "STPI Vijayawada VINCITY, NH16, Opposite LEPL ICON, Krishna Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520008",
        "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/stpivincity.png"
        },
        {
            "incubator_id": "18",
            "incubator_name": "Kurnool incubation Center Technology (KITE) Foundation",
            "organization_university_college_name": "Indian Institute of Information Technology, Design and Manufacturing (IIITDM)",
            "govt_private": "Govt",
            "bhaskar_id": "NA",
            "district_name": "Kunrool",
            "registration_type": "---",
            "estd": "2022",
            "name_of_the_director_ceo_spoc": "Dr. J. krishnaiah, Director",
            "email_id": "krishnaiah@iiitk.ac.in",
            "contact_number": "+91 9442544782",
            "website_url": "",
            "linkedin_url": "",
    "facilities_list": [NaN
        ],
        "sector_focus_areas_list": [
            NaN
        ],
        "incubation_center_address": "---",
        "logo_url": NaN
        }
    ],
    "private": [
        {
            "incubator_id": "1",
            "incubator_name": "ACIC-KL Startups Foundation ",
            "organization_university_college_name": "KL University",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Guntur",
            "registration_type": "Section 8",
            "estd": "2020",
            "name_of_the_director_ceo_spoc": "Shri. V. Raman kanth, CEO",
            "email_id": "acic.klstartups@kluniversity.in",
            "contact_number": "+91 9958273661",
            "website_url": "http://www.acickl.in",
            "linkedin_url": "https://www.linkedin.com/company/acicklstartups/",
            "facilities_list": [
                "Co-working spaces,",
                "Knowledge Sessions,",
                "Lab Facilities,",
                "Prototyping Facilities,",
                "Industry and Investor Connect,",
                "Mentorship and Advisory support,",
                "Funding support,",
                "Technical support,",
                "Rapid Fab Lab",
            ],
            "sector_focus_areas_list": [
                "Technology Startups",
                "Engineering Innovations",
                "Renewable Energy",
                "Healthcare and Biomedical Innovations",
                "Agri-Tech"
            ],
            "incubation_center_address": "Green Fields, Vaddeswaram, Andhra Pradesh - 522302",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/acickl.png"
        },
        {
            "incubator_id": "2",
            "incubator_name": "Aditya global business incubator ",
            "organization_university_college_name": "Aditya College of Engineering and Technology ",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Kakinada",
            "registration_type": "Section 8",
            "estd": "2018",
            "name_of_the_director_ceo_spoc": "Prof.  K.V.S.R. Murthy, Dean R&D, Mr. JD. Venkatesh, HOD",
            "email_id": "dean_rc@adityauniversity.in, murthy.kvs@aec.edu.in",
            "contact_number": "+91 9966803153, +91 7731027776",
            "website_url": "https://aditya.ac.in/aec/courses/aditya-global-business-incubator/",
            "linkedin_url": "https:/ Kbusiness inndityabusiness in.aditya global business incua/aditya global business incuEGeddapuram-533437\nEast-Godavari Districts incubator/edu-aec/",
            "facilities_list": [
                "Co-Working Space",
                "IP facilitation Center",
                "Desigin Center",
                "Development Center",
                "Residential Space",
                "etc."
            ],
            "sector_focus_areas_list": [
                "Agri-Tech,",
                "Clean Energy,",
                "IT & Software Solutions",
                "etc.."
            ],
            "incubation_center_address": "ADITYA ENGINEERING COLLEGE, Surampalem, Peddapuram-533437, East-Godavari District,  Andhra Pradesh, India. Ph: +917095076663.",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/adityaglobal.png"
        },
        {
            "incubator_id": "3",
            "incubator_name": "AITAM Entrepreneurship Development Cell",
            "organization_university_college_name": "Aditya Institute of Technology and Management(AITAM)",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Srikakulam",
            "registration_type": "Section 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Dr. D. Vishnu Murty, Chief Coordinator",
            "email_id": "dvishnumurty.mba@adityatekkali.edu.in",
            "contact_number": "+91 9949688627",
            "website_url": "https://www.adityatekkali.edu.in/edc.php",
            "linkedin_url": "https://www.linkedin.com/company/aitamofficial/",
            "facilities_list": [
                "Co-working spaces for student entrepreneurs",
                "Innovation lab for prototyping and product development",
                "Mentorship and advisory support from industry experts and faculty",
                "Training rooms for skill development workshops",
                "Networking events with alumni, industry professionals, and investors",
                "Guidance on funding, grants, and government schemes",
                "Library and online resources on entrepreneurship",
                "Event space for hackathons, pitch sessions, and competitions",
            ],
            "sector_focus_areas_list": [
                "Agri-Tech,",
                "Clean Energy,",
                "IT & Software Solutions",
                "etc.."
            ],
            "incubation_center_address": "K.Kotturu,Tekkali, 532201, Srikakulam(Dist), Andhrapradesh, India",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/aitm.png"
        },
        {
            "incubator_id": "4",
            "incubator_name": "Andhra Technology Business Incubator",
            "organization_university_college_name": "Narasarao peta Engineering College",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Palnadu",
            "registration_type": "Section 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. S. V. N. SREENIVASU, CEO",
            "email_id": "info@nrtec.in, ceoatbi@nrtec.in",
            "contact_number": "+91 9440757039",
            "website_url": "https://www.nrtec.in/",
            "linkedin_url": "https:/ Vusinesandhrausines.incubatoru/incubatorsa, Palnadu Dist. Andhra Pradesh 522601\n\niness Incubator/nrtec-nrtec/",
            "facilities_list": [
                "Co-working spaces,",
                "Knowledge Sessions,",
                "Lab Facilities,",
                "Prototyping Facilities,",
                "Industry and Investor Connect,",
                "Mentorship and Advisory support",
                ""
            ],
            "sector_focus_areas_list": [
                "Agri-Tech and Food Processing",
                "Information Technology and Software Development",
                "Renewable Energy Solutions",
                "Healthcare and Med-Tech Innovations",
                "IoT and Smart Devices",
                "Manufacturing and Mechanical Engineering Solutions",
                ""
            ],
            "incubation_center_address": "Kotappakonda Road, Narasaraopeta - 522601, Palnadu Dist. Andhra Pradesh 522601",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/atbi.png"
        },
        {
            "incubator_id": "5",
            "incubator_name": "ANITS Incubation Centre",
            "organization_university_college_name": "Anil Neerukonda Institute of Technology and Sciences",
            "govt_private": "Private",
            "bhaskar_id": "OI-1224-9104XX",
            "district_name": "Visakhapatnam",
            "registration_type": "Registered under MSME",
            "estd": "2023",
            "name_of_the_director_ceo_spoc": "Dr P Murugapandiyan (SPOC)",
            "email_id": "convener_iic@anits.edu.in",
            "contact_number": "+91 7995642097",
            "website_url": "https://iic.anits.edu.in/",
            "linkedin_url": NaN,
            "facilities_list": [
                "24/7 Access",
                "12 computers with AC cabin available",
                "Mentoring facility available"
            ],
            "sector_focus_areas_list": [
                "Engineering and Technology",
            ],
            "incubation_center_address": "ANITS Incubation Centre, Anil Neerukonda Institute of Technology and Sciences, Visakhapatnam-531 162",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/cii.png"
        },
        {
            "incubator_id": "6",
            "incubator_name": "Center for Innovation and Incubation",
            "organization_university_college_name": "Gayathri Vidya Parishad College of Engineering",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Visakhapatnam",
            "registration_type": "Society",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Prof. A.B. Koteswara rao, principal",
            "email_id": "principal@gvpce.ac.in",
            "contact_number": "+91 8885043401",
            "website_url": "https://gvpce.ac.in/innovation/",
            "linkedin_url": "https:/A.andkenterand.incubationm/incubationCoring/ac-gvpce/",
            "facilities_list": [
                "Co-working Spaces,",
                "Workstations,",
                "Pre-Incubation Unit,",
                "Student Clubs for Innovation,",
                "Maker Space/Tinkering Lab,"
            ],
            "sector_focus_areas_list": [
                "Information Technology and Digital Solutions",
                "Agriculture and Agri-Tech",
                "Renewable Energy and Sustainability",
                "Healthcare and Wellness",
                "Food Processing",
                "Manufacturing and Engineering",
                "E-Commerce and Retail",
                "Education Technology",
                ""
            ],
            "incubation_center_address": "Gayatri Vidya Parishad College of Engineering (Autonomous), Madhurawada, Visakhapatnam - 530048, Andhra Pradesh, India",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/cii.png"
        },
        {
            "incubator_id": "7",
            "incubator_name": "Centurion University Of Technology & Management (CUTM) Innovation & Incubation Center",
            "organization_university_college_name": "Centurion University Of Technology & Management",
            "govt_private": "Private",
            "bhaskar_id": "OI-1124-9087XY",
            "district_name": "Vizianagaram",
            "registration_type": "Section 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Prof. J Anil Kumar, CEO",
            "email_id": "anilkumar.j@cutm.ac.in",
            "contact_number": "+91 6305350645",
            "website_url": "https://cutmap.ac.in/",
            "linkedin_url": "https://www.linkedin.com/company/centurion-university-of-technology-and-management-andhra-pradesh/",
            "facilities_list": [
                "Incubation Spaces",
                "Mentorship",
                "Equipment and Infrastructure",
                "Networking Opportunities",
                "Access to Government Schemes",
                "Training and Workshops"
            ],
            "sector_focus_areas_list": [
                "Automotive,",
                "Manufacturing and Energy,",
                "IT & ITES,",
                "Healthcare,",
                "Precision Agriculture",
                ""
            ],
            "incubation_center_address": "Tekkali Village, Nelimarla Mandal, Vizianagaram Pin: 535003, Andhra Pradesh",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/cutm.png"
        },
        {
            "incubator_id": "8",
            "incubator_name": "Dhanekula Technolgy Business Incubator",
            "organization_university_college_name": "Dhanekula Institute of Engineering and Technology ",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "NTR",
            "registration_type": "NA",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. G.Rajesh, Dr. Vamsi krishna, HOD",
            "email_id": "contact@diet.ac.in, principal@diet.ac.in",
            "contact_number": "+91 9010303888, +91 7013671935",
            "website_url": "https://diet.ac.in/tbi/",
            "linkedin_url": NaN,
            "facilities_list": [
                "Physical Office Space,",
                "Technology Infrastructure,",
                "Mentorship & Advisory Services,",
                "Funding Assistance,",
                "Consultancy Services,",
                "Internships & Workshops,",
                "Networking Events"
            ],
            "sector_focus_areas_list": [
                "PCB Design and Fabrication",
                "IoT based atmospheric water supply system",
                "Automatic water management system",
                "Drone sprayer",
                "Smart and versatile cleaner with IoT applications",
                ""
            ],
            "incubation_center_address": "Dhanekula engineering College, Penamaluru Mandal, Ganguru, Vijayawada - 521139, Krishna.",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/dhanekula.png"
        },
        {
            "incubator_id": "9",
            "incubator_name": "GMRIT Business Incubation Center ",
            "organization_university_college_name": "GMR Institute of Technology",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Vizianagaram",
            "registration_type": "MSME",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. M. Srinivasa Rao, Head for Innovation & Startup ",
            "email_id": "prasad.clvrsv@gmrgroup.in, srinivas.m@gmrit.edu.in",
            "contact_number": "+91 9000542349",
            "website_url": "https://gmrit.edu.in/",
            "linkedin_url": NaN,
            "facilities_list": [
                "Co-working spaces,",
                "Knowledge Sessions,",
                "Lab Facilities,",
                "Prototyping Facilities,",
                "Industry and Investor Connect,",
                "Mentorship and Advisory support",
                ""
            ],
            "sector_focus_areas_list": [
                "Agri-Tech,",
                "Clean Energy,",
                "IT & Software Solutions"
            ],
            "incubation_center_address": "GMR INSTITUTE OF TECHNOLOGY, GMR Nagar, Rajam - 532127, Vizianagaram District, Andhra Pradesh",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/gmrit.png"
        },
        {
            "incubator_id": "10",
            "incubator_name": "GPREC Innovation and Incubation Center",
            "organization_university_college_name": "G Pulla Reddy Engineering College",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Kurnool",
            "registration_type": "Section - 8",
            "estd": "2022",
            "name_of_the_director_ceo_spoc": "Dr D R Srinivas",
            "email_id": "srinivas.ece@gprec.ac.in",
            "contact_number": "+91 9494555001",
            "website_url": "https://www.gprec.ac.in/national-innovation-policy/",
            "linkedin_url": NaN,
            "facilities_list": [
                "Premises at subsidized cost",
                "Laboratories",
                "Research facilities",
                "IT services",
                "Training and Mentoring Services, etc",
                "Licensing of IPR from institute to start up"
            ],
            "sector_focus_areas_list": [
                NaN
            ],
            "incubation_center_address": "G Pulla Reddy Nagar, Nandyal Road, Kurnool - 518007",
            "logo_url": NaN
        },
        {
            "incubator_id": "11",
            "incubator_name": "Grameena Incubation Centre",
            "organization_university_college_name": "Grameena Incubation Centre",
            "govt_private": "Private",
            "bhaskar_id": "OI-0423-8282TL",
            "district_name": "Anakapalli",
            "registration_type": "Section 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Shri. B. Sriram murthy, CEO, Mr. P.V.S.S. Vijay, Mentor",
            "email_id": "sriram@bctindia.org, vijay@grameenaincubation.com",
            "contact_number": "+91 9441530994, +91 9248361630",
            "website_url": "https://grameenaincubation.com/",
            "linkedin_url": "https://www.linkedin.com/company/grameena-incubation-center/",
            "facilities_list": [
                "Mentoring and Training,",
                "Financial Assistance,",
                "Access to Networks,",
                "Entrepreneurship Fellowships"
            ],
            "sector_focus_areas_list": [
                "Rural Nano entrepreneurship",
                "go-to centre for business",
                "corporates seeking world class capacity building",
                "advisory in business responsibility",
                "sustainability.",
                ""
            ],
            "incubation_center_address": "Grameena Incubation Centre, Eco Rejuvenation Centre, Haripuram, Anakapalli Dist, Andhra Pradesh 531011",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/grameena.png"
        },
        {
            "incubator_id": "12",
            "incubator_name": "Hatchlab Research Centre",
            "organization_university_college_name": "SRM University",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Guntur",
            "registration_type": "Section - 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Dr. Udayan Bakshi, Associate Director, Dr. Krovi Raja Sekhar, Chief Executive Officer",
            "email_id": "udayan.b@srmap.edu.in",
            "contact_number": "+91 9030006060",
            "website_url": "https://entrepreneurship.srmap.edu.in/hatchlab",
            "linkedin_url": "https://www.linkedin.com/company/hatchlab-research-centre/?originalSubdomain=in",
            "facilities_list": [
                "Incubation Space,",
                "Seed Funding,",
                "Industry Mentorship",
                "Investment Opportunities",
                "Student-Run Labs",
                "etc."
            ],
            "sector_focus_areas_list": [
                "Machine Learning",
                "3d printing",
                "Electronics",
                "Embedded",
                "Manufacturing",
                "Semiconductor",
                "Assistance Technology",
                "Biotechnology",
                "Health & Wellness",
                "Healthcare IT",
                "Healthcare Services",
                "Healthcare Technology",
                "Medical Devices Biomedical",
                "Pharmaceutical",
                "Robotics Application",
                "Robotics Technology",
                ""
            ],
            "incubation_center_address": "Mangalagiri, Neerukonda Tadikonda Rd, Mangalagiri Mandal, Andhra Pradesh 522502",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/hatchlab.png"
        },
        {
            "incubator_id": "13",
            "incubator_name": "I Hub - SRKR Startups incubation Center & MSME Business Incubation Center",
            "organization_university_college_name": "SRKR Engineering college",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "West Godavari",
            "registration_type": "Section 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Dr. N. Gopala Krishna Murthy, Incharge",
            "email_id": "gopinukala@gmail.com, gopinukala@srkrec.ac.in",
            "contact_number": "+91 9848427327, +91 9154537237",
            "website_url": "https://srkrec.edu.in/tech_ihub.php",
            "linkedin_url": NaN,
            "facilities_list": [
                "Co-working Spaces,",
                "Workstations,",
                "Pre-Incubation Unit,",
                "Student Clubs for Innovation,",
                "Maker Space/Tinkering Lab,"
            ],
            "sector_focus_areas_list": [
                "Information Technology (IT)",
                "Engineering and Technology",
                "Biotechnology",
                "Sustainability and Renewable Energy",
                "Agri-Tech"
            ],
            "incubation_center_address": "SRKR Marg, China Amiram, Bhimavaram, A.P, India - 534204",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/ihubsrkr.png"
        },
        {
            "incubator_id": "14",
            "incubator_name": "KITS-Innovation and Start up Center",
            "organization_university_college_name": "KKR & KSR Institute of Technology And Sciences",
            "govt_private": "Private",
            "bhaskar_id": "OI-1224-9104XO",
            "district_name": "Guntur",
            "registration_type": "Section 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Dr. Chittineni Aruna, Incharge",
            "email_id": "principaljr@gmail.com, principal@kitsguntur.ac.in, chittineni.aruna@gmail.com, kitsgnt@gmail.com",
            "contact_number": "+91 9866485761",
            "website_url": "https://kitsguntur.ac.in/kitcontent.php?page_id=168",
            "linkedin_url": NaN,
            "facilities_list": [
                "Incubation Space,",
                "Seed Funding,",
                "Industry Mentorship",
                "Investment Opportunities",
                "Student-Run Labs",
                "etc."
            ],
            "sector_focus_areas_list": [
                "Technology Startups",
                "Engineering Innovations",
                "Renewable Energy",
                "Healthcare and Biomedical Innovations",
                "Agri-Tech"
            ],
            "incubation_center_address": "KKR & KSR Institute of Technology & Sciences(KITS), Vinjanampadu, Vatticherukuru Mandal, Guntur-522017",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/kits.png"
        },
        {
            "incubator_id": "15",
            "incubator_name": "KL - Centre for Innovation Incubation & Entrepreneurship - CIIE ",
            "organization_university_college_name": "KL University",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Guntur",
            "registration_type": "Section - 8",
            "estd": "2020",
            "name_of_the_director_ceo_spoc": "Dr. K.Raghava Rao, Center Incharge",
            "email_id": "krraocse@gmail.com, director_iie@kluniversity.in",
            "contact_number": "+91 9553579000",
            "website_url": "https://www.kluniversity.in/edcnew/",
            "linkedin_url": "https://www.linkedin.com/in/kl-ciie-9200581b3/?originalSubdomain=in",
            "facilities_list": [
                "",
                "Co-working space for startups",
                "Access to seed funding",
                "Mentorship and training programs",
                "Networking opportunities",
                "Business development support",
                "Marketing and branding assistance",
                "Legal and IP advisory",
                "Investor connect events",
                ""
            ],
            "sector_focus_areas_list": [
                "ICT (Information and Communication Technology)",
                "Renewable energy",
                "Market-oriented technologies",
                ""
            ],
            "incubation_center_address": "KL Deemed to be University, Green Fields, Vaddeswaram, Guntur, Andhra Pradesh - 522502",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/klciie.png"
        },
        {
            "incubator_id": "16",
            "incubator_name": "KL Technology Incubators Foundation - TIF - TBI ",
            "organization_university_college_name": "KL University",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Guntur",
            "registration_type": "Section - 8",
            "estd": "2020",
            "name_of_the_director_ceo_spoc": "Mr. Babu Harikrishna, CEO",
            "email_id": "ceo.tbi@kluniversity.in",
            "contact_number": "+91 9000611955, +91 971752345",
            "website_url": "https://www.kltif.in/",
            "linkedin_url": "https://www.linkedin.com/company/kltif-tbi/",
            "facilities_list": [
                "Co-working Space",
                "Biotechnology Lab",
                "IOT and ADSS Labs",
                "Mentoring and Capacity Building",
                "etc.."
            ],
            "sector_focus_areas_list": [
                "Social Innovations",
                "Tech Innovations",
                "Student Entrepreneurs",
                "Women Entrepreneurs"
            ],
            "incubation_center_address": "L Block, 5th & 6th Floor, K L Deemed to be University, Green Fields, Vaddeswaram, Guntur, Andhra Pradesh 522302.",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/kltif.png"
        },
        {
            "incubator_id": "17",
            "incubator_name": "KSRM Innovation, Incubation Cell",
            "organization_university_college_name": "KSRM College of Engineering ",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "YSR Kadapa",
            "registration_type": "Section 8 applied",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. M. Venkatanarayana",
            "email_id": "principal@ksrmce.ac.in",
            "contact_number": "+91 9440425221",
            "website_url": "https://www.ksrmce.ac.in/cri.php",
            "linkedin_url": NaN,
            "facilities_list": [
                "Mentoring Services.",
                "Supply Chain Management.",
                "Customer Relations Developmen.",
                "Fund raising & Access to Investors."
            ],
            "sector_focus_areas_list": [
                "Agriculture and Agribusiness",
                "Technology and Engineering",
                "Rural Entrepreneurship",
                "Sustainable Development"
            ],
            "incubation_center_address": "Yerramasupalli, Chinthakommadinne, Kadapa, Andhra Pradesh 516003",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/ksrm.png"
        },
        {
            "incubator_id": "18",
            "incubator_name": "MITS Incubation Center",
            "organization_university_college_name": "Madanapalle Institute of Technology & Science",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Annamayya",
            "registration_type": "NA",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. S. Gopalakrishnan",
            "email_id": "innovationcell@mits.ac.in",
            "contact_number": "+91 9003253250",
            "website_url": "https://mits.ac.in/innovation-center",
            "linkedin_url": "https://www.linkedin.com/school/madanapalle-institute-of-technology-&-science/?originalSubdomain=in",
            "facilities_list": [
                "Mentorship",
                "Networking",
                "Infrastructure",
                "Workshops"
            ],
            "sector_focus_areas_list": [
                "Technology Startups",
                "Engineering Innovations",
                "Renewable Energy",
                "Healthcare and Biomedical Innovations",
                "Agri-Tech"
            ],
            "incubation_center_address": "Madanapalle Institute of Technology & Science, Post Box No: 14, Kadiri Road, Angallu Madanapalle-517325, Andhra Pradesh, India",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/mits.png"
        },
        {
            "incubator_id": "19",
            "incubator_name": "PVP Siddhartha MSME Incubation Center",
            "organization_university_college_name": "PVP Siddharatha Institute Technology",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "NTR",
            "registration_type": "MSME",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Dr. Jagadesh, Convener, Associate professer ",
            "email_id": "principal@pvpsiddhartha.ac.in",
            "contact_number": "+91 9845373393",
            "website_url": "https://www.pvpsiddhartha.ac.in/",
            "linkedin_url": "https://www.linkedin.com/company/pvpsit/",
            "facilities_list": [
                "Co-working Spaces for startups",
                "Prototyping and Product Development Labs",
                "Mentorship and Advisory Support"
            ],
            "sector_focus_areas_list": [
                "Agri-Tech,",
                "Clean Energy,",
                "IT & Software Solutions"
            ],
            "incubation_center_address": "Prasad V Potluri Siddhartha Institute Of Technology, Kanuru,Vijayawada-520007, Andhra Pradesh, India",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/pvp.png"
        },
        {
            "incubator_id": "20",
            "incubator_name": "Sasi Incubation Center",
            "organization_university_college_name": "Sasi Institute of Technology and Engineering",
            "govt_private": "Private",
            "bhaskar_id": "OI-0624-6266S",
            "district_name": "West Godavari",
            "registration_type": "Self Funded",
            "estd": "2024",
            "name_of_the_director_ceo_spoc": "M S Pavan Kumar Raju",
            "email_id": "head.iie@sasi.ac.in",
            "contact_number": "+91 7777881333",
            "website_url": "www.sasi.ac.in",
            "linkedin_url": "https://www.linkedin.com/school/sasi-institute-of-technology-&-engineering/",
            "facilities_list": [
                "3500 sq ft Individual cubicles and co working space",
                "24/7 access high speed internet",
                "MAARG mentorship"
            ],
            "sector_focus_areas_list": [
                "Emerging Technologies",
                "Drones",
                "AR/VR",
                "AI & ML",
                "Transport",
                "Green Technology"
            ],
            "incubation_center_address": "Sasi College Road, Kadakatla, Tadepalligudem, West Godavari, Andhra Pradesh, 534101",
            "logo_url": NaN
        },
        {
            "incubator_id": "21",
            "incubator_name": "RVR & JC CE STP Foundation",
            "organization_university_college_name": "RVR & JC College of Engineering (A)",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Guntur",
            "registration_type": "Section 8",
            "estd": "2023",
            "name_of_the_director_ceo_spoc": "Sri R. Gopala Krishna (Director)",
            "email_id": "rjstpf@rvrjc.ac.in",
            "contact_number": "+91 9849403801",
            "website_url": "https://rvrjcce.ac.in/rjenest/index.html",
            "linkedin_url": NaN,
            "facilities_list": [
                "Maker Space",
                "Office Cubicles",
                "Conference Room",
                "Data Centre and Dicussion Room",
                "Board Meeting Room",
                "Equipment and Laboratory Space"
            ],
            "sector_focus_areas_list": [
                "BioMedical,",
                "AgriTech and IoT"
            ],
            "incubation_center_address": "Chowdavaram, Guntur, Andhra Pradesh",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/rvrjc.png"
        },

        {
            "incubator_id": "22",
            "incubator_name": "Siddharth Technology & Business Incubation Centre",
            "organization_university_college_name": "Siddharth Institute of Engineering & Technology",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Tirupati",
            "registration_type": "Section 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. K Ashok Raju, CEO",
            "email_id": "sietk_ptr@yahoo.com, ashok_kondduru@yahoo.com",
            "contact_number": "+91 8297132999, +91 9908287979",
            "website_url": "www.siic.sietk.org",
            "linkedin_url": NaN,
            "facilities_list": [
                "Incubation Spaces",
                "Mentorship",
                "Equipment and Infrastructure",
                "Networking Opportunities",
                "Access to Government Schemes",
                "Training and Workshops"
            ],
            "sector_focus_areas_list": [
                "Hardware Manufacturing (IoT),",
                "Apps Development,",
                "Software,",
                "Information & Communication Technology",
                "Agriculture & Allied sectors",
                ""
            ],
            "incubation_center_address": "Society For Siddharth International Incubation Centred.No 103 B-Block,Siddharth Institute Of Engineering & Technology,Siddharth Nagar,Narayanavanam Road,Puttur",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/siddharth.png"
        },
        {
            "incubator_id": "23",
            "incubator_name": "SVCET - Technology Business Incubator",
            "organization_university_college_name": "Sri Venkateswara College of Enginnering and technology ",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Chittoor",
            "registration_type": "Section 8",
            "estd": "2018",
            "name_of_the_director_ceo_spoc": "Dr. Raja Reddy, CEO",
            "email_id": "hodmba@svcetedu.org",
            "contact_number": "+91 7729999158",
            "website_url": "https://svcet.in/",
            "linkedin_url": NaN,
            "facilities_list": [
                "Incubation Space and Infrastructure",
                "Mentorship Programs",
                "Training and Workshops",
                "Networking Opportunities",
                "Funding Support"
            ],
            "sector_focus_areas_list": [
                "Information Technology (IT)",
                "Engineering and Technology",
                "Biotechnology",
                "Sustainability and Renewable Energy",
                "Agri-Tech"
            ],
            "incubation_center_address": "Sri Venkateswara College of Engineering & Technology (SVCET), NH - 5, Chittoor - Tirupati Highway, RVS Nagar, Tirupati, Andhra Pradesh, India - 517127",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/svcet.png"
        },
        {
            "incubator_id": "24",
            "incubator_name": "V R Siddhartha TBI Foundation ",
            "organization_university_college_name": "VR Siddhartha Engineering College",
            "govt_private": "Private",
            "bhaskar_id": "IN-1124-9098HH",
            "district_name": "NTR",
            "registration_type": "Section - 8",
            "estd": "2022",
            "name_of_the_director_ceo_spoc": "Dr. Gumadi Srinivasarao, Venkata S. Srikesh",
            "email_id": "hodce@vrsiddhartha.ac.in",
            "contact_number": "+91 9490958228, +91 9494371738",
            "website_url": "https://www.vrsiddhartha.ac.in/",
            "linkedin_url": NaN,
            "facilities_list": [
                "Incubation Spaces",
                "Mentorship",
                "Equipment and Infrastructure",
                "Networking Opportunities",
                "Access to Government Schemes",
                "Training and Workshops"
            ],
            "sector_focus_areas_list": [
                "Technology Startups",
                "Engineering Innovations",
                "Renewable Energy",
                "Healthcare and Biomedical Innovations",
                "Agri-Tech"
            ],
            "incubation_center_address": "Velagapudi Ramakrishna Siddhartha Engineering College (Deemed to be University) Kanuru, Vijayawada, Andhra Pradesh 520007",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/vrs.png"
        },
        {
            "incubator_id": "25",
            "incubator_name": "VCR Park (Vyas Cancer Research Pvt. Ltd.)",
            "organization_university_college_name": "Translational Oncology Council, Vyas Cancer Research Pvt. Ltd.",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Visakhapatnam",
            "registration_type": "NA",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. Mandar Kulkarni, CEO",
            "email_id": "info@vcrpark.com",
            "contact_number": "+91 9347131412",
            "website_url": "https://vcrpark.com/",
            "linkedin_url": "https://www.linkedin.com/company/vcrpark/",
            "facilities_list": [
                "State-of-the-Art Lab Facilities",
                "Mentorship and Training",
                "Networking and Collaboration Opportunities",
                "Funding and Grants Assistance",
                "IP and Regulatory Support"
            ],
            "sector_focus_areas_list": [
                "Translational Oncology",
                "Molecular Pathology & Precision Oncology",
                "Clinical Trials",
                "Bioinformatics & Data Science",
                "Artificial Intelligence & Machine Learning",
                "Cancer Diagnostics",
                "Cancer Care Product Development"
            ],
            "incubation_center_address": "Plot No. 9 & 12, Survey No. 119, Block No. 4, Krishna Nagar, Maharanipeta, Visakhapatnam, Andhra Pradesh - 530002",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/vcrpark.png"
        },
        {
            "incubator_id": "26",
            "incubator_name": "Venture Development Center ",
            "organization_university_college_name": "Gitam Instittute of Technology and Management",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Visakhapatnam",
            "registration_type": "Section - 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Vikas Srivastav, Head",
            "email_id": "vikasvast@gitam.edu",
            "contact_number": "+91 7989253780",
            "website_url": "https://vdc.gitam.edu/home",
            "linkedin_url": "https://www.linkedin.com/company/entrepreneur-s-club-e-club/",
            "facilities_list": [
                "One-to-One Coaching",
                "Entrepreneurship Courses",
                "Makerspace",
                "Gap/Seed Funding",
                "Venture Mentor Network",
                "Workshops and Demo Days",
                "Community Connect",
                "Futuristic Infrastructure"
            ],
            "sector_focus_areas_list": [
                "Technology and Innovation",
                "Sustainable Development",
                "Healthcare and Biotechnology",
                "Agritech",
                "Social Entrepreneurship",
                "EdTech",
                "FinTech",
                "Social Entrepreneurship",
                "Smart Cities"
            ],
            "incubation_center_address": "Ground Floor, GIM PG-Block, GITAM University, Gandhi Nagar, Visakhapatnam, Andhra Pradesh- 530045",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/venture.png"
        },
        {
            "incubator_id": "27",
            "incubator_name": "V-Hub Innovation Centre ",
            "organization_university_college_name": "Mohan Babu University",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Tirupati",
            "registration_type": "Section - 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Mr. Yudhish Jain, Head, Dr BVV. Naidu",
            "email_id": "yudhish@mbu.asia, bvvnaidu@v-hub.co",
            "contact_number": "+91 9278667633",
            "website_url": "https://www.v-hub.asia/",
            "linkedin_url": "https://www.linkedin.com/company/vhub-asia/posts/?feedView=all",
            "facilities_list": [
                "Incubation Spaces",
                "Mentorship",
                "Equipment and Infrastructure",
                "Networking Opportunities",
                "Access to Government Schemes",
                "Training and Workshops"
            ],
            "sector_focus_areas_list": [
                "Information Technology (IT)",
                "Engineering and Technology",
                "Biotechnology",
                "Sustainability and Renewable Energy",
                "Agri-Tech"
            ],
            "incubation_center_address": "Sree Sainath Nagar, Tirupati, Andhra Pradesh - 517102, India",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/vhub.png"
        },
        {
            "incubator_id": "28",
            "incubator_name": "Vignan Technology Business Incubator ",
            "organization_university_college_name": "Vignan's Foundation for Science Technology and Research (Deemed University)",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Guntur",
            "registration_type": "Section 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Dr. S. Sandeep , CEO ",
            "email_id": "vfstrtbi@vignan.ac.in",
            "contact_number": "+91 9515928938",
            "website_url": "https://vignan.ac.in/vignantbi/index.php",
            "linkedin_url": "https://www.linkedin.com/company/vignantbi/",
            "facilities_list": [
                "Fund Raising Support",
                "Market Connect Support",
                "Investor Connect",
                "Mentorship Program",
                "5.Lab and Testing Infrastructure",
                "Entrepreneurship Training",
                "Internship and Recruitment Connect",
                "Legal , Compliance and IP"
            ],
            "sector_focus_areas_list": [
                "Agriculture and Allied Fields",
                "Biotechnology",
                "New and Renewable Energy",
                "Solid-Liquid Waste Management",
                "etc."
            ],
            "incubation_center_address": "VFSTR TBI Council, 2nd Floor Nagarjuna Bhavan, Vignan's Foundation for Science Technology and Research (Deemed University), Vadlamudi, Guntur",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/vignan.png"
        },
        {
            "incubator_id": "29",
            "incubator_name": "Vinuthna Incubation Foundation",
            "organization_university_college_name": "PACE Institute of Technology and Sciences",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Prakasam",
            "registration_type": "Section - 8",
            "estd": "2024",
            "name_of_the_director_ceo_spoc": "Dr M Venkateswararao",
            "email_id": "dr_mvr@pace.ac.in",
            "contact_number": "+91 9441241642",
            "website_url": NaN,
            "linkedin_url": NaN,
            "facilities_list": [
                "3D Printer",
                "Common Office Utility",
                "Small and Medium sized company startups also encouraged",
                "Shared Space",
                "Co-working Space",
                "Meeting Room",
                "Furniture",
                "Video conferencing",
                "Broadband Internet Facility",
                "Seminars, Conferences, Meets",
                "Invited/ Motivational talks",
                "PCB fabrication",
                "SMD Wave soldering facility"
            ],
            "sector_focus_areas_list": [
                "Technology",
                "AI",
                "IOT"
            ],
            "incubation_center_address": "PACE Institute of Technology & Sciences, Near Valluramma Temple, Ongole - 523272",
            "logo_url": NaN
        },
        {
            "incubator_id": "30",
            "incubator_name": "Vishnu Foundation Technology Business Incubator",
            "organization_university_college_name": "Shri Vishnu Engineering College For Women",
            "govt_private": "Private",
            "bhaskar_id": "OI-1024-9081RU",
            "district_name": "West Godavari",
            "registration_type": "Section - 8",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. MK Kaushik, CEO, Mr. Ashwin, TBI Manager",
            "email_id": "ceo@vishva.co, incubationmanager@vishva.co",
            "contact_number": "+91 9542117888, +91 9944343419",
            "website_url": "https://www.vishva.co/",
            "linkedin_url": "https://www.linkedin.com/company/vishnu-foundation-tbi/",
            "facilities_list": [
                "Four-Phase Support",
                "Mentorship and Networking",
                "Funding Opportunities",
                "Virtual Incubation",
                "Collaborative Environment"
            ],
            "sector_focus_areas_list": [
                "Low-Cost Medical Devices",
                "Assistive Technology",
                "Social Enterprise",
                "Agriculture Technology",
                "Renewable Energy",
                "Environmental Sustainability",
                "Educational Technology",
                "BioTechnology"
            ],
            "incubation_center_address": "Shrivishnu Engineering College for Women, Vishnupur, Bhimavaram, West Godavari, Andhra Pradesh - 534202",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/vishnu.png"
        },
        {
            "incubator_id": "31",
            "incubator_name": "Visvodaya Living Labs Foundation",
            "organization_university_college_name": "PBR Visvodaya Institute of Technology and Science",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "SPSR Nellore",
            "registration_type": "Section - 8",
            "estd": "2022",
            "name_of_the_director_ceo_spoc": "Dodla Vidyadhar Kumar Reddy",
            "email_id": "vidyadhar.vits@gmail.com",
            "contact_number": "+91 9440276235",
            "website_url": "www.pbrvits.ac.in",
            "linkedin_url": NaN,
            "facilities_list": [
                "In-House Incubator",
                "R7D Centre",
                "Three CoE"
            ],
            "sector_focus_areas_list": [
                "AI",
                "IOT",
                "Data Science",
                "Mechatronics",
                "Drone Tech"
            ],
            "incubation_center_address": "PBRVITS Main Campus, Kavali, SPSR Nellore Dist, Andhra PRadesh, Pin-524201",
            "logo_url": NaN
        },
        {
            "incubator_id": "32",
            "incubator_name": "Vizag Incubation Cell",
            "organization_university_college_name": "Visakha Institute of Engineering & Technology",
            "govt_private": "Private",
            "bhaskar_id": "OI-1124-9101VU",
            "district_name": "Visakhapatnam",
            "registration_type": "Section 8",
            "estd": "2021",
            "name_of_the_director_ceo_spoc": "Prof. K. Chandana, Director",
            "email_id": "principal@vietvsp.com, chandanakorla8@gmail.com",
            "contact_number": "+91 7981431817",
            "website_url": "https://viet.edu.in/index.php",
            "linkedin_url": NaN,
            "facilities_list": [
                "Incubation Spaces",
                "Mentorship",
                "Equipment and Infrastructure",
                "Networking Opportunities"
            ],
            "sector_focus_areas_list": [
                "Agri-Tech,",
                "Clean Energy,",
                "IT & Software Solutions"
            ],
            "incubation_center_address": "88th Division, Narava, GVMC, Visakhapatnam, Andhra Pradesh 530027",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/vizagincubation.png"
        },
        {
            "incubator_id": "33",
            "incubator_name": "VTEC - VITAP Technology Entrepreneurship Centre",
            "organization_university_college_name": "VIT AP University ",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Guntur",
            "registration_type": "Section 8",
            "estd": "2018",
            "name_of_the_director_ceo_spoc": "Dr. Ameet Chavan Director (IIEC), Director ",
            "email_id": "director.iiec@vitap.ac.in",
            "contact_number": "+91 9390638524",
            "website_url": "https://vtbif.org/",
            "linkedin_url": "https://www.linkedin.com/school/vitap-university/",
            "facilities_list": [
                "Incubation Space and Infrastructure",
                "Mentorship Programs",
                "Training and Workshops",
                "Networking Opportunities",
                "Funding Support",
                "etc.."
            ],
            "sector_focus_areas_list": [
                "Information Technology and Digital Solutions",
                "Agriculture and Agri-Tech",
                "Renewable Energy and Sustainability",
                "Healthcare and Wellness",
                "Food Processing",
                "Manufacturing and Engineering",
                "E-Commerce and Retail",
                "Education Technology",
                ""
            ],
            "incubation_center_address": "VIT-AP University, Amaravathi, Andhra Pradesh - 522503",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/vitap.png"
        },
        {
            "incubator_id": "34",
            "incubator_name": "VVIT Institute Innovation Cell",
            "organization_university_college_name": "Vasireddy Venkatadri institute of Technology",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "Guntur",
            "registration_type": "NA",
            "estd": "2019",
            "name_of_the_director_ceo_spoc": "Dr. Y. Mallikarjuna Reddy",
            "email_id": "principaloffice@vvit.net",
            "contact_number": "+91 9949359336",
            "website_url": "https://www.vvitguntur.com/facilities/edc/mhrd-iic",
            "linkedin_url": NaN,
            "facilities_list": [
                "Co-working Spaces for startups",
                "Prototyping and Product Development Labs",
                "Mentorship and Advisory Support"
            ],
            "sector_focus_areas_list": [
                "Information Technology (IT)",
                "Engineering and Technology",
                "Biotechnology",
                "Sustainability and Renewable Energy",
                "Agri-Tech"
            ],
            "incubation_center_address": "Vasireddy Venkatadri Institute of Technology (VVIT), Nambur Village, Guntur, Andhra Pradesh - 522503",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/vvit.png"
        },
        {
            "incubator_id": "35",
            "incubator_name": "Yogi Veman University Incubation, Innovation and Entrepreneurship Cell",
            "organization_university_college_name": "Yogi Vemana university ",
            "govt_private": "Private",
            "bhaskar_id": "NA",
            "district_name": "YSR Kadapa",
            "registration_type": "Section - 8 applied",
            "estd": "2018",
            "name_of_the_director_ceo_spoc": "Dr. A. Chandra Sekhar, Director",
            "email_id": "chandrasekhar9@yvu.edu.in",
            "contact_number": "+91 9849080331",
            "website_url": "https://yvu.edu.in/home/iiec",
            "linkedin_url": NaN,
            "facilities_list": [
                "Incubation Spaces",
                "Mentorship",
                "Equipment and Infrastructure",
                "Networking Opportunities",
                "Access to Government Schemes",
                "Training and Workshops"
            ],
            "sector_focus_areas_list": [
                "Information Technology (IT)",
                "Engineering and Technology",
                "Biotechnology",
                "Sustainability and Renewable Energy",
                "Agri-Tech"
            ],
            "incubation_center_address": "IT & Networking Cell, Yogi Vemana University, Kadapa - 516005, Andhra Pradesh India, Zip/Pin Code: 516005",
            "logo_url": "assets/images/enablers/incubatorsaccelarators/2024/yogivemana.png"
        }
    ]
      };


// Sort and set counts
this.totalList.government.sort((a: any, b: any) => a.incubator_name.localeCompare(b.incubator_name));
this.totalList.private.sort((a: any, b: any) => a.incubator_name.localeCompare(b.incubator_name));

// Set government and private counts
this.governmentCount = this.totalList.government.length;
this.privateCount = this.totalList.private.length;

// Initially display all incubators in filteredIncubators
this.filteredIncubators = [...this.totalList.government, ...this.totalList.private];

  }
  getDynamicClass(incubator: any): string {
    const typePrefix = incubator?.govt_private?.toLowerCase() === 'govt' ? 'government' : 'private';
    return `${typePrefix}-incubator-${incubator?.incubator_id}`;
  }
  
  showIncubatorDetails(incubator: any): void {
    this.selectedIncubator = incubator;
    console.log(this.selectedIncubator?.registration_type, "selected incubator");
    
  }
 // Method to filter incubators based on search term
 filterIncubators(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredIncubators = [...this.totalList.government, ...this.totalList.private].filter(incubator => {
      return Object.values(incubator).some(field => {
        if (Array.isArray(field)) {
          return field.some(value => value.toLowerCase().includes(term));
        } else if (typeof field === 'string') {
          return field.toLowerCase().includes(term);
        }
        return false;
      });
    });
  }
  
}
