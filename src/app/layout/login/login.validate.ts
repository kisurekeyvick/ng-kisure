import { coreCommonModel } from '../../core/model/model';

export class loginValidateModule extends coreCommonModel {
    userName:string;
    password:string;
    
    rules(){
        return {
            userName: {
                rules: {
                  required: true
                },
                messages: {
                  required: "用户名/手机号码 不可为空白"
                }
            },
            password: {
                rules: {
                    required: true
                },
                messages: {
                    required: "密码 不可为空白"
                }
            }
        }
    }
}