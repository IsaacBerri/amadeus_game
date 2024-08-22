import { Component } from '@angular/core';
import { DestinationComponent } from '@components/destination/destination.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [DestinationComponent, HttpClientModule],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export default class DestinationsComponent {
  public destinations = JSON.parse(localStorage.getItem('destinations') || '');

  imgsDestinations = {
    americaDestiny: '',
    europaDestiny: '',
  };

  text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur suscipit,
  soluta fugiat consequatur sint laborum ducimus incidunt quos molestias error saepe. Tenetur
  quasi veniam deleniti nulla ad! Voluptatum, repellat?`;

  API_KEY = '41301808-e86fa23811faafdafbfc9238a';
  categories = 'places, city, destinations';
  constructor(public httpClient: HttpClient) {
    this.getImgsDestinations();
  }

  getImgsDestinations() {
    this.httpClient
      .get(
        `https://pixabay.com/api/?key=${this.API_KEY}&q=${this.destinations[0].posibleDestinoEuropa}&image_type=photo&category=${this.categories}`
      )
      .subscribe((data: any) => {
        this.imgsDestinations.europaDestiny = data.hits[0].webformatURL;
      });
    this.httpClient
      .get(
        `https://pixabay.com/api/?key=${this.API_KEY}&q=${this.destinations[0].posibleDestinoAmerica}&image_type=photo&category=${this.categories}`
      )
      .subscribe((data: any) => {
        this.imgsDestinations.americaDestiny = data.hits[0].webformatURL;
      });
  }
}
