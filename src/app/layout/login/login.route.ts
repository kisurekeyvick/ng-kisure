import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { loginComponent } from './login.component';

const loginRoute:Routes = [
    {
        path:'',
        component:loginComponent
    }
]

@NgModule({
    providers:[],
    imports:[
        RouterModule.forChild(loginRoute)
    ],
    exports:[
        RouterModule
    ],
    declarations:[]
})
export class loginRouteModule {

}