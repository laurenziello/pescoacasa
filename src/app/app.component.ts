import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'pesco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.loadScript('https://www.fbgcdn.com/embedder/js/ewm2.js');
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: false
    });
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
