import { AfterViewInit, Component } from '@angular/core';
import { DarkmodeService } from '../../services/darkmode.service';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit {
  constructor(public DarkmodeService: DarkmodeService) {}

  // Toggles the theme between light and dark mode.
  toggleTheme() {
    this.DarkmodeService.updateTheme();
  }

  ngAfterViewInit(): void {
      initFlowbite();
  }
}
