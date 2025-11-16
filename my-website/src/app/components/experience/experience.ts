import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ¡IMPORTANTE!

// --- Interfaces para tipar los datos ---
interface Job {
  title: string;
  company: string;
  location: string;
  dates: string;
  logoUrl: string;
  responsibilities: string[];
}

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}


@Component({
  selector: 'app-experience',
  // SOLUCIÓN: Agregamos CommonModule aquí para habilitar *ngFor, *ngIf, etc.
  imports: [CommonModule], 
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent implements OnInit { // Usamos la convención Component

  // --- Experiencia Laboral Data ---
  experienceList: Job[] = [
    {
      title: 'Front End Developer',
      company: 'Renegade CA',
      location: 'Madrid, Spain',
      dates: '2025 - 2025',
      logoUrl: 'icons/renegade.png',
      responsibilities: [
        'Development of new functionalities and modules with VUE, Nuxt and TypeScript.',
        'Implementation of SASS/SCSS and Ionic styles for mobile application development.',
        'Active collaboration with design (Figma) and management (Jira/Slack) teams for agile delivery.'
      ]
    },
    {
      title: 'Wordpress Senior Developer',
      company: 'Allied insight Corporated',
      location: 'Nueva York, USA',
      dates: '2023 - 2025',
      logoUrl: 'icons/allied-logo.png',
      responsibilities: [
        'Liderazgo en el desarrollo con WordPress, PHP y Elementor.',
        'Uso de herramientas de diseño como Figma y Microsoft Designer para traducir wireframes a código.',
        'Manejo de JavaScript y JQuery para funcionalidades avanzadas en el Front-end.'
      ]
    },
    {
      title: 'Wordpress Senior Developer',
      company: 'Allied insight Corporated',
      location: 'Nueva York, USA',
      dates: '2023 - 2025',
      logoUrl: 'icons/roraima.jpg',
      responsibilities: [
        'Liderazgo en el desarrollo con WordPress, PHP y Elementor.',
        'Uso de herramientas de diseño como Figma y Microsoft Designer para traducir wireframes a código.',
        'Manejo de JavaScript y JQuery para funcionalidades avanzadas en el Front-end.'
      ]
    }
  ];

  // --- Proyectos Destacados Data ---
  projectsList: Project[] = [
    {
      title: 'E-commerce de Alto Rendimiento',
      description: 'Plataforma B2B escalable construida con Nuxt.js, optimizada para Core Web Vitals y usando patrones de estado como Vuex para la gestión de datos complejos.',
      imageUrl: 'assets/img/project-ecommerce.jpg',
      tags: ['Nuxt.js', 'TypeScript', 'Vuex/Pinia', 'SASS'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Dashboard de Administración Avanzado',
      description: 'Interfaz para CRM empresarial desarrollada en Angular. Enfoque en la usabilidad, seguridad y la visualización de datos complejos mediante RxJS.',
      imageUrl: 'assets/img/project-dashboard.jpg',
      tags: ['Angular', 'RxJS', 'Material UI', 'Testing Unitario'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Landing Page con Custom Code',
      description: 'Sitio promocional de alta conversión en WordPress. Personalización a fondo con código PHP/JavaScript a medida y animación experta.',
      imageUrl: 'assets/img/project-wordpress.jpg',
      tags: ['WordPress', 'PHP Custom', 'JavaScript', 'Design/Figma'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  constructor() { }
  ngOnInit(): void { }
}