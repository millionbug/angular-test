import { Directive, ElementRef, ContentChild, Output, EventEmitter, Input } from '@angular/core';

@Directive({
    selector: '[appHostParent]',
    exportAs: 'appHostParent'
})

export class HostParentDirective {
    @Input()
    parentName: string;

    log() {
        console.log(this.parentName);
    }
}
