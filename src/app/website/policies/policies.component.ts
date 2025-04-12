import { Component, OnInit } from '@angular/core';
import * as policiesData from '../../../assets/policies.json'; // Adjust the relative path if necessary

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  policiesList : any[] = [];
  filteredPolicies: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;


  constructor() { }

  ngOnInit(): void {
    this.loadPolicies();
  }
  loadPolicies(): void {
    this.policiesList = (policiesData as any).default || policiesData;
    // this.sortByDescription(); // Automatically sort by description
    this.filteredPolicies = this.policiesList;
  }

  filterData(): any[] {
    // Filter policies based on the search term
    if (!this.searchTerm) {
      return this.policiesList;
    }
    return this.policiesList.filter((policy) =>
      Object.values(policy).some((value) =>
        value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  onSearch(): void {
    // Update filtered list on search
    this.filteredPolicies = this.filterData();
    this.currentPage = 1; // Reset to the first page after search
  }

  sortByDescription(): void {
    // Automatically sort by description in ascending order
    this.policiesList.sort((a, b) => {
      const descA = a.description.toLowerCase();
      const descB = b.description.toLowerCase();
      return descA < descB ? -1 : descA > descB ? 1 : 0;
    });
    this.filteredPolicies = this.policiesList; // Ensure filtered list reflects sorting
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  onPageChange(event: number) {
    this.currentPage = event;
    this.scrollToTop(); // Scroll to the top when the page changes
  }
}
