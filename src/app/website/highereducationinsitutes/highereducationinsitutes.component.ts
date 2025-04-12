import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-highereducationinsitutes',
  templateUrl: './highereducationinsitutes.component.html',
  styleUrls: ['./highereducationinsitutes.component.css']
})
export class HighereducationinsitutesComponent implements OnInit {

  institutions: any[] = [];



  tableData: any[] = [];
  headers: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadExcelFile();
    this.institutions = [
      {
        S_No: 1,
        Institute_Details: [
          {
            name: "Anantha Lakshmi Institute of Technology and Science",
            place: "Anantapur",
            email: ""
          },
        ],
        Type_of_College: "Engineering",
        District: "Anantapur",
        Coordinator_Name: "Dr. Y. L. Ajay Kumar",
        Institute_Email: ["alts.atp@gmail.com", "bits.atp@gmail.com"],
        Institute_Mobile_Nos: ["08554-255233"],
        General_Mobile_Nos: ["9533513999", "9676023906"],
        Accreditation_Status: "No",
        CGPA: "",
        Grade: "",
        Valid_Upto: "",
      },
      {
        S_No: 2,
        Institute_Details: [
          {
            name: "Balaji College of Pharmacy",
            place: "Rudrampeta, Alamur",
          },
        ],
        Type_of_College: "Pharmacy",
        District: "Anantapur",
        Coordinator_Name: "Dr. P. Rama Krishna Reddy",
        Institute_Email: ["balajicollegeofpharmacy.atp@gmail.com"],
        Institute_Mobile_Nos: ["08554-232268"],
        General_Mobile_Nos: ["8886630042"],
        Accreditation_Status: "No",
        CGPA: "",
        Grade: "",
        Valid_Upto: "",
      },
    ];
    
  }

  loadExcelFile(): void {
    this.http.get('assets/images/enablers/highereducationalinstitutes/List of Higher Educational Instituions with ESICs.xlsx', { responseType: 'arraybuffer' })
      .subscribe(
        (data) => {
          const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
          const sheetName = workbook.SheetNames[0]; // Get the first sheet
          const sheet = workbook.Sheets[sheetName];

          // Convert sheet to JSON
          const jsonData: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];

          if (jsonData.length > 0) {
            this.headers = jsonData[0] as string[]; // First row as headers
            this.tableData = jsonData.slice(1); // Remaining rows as data
          }
        },
        (error) => {
          console.error('Error loading Excel file:', error);
        }
      );
  }



}
