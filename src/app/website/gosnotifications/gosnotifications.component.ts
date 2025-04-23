import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gosnotifications',
  templateUrl: './gosnotifications.component.html',
  styleUrls: ['./gosnotifications.component.css']
})
export class GosnotificationsComponent implements OnInit {
 // Complete JSON data for table
 tableData: any[] = [

  {
    id: 26,
    description:
    "RTIH Corrigendum- The last date for submission of proposals from potential promoters extended till 25.04.2025",
    link: 'assets/images/resources/gosnotifications/RTIH-Corr22052025.pdf',
  },

  {
    id: 25,
    description:
    "ITE&C Department – Andhra Pradesh - Guidelines for operationalizing Ratan Tata Innovation Hub and spokes-Reg",
    link: 'assets/images/resources/gosnotifications/2025ITC_36265_MS6_E.pdf',
  },
  {
    id: 1,
    description:
      'IT,E&C Dept – Setting up of (3) Societies – Innovation Society – Sanction and release of Rs.23.50 crores to Chief Executive Officer, Innovation Society towards activities planned for the year 2015-16 – Administrative Orders – Issued – Reg.',
    link: 'assets/images/resources/gosnotifications/2015ITC_RT165.PDF',
  },
  {
    id: 2,
    description:
      'Secretariat - Re-organization of Secretariat Departments – Transfer of the Administrative Dept., of existing Andhra Pradesh Innovation Society (APIS) from Information Technology, Electronics & Communication Department to General Administration (GPM&AR) Department with objectives and structure of the Society – Orders – Issued.',
    link: 'assets/images/resources/gosnotifications/2016GAD_MS226.PDF',
  },
  {
    id: 3,
    description:
      'ITE&C Department - To build an ecosystem of innovations and start ups in the state of Andhra Pradesh - Formation of an Innovation Society in All schools / intermediate / Degree / Technical/Agriculture, Pharma and other Professional degree Colleges in the Andhra Pradesh State for inculcating innovations among students - Orders – Issued.',
    link: 'assets/images/resources/gosnotifications/2016ITC_MS27.PDF',
  },
  {
    id: 4,
    description:
      'ITE&C Department – Sanction and release of Rs. 17,90,72,000/- to the Chief Executive Officer, Innovation Society towards Knowledge & Incubation Centers in (177) Residential Schools under APSWREIS Society under SCSP component of ITE&C department – Issued.',
    link: 'assets/images/resources/gosnotifications/2016ITC_RT25.PDF',
  },
  {
    id: 5,
    description:
      'ITE&C Department – Sanction and release of Rs. 2,40,53,000/- to the Chief Executive Officer, Innovation Society for providing computer labs and virtual class rooms in TW residential Institutes and KGBVs on pilot basis under TSP component of ITE&C department – Issued.',
    link: 'assets/images/resources/gosnotifications/2016ITC_RT26.PDF',
  },
  {
    id: 6,
    description:
      'ITE&C Department - Nomination of Sri J.A.Chowdary, Advisor (IT) as a Chairman for Andhra Pradesh IT & Electronics Agency (APIT&EA) and Andhra Pradesh Innovation Society (APIS) – Orders - Issued.',
    link: 'assets/images/resources/gosnotifications/2016ITC_RT38.PDF',
  },
  {
    id: 7,
    description:
      'ITE&C Dept – Setting up of (3) Societies – Innovation Society – Sanction and Release of Rs.33,18,45000/- in rupees to CHIEF EXECUTIVE OFFICER, Innovation Society towards activities planned for the year 2015-16 – Administrative Orders – Issued – Reg.',
    link: 'assets/images/resources/gosnotifications/2016ITC_RT39.PDF',
  },
  {
    id: 8,
    description:
      'IT,E&C Dept – Setting up of (3) Societies – Innovation Society – Sanction and release of Rs.36,50,00,000/-(Rupees Thirty Six Crores Fifty Lakhs only) to CHIEF EXECUTIVE OFFICER, Andhra Pradesh Innovation Society towards activities planned for the year 2017-18- Amendment Orders–Issued.',
    link: 'assets/images/resources/gosnotifications/2018ITC_RT60.PDF',
  },
  {
    id: 9,
    description:
      'Foreign visit - Visit of Sri Sai Winny Patro, Chief Executive Officer, AP Innovation Society, AP to visit Israel to visit SOSA TLV Ltd for due-diligence for APIS landing pads in Israel scheduled from 17.12.2018 to 18.12.2018 (excluding journey period) – Post-facto permission accorded – Orders – Issued.',
    link: 'assets/images/resources/gosnotifications/2019GAD_RT64.PDF',
  },
  {
    id: 10,
    description:
      'IT,E&C Dept – Setting up of (3) Societies – AP Innovation Society – Sanction and release of Rs.23,00,00,000/- (Rupees Twenty Three Crores only) towards 3rd quarter budget from the B.E 2018-19 to the Chief Executive Officer, AP Innovation Society towards activities planned for the year 2018-19 – Administrative Orders – Issued.',
    link: 'assets/images/resources/gosnotifications/2019ITC_RT19.PDF',
  },
  {
    id: 11,
    description:
      'IT,E&C Dept – Setting up of (3) Societies – AP Innovation Society - Sanction and release of Rs.11,00,00,000/- (Rupees Eleven Crores) towards Other Grants-In-Aid from the B.E 2019-20 to the Chief Executive Officer, AP Innovation Society towards Assistance to start-ups for 2nd quarter for the F.Y.2019-20 - Administrative Orders –Issued.',
    link: 'assets/images/resources/gosnotifications/2019ITC_RT96.PDF',
  },
  {
    id: 12,
    description:
      'IT,E&C Department –A.P. Innovation Society (APIS), Tirupati - Sanction and release of Rs.73,50,000/- (Rupees Seventy Three Lakhs Fifty Thousand only) towards payment of Grant-in-Aid Administrative Expenses by the Chief Executive Officer, A.P. Innovation Society (APIS), Tirupati under Vote-on-Account budget for the F.Y. 2021-22 – Administrative - Orders – Issued.',
    link: 'assets/images/resources/gosnotifications/2021ITC_RT32.PDF',
  },
  {
    id: 13,
    description:
      'Secretariat - Re-organization of Secretariat Departments – Re-transfer of the subject matter of Administrative control of Andhra Pradesh Innovation Society (APIS) from General Administration (GPM&AR) Department to Information Technology, Electronics & Communication Department – Orders – Issued.',
    link: 'assets/images/resources/gosnotifications/24052017GAD_MS66.PDF',
  },
  {
    id: 14,
    description:
      "Certify that 'ANDHRA PRADESH INNOVATION SOCIETY', 2Nd Floor, Incubation Towers! APIIC IT SEZ/ Kurakälv& Renigunta/ Chittoorl Andhra Pradesh/ India on this day registered under the Andhra Pradesh Societies Registration Act, 2001.",
    link: 'assets/images/resources/gosnotifications/APIS BY LAWS.PDF',
  },
  {
    id: 15,
    description:
    "IT,E&C Department - A.P. Innovation Society (APIS) - Release of Rs. 2,79,25,000/- (Rupees Two Crores Seventy Nine Lakhs and Twenty Five Thousand Only) as additional funds in relaxation of Treasury Control and quarterly regulation orders to clear the pending bills relating to modifications and repairs to AP Innovation Society Centers at Madurawada, Visakhapatnam and Kakinada to avoid the legal complications - Administrative Sanction Orders - Issued",
    link: 'assets/images/resources/gosnotifications/2023ITC_RT10.pdf',
  },
  {
    id: 16,
    description:
    "IT,E&C Department - A.P. Innovation Society (APIS) - Release of Rs.48,01 ,500/- (Rupees Forty Eight Lakhs One Thousand and Five Hundred Only) for payment of Grants-in-Aid towards salaries by the Chief Executive Officer, A.P. Innovation Society (APIS), Tadepalli, Guntur towards 1st quarter budget for the period 01.04.2023 to 30.06.2023 for the F.Y. 2023- 24 - Administrative Sanction Orders - Issued.",
    link: 'assets/images/resources/gosnotifications/2023ITC_RT40.pdf',
  },
  {
    id: 17,
    description:
    "IT,E&C Department - A.P. Innovation Society (APIS) - Release of Rs.1,25,00,000/- ((Rupees One Crore and Twenty Five Lakhs only) towards payment of Other Grants-in-Aid for implementation of schemes by the Chief Executive Officer, A.P. Innovation Society (APIS), Tadepalli, Guntur for 1st quarter budget for the period from 01-04-2023 to 30-06-2023 for the F.Y. 2023-24 - Administrative Sanction Orders - Issued.",
    link: 'assets/images/resources/gosnotifications/2023ITC_RT41.pdf',
  },
  {
    id: 18,
    description:
    "IT,E&C Department - A.P. Innovation Society (APIS) - Release of Rs.48,0l ,500/- (Rupees Forty Eight Lakhs One Thousand and Five Hundred Only) for payment of Grants-in-Aid towards salaries by the Chief Executive Officer, A.P. Innovation Society (APIS), Tadepalli, Guntur towards 2nd quarter budget for the period 01.07.2023 to 30.09.2023 for the F.Y. 2023-24 - Administrative Sanction Orders - Issued.",
    link: 'assets/images/resources/gosnotifications/2024ITC_RT6.pdf',
  },
  {
    id: 19,
    description:
    "IT,E&C Department - A.P. Innovation Society (APIS) - Release of Rs.1,25,00,000/- (Rupees One Crore and Twenty Five Lakhs only) towards payment of Other Grants-in-Aid for implementation of schemes by the Chief Executive Officer, A.P. Innovation Society (APIS), Tadepalli, Guntur for 2nd quarter budget for the period from 01-07-2023 to 30-09-2023 for the F.Y. 2023-24 - Administrative Sanction Orders - Issued.",
    link: 'assets/images/resources/gosnotifications/2024ITC_RT7.pdf',
  },
  {
    id: 20,
    description:
    "IT,E&C Department - A.P. Innovation Society (APIS) - Release of Rs.64,02,000/- (Rupees Sixty Four Lakhs and Two Thousand Only) for payment towards Grants-in-Aid salaries by the Chief Executive Officer, A.P. Innovation Society (APIS), Tadepalli, Guntur towards Vote on Account Budget for the period from 01.04.2024 to 31.07.2024 for the F.Y. 2024-25 - Administrative Sanction Orders - Issued.",
    link: 'assets/images/resources/gosnotifications/2024ITC_RT47.pdf',
  },
  {
    id: 21,
    description:
    "IT,E&C Department - AP. Innovation Society (APIS) - Release of Rs.1,66,67,000/- (Rupees One Crore Sixty Six Lakhs and Sixty Seven Thousand only) towards payment of Other Grants-in-Aid for implementation of schemes by the Chief Executive Officer, A.P. Innovation Society (APIS), Tadepalli, Guntur towards Vote on Account Budget for the period from 01.04.2024 to 31.07.2024 for the F.Y. 2024-25 - Administrative Sanction Orders - Issued.",
    link: 'assets/images/resources/gosnotifications/2024ITC_RT48.pdf',
  },
  {
    id: 22,
    description:
    "IT,E&C Department – A.P. Innovation Society (APIS) - Release of Rs.64,02,000/- (Rupees Sixty Four Lakhs and Two Thousand Only) for payment towards Grants-in-Aid salaries by the Chief Executive Officer, A.P. Innovation Society (APIS), Tadepalli, Guntur towards Second Vote on Account Budget for the period from 01.08.2024 to 30.11.2024 for the F.Y. 2024-25 – Administrative Sanction Orders – Issued.",
    link: 'assets/images/resources/gosnotifications/2024ITC_RT51.pdf',
  },
  {
    id: 23,
    description:
    "IT,E&C Department – A.P. Innovation Society (APIS) - Release of Rs.1,66,67,000/- (Rupees One Crore Sixty Six Lakhs and Sixty Seven Thousand only) towards payment of Other Grants-in-Aid for implementation of schemes by the Chief Executive Officer, A.P. Innovation Society (APIS), Tadepalli, Guntur towards Second Vote on Account Budget for the period from 01.08.2024 to 30.11.2024 for the F.Y. 2024-25 – Administrative Sanction Orders – Issued.",
    link: 'assets/images/resources/gosnotifications/2024ITC_RT52.pdf',
  },
  {
    id: 24,
    description:
    "IT,E&C Dept. – ADMIN - Sri T. Anil Kumar, Deputy Chief of University Employment Information and Guidance Bureau working in AP Innovation Society, IT,E&C Depart as Chief Executive Officer on deputation basis – Repatriation to parent Department – Orders – Issued.",
    link: 'assets/images/resources/gosnotifications/2024ITC_RT58.pdf',
  },

];

filteredData: any[] = [];
searchQuery: string = '';
page: number = 1;
pageSize: number = 10;

ngOnInit(): void {
  this.applyFilter();
}

applyFilter() {
  this.filteredData = this.tableData.filter((item) =>
    item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
  this.page = 1; // Reset to the first page
}
 // Scroll to top when page changes
 onPageChange(event: number) {
  this.page = event;
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
}
}
