import { Component, OnInit } from '@angular/core';
import * as schoolData from '../../../assets/Schools_ATLS_List.json'; // Adjust the relative path if necessary

@Component({
  selector: 'app-schoolsatls',
  templateUrl: './schoolsatls.component.html',
  styleUrls: ['./schoolsatls.component.css']
})
export class SchoolsatlsComponent implements OnInit {

schoolsList : any[] = [];
filteredSchools: any[] = [];
searchText: string = '';
currentPage: number = 1;


  constructor() { }

  ngOnInit(): void {
    this.loadSchools();
  }
  loadSchools(): void {
    this.schoolsList = (schoolData as any).default || schoolData;
    this.sortBySchoolName();
    this.filteredSchools = this.schoolsList;
  }
  ngOnChanges(): void {
    this.filteredSchools = this.filterData();
  }

  filterData(): any[] {
    // Filter schools based on the search text
    if (!this.searchText) {
      return this.schoolsList;
    }
    return this.schoolsList.filter((school) =>
      Object.values(school).some((value) =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  onSearch(): void {
    // Update filtered list on search
    this.filteredSchools = this.filterData();
    this.currentPage = 1; // Reset to first page after search
  }

  sortBySchoolName(): void {
    // Automatically sort by school_name in ascending order
    this.schoolsList.sort((a, b) => {
      const nameA = a.school_name.toLowerCase();
      const nameB = b.school_name.toLowerCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });
    this.filteredSchools = this.schoolsList; // Ensure filtered list reflects sorting
  }

}
