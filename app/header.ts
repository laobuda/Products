import { Component } from '@angular/core';

@Component({
    selector : 'header-comp',
    templateUrl : './../header.html'
})
export class Header {
    private title : string;
    constructor(){
        this.title = 'SJ Technology';
    }
}