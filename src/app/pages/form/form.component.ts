import { Component } from '@angular/core';
import { QuestionsSectionComponent } from '@components/questions-section/questions-section.component';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [QuestionsSectionComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export default class FormComponent {

}
