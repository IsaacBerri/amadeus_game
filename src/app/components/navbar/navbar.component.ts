import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports:[RouterModule],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: "./navbar.component.scss"
})
export class NavbarComponent {
  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
}
