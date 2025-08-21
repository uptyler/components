/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {NgModule} from '@angular/core';
import {MatSlideToggle} from './slide-toggle';
import {
  MatToggleDisabledOffIcon,
  MatToggleDisabledOnIcon,
  MatToggleOffIcon,
  MatToggleOnIcon,
} from './directives/toggle-icons';

@NgModule({
  imports: [
    MatSlideToggle,
    MatToggleOnIcon,
    MatToggleOffIcon,
    MatToggleDisabledOnIcon,
    MatToggleDisabledOffIcon,
  ],
  exports: [
    MatSlideToggle,
    MatToggleOnIcon,
    MatToggleOffIcon,
    MatToggleDisabledOnIcon,
    MatToggleDisabledOffIcon,
  ],
})
export class MatSlideToggleModule {}
