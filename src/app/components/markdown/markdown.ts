import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './markdown.html',
  styleUrl: './markdown.css'
})
export class MarkdownComponent {
  @Input() html: SafeHtml | string = '';
}
