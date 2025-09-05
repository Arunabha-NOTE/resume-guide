import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { MenuItem } from 'primeng/api';
import { Card } from "primeng/card";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

declare let Lenis: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, MenubarModule, PanelMenuModule, Navbar, Sidebar, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  leftMenuItems: MenuItem[] = [
    {
      label: 'Resume Guide',
      style: { 'font-weight': 'bold' }
    }
  ];

  rightMenuItems: MenuItem[] = [
    {
      label: '',
      icon: 'pi pi-github',
      url: 'https://github.com/Arunabha-NOTE/resume-guide',
      target: '_blank'
    },
    {
      label: 'Monoresume',
      url: 'https://monoresume.com/',
      target: '_blank'
    }
  ];

  panelMenuItems: MenuItem[] = [
    {
      label: 'Introduction',
      routerLink: '/introduction',
      expanded: true,
      items: [
        { label: 'Overview', command: () => this.scrollToSection('overview') },
        { label: 'Getting Started', command: () => this.scrollToSection('getting-started') },
        { label: 'General Guidelines', command: () => this.scrollToSection('general-guidelines') }
      ]
    },
    {
      label: 'Header',
      routerLink: '/header',
      items: [
        { label: 'Header Format', command: () => this.scrollToSection('header-format') },
        { label: "Do's and Don'ts", command: () => this.scrollToSection('header-dos-donts') }
      ]
    },
    {
      label: 'Education',
      routerLink: '/education',
      items: [
        { label: 'Education', command: () => this.scrollToSection('education') },
        { label: "Do's and Don'ts", command: () => this.scrollToSection('dos-donts') }
      ]
    },
    {
      label: 'Experience',
      routerLink: '/experience',
      items: [
        { label: 'Work Experience', command: () => this.scrollToSection('work-experience') },
        { label: "Do's and Don'ts", command: () => this.scrollToSection('experience-dos-donts') }
      ]
    },
    {
      label: 'Skills',
      routerLink: '/skills',
      items: [
        { label: 'Technical Skills', command: () => this.scrollToSection('technical-skills') },
        { label: "Do's and Don'ts", command: () => this.scrollToSection('skills-dos-donts') }
      ]
    },
    {
      label: 'Projects',
      routerLink: '/projects',
      items: [
        { label: 'Personal Projects', command: () => this.scrollToSection('personal-projects') },
        { label: "Do's and Don'ts", command: () => this.scrollToSection('projects-dos-donts') }
      ]
    },
    {
      label: 'Achievements',
      routerLink: '/achievements',
      items: [
        { label: 'Awards', command: () => this.scrollToSection('awards') },
        { label: "Do's and Don'ts", command: () => this.scrollToSection('achievements-dos-donts') }
      ]
    },
    {
      label: 'Certificates',
      routerLink: '/certificates',
      items: [
        { label: 'Professional Certificates', command: () => this.scrollToSection('professional-certs') },
        { label: "Do's and Don'ts", command: () => this.scrollToSection('certificates-dos-donts') }
      ]
    },
    {
      label: 'Leadership/Extracurricular',
      routerLink: '/leadership',
      items: [
        { label: 'Leadership Roles', command: () => this.scrollToSection('leadership-roles') },
        { label: "Do's and Don'ts", command: () => this.scrollToSection('leadership-dos-donts') }
      ]
    },
    {
      label: 'Final Thoughts',
      routerLink: '/final-thoughts'
    }
  ];

  // Mobile menu items (only page links, no subsections)
  mobileMenuItems: MenuItem[] = [
    { label: 'Introduction', routerLink: '/introduction' },
    { label: 'Header', routerLink: '/header' },
    { label: 'Education', routerLink: '/education' },
    { label: 'Experience', routerLink: '/experience' },
    { label: 'Skills', routerLink: '/skills' },
    { label: 'Projects', routerLink: '/projects' },
    { label: 'Achievements', routerLink: '/achievements' },
    { label: 'Certificates', routerLink: '/certificates' },
    { label: 'Leadership', routerLink: '/leadership' },
    { label: 'Final Thoughts', routerLink: '/final-thoughts' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  ngOnInit(): void {
    // Listen for route changes and scroll to top
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Close mobile menu on route change
        this.closeMobileMenu();
        
        // Scroll to top of the content area
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
          contentArea.scrollTo(0, 0);
        } else {
          // Fallback to window scroll
          window.scrollTo(0, 0);
        }
      });
  }

  scrollToSection(sectionId: string) {
    // Add a small delay to ensure the route navigation has completed
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Use Lenis for smooth scrolling if available
        if (typeof window !== 'undefined' && (window as any).lenis) {
          (window as any).lenis.scrollTo(element, { 
            duration: 1.2,
            offset: -20 // Account for any fixed headers
          });
        } else {
          // Fallback to regular smooth scrolling
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    }, 100);
  }
}
