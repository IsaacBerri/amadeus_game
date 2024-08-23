import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export default class AboutComponent {

  reportLink = 'https://corporate.amadeus.com/en/annual-reports/amadeus-annual-report-2023';
  learnMoreLink = 'https://corporate.amadeus.com/en/sustainability';

  peopleStats = {
    employees: '18K+',
    nationalities: '150+',
    recommend: '80%',
    stay: '70%',
    courses: '7.2K'
  };
}
