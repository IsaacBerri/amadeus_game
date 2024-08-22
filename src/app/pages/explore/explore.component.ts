import { Component } from '@angular/core';
import { HeaderExploreComponent } from '@components/header-explore/header-explore.component';
import { AmadeusServicesComponent } from '@components/amadeus-services/amadeus-services.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [HeaderExploreComponent, AmadeusServicesComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export default class ExploreComponent {

}
