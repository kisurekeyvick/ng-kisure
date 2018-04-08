import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError, 
    NavigationCancel,ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { EventBusService } from '../../core/event.bus.service';
import { userlogin } from '../../core/user/user.login.service';
import { loginValidateModule } from './login.validate';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.scss'],
    providers:[userlogin]
})
export class loginComponent implements OnInit {
    loading = false;

    user =new loginValidateModule();
    canLogin=true;

    constructor(
        private router:Router,
        private eventBusService: EventBusService,
        private userLogin:userlogin
    ) {
    }

    ngOnInit() {
        

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

    login() {
        this.loading=true;
        
        this.userLogin.validation(this.user.userName,this.user.password)
                      .subscribe(
                          res=>{
                            this.loading=false;
                            this.canLogin = true;
                          },
                          error=>{
                            this.loading=false;
                            this.canLogin = false;
                          });
    }
}