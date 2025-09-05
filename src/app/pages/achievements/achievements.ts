import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.css']
})
export class Achievements {
}
