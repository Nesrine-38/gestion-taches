import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Taches } from '../taches.model';
import { TachesService } from '../taches.service';

@Component({
  selector: 'app-form-tache',
  templateUrl: './form-tache.component.html',
  styleUrls: ['./form-tache.component.scss'],
})
export class FormTacheComponent  implements OnInit {
  @Input()
  tache: Taches = { title: '', description: '', date_echeance: '', priorites: '', imageUrl: '' };

  @Output()
  added = new EventEmitter<Taches>();

  constructor(private tacheService: TachesService) { }
  ngOnInit() {
  }

  handleImage(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(target.files[0]);
      reader.onload = () => {
        this.tache.imageUrl = reader.result as string;
      };
    }
  }

  handleSubmit() {
    this.added.emit(this.tache);
  }

}
