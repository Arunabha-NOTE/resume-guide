import { Component } from '@angular/core';
import { MarkdownComponent } from '../../components/markdown/markdown';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  constructor(private sanitizer: DomSanitizer) {}

  get markdownHtml(): SafeHtml {
    const content = `# Education Section

The education section of your resume showcases your academic background and qualifications.

## <span id="education">Education</span>

Your education section should include your degree(s), institution(s), graduation date(s), and relevant achievements.

### How to Format Education:
- **Degree** - Bachelor of Science in Computer Science
- **Institution** - University of Technology
- **Location** - City, State
- **Graduation Date** - May 2023
- **GPA** - Include if 3.5 or higher
- **Relevant Coursework** - Only if relevant to the position
- **Honors/Awards** - Dean's List, Magna Cum Laude, etc.

### Example:
**Bachelor of Science in Computer Science**  
University of Technology, San Francisco, CA  
*Graduated: May 2023 | GPA: 3.8/4.0*  
*Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems*  
*Honors: Dean's List (Fall 2021, Spring 2022)*

## <span id="dos-donts">Do's and Don'ts</span>

### ✅ Do's:
- **List education in reverse chronological order**
- **Include your major/field of study**
- **Mention honors, awards, and high GPA (3.5+)**
- **Include relevant coursework if you're a recent graduate**
- **Add certifications and additional training**
- **Use consistent formatting**

### ❌ Don'ts:
- **Don't include high school if you have a college degree**
- **Don't include GPA if it's below 3.5**
- **Don't list every single course you took**
- **Don't include graduation dates if you're concerned about age discrimination**
- **Don't include irrelevant education or training**
- **Don't use inconsistent date formats**

### Special Considerations:

**For Recent Graduates:**
- Education section should come before work experience
- Include relevant projects, thesis, or capstone work
- Mention leadership roles in student organizations

**For Experienced Professionals:**
- Education section typically comes after work experience
- Keep it concise - degree, school, graduation year
- Focus more on professional accomplishments

**For Career Changers:**
- Highlight relevant coursework or certifications
- Include bootcamps, online courses, or continuing education
- Emphasize transferable skills gained through education`;

    const html = (marked.parse(content) as unknown) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
