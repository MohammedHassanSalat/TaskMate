import { Component } from '@angular/core';
import { DarkmodeService } from '../../services/darkmode.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
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
