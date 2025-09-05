import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
}
