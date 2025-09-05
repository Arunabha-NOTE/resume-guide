import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
}
