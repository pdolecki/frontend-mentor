import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-challenges',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>Challenges</p>`,
  styles: ``,
})
export default class Challenges {}
