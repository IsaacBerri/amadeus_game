import { Component } from '@angular/core';
import { CarrouselImgComponent } from '@components/carrousel-img/carrousel-img.component';
import { ProgressBarComponent } from '@components/progress-bar/progress-bar.component';
import { QuestionsSectionComponent } from '@components/questions-section/questions-section.component';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    QuestionsSectionComponent,
    ProgressBarComponent,
    CarrouselImgComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export default class FormComponent {}
