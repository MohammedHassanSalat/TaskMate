import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { DarkmodeService } from './services/darkmode.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-mate';

  constructor(public DarkmodeService: DarkmodeService) {}

  ngOnInit(): void {
    initFlowbite();
    AOS.init();
  }
}
