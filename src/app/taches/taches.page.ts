import { Component, OnInit } from '@angular/core';
import { Taches } from './taches.model';
import { TachesService } from './taches.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.page.html',
  styleUrls: ['./taches.page.scss'],
})
export class TachesPage implements OnInit {
  taches: Taches[] = [];

  constructor(private tacheService: TachesService, private router: Router) { }

  ngOnInit() {
    this.taches = this.tacheService.getAll();
  }
  AddTache() {
    this.router.navigate(['./form-tache']);
  }

}
