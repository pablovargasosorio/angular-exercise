import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({ selector: '[tempDef]' })
export class TemplateDefDirective {

  @Input()
  tempDef: string = 'tempDef';

  /**
   * @param ref - Template Ref
   */
  constructor(public ref: TemplateRef<any>) {
  }
}
