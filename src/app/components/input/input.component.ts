import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor() { }


  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Placeholder
   *
   * @required
   */
  @Input()
  placeholder = 'Input';

  /**
   * @required
   */
  @Input()
  type: 'text' | 'password' | 'number' | 'email' = 'text';

  public get Classes(): string[] {
    const inputClasses: string[] = [];
    let sizeClasses = 'text-base'
    if(this.size === 'small'){
      sizeClasses = 'text-sm';
    }else if(this.size === 'large'){
      sizeClasses = 'text-lg';
    }
    inputClasses.push(sizeClasses, 'rounded-md', 'focus:border-blue-300', 'border-2 border-gray-400');
    return inputClasses;
  }

}
