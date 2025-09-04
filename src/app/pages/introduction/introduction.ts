import { Component } from '@angular/core';
import { MarkdownComponent } from '../../components/markdown/markdown';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './introduction.html',
  styleUrl: './introduction.css'
})
export class Introduction {
  constructor(private sanitizer: DomSanitizer) {}

  get markdownHtml(): SafeHtml {
    const content = `# Resume Guide - Introduction

Welcome to the comprehensive resume guide! This guide will help you create an outstanding resume that stands out to employers.

## <span id="getting-started">Getting Started</span>

Getting started with your resume can feel overwhelming, but with the right approach, you'll create a professional document that showcases your best qualities.

### Key Steps:
- **Research the company and position** - Understand what they're looking for
- **Choose the right format** - Chronological, functional, or combination
- **Gather your information** - Work history, education, skills, achievements
- **Write compelling content** - Use action verbs and quantify accomplishments
- **Review and refine** - Check for errors and get feedback

### Best Practices:
- Keep it concise (1-2 pages for most professionals)
- Use a clean, professional layout
- Tailor your resume for each application
- Include relevant keywords from the job posting

## <span id="overview">Overview</span>

A great resume is more than just a list of jobs and education. It's a marketing document that tells your professional story and demonstrates your value to potential employers.

### Essential Components:
1. **Contact Information** - Name, phone, email, LinkedIn, location
2. **Professional Summary** - 2-3 sentences highlighting your value proposition
3. **Work Experience** - Your professional history with quantified achievements
4. **Education** - Degrees, certifications, relevant coursework
5. **Skills** - Technical and soft skills relevant to the position
6. **Additional Sections** - Projects, certifications, volunteer work, etc.

### Resume Formats:
- **Chronological** - Lists work experience in reverse chronological order (most common)
- **Functional** - Emphasizes skills and abilities over work history
- **Combination** - Combines elements of both chronological and functional formats

### Common Mistakes to Avoid:
- Using an unprofessional email address
- Including irrelevant personal information
- Having gaps in employment without explanation
- Using passive language instead of action verbs
- Making it too long or too cluttered

Click on different sections in the sidebar to explore specific areas of resume writing!`;

    const html = (marked.parse(content) as unknown) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
