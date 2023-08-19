import { Component, OnInit } from '@angular/core';
import { Taches } from '../taches.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TachesService } from '../taches.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-tache',
  templateUrl: './list-tache.page.html',
  styleUrls: ['./list-tache.page.scss'],
})
export class AddTachePage implements OnInit {
  editing = false;
  loadedTache?: Taches;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tacheService: TachesService, private router: Router,
    private alertCtr: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('tacheId')) return;
      const tacheId = paramMap.get('tacheId');
      this.loadedTache = this.tacheService.gettache(tacheId!);
    })
  }

  onDeleteTache() {
    this.alertCtr.create({
      header: 'Tu es sur  ?',
      message: 'veux-tu vraiment supprimer cette tache?',
      buttons: [{
        text: 'Annuler',
        role: 'cancel'
      },{
        text: 'Supprimer',
        handler: () => {
          this.tacheService.delete(this.loadedTache?.id!);
          this.router.navigate(['/taches']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    })

}

updatetache(tache:Taches){
  this.tacheService.updateTask(tache);
}

}
