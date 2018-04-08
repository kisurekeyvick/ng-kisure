import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { AppComponent } from './app.component';
import { loginComponent } from './layout/login/login.component';

const appRoute:Routes=[
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        loadChildren:'./layout/login/login.module#loginModule'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
]

@NgModule({
    providers:[],
    imports:[
        RouterModule.forRoot(appRoute,{ useHash: true })
    ],
    exports:[
        RouterModule
    ],
    declarations:[

    ]
})
export class appRouteModule {

}

/*
    readMe
    (1)redirectTo:'login'   //重定向到对应为login的路由
    (2)pathMatch            //当url的路径完全匹配的时候,上面代码的意思说：只有当url的路径为''的时候才会跳转
    (3)loadChildren         //使用loadchildren来实现懒加载,书写格式: 路径 + module.ts + # + modeule名字
*/