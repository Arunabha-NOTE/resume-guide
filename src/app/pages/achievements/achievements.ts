import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, Footer],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.css']
})
export class Achievements {
}
