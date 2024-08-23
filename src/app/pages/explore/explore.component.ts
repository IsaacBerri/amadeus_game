import { Component } from '@angular/core';
import { HeaderExploreComponent } from '@components/header-explore/header-explore.component';
import { SectionVideoComponent } from "@components/section-video/section-video.component";

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [HeaderExploreComponent, SectionVideoComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export default class ExploreComponent {

}
