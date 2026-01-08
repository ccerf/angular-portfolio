import { Component, signal } from '@angular/core';
import { IconComponent } from '../../components/icon/icon';

@Component({
  selector: 'app-contact',
  imports: [IconComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  email = 'contact.ccerf@proton.me';
  copied = signal(false);

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    this.copied.set(true);
    
    // Réinitialise le message après 2 secondes
    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }
}
