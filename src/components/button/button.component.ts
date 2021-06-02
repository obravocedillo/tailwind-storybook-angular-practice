import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  constructor() { }
 /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** 
   * Component classes
   */
  public get classes(): string[] {
    const buttonClasses: string[] = [];
    const isPrimary = this.primary ? 'bg-blue-400 ring-2 ring-blue-200 focus:outline-none focus:ring-offset-2' : 'bg-gray-400 ring-2 ring-gray-200 focus:outline-none focus:ring-offset-2';
    let currentSize = 'text-base';
    if(this.size === 'small'){
      currentSize = 'text-sm'
    }else if(this.size === 'large'){
      currentSize = 'text-lg'
    }
    buttonClasses.push('px-2','py-1', 'text-white', 'rounded-md', isPrimary, currentSize, 'shadow-sm');
    return buttonClasses;
  }

}
