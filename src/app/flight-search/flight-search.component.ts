import { Component, inject } from '@angular/core';
import { DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, JsonPipe, DatePipe],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {
  from = 'Paris';
  to = 'London';
  flights: Array<Flight> = [];
  selectedFlight: Flight | undefined;

  private http = inject(HttpClient);

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  search(): void {
    const url = 'http://demo.angulararchitects.io/api/flight';

    const headers = { Accept: 'application/json' };

    const params = { from: this.from, to: this.to };

    this.http.get<Flight[]>(url, { headers, params }).subscribe({
      next: (flights: Flight[]) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }
}
