import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;   // <--- bind to the open class

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }


}
