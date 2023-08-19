import { Injectable } from '@angular/core';
import { Taches } from './taches.model';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  taches : Taches[] = [
    {
      id: '1',
      title: 'Faire du sport',
      description: 'Aller à la salle de sport',
      imageUrl:'https://img.freepik.com/vecteurs-libre/illustration-journee-nationale-du-sport-plat_23-2148999705.jpg?w=2000',
      date_echeance: '2023-08-10',
      priorites:'basse'
    },
    {
      id: '2',
      title: 'Faire mes ongles',
      description: 'visiter la salon de coiffure',
      imageUrl:'https://www.kit-manucure.com/modules/xipblog/img/large-french-manucure.jpg',
      date_echeance: '2023-08-02',
      priorites:'moyenne'
    },
    {
      id: '3',
      title: 'Rédiger un rapport',
      description: 'Préparer un rapport pour la réunion',
      imageUrl:'https://www.imprimerieareaction.com/images/Rapport_dactivit%C3%A9.jpg',
      date_echeance: '2023-07-12',
      priorites:'elevée'
    },
    {
      id: '4',
      title: 'Faire les vaisselles',
      description: 'Faire les vaisselles ',
      imageUrl:'https://static8.depositphotos.com/1177973/1043/i/600/depositphotos_10430379-stock-photo-clean-dishes-on-wooden-table.jpg',
      date_echeance: '2023-08-02',
      priorites:'moyenne'
    },
    {
      id: '5',
      title: 'coder des applications',
      description: 'il faut coder coder sans arret pour devenir un senior',
      imageUrl:'https://www.o-communication.com/wp-content/uploads/2019/12/creation-d-aplication-mobile-avantage-considerable.jpg',
      date_echeance: '2025-01-01',
      priorites:'elevée'
    }
  ]

  getAll(){
    return this.taches;
  }
  gettache(tacheId:string){
    return this.taches.find(tache => {
      return tache.id === tacheId
    })
  }
  addTache(tache:Taches){
    return this.taches.push(tache);
  }
  delete(tacheId: string){
    this.taches = this.taches.filter(tache => {
      return tache.id !== tacheId;
    })
  }
  updateTask(updatetache:Taches): void {
    const tacheupdate = this.taches.find(tache => tache.id === updatetache.id);
    if (tacheupdate) {

      tacheupdate.title = updatetache.title;
      tacheupdate.description = updatetache.description;
      tacheupdate.date_echeance = updatetache.date_echeance;
      tacheupdate.priorites = updatetache.priorites;
      tacheupdate.imageUrl = updatetache.imageUrl;
    }
  }
  constructor() { }
}
