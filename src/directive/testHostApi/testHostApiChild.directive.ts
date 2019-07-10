import { Directive, Host, ElementRef, ContentChild, Output, EventEmitter, Input } from '@angular/core';
import { HostParent } from './testHostApiParent.directive';

@Directive({
    selector: '[appHostChild]',
    exportAs: 'appHostChild'
})

export class HostChildDirective {
    @Input()
    childName: string;

    constructor(
        @Host appHostParent: HostParent
    ) {}

    log() {
        console.log(this.childName);
    }
}
