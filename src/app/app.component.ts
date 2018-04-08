import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError, 
  NavigationCancel,ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { EventBusService } from './core/event.bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    loading = false;

    constructor(
      public translate: TranslateService,
      private router:Router,
      private eventBusService: EventBusService
    ) {}

    ngOnInit() {
      this.translate.addLangs(["zh", "en"]);
      this.translate.setDefaultLang('zh');
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');

      this.eventBusService.showGlobalLoading.subscribe((value:boolean) => {
          this.loading=value;
      });

      this.router.events.subscribe((event) => {
          if(event instanceof NavigationStart){
            this.eventBusService.showGlobalLoading.next(true);
          }
          if(event instanceof NavigationEnd || 
            event instanceof NavigationError || 
            event instanceof NavigationCancel){
            this.eventBusService.showGlobalLoading.next(false);
          }
      });
    }
}
