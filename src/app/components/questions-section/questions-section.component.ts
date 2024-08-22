import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsControllerService } from '@services/questions-controller.service';
import { ButtonComponent } from '@utils/button/button.component';
import { InputResponseComponent } from '@utils/input-response/input-response.component';

@Component({
  selector: 'app-questions-section',
  standalone: true,
  imports: [InputResponseComponent, ButtonComponent],
  templateUrl: './questions-section.component.html',
  styleUrls: ['./questions-section.component.scss'],
})
export class QuestionsSectionComponent implements AfterViewInit {
  @ViewChild('questionsSection') questionsSection!: ElementRef;
  @ViewChild('optionsContainer') optionsContainer!: ElementRef;
  questionsController = inject(QuestionsControllerService);
  router = inject(Router);
  questions = this.questionsController.questions;
  selectedOption!: any;

  previousQuestion = () => {
    this.questionsController.previousQuestion();
    this.checkedOption();
  }

  nextQuestion = () => {
    this.questionsController.nextQuestion();
    this.checkedOption();
  }

  finishForm = () => {
    if (this.questionsController.responseClient.includes(null)) {
      alert('Please answer all the questions');
    }else{
      this.router.navigate(['/travels/destinations']);
    }
  }

  checkedOption = () => {
    for (let i = 0; i < this.optionsContainer.nativeElement.children.length; i++) {
      setTimeout(() => {
        if (this.questionsController.responseClient.includes(this.optionsContainer.nativeElement[i].name)) {
          this.selectedOption = this.optionsContainer.nativeElement[i].name
        }
      }, 10)
    }
  }


  ngAfterViewInit() {
    const container = this.questionsSection.nativeElement;
    const light = container.querySelector('.light');

    container.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      light.style.left = `${x}px`;
      light.style.top = `${y}px`;
      light.style.opacity = 1;
    });

    container.addEventListener('mouseleave', () => {
      light.style.opacity = 0;
    });
  }

  onOptionChange(option: string): void {
    if (this.selectedOption === option) {
      this.selectedOption = null;
      this.questionsController.addResponse(null);
    } else {
      this.selectedOption = option;
      this.questionsController.addResponse(option);
    }

  }
}
