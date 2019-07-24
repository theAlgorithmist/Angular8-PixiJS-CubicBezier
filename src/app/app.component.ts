/**
 * Copyright 2019 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Main app component that drives the cubic Bezier interpolation application
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import {
  Component,
  ViewChild,
  OnInit
} from '@angular/core';

import { CubicBezierDirective } from './directives/cubic-bezier.directive';

import * as PIXI from 'pixi.js/dist/pixi.js';
import Point = PIXI.PointLike;

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  // these are used for binding
  public statusTxt: string    = 'Click to define four cubic interpolation points';
  public arcLengthTxt: string = 'Arc length: 0';

  // reference to the cubic bezier directive responsible for computation and dynamic drawing
  @ViewChild(CubicBezierDirective, {static: true})
  protected _cubicBezier: CubicBezierDirective;

  // total number of interpolation points
  protected _points: number = 0;

  /**
   * Construct a new {AppComponent}
   *
   * @returns {nothing}
   */
  constructor()
  {
    // empty
  }

  /**
   * Angular lifecycle (on init)
   *
   * @returns {nothing}
   */
  public ngOnInit(): void
  {
    // reserved for future use
  }

  /**
   * Execute whenever the user clicks to define an interpolation point
   *
   * @param {PIXI.PointLike} point Point Interpolation point that was added to the display
   *
   * @returns {nothing}
   */
  public onPoint(point: Point): void
  {
    this._points++;

    if (this._points == 4)
    {
      // indicate that all four interpolation points have been entered
      this.statusTxt = 'Drag control points to change interpolation';
    }
  }

  /**
   * Execute whenever the curve's arc length is updated
   *
   * @param {number} len New arc length in px
   *
   * @returns {nothing}
   */
  public onLength(len: number): void
  {
    this.arcLengthTxt = 'Arc length: ' + len.toFixed(2);
  }

  /**
   * Clear the display and prepare for new input
   *
   * @returns {nothing}
   */
  public onClear(): void
  {
    this._cubicBezier.clear();

    this.statusTxt    = 'Click to define three interpolation points';
    this.arcLengthTxt = 'Arc length: 0';
  }

  /**
   * Execute when the user clicks the 'Equal t' checkbox
   *
   * @param {Event} evt
   *
   * @returns {nothing} Toggles the display of equal intervals of natural parameter
   */
  public onShowT(evt: Event): void
  {
    // show equal intervals of t
    this._cubicBezier.showT = !!(<HTMLInputElement> evt.target).checked;
  }

  /**
   * Execute when the user clicks the 'Equal s' checkbox
   *
   * @param {Event} evt
   *
   * @returns {nothing} Toggles the display of equal intervals of normalized arc length
   */
  public onShowS(evt: Event): void
  {
    // show equal intervals of normalized arc length, s
    this._cubicBezier.showS = !!(<HTMLInputElement> evt.target).checked;
  }
}
