import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as data from '../../../assets/SchemesPolicies.json'; // Adjust the relative path if necessary

@Component({
  selector: 'app-departmentinstitutionalsupportstartups',
  templateUrl: './departmentinstitutionalsupportstartups.component.html',
  styleUrls: ['./departmentinstitutionalsupportstartups.component.css']
})
export class DepartmentinstitutionalsupportstartupsComponent implements OnInit {
  @ViewChild('tableContainer') tableContainer!: ElementRef; // Reference to scrollable element

  tableData: any[] = []; // Complete data from JSON
  filteredData: any[] = []; // Filtered data for search and display
  searchQuery: string = ''; // Search input
  totalItems: number = 0; // Total items count after filtering
  currentPage: number = 1; // Current page for pagination
  itemsPerPage: number = 5; // Number of items per page

  constructor() {}

  ngOnInit(): void {
    this.tableData = (data as any).default; // Load JSON data
    this.filteredData = [...this.tableData]; // Initialize filtered data
    this.totalItems = this.filteredData.length; // Initialize total count
  }

  // Normalize ParsedDetails to ensure all values are arrays
  normalizeParsedDetails(details: any): any {
    if (!details) return {};
    const normalizedDetails: any = {};
    Object.keys(details).forEach(key => {
      const value = details[key];
      normalizedDetails[key] = Array.isArray(value) ? value : [value]; // Ensure value is always an array
    });
    return normalizedDetails;
  }

  // Search functionality
  onSearch(): void {
    const query = this.searchQuery.trim().toLowerCase();

    // If search query is empty, reset the filtered data
    if (!query) {
      this.filteredData = [...this.tableData];
    } else {
      // Filter the data
      this.filteredData = this.tableData.map(item => {
        const matches = this.searchInObject(item, query);
        if (matches) {
          return {
            ...item,
            ParsedDetails: this.normalizeParsedDetails(item.ParsedDetails) // Normalize ParsedDetails for filtered data
          };
        }
        return null;
      }).filter(item => item !== null); // Remove null results
    }

    // Update total items and reset pagination
    this.totalItems = this.filteredData.length;
    this.currentPage = 1; // Reset to the first page
  }

  // Recursive function to search deeply in all object fields, including ParsedDetails
  searchInObject(obj: any, query: string): boolean {
    if (typeof obj === 'string' || typeof obj === 'number') {
      return obj.toString().toLowerCase().includes(query);
    }
    if (typeof obj === 'object' && obj !== null) {
      return Object.values(obj).some(value => this.searchInObject(value, query));
    }
    return false;
  }

  // Helper function to get keys of ParsedDetails object
  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  // Handle pagination page change
  onPageChange(page: number): void {
    this.currentPage = page;

    // Scroll to top
    if (this.tableContainer) {
      this.tableContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
