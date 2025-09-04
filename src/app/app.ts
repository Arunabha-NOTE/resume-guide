import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { MenuItem } from 'primeng/api';

declare let Lenis: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, PanelMenuModule, Navbar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  leftMenuItems: MenuItem[] = [
    {
      label: 'Resume Guide',
      style: { 'font-weight': 'bold' }
    }
  ];

  rightMenuItems: MenuItem[] = [
    {
      label: 'GitHub',
      icon: 'pi pi-github',
      url: 'https://github.com/Arunabha-NOTE/resume-guide',
      target: '_blank'
    },
    {
      label: 'Resume',
      command: () => {
        // open resume (place a resume PDF under /assets/resume.pdf or change as needed)
        window.open('/assets/resume.pdf', '_blank');
      }
    }
  ];

  panelMenuItems: MenuItem[] = [
    {
      label: 'Introduction',
      routerLink: '/introduction',
      expanded: true,
      items: [
        { label: 'Getting Started', command: () => this.scrollToSection('getting-started') },
        { label: 'Overview', command: () => this.scrollToSection('overview') }
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
        { label: 'Internships', command: () => this.scrollToSection('internships') }
      ]
    },
    {
      label: 'Skills',
      routerLink: '/skills',
      items: [
        { label: 'Technical Skills', command: () => this.scrollToSection('technical-skills') },
        { label: 'Soft Skills', command: () => this.scrollToSection('soft-skills') }
      ]
    },
    {
      label: 'Projects',
      routerLink: '/projects',
      items: [
        { label: 'Personal Projects', command: () => this.scrollToSection('personal-projects') },
        { label: 'Professional Projects', command: () => this.scrollToSection('professional-projects') }
      ]
    },
    {
      label: 'Achievements',
      routerLink: '/achievements',
      items: [
        { label: 'Awards', command: () => this.scrollToSection('awards') },
        { label: 'Recognition', command: () => this.scrollToSection('recognition') }
      ]
    },
    {
      label: 'Certificates',
      routerLink: '/certificates',
      items: [
        { label: 'Professional Certificates', command: () => this.scrollToSection('professional-certs') },
        { label: 'Online Courses', command: () => this.scrollToSection('online-courses') }
      ]
    },
    {
      label: 'Leadership/Extracurricular',
      routerLink: '/leadership',
      items: [
        { label: 'Leadership Roles', command: () => this.scrollToSection('leadership-roles') },
        { label: 'Extracurricular Activities', command: () => this.scrollToSection('extracurricular') }
      ]
    },
    {
      label: 'Final Thoughts',
      routerLink: '/final-thoughts'
    }
  ];

  ngOnInit(): void {
    // Application initialization complete
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
