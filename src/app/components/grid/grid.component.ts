import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import {TemplateDefDirective} from "../../directives/template-ref.directive";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit, AfterViewInit {

  @ContentChildren(TemplateDefDirective) templateDefs: QueryList<TemplateDefDirective> | undefined;

  @Input()
  data: any[] = [];

  cardTemplate: TemplateRef<any> | undefined;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  /**
   * Initialize other stuff like injected child templates
   */
  ngAfterViewInit(): void {
    if (this.templateDefs) {
      this.templateDefs.forEach(tplDef => {
        if (tplDef.tempDef === 'cardTpl') {
          this.cardTemplate = tplDef.ref;
          this.cd.detectChanges();
        }
      });
    }
  }

  /**
   * This function checks if card grid is scrolled to the bottom or not
   * @param event - Scroll event
   */
  onScroll(event: any) {
    // TODO Get more results
  }
}
