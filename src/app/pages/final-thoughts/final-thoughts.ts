import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-final-thoughts',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, Footer],
  templateUrl: './final-thoughts.html',
  styleUrls: ['./final-thoughts.css']
})
export class FinalThoughts {
}
