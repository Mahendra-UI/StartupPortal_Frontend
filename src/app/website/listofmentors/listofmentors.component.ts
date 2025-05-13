import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofmentors',
  templateUrl: './listofmentors.component.html',
  styleUrls: ['./listofmentors.component.css']
})
export class ListofmentorsComponent implements OnInit {

  mentorsList: any[] = [];
  filteredMentors: any[] = []; // This will hold the filtered and sorted mentors
  searchTerm: string = '';

itemsPerPage: number = 24;
currentPage!: number;
p: number = 1;
scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  onPageChange(event: number) {
    this.currentPage = event;
    this.scrollToTop(); // Scroll to the top when the page changes
  }
  
// onPageChange(e: number) {
//     if (e) {
//       this.p = e;
//     }
// }
  constructor() { }

  ngOnInit(): void {
    this.filteredMentors = [...this.mentorsList]; // Copy to filtered array initially
    this.loadMentors();
    this.applyFiltersAndSorting();
  }

  loadMentors() {
    this.mentorsList = [
      { name: 'Dr. Suresh', title: 'STPI head Visakhapatnam', image: 'assets/images/ecosystem/mentors/list/1.png', phone: '9989055535', linkedin: 'https://in.linkedin.com/in/suresh-batha-803a7414' },
      { name: 'Dr Bijay Kumar Sahu', title: 'HoD, NRDC', image: 'assets/images/ecosystem/mentors/list/2.png', phone: '9810104163', linkedin: 'https://in.linkedin.com/in/dr-bijay-kumar-sahu-phd-07ba9423' },
      { name: 'Kalyan Mangalapalli', title: 'Leading Emerging Tech ecosystem, NASSCOM', image: 'assets/images/ecosystem/mentors/list/3.png', phone: '9581593813', linkedin: 'https://in.linkedin.com/in/kml08' },
      { name: 'Shri. Sridhar Kosaraju', title: 'President (ITAPP)', image: 'assets/images/ecosystem/mentors/list/4.png', phone: '9849993366', linkedin: 'https://in.linkedin.com/in/sreedharkosaraju' },
      { name: 'Rajaneesh Vasanta', title: 'CEO, Antar IoT (startup)', image: 'assets/images/ecosystem/mentors/list/5.png', phone: '9966402361', linkedin: 'https://in.linkedin.com/in/rajaneeshv' },
      { name: 'Prasad Babu', title: 'CEO, GCRS (Startup)', image: 'assets/images/ecosystem/mentors/list/6.png', phone: '9810708901', linkedin: 'https://in.linkedin.com/in/prasad-babu-627a3924' },
      { name: 'Harsha Vardhan', title: 'CEO, BotClub (Startup)', image: 'assets/images/ecosystem/mentors/list/7.png', phone: '7358078099', linkedin: 'https://in.linkedin.com/in/harsha-vardhan-k?trk=public_profile_browsemap_mini-profile_title' },
      { name: 'Ali Asgar, CTO', title: 'SaifSeas (startup)', image: 'assets/images/ecosystem/mentors/list/ali_asgar.png', phone: '9393075192', linkedin: 'https://in.linkedin.com/in/aliasgar-saiftrade' },
      { name: 'Sriram Nallam', title: 'Chairman Seanergy Digital (startup)', image: 'assets/images/ecosystem/mentors/list/9.png', phone: '9866309540', linkedin: 'https://www.linkedin.com/in/sriramnallam' },
      { name: 'Shri. Murali Krishna, CEO', title: 'Fluent Grid (startup)', image: 'assets/images/ecosystem/mentors/list/10.png', linkedin: 'https://in.linkedin.com/in/murali-krishna-gannamani-1681b82' },
      { name: 'Shri Aravind Kumar', title: 'Director General (STPI)', image: 'assets/images/ecosystem/mentors/list/11.png', linkedin: 'https://in.linkedin.com/in/arvind-kumar-9a300917' },
      { name: 'Ravi Eswarapu', title: 'CEO, A-Hub', image: 'assets/images/ecosystem/mentors/list/12.png', phone: '9949832000', linkedin: 'https://in.linkedin.com/in/eswarapu' },
      { name: 'Dr. S. Ravi Shankar', title: 'Gayatri, IIC', image: 'assets/images/ecosystem/mentors/list/13.png', phone: '9866340848', linkedin: 'https://in.linkedin.com/in/ravisaripalle' },
      { name: 'Chandra Shaker Saripaka', title: 'Data Scientist, Shopee', image: 'assets/images/ecosystem/mentors/list/14.png', phone: '6589505706', linkedin: 'https://sg.linkedin.com/in/chandrasekharsaripaka' },
      { name: 'Maheswara Rao Chenchala', title: 'CTO, Healthcare', image: 'assets/images/ecosystem/mentors/list/15.png', phone: '7569695342', linkedin: 'https://in.linkedin.com/in/maheswara-rao-chaduvula-857630100' },
      { name: 'Rajeev YSR', image: 'assets/images/ecosystem/mentors/list/16.png', phone: '9886949000', linkedin: 'https://in.linkedin.com/in/rajeevysr' },
      { name: 'Amit Chauhan', title: 'Director VIT, Incubation', image: 'assets/images/ecosystem/mentors/list/user.png', phone: '9390638524', linkedin: 'https://www.linkedin.com/in/ameet-chavan-b81a342' },
      { name: 'Satish Kumar', title: 'CEO, Rosys', image: 'assets/images/ecosystem/mentors/list/18.png', phone: '9908159207' },
      { name: 'Gudipudi Krishna Sharma', title: 'Startup India, Manager', image: 'assets/images/ecosystem/mentors/list/19.png', phone: '9205057937', linkedin: 'https://in.linkedin.com/in/krishnagudipudi' },
      { name: 'Dr Bhavya Manjeera Nitish', title: 'Engineer', image: 'assets/images/ecosystem/mentors/list/20.png', linkedin: 'https://www.linkedin.com/in/dr-bhavya-manjeera-nitish-a68061232' },
      { name: 'Dr. V S S Kiran', title: 'Entrepreneur', image: 'assets/images/ecosystem/mentors/list/21.png', phone: '7382169329', linkedin: 'https://in.linkedin.com/in/vsskiran' },
      { name: 'Anil Gollamandala', title: 'Director', image: 'assets/images/ecosystem/mentors/list/22.png' },
      { name: 'Pooja Vidyashankar', title: 'Head - Strategic Planning, NASSCOM', image: 'assets/images/ecosystem/mentors/list/23.png', linkedin: 'https://in.linkedin.com/in/pooja-vidyashankar' },
      { name: 'Omprakash Bitla', title: 'Projects and Operations lead, NASSCOM CoE IoT & AI', image: 'assets/images/ecosystem/mentors/list/24.png', linkedin: 'https://www.linkedin.com/in/omprakash-bitla-pmec%E2%84%A2-lsswb%E2%84%A2-cpcm%E2%84%A2-30b70a40/' },
      { name: 'V M Mouli', title: 'CII', image: 'assets/images/ecosystem/mentors/list/25.png', linkedin: 'https://in.linkedin.com/in/v-mouli-25955412' },
      { name: 'D S R SUJANA', title: 'Supply U – DIRECTOR', image: 'assets/images/ecosystem/mentors/list/26.png', phone: '8590899999' },
      { name: 'Ramesh Naidu', title: 'STPI', image: 'assets/images/ecosystem/mentors/list/27.png', phone: '8590899999', linkedin: 'https://www.linkedin.com/in/ramesh-naidu-p-2055556' },
      { name: 'Teja Kopall', image: 'assets/images/ecosystem/mentors/list/28.png', phone: '9618108333', linkedin: 'https://www.linkedin.com/in/teja-kopalle-07766a191' },
      { name: 'Chandu', title: 'CII', image: 'assets/images/ecosystem/mentors/list/29.png' },
      { name: 'Manoj Ponnada', title: 'Joint Director Startup Eco System', image: 'assets/images/ecosystem/mentors/list/30.png', phone: '9494566363', linkedin: 'https://in.linkedin.com/in/manoj-ponnada-837673218?trk=people-guest_people_search-card' },
      { name: 'Singamala Sreedhar', title: 'Joint Director-Hackathons & Challenges at AP Innovation', image: 'assets/images/ecosystem/mentors/list/32.png', phone: '9052108526', linkedin: 'https://in.linkedin.com/in/singamala-sreedhar-b99bba10' },
      { name: 'Sri Mallavarapu Surya Teja, IAS', title: 'CEO, APIS', image: 'assets/images/ecosystem/mentors/list/apisnewceo.jpg' },
      {
        "name": "Abdul  M Raqshan",
        "title": "Head Marketing, Retail Ventures",
        "image": "assets/images/ecosystem/mentors/list/abdul__m_raqshan.png",
        "phone": 9246308601,
        "email": "abdul_raqshan@yahoo.co.in",
        "linkedin": "www.linkedin.com/in/abdul-raqshan"
    },
    {
        "name": "Adarsh Chintalapati",
        "title": "Managing partners, Lambasingi Naturals",
        "image": "assets/images/ecosystem/mentors/list/adarsh_chintalapati.png",
        "phone": 9676772046,
        "email": "adarshchintalapati5@gmail.com",
        "linkedin": "https://www.linkedin.com/in/adarsh-chintalapati-3676ba61?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Aditya Ar",
        "title": "Manager - Operations, Multiplex Drone Pvt Ltd",
        "image": "assets/images/ecosystem/mentors/list/aditya_ar.png",
        "phone": 6362900034,
        "email": "aditya@multiplexdrone.com",
        "linkedin": "https://www.linkedin.com/in/aditya-a-r-7324a4102?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Agranshu  Dwivedi",
        "title": "CHIEF EXECUTIVE OFFICER - NIDHI i - TBI, Chhattisgarh Swami Vivekanand Technical University - Foundation For Rural Technology and Entrepreneurship",
        "image": "assets/images/ecosystem/mentors/list/agranshu__dwivedi.png",
        "phone": 9993886171,
        "email": "dwivedi.agransh@gmail.com",
        "linkedin": "https://www.linkedin.com/in/agranshu-dwivedi-21a20964?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Ajay Jain",
        "title": "Founder & Managing Partner, Silverneedle Ventures",
        "image": "assets/images/ecosystem/mentors/list/ajay_jain.png",
        "phone": 9948434512,
        "email": "ajay@silverneedle.vc",
        "linkedin": "https://www.linkedin.com/in/ajayjainprofile/"
    },
    {
        "name": "Ajay Kumar Katta",
        "title": "Founder, Bid Alert",
        "image": "assets/images/ecosystem/mentors/list/ajay_kumar_katta.png",
        "phone": 9106323130,
        "email": "ajaykumarprojectsindia@gmail.com",
        "linkedin": "https://www.linkedin.com/in/ajay-kumar-33a802b2/"
    },
    {
        "name": "Akkenaguntla  Karthik ",
        "title": "Project Management Specialist , Adani Electricity Mumbai Limited ",
        "image": "assets/images/ecosystem/mentors/list/akkenaguntla__karthik.png",
        "phone": NaN,
        "email": "akarthik160@gmail.com",
        "linkedin": "https://in.linkedin.com/in/akkenaguntla-karthik-515816161"
    },
    {
        "name": "Aloor Chinmaya Sai Ganesh",
        "title": "Vice President - Telangana, International Business Startup and Entrepreneurs Association",
        "image": "assets/images/ecosystem/mentors/list/aloor_chinmaya_sai_ganesh.png",
        "phone": 9121524803,
        "email": "chinmayaaloor@gmail.com",
        "linkedin": "https://www.linkedin.com/in/aloor-chinmaya-sai-ganesh-4468361a5/"
    },
    {
        "name": "Aman Singh Solanki",
        "title": "Director, Igoko Avionics Solutions Pvt ltd",
        "image": "assets/images/ecosystem/mentors/list/aman_singh_solanki.png",
        "phone": 9891256009,
        "email": "amansolanki5254@gmail.com",
        "linkedin": "https://www.linkedin.com/in/aman-singh-solanki-980a11196/"
    },
    {
        "name": "Amit Ranjan",
        "title": "CEO , AIC BAMU Foundation ",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9312427592,
        "email": "Amittiwari1703@gmail.com",
        "linkedin": "Amitranjantiwari/ART"
    },
    {
        "name": "Anil Kumar Pedapati",
        "title": "Principal , S C I.M Govt College (A,)",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": NaN,
        "email": "zoologistanil@gmail.com",
        "linkedin": "anilkumar"
    },
    {
        "name": "Anjani Golla",
        "title": "Director - Operations & Product, Blackbucks Group",
        "image": "assets/images/ecosystem/mentors/list/anjani_golla.png",
        "phone": 8019826713,
        "email": "anjanigolla@gmail.com",
        "linkedin": "https://www.linkedin.com/in/anjani-golla-9a7410b2/"
    },
    {
        "name": "Anji Reddy Talakola",
        "title": "COO, Vidyardi Institutions Private limited",
        "image": "assets/images/ecosystem/mentors/list/anji_reddy_talakola.png",
        "phone": 9703379096,
        "email": "anjireddytehi@gmail.com",
        "linkedin": "https://www.linkedin.com/in/anjireddytalakola/"
    },
    {
        "name": "Aravind  Chembeti",
        "title": "Founder , Mi2 Business Solutions",
        "image": "assets/images/ecosystem/mentors/list/aravind__chembeti.png",
        "phone": 9966408076,
        "email": "chembeti.aravind@gmail.com",
        "linkedin": "https://www.linkedin.com/in/aravindchembeti"
    },
    {
        "name": "Ashok  Yedduladoddi ",
        "title": "Founder , Student Linker",
        "image": "assets/images/ecosystem/mentors/list/ashok__yedduladoddi.png",
        "phone": 8688768758,
        "email": "YEDDULADODDIASHOK@GMAIL.COM",
        "linkedin": "https://www.linkedin.com/in/ashokmech"
    },
    {
        "name": "Ashok Chakravarthi  Kandru ",
        "title": "CTO, SmInDu Technologies/Charge House Mobility Pvt Ltd ",
        "image": "assets/images/ecosystem/mentors/list/ashok_chakravarthi__kandru.png",
        "phone": 7981622532,
        "email": "ashokchakravarthi@smindu.in",
        "linkedin": "https://www.linkedin.com/in/ashok-chakravarthi-k-a5889592"
    },
    {
        "name": "Ashutosh Tewari",
        "title": "Founder, AT Advisory Services",
        "image": "assets/images/ecosystem/mentors/list/ashutosh_tewari.png",
        "phone": 9930299967,
        "email": "ashutosht.research@gmail.com",
        "linkedin": "https://www.linkedin.com/in/ashutoshtewari/"
    },
    {
        "name": "Baipalli Vallab Rao Vasu",
        "title": "Managing Director, PHYTEC EMBEDDED PVT LTD",
        "image": "assets/images/ecosystem/mentors/list/baipalli_vallab_rao_vasu.png",
        "phone": NaN,
        "email": "vasu.b@phytec.in",
        "linkedin": "https://www.linkedin.com/in/vasu-dev-phytec/"
    },
    {
        "name": "Bajrangi  Sahni",
        "title": "Research and development engineer , IIT Tp",
        "image": "assets/images/ecosystem/mentors/list/bajrangi__sahni.png",
        "phone": 8932886354,
        "email": "ee22m204@iittp.ac.in",
        "linkedin": "https://www.linkedin.com/in/bajrangi-sahni"
    },
    {
        "name": "Balamurali  Bhaskaran ",
        "title": "Senior venture coach , GITAM university ",
        "image": "assets/images/ecosystem/mentors/list/balamurali__bhaskaran.png",
        "phone": 8099198129,
        "email": "bhaskaranbalamurali@gmail.com",
        "linkedin": "https://www.linkedin.com/in/bhaskaranbalamurali369"
    },
    {
        "name": "Bandaru  Satish ",
        "title": "Drone pilot , DRONITECH ",
        "image": "assets/images/ecosystem/mentors/list/bandaru__satish.png",
        "phone": 8688297356,
        "email": "satishb1182@gmail.com",
        "linkedin": "https://www.linkedin.com/in/satish-bandaru-55a75320a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Bhaarathi Ilango",
        "title": "Head, Rathinam Startup School, Rathinam College of Arts and Science, Coimbatore ",
        "image": "assets/images/ecosystem/mentors/list/bhaarathi_ilango.png",
        "phone": 8870888634,
        "email": "bhaarathi.cs@rathinam.in",
        "linkedin": "https://www.linkedin.com/in/bhaarathi-i-4b28b2200"
    },
    {
        "name": "Bhaskaran  Rajendran",
        "title": "Professor , PSNA College of Engineering and Technology ",
        "image": "assets/images/ecosystem/mentors/list/bhaskaran__rajendran.png",
        "phone": 9842149872,
        "email": "rbhaskaran@psnacet.edu.in",
        "linkedin": "https://www.linkedin.com/in/dr-bhaskaran-rajendran-ba560832"
    },
    {
        "name": "Chaitanya Yedilla",
        "title": "Director, Secure syntax OPC pvt Ltd ",
        "image": "assets/images/ecosystem/mentors/list/chaitanya_yedilla.png",
        "phone": 8712167837,
        "email": "securesyntaxofficial@gmail.com",
        "linkedin": "https://www.linkedin.com/in/chaitanya-yedilla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Damodara Naidu  Kollu",
        "title": "Enterprise Architect , Aventure Systems LLC",
        "image": "assets/images/ecosystem/mentors/list/damodara_naidu__kollu.png",
        "phone": "+1 6166998532",
        "email": "damodar4683@gmail.com",
        "linkedin": "LinkedIn/damodarknaidu"
    },
    {
        "name": "Dantuluri Lakshmipathiraju",
        "title": "FOUNDER & CEO, VASHISTADIZI AUTOMATION SOLUTIONS LLP",
        "image": "assets/images/ecosystem/mentors/list/dantuluri_lakshmipathiraju.png",
        "phone": 9177611871,
        "email": "DLPRAJU@DIZIAUTOMATION.COM",
        "linkedin": "https://www.linkedin.com/in/lakshmipathiraju-dantuluri-115113b/"
    },
    {
        "name": "Deepal  Mehrotra",
        "title": "Associate Professor , Jagran Lakecity University, Bhopal ",
        "image": "assets/images/ecosystem/mentors/list/deepal__mehrotra.png",
        "phone": 7693942424,
        "email": "deepalmehrotra@gmail.com",
        "linkedin": "www.linkedin.com/in/dr-deepal-mehrotra-76570a12b"
    },
    {
        "name": "Dhananjaya Naidu  Vasantha ",
        "title": "Director , Shoo in Training Skills Pvt Ltd ",
        "image": "assets/images/ecosystem/mentors/list/dhananjaya_naidu__vasantha.png",
        "phone": 9652639894,
        "email": "naidu.vd@gmail.com",
        "linkedin": "https://www.linkedin.com/in/dhananjaya-naidu-9709ab3b"
    },
    {
        "name": "Dhanush Pasupuleti",
        "title": "Director, Anantha Software ",
        "image": "assets/images/ecosystem/mentors/list/dhanush_pasupuleti.png",
        "phone": 9390847838,
        "email": "dhanushbabu1206@gmail.com",
        "linkedin": "http://linkedin.com/in/dhanushpasupuleti"
    },
    {
        "name": "Dhulipalla Ramya  Krishna ",
        "title": "Assistant Professor , KL University, Hyderabad ",
        "image": "assets/images/ecosystem/mentors/list/dhulipalla_ramya__krishna.png",
        "phone": 8019122558,
        "email": "dramyakrishna28@gmail.com",
        "linkedin": "https://www.linkedin.com/in/ramya-krishna-dhulipalla-1a871b252"
    },
    {
        "name": "Dimpu Sarath Kumar",
        "title": "Managing Director and CEO, Intern Stump",
        "image": "assets/images/ecosystem/mentors/list/dimpu_sarath_kumar.png",
        "phone": 8096253894,
        "email": "ceo@internstump.com",
        "linkedin": "https://www.linkedin.com/in/thisisdimpu"
    },
    {
        "name": "Dinesh  Kumar Thangavel",
        "title": "Founder and Managing Director, Nainu Startups",
        "image": "assets/images/ecosystem/mentors/list/dinesh__kumar_thangavel.png",
        "phone": 6374365998,
        "email": "dk98.me@gmail.com",
        "linkedin": "https://www.linkedin.com/in/dk2201"
    },
    {
        "name": "Divya  Rani",
        "title": "Assoc Professor , Presidency University ",
        "image": "assets/images/ecosystem/mentors/list/divya__rani.png",
        "phone": 9480313352,
        "email": "divyarani@presidencyuniversity.in",
        "linkedin": "https://www.linkedin.com/in/dr-divya-rani-95323a75/"
    },
    {
        "name": "Durga Prasad Meesala",
        "title": "Founder, NEDOS AGROTECH PRIVATE LIMITED",
        "image": "assets/images/ecosystem/mentors/list/durga_prasad_meesala.png",
        "phone": 6281459675,
        "email": "meesalaadurgaprasad@gmail.com",
        "linkedin": "https://www.linkedin.com/in/durga-prasad-meesala-481452213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "G Ravi  Kumar",
        "title": "Managing Director , X-MEN MANPOWER SOLUTIONS INDIA PRIVATE LIMITED ",
        "image": "assets/images/ecosystem/mentors/list/g_ravi__kumar.png",
        "phone": 9432181818,
        "email": "ravi.kumar@solution4u.com",
        "linkedin": "https://in.linkedin.com/in/xmenmanpower"
    },
    {
        "name": "G Sai  Vaibhav",
        "title": "Examiner of Patents and Designs, Intellectual Property Office, Govt. of India",
        "image": "assets/images/ecosystem/mentors/list/g_sai__vaibhav.png",
        "phone": 8500859077,
        "email": "gvaibhavreddy@gmail.com",
        "linkedin": "https://www.linkedin.com/in/sai-vaibhav-a51b9186"
    },
    {
        "name": "Gandi  Sai Prasanna ",
        "title": "Aws cloud, Aditya College Of Engineering And Technology ",
        "image": "assets/images/ecosystem/mentors/list/gandi__sai_prasanna.png",
        "phone": 9490038163,
        "email": "prasanna3900@gmail.com",
        "linkedin": "https://www.linkedin.com/in/gandi-sai-prasanna-a410b8267/"
    },
    {
        "name": "Ganesh  S",
        "title": "Advisor , GAH IT Services ",
        "image": "assets/images/ecosystem/mentors/list/ganesh__s.png",
        "phone": NaN,
        "email": NaN,
        "linkedin": NaN
    },
    {
        "name": "Gayathri Sathyamoorthy",
        "title": "Manager-Incubation, MaDeIT Innovation Foundation",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 7299093926,
        "email": "gaayu.satyan@gmail.com",
        "linkedin": "www.linkedin.com/in/drgayathrisathyamoorthy"
    },
    {
        "name": "Gemini Chintakayala ",
        "title": "AVP - Digital Transformation, Fluentgrid Limited ",
        "image": "assets/images/ecosystem/mentors/list/gemini_chintakayala.png",
        "phone": 9848332125,
        "email": "gemini.ch@fluentgrid.com",
        "linkedin": NaN
    },
    {
        "name": "Gireesh Kadimi",
        "title": "Deputy Sales Manager, Tata Bluescope Steel",
        "image": "assets/images/ecosystem/mentors/list/gireesh_kadimi.png",
        "phone": 9492386303,
        "email": "gireeshkadimi@gmail.com",
        "linkedin": "http://linkedin.com/in/gireesh-krishna-kadimi"
    },
    {
        "name": "Gopal Reddy Lakkireddy",
        "title": "Directer , SYTIQHUB  EV",
        "image": "assets/images/ecosystem/mentors/list/gopal_reddy_lakkireddy.png",
        "phone": 7989641224,
        "email": NaN,
        "linkedin": "https://www.linkedin.com/in/gopal-reddy-lakkireddy-b16836126/"
    },
    {
        "name": "Gopi Krishna Sakhinala",
        "title": "Jr.Exective for Incubation, Incubation Centre IIT Patna",
        "image": "assets/images/ecosystem/mentors/list/gopi_krishna_sakhinala.png",
        "phone": 7970972747,
        "email": "sgkrishna0707@outlook.com",
        "linkedin": "linkedin.com/in/gopi-krishna-sakhinala-a78117214"
    },
    {
        "name": "Gopi Krishnakanth  Addanki ",
        "title": "Business Head, Acharya N G Ranga Agricultural University ",
        "image": "assets/images/ecosystem/mentors/list/gopi_krishnakanth__addanki.png",
        "phone": 9010988797,
        "email": "addankigopikrishnakanth2@gmail.com",
        "linkedin": "https://www.linkedin.com/in/gopi-krishnakanth-addanki-b3422028"
    },
    {
        "name": "Gowtham Dodda",
        "title": "Chief technology officer, ryze",
        "image": "assets/images/ecosystem/mentors/list/gowtham_dodda.png",
        "phone": 9632484981,
        "email": "gowthamd369@gmail.com",
        "linkedin": "https://www.linkedin.com/in/gowtham-dodda/"
    },
    {
        "name": "Himansu R Mehta",
        "title": "Founder & CEO, V Assure Wholesale Private Limited",
        "image": "assets/images/ecosystem/mentors/list/himansu_r_mehta.png",
        "phone": 9038010175,
        "email": "hmehta@vwholesale.in",
        "linkedin": "https://www.linkedin.com/in/himansurmehta/"
    },
    {
        "name": "I.V.S. Yeswanth ",
        "title": "Assistant Professor , Narayana Engineering College ",
        "image": "assets/images/ecosystem/mentors/list/ivs_yeswanth.png",
        "phone": 9080589529,
        "email": "ivsyeswanth29@gmail.com",
        "linkedin": "https://www.linkedin.com/in/ivs-yeswanth-b76971a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Indu Rani",
        "title": "Business Advisor , Quite a few to name",
        "image": "assets/images/ecosystem/mentors/list/indu_rani.png",
        "phone": 9873138582,
        "email": "mail.indu.iimb@gmail.com",
        "linkedin": "https://www.linkedin.com/in/indu-rani-spark2sparkle"
    },
    {
        "name": "Jagadeesh  Bonam ",
        "title": "Founder , Metonus Metals ",
        "image": "assets/images/ecosystem/mentors/list/jagadeesh__bonam.png",
        "phone": 8886961888,
        "email": "jagadeeshbonam222@gmail.com",
        "linkedin": "https://www.linkedin.com/in/jagadeesh-bonam-865626269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Jagadeesh  Gaddam",
        "title": "Head of software products , IIT Tirupati / Kritsnam Technologies ",
        "image": "assets/images/ecosystem/mentors/list/jagadeesh__gaddam.png",
        "phone": 8074840503,
        "email": "saijagadeeshg@gmail.com",
        "linkedin": "https://www.linkedin.com/in/jagadeesh-gaddam-iit-tp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Jagan Kumar L",
        "title": "Department Chief Operating Officer (Enterprises), Tamil Nadu Rural Transformation Project",
        "image": "assets/images/ecosystem/mentors/list/jagan_kumar_l.png",
        "phone": 9003107700,
        "email": "gbhssjagan@gmail.com",
        "linkedin": "https://www.linkedin.com/in/jagan-l"
    },
    {
        "name": "Jeevan Pusarla",
        "title": "Prof of Practice, Andhra University",
        "image": "assets/images/ecosystem/mentors/list/jeevan_pusarla.png",
        "phone": 9840820995,
        "email": "jeevan.pusarla@gmail.com",
        "linkedin": "https://www.linkedin.com/in/jeevan-pusarla-11ab291b/"
    },
    {
        "name": "Jubanayan Saikia",
        "title": "Founder, IndiMeat",
        "image": "assets/images/ecosystem/mentors/list/jubanayan_saikia.png",
        "phone": 9790877622,
        "email": "jubanayan_saikia@yahoo.co.in",
        "linkedin": "https://www.linkedin.com/in/jubanayan-saikia-59801424/"
    },
    {
        "name": "Jyothsna Yerramsetti",
        "title": "Co Founder, IUThink",
        "image": "assets/images/ecosystem/mentors/list/jyothsna_yerramsetti.png",
        "phone": 9676101283,
        "email": "ymsjyothsna27@gmail.com",
        "linkedin": "https://www.linkedin.com/in/jyothsna-yerramsetti/"
    },
    {
        "name": "Kamesh Namuduri",
        "title": "Professor, University of North Texas",
        "image": "assets/images/ecosystem/mentors/list/kamesh_namuduri.png",
        "phone": 9403698960,
        "email": "Kamesh.namuduri@unt.edu",
        "linkedin": "https://www.linkedin.com/in/kamesh-namuduri-364958"
    },
    {
        "name": "Kamineni Revanth Kumar ",
        "title": "Proprietor , Krishi pushpak agro drone service ",
        "image": "assets/images/ecosystem/mentors/list/kamineni_revanth_kumar.png",
        "phone": 741777179,
        "email": "revanthkumar884@gmail.com",
        "linkedin": "https://www.linkedin.com/in/r-k-09a416191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Karthikeya Kumar",
        "title": "Assistant Vice President, Valmiki Group",
        "image": "assets/images/ecosystem/mentors/list/karthikeya_kumar.png",
        "phone": 9177457715,
        "email": "karthiksarmak@gmail.com",
        "linkedin": "https://www.linkedin.com/in/karthikeya-kumar-24168328/"
    },
    {
        "name": "Kiran Rs",
        "title": "Lead- Finance & ICT, ICAR- IARI, MoA&FW, GOI",
        "image": "assets/images/ecosystem/mentors/list/kiran_rs.png",
        "phone": 9776997309,
        "email": "Kiranrsnair@gmail.com",
        "linkedin": "www.linkedin.com/in/kiranrs25011991"
    },
    {
        "name": "Koduri Rajagopal",
        "title": "Cloud Delivery Head/Solution Architect , Zaintech ",
        "image": "assets/images/ecosystem/mentors/list/koduri_rajagopal.png",
        "phone": 7032639384,
        "email": "koduri.rajagopal@gmail.com",
        "linkedin": "https://www.linkedin.com/in/rajagopal-koduri-a8a7b917"
    },
    {
        "name": "Kota Muralidhar Reddy ",
        "title": "Founder, MALLAREDDY COLLEGE OF ENGINEERING AND TECHNOLOGY ",
        "image": "assets/images/ecosystem/mentors/list/kota_muralidhar_reddy.png",
        "phone": 7995287103,
        "email": "kota.muralidharreddy@gmail.com",
        "linkedin": "https://www.linkedin.com/in/kotamuralidharreddy"
    },
    {
        "name": "Kshitij Tiwari",
        "title": "Robotics Consultant, Self-Employed",
        "image": "assets/images/ecosystem/mentors/list/kshitij_tiwari.png",
        "phone": NaN,
        "email": "hi@kshitijtiwari.com",
        "linkedin": "https://www.linkedin.com/in/kshitijtiwari92/"
    },
    {
        "name": "Kumar Khanna G",
        "title": "GM, PPE",
        "image": "assets/images/ecosystem/mentors/list/kumar_khanna_g.png",
        "phone": 9393322449,
        "email": "kumarkhanna@gmail.com",
        "linkedin": "www.linkedin.com/in/kumarkhanna"
    },
    {
        "name": "Logeswaran  Ramadoss",
        "title": "Director - Product Design and Development , IGNIT TECHNICAL SOLUTIONS PVT LTD",
        "image": "assets/images/ecosystem/mentors/list/logeswaran__ramadoss.png",
        "phone": 9080064400,
        "email": "rlogesh72@gmail.com",
        "linkedin": "https://www.linkedin.com/in/logeswaran-r-7a4434162"
    },
    {
        "name": "Lokesh Venkata Kumar Chakka",
        "title": "Founder & Chairman, Kesava Yatheemdra Infotech Research Private Limited",
        "image": "assets/images/ecosystem/mentors/list/lokesh_venkata_kumar_chakka.png",
        "phone": 9133699595,
        "email": "chakka.lokesh@gmail.com",
        "linkedin": "https://www.linkedin.com/in/chakkalokesh"
    },
    {
        "name": "Macharayya Gangumalla",
        "title": "CEO, Lemniscate Growth",
        "image": "assets/images/ecosystem/mentors/list/macharayya_gangumalla.png",
        "phone": 9885527789,
        "email": "mac@lemniscategrowth.com",
        "linkedin": "https://www.linkedin.com/in/lemniscate/"
    },
    {
        "name": "Madhu  Vadlamani ",
        "title": "Miracle Software Systems , Sr Manager ",
        "image": "assets/images/ecosystem/mentors/list/madhu__vadlamani.png",
        "phone": 9704233062,
        "email": "madhu.vad@gmail.com",
        "linkedin": "https://www.linkedin.com/in/madhuvad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Madhu Parvathaneni",
        "title": "CEO & Solutions Architect , Make Skilled Innovations",
        "image": "assets/images/ecosystem/mentors/list/madhu_parvathaneni.png",
        "phone": 7893015625,
        "email": "parvathanenimadhu@gmail.com",
        "linkedin": "https://linkedin.com/in/MadhuPIoT"
    },
    {
        "name": "Mahendra Dasari",
        "title": "Senior Associate 2, PwC",
        "image": "assets/images/ecosystem/mentors/list/mahendra_dasari.png",
        "phone": 8179352335,
        "email": "dasarimahendra48@gmail.com",
        "linkedin": "www.linkedin.com/in/mahendradasari"
    },
    {
        "name": "Mahesh Desireddy ",
        "title": "Coo, KSR DATAVIZON ",
        "image": "assets/images/ecosystem/mentors/list/mahesh_desireddy.png",
        "phone": 9916961234,
        "email": "Mahesh@datavizon.com",
        "linkedin": "https://www.linkedin.com/in/mahesh-desireddy-06323252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Mallikarjuna Rao  Pasumarthi ",
        "title": "Professor , Andhra University ",
        "image": "assets/images/ecosystem/mentors/list/mallikarjuna_rao__pasumarthi.png",
        "phone": 9848175818,
        "email": "electricalprofessor@gmail.com",
        "linkedin": "electricalprofessor@gmail.com"
    },
    {
        "name": "Mallikarjuna Rao Motapothula",
        "title": "CEO, https://www.shaktiphotonsolutions.com/founders",
        "image": "assets/images/ecosystem/mentors/list/mallikarjuna_rao_motapothula.png",
        "phone": 7382025117,
        "email": "info@shaktiphotonsolutions.com",
        "linkedin": "https://www.linkedin.com/in/dr-mallikarjuna-rao-motapothula-22268a34/?originalSubdomain=in"
    },
    {
        "name": "Manidher  Kota",
        "title": "Founder and Director, E BIZ BASKET TECH SERVICES",
        "image": "assets/images/ecosystem/mentors/list/manidher__kota.png",
        "phone": 8309707236,
        "email": "manidherkota@gmail.com",
        "linkedin": "https://www.linkedin.com/in/manidher-kota-42477962?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Mannuri  Vamshi Krishna ",
        "title": "Founder , Medvolant ",
        "image": "assets/images/ecosystem/mentors/list/mannuri__vamshi_krishna.png",
        "phone": 7036222121,
        "email": "vamshi@medvolant.in",
        "linkedin": "http://linkedin.com/in/mannuri-vamshi-krishna"
    },
    {
        "name": "Manu  Francis ",
        "title": "Founder and CEO , GHC Financial Advisory Services LLP ",
        "image": "assets/images/ecosystem/mentors/list/manu__francis.png",
        "phone": 9496350829,
        "email": "Manufrancis7@gmail.com",
        "linkedin": "https://www.linkedin.com/in/cs-manu-francis-19277030?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Meher Goru",
        "title": "Founder, Mediverse Technologies",
        "image": "assets/images/ecosystem/mentors/list/meher_goru.png",
        "phone": 9966088065,
        "email": "meher.goru@gmail.com",
        "linkedin": "www.linkedin.com/in/mehergoru"
    },
    {
        "name": "Mohammad Azizuddin Imtiaz ",
        "title": "Researcher, Advanced Air Mobility Institute (USA) and IIT Hyderabad ",
        "image": "assets/images/ecosystem/mentors/list/mohammad_azizuddin_imtiaz.png",
        "phone": 7977032514,
        "email": "azizuddin93@gmail.com",
        "linkedin": "https://www.linkedin.com/in/mdazizuddin"
    },
    {
        "name": "Muralidhar  Reddy ",
        "title": "Head Corporate Relations, Cambrian Labs/ Cambridge Institute of Technology Bengaluru ",
        "image": "assets/images/ecosystem/mentors/list/muralidhar__reddy.png",
        "phone": 9986220824,
        "email": "ymuralidharreddy@gmail.com",
        "linkedin": "https://www.linkedin.com/in/dr-muralidhar-reddy"
    },
    {
        "name": "Muralidhararao Bagadi",
        "title": "Director and Head , Jubilant Biosys Limited ",
        "image": "assets/images/ecosystem/mentors/list/muralidhararao_bagadi.png",
        "phone": 9000765466,
        "email": "bagadi.ms@gmail.com",
        "linkedin": "https://www.linkedin.com/in/dr-murali-bagadi-phd-frsc-3b835a19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Murty Gonella",
        "title": "Head, Engg & Ops, Brainchip India center, Brainchip India",
        "image": "assets/images/ecosystem/mentors/list/murty_gonella.png",
        "phone": NaN,
        "email": "mgonella@brainchip.com",
        "linkedin": "https://www.linkedin.com/in/murty-gonella-4625662/"
    },
    {
        "name": "Nagara Bharath  Naik",
        "title": "LEAD RESEARCH ENGINEER, CLARION INNOVATIONS PRIVATE LIMTED",
        "image": "assets/images/ecosystem/mentors/list/nagara_bharath__naik.png",
        "phone": 7003660115,
        "email": "nagarabharathnaik128@gmail.com",
        "linkedin": "https://www.linkedin.com/in/bharath-naik-nagara-526921133/"
    },
    {
        "name": "Nageshbabu Garapati",
        "title": "Senior Program/SIAM Manager, Toetoevry",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9845512488,
        "email": "nbvg1729@gmail.com",
        "linkedin": "https://www.linkedin.com/in/garapati1729?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Nallamilli  Venkata Reddy",
        "title": "Founder - CEO, Teckybot Tutor Pvt Ltd",
        "image": "assets/images/ecosystem/mentors/list/nallamilli__venkata_reddy.png",
        "phone": 8886122885,
        "email": "nvenkatareddy89@gmail.com",
        "linkedin": "https://www.linkedin.com/in/nallamilli-venkata-reddy/"
    },
    {
        "name": "Narasimha Murthy  Gonapa",
        "title": "Engineer, Cisco",
        "image": "assets/images/ecosystem/mentors/list/narasimha_murthy__gonapa.png",
        "phone": 9177901022,
        "email": NaN,
        "linkedin": "https://www.linkedin.com/in/narasimha-gonapa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Narayana Swaroop",
        "title": "LP, ah! Ventures",
        "image": "assets/images/ecosystem/mentors/list/narayana_swaroop.png",
        "phone": 9666599913,
        "email": "vnswaroop@gmail.com",
        "linkedin": "https://www.linkedin.com/in/narayanaswaroop/"
    },
    {
        "name": "Naresh  Vasamsetti",
        "title": "Founder, Aeroespacial technologies pvt ltd ",
        "image": "assets/images/ecosystem/mentors/list/naresh__vasamsetti.png",
        "phone": 9494733377,
        "email": "naresh@aeroespacial.in ",
        "linkedin": "https://www.linkedin.com/in/naresh-vasamsetti-93ba153a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Navin  Khandare ",
        "title": "Chief Executive Officer, DBATU Forum of Innovation, Incubation & Enterprise",
        "image": "assets/images/ecosystem/mentors/list/navin__khandare.png",
        "phone": 8275093218,
        "email": "drnavinkhandare@gmail.com",
        "linkedin": "https://www.linkedin.com/in/drnavinkhandare?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeCczoIVjQD6JSgdATyj95Q%3D%3D"
    },
    {
        "name": "Nikkhil  Jadhav",
        "title": "Codirector, InstaHeart",
        "image": "assets/images/ecosystem/mentors/list/nikkhil__jadhav.png",
        "phone": 9820297497,
        "email": "Nikhiljadhav@gmail.com",
        "linkedin": "https://www.linkedin.com/posts/nikkhil-jadhav-l-i-o-n-505a6a15_seedcapital-startupfunding-startups-activity-7256615802714411008-ZWnr?utm_source=share&utm_medium=member_desktop"
    },
    {
        "name": "P V Radhika  Radhika ",
        "title": "Assistant Professor , S R R & C V R Government Degree College (A)",
        "image": "assets/images/ecosystem/mentors/list/p_v_radhika__radhika.png",
        "phone": 9849449735,
        "email": "radhi3sree@yahoo.co.in",
        "linkedin": "https://www.linkedin.com/in/pv-radhika-218873271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "P. Selva Sundar  Rajan ",
        "title": "Proprietor , AADITHIYA Training and Consultants ",
        "image": "assets/images/ecosystem/mentors/list/p_selva_sundar__rajan.png",
        "phone": 9842284311,
        "email": "selvirajan28@gmail.com ",
        "linkedin": "https://in.linkedin.com/in/selvasundar-rajan-788a0330a"
    },
    {
        "name": "Parikshith S Venkata ",
        "title": "Sales Lead, Innspark Solutions Private Limited",
        "image": "assets/images/ecosystem/mentors/list/parikshith_s_venkata.png",
        "phone": 9746475377,
        "email": "svenkataparikshith@gmail.com",
        "linkedin": "https://www.linkedin.com/in/parikshiths?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Pavan Kumar  Thodupunoori ",
        "title": "Business unit manager , Lindstrom service India private limited ",
        "image": "assets/images/ecosystem/mentors/list/pavan_kumar__thodupunoori.png",
        "phone": 9949652510,
        "email": "tpavankumar849@gmail.com",
        "linkedin": "https://www.linkedin.com/in/pavankumarthodupunoori"
    },
    {
        "name": "Pavan Vijay Kumar M ",
        "title": "Founder and CEO, NighaTech Global Pvt Ltd ",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 8297808410,
        "email": "nighatechglobal@gmail.com",
        "linkedin": "NighaTech Global Pvt Ltd "
    },
    {
        "name": "Pavani  Kallempudi ",
        "title": "MBA -1, Shivaji University kolhapur ",
        "image": "assets/images/ecosystem/mentors/list/pavani__kallempudi.png",
        "phone": 8639228528,
        "email": "pavanikallempudi21@gmail.com",
        "linkedin": "https://www.linkedin.com/in/pavani-kallempudi-357643269"
    },
    {
        "name": "Pavani Kadiyala ",
        "title": "Chief Business officer , All India Robotics Association ",
        "image": "assets/images/ecosystem/mentors/list/pavani_kadiyala.png",
        "phone": 9346221421,
        "email": "cbo@aira.science",
        "linkedin": "https://www.linkedin.com/in/dr-pavani-kadiyala-h-c-a2523b78?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Peraka Shyam ",
        "title": "Assistant Professor (Senior scale), Rajiv Gandhi University of Knowledge Technologies, Andhra Pradesh ",
        "image": "assets/images/ecosystem/mentors/list/peraka_shyam.png",
        "phone": 8297118182,
        "email": "shyamperika@rguktn.ac.in",
        "linkedin": "https://www.linkedin.com/in/shyam2808?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Phani Kiran Kotipalli",
        "title": "Manager-IP, Ashland",
        "image": "assets/images/ecosystem/mentors/list/phani_kiran_kotipalli.png",
        "phone": 9885210808,
        "email": "kotiphanikiran@gmail.com",
        "linkedin": "https://www.linkedin.com/in/dr-phani-kiran-kotipalli-485b3a10/"
    },
    {
        "name": "Prabha Thanuja Koppula",
        "title": "Manager(Airport Traffic Management), Airports Authority of India",
        "image": "assets/images/ecosystem/mentors/list/prabha_thanuja_koppula.png",
        "phone": 8121377515,
        "email": "prabhathanujaece@gmail.com",
        "linkedin": "https://www.linkedin.com/in/prabha-thanuja"
    },
    {
        "name": "Praneeth Regulavalasa",
        "title": "CEO, Founder & CEO , RETOS, Mango",
        "image": "assets/images/ecosystem/mentors/list/praneeth_regulavalasa.png",
        "phone": 8341509389,
        "email": "praneethmailed@gmail.com",
        "linkedin": "https://www.linkedin.com/in/praneethregulavalasa/"
    },
    {
        "name": "Prasad Jaladi",
        "title": "Founder and Chief Facilitator, Suraksha",
        "image": "assets/images/ecosystem/mentors/list/prasad_jaladi.png",
        "phone": 9014606818,
        "email": "prasad@suraksha.us",
        "linkedin": "https://LinkedIn.com/in/PrasadJaladi"
    },
    {
        "name": "Prasanth Kalangi",
        "title": "Founder & CEO, Zoniqx Inc",
        "image": "assets/images/ecosystem/mentors/list/prasanth_kalangi.png",
        "phone": NaN,
        "email": "pkalangi@zoniqx.com",
        "linkedin": "https://www.linkedin.com/in/kalangi"
    },
    {
        "name": "Prasenjit Das",
        "title": "EIR, IIITB COMET",
        "image": "assets/images/ecosystem/mentors/list/prasenjit_das.png",
        "phone": 9972036137,
        "email": "prasenjitpdas@gmail.com",
        "linkedin": "https://www.linkedin.com/in/prasenjit-das-89106b10"
    },
    {
        "name": "Praveen Kumar  Viyyuri",
        "title": "Manager Air Traffic Management, Airports Authority of India",
        "image": "assets/images/ecosystem/mentors/list/praveen_kumar__viyyuri.png",
        "phone": 9100663600,
        "email": "praveenkumarviyyuri@gmail.com",
        "linkedin": "https://www.linkedin.com/in/praveen-kumar-viyyuri"
    },
    {
        "name": "Praveen Kumar Chekuri",
        "title": "CEO, ColabNow IT Solutions Pvt Ltd",
        "image": "assets/images/ecosystem/mentors/list/praveen_kumar_chekuri.png",
        "phone": 9742355899,
        "email": "Praveen.ch@colabnowit.com",
        "linkedin": "https://www.linkedin.com/in/praveen-chekuri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Praveen Mamidala",
        "title": "Senior engineer validation , Knorr bremse technology centre India",
        "image": "assets/images/ecosystem/mentors/list/praveen_mamidala.png",
        "phone": 8300173858,
        "email": "mamidalapraveen973@gmail.com",
        "linkedin": "https://www.linkedin.com/in/mamidalapraveen?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Praveen Varma  Buddaraju ",
        "title": "Product Manager , AquaExchange Agritech Pvt Ltd ",
        "image": "assets/images/ecosystem/mentors/list/praveen_varma__buddaraju.png",
        "phone": 9493609382,
        "email": "btdpraveen247@gmail.com",
        "linkedin": "https://www.linkedin.com/in/praveenvarmabuddaraju?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Preksha Dassani",
        "title": "Assistant Professor , Maharaja Surajmal Institute, New Delhi ",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 8019714690,
        "email": "preksha9125@gmail.com",
        "linkedin": "https://www.linkedin.com/in/preksha-dassani-31a649113?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Radhakrishna Sanka",
        "title": "Scientific Director, Aegion Dynamic",
        "image": "assets/images/ecosystem/mentors/list/radhakrishna_sanka.png",
        "phone": 9381551926,
        "email": "krishna@aegiondynamic.com",
        "linkedin": "https://linkedin.com/in/rkrishnasanka"
    },
    {
        "name": "Radhika Boppana",
        "title": "HR operations head, GMR",
        "image": "assets/images/ecosystem/mentors/list/radhika_boppana.png",
        "phone": 8870934289,
        "email": "Radhipuppy777@gmail.com",
        "linkedin": "Linkedin: https://www.linkedin.com/in/radhika-boppana-09438042/"
    },
    {
        "name": "Raghavender R",
        "title": "Chief Investment Officer, Garuda Aerospace Private Limited",
        "image": "assets/images/ecosystem/mentors/list/raghavender_r.png",
        "phone": 7395918535,
        "email": "raghavender1999@gmail.com",
        "linkedin": "http://linkedin.com/in/raghavender-r/"
    },
    {
        "name": "Rajiv Polur",
        "title": "Technical Delivery Manager , Accolite",
        "image": "assets/images/ecosystem/mentors/list/rajiv_polur.png",
        "phone": 9959101972,
        "email": "rajivpolur@gmail.com",
        "linkedin": "https://www.linkedin.com/in/rajivpolur"
    },
    {
        "name": "Rakesh  Asapanna ",
        "title": "Founder / CEO, Asapanna Technologies Private Limited ",
        "image": "assets/images/ecosystem/mentors/list/rakesh__asapanna.png",
        "phone": 8904473119,
        "email": "rakesh@asapanna.com",
        "linkedin": "https://www.linkedin.com/in/asapanna-rakesh"
    },
    {
        "name": "Rama Kishore  D",
        "title": "Chartered accountant , Institute of chartered accountant of india ",
        "image": "assets/images/ecosystem/mentors/list/rama_kishore__d.png",
        "phone": NaN,
        "email": "caramakishored@gmail.com",
        "linkedin": "https://www.linkedin.com/in/rama-kishore-denkala-aa263617a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Ramakrishna  Sunkara ",
        "title": "Senior Android Engineer , Backbase",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9703323201,
        "email": "RAMAKRISHNA8.SUNKARA@GMAIL.COM",
        "linkedin": "https://www.linkedin.com/in/ramandroid"
    },
    {
        "name": "Ramakrishna Jvs",
        "title": "Global BU Head - Sustainable Smart World, L&T Technology Services",
        "image": "assets/images/ecosystem/mentors/list/ramakrishna_jvs.png",
        "phone": 9502445454,
        "email": "ramakrishna.jvs@Ltts.com",
        "linkedin": "https://www.linkedin.com/in/jvsramakrishna?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Ramesh Swaminathan",
        "title": "Vice President Products, RealPage India Pvt Ltd",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9885440160,
        "email": "msramesh@gmail.com",
        "linkedin": NaN
    },
    {
        "name": "Rami Reddy",
        "title": "Head Technology, Dr. Reddys foundation",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9502512341,
        "email": "ramireddy@drreddysfoundation.org",
        "linkedin": NaN
    },
    {
        "name": "Ranita  Ray",
        "title": "Sr.Writer and Editor , The Times of India, Hindustan Times, Yellow.ai",
        "image": "assets/images/ecosystem/mentors/list/ranita__ray.png",
        "phone": NaN,
        "email": "ray.ranita@gmail.com",
        "linkedin": "https://in.linkedin.com/in/ranita-ray-journalist-editor-senior-content-writer"
    },
    {
        "name": "Ravi Kishore  Kaparthi ",
        "title": "CEO, Stanley College Of Engineering & Technology",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9949094488,
        "email": "kaparthiravikishore@gmail.com",
        "linkedin": "https://www.linkedin.com/in/dr-ravi-kishore-kaparthi-52b0b76/"
    },
    {
        "name": "Ravi Shankar Reddy Tammaneni",
        "title": "Specialist , Zf",
        "image": "assets/images/ecosystem/mentors/list/ravi_shankar_reddy__tammaneni.png",
        "phone": 9160468857,
        "email": "ravisankarreddytammineni@gmail.com",
        "linkedin": "https://www.linkedin.com/in/ravi-shankar-reddy-tammaneni"
    },
    {
        "name": "Ravisankar Nanupatruni",
        "title": "Corporate Development Manager, RVS Quality Certifications Pvt Ltd",
        "image": "assets/images/ecosystem/mentors/list/ravisankar_nanupatruni.png",
        "phone": 9000152830,
        "email": "nanupatruniravisankar@gmail.com",
        "linkedin": "https://www.linkedin.com/in/ravisankar-nanu-patruni-638996b1/"
    },
    {
        "name": "Raviteja Chithajallu ",
        "title": "Assistant Executive Engineer , AP TRANSCO",
        "image": "assets/images/ecosystem/mentors/list/raviteja_chithajallu.png",
        "phone": 8121592240,
        "email": "ravitejachithajallu@gmail.com",
        "linkedin": "https://www.linkedin.com/in/ravitejachithajallu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Rayudu Ravi Shankar",
        "title": "Audit assitant, Presently not working",
        "image": "assets/images/ecosystem/mentors/list/rayudu_ravi_shankar.png",
        "phone": 9110728224,
        "email": "ravishankar.shankar08@gmail.com",
        "linkedin": "https://www.linkedin.com/in/rayudu-ravi-shankar-b1b2b8159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Rehaman  Syed",
        "title": "Co Founder , Healthkard ",
        "image": "assets/images/ecosystem/mentors/list/rehaman__syed.png",
        "phone": 7842722245,
        "email": "rehamansyed07@gmail.com",
        "linkedin": "https://www.linkedin.com/in/rehaman-syed-680850172"
    },
    {
        "name": "Renu Sarath Babu Vegesna",
        "title": "Managing partner, Akshaya innotech",
        "image": "assets/images/ecosystem/mentors/list/renu_sarath_babu_vegesna.png",
        "phone": 9177893456,
        "email": "Renusarath@gmail.com",
        "linkedin": "https://www.linkedin.com/in/renu-sarath-vegesna-babu-13a872325/"
    },
    {
        "name": "Rizwan Syed",
        "title": "SENIOR EXECUTIVE ALUMNI Relations , Foundation for excellence ",
        "image": "assets/images/ecosystem/mentors/list/rizwan_syed.png",
        "phone": 9705007111,
        "email": "syedrizwan1097@gmail.com",
        "linkedin": "https://www.linkedin.com/in/rizwan-syed-26287a1a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Rohan Gupta",
        "title": "----, -----",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9924110595,
        "email": "guptarohanr@gmail.com",
        "linkedin": "https://www.linkedin.com/in/rohan-gupta-42b949256/"
    },
    {
        "name": "Sai  Pattabiram ",
        "title": "Managing Director , Zuppa Geo Navigation Technologies Pvt Ltd ",
        "image": "assets/images/ecosystem/mentors/list/sai__pattabiram.png",
        "phone": 8939314680,
        "email": "sai@zuppa.io",
        "linkedin": "https://www.linkedin.com/in/sai-pattabiram-299a843b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Sai Teja Sahukari ",
        "title": "Founder & CEO, TOTAL DESIGN - ENGINEERING & INFRASTRUCTURE ",
        "image": "assets/images/ecosystem/mentors/list/sai_teja_sahukari.png",
        "phone": 7036278930,
        "email": "saitejasahukari0@gmail.com",
        "linkedin": "https://www.linkedin.com/in/sai-teja-sahu-53864b1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Saikrishna  Kanukurti",
        "title": "Founder, Emerging Bot Technologies ",
        "image": "assets/images/ecosystem/mentors/list/saikrishna__kanukurti.png",
        "phone": 9390616702,
        "email": "saikrishnarao2@gmail.com",
        "linkedin": "https://www.linkedin.com/in/saikrishna-kanukurti-491b0b89?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Sailesh Ganduri ",
        "title": "Founder and managing director, Famnutra Millet foods private limited",
        "image": "assets/images/ecosystem/mentors/list/sailesh_ganduri.png",
        "phone": 9985614945,
        "email": "famnutra@gmail.com",
        "linkedin": "https://www.linkedin.com/in/saileshganduri"
    },
    {
        "name": "Sairam Uppugundla",
        "title": "Founder and CEO, Codegnan IT Solutions Private Limited ",
        "image": "assets/images/ecosystem/mentors/list/sairam_uppugundla.png",
        "phone": 9959555952,
        "email": "sairam@codegnan.com",
        "linkedin": "https://www.linkedin.com/in/sairam-uppugundla"
    },
    {
        "name": "Samarpan  Karra",
        "title": "CEO, Artflix Design Agency ",
        "image": "assets/images/ecosystem/mentors/list/samarpan__karra.png",
        "phone": 6303366791,
        "email": "ceo@artflixdesign.com",
        "linkedin": "https://www.linkedin.com/in/samarpankarra"
    },
    {
        "name": "Sanjay Romala ",
        "title": "Founder , SportsTribe ",
        "image": "assets/images/ecosystem/mentors/list/sanjay_romala.png",
        "phone": 9966828515,
        "email": "Sanjayromala19@gmail.com",
        "linkedin": "https://www.linkedin.com/in/lakshmi-kamal-sanjay-romala-47617686"
    },
    {
        "name": "Santhosh Kumar Manchala",
        "title": "Founder, Wellnesson",
        "image": "assets/images/ecosystem/mentors/list/santhosh_kumar_manchala.png",
        "phone": 9392263274,
        "email": "santhosh.oraclescm@gmail.com",
        "linkedin": "https://www.linkedin.com/in/santhoshkumarmanchala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Saptarshi  Chatterjee",
        "title": "Associate Director, Incubation, E-YUVA Centre, Adamas University (Supported by BIRAC)",
        "image": "assets/images/ecosystem/mentors/list/saptarshi__chatterjee.png",
        "phone": 7016636678,
        "email": "saptarshi.chatterjee@adamasuniversity.ac.in",
        "linkedin": "https://www.linkedin.com/in/dr-saptarshi-chatterjee-549a3421?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Satwik Chinta",
        "title": "Founder, Mohi",
        "image": "assets/images/ecosystem/mentors/list/satwik_chinta.png",
        "phone": 6301135892,
        "email": "satu.three@gmail.com",
        "linkedin": "https://www.linkedin.com/in/satwik-chinta/"
    },
    {
        "name": "Satya Kommana",
        "title": "Director , Aaasthi Solutions Private Limited",
        "image": "assets/images/ecosystem/mentors/list/satya_kommana.png",
        "phone": 9849232737,
        "email": "AAASTHI.Dm@GMAIL.COM",
        "linkedin": "https://www.linkedin.com/in/babi-kommana2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Satya Kumar Palli",
        "title": "Deputy Manager, NISG",
        "image": "assets/images/ecosystem/mentors/list/satya_kumar_palli.png",
        "phone": 9494337822,
        "email": "satyakumar5palli@gmail.com",
        "linkedin": "www.linkedin.com/in/satyakumar-palli"
    },
    {
        "name": "Satyabrata  Satapathy",
        "title": "Founder and CEO , BonV Aero",
        "image": "assets/images/ecosystem/mentors/list/satyabrata__satapathy.png",
        "phone": 9945585250,
        "email": "Satya@bonvaero.com",
        "linkedin": "https://in.linkedin.com/in/satya5"
    },
    {
        "name": "Satyadhyan  Chickerur ",
        "title": "Founder and Director , Techxcelerate Innnovations Pvt Ltd ",
        "image": "assets/images/ecosystem/mentors/list/satyadhyan__chickerur.png",
        "phone": NaN,
        "email": "contact@techxcelerateinnovations.com",
        "linkedin": "https://www.linkedin.com/in/chickerursr/"
    },
    {
        "name": "Satyanarayana  Chintapalli ",
        "title": "Managing Director , Praxsol Engineering Private Limited",
        "image": "assets/images/ecosystem/mentors/list/satyanarayana__chintapalli.png",
        "phone": 7567016303,
        "email": "satya@praxsol.in",
        "linkedin": "https://www.linkedin.com/company/praxsol-engineering-private-limited/"
    },
    {
        "name": "Satyanarayana Vasireddy ",
        "title": "Co-Founder , Lovelychocos ",
        "image": "assets/images/ecosystem/mentors/list/satyanarayana_vasireddy.png",
        "phone": 9652177277,
        "email": "hello@lovelychocos.com",
        "linkedin": "https://in.linkedin.com/in/satyavasireddy"
    },
    {
        "name": "Sayan Ganguly",
        "title": "Chief Strategy Officer, KDR Group of Companies",
        "image": "assets/images/ecosystem/mentors/list/sayan_ganguly.png",
        "phone": 8978043354,
        "email": "sayan.innovation@gmail.com",
        "linkedin": "https://www.linkedin.com/in/sayanganguly1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Sayanika Deka",
        "title": "Founder, IndiMeat",
        "image": "assets/images/ecosystem/mentors/list/sayanika_deka.png",
        "phone": 8638048838,
        "email": "svasthasamriddhi@gmail.com",
        "linkedin": "https://www.linkedin.com/in/sayanika-deka-265b8b274/"
    },
    {
        "name": "Sayyid Sawad",
        "title": "Cofounder, 1trepreneur",
        "image": "assets/images/ecosystem/mentors/list/sayyid_sawad.png",
        "phone": 7736495689,
        "email": "sawadsayyid786@gmail.com",
        "linkedin": "www.linkedin.com/in/sayyid-sawad"
    },
    {
        "name": "Seelaboina Sai Venkat",
        "title": "Chief marketing officer , Gaganyan Aerospace LLP",
        "image": "assets/images/ecosystem/mentors/list/seelaboina_sai_venkat.png",
        "phone": 9390238537,
        "email": "saivenkat09565@gmail.com",
        "linkedin": "https://www.linkedin.com/in/saivenkat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Shaik  Shahid ",
        "title": "Enterprise Architect Manager , Matthews ",
        "image": "assets/images/ecosystem/mentors/list/shaik__shahid.png",
        "phone": 8861017999,
        "email": "mohammadasraar@gmail.com",
        "linkedin": "https://www.linkedin.com/in/shaikstack"
    },
    {
        "name": "Shaik Johny  Basha",
        "title": "MANAGER TECHNICAL SOUTH INDIA , SIFY TECHNOLOGIES ",
        "image": "assets/images/ecosystem/mentors/list/shaik_johny__basha.png",
        "phone": 7997158394,
        "email": "jbshaikcsc@hotmail.com",
        "linkedin": "https://www.linkedin.com/in/johny-basha-shaik-jb-shaik-60468722/"
    },
    {
        "name": "Shaik Mohammad Usman",
        "title": "Chief Dat Scientist, Imaigen AI",
        "image": "assets/images/ecosystem/mentors/list/shaik_mohammad_usman.png",
        "phone": 6303438141,
        "email": "shaikmohammadusman@imaigen.ai",
        "linkedin": "https://www.linkedin.com/in/shaik-mohammad-usman/"
    },
    {
        "name": "Shaik Rabbani  Basha ",
        "title": "IoT Infrastructure analyst , TRELLEBORG Group ",
        "image": "assets/images/ecosystem/mentors/list/shaik_rabbani__basha.png",
        "phone": 7337380079,
        "email": "rabbanibasha590@gmail.com",
        "linkedin": NaN
    },
    {
        "name": "Shyam Kumar  Katta",
        "title": "Director , Heifer International ",
        "image": "assets/images/ecosystem/mentors/list/shyam_kumar__katta.png",
        "phone": 9246477308,
        "email": "benny.katta@gmail.com",
        "linkedin": "https://www.linkedin.com/in/benny-katta/"
    },
    {
        "name": "Shyam Nadergul",
        "title": "consultant, independant",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 8519954853,
        "email": "dattasharma20.n@gmail.com",
        "linkedin": "https://www.linkedin.com/in/shyam-nadergul-85a6b65"
    },
    {
        "name": "Siva Pavankumar Raju Mantena",
        "title": "Head innovation, incubation and Entrepreneurship, SASI INSTITUTE OF TECHNOLOGY AND ENGINEERING",
        "image": "assets/images/ecosystem/mentors/list/siva_pavankumar_raju_mantena.png",
        "phone": 7777881333,
        "email": "pavanmantena89@gmail.com",
        "linkedin": "https://www.linkedin.com/in/mspkr/"
    },
    {
        "name": "Somaiah Chowdary Kalluri",
        "title": "Consultant-Technical lead, TCS",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 19452163462,
        "email": "somucareer2010@gmail.com",
        "linkedin": "https://www.linkedin.com/feed/"
    },
    {
        "name": "Sreeharsha  Pandula ",
        "title": "Director of Product and Operations , Astroc As Technology ",
        "image": "assets/images/ecosystem/mentors/list/sreeharsha__pandula.png",
        "phone": 9949113350,
        "email": "sreeharsha@astrocastech.in",
        "linkedin": "https://in.linkedin.com/in/sree-harsha-pandula-a6992a36"
    },
    {
        "name": "Sreenivas  Pusarla ",
        "title": "Founder, 3D LABS INDIA ",
        "image": "assets/images/ecosystem/mentors/list/sreenivas__pusarla.png",
        "phone": 9949693924,
        "email": "Info@3dlabsindia.com",
        "linkedin": "https://www.linkedin.com/in/sreenivas-pusarla-97a8961ba/"
    },
    {
        "name": "Sreenivasa Pisupati",
        "title": "Chief Technology Evangelist, Data for Decisions Technologies Pvt lts",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9985241286,
        "email": "s_pisupati@hotmail.com",
        "linkedin": "www.linkedin.com/in/sreenivasa-pisupati-9053444"
    },
    {
        "name": "Sri Charan  Lakkaraju",
        "title": "Founder and CEO, Student Tribe",
        "image": "assets/images/ecosystem/mentors/list/sri_charan__lakkaraju.png",
        "phone": 8106922552,
        "email": "charanlakkaraju89@gmail.com",
        "linkedin": "https://www.linkedin.com/in/sricharanlakkaraju?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Sribrijeesh Ravella",
        "title": "SENIOR AGILE COACH AND DEPUTY TO DEFECT MANAGER, MBItion GmbH (Mercedes-Benz Innovation labs GmbH)",
        "image": "assets/images/ecosystem/mentors/list/sribrijeesh_ravella.png",
        "phone": 4917675861112,
        "email": "SRIBRIJEESH.RAVELLA@GMAIL.COM",
        "linkedin": "https://www.linkedin.com/in/sribrijeesh-ravella/"
    },
    {
        "name": "Sridevi  Talluri",
        "title": "Founder, spaceinf technologies private limited",
        "image": "assets/images/ecosystem/mentors/list/sridevi__talluri.png",
        "phone": 8143112661,
        "email": "srice2001@gmail.com",
        "linkedin": "www.linkedin.com/in/sridevi-talluri-gis"
    },
    {
        "name": "Srilatha  Pericharla ",
        "title": "Managing Director , Krishna Sri Paripurna Foundation",
        "image": "assets/images/ecosystem/mentors/list/srilatha__pericharla.png",
        "phone": 9848525244,
        "email": "srilathapericharla@gmail.com",
        "linkedin": NaN
    },
    {
        "name": "Srinivas  Muppaneni ",
        "title": "CTO, Marven Data",
        "image": "assets/images/ecosystem/mentors/list/srinivas__muppaneni.png",
        "phone": 8374483447,
        "email": "Srmuppaneni@gmail.com",
        "linkedin": "LinkedIn.com/in/srmuppaneni"
    },
    {
        "name": "Sudheer Kumar Aitha",
        "title": "PhD Scholar, IIT Jodhpur",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 918122959895,
        "email": "aithasudheerkumar@gmail.com",
        "linkedin": "https://www.linkedin.com/in/sudheer-kumar-aitha-5a0435130/"
    },
    {
        "name": "Sujit Sagar Sasapu",
        "title": "Software Architect, SupportLogic",
        "image": "assets/images/ecosystem/mentors/list/sujit_sagar_sasapu.png",
        "phone": 8050534756,
        "email": "contact@sujitsagar.com",
        "linkedin": "https://www.linkedin.com/in/sujitsagar/"
    },
    {
        "name": "Sunny Agarwal",
        "title": "CEO, ACIC CBIT Research and Entrepreneurship Foundation ",
        "image": "assets/images/ecosystem/mentors/list/sunny_agarwal.png",
        "phone": 8797578039,
        "email": "sunnycujiwem@gmail.com",
        "linkedin": "https://www.linkedin.com/in/dr-sunny-agarwal-b9052a65?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Surendra Loya",
        "title": "Associate Professor, Dhanekula Institue of Engineering and Technology ",
        "image": "assets/images/ecosystem/mentors/list/surendra_loya.png",
        "phone": 7036671222,
        "email": "surendra.loya2018@gmail.com",
        "linkedin": "https://www.linkedin.com/in/dr-surendra-loya-3737571b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Suresh  Susurla ",
        "title": "Managing Director , Startoon Labs Private Limited ",
        "image": "assets/images/ecosystem/mentors/list/suresh__susurla.png",
        "phone": 9133925836,
        "email": "Suresh.susurla@startoonlabs.com",
        "linkedin": "https://www.linkedin.com/in/sureshsusurla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Suresh Kumar Varma Gadhiraju",
        "title": "Practicing CMA, ID, Valuation, ESG, CSR, IS&FA, ADR Professional, G S K Varma & Co",
        "image": "assets/images/ecosystem/mentors/list/suresh_kumar_varma_gadhiraju.png",
        "phone": 9052201100,
        "email": "gskvarma.co@gmail.com",
        "linkedin": "https://www.linkedin.com/in/suresh-kumar-varma-g/"
    },
    {
        "name": "Suresh Munuswamy",
        "title": "Dean, School of Digital Health, IIHMR UNIVERSITY",
        "image": "assets/images/ecosystem/mentors/list/suresh_munuswamy.png",
        "phone": 9959560333,
        "email": "suresh@iihmr.edu.in",
        "linkedin": "https://www.linkedin.com/in/sureshmunuswamy/"
    },
    {
        "name": "Surya M Rajendran",
        "title": "Director, Entreovert People Association",
        "image": "assets/images/ecosystem/mentors/list/surya_m_rajendran.png",
        "phone": 8072375909,
        "email": "suryamrajendran@gmail.com",
        "linkedin": "https://www.linkedin.com/in/suryamrajendran/"
    },
    {
        "name": "Surya Teja",
        "title": "Founder & CEO, Teck Mantrik Innovations Private Limited",
        "image": "assets/images/ecosystem/mentors/list/surya_teja.png",
        "phone": 9492535574,
        "email": "ceo@teckmantrik.com",
        "linkedin": "https://www.linkedin.com/in/suryateja1604?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Surya Teja Bachu",
        "title": "Founder , Phygital Design lab",
        "image": "assets/images/ecosystem/mentors/list/surya_teja_bachu.png",
        "phone": 9727801814,
        "email": "suryatejabachu@gmail.com",
        "linkedin": "https://www.linkedin.com/in/suryatejabachu"
    },
    {
        "name": "Susanta Dash",
        "title": "Dy CTO, SBI",
        "image": "assets/images/ecosystem/mentors/list/susanta_dash.png",
        "phone": 8149108345,
        "email": "dashsusa@gmail.com",
        "linkedin": "https://www.linkedin.com/in/skdash"
    },
    {
        "name": "Swarnalatha  Kandregula ",
        "title": "Assistant Professor and Hostel Incharge , Vignan's Institute of Engineering for Women ",
        "image": "assets/images/ecosystem/mentors/list/swarnalatha__kandregula.png",
        "phone": 9493109394,
        "email": "swarnalathakandregula@gmail.com",
        "linkedin": "https://www.linkedin.com/in/swarnalatha-kandregula-ph-d-b2318023b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "T Ch Anil  Kumar",
        "title": "Director - VU SKILL SEVELOPMENT CENTER & HOD, VIGNAN'S FOUNDATION FOR SCIENCE TECHNOLOGY AND RESEARCH ",
        "image": "assets/images/ecosystem/mentors/list/t_ch_anil__kumar.png",
        "phone": 9679906306,
        "email": "tcak_mech@vignan.ac.in",
        "linkedin": "https://www.linkedin.com/in/t-chiranjeevi-anil-kumar-411b851b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "T S Anandhasekar",
        "title": "PROJECT OFFICER, ENTREPRENEURSHIP DEVELOPMENT INSTITUTE OF INDIA",
        "image": "assets/images/ecosystem/mentors/list/t_s_anandhasekar.png",
        "phone": 9791309389,
        "email": "anandh.df@gmail.com",
        "linkedin": "https://www.linkedin.com/in/anandhasekar-t-s-16865626a"
    },
    {
        "name": "Tadiboina Samantha  Kumar ",
        "title": "Assistant professor , School of planning and architecture Vijayawada ",
        "image": "assets/images/ecosystem/mentors/list/tadiboina_samantha__kumar.png",
        "phone": 9642724212,
        "email": "bobby9642724212@gmail.com",
        "linkedin": "https://www.linkedin.com/in/samanth-kumar-b8a56560?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Ujwal  Surampalli ",
        "title": "Founder , InterviewBuddy",
        "image": "assets/images/ecosystem/mentors/list/ujwal__surampalli.png",
        "phone": 9000330731,
        "email": NaN,
        "linkedin": "https://www.linkedin.com/in/haiujwal"
    },
    {
        "name": "Uma Sankar  Reddy",
        "title": "Head of Partnerships, Talking Yak",
        "image": "assets/images/ecosystem/mentors/list/uma_sankar__reddy.png",
        "phone": 8309036482,
        "email": "umasankar0890@gmail.com",
        "linkedin": "https://in.linkedin.com/in/umasankarc"
    },
    {
        "name": "V S S Kiran",
        "title": "CEO, Garudalytics ",
        "image": "assets/images/ecosystem/mentors/list/v_s_s_kiran.png",
        "phone": 7382169329,
        "email": "vssk@garudalytics.com",
        "linkedin": "https://linkedin.com/vsskiran"
    },
    {
        "name": "Valli Devi  Bolla ",
        "title": "Research Fellow , SIB SHInE Biodesign Program ",
        "image": "assets/images/ecosystem/mentors/list/valli_devi__bolla.png",
        "phone": 8121773113,
        "email": "vallidevibolla@gmail.com",
        "linkedin": "https://www.linkedin.com/in/vallidevi-bolla-b2003a175/"
    },
    {
        "name": "Vamsi Mohan  Patibandla ",
        "title": "Founder & Executive Director , Blink Card (Wave Card Private Limited)",
        "image": "assets/images/ecosystem/mentors/list/vamsi_mohan__patibandla.png",
        "phone": 8872244447,
        "email": "vamsimohan.patibandla@wavecard.co.in",
        "linkedin": "https://www.linkedin.com/in/vamsi-mohan-patibandla/"
    },
    {
        "name": "Varadarajan  Krishna ",
        "title": "Cofounder , The 100 Open Startups ",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9845263959,
        "email": "Varad.krishna@openstartups.net",
        "linkedin": "https://www.linkedin.com/in/krishvarad "
    },
    {
        "name": "Vasudev  Vangara",
        "title": "Senior venture Coach , GITAM Deemed to be university ",
        "image": "assets/images/ecosystem/mentors/list/vasudev__vangara.png",
        "phone": 9703831819,
        "email": "vasudev.vangara2014@teachforindia.org",
        "linkedin": "https://www.linkedin.com/in/vvasudeva21?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Venkata Gowtam Kuppannagari",
        "title": "Trainer, Samsung Electronics India Limited",
        "image": "assets/images/ecosystem/mentors/list/venkata_gowtam_kuppannagari.png",
        "phone": 9620507778,
        "email": "Kvenkatagoutham@gmail.com",
        "linkedin": "https://www.linkedin.com/in/venkatagowtamk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        "name": "Venkata Sanjeev P",
        "title": "Director, Manvision",
        "image": "assets/images/ecosystem/mentors/list/venkata_sanjeev_p.png",
        "phone": 9652212121,
        "email": "Pvs4jsp@gmail.com",
        "linkedin": NaN
    },
    {
        "name": "Venkatesh  Karry",
        "title": "Founder & CTO, Rapid Labs",
        "image": "assets/images/ecosystem/mentors/list/venkatesh__karry.png",
        "phone": 8106092310,
        "email": "karryvenkatesh@gmail.com",
        "linkedin": "https://www.linkedin.com/in/venkatesh-karry-915782166/"
    },
    {
        "name": "Venu GR",
        "title": "International Mentor & CEO, RMIT UNIVERSITY Mentor & Wadhwani Foundation Mentor & ATL",
        "image": "assets/images/ecosystem/mentors/list/venu_gr.png",
        "phone": 9008883646,
        "email": "starnelceo@gmail.com",
        "linkedin": "www.linkedin.com/in/snel-ceo-376421155"
    },
    {
        "name": "Venu Kota",
        "title": "Global Strategy & Operations Lead, ServiceNow",
        "image": "assets/images/ecosystem/mentors/list/venu_kota.png",
        "phone": 9663115577,
        "email": "vekota55@gmail.com",
        "linkedin": "www.linkedin.com/in/venukota"
    },
    {
        "name": "Venugopal Chandika ",
        "title": "Freelancer, PUR Energy Private Limited ",
        "image": "assets/images/ecosystem/mentors/list/venugopal_chandika.png",
        "phone": 7799992466,
        "email": "venugopal.patent@gmail.com",
        "linkedin": "https://www.linkedin.com/in/venugopal-chandika-6ba669146"
    },
    {
        "name": "Vijay Kumar  Mathurthi",
        "title": "Director, DIGITAL WOM SERVICES (OPC) PRIVATE LIMITED",
        "image": "assets/images/ecosystem/mentors/list/vijay_kumar__mathurthi.png",
        "phone": 7780226311,
        "email": "vijay@digitalwom.com",
        "linkedin": "https://www.linkedin.com/in/vijay-kumar-mathurthi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Vijay Kumar Mo",
        "title": "MSME consultant , VESTRO ",
        "image": "assets/images/ecosystem/mentors/list/user.png",
        "phone": 9676516329,
        "email": "amcon1020@gmail.com",
        "linkedin": NaN
    },
    {
        "name": "Vijaya Krishna Kandula",
        "title": "Deputy General Manager, International Automobile Centre of Excellence (iACE)",
        "image": "assets/images/ecosystem/mentors/list/vijaya_krishna_kandula.png",
        "phone": 9582111956,
        "email": "vijayakrishna238@gmail.com",
        "linkedin": "https://www.linkedin.com/in/vijayakrishnakandula"
    },
    {
        "name": "Vinay Chowdary",
        "title": "Senior Manager, DSJ KeepLearning ",
        "image": "assets/images/ecosystem/mentors/list/vinay_chowdary.png",
        "phone": 9897853654,
        "email": "vinay.ch1@gmail.com",
        "linkedin": "https://www.linkedin.com/in/vinay-chowdary-phd-54a10347"
    },
    {
        "name": "Vinay Kumar Reddy  Surasani ",
        "title": "CEO, Cognitbotz solutions ",
        "image": "assets/images/ecosystem/mentors/list/vinay_kumar_reddy__surasani.png",
        "phone": 9346575094,
        "email": "Vinayreddy@cognitbotz.com",
        "linkedin": "https://www.linkedin.com/in/vinayreddysurasani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        "name": "Vineet  Kumar",
        "title": "Venture Coach, GITAM UNIVERSITY, HYDERABAD",
        "image": "assets/images/ecosystem/mentors/list/vineet__kumar.png",
        "phone": 8409101268,
        "email": "vineetkumarkvs44@gmail.com",
        "linkedin": "www.linkedin.com/in/vineetz"
    },
    {
        "name": "Vineet  S",
        "title": "Sales Lead , ASPL ",
        "image": "assets/images/ecosystem/mentors/list/vineet__s.png",
        "phone": NaN,
        "email": "krishnavineet08@gmail.com",
        "linkedin": "LinkedIn.com/in/vineetsmk"
    },
    {
        "name": "Yaseen Shaik",
        "title": "Senior Manager, NSRCEL - IIM B",
        "image": "assets/images/ecosystem/mentors/list/yaseen_shaik.png",
        "phone": 9121083803,
        "email": "shaikyaseenshareef51@gmail.com",
        "linkedin": "https://www.linkedin.com/in/shaikyaseenshareef/"
    },
    {
        "name": "Yugandhar Veerabhadra Manem",
        "title": "Tenured Expert Angel, Brane Enterprises",
        "image": "assets/images/ecosystem/mentors/list/yugandhar_veerabhadra_manem.png",
        "phone": 9908817778,
        "email": "MV_YUGANDHAR@YAHOO.COM",
        "linkedin": "https://www.linkedin.com/in/mv-yugandhar-8245921/"
    },
    {
        "name": "Uday Middhe",
        "title": "Founder/CEO, Techy Staffing AI",
        "image": "assets/images/ecosystem/mentors/list/uday_middhe.png",
        "phone": 8522878218,
        "email": "uday@techystaffing.com",
        "linkedin": "https://www.linkedin.com/in/udaymiddhe-isf/"
    }
    ]
  }
// Method to apply filters and sorting
// applyFiltersAndSorting() {
//   this.filteredMentors = this.mentorsList.filter(profile =>
//     profile.name.toLowerCase().includes(this.searchTerm.toLowerCase())
//   );
//   this.filteredMentors.sort((a, b) => a.name.localeCompare(b.name));
//   this.currentPage = 1;
// }


// applyFiltersAndSorting() {
//     this.filteredMentors = this.mentorsList
//       .filter(profile => profile.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
//       .sort((a, b) => a.name.localeCompare(b.name));
//     this.currentPage = 1;
//   }


applyFiltersAndSortingold() {
    // Filter by name only if searchTerm is not empty
    this.filteredMentors = this.mentorsList.filter(profile =>
      profile.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  
    // Sort alphabetically by name
    this.filteredMentors.sort((a, b) => a.name.localeCompare(b.name));
  
    // Reset to the first page only if a new search term is applied
    if (this.searchTerm) {
      this.currentPage = 1;
    }
  }
  
  applyFiltersAndSorting() {
    // Convert search term to lowercase for case-insensitive matching
    const searchTermLower = this.searchTerm.toLowerCase();
  
    // Filter by name, title, or phone
    this.filteredMentors = this.mentorsList.filter(profile =>
      profile.name.toLowerCase().includes(searchTermLower) ||
      (profile.title && profile.title.toLowerCase().includes(searchTermLower)) ||
      (profile.phone && profile.phone.toString().includes(searchTermLower))
    );
  
    // Sort alphabetically by name
    this.filteredMentors.sort((a, b) => a.name.localeCompare(b.name));
  
    // Reset to the first page only if a new search term is applied
    if (this.searchTerm) {
      this.currentPage = 1;
    }
  }


get paginatedMentors() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.filteredMentors.slice(startIndex, endIndex);
}

nextPage() {
  if ((this.currentPage * this.itemsPerPage) < this.filteredMentors.length) {
    this.currentPage++;
  }
}

previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

// onSearchChange(searchValue: string) {
//   this.searchTerm = searchValue;
//   this.applyFiltersAndSorting();
// }


// onSearchChange(searchValue: string) {
//     this.searchTerm = searchValue;
//     this.applyFiltersAndSorting();
//   }

onSearchChange(searchValue: string) {
    this.searchTerm = searchValue;
    this.applyFiltersAndSorting();
  }
  

  get totalMentorsCount() {
    return this.filteredMentors.length;
  }

// get totalMentorsCount() {
//   return this.filteredMentors.length;
// }
}
