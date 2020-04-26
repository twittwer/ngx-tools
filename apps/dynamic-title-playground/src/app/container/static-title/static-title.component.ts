import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dt-pg-static-title',
  template: `
    <h2>
      Static Title
    </h2>
    <dt-pg-title-nav *ngIf="!(isSubTitle$ | async)"></dt-pg-title-nav>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticTitleComponent {
  public isSubTitle$ = this.activatedRoute.data.pipe(
    map((data) => data.isSubTitle),
  );

  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
