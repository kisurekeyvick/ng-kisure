import {Directive, TemplateRef, ViewContainerRef, Input, ElementRef} from '@angular/core';

@Directive({
    selector:'[InputError]'
})
export class InputErrorDirective {
    errorNode:any;

    constructor(
        private templateRef:TemplateRef<any>,
        private elementRef:ElementRef,
        private viewContainerRef:ViewContainerRef
    ) {
    }

    @Input() set InputError(errorMsg){
        if( errorMsg && errorMsg.length>0 ){
            const el=this.elementRef.nativeElement.nextElementSibling;
            el['style'].border = "darkred 1px solid";
            let errorText = "";
            errorMsg.forEach((item,index) => {
                if(errorMsg.length==1){
                    errorText = item;
                }
                else {
                    errorText += `${index + 1}.${item} `;
                }
            });

            const textNode = document.createTextNode(errorText);
            
            if(!this.errorNode){
                //create error node
                this.errorNode = document.createElement('div');
                this.errorNode.style.color = "darkred";
                this.errorNode.style.clear = "both";
                this.errorNode.appendChild(textNode);
                el.parentNode.appendChild(this.errorNode);
            }
            else {
                //show error node
                this.errorNode.innerHTML=textNode
                this.errorNode.style.display = "block";
            }
        }
        else if(!this.elementRef.nativeElement.nextElementSibling) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            //hide error node
            if(this.errorNode){
                const el = this.elementRef.nativeElement.nextElementSibling;
                el['style'].border = "#DDE6E9 1px solid";
                this.errorNode.style.display = "none";
            }
        }
    }
}





