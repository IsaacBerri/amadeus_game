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
}
