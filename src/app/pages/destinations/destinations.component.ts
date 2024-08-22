import { Component, inject } from '@angular/core';
import { DestinationComponent } from '@components/destination/destination.component';
import { QuestionsControllerService } from '@services/questions-controller.service';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [DestinationComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export default class DestinationsComponent {
  responseClient = inject(QuestionsControllerService).responseClient
}
