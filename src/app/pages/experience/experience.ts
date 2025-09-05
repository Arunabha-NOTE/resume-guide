import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experience {
}
