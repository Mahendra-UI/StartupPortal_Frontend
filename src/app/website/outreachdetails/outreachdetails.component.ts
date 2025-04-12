import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-outreachdetails',
  templateUrl: './outreachdetails.component.html',
  styleUrls: ['./outreachdetails.component.css']
})
export class OutreachdetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  activities: any = [

    {
      "id": 20,
      "Title": "Story Telling",
      "Date": "17-09-2022",
      "Time": "09:00 AM - 12:00 PM",
      "Venue": "Zulakallu, Guntur",
      "Totalstudentparticipated": "250 +",
      "meetdetails": [
        { 0: '“People connect with other people, so make sure you focus on the real-life characters in your Story”' },
        { 1: "Story Telling can make your startup stand out from the crowd and a strategic approach to it can convert your business goals into meaningful conversations and ultimately, successful deals. KL Technology Incubators Foundation conducted a knowledge session on story telling under Startup school Pre-incubation program." }
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/19/1.png' },
        { url: 'assets/images/resources/outreach/activities/19/2.png' },
        { url: 'assets/images/resources/outreach/activities/19/3.png' },
        { url: 'assets/images/resources/outreach/activities/19/4.png' },
        { url: 'assets/images/resources/outreach/activities/19/5.png' },
      ],
    },

    {
      "id": 19,
      "Title": "Startup School-Pre Incubation Program",
      "Date": "05-11-2022",
      "Time": "09:00 AM - 03:00 PM",
      "Venue": "Zulakallu, Guntur",
      "Totalstudentparticipated": "100 +",
      "meetdetails": [
        { 0: "Startup School-Pre Incubation Program KL Technology Incubators Foundation organized a Knowledge session on Unit Economics. The aspiring entrepreneurs walked through the Unit Economics under the guidance of Mr. Sandeep Mehto, Co-Founder, Bharat Calling & Vikalp" },
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/19/1.png' },
        { url: 'assets/images/resources/outreach/activities/19/2.png' },
        { url: 'assets/images/resources/outreach/activities/19/3.png' },
        { url: 'assets/images/resources/outreach/activities/19/4.png' },
        { url: 'assets/images/resources/outreach/activities/19/5.png' },
      ],
    },

    {
      "id": 18,
      "Title": "Workshop on AI Technology & Services",
      "Date": "04-11-2022",
      "Time": "09:00 AM - 03:00 PM",
      "Venue": "Zulakallu, Guntur",
      "Totalstudentparticipated": "400 +",
      "meetdetails": [
        { 0: "Workshop on AI Technology & Services at  KL Technology Incubators Foundation" },
        { 1: "Expert session by Mr. Ajay Kabadi, Founder & CEO, DocketRun Tech Pvt. Ltd., about Artificial intelligence (AI), types of AI and applications at KL Technology Incubators Foundation, KL University on November 04th 2022." },
        { 2: "This Knowledge session covered topics of Entrepreneurial opportunities and Artificial intelligence., which are useful for Startups, Innovators, and aspiring Entrepreneurs for Solving real world problems." },
      ],
      "participants": [
        { 0: 'Mr. Govil Alok, CEO of ACIC-KL Startups Foundation' },
        { 1: 'Bheema Lingam Nageswara Rao, head of the kalamkari unit' },
        { 2: 'Mr. L. babu Hari Krishna – Manager, ACIC-KL Startups Foundation' },
        { 3: 'Mr. M. Sai Kiran – Technical and Outreach manager' },
        { 4: 'G. Gayatri – Innovation Associate' },
        { 5: 'Ch. Sadhvi- Innovation Associate' },
        { 6: 'Y. Lavanya – Office Coordinator' },
        { 7: 'KISSS Startup team' }
      ],

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/18/1.png' },
        { url: 'assets/images/resources/outreach/activities/18/2.png' },
        { url: 'assets/images/resources/outreach/activities/18/3.png' },
        { url: 'assets/images/resources/outreach/activities/18/4.png' },
      ],
    },

    {
      "id": 17,
      "Title": "Workshop on CoE-AR&VR (Meta)",
      "Date": "21-12-2022 to 24-12-2022",
      "Time": "03:00 AM - 04:00 PM",
      "Venue": "AP Innovation Society, Innovation Valley, Visakhapatnam",
      "Eventtype": "Master class on CoE - AR & VR (Meta) (Virtual Mode)",
      "speakers": "Mr. Shashaank Singh",
      "topics": "Fundamentals of Augmented Reality – How to Build an AR Experience, Virtual Reality Technology: Reality for the future of work, Opportunities of Web3.0 for Businesses, Everything about the Metaverse.",
      "coveredstatement": "what will be covered?",
      "coveredlist": [
        { 0: "This seminar will cover Introduction to Virtual Reality, Augmented Reality, Mixed Reality, Metaverse." },
        { 1: "Understanding different practical applications of each, know more about what is Good VR and Bad VR." },
        { 2: "This will also cover hands-on experience with this cutting edge technology, understand in depth knowledge of how VR Content is developed; and which tool will help you to excel in this cutting edge technology." },
      ],
      "virtualrealitylist": [
        { 0: "Experience Latest VR HMD" },
        { 1: "Understand what is 3 DOF and 6 DOF" },
        { 2: "Experience different VR experiences which we have created in our studio and some of the best experiences done globally" },
        { 3: "Understand CG, VFx and Live shoot VR experiences from industry experts" },
        { 4: "What is Good VR | Bad VR, and why this is the most important aspect Advantages and disadvantages of VR" },
      ],
      "augumentedrealistylist": [
        { 0: "Know exactly what is AR" },
        { 1: "Checkout a variety of practical examples of AR done at our studio and some globally" },
        { 2: "What is the future of AR and where it is headed" },
        { 3: "What tools will help you to create AR experiences and how to learn them" }
      ],
      "metaverselist": [
        { 0: "Basics of Metaverse" },
        { 1: "Understand Metaverse of Meta/Decentraland/Sandbox, and what’s the difference & most importantly where’s the future…!" },
        { 2: "Understand WHY so much traction for Metaverse now" },
        { 3: "Hands on experience of “Real” Metaverse as on today, which will give you glimpse future possibilities" },
        { 4: "Hands on experience of Decentraland’s Metaverse and visit our OWNED “Digital Art VRe’s” Land and visit our Virtual Studio" }
      ],
      "Participants": [
        { 0: "Siddarth, Mighty Minds Digital Private Limited" },
        { 1: "Judah, Seldom Technologies Private Limited" },
        { 2: "Narendra k, Skylite" },
        { 3: "Ramesh, Eastpole Soft Pvt Ltd" },
        { 4: "Siva Kumar" },
        { 5: "Sushanth, Jarvicons Pvt Ltd" },
        { 6: "Sabitha, Jubean Game Studios LLP" },
        { 7: "Paradh, Young Minds Technology Solutions Pvt Ltd" },
        { 8: "Varu Kumar R, Hawkvisum Pvt Ltd" },
        { 9: "Aditya Tekumalla, Augwir Technologies Pvt Ltd" },
        { 10: "Siva Prakash, Adonia Technologies Pvt Ltd" },
        { 11: "Ronanki Dileep Kumar, VR & AR Labd Pvt Ltd" },
        { 12: "Jyothi p, Aimxcel Innovative Solutions LLP" },
        { 13: "Uday, Antar IoT" },
        { 14: "Chandra, Eastpole soft Pvt Ltd" },
        { 15: "Shareef, At Fingertip IT Innovations Pvt Ltd" },
        { 16: "Arava Poojitha, DSIGNPIX LLP" }
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/17/1.png' },
        { url: 'assets/images/resources/outreach/activities/17/2.png' },
        { url: 'assets/images/resources/outreach/activities/17/3.png' },
        { url: 'assets/images/resources/outreach/activities/17/4.png' },
        { url: 'assets/images/resources/outreach/activities/17/5.png' },
        { url: 'assets/images/resources/outreach/activities/17/6.png' },
        { url: 'assets/images/resources/outreach/activities/17/7.png' },
        { url: 'assets/images/resources/outreach/activities/17/8.png' },
      ],
    },

    {
      "id": 16,
      "Title": "Student Entrepreneurship program",
      "Date": "17-09-2022",
      "Time": "09:00 AM - 12:00 PM",
      "Venue": "Government Degree College for Women, Visakhapatnam",
      "Totalstudentparticipated": "200 +",
      "meetdetails": [
        { 0: 'Visited Govt Degree College for Women along STPI Director Suresh garu and team' }
      ],

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/16/1.png' },
        { url: 'assets/images/resources/outreach/activities/16/2.png' },
        { url: 'assets/images/resources/outreach/activities/16/3.png' },
        { url: 'assets/images/resources/outreach/activities/16/4.png' },
        { url: 'assets/images/resources/outreach/activities/16/5.png' },
      ],
    },
    {
      "id": 15,
      "Title": "Outreach Program on Upliftment and encouragement of artisans",
      "Date": "30-11-2022",
      "Time": "09:00 AM - 03:00 PM",
      "Venue": "Pedana",

      "Agenda": [
        { 0: 'To educate artisan community about the socio-economic benefits that traditional practices and technology together would bring' },
      ],
      "meetdetails": [
        { 0: "Mr. L. Babu Hari Krishna, manager of ACIC-KL Startups Foundation has, initiated the event’s inaugural by extending his support to the artisans and all the organizers who have made the event possible. He took the chance to speak about the purpose of the event and how it was accustomed to support the artisan community to increase their economic conditions. He further continued his talk by citing out the opportunities made available for the artisan community by the technology and by different government bodies. By taking this opportunity, he talked about ACIC-KL Startups Foundation and about the aim of the organization to support the rural communities. He concluded his speech by urging the artisans to explore the opportunities provided to them by AIM and help boost their socio- economic position in the country" },
        { 1: "The founder and co-founder of kisss, Mr. Rajayogi Nandina and Pranay Kanchanapalli took on to the stage to interact with the artisans and thanked them for their effort to support their start-up’s journey into this field of work. He talked about how kisss would work out in support of the artisans by providing them a certain percentage in every sale they make with their support. The cofounder of Kisss further talked about the mission and vision of kiss. He recalled the moment when they decided to do something about the artisan community as they were going into extinct. He talked about the time of inception of kisss when they decided to start a business in the fashion industry." },
        { 2: "Mr. Govil Alok, CEO of ACIC-KL Startups Foundation, was later invited on the stage to share his knowledge and insights from his experience. He started with greetings of the day and went on to explain the origins of kalamkari. He in detail spoke about how the practice of kalamkari originated way back in the era of Ramayana and Mahabharata and was used to depict and record the information using this art. He further interacted with the artisans by asking questions about the current practices and innovations being practiced in the art of kalamkari. With the insights from the interaction, he further explained about the mission and vision of AIM and how it is working to support the grassroot innovations. He also highlighted the benefits of inculcating technology along with the traditional practices would lead to the further development of the artisans citing out the example of kisss. During the talk, he spoke about the different possibilities and programs like the Community innovator fellowship program that ACIC-KL Startups Foundation is launching to support the grassroot innovators of the communities. He concluded his talk by extending his support and interest for various innovations that could be created together with technology and traditional practices." },
        { 3: "Bheema lingam Nageswara Rao garu later took on to the stage to extend his gratitude and share his wisdom for the Startups and artisans present there. He explained about the current uncertainty in the field of kalamkari due to the shift in consumer demand in the fashion industry. The problem being the rising demand in westernization in fashion industry that is resulting in the decline of demand in the art form sector. In his talk, he also spoke about the problems in the practices of kalamkari, out of few were the tedious process of washing the cloth before printing and the storage for the clothes which acted as the problem statement for our Startups to bring out new innovations. He took a leave by expressing his gratitude for the ACIC-KL Startups Foundation and kisss team for reaching out to them and supporting them for their further growth." },
        { 4: "In the end, the ACIC KL Startups Foundation team felicitated Mr. Bheema lingam Nageswara Rao a shawl as a token of appreciation for his support and interest towards the team." },
        { 5: "Pranay, co-founder of kiss concluded the event by thanking all the artisans for coming there and extending their support and efforts in teaching them and providing insights about the kalamkari from their vast experience. He also thanked ACIC-KL Startups Foundation for their support and guidance throughout the event." }
      ],
      "participants": [
        { 0: 'Mr. Govil Alok, CEO of ACIC-KL Startups Foundation' },
        { 1: 'Bheema Lingam Nageswara Rao, head of the kalamkari unit' },
        { 2: 'Mr. L. babu Hari Krishna – Manager, ACIC-KL Startups Foundation' },
        { 3: 'Mr. M. Sai Kiran – Technical and Outreach manager' },
        { 4: 'G. Gayatri – Innovation Associate' },
        { 5: 'Ch. Sadhvi- Innovation Associate' },
        { 6: 'Y. Lavanya – Office Coordinator' },
        { 7: 'KISSS Startup team' }
      ],

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/15/1.png' },
        { url: 'assets/images/resources/outreach/activities/15/2.png' },
        { url: 'assets/images/resources/outreach/activities/15/3.png' },
        { url: 'assets/images/resources/outreach/activities/15/4.png' },
      ],
    },
    {
      "id": 14,
      "Title": "Student Entrepreneurship program",
      "Date": "15-09-2022",
      "Time": "09:00 AM - 12:00 PM",
      "Venue": "Government Ploytechnic College, Visakhapatnam",
      "Totalstudentparticipated": "200 +",
      "meetdetails": [
        { 0: 'Visited Govt Ploytechnic College @ Visakhapatnam along with STPI Director Suresh garu and team' }
      ],

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/14/1.png' },
        { url: 'assets/images/resources/outreach/activities/14/2.png' },
        { url: 'assets/images/resources/outreach/activities/14/3.png' },
        { url: 'assets/images/resources/outreach/activities/14/4.png' },
      ],
    },
    {
      "id": 13,
      "Title": "Student Entrepreneurship program",
      "Date": "12-09-2022",
      "Time": "09:00 AM - 12:00 PM",
      "Venue": "Mohan Babu University, Tirupati",
      "Totalstudentparticipated": "200 +",
      "meetdetails": [
        { 0: "From a young village boy to a teacher, actor, producer, writer, Member of Parliament, philanthropist, and an educationist – it has been 3 decades of being at the service of my people. Yet, every bit of this enchanting journey runs fresh in my mind. After all, at heart, I am still that dreamer from Modhugulapalem who followed his father's footsteps to become an educator. A proud son of a dedicated school headmaster; it humbles me to have continued his legacy, first as a teacher myself and then as the Chairman of the renowned Sree Vidyanikethan Educational Trust (SVET)." },
        { 1: 'Ever since its inception in 1992, the seed of SVET has flourished into a large Kalpavriksha – helping thousands of young learners fulfill their aspirations. This in turn has led to SVET institutions garnering an immense amount of trust and reliance from students, their families and the industry alike. With this, my long standing dream of helping the nation’s youth to realize their potential is also culminating into a larger vision. It is gratifying to witness all the years of hard work, commitment, and passion with SVET now transforming into a universe of possibilities at Mohan Babu University in Tirupati.' },
        { 2: "MBU's advanced curriculum, expert mentorship, best-in-class facilities with a safe 5 star rated campus and 65+ clubs are poised to help students innovate, learn and lead the next, today. In a constantly changing world, only talent that is future-ready can take the baton ahead. Therefore, MBU focuses on delivering a unique blend of academic brilliance, discipline and dynamism. Groomed in such an inspiring culture, a community of thousands of students is preparing for a future of success. I am pleased to see them soar high with rewarding opportunities in companies like Google and Amazon this academic year. I am confident that each one of our students is nurtured and well supported to make a difference in a unique way." }
      ],

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/13/1.png' },
        { url: 'assets/images/resources/outreach/activities/13/2.png' },
        { url: 'assets/images/resources/outreach/activities/13/3.png' },
        { url: 'assets/images/resources/outreach/activities/13/4.png' },
        { url: 'assets/images/resources/outreach/activities/13/5.png' },
      ],
    },
    {
      "id": 12,
      "Title": "APSCHE Committee Meeting",
      "Date": "02-09-2022",
      "Time": "09:00 AM - 12:00 PM",
      "Venue": "Andhra University College of Engineering Vizag",
      "Totalstudentparticipated": "20 +",
      "meetdetails": [
        { 0: 'APSCHE committee meeting on strengthening the Innovation Ecosystem by setting up Entrepreneurship Startup & Innovation Centres among the Colleges of AP.' }
      ],

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/12/1.png' },
        { url: 'assets/images/resources/outreach/activities/12/2.png' },
      ],
    },

    {
      "id": 11,
      "Title": "Start-up Pitch – EDUMOON",
      "Date": "20-09-2022",
      "Time": "09:00 AM - 12:00 PM",
      "Venue": "Andhra University College of Engineering Vizag",
      "Eventtype": "EduMoon",
      "Totalstudentparticipated": "2000 +",
      "meetdetails": [
        { 0: 'EduMoon, an ed-tech startup by students of Vizag, has been selected for TiE University Global Pitch Competition officials. This startup is founded by Mahidhar Ponnada and Vikas Kapuganti of Andhra University(AU). This ed-tech startup is one of the three teams selected from Andhra Pradesh. And is also among the 90 teams across the world from 24 countries.' },
        { 1: 'The startup EduMoon is an interactive student community with more than 12,000 student members. They provide an extensive range of courses, internships, webinars, and resources for engineering students through their expert team. It is mentored and supported by Vice-Chancellor of Andhra University Prof PVGD Prasad Reddy, Principal, Andhra University College of Engineering (AUCE), P. Srinivasa Rao, CEO, AU Incubation Center Ravi Eswarapu, and Professor D. Lalitha Bhaskari from Department of Computer Science Engineering AUCE.' },
        { 2: 'In early 2022 when education witnessed a massive shift from offline to online due to the COVID-19 pandemic. Vikas and Mahidhar noticed a lack of a proper student community where students could support each other. This thought laid the foundation for their startup “EduMoon”. A company focused on providing academic and career solutions to students par excellence through result-driven and coherent learning methodologies.' },
        { 3: 'EduMoon is an ISO 9001:2015 certified company with a large student community. It is also recognized by Startup India, with a team of 200+ members working across the nation to engage this nationwide community.' },
        { 4: 'EduMoon, an education-based startup initiated by Mahidhar Ponnada and Vikas Kapuganti from Andhra University(AU), has been selected for TiE University Global Pitch Competition, officials from the AU announced here on Monday.' },
        { 5: 'AU authorities said that the startup is among the 90 teams from across the world from 24 countries who were selected. This is one among the three teams that were selected from Andhra Pradesh.' },
        { 6: 'EduMoon is an interactive student community with more than 12,000 members. They provide an extensive range of courses, internships, webinars, and resources for engineering students through their expert team.' },
        { 7: 'This startup is mentored and supported by Vice-Chancellor P.V.G.D. Prasad Reddy, Principal, Andhra University College of Engineering, P. Srinivasa Rao, CEO, Andhra University Incubation Center Ravi Eswarapu, and Professor D. Lalitha Bhaskari.' }
      ],

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/11/1.png' },
      ],
    },

    {
      "id": 10,
      "Title": "Promoting Innovation and Startups",
      "Date": "20-09-2022",
      "Time": "09:00 AM - 12:00 PM",
      "Venue": "IGIAT Visakhapatnam",
      "Eventtype": "APIS Visited IGIAT Visakhapatnam",
      "Totalstudentparticipated": "200 +",
      "meetdetails": [
        { 0: 'Visited IGIAT @ Visakhapatnam along with STPI Director Suresh garu and team.' },
        { 1: 'The main objective of the institute is to act like a finishing school and to provide training in advanced technologies to the students of various educational institutes, job seekers and industrial personnel with a special focus on the disadvantaged groups of the Society.' }
      ],
      "vision": "To become a “Nerve Centre of Industry” for empowering society through advanced technologies",
      "mission": "To provide high quality, employment oriented training & qualification, consultancy and related services in advanced technologies, aimed at making Industry globally competitive and at improving employability of technical personnel including the disadvantaged groups of the society.",

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/10/1.png' },
        { url: 'assets/images/resources/outreach/activities/10/2.png' },
        { url: 'assets/images/resources/outreach/activities/10/3.png' },
        { url: 'assets/images/resources/outreach/activities/10/4.png' },
      ],
    },

    {
      "id": 9,
      "Title": "Promoting start-ups in AP",
      "Date": "20-08-2022",
      "Time": "09:00 AM - 12:00 PM",
      "Venue": "AP Innovation Society, Visakhapatnam",
      "Eventtype": "Centurion University had visited APIS",
      "Totalstudentparticipated": "20 +",
      "meetdetails": [
        { 0: 'BBA students of Centurion University had visited ÀPIS for visit and interactive session, had explained APIS activities in promoting startups in AP' },
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/9/1.png' },
        { url: 'assets/images/resources/outreach/activities/9/2.png' },
        { url: 'assets/images/resources/outreach/activities/9/3.png' },
        { url: 'assets/images/resources/outreach/activities/9/4.png' },
      ],
    },
    {
      "id": 80,
      "Title": "Pre-Logistics Hackathon Virtual workshop with Directors/SPOCS of Incubators",
      "Date": "01-12-2022",
      "Time": "03:00 PM",
      "Venue": "AP Innovation society, Innovation Valley, Visakhapatnam",
      "Eventtype": "Pre-Logistics Virtual Workshop",
      "smartshippingstatement": "Are you able to unlock the potential of Smart Shipping?",
      "smartshippingcontent": [
        { 0: 'Within Andhra Pradesh there is around 1000 km of navigable inland waterways on which more than 70 million ton is transported every year. Although this already gets a lot of trucks of the road, there is still a lot of capacity available that is underused which could improve the mobility and ecological transport issues in Andhra Pradesh. One of the innovations that could realise this potential is Smart Shipping.' },
        { 1: 'Smart shipping in inland navigation can be understood as both the optimised and standardized data sharing between barges, infrastructure, and waterway managers as the navigation with autonomous / automated barges. It is on this last element this hackathon is going to focus.' },
        { 2: 'If we look towards the automatisation in other modi, and especially trucks, we see that different efforts are made to make everything fully autonomous. This trend stems from the fact that efficiency, gained from partly automated tasks, is limited compared to the extra risks. (f.e. attention deficit in semi-autonomous vehicles).' },
        { 3: 'This is completely different with the inland waterway sector, and in extension the maritime, as an enormous economic potential can be achieved if one person could remotely control a vessel.' },
        { 4: 'This will make inland navigation more cost-effective, which would results in a more competitive position with rail & road and further realise a modal shift.' },
        { 5: 'Although this sounds promising and there are already different tests ongoing in Andhra Pradesh, there are still some discussions and rough waters ahead. Nevertheless, we are looking forward to map these undiscovered waters.' },
        { 6: 'Therefore Andhra Pradesh Innovation Society and Directors/SPOCS of Incubators are challenging you to bring your talent to the table and together with our participants unlock the potential of Smart Shipping.' },
        { 7: 'This Hackathon is a FLOAT event.' }
      ],
      "Outcomes": [
        { 0: 'Presentation on APIS Activities' },
        { 1: 'Presentation on Logistics Start-ups' },
        { 2: 'Pre- Logistics Hackathon Virtual Workshop conducted for chalking the way forward' }
      ],
      "Partipants": [
        { 0: "VTEC - VITAP Technology Entrepreneurship Centre -  Dr. Ameet Chavan Director(IIEC)" },
        { 1: "ANGRAU POSHAN INCUBATOR – Dr. P Bala Hussain Reddy" },
        { 2: "Nasscom -  Om Prakash & Raghu" },
        { 3: "Ravi Eswarapu, CEO, A-Hub" },
        { 4: "K V S R Murthy, Dean (R&D) - Aditya College of Engineering & Technology" },
        { 5: "Mr. KVSN Prasad, Head - V-Hub Innovation Centre, Visakhapatnam" },
        { 6: "Dr. Govil Alok. CEO, ACIC-KL" },
        { 7: "Dr. Ravi Saripalli, CEO, Gayathri vidya Parishad Incubation center, Visakhapatnam" },
        { 8: "Dr. Chava Srinivas, Professor & Head, VR Siddhartha TBI Foundation, Vijayawada" },
        { 9: "Entrepreneurship Centre Andhra Technology Business Incubator (Narasaraopeta Engineering college) - Dr. M. Srinivasa Kumar, Principal" },
        { 10: "KLTIF-TBI - Mr. A. Narasimha Rao, Asst. Manager" }
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/8/1.png' },
        { url: 'assets/images/resources/outreach/activities/8/2.png' },
        { url: 'assets/images/resources/outreach/activities/8/3.png' },
        { url: 'assets/images/resources/outreach/activities/8/4.png' },
        { url: 'assets/images/resources/outreach/activities/8/5.png' },
      ],
    },
    {
      "id": 8,
      "Title": "Mock Shark Tank - Idea Pitch Event",
      "Date": "21-10-2022",
      "Time": "09:00 AM to 12:00 PM",
      "Venue": "KL Technology Incubators Foundation",
      "Totalstudentparticipated": "250 +",
      "meetdetails": [
        { 0: '"A great thing about new beginnings is that enthusiastic entrepreneurs bring new energy to the Ecosystem.”' },
        { 1: "KL Technology Incubators Foundation at KL University Mock Shark Tank - Idea Pitch Event a platform for Innovators and Ideators having zeal to bring a positive change with their innovative solutions. Event witnessed 50+ teams, 150+ participants, Panel of experts from Andhra Pradesh Innovation Society and Makeroom for India Pranav Hebbar Selected Ideas will get an opportunity to be part of Pre Incubation Program at KL Technology Incubators Foundation Veena Hanamsaga"},
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/8/1.png' },
        { url: 'assets/images/resources/outreach/activities/8/2.png' },
        { url: 'assets/images/resources/outreach/activities/8/3.png' },
        { url: 'assets/images/resources/outreach/activities/8/4.png' },
        { url: 'assets/images/resources/outreach/activities/8/5.png' },

      ],
    },
    {
      "id": 7,
      "Title": "Industry-Academia Conclave",
      "Date": "20-08-2022",
      "Time": "09:00 AM to 12:00 PM",
      "Venue": "Mohan Babu University, Tirupati",
      "Eventtype": "Industry - Academia Conclave by CII South",
      "Totalstudentparticipated": "230 +",
      "meetdetails": [
        { 0: 'Industry - Academia Conclave by CII South Zone held at Mohan Babu University, Tirupati. Academic representatives - Prof Satyanarayana, Director IIT Tirupati, Prof Somayajulu, IIIT Kurnool and Industry representatives from Dixon, Aurobindo Pharama, Brandix, Electric Castings etc have attended. IIT Jammu is hosting Industry-Academia Conclave 2022 during 20-21 August 2022. The theme of this conclave is "Bridging Industrial Opportunities of J&K".' },
        { 1: 'It is expected that the IAC 2022 will be attended by Government officials, MNCs, Academician, startups, Researchers, and Students across India. It gives an immense pleasure to invite you to attend the Industry-Academia Conclave 2022.' },
      ],
      "majorattractionstatment": "The major attraction of Conclave (based on the thrust area):",
      "majorattractionlist": [
        { 0: "5 Keynote Talk" },
        { 1: "4 Pannel Discussions" },
        { 2: "6 Industry Talk" },
        { 3: "Exhibition" },
        { 4: "Poster Session" },
        { 5: "Startups Showcase" }
      ],
      "encouragestatment": "We encourage faculty/staff/Student participation in IAC-2022. Following are the benefits:",
      "encouragelist": [
        { 0: "To explore Internship & placement opportunities" },
        { 1: "Interaction with Industry Expertise from various domains" },
        { 2: "Discussion with eminent persons from Academia" },
        { 3: "A registration kit will be provided" },
        { 4: "Opportunities to interact with start-ups" },
        { 5: "Learning about various funding opportunities" }
      ],
      "showcase": [
        { 0: "During Conclave, a special session is devoted to a Poster presentation by the researchers of IIT Jammu to show the research outcome to the Industry, Funding agencies, Startups, etc. This will help researchers to get inputs from experts from Industry/Academia and the possibility of Job/Internship opportunities. The research groups/individuals are requested to kindly share their research poster in by 10th May 2022. Please remember, posters can be prepared from published work or new work." },
        { 1: "The submitted poster will be printed by the IAC team. The research posters will be displayed at the Conclave venue and the author need to be present. Please note the copyrights of these posters will remain with the authors." },
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/7/1.png' },
        { url: 'assets/images/resources/outreach/activities/7/2.png' },
      ],
    },
    {
      "id": 6,
      "Title": "ICAIs MsME bus Yatra",
      "Date": "18-11-2022",
      "Time": "09:00 AM to 09:00 PM",
      "Venue": "AP Innovation Society (APIS)",
      "Eventtype": "Ease of Doing Business for MSMEs",
      "Totalstudentparticipated": "130 +",
      "Eodbmsme": [
        { 0: 'The Institute of Chartered Accountants of India (ICAI) has launched a 75-day-long MSME Yatra programme from Mumbai to support MSMEs in scaling up and capacity building.' },
        { 1: 'The ICAI MSME Yatra aims to coordinate, synergize and leverage the various strands of excellence driving innovation and entrepreneurship, said the statement from ICAI' },
        { 2: 'The Yatra will be held during the course of four months – August, September, October, and November – marking its end on November 18, 2022. The Yatra Vehicle will travel for more than 14,000 kms covering 75 cities of the Western, Northern, Central, Eastern, and Southern parts of the country to showcase the MSME ecosystem.' },
        { 3: 'ICAI’s initiative will provide a platform for improving MSMEs access to knowledge, credit, and marketing competitiveness.' },
        { 4: 'Additionally, ICAI is also introducing an MSME SETU Programme, a platform to connect various stakeholders and MSMEs through MSME Camp and help desk for the new as well as existing MSMEs.' },
        { 5: 'The programme will also have experts from SIDBI, NSIC, CAs, DIC etc to assist and provide solutions to MSMEs.' }
      ],

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/6/1.png' },
        { url: 'assets/images/resources/outreach/activities/6/2.png' },
        { url: 'assets/images/resources/outreach/activities/6/3.png' },
        { url: 'assets/images/resources/outreach/activities/6/4.png' },
        { url: 'assets/images/resources/outreach/activities/6/5.png' },
      ],
    },
    {
      "id": 50,
      "Title": "MOU signing ceremony between ACIC-KL Startup Foundation & Glovill Foundation",
      "Date": "27-10-2022",
      "Time": "10:00 AM to 05:00 PM",
      "Venue": "4-17, T.R. Kandriga Vadamalapet, Tirupati, Chittoor District, A.P",
      "Totalstudentparticipated": "330 +",
      "meetdetails": [
        { 0: "Mr. Noothan venkatesh varma gave a Brief intro of Self Help Groups, their Work and further thoughts to achieve future Goals in the development of their community. He introduced Mr. Govil Alok CEO, of ACIC-KL Startups Foundation & and his Contribution in development of communities through Incubation to the community members." },
        { 1: "Mr. Govil Alok, CEO of ACIC-KL Startups Foundation, given brief on “The Importance of Self Help Groups for the community Development. Importance of women empowerment in rural areas. In olden days Farming is Classic and traditional approach but as in present due to tech interruption we renamed classic and traditional mode of farming as Organic Farming. However now a day it been a difficult task to get better yield with Organic Farming due to the evolution of pest genetics and new insects. We need to think out of the box and must bring better solution to encourage Organic farming. How can ACIC- KL Startups Foundation can be supportive to the Ideas in the development of Rural Communities?”" },
        { 2: "Mr. Nagaraja Prakasam, Angel Investor, Mentor, Fund Advisor insisted Farmers and interested youngsters to come up with an idea/innovation in farming sectors. Gave few inputs for Organic farmers for the better yield." }
      ],
      "Objective": [
        { 0: "MOU between ACIC-KL Startups Foundation and Glovill Foundation is to identifying potential self- help groups in communities and provide them with master sessions, connect with mentors to develop their entrepreneur skills and community" },
        { 1: "It is an interaction session with the village farmers, self-help group –women empowerment on the development models and its Primary goals, and How do it helpful for the community members" }
      ],
      "Agenda": [
        { 0: 'To sign MOU with Glovill Foundation' },
        { 1: 'To promote information about Incubation' },
        { 2: 'What is ACIC-KL Startups Foundation& how it works? How it can be Helpful in Community Development?' },
      ],
      "Partipants": [
        { 0: "Mr. Govil Alok, CEO of ACIC-KL Startups Foundation" },
        { 1: "Mr. Noothan Venkatesh varma, Director, Glovill Foundation" },
        { 2: "Mr. Nagaraja (Naga) Prakasam, Angel Investor, Mentor, Fund Advisor" },
        { 3: "Mr. Babu Hari Krishna Lanka, Incubation manager of ACIC-KL Startups Foundation" },
        { 3: "Mr. M. Sai Kiran – Technical and Outreach manager of ACIC-KL Startups Foundation" },
      ],
      "whocanapplystatment2": "Participants will have to come up with solutions that can be called ‘innovative’, ‘radical’, ‘unconventional’ or ‘out-of-the-box’. The solutions provided should be thoroughly researched, must not include any sort of plagiarism, carried out as a student effort with a feasible work plan and should be presented with required deliverables",
      "whocanapplydeliverableslist": [
        { 0: "ITAAP had an MOU with APIS formally in the presence of HMIT Shri Gudivada Amarnath garu" },
        { 1: "There has been good traction in the startup ecosystem for the past 4-5 months under the leadership of Shri Saurabh Gaur" },
        { 2: "ITAAP has been actively working with various stakeholders like STPI, APIS, NASSCOM, The AP Startups & AHub .etc of the ecosystem" },
      ],

      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/5/1.png' },
        { url: 'assets/images/resources/outreach/activities/5/2.png' },
        { url: 'assets/images/resources/outreach/activities/5/3.png' },
      ],
    },
    {
      "id": 5,
      "Title": "Startup Carnival",
      "Date": "21-10-2022",
      "Time": "09:00 AM to 12:00 PM",
      "Venue": "KL Technology Incubators Foundation",
      "Totalstudentparticipated": "250 +",
      "meetdetails": [
        { 0: "Startup Interaction with Industry Leaders, Mentors and Investors at Startup Carnival" }
      ],
      "Partipants": [
        { 0: "Mr. Vijetha Shastry, Associate Director, Dexter Capital" },
        { 1: "Mr. Rathnakar Samavedam, Investment Director & CEO, Hyderabad Angels" },
        { 2: "Dr. Zahoorullah S MD, CEO, TBI Osmania University" },
        { 3: "Mr. SANJEEV V, Joint Director-Software Technology Park of India" },
        { 4: "Mr. Deepaq V Vartak, Business Strategy, Management Consultant, Sales Growth Specialist" },
        { 5: "Mrs. Jhansi Lakshmi Gorla, Director Technical, ALEAP" },
        { 6: "Mr. Anudeep Chappa, Executive Director, TiE" },
        { 7: "Mr. Rajendra Prasad, Founder, Clevinno Technologies" }
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/5/1.png' },
        { url: 'assets/images/resources/outreach/activities/5/2.png' },
        { url: 'assets/images/resources/outreach/activities/5/3.png' },
        { url: 'assets/images/resources/outreach/activities/5/4.png' },
        { url: 'assets/images/resources/outreach/activities/5/5.png' },

      ],
    },
    {
      "id": 4,
      "Title": "FINTECH Innovation Challenge",
      "Date": "17-10-2022",
      "Time": "09:00 AM to 09:00 PM",
      "Venue": "AP Innovation Society (APIS)",
      "Eventtype": "Hackathon",
      "Totalstudentparticipated": "330 +",
      "abouttheorg": "With a mission to imbibe the culture of innovation and empower dreamers to become doers, so that their visionary ideas can transform into successful businesses. AP Innovation Society (APIS) in partnership with various Government Departments in Andhra Pradesh organising a series of Innovation Challenges for the aspiring innovators/start-ups/students to device creative, sustainable and impactful solutions.",
      "aboutthechallenge": [
        { 0: 'AP Innovation Society (APIS) in partnership with APCFSS & FinBlue STPI CoE, Chennai, is launching the "FINTECH Innovation Challenge" for scouting innovations and start-ups engaged in using emerging technologies such as Internet of Things (IoT), Artificial Intelligence (AI), Machine Learning (ML), Data Science, Analytics, Smart Decision tools, Block chain & Robotics to democratize financial services in the state by way of improvement in the existing procedures and identification of bottlenecks and gaps that can be addressed primarily in the stated thematic areas' },
        { 1: 'The goal of this challenge is to bring together stakeholders from the Indian start-up ecosystem, such as entrepreneurs, industrialists, investors, experts, government, and aspiring start-ups, to test., refine, and validate their solutions' },
        { 2: "The problem statements are devised in close communication with the State Government Departments and industry partners for the start-ups to showcase their capabilities in these emerging technologies." },
        { 3: "Apart from cash incentives of up to INR 50 Lakh distributed among Winners, 1st Runners and 2nd Runners teams the selected start-ups will also get a chance to get incubation, mentoring, access to funding schemes & procurement support for prototyping as well as piloting opportunities in the state." }
      ],
      "whocanapplystatment1": "If you are a start-up, an early-stage organization or working in collaboration to solve problems in the FINTECH Sector, you are eligible to apply meeting the following requirements :",
      "Whocanapplylist": [
        { 0: "Demonstrating the existence of a legal structure: Company should comply with the start-up definition as defined by DPIIT at http://startupindia.gov.in" },
        { 1: "Products/ Services should not violate/breach/copy any product already launched and/or copyrighted or patented" },
        { 2: "IPR/ Patent registered for the product (if any) should be owned by the nominating Indian company" },
        { 3: "The product/ Prototype/ MVP submitted should have been designed and developed in India" },
      ],
      "whocanapplystatment2": "Participants will have to come up with solutions that can be called ‘innovative’, ‘radical’, ‘unconventional’ or ‘out-of-the-box’. The solutions provided should be thoroughly researched, must not include any sort of plagiarism, carried out as a student effort with a feasible work plan and should be presented with required deliverables",
      "whocanapplydeliverableslist": [
        { 0: "ITAAP had an MOU with APIS formally in the presence of HMIT Shri Gudivada Amarnath garu" },
        { 1: "There has been good traction in the startup ecosystem for the past 4-5 months under the leadership of Shri Saurabh Gaur" },
        { 2: "ITAAP has been actively working with various stakeholders like STPI, APIS, NASSCOM, The AP Startups & AHub .etc of the ecosystem" },
      ],

      "Photographs": [
        // { url: 'assets/images/resources/outreach/activities/4/1.png' },
        // { url: 'assets/images/resources/outreach/activities/4/2.png' },
        // { url: 'assets/images/resources/outreach/activities/4/3.png' },
        // { url: 'assets/images/resources/outreach/activities/4/4.png' },
        // { url: 'assets/images/resources/outreach/activities/4/5.png' },
        // { url: 'assets/images/resources/outreach/activities/4/6.png' },
        // { url: 'assets/images/resources/outreach/activities/4/7.png' },
        { url: 'assets/images/resources/outreach/activities/4/8.png' },
        { url: 'assets/images/resources/outreach/activities/4/9.png' },
      ],
    },
    {
      "id": 3,
      "Title": "Collaboration with IESA",
      "Date": "11-10-2022",
      "Time": "12:00 PM to 2:00 PM",
      "Venue": "IIT Tirupati Campus",
      "Eventtype": "visited IIT Tirupati campus and had discussion with the Director Prof. Satyanarayana Garu",
      "meetdetails": [
        { "0": "Visited IIT Tirupati campus and had discussion with the Director Prof Satyanarayana Garu ..had explained him about possible Collaboration..with IESA support would like to have a discussion with IIT Tirupati. ..presently they are working on additive manufacturing labs, food technology, Agri precision , EV", }
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/3/1.png' },
        { url: 'assets/images/resources/outreach/activities/3/2.png' },
        { url: 'assets/images/resources/outreach/activities/3/3.png' },
        { url: 'assets/images/resources/outreach/activities/3/4.png' },
        { url: 'assets/images/resources/outreach/activities/3/5.png' },
      ],
    },
    {
      "id": 2,
      "Title": "Entrepreneurship Awareness Workshop",
      "Date": "14-12-2022",
      "Time": "9:30 AM to 12:30 PM",
      "Venue": "AP Innovation society, Innovation Valley, Visakhapatnam",
      "Eventtype": "Incubators Interaction Session - Virtual",
      "Outcomes": [
        { 0: "Incubators Interaction, main discussion on the various schemes & their fund availability" },
        { 1: "Presentation on APIS Activities & Start-ups Interaction" },
      ],
      "Participants": [
        { 0: "SPMVV Society For Innovation Incubation And Entrepreneurship Technology Business Incubator - Dr. J. Sury Kumar" },
        { 1: "V R Siddhartha TBI Foundation - Dr. Praveeen Naidu" },
        { 2: "Gayatri Vidya Parishad - Dr. Saripalli Ravi" },
        { 3: "VTEC - VITAP Technology Entrepreneurship Centre - Dr. Ellison M.S, Dep., Dir. IIEC" },
        { 4: "KL Technology Incubators Foundation - TBI - Dr. Sunny Agarwal" },
        { 5: "SPMVV-Women Biotech Incubation Facility (SPMVV-WBIF). - Dr. Tulasee Naidu Adari" },
        { 6: "IIIT Sri City (CIEDI), Gyan circle venture (GCV) - Krishnamurthy P, Manager - TBI" },
        { 7: "Grameena Incubation Centre - Mr. Ragavendra" },
        { 8: "A-Hub, (Andhra University Incubation Center) - Dr. Ravi Eswarapu" },
        { 9: "Aditya Global Business Incubator - Srinivas Gogineni" },
        { 10: "Aditya College of Engineering & Technology LBI – Dr. Rama Chandra Murty" },
        { 11: "Andhra Technology Business Incubator - Dr. MVK. Srinivasrao" },
        { 12: "Centre for Entrepreneurship Innovation and Start-ups (EISC) - Dr. MVK. Srinivasa Rao" },
      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/2/1.png' },
        { url: 'assets/images/resources/outreach/activities/2/2.png' },
        { url: 'assets/images/resources/outreach/activities/2/3.png' },
        { url: 'assets/images/resources/outreach/activities/2/4.png' },
        { url: 'assets/images/resources/outreach/activities/2/5.png' },
      ],
    },
    {
      "id": 1,
      "Title": "Manage Agri - Startup Workshop",
      "Date": "13-10-2022",
      "Time": "12:00 PM to 2:00 PM",
      "Venue": "AP Innovation society, Innovation Valley, Visakhapatnam",
      "Eventtype": "APIS Visit & Interactive session with Agri - Startup (Virtual/Physical)",
      "meetdetails": [
        { "0": "The aim of the Workshop is to support Agri-Startups right from setting up milestones for accelerating growth to helping them understand more practical aspects of Business-like Marketing, Team Management, Supply Chain Management, Financial Aspects etc." },
        { "1": "The Workshop is an all-encompassing one effectively covering various topics including Business Development Strategies – Key Strategies to Accelerate the Growth, Initial milestones setting for startups, Human Resource Management, Financial Planning and Analysis, Supply Chain Management, Marketing Methodologies for Building Brand, Angel and VC Funding for Growth Stage Startups, Dos and Don’ts of VC fund pitching etc.", },
      ],
      "Objective": [
        { 0: "To enrich the Participants about various Business Aspects" },
        { 1: "To assist Startups in Growth acceleration" },
        { 2: "To guide Startups in Achieving Business Milestones" },
        { 3: "To Support Startups strengthen Business Foundation" },
      ],
      "Benefits": [
        { 0: "Guidance in Setting Business milestones" },
        { 1: "Gaining knowledge on core aspects of Agri-business" },
        { 2: "Learning nuances of Pitch Deck for Funding" },
        { 3: "Refining Business Strategies" },
        { 4: "Mentoring Support from Experts" },
      ],
      "Participants": [
        { 0: "Shri. Dr. Y. Srinivasa Rao DIRECTOR, NSTL, VSKP" },
        { 1: "Shri. Anil Kumar Tentu, CEO of Andhra Pradesh Innovation Society (APIS)" },
        { 2: "Shri. Sreedhar Kosaraju, PRESIDENT ITAAP" },
        { 3: "Shri. Prof. Nagabushan Raju, Atal Incubation Centre" },
        { 4: "Shri. Dr. Ramana Murthy, H.O.D Gayatri Engineering College" },
        { 5: "Shri. Sreedhar Reddy, GM, I T Promotions APEITA" },
        { 6: "Shri. R.L Narayana, Corporate Vice-President WNS" },
        { 7: "Shri. Prasad, HSL" },
        { 8: "Shri. K.S.Prasada Rao, ISAC" },
        { 9: "Shri. Sreeram Nallam, M.D, SEANERGY DIGITAL" },
        { 10: "Shri. Ramesh Naidu,C.E.O, COVALENSE DIGITAL" },
        { 11: "Shri. Manoj Ponnada, Joint Director APIS" },
        { 12: "Anthony Sunny, Centurion University, Visakhapatnam" },

      ],
      "Photographs": [
        { url: 'assets/images/resources/outreach/activities/1/1.png' },
        { url: 'assets/images/resources/outreach/activities/1/2.png' },
        { url: 'assets/images/resources/outreach/activities/1/3.png' },
        { url: 'assets/images/resources/outreach/activities/1/4.png' },
        { url: 'assets/images/resources/outreach/activities/1/5.png' },
        { url: 'assets/images/resources/outreach/activities/1/6.png' },
      ],
    },
  ];

  activitiesArray: any = []

  ngOnInit(): void {
    const activityId: number = this.route.snapshot.params.id;
    this.activities.find((id) => {
      if (id.id == activityId) {
        this.activitiesArray = id
      }
    })
  }

}
