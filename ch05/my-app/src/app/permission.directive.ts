import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {

  @Input() appPermission: string[] = [];
  private currentRole = 'agent';

  constructor(private readonly tmplRef: TemplateRef<any>, private readonly vc: ViewContainerRef) { }

  ngOnInit(): void {
    console.log(this.appPermission);
    if (this.appPermission.indexOf(this.currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }

}
