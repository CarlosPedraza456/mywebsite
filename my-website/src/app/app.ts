import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { FlareShadow } from './components/flare-shadow/flare-shadow';
import { AboutMe } from './components/about-me/about-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, FlareShadow, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-website');
}
