import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { DarkmodeService } from './services/darkmode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-mate';

  constructor(public DarkmodeService: DarkmodeService) {}

  ngOnInit(): void {
    initFlowbite();
  }
}
