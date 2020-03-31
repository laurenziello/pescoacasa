import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pesco-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  faHome = faHome;

  constructor() {}

  ngOnInit(): void {}
}
