import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import {
  faBars,
  faTimes,
  faBullhorn,
  faTruck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pesco-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  faBullhorn = faBullhorn;
  faTruck = faTruck;

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}
}
