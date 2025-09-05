import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.css']
})
export class Certificates {
}
