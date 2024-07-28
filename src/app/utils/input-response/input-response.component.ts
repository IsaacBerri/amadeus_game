import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-response',
  standalone: true,
  imports: [],
  templateUrl: './input-response.component.html',
  styleUrl: './input-response.component.scss'
})
export class InputResponseComponent {
 @Input({ required: true }) labelValue!: string;
 @Input() selectedOption!: string;
 @Output() selectedOptionChange = new EventEmitter<string>();

  onCheckboxChange(): void {
    this.selectedOptionChange.emit(this.labelValue);
  }
}
