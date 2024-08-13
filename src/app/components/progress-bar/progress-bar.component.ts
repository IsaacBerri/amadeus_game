import { Component } from '@angular/core';
import { QuestionsControllerService } from '@services/questions-controller.service';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  constructor(public QuestionsController: QuestionsControllerService) {}
  totalQuestions = this.QuestionsController.questions.length
}
