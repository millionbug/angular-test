import { Directive, ElementRef, ContentChild, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appdropdown'
})

export class DropdownDirective {
  @Input("dropdownToggle")
  public toggleClick: boolean = true;

  @Output()
  public onOpen = new EventEmitter<string>();

  @Output()
  public onClose = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) { }

  open() {
    //这种操作HTML元素的方式还是很丑陋的，对吧？
    const element: HTMLElement = this.elementRef.nativeElement;
    element.classList.add('open');
    this.onOpen.emit('open');
  }

  close() {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.classList.remove('open');
    this.onClose.emit('close');
  }

  isOpened(): boolean {
    const element: HTMLElement = this.elementRef.nativeElement;
    return element.classList.contains('open');
  }
}