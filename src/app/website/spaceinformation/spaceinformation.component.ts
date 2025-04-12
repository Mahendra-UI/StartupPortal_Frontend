import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaceinformation',
  templateUrl: './spaceinformation.component.html',
  styleUrls: ['./spaceinformation.component.css']
})
export class SpaceinformationComponent implements OnInit {
  incubators: any[] = []; // Original data from JSON
  filteredIncubators: any[] = []; // Data filtered for search
  searchTerm: string = ''; // Search input
  totalItems: number = 0; // Total number of items
  currentPage: number = 1; // Current page for pagination
  itemsPerPage: number = 10; // Number of items per page

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchIncubators();
  }

  // Fetch data from JSON file
  fetchIncubators(): void {
    this.http.get<any[]>('/assets/incubation_centers.json').subscribe({
      next: (data) => {
        this.incubators = data;
        this.filteredIncubators = [...this.incubators]; // Initialize filtered data
        this.totalItems = this.filteredIncubators.length; // Set total count
      },
      error: (err) => console.error('Error fetching data:', err),
    });
  }

  // Filter table based on search input
  filterTable(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredIncubators = this.incubators.filter((incubator) =>
      Object.values(incubator).some((value) =>
        value?.toString().toLowerCase().includes(term)
      )
    );
    this.totalItems = this.filteredIncubators.length; // Update total count after filtering
    this.currentPage = 1; // Reset to the first page
  }
}
