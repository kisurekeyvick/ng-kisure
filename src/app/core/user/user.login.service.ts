import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { userModule } from './userModule';

@Injectable()
export class userlogin {
    getUserInfoUrl='assets/userInfo/userInfo.json';

    constructor(private http:Http) {
    }

    validation(userName:string,password:string):Observable<userModule[]> {
        if( userName && password ){
            let url=this.getUserInfoUrl;
            let params=new URLSearchParams();
            params.set('username',userName);
            params.set('password',password);

            return this.http.get(url)//,{search:params}
                        .map((res:Response)=>{
                            let result=res.json();
                            return result;
                        })
                        .filter((res)=>
                            res.username == userName && res.password == password
                        )
                        .catch((error:any)=>
                            Observable.throw(error || 'Server error')
                        );
        }
        else{
            return Observable.throw('login error');
        }
    }
}