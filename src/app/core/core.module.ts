import { NgModule } from '@angular/core';
//translate
import { TranslateModule } from 'ng2-translate';
//loading
import { LoadingModule } from 'ngx-loading';
//animate
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//http
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventBusService } from './event.bus.service';
import { userlogin } from './user/user.login.service';

//component directive pipe

@NgModule({
    providers:[
        EventBusService,
        userlogin
    ],
    imports:[
        BrowserAnimationsModule,
        HttpClientModule,
        LoadingModule,
        TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
    ],
    declarations:[
    ]
})
export class coreModule {
    
}

/*
    readMe
    (1)
*/