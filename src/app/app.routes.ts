import { Routes } from '@angular/router';
import { Introduction } from './pages/introduction/introduction';
import { Education } from './pages/education/education';
import { Experience } from './pages/experience/experience';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Achievements } from './pages/achievements/achievements';
import { Certificates } from './pages/certificates/certificates';
import { Leadership } from './pages/leadership/leadership';
import { FinalThoughts } from './pages/final-thoughts/final-thoughts';

export const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: Introduction },
  { path: 'education', component: Education },
  { path: 'experience', component: Experience },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'achievements', component: Achievements },
  { path: 'certificates', component: Certificates },
  { path: 'leadership', component: Leadership },
  { path: 'final-thoughts', component: FinalThoughts }
];
