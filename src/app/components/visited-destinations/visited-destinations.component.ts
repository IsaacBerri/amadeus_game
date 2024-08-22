import { Component } from '@angular/core';
import { DestinationComponent } from '@components/destination/destination.component';
import { visitedDestinations } from '@utils/visited-destinations';

@Component({
  selector: 'app-visited-destinations',
  standalone: true,
  imports: [DestinationComponent],
templateUrl: './visited-destinations.component.html',
  styleUrl: './visited-destinations.component.scss'
})
export class VisitedDestinationsComponent {
  Destinations = visitedDestinations
}
