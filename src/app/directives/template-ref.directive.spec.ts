import {
  Component,
  DebugElement,
  ElementRef,
  EmbeddedViewRef,
  Injectable,
  NO_ERRORS_SCHEMA,
  TemplateRef,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TemplateDefDirective } from './template-ref.directive';

@Component({
  selector: 'temp-ref-directive-test',
  template: '<div tempDef="testDirective" ></div>',
})
class AvTableCellDefDirectiveComponentTest {
}

export class MockElementRef extends TemplateRef<any> {
  // @ts-ignore
  elementRef: ElementRef | undefined;

  createEmbeddedView(context: any): EmbeddedViewRef<any> {
    // @ts-ignore
    return null;
  }
}

xdescribe('Directive: AvTableCellDefDirective', () => {
  let component: AvTableCellDefDirectiveComponentTest;
  let fixture: ComponentFixture<AvTableCellDefDirectiveComponentTest>;
  let debugElement: DebugElement;
  let tempDefDirective: TemplateDefDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ TemplateDefDirective, AvTableCellDefDirectiveComponentTest ],
      providers: [
        { provide: TemplateRef, useClass: MockElementRef },
      ],
    });
    fixture = TestBed.createComponent(AvTableCellDefDirectiveComponentTest);
    debugElement = fixture.debugElement.query(By.directive(TemplateDefDirective));
    component = fixture.componentInstance;
    tempDefDirective = debugElement.injector.get<TemplateDefDirective>(TemplateDefDirective);
  });

  it('can load headerDef instance', () => {
    expect(tempDefDirective).not.toBeNull();
  });
});
