import { Component, OnInit } from '@angular/core';
import { IExperience } from '../../models/common.models';
import { IconComponent } from '../../components/icon/icon';

@Component({
  selector: 'app-experience',
  imports: [IconComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit {
  experiences: IExperience[] = [];

  ngOnInit(): void {
    this.experiences = [{
      startDate: '09/2020',
      endDate: "Aujourd'hui",
      title: 'Développeur Web',
      company: 'EIG',
      tasks: [
        "Développement d'une application web pour le secteur médical et médico-social : Dossier Unique de l'Usager, aide à la prescription, agenda, etc.",
        "Conception et implémentation de nouvelles fonctionnalités, interfaces et services (Angular, Material, TypeScript).",
        "Développement d'API back-end (4D).",
        "Maintenance corrective et évolutive.",
        "Rédaction de documentation technique et support interne.",
        "Encadrement et accompagnement d'un alternant dans ses missions.",
        "Travail collaboratif avec Product Owner, UX/UI Designer et développeurs.",
        "Utilisation d'outils de gestion de projet (Jira) et participation active aux cérémonies Agile (daily meeting, sprint planning)."
      ],
      techs: ['Angular', 'Typescript', 'Angular Material', 'HTML & SCSS'],
      url: 'https://www.eig.fr/'
    }]
  }

  openExperience(url: string): void {
    window.open(url, 'blank');
  }
}
