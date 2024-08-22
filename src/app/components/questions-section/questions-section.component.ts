import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  inject,
} from '@angular/core';
import { QuestionsControllerService } from '@services/questions-controller.service';
import { ButtonComponent } from '@utils/button/button.component';
import { InputResponseComponent } from '@utils/input-response/input-response.component';
import { mockDestinations } from './mock-questions';
import { preferenceMapper } from './preferenceMapper.enum';

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
  questions = this.questionsController.questions;
  selectedOption!: any;
  destinations = mockDestinations;
  preferences = preferenceMapper;

  previousQuestion = () => {
    this.questionsController.previousQuestion();
    this.checkedOption();
  };

  nextQuestion = () => {
    this.questionsController.nextQuestion();
    this.checkedOption();
  };

  checkedOption = () => {
    for (
      let i = 0;
      i < this.optionsContainer.nativeElement.children.length;
      i++
    ) {
      setTimeout(() => {
        if (
          this.questionsController.responseClient.includes(
            this.optionsContainer.nativeElement[i].name
          )
        ) {
          this.selectedOption = this.optionsContainer.nativeElement[i].name;
        }
      }, 10);
    }
  };

  translatePreferences(category: string, value: string) {
    //@ts-ignore
    return this.preferences[category][value] || value
  }

  findCategory(destinyValue: string, clientValue: string, category: string): boolean {
    return destinyValue.toLowerCase() === this.translatePreferences(category, clientValue).toLowerCase();
  }
  
  destinyFilter(clientResponses: string[]) {
    return this.destinations.filter(destiny => {
      return(
        this.findCategory(destiny.preferenciaDestino, clientResponses[0], 'ambiente') &&
        this.findCategory(destiny.preferenciaClimatica, clientResponses[1], 'clima') &&
        this.findCategory(destiny.preferenciaActividad, clientResponses[2], 'actividad') &&
        this.findCategory(destiny.preferenciaAlojamiento, clientResponses[3], 'alojamiento') &&
        this.findCategory(destiny.duracionViaje, clientResponses[4], 'duracion') &&
        this.findCategory(destiny.edad, clientResponses[5], 'edad')
      )
    })
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
