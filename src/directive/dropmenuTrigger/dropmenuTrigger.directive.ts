import { Directive, ElementRef, OnDestroy, Host, HostListener } from "@angular/core";
import { DropdownDirective } from "../dropmenu/dropmenu.directive";

@Directive({
    selector: '[appDropdownTrigger]',
    exportAs: "appdropdowntrigger"
})

export class DropdownTriggerDirective {

    private closeDropdownOnOutsideClick = (event: MouseEvent) => {this.closeIfInClosableZone(event)};

    constructor( @Host() public dropdown: DropdownDirective,
        private elementRef: ElementRef) {

    }

    open() {
        if (this.dropdown.isOpened())
            return;

        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    }

    close() {
        if (!this.dropdown.isOpened())
            return;

        this.dropdown.close();
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    }

    toggle() {
        if (this.dropdown.isOpened()) {
            this.close();
        } else {
            this.open();
        }
    }

    @HostListener("click")
    openDropdown() {
        if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
            this.close();
        } else {
            this.open();
        }
    }

    //如果点击的位置不在下拉菜单内部，则关闭下拉
    private closeIfInClosableZone(event: Event) {
        if (event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
     }

     ngOnDestroy() {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
     }
}