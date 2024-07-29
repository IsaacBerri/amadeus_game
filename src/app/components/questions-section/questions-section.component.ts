import { Component } from '@angular/core';
import { ButtonComponent } from '@utils/button/button.component';
import { InputResponseComponent } from '@utils/input-response/input-response.component';

@Component({
  selector: 'app-questions-section',
  standalone: true,
  imports: [InputResponseComponent, ButtonComponent],
  templateUrl: './questions-section.component.html',
  styleUrl: './questions-section.component.scss',
})
export class QuestionsSectionComponent {
  selectedOption!: any;

  onOptionChange(option: string): void {
    if (this.selectedOption === option) {
      this.selectedOption = null;
    } else {
      this.selectedOption = option;
    }

    console.log(option);
  }

  questionController = 0

  public questions = [
    {
      questionText: 'Pick a destination type',
      questionHero: 'Choose the option that best describes your ideal travel destination',
      options: [
        { value: 'City' },
        { value: 'Beach' },
        { value: 'Mountain' },
        { value: 'Countryside' },
      ],
    },
    {
      questionText: 'What type of transport do you want to travel on',
      questionHero: 'Choose the option that best describes your ideal travel destination',
      options: [
        { value: 'Car' },
        { value: 'Bus' },
        { value: 'Train' },
        { value: 'Plane' },
      ],
    },
    {
      questionText: 'How long do you plan to stay',
      questionHero: 'Choose the option that best describes your ideal travel destination',
      options: [
        { value: '1 day' },
        { value: '2 days' },
        { value: '3 days' },
        { value: '4 days' },
      ],
    }
  ]

  nextQuestion = () => {
    if (this.questionController < this.questions.length - 1) {
      this.questionController++
    }
  }

  previousQuestion = () => {
    if (this.questionController > 0) {
      this.questionController--
    }
  }
}
