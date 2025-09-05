import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class Education {
}
