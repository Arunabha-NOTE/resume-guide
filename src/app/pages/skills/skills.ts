import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
}
