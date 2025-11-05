import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { AboutMe } from './components/about-me/about-me';
import { ExperienceComponent as Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, AboutMe, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-website');
}
