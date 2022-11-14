import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NavbarComponent,
    SidebarComponent,

    FlightSearchComponent,
  ]
})
export class AppComponent {
  title = 'Hello World!';
}
