import { NgModule } from '@angular/core';
//module
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { LoadingModule } from 'ngx-loading';
//component
import { loginComponent } from './login.component';
import { InputErrorDirective } from '../../core/Directive/InputError/InputError';
//route
import { loginRouteModule } from './login.route';

@NgModule({
    providers:[],
    exports:[],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        LoadingModule,
        loginRouteModule
    ],
    declarations:[
        loginComponent,
        InputErrorDirective
    ]
})
export class loginModule {

}