import { Component } from '@angular/core';
import { HeaderExploreComponent } from '@components/header-explore/header-explore.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [HeaderExploreComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export default class ExploreComponent {

}
