import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [],
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements AfterViewInit {
  @ViewChild('destination') destination!: ElementRef;

  ngAfterViewInit(): void {
    this.destination.nativeElement.addEventListener(
      'mousemove',
      (e: MouseEvent) => {
        // Obtener las coordenadas del contenedor relativas a la ventana
        const rect = this.destination.nativeElement.getBoundingClientRect();
        const x = e.clientX - rect.left; // Coordenada X relativa al contenedor
        const y = e.clientY - rect.top; // Coordenada Y relativa al contenedor

        const width = this.destination.nativeElement.offsetWidth;
        const height = this.destination.nativeElement.offsetHeight;

        const moveX = (x / width) * 50 - 25; // Ajusta la intensidad horizontal
        const moveY = (y / height) * 50 - 25; // Ajusta la intensidad vertical

        this.destination.nativeElement.style.boxShadow = `${moveX}px ${moveY}px 50px rgba(0, 150, 255, 0.6)`;
      }
    );

    this.destination.nativeElement.addEventListener('mouseleave', () => {
      this.destination.nativeElement.style.boxShadow =
        '0 0 10px rgba(0, 0, 0, 0.3)';
    });
  }
}
