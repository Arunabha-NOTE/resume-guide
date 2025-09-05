import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './introduction.html',
  styleUrls: ['./introduction.css']
})
export class Introduction {
  // GitHub repository for "open issues / contribute" button
  githubUrl = 'https://github.com/Arunabha-NOTE/resume-guide';

  openUrl(url: string) {
    window.open(url, '_blank', 'noopener');
  }
}
