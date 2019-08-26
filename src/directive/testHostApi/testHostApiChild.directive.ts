import { Directive, Host, ElementRef, ContentChild, Output, EventEmitter, Input, HostListener, Optional } from '@angular/core';
import { HostParentDirective } from './testHostApiParent.directive';

@Directive({
    selector: '[appHostChild]',
    exportAs: 'appHostChild'
})

export class HostChildDirective {
    @Input()
    childName: string = 'child';

    @HostListener('click') click(e) {
        // this.appHostParent.log();
        this.log();
    }

    constructor(
        private el: ElementRef,
        @Host() @Optional() public appHostParent: HostParentDirective
    ) {}

    log() {
        console.log(this.childName);
    }
}
