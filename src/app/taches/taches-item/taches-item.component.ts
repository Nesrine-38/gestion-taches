import { Component, Input, OnInit } from '@angular/core';
import { Taches } from '../taches.model';

@Component({
  selector: 'app-taches-item',
  templateUrl: './taches-item.component.html',
  styleUrls: ['./taches-item.component.scss'],
})
export class TachesItemComponent  implements OnInit {
  @Input() tacheItem?: Taches
  constructor() { }

  ngOnInit() {}

}
