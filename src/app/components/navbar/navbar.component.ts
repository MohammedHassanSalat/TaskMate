import { Component } from '@angular/core';
import { DarkmodeService } from '../../services/darkmode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public DarkmodeService: DarkmodeService) {}

  // Toggles the theme between light and dark mode.
  toggleTheme() {
    this.DarkmodeService.updateTheme();
  }
}
