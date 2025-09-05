import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import Lenis from 'lenis';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// Initialize Lenis for smooth scrolling after app loads
document.addEventListener('DOMContentLoaded', () => {
  // Temporarily disable Lenis to test sidebar scrolling
  /*
  setTimeout(() => {
    const contentArea = document.querySelector('.content-area') as HTMLElement;
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wrapper: contentArea || window, // Fallback to window if content area not found
      content: contentArea || document.body
    });

    // Make Lenis available globally
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, 100);
  */
});
