import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent{

  constructor() { }

  /**
   * Title content
   * @required
   */
  @Input()
  title: string = 'Title';

  /**
   * Variant
   */
  @Input()
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3';

  /** 
   * Component classes
   */
  public get Classes(): string[] {
    const titleClasses: string[] = [];


    if(this.variant === 'h1'){
      titleClasses.push('text-5xl font-medium')
    }else if(this.variant === 'h2'){
      titleClasses.push('text-4xl font-medium')
    }else if(this.variant === 'h3'){
      titleClasses.push('text-3xl font-medium')
    }else if(this.variant === 'h4'){
      titleClasses.push('text-2xl font-medium')
    }else if(this.variant === 'h5'){
      titleClasses.push('text-xl')
    }else if(this.variant === 'h6'){
      titleClasses.push('text-lg')
    }

    titleClasses.push('text-gray-500 subpixel-antialiased');

    return titleClasses;
  }
}
