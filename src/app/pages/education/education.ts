import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Footer } from '../../components/footer/footer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, Footer],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class Education {
}
