import { Component, Input } from '@angular/core';
import { Option } from '../../interfaces/Option'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent{

  constructor() { }

  /**
   * How large should the button be?
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Placeholder
   *
   * @required
   */
  @Input() placeholder = 'Select';

  /**
   * @required
   */
  @Input() options: Option[] = [];

  public get Classes(): string[] {
    const selectClasses: string[] = [];
    let sizeClasses = 'text-base'
    if(this.size === 'small'){
      sizeClasses = 'text-sm';
    }else if(this.size === 'large'){
      sizeClasses = 'text-lg';
    }
    selectClasses.push(sizeClasses, 'rounded-md', 'focus:border-blue-300', 'border-2 border-gray-400');
    return selectClasses;
  }


}
