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
        src: 'img/bombsweeper.png'
      },
      name: 'Bombsweeper',
      techs: ['Angular', 'Tailwind', 'Typescript', 'HTML & SCSS', 'Firebase'],
      url: 'https://bomb-sweeper-5143c.web.app/'
    },
    {
      description: 
`Mon portfolio, sur lequel vous naviguez actuellement.

J'ai realisé par le passé un autre portfolio, pour me permettre par la même occasion d'apprendre React, Next.js ainsi que shadecn ui.
J'ai finalement développé cette version en en prenant des technologies que je maitrise, tout en intégrant les dernières nouveautés d'Angular 21 comme les signaux et le SSR.
J'opte une fois de plus pour Tailwind pour la partie CSS.`,
      img: {
        alt: 'Aperçu du portfolio de Carl Cerf',
        src: 'img/portfolio-screenshot.png'
      },
      name: 'Mon Portfolio',
      techs: ['Angular', 'Tailwind', 'Typescript', 'HTML & SCSS', 'Vercel'],
      url: 'https://carl-cerf.vercel.app/'
    }];
  }
}
