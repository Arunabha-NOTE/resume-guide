import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-final-thoughts',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './final-thoughts.html',
  styleUrls: ['./final-thoughts.css']
})
export class FinalThoughts {
}
