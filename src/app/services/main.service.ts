import { Injectable } from '@angular/core';
import { MainModule } from '../root/main/main.module';
import { BehaviorSubject, Observable } from 'rxjs';

export class MainService {
  private _showMenu = false;
  private showMenu: BehaviorSubject<boolean>;

  constructor() {
    this.showMenu = new BehaviorSubject<boolean>(this._showMenu);
  }

  getValue(): Observable<boolean> {
    return this.showMenu.asObservable();
  }
  toggleMenu(): void {
    this._showMenu = !this._showMenu;
    this.showMenu.next(this._showMenu);
  }
}
