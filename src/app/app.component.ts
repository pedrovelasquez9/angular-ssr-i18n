import { Component, PLATFORM_ID, afterNextRender, afterRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ssr-i18n';
  constructor() {
    const platform = inject(PLATFORM_ID);
    afterNextRender(() => {
      console.log(localStorage.getItem("test"));
    });

    if (isPlatformServer(platform)) {
      console.log("estoy en el servidor");
    }
  }

}
