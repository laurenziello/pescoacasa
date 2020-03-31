import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pesco-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title = 'pescoacasa';
  constructor() {}

  ngOnInit(): void {}
}
