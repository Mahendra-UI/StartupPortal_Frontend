import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listofstartups',
  templateUrl: './listofstartups.component.html',
  styleUrls: ['./listofstartups.component.css']
})
export class ListofstartupsComponent implements OnInit {
  @ViewChild('tableTop') tableTop!: ElementRef; // Reference to the top of the table


startupsList : any[] = [];
currentPage: number = 1;
itemsPerPage: number = 14; // Number of items per page
private _searchText: string = '';


get searchText(): string {
  return this._searchText;
}

set searchText(value: string) {
  this._searchText = value;
  this.currentPage = 1; // Reset to the first page on search
}
  constructor() { }

  ngOnInit(): void {
    this.startupsList = [
      {
          "startup_id": 1,
          "s.no": 1,
          "startup_name": "AntarIoT",
          "sector": "IoT",
          "focus_industry": "Computer Networking Equipment, Network Security Hardware & Software, Computer Equipment & Peripherals",
          "location_name": "Visakhapatnam",
          "person_name": "Rajaneesh ",
          "moblie_number": " 99664 02361",
          "email_id": "Rajaneesh@antariot.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/antariot.png"
      },
      {
          "startup_id": 2,
          "s.no": 2,
          "startup_name": "Saif Seas Automations",
          "sector": "Drones Sector",
          "focus_industry": "Water Drone / Robotic Rescue Craft, Life saving, defence, bathymetry,",
          "location_name": "Visakhapatnam",
          "person_name": "AliAsgar",
          "moblie_number": "93930 75192",
          "email_id": "saif.automations@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/saifseasautomations.png"
      },
      {
          "startup_id": 3,
          "s.no": 3,
          "startup_name": "Botclub",
          "sector": "Education technology & DeepTech ",
          "focus_industry": "Education",
          "location_name": "Visakhapatnam",
          "person_name": "Harshavardhan",
          "moblie_number": "73580 78099",
          "email_id": "harsha@botclub.in",
  
          "company_logo": "assets/images/ecosystem/startups/list/botclub.png"
      },
      {
          "startup_id": 4,
          "s.no": 4,
          "startup_name": "AtFingertip",
          "sector": "IT Sector",
          "focus_industry": "Hospitality Management",
          "location_name": "Visakhapatnam",
          "person_name": "Sheriff",
          "moblie_number": "99666 04449",
          "email_id": "shareef@atfingertip.in",
  
          "company_logo": "assets/images/ecosystem/startups/list/atfingertip.png"
      },
      {
          "startup_id": 5,
          "s.no": 5,
          "startup_name": "GCRS",
          "sector": "IT Sector",
          "focus_industry": "Environmental solutions\nClimate change and carbon offsetting\nMulti infrastructure risk analysis.",
          "location_name": "Visakhapatnam",
          "person_name": "Prasad Babu",
          "moblie_number": "98107 08901",
          "email_id": "prasad.babu@gcrs.co.in",
  
          "company_logo": "assets/images/ecosystem/startups/list/gcrs.png"
      },
      {
          "startup_id": 6,
          "s.no": 6,
          "startup_name": "Yantranet",
          "sector": "IT Sector",
          "focus_industry": " Digital signage, M2M or other connected IOT",
          "location_name": "Visakhapatnam",
          "person_name": "Rohit",
          "moblie_number": "95737 21737",
          "email_id": "uvprvarma@yantranet.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/yantranet.png"
      },
      {
          "startup_id": 7,
          "s.no": 7,
          "startup_name": "Robocoupler Technosolutions",
          "sector": "IT Sector",
          "focus_industry": "Training for corporate and students who need to grow in the field of robotics.",
          "location_name": "Visakhapatnam",
          "person_name": "Vijay",
          "moblie_number": NaN,
          "email_id": NaN,
  
          "company_logo": "assets/images/ecosystem/startups/list/robocouplertechnosolutions.png"
      },
      {
          "startup_id": 8,
          "s.no": 8,
          "startup_name": "Supply U",
          "sector": "Infrastructure and Building materials",
          "focus_industry": "Building materials aggregator",
          "location_name": "Visakhapatnam",
          "person_name": "Teja",
          "moblie_number": "96181 08333",
          "email_id": "teja@supply.in",
  
          "company_logo": "assets/images/ecosystem/startups/list/supplyu.png"
      },
      {
          "startup_id": 9,
          "s.no": 9,
          "startup_name": "La Misma Luna",
          "sector": "IT Sector",
          "focus_industry": "E- Commerce",
          "location_name": "Visakhapatnam",
          "person_name": "Chaitanya",
          "moblie_number": "83329 33509",
          "email_id": "arla@lunacx.world",
  
          "company_logo": "assets/images/ecosystem/startups/list/lamismaluna.png"
      },
      {
          "startup_id": 10,
          "s.no": 10,
          "startup_name": "Korinar Smart Solutions Pvt.Ltd",
          "sector": "Communication Service",
          "focus_industry": "24crafts(media and entertainment)",
          "location_name": "Visakhapatnam",
          "person_name": "Maruthi",
          "moblie_number": "92473 23369",
          "email_id": NaN,
  
          "company_logo": "assets/images/ecosystem/startups/list/korinarsmartsolutionspvt.png"
      },
      {
          "startup_id": 11,
          "s.no": 11,
          "startup_name": "VR & AR Labs pvt. Ltd",
          "sector": "IT Sector",
          "focus_industry": "Software Development",
          "location_name": "Visakhapatnam",
          "person_name": "Dileep",
          "moblie_number": " 93815 80643",
          "email_id": "rdileepkumar343@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/vr&arlabspvt.ltd.png"
      },
      {
          "startup_id": 12,
          "s.no": 12,
          "startup_name": "Hotspare e-services Pvt. Ltd",
          "sector": "IT Sector",
          "focus_industry": "Web Designing",
          "location_name": "Visakhapatnam",
          "person_name": "Ramesh",
          "moblie_number": "97054 10433",
          "email_id": "behara.ramesh@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/hotsparee-servicespvt.png"
      },
      {
          "startup_id": 13,
          "s.no": 13,
          "startup_name": "CloudEarl Solutions Pvt. Ltd",
          "sector": "IT Sector",
          "focus_industry": "Cloud Computing",
          "location_name": "Visakhapatnam",
          "person_name": "Naveen",
          "moblie_number": "80745 57609",
          "email_id": "nagaraju@cloudearl.com, naveen@cloudearl.com",
  
          "company_logo": NaN
      },
      {
          "startup_id": 14,
          "s.no": 14,
          "startup_name": "Tanasvi technolgies",
          "sector": "IT Sector",
          "focus_industry": "Building My Career Portal, Web Designing",
          "location_name": "Visakhapatnam",
          "person_name": "Naresh Kumar",
          "moblie_number": "98856 02914",
          "email_id": "naresh@tanasvi.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/tanasvitechnolgies.png"
      },
      {
          "startup_id": 15,
          "s.no": 15,
          "startup_name": "Kaumodaki Information Technology",
          "sector": "Iot",
          "focus_industry": "Smart Home Sytem",
          "location_name": "Visakhapatnam",
          "person_name": "Venugopal",
          "moblie_number": "79898 96313",
          "email_id": "vkadali@kaumodakitech.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/kaumodakiinformationtechnology.png"
      },
      {
          "startup_id": 16,
          "s.no": 16,
          "startup_name": "Adhoc Network",
          "sector": "IT Sector",
          "focus_industry": "Informatio technology,Training & Development",
          "location_name": "Visakhapatnam",
          "person_name": "Devika",
          "moblie_number": "98851 23727",
          "email_id": "devika@adhocnetwork.in",
  
          "company_logo": "assets/images/ecosystem/startups/list/adhocnetwork.png"
      },
      {
          "startup_id": 17,
          "s.no": 17,
          "startup_name": "GarudaLytics",
          "sector": "IT Sector",
          "focus_industry": "Geo Spatial",
          "location_name": "Visakhapatnam",
          "person_name": "Kiran",
          "moblie_number": "73821 69329",
          "email_id": "\nvssk@garudalytics.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/garudalytics.png"
      },
      {
          "startup_id": 18,
          "s.no": 18,
          "startup_name": "Yallas Tachnologies",
          "sector": "IT Sector",
          "focus_industry": "Block Chain Management",
          "location_name": "Visakhapatnam",
          "person_name": "Madhu Yalla",
          "moblie_number": "89772 19653",
          "email_id": "madhu.yalla@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/yallastachnologies.png"
      },
      {
          "startup_id": 19,
          "s.no": 19,
          "startup_name": "Bijana Health care Pvt. Ltd",
          "sector": "Health Care Services",
          "focus_industry": "E- Commerce",
          "location_name": "Visakhapatnam",
          "person_name": "Nagendra Prasad",
          "moblie_number": "85220 98844",
          "email_id": "nagendrahyderabad@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/bijanahealthcarepvt.png"
      },
      {
          "startup_id": 20,
          "s.no": 20,
          "startup_name": "E-Farming",
          "sector": "Agriculture",
          "focus_industry": "E-Commerce",
          "location_name": "Visakhapatnam",
          "person_name": "Raghu",
          "moblie_number": "90104 90414",
          "email_id": "raghu.geetham@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/e-farming.png"
      },
      {
          "startup_id": 21,
          "s.no": 21,
          "startup_name": "Spond Byte",
          "sector": "IoT / Automation Services",
          "focus_industry": "City Automation, Mobility,    Smart transport",
          "location_name": "Visakhapatnam",
          "person_name": "Ramesh",
          "moblie_number": "77479 77284",
          "email_id": " rameshpersuader@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/spondbyte.png"
      },
      {
          "startup_id": 22,
          "s.no": 22,
          "startup_name": "AI SmartLive Solutions",
          "sector": "IoT / Automation Services",
          "focus_industry": "Smart Home Sytem/ Virtual Dressing",
          "location_name": "Visakhapatnam",
          "person_name": "Chiranjeevi Bongu",
          "moblie_number": "86398 46023",
          "email_id": "info@aismartlive.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/aismartlivesolutions.png"
      },
      {
          "startup_id": 23,
          "s.no": 23,
          "startup_name": "Stignite Communications",
          "sector": "IT Enabled Services",
          "focus_industry": "Scientific Meetings-Conferences",
          "location_name": "Visakhapatnam",
          "person_name": "Anil",
          "moblie_number": "77318 11007",
          "email_id": " anil.gollamandala@peersalley.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/stignitecommunications.png"
      },
      {
          "startup_id": 24,
          "s.no": 24,
          "startup_name": "Reapp Technologies Pvt.Ltd",
          "sector": "Information Technology",
          "focus_industry": "Block Chain Management",
          "location_name": "Visakhapatnam",
          "person_name": "Mani Suresh",
          "moblie_number": "90081 94585",
          "email_id": "surya@reallyy.app",
  
          "company_logo": "assets/images/ecosystem/startups/list/reapptechnologiespvt.png"
      },
      {
          "startup_id": 25,
          "s.no": 25,
          "startup_name": "Shipmantra",
          "sector": "Logistics and supply chain",
          "focus_industry": "Logistics and supply chain services",
          "location_name": "Visakhapatnam",
          "person_name": "Dinesh reddy",
          "moblie_number": "95507 57026",
          "email_id": "dinesh@golintu.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/shipmantra.png"
      },
      {
          "startup_id": 26,
          "s.no": 26,
          "startup_name": "Nivriti Solutions Global Pvt.Ltd",
          "sector": "Logistics and supply chain",
          "focus_industry": "TRANSPORTATION KRAFT",
          "location_name": "Visakhapatnam",
          "person_name": "Harikrishna",
          "moblie_number": "97030 67895",
          "email_id": " hari@nsaas.in",
  
          "company_logo": "assets/images/ecosystem/startups/list/nivritisolutionsglobalpvt.png"
      },
      {
          "startup_id": 27,
          "s.no": 27,
          "startup_name": "3F Advanced Techno Labs",
          "sector": "IT Sector",
          "focus_industry": "supply chain and procurement",
          "location_name": "Visakhapatnam",
          "person_name": "Umesh Bharadwaj",
          "moblie_number": "90592 22119",
          "email_id": "umeshp@connetln.in",
  
          "company_logo": "assets/images/ecosystem/startups/list/3fadvancedtechnolabs.png"
      },
      {
          "startup_id": 28,
          "s.no": 28,
          "startup_name": "Baani Technologies",
          "sector": "IT Sector",
          "focus_industry": "customized Creativity in Business Training, Workshops for corporations and small businesses",
          "location_name": "Visakhapatnam",
          "person_name": "Nirmala",
          "moblie_number": "99666 33302",
          "email_id": " vommi.nirmala@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/baanitechnologies.png"
      },
      {
          "startup_id": 29,
          "s.no": 29,
          "startup_name": "Innoways Technologies",
          "sector": "IT Sector",
          "focus_industry": "Information Technology",
          "location_name": "Visakhapatnam",
          "person_name": "Pradeep",
          "moblie_number": " 97030 65672",
          "email_id": NaN,
  
          "company_logo": NaN
      },
      {
          "startup_id": 30,
          "s.no": 30,
          "startup_name": "Techmark Solutions",
          "sector": "Education ",
          "focus_industry": "MSME",
          "location_name": "Visakhapatnam",
          "person_name": "Satish Babu",
          "moblie_number": "96766 32234",
          "email_id": "satish@tech-mark.co",
  
          "company_logo": "assets/images/ecosystem/startups/list/techmarksolutions.png"
      },
      {
          "startup_id": 31,
          "s.no": 31,
          "startup_name": "Edumate",
          "sector": "IT Sector",
          "focus_industry": "Autonomous Educational Institute Management System and ERP Solution",
          "location_name": "Visakhapatnam",
          "person_name": "Pavan",
          "moblie_number": "85558 13712",
          "email_id": "pavanchandra99@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/edumate.png"
      },
      {
          "startup_id": 32,
          "s.no": 32,
          "startup_name": "Ship With Care",
          "sector": "Logistics and supply chain",
          "focus_industry": " Logistics and supply chain",
          "location_name": "Visakhapatnam",
          "person_name": "Muzahir Khan",
          "moblie_number": "90297 01221",
          "email_id": NaN,
  
          "company_logo": "assets/images/ecosystem/startups/list/shipwithcare.png"
      },
      {
          "startup_id": 33,
          "s.no": 33,
          "startup_name": "Camper Trailer",
          "sector": "Manufacturering",
          "focus_industry": "Product mangement",
          "location_name": "Vijayawada",
          "person_name": "Manisha",
          "moblie_number": "96181 24789",
          "email_id": "Mpuppala333@gmail.com",
  
          "company_logo": NaN
      },
      {
          "startup_id": 34,
          "s.no": 34,
          "startup_name": "CropBee",
          "sector": "Agriculture",
          "focus_industry": "Agri Tech market",
          "location_name": "Vijayawada",
          "person_name": "Rajiv",
          "moblie_number": "93901 37443",
          "email_id": "care@cropbee.in",
  
          "company_logo": NaN
      },
      {
          "startup_id": 35,
          "s.no": 35,
          "startup_name": "SpaceInf",
          "sector": "Application development ( GIS)",
          "focus_industry": "IT services",
          "location_name": "Vijayawada",
          "person_name": "Sridevi",
          "moblie_number": " 81431 12661",
          "email_id": " spaceinftechnologies@gmail.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/spaceinf.png"
      },
      {
          "startup_id": 36,
          "s.no": 36,
          "startup_name": "Actimize Software Solutions Pvt.Ltd",
          "sector": "Web & Mobile App development",
          "focus_industry": "IT & Software",
          "location_name": "Kakinada",
          "person_name": "Chaitanya",
          "moblie_number": " 6305 196 668",
          "email_id": " contact@actimize.in ",
  
          "company_logo": "assets/images/ecosystem/startups/list/actimizesoftwaresolutionspvt.png"
      },
      {
          "startup_id": 37,
          "s.no": 37,
          "startup_name": "Wolfrax Corporation",
          "sector": "Information Technology",
          "focus_industry": "Information Security Services",
          "location_name": "Kakinada",
          "person_name": "Karthik",
          "moblie_number": "77994 19977",
          "email_id": " kk@Wolfrax.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/wolfraxcorporation.png"
      },
      {
          "startup_id": 38,
          "s.no": 38,
          "startup_name": "Farmshield",
          "sector": "Agri-Tech",
          "focus_industry": "Auto & Track Manufature",
          "location_name": "Tirupati",
          "person_name": "Upendra",
          "moblie_number": "81973 40090",
          "email_id": "nec1516083@gmail.com",
  
          "company_logo": NaN
      },
      {
          "startup_id": 39,
          "s.no": 39,
          "startup_name": "LIPA",
          "sector": "Web & Mobile App development",
          "focus_industry": "Business Development",
          "location_name": "Kakinada",
          "person_name": "Pavan Garimella",
          "moblie_number": 7997758080,
          "email_id": "pawan.g@lipasuperpay.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/lipa.png"
      },
      {
          "startup_id": 40,
          "s.no": 40,
          "startup_name": "Parardhi Technologies",
          "sector": "Information Technology",
          "focus_industry": "Mobile Technology",
          "location_name": "Kakinada",
          "person_name": "Rajendra Pragadareddi",
          "moblie_number": 9959950913,
          "email_id": "rajendra@parardhi.com",
  
          "company_logo": "assets/images/ecosystem/startups/list/parardhitechnologies.png"
      },
      {
          "startup_id": 41,
          "s.no": 41,
          "startup_name": "On Road Assist",
          "sector": "Automobile ",
          "focus_industry": "Roadside assistance, service and repair maintenance",
          "location_name": "Vijayawada",
          "person_name": "Venkat Kalidindi",
          "moblie_number": "81795 07344",
          "email_id": " ceo@onroadassist.in",
  
          "company_logo": "assets/images/ecosystem/startups/list/onroadassist.png"
      }
  ]
  }

 // Method to filter startups by any property
 get filteredStartups() {
  return this.startupsList.filter(startup =>
    Object.values(startup).some(value =>
      value && value.toString().toLowerCase().includes(this.searchText.toLowerCase())
    )
  );
}
scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
onPageChange(event: number) {
  this.currentPage = event;
  this.scrollToTop(); // Scroll to the top when the page changes
}

// onPageChange(page: number) {
//   this.currentPage = page;
//   this.scrollToTop();
// }

// scrollToTop() {
//   if (this.tableTop) {
//     this.tableTop.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
// }

}
