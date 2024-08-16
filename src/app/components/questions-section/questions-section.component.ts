  import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
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

  selectedOption!: any;

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
      } else {
        this.selectedOption = option;
      }

    console.log(option);
  }
}


