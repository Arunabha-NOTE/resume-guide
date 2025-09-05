
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() leftItems: MenuItem[] = [];
  @Input() rightItems: MenuItem[] = [];
  @Input() isMobileMenuOpen = false;
  @Output() toggleMobileMenu = new EventEmitter<void>();
}
