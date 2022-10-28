import { Component, EventEmitter, Output } from "@angular/core";
import { NgModule } from "@angular/core";

@Component(
    {
        selector: 'app-header',
        templateUrl: './header.component.html'
    }
)
export class headerComponent  {
    @Output() fet=new EventEmitter<string>();

    onSelect(data:any){
        this.fet.emit(data);

    }
   

}