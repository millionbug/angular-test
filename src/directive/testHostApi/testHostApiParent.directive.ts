import { Directive, ElementRef, ContentChild, Output, EventEmitter, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appHostParent]',
    exportAs: 'appHostParent'
})

export class HostParentDirective {

    constructor(private el: ElementRef) { }

    @Input()
    parentName: string = 'parent';

    @HostListener('click') click(e) {
        this.log();
    }

    log() {
        console.log(this.parentName);
    }
}
