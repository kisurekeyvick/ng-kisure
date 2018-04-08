export class coreCommonModel {
    validationErrors = {};

    constructor() {
        const self=this; 
        const rules=self.rules();
        //重写get set
        return new Proxy(self, {
            get:function(target, propertyKey: PropertyKey, receiver?: any){
                return Reflect.get(target, propertyKey, receiver);
            },
            set:function(target: object, propertyKey: PropertyKey, value: any, receiver?: any){
                self.clearErrors(propertyKey);
                const columnRules = rules[propertyKey]; 
                const columnRule = columnRules['rules'];
                
                if(!value){
                    value = self.addErrors(<string>propertyKey,columnRules.messages.required);
                }

                return Reflect.set(target, propertyKey, value, receiver); 
            }
        })
    }

    rules(){
        return {};
    }

    clearErrors(propertyKey=null):void {
        if(!propertyKey){
            this.validationErrors={};
        }
        else{
            delete this.validationErrors[propertyKey];
        }
    }

    addErrors(columnRulesss:string,message:string) {
        Object.assign(this.validationErrors,{[columnRulesss]: [message]});
    }
}