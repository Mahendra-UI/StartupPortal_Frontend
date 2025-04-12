import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Image {
  image: string;
  thumbImage: string;
  title?: string;
  alt?: string;
}

@Component({
  selector: 'app-gallerylightbox',
  templateUrl: './gallerylightbox.component.html',
  styleUrls: ['./gallerylightbox.component.css']
})
export class GallerylightboxComponent implements OnInit {
  // galleryImages: { image: string; thumbImage: string; title?: string ; alt?: string}[] = [];

  galleryImages: Image[] = [];
  itemTitle: string = '';


  allImages: Record<number, { itemName: string; images: Image[] }> = {

  1: {
    itemName: "AP Venture Horizon (2.0) Startup Runway (Texas, USA) Delegates - 19-07-2024",
    images: [
    {
      image: 'assets/images/gallery/apis/apventurehorizon/1.webp',
      thumbImage: 'assets/images/gallery/apis/apventurehorizon/1.webp',
      alt: 'AP Venture Horizon (2.0) Startup Runway (Texas, USA) Delegates - 19-07-2024',
      title: 'AP Venture Horizon (2.0) Startup Runway (Texas, USA) Delegates - 19-07-2024',
    },

    {
      image: 'assets/images/gallery/apis/apventurehorizon/2.webp',
      thumbImage: 'assets/images/gallery/apis/apventurehorizon/2.webp',
      alt: 'AP Venture Horizon (2.0) Startup Runway (Texas, USA) Delegates - 19-07-2024',
      title: 'AP Venture Horizon (2.0) Startup Runway (Texas, USA) Delegates - 19-07-2024',
    },
  ]
  },
  2: {
    itemName: 'AP Venture Horizons (1.0) 2024   Funding Assistance – Leap to Unicorn Season – 2, IDFC',
    images: [
      {
      image: 'assets/images/gallery/apis/apventurehorizonfunding/1.webp',
      thumbImage: 'assets/images/gallery/apis/apventurehorizonfunding/1.webp',
      alt: 'AP Venture Horizons (1.0) 2024   Funding Assistance – Leap to Unicorn Season – 2, IDFC',
      title: 'AP Venture Horizons (1.0) 2024   Funding Assistance – Leap to Unicorn Season – 2, IDFC',
    },
    {
      image: 'assets/images/gallery/apis/apventurehorizonfunding/2.webp',
      thumbImage: 'assets/images/gallery/apis/apventurehorizonfunding/2.webp',
      alt: 'AP Venture Horizons (1.0) 2024   Funding Assistance – Leap to Unicorn Season – 2, IDFC',
      title: 'AP Venture Horizons (1.0) 2024   Funding Assistance – Leap to Unicorn Season – 2, IDFC',
    }
  ]
  },
  3: {
    itemName: 'AP Venture Horizons (2.0) 2024 Global Funding Connect for Startups, forging Strategic Partnerships with Startup Runway, City of Frisco, & McKinney, Texas, USA 31-01-2024',
    images: [
    {
      image: 'assets/images/gallery/apis/apventurehorizonglobalfunding/1.webp',
      thumbImage: 'assets/images/gallery/apis/apventurehorizonglobalfunding/1.webp',
      alt: 'AP Venture Horizons (2.0) 2024 Global Funding Connect for Startups, forging Strategic Partnerships with Startup Runway, City of Frisco, & McKinney, Texas, USA 31-01-2024',
      title: 'AP Venture Horizons (2.0) 2024 Global Funding Connect for Startups, forging Strategic Partnerships with Startup Runway, City of Frisco, & McKinney, Texas, USA 31-01-2024'
    },
    {
      image: 'assets/images/gallery/apis/apventurehorizonglobalfunding/2.webp',
      thumbImage: 'assets/images/gallery/apis/apventurehorizonglobalfunding/2.webp',
      alt: 'AP Venture Horizons (2.0) 2024 Global Funding Connect for Startups, forging Strategic Partnerships with Startup Runway, City of Frisco, & McKinney, Texas, USA 31-01-2024',
      title: 'AP Venture Horizons (2.0) 2024 Global Funding Connect for Startups, forging Strategic Partnerships with Startup Runway, City of Frisco, & McKinney, Texas, USA 31-01-2024'
    },
  ],
},
4: {
  itemName: 'Financial Wellness Workshop 06-03-2024',
  images: [
    {
      image: 'assets/images/gallery/apis/financialwellness/1.webp',
      thumbImage: 'assets/images/gallery/apis/financialwellness/1.webp',
      alt: 'Financial Wellness Workshop 06-03-2024',
      title: 'Financial Wellness Workshop 06-03-2024'
    },
  ]
  },
  5: {
    itemName: 'Fintech Innovation Challenge Grand Challenge 27-12-2022',
    images: [
      {
      image: 'assets/images/gallery/apis/fintech/1.webp',
      thumbImage: 'assets/images/gallery/apis/fintech/1.webp',
      alt: 'Fintech Innovation Challenge Grand Challenge 27-12-2022',
      title: 'Fintech Innovation Challenge Grand Challenge 27-12-2022'
    },
    {
      image: 'assets/images/gallery/apis/fintech/2.webp',
      thumbImage: 'assets/images/gallery/apis/fintech/2.webp',
      alt: 'Fintech Innovation Challenge Grand Challenge 27-12-2022',
      title: 'Fintech Innovation Challenge Grand Challenge 27-12-2022'
    },
  ],
},
  6: {
    itemName: 'IIT College students visit from Delhi 26-12-2023',
    images: [
    {
      image: 'assets/images/gallery/apis/iitdelhi/1.webp',
      thumbImage: 'assets/images/gallery/apis/iitdelhi/1.webp',
      alt: 'IIT College students visit from Delhi 26-12-2023',
      title: 'IIT College students visit from Delhi 26-12-2023'
    },
    {
      image: 'assets/images/gallery/apis/iitdelhi/2.webp',
      thumbImage: 'assets/images/gallery/apis/iitdelhi/2.webp',
      alt: 'IIT College students visit from Delhi 26-12-2023',
      title: 'IIT College students visit from Delhi 26-12-2023'
    },
  ],
},
  7: {
    itemName: 'Incubators interactive session with Shri. Bhuvnesh Kumar, IAS, Addl. Secretary, MeitY, Govt. of India',
    images: [
    {
      image: 'assets/images/gallery/apis/incubatorswithmeity/1.webp',
      thumbImage: 'assets/images/gallery/apis/incubatorswithmeity/1.webp',
      alt: 'Incubators interactive session with Shri. Bhuvnesh Kumar, IAS, Addl. Secretary, MeitY, Govt. of India',
      title: 'Incubators interactive session with Shri. Bhuvnesh Kumar, IAS, Addl. Secretary, MeitY, Govt. of India'
    },
    {
      image: 'assets/images/gallery/apis/incubatorswithmeity/2.webp',
      thumbImage: 'assets/images/gallery/apis/incubatorswithmeity/2.webp',
      alt: 'Incubators interactive session with Shri. Bhuvnesh Kumar, IAS, Addl. Secretary, MeitY, Govt. of India',
      title: 'Incubators interactive session with Shri. Bhuvnesh Kumar, IAS, Addl. Secretary, MeitY, Govt. of India'
    },
  ],
},
  8: {
    itemName: 'Industry incubator Connect Session-23-11-2022',
    images: [
    {
      image: 'assets/images/gallery/apis/industryincubatorconnect/1.webp',
      thumbImage: 'assets/images/gallery/apis/industryincubatorconnect/1.webp',
      alt: 'Industry incubator Connect Session-23-11-2022',
      title: 'Industry incubator Connect Session-23-11-2022'
    },
    {
      image: 'assets/images/gallery/apis/industryincubatorconnect/2.webp',
      thumbImage: 'assets/images/gallery/apis/industryincubatorconnect/2.webp',
      alt: 'Industry incubator Connect Session-23-11-2022',
      title: 'Industry incubator Connect Session-23-11-2022'
    },
    {
      image: 'assets/images/gallery/apis/industryincubatorconnect/3.webp',
      thumbImage: 'assets/images/gallery/apis/industryincubatorconnect/3.webp',
      alt: 'Industry incubator Connect Session-23-11-2022',
      title: 'Industry incubator Connect Session-23-11-2022'
    },
  ],
},
9: {
  itemName: 'Interactive Session - G. Satheesh Reddy, Govt of India - 12-07-2023',
  images: [
    {
      image: 'assets/images/gallery/apis/interactivesession/1.webp',
      thumbImage: 'assets/images/gallery/apis/interactivesession/1.webp',
      alt: 'Interactive Session - G. Satheesh Reddy, Govt of India - 12-07-2023',
      title: 'Interactive Session - G. Satheesh Reddy, Govt of India - 12-07-2023'
    },
  ],
},
  10: {
    itemName: 'International expert session on Innovation and R&D with Dr. Jitendra Badhei, Sr. Scientist, Cancer Institute, Netherlands & Prof. Vijay Tiwari, Institute of Molecular Medicine, Denmark-Pictur',
    images: [
    {
      image: 'assets/images/gallery/apis/internationalexpertsession/1.webp',
      thumbImage: 'assets/images/gallery/apis/internationalexpertsession/1.webp',
      alt: 'International expert session on Innovation and R&D with Dr. Jitendra Badhei, Sr. Scientist, Cancer Institute, Netherlands & Prof. Vijay Tiwari, Institute of Molecular Medicine, Denmark-Pictur',
      title: 'International expert session on Innovation and R&D with Dr. Jitendra Badhei, Sr. Scientist, Cancer Institute, Netherlands & Prof. Vijay Tiwari, Institute of Molecular Medicine, Denmark-Pictur'
    },
    {
      image: 'assets/images/gallery/apis/internationalexpertsession/2.webp',
      thumbImage: 'assets/images/gallery/apis/internationalexpertsession/2.webp',
      alt: 'International expert session on Innovation and R&D with Dr. Jitendra Badhei, Sr. Scientist, Cancer Institute, Netherlands & Prof. Vijay Tiwari, Institute of Molecular Medicine, Denmark-Pictur',
      title: 'International expert session on Innovation and R&D with Dr. Jitendra Badhei, Sr. Scientist, Cancer Institute, Netherlands & Prof. Vijay Tiwari, Institute of Molecular Medicine, Denmark-Pictur'
    },
  ],
},
11: {
  itemName: 'Juliana Casavan, Entrepreneurial, Program Manager, Purdue University, USA Visits APIS 31-01-2024',
  images:[
    {
      image: 'assets/images/gallery/apis/julianacasavanentrepreneurial/1.webp',
      thumbImage: 'assets/images/gallery/apis/julianacasavanentrepreneurial/1.webp',
      alt: 'Juliana Casavan, Entrepreneurial, Program Manager, Purdue University, USA Visits APIS 31-01-2024',
      title: 'Juliana Casavan, Entrepreneurial, Program Manager, Purdue University, USA Visits APIS 31-01-2024'
    },
    {
      image: 'assets/images/gallery/apis/julianacasavanentrepreneurial/2.webp',
      thumbImage: 'assets/images/gallery/apis/julianacasavanentrepreneurial/2.webp',
      alt: 'Juliana Casavan, Entrepreneurial, Program Manager, Purdue University, USA Visits APIS 31-01-2024',
      title: 'Juliana Casavan, Entrepreneurial, Program Manager, Purdue University, USA Visits APIS 31-01-2024'
    },
    {
      image: 'assets/images/gallery/apis/julianacasavanentrepreneurial/3.webp',
      thumbImage: 'assets/images/gallery/apis/julianacasavanentrepreneurial/3.webp',
      alt: 'Juliana Casavan, Entrepreneurial, Program Manager, Purdue University, USA Visits APIS 31-01-2024',
      title: 'Juliana Casavan, Entrepreneurial, Program Manager, Purdue University, USA Visits APIS 31-01-2024'
    },
  ],
},
  12: {
    itemName: 'Master Class - Drones 11 to 15-03-2024',
    images: [
    {
      image: 'assets/images/gallery/apis/masterclassdrones/1.webp',
      thumbImage: 'assets/images/gallery/apis/masterclassdrones/1.webp',
      alt: 'Master Class - Drones 11 to 15-03-2024',
      title: 'Master Class - Drones 11 to 15-03-2024'
    },
  ],
},
  13: {
    itemName: 'Master Class - EV 4 to 9-03-2024',
    images: [
    {
      image: 'assets/images/gallery/apis/masterclassev/1.webp',
      thumbImage: 'assets/images/gallery/apis/masterclassev/1.webp',
      alt: 'Master Class - EV 4 to 9-03-2024',
      title: 'Master Class - EV 4 to 9-03-2024'
    },
    {
      image: 'assets/images/gallery/apis/masterclassev/2.webp',
      thumbImage: 'assets/images/gallery/apis/masterclassev/2.webp',
      alt: 'Master Class - EV 4 to 9-03-2024',
      title: 'Master Class - EV 4 to 9-03-2024'
    },
    {
      image: 'assets/images/gallery/apis/masterclassev/3.webp',
      thumbImage: 'assets/images/gallery/apis/masterclassev/3.webp',
      alt: 'Master Class - EV 4 to 9-03-2024',
      title: 'Master Class - EV 4 to 9-03-2024'
    },
  ],
},
  14: {
    itemName: 'Microsoft Azure Session 19-03-2024',
    images: [
    {
      image: 'assets/images/gallery/apis/microsoftazuresession/1.webp',
      thumbImage: 'assets/images/gallery/apis/microsoftazuresession/1.webp',
      alt: 'Microsoft Azure Session 19-03-2024',
      title: 'Microsoft Azure Session 19-03-2024'
    },
  ],
},
  15: {
    itemName: 'Miscelanious Pics',
    images: [
    {
      image: 'assets/images/gallery/apis/miscelaniouspics/1.webp',
      thumbImage: 'assets/images/gallery/apis/miscelaniouspics/1.webp',
      alt: 'Miscelanious Pics',
      title: 'Miscelanious Pics'
    },
    {
      image: 'assets/images/gallery/apis/miscelaniouspics/2.webp',
      thumbImage: 'assets/images/gallery/apis/miscelaniouspics/2.webp',
      alt: 'Miscelanious Pics',
      title: 'Miscelanious Pics'
    },
  ],
},
  16: {
    itemName: 'National Startup Awards & States Ranking 2022-2023',
    images: [
    {
      image: 'assets/images/gallery/apis/nationalstartuprankings/1.webp',
      thumbImage: 'assets/images/gallery/apis/nationalstartuprankings/1.webp',
      alt: 'National Startup Awards & States Ranking 2022-2023',
      title: 'National Startup Awards & States Ranking 2022-2023'
    },
    {
      image: 'assets/images/gallery/apis/nationalstartuprankings/2.webp',
      thumbImage: 'assets/images/gallery/apis/nationalstartuprankings/2.webp',
      alt: 'National Startup Awards & States Ranking 2022-2023',
      title: 'National Startup Awards & States Ranking 2022-2023'
    },
    {
      image: 'assets/images/gallery/apis/nationalstartuprankings/3.webp',
      thumbImage: 'assets/images/gallery/apis/nationalstartuprankings/3.webp',
      alt: 'National Startup Awards & States Ranking 2022-2023',
      title: 'National Startup Awards & States Ranking 2022-2023'
    },
  ],
},
  17: {
    itemName: 'NRDC Event  Selected Pics 20-07-2023',
    images: [
    {
      image: 'assets/images/gallery/apis/nrdcevent/1.webp',
      thumbImage: 'assets/images/gallery/apis/nrdcevent/1.webp',
      alt: 'NRDC Event  Selected Pics 20-07-2023',
      title: 'NRDC Event  Selected Pics 20-07-2023'
    },
    {
      image: 'assets/images/gallery/apis/nrdcevent/2.webp',
      thumbImage: 'assets/images/gallery/apis/nrdcevent/2.webp',
      alt: 'NRDC Event  Selected Pics 20-07-2023',
      title: 'NRDC Event  Selected Pics 20-07-2023'
    },
    {
      image: 'assets/images/gallery/apis/nrdcevent/3.webp',
      thumbImage: 'assets/images/gallery/apis/nrdcevent/3.webp',
      alt: 'NRDC Event  Selected Pics 20-07-2023',
      title: 'NRDC Event  Selected Pics 20-07-2023'
    },
  ],
},
  18: {
    itemName: 'PSIT Visit 30-07-2024',
    images: [
    {
      image: 'assets/images/gallery/apis/psitvisit/1.webp',
      thumbImage: 'assets/images/gallery/apis/psitvisit/1.webp',
      alt: 'PSIT Visit 30-07-2024',
      title: 'PSIT Visit 30-07-2024'
    },
    {
      image: 'assets/images/gallery/apis/psitvisit/2.webp',
      thumbImage: 'assets/images/gallery/apis/psitvisit/2.webp',
      alt: 'PSIT Visit 30-07-2024',
      title: 'PSIT Visit 30-07-2024'
    },
  ],
},
  19: {
    itemName: 'SIMS College, PM Palem students visit 15-02-2024',
    images: [
    {
      image: 'assets/images/gallery/apis/simscollege/1.webp',
      thumbImage: 'assets/images/gallery/apis/simscollege/1.webp',
      alt: 'SIMS College, PM Palem students visit 15-02-2024',
      title: 'SIMS College, PM Palem students visit 15-02-2024'
    },
    {
      image: 'assets/images/gallery/apis/simscollege/2.webp',
      thumbImage: 'assets/images/gallery/apis/simscollege/2.webp',
      alt: 'SIMS College, PM Palem students visit 15-02-2024',
      title: 'SIMS College, PM Palem students visit 15-02-2024'
    },

  ],
},
  20: {
    itemName: 'Startup20 Sabha - Townhall & Public Consultations Event 25-05-2023',
    images: [
    {
      image: 'assets/images/gallery/apis/startup20sabha/1.webp',
      thumbImage: 'assets/images/gallery/apis/startup20sabha/1.webp',
      alt: 'Startup20 Sabha - Townhall & Public Consultations Event 25-05-2023',
      title: 'Startup20 Sabha - Townhall & Public Consultations Event 25-05-2023'
    },
    {
      image: 'assets/images/gallery/apis/startup20sabha/2.webp',
      thumbImage: 'assets/images/gallery/apis/startup20sabha/2.webp',
      alt: 'Startup20 Sabha - Townhall & Public Consultations Event 25-05-2023',
      title: 'Startup20 Sabha - Townhall & Public Consultations Event 25-05-2023'
    },
    {
      image: 'assets/images/gallery/apis/startup20sabha/3.webp',
      thumbImage: 'assets/images/gallery/apis/startup20sabha/3.webp',
      alt: 'Startup20 Sabha - Townhall & Public Consultations Event 25-05-2023',
      title: 'Startup20 Sabha - Townhall & Public Consultations Event 25-05-2023'
    },
  ],
},
  21: {
    itemName: 'Wadhwani - APIS, AP Incubators Round Table Conclave 26-07-2024',
    images: [
    {
      image: 'assets/images/gallery/apis/wadhwaniapis/1.webp',
      thumbImage: 'assets/images/gallery/apis/wadhwaniapis/1.webp',
      alt: 'Wadhwani - APIS, AP Incubators Round Table Conclave 26-07-2024',
      title: 'Wadhwani - APIS, AP Incubators Round Table Conclave 26-07-2024'
    },
    {
      image: 'assets/images/gallery/apis/wadhwaniapis/2.webp',
      thumbImage: 'assets/images/gallery/apis/wadhwaniapis/2.webp',
      alt: 'Wadhwani - APIS, AP Incubators Round Table Conclave 26-07-2024',
      title: 'Wadhwani - APIS, AP Incubators Round Table Conclave 26-07-2024'
    },
    {
      image: 'assets/images/gallery/apis/wadhwaniapis/3.webp',
      thumbImage: 'assets/images/gallery/apis/wadhwaniapis/3.webp',
      alt: 'Wadhwani - APIS, AP Incubators Round Table Conclave 26-07-2024',
      title: 'Wadhwani - APIS, AP Incubators Round Table Conclave 26-07-2024'
    },
  ],
},
  22: {
    itemName: 'WADHWANI - Coffee with Startups 15-07-2024',
    images: [
    {
      image: 'assets/images/gallery/apis/wadhwanistartups/1.webp',
      thumbImage: 'assets/images/gallery/apis/wadhwanistartups/1.webp',
      alt: 'WADHWANI - Coffee with Startups 15-07-2024',
      title: 'WADHWANI - Coffee with Startups 15-07-2024'
    },
    {
      image: 'assets/images/gallery/apis/wadhwanistartups/2.webp',
      thumbImage: 'assets/images/gallery/apis/wadhwanistartups/2.webp',
      alt: 'WADHWANI - Coffee with Startups 15-07-2024',
      title: 'WADHWANI - Coffee with Startups 15-07-2024'
    },
    {
      image: 'assets/images/gallery/apis/wadhwanistartups/3.webp',
      thumbImage: 'assets/images/gallery/apis/wadhwanistartups/3.webp',
      alt: 'WADHWANI - Coffee with Startups 15-07-2024',
      title: 'WADHWANI - Coffee with Startups 15-07-2024'
    },
  ],
},
  23: {
    itemName: 'WEP - NITI Aayog Roundtable Discussion 21-12-2023',
    images: [
    {
      image: 'assets/images/gallery/apis/wepnitiaayog/1.webp',
      thumbImage: 'assets/images/gallery/apis/wepnitiaayog/1.webp',
      alt: 'WEP - NITI Aayog Roundtable Discussion 21-12-2023',
      title: 'WEP - NITI Aayog Roundtable Discussion 21-12-2023'
    },
    {
      image: 'assets/images/gallery/apis/wepnitiaayog/2.webp',
      thumbImage: 'assets/images/gallery/apis/wepnitiaayog/2.webp',
      alt: 'WEP - NITI Aayog Roundtable Discussion 21-12-2023',
      title: 'WEP - NITI Aayog Roundtable Discussion 21-12-2023'
    },
  ],
},
  24: {
    itemName: 'WEW 5,6-10-2023',
    images: [
    {
      image: 'assets/images/gallery/apis/wew/1.webp',
      thumbImage: 'assets/images/gallery/apis/wew/1.webp',
      alt: 'WEW 5,6-10-2023',
      title: 'WEW 5,6-10-2023'
    },
    {
      image: 'assets/images/gallery/apis/wew/2.webp',
      thumbImage: 'assets/images/gallery/apis/wew/2.webp',
      alt: 'WEW 5,6-10-2023',
      title: 'WEW 5,6-10-2023'
    },
  ],
},
  25: {
    itemName: 'Workshop cum Hands on Training Empowering Incubators Mastering Global Success & Sustainability In association with AP Innovation Society, PUM & aHub 01-10-2024',
    images: [
    {
      image: 'assets/images/gallery/apis/pumahub/1.webp',
      thumbImage: 'assets/images/gallery/apis/pumahub/1.webp',
      alt: 'Workshop cum Hands on Training Empowering Incubators Mastering Global Success & Sustainability In association with AP Innovation Society, PUM & aHub 01-10-2024',
      title: 'Workshop cum Hands on Training Empowering Incubators Mastering Global Success & Sustainability In association with AP Innovation Society, PUM & aHub 01-10-2024'
    },
    {
      image: 'assets/images/gallery/apis/pumahub/2.webp',
      thumbImage: 'assets/images/gallery/apis/pumahub/2.webp',
      alt: 'Workshop cum Hands on Training Empowering Incubators Mastering Global Success & Sustainability In association with AP Innovation Society, PUM & aHub 01-10-2024',
      title: 'Workshop cum Hands on Training Empowering Incubators Mastering Global Success & Sustainability In association with AP Innovation Society, PUM & aHub 01-10-2024'
    },
  ],
},
  26: {
    itemName: 'World IP Day - Women & IP Accelerating Innovation & Creativity - 26-04-2023',
    images: [
    {
      image: 'assets/images/gallery/apis/worldipday/1.webp',
      thumbImage: 'assets/images/gallery/apis/worldipday/1.webp',
      alt: 'World IP Day - Women & IP Accelerating Innovation & Creativity - 26-04-2023',
      title: 'World IP Day - Women & IP Accelerating Innovation & Creativity - 26-04-2023'
    },
    {
      image: 'assets/images/gallery/apis/worldipday/2.webp',
      thumbImage: 'assets/images/gallery/apis/worldipday/2.webp',
      alt: 'World IP Day - Women & IP Accelerating Innovation & Creativity - 26-04-2023',
      title: 'World IP Day - Women & IP Accelerating Innovation & Creativity - 26-04-2023'
    },
  ],
  },
    // {
    //   image: 'assets/images/gallery/apis/13.jpg',
    //   thumbImage: 'assets/images/gallery/apis/13.jpg',
    //   alt: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
    //   title: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
    // },
    // {
    //   image: 'assets/images/gallery/apis/14.jpg',
    //   thumbImage: 'assets/images/gallery/apis/14.jpg',
    //   alt: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
    //   title: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
    // },
    // {
    //   image: 'assets/images/gallery/apis/15.jpg',
    //   thumbImage: 'assets/images/gallery/apis/15.jpg',
    //   alt: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
    //   title: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
    // },
    // {
    //   image: 'assets/images/gallery/apis/16.jpg',
    //   thumbImage: 'assets/images/gallery/apis/16.jpg',
    //   alt: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
    //   title: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
    // },
    27: {
      itemName: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
      images: [
    {
      image: 'assets/images/gallery/apis/17.jpg',
      thumbImage: 'assets/images/gallery/apis/17.jpg',
      alt: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
      title: 'Welcoming Incubators, Institutions & Industry across Andhra Pradesh for Stakeholder Consultation & Workshop with Sri Saurabh Gaur, Secretary, ITE&C Department at APTS on 01-02-2023',
    },
    ],
  },
  //   {
  //   image: 'assets/images/gallery/apis/1.jpg',
  //   thumbImage: 'assets/images/gallery/apis/1.jpg',
  //   alt: 'Minister for Industries , Commerce, Infrastructure and IT & Electronics Communication Sri Gudivada Amarnath garu and Sri Saurabh Gaur , Secretary IT E&C , Govt of ÀP along with other officials attending the Indian Mobile Congress 2022 @ Pragathi Maidhan, New Delhi #electronics #communication #telecommunications #startups #Inn #infrastructure #innovation #entrepreneur #entrepreneurship',
  //   title: 'Minister for Industries , Commerce, Infrastructure and IT & Electronics Communication Sri Gudivada Amarnath garu and Sri Saurabh Gaur , Secretary IT E&C , Govt of ÀP along with other officials attending the Indian Mobile Congress 2022 @ Pragathi Maidhan, New Delhi #electronics #communication #telecommunications #startups #Inn #infrastructure #innovation #entrepreneur #entrepreneurship'
  // },
  // {
  //   image: 'assets/images/gallery/apis/2.jpg',
  //   thumbImage: 'assets/images/gallery/apis/2.jpg',
  //   alt: 'Minister for Industries , Commerce, Infrastructure and IT & Electronics Communication Sri Gudivada Amarnath garu and Sri Saurabh Gaur , Secretary IT E&C , Govt of ÀP along with other officials attending the Indian Mobile Congress 2022 @ Pragathi Maidhan, New Delhi #electronics #communication #telecommunications #startups #Inn #infrastructure #innovation #entrepreneur #entrepreneurship',
  //   title: 'Minister for Industries , Commerce, Infrastructure and IT & Electronics Communication Sri Gudivada Amarnath garu and Sri Saurabh Gaur , Secretary IT E&C , Govt of ÀP along with other officials attending the Indian Mobile Congress 2022 @ Pragathi Maidhan, New Delhi #electronics #communication #telecommunications #startups #Inn #infrastructure #innovation #entrepreneur #entrepreneurship'
  // },
  // {
  //   image: 'assets/images/gallery/apis/3.jpg',
  //   thumbImage: 'assets/images/gallery/apis/3.jpg',
  //   alt: 'Union Minister for Railways, Electronics & Communication & IT Shri Ashwini Vaishnav ji addressing #imc2022 # #electronics #communication #startups #innovation #entrepreneurship #visakhapatnam',
  //   title: 'Union Minister for Railways, Electronics & Communication & IT Shri Ashwini Vaishnav ji addressing #imc2022 # #electronics #communication #startups #innovation #entrepreneurship #visakhapatnam',
  // },
  // {
  //   image: 'assets/images/gallery/apis/4.jpg',
  //   thumbImage: 'assets/images/gallery/apis/4.jpg',
  //   alt: 'Union Minister for Railways, Electronics & Communication & IT Shri Ashwini Vaishnav ji addressing #imc2022 # #electronics #communication #startups #innovation #entrepreneurship #visakhapatnam',
  //   title: 'Union Minister for Railways, Electronics & Communication & IT Shri Ashwini Vaishnav ji addressing #imc2022 # #electronics #communication #startups #innovation #entrepreneurship #visakhapatnam',
  // }, {
  //   image: 'assets/images/gallery/apis/6.jpg',
  //   thumbImage: 'assets/images/gallery/apis/6.jpg',
  //   alt: 'Shri Alkesh Kumar Sharma, IAS,Secretary MeitY and Dr Rajendra Kumar, IAS Adl Secretary, MeitY addressing@ IMC 2022 #imc2022 #startups #innovation #entrepreneurship #visakhapatnam',
  //   title: 'Shri Alkesh Kumar Sharma, IAS,Secretary MeitY and Dr Rajendra Kumar, IAS Adl Secretary, MeitY addressing@ IMC 2022 #imc2022 #startups #innovation #entrepreneurship #visakhapatnam',
  // }, 

  28: {
    itemName: 'Dr Saidhiraj Amuru Asst Prof, IIT Hyderabad #IMC 2022',
    images: [
    {
    image: 'assets/images/gallery/apis/7.jpg',
    thumbImage: 'assets/images/gallery/apis/7.jpg',
    alt: 'Dr Saidhiraj Amuru Asst Prof, IIT Hyderabad #IMC 2022',
    title: 'Dr Saidhiraj Amuru Asst Prof, IIT Hyderabad #IMC 2022',
  },
],
  },
29: {
  itemName: 'Mr. K Prasad Rao has been to APIS, Vizag with proposal to work on Cyber Security and also to support core activities of APIS like promoting startups, conducting hackathons etc. #cybersecurity #startups #entrepreneur #hackathon',
  images: [
   {
    image: 'assets/images/gallery/apis/8.jpg',
    thumbImage: 'assets/images/gallery/apis/8.jpg',
    alt: 'Mr. K Prasad Rao has been to APIS, Vizag with proposal to work on Cyber Security and also to support core activities of APIS like promoting startups, conducting hackathons etc. #cybersecurity #startups #entrepreneur #hackathon',
    title: 'Mr. K Prasad Rao has been to APIS, Vizag with proposal to work on Cyber Security and also to support core activities of APIS like promoting startups, conducting hackathons etc. #cybersecurity #startups #entrepreneur #hackathon',
  },
],
},
30: {
  itemName: 'Visited Govt Degree College for Women along STPI Director Suresh garu and team.. #Visakhapatnam #women entrepreneur',
  images: [
  {
    image: 'assets/images/gallery/apis/9.jpg',
    thumbImage: 'assets/images/gallery/apis/9.jpg',
    alt: 'Visited Govt Degree College for Women along STPI Director Suresh garu and team.. #Visakhapatnam #women entrepreneur',
    title: 'Visited Govt Degree College for Women along STPI Director Suresh garu and team.. #Visakhapatnam #women entrepreneur',
  },
],
},
31: {
  itemName: 'Visited NAASCOM CoE on IoT &AI #visakhapatnam #startup #entrepreneur #nasscom #coe #iot #ai',
  images: [
  {
    image: 'assets/images/gallery/apis/10.jpg',
    thumbImage: 'assets/images/gallery/apis/10.jpg',
    alt: 'Visited NAASCOM CoE on IoT &AI #visakhapatnam #startup #entrepreneur #nasscom #coe #iot #ai',
    title: 'Visited NAASCOM CoE on IoT &AI #visakhapatnam #startup #entrepreneur #nasscom #coe #iot #ai',
  },
],
},
32: {
  itemName: 'Visited IGIAT @ Visakhapatnam along with STPI Director Suresh garu and team.. #IGIAT',
  images: [
  {
    image: 'assets/images/gallery/apis/11.jpg',
    thumbImage: 'assets/images/gallery/apis/11.jpg',
    alt: 'Visited IGIAT @ Visakhapatnam along with STPI Director Suresh garu and team.. #IGIAT',
    title: 'Visited IGIAT @ Visakhapatnam along with STPI Director Suresh garu and team.. #IGIAT',
  },
],
},
33: {
  itemName: 'Incubators, Startups, Associates had attended ICICI team visit @ AP Innovation Society, Visakhapatnam #startups #incubators #visakhapatnam #icici #entrepreneur #entrepreneurship #venturecapital #angelinvestors #fundraising #knowledgepartner',
  images: [
  {
    image: 'assets/images/gallery/apis/12.jpg',
    thumbImage: 'assets/images/gallery/apis/12.jpg',
    title: 'Incubators, Startups, Associates had attended ICICI team visit @ AP Innovation Society, Visakhapatnam #startups #incubators #visakhapatnam #icici #entrepreneur #entrepreneurship #venturecapital #angelinvestors #fundraising #knowledgepartner',
    alt: 'Incubators, Startups, Associates had attended ICICI team visit @ AP Innovation Society, Visakhapatnam #startups #incubators #visakhapatnam #icici #entrepreneur #entrepreneurship #venturecapital #angelinvestors #fundraising #knowledgepartner'
  }
  ],
},

34: {
  itemName: 'Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh',
  images: [
    {
      "image": "assets/images/gallery/apis/dronesummit/1.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/1.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/2.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/2.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/3.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/3.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/4.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/4.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/5.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/5.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/6.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/6.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/7.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/7.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/8.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/8.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/9.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/9.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/10.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/10.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/11.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/11.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/12.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/12.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/13.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/13.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/14.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/14.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/15.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/15.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/16.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/16.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/17.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/17.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/18.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/18.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/19.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/19.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    },
    {
      "image": "assets/images/gallery/apis/dronesummit/20.jpg",
      "thumbImage": "assets/images/gallery/apis/dronesummit/20.jpg",
      "title": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh",
      "alt": "Amaravati Drone Summit - 22nd, 23rd 2024, Vijayawada, Andhra Pradesh"
    }
  ]  
},
35: {
  itemName: 'Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam',
  images: [
    {
      "image": "assets/images/gallery/apis/apdts/1.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/1.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/2.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/2.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/3.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/3.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/4.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/4.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/5.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/5.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/6.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/6.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/7.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/7.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/8.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/8.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/9.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/9.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/10.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/10.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/11.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/11.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/12.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/12.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    },
    {
      "image": "assets/images/gallery/apis/apdts/13.jpg",
      "thumbImage": "assets/images/gallery/apis/apdts/13.jpg",
      "title": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam",
      "alt": "Andhra Pradesh Digital Technology Summit - 8th, 9th January 2025, Visakhapatnam"
    }
  ]  
},
}
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const itemData = this.allImages[id] || { itemName: 'No Title Available', images: [] };
    this.itemTitle = itemData.itemName;
    this.galleryImages = itemData.images;
  }

}
