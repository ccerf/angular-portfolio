import { Component, OnInit } from '@angular/core';
import { IProject } from '../../models/common.models';
import { IconComponent } from "../../components/icon/icon";

@Component({
  selector: 'app-projects',
  imports: [IconComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  
  projects: IProject[] = [];

  ngOnInit(): void {
    this.projects = [{
      description: 
`Bombsweeper est ma version du célèbre jeu Démineur !
Ce projet a été pour moi l'occasion d'expérimenter plusieurs choses.
Tout d'abord, les composants standalone avec Angular v15.
C'était aussi ma première tentative avec Tailwind.
Enfin, j'ai déployé le projet sur Firebase.

Battrez-vous mon meilleur score ?`,
      img: {
        alt: 'Aperçu du jeu Bombsweeper',
        src: 'img/bombsweeper.webp'
      },
      name: 'Bombsweeper',
      techs: ['Angular', 'Tailwind', 'Typescript', 'HTML & SCSS', 'Firebase'],
      url: 'https://bomb-sweeper-5143c.web.app/'
    },
    {
      description: 
`Le portfolio sur lequel vous naviguez. Il illustre mon évolution technique et ma veille constante. 

Après une première version réalisée avec React, Next.js et shadcn/ui afin de m'essayer à un nouvel écosystème, j'ai choisi de bâtir cette itération avec mes technologies de prédilection. J'intègre ainsi les dernières évolutions d'Angular 21, exploitant les Signals pour une réactivité optimale et le SSR (Server-Side Rendering) pour la performance.

Côté design, j'ai renouvelé ma confiance en Tailwind CSS pour sa flexibilité et son efficacité.`,
      img: {
        alt: 'Aperçu du portfolio de Carl Cerf',
        src: 'img/portfolio-screenshot.webp'
      },
      name: 'Mon Portfolio',
      techs: ['Angular', 'Tailwind', 'Typescript', 'HTML & SCSS', 'Vercel'],
      url: 'https://carl-cerf.vercel.app/'
    }];
  }
}
