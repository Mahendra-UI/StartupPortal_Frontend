import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @ViewChild('tableTop') tableTop!: ElementRef;  // Reference to the top of the table



  items = [
    {
      "id": 35,
      "itemName": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "id": 34,
      "itemName": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
        "id": 1,
        "itemName": "AP Venture Horizon (2.0) Startup Runway (Texas, USA) Delegates - 19-07-2024"
    },
    {
        "id": 2,
        "itemName": "AP Venture Horizons (1.0) 2024   Funding Assistance \u2013 Leap to Unicorn Season \u2013 2, IDFC"
    },
    {
        "id": 3,
        "itemName": "AP Venture Horizons (2.0) 2024 Global Funding Connect for Startups, forging Strategic Partnerships with Startup Runway, City of Frisco, & McKinney, Texas, USA 31-01-2024"
    },
    {
        "id": 4,
        "itemName": "Financial Wellness Workshop 06-03-2024"
    },
    {
        "id": 5,
        "itemName": "Fintech Innovation Challenge Grand Challenge 27-12-2022"
    },
    {
        "id": 6,
        "itemName": "IIT College students visit from Delhi 26-12-2023"
    },
    {
        "id": 7,
        "itemName": "Incubators interactive session with Shri. Bhuvnesh Kumar, IAS, Addl. Secretary, MeitY, Govt. of India"
    },
    {
        "id": 8,
        "itemName": "Industry incubator Connect Session-23-11-2022"
    },
    {
        "id": 9,
        "itemName": "Interactive Session - G. Satheesh Reddy, Govt of India - 12-07-2023"
    },
    {
        "id": 10,
        "itemName": "International expert session on Innovation and R&D with Dr. Jitendra Badhei, Sr. Scientist, Cancer Institute, Netherlands & Prof. Vijay Tiwari, Institute of Molecular Medicine, Denmark-Pictur"
    },
    {
        "id": 11,
        "itemName": "Juliana Casavan, Entrepreneurial, Program Manager, Purdue University, USA Visits APIS 31-01-2024"
    },
    {
        "id": 12,
        "itemName": "Master Class - Drones 11 to 15-03-2024"
    },
    {
        "id": 13,
        "itemName": "Master Class - EV 4 to 9-03-2024"
    },
    {
        "id": 14,
        "itemName": "Microsoft Azure Session 19-03-2024"
    },
    {
        "id": 15,
        "itemName": "Miscelanious Pics"
    },
    {
        "id": 16,
        "itemName": "National Startup Awards & States Ranking 2022-2023"
    },
    {
        "id": 17,
        "itemName": "NRDC Event  Selected Pics 20-07-2023"
    },
    {
        "id": 18,
        "itemName": "PSIT Visit 30-07-2024"
    },
    {
        "id": 19,
        "itemName": "SIMS College, PM Palem students visit 15-02-2024"
    },
    {
        "id": 20,
        "itemName": "Startup20 Sabha - Townhall & Public Consultations Event 25-05-2023"
    },
    {
        "id": 21,
        "itemName": "Wadhwani - APIS, AP Incubators Round Table Conclave 26-07-2024"
    },
    {
        "id": 22,
        "itemName": "WADHWANI - Coffee with Startups 15-07-2024"
    },
    {
        "id": 23,
        "itemName": "WEP - NITI Aayog Roundtable Discussion 21-12-2023"
    },
    {
        "id": 24,
        "itemName": "WEW 5,6-10-2023"
    },
    {
        "id": 25,
        "itemName": "Workshop cum Hands on Training Empowering Incubators Mastering Global Success & Sustainability In association with AP Innovation Society, PUM & aHub 01-10-2024"
    },
    {
        "id": 26,
        "itemName": "World IP Day - Women & IP Accelerating Innovation & Creativity - 26-04-2023"
    },
    {
        "id": 27,
        "itemName": "Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023"
    },
    {
        "id": 28,
        "itemName": "Dr Saidhiraj Amuru Asst Prof, IIT Hyderabad #IMC 2022"
    },
    {
        "id": 29,
        "itemName": "Mr. K Prasad Rao has been to APIS, Vizag with proposal to work on Cyber Security and also to support core activities of APIS like promoting startups, conducting hackathons etc. #cybersecurity #startups #entrepreneur #hackathon"
    },
    {
        "id": 30,
        "itemName": "Visited Govt Degree College for Women along STPI Director Suresh garu and team.. #Visakhapatnam #women entrepreneur"
    },
    {
        "id": 31,
        "itemName": "Visited NAASCOM CoE on IoT &AI #visakhapatnam #startup #entrepreneur #nasscom #coe #iot #ai"
    },
    {
        "id": 32,
        "itemName": "Visited IGIAT @ Visakhapatnam along with STPI Director Suresh garu and team.. #IGIAT"
    },
    {
        "id": 33,
        "itemName": "Incubators, Startups, Associates had attended ICICI team visit @ AP Innovation Society, Visakhapatnam #startups #incubators #visakhapatnam #icici #entrepreneur #entrepreneurship #venturecapital #angelinvestors #fundraising #knowledgepartner"
    }
];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToDetails(id: number) {
    this.router.navigate(['/galleryDetails', id]);
  }
  customOptions: OwlOptions = {
    margin: 10,
    nav: true,
    rewind: true,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText : ["←",'→'],
    // navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 6
      },
      940: {
        items: 5
      }
    },
  }
  currentPage: number = 1;
  itemsPerPage: number = 15;  // Number of items per page
  private _searchText: string = '';  // Private variable for search text

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
    this.currentPage = 1;  // Reset to the first page on search
  }

  get filteredData() {
    return this.items.filter(startup =>
      Object.values(startup).some(value =>
        value && value.toString().toLowerCase().includes(this._searchText.toLowerCase())
      )
    );
  }

  // Called when the page changes
  onPageChange(event: number) {
    this.currentPage = event;
    this.scrollToTop();  // Scroll to the top when the page changes
  }

  // Scroll to the top of the page
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Search trigger
  onSearch() {
    this.currentPage = 1;  // Reset to the first page on search
  }

  // Navigate to details (stub method)
  viewDetails(id: number) {
    console.log('View details for ID:', id);
  }
}
