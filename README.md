# Angular 8 and Typescript Math Toolkit Cubic Bezier

This is the code distribution for the Medium Article, [_Cubic Beziers in Angular 8_](https://medium.com/ngconf/cubic-beziers-in-angular-98eea3fb0f9f).

The current cubic Bezier library is illustrated via an interactive Angular 8 demo that uses PIXI 4 for dynamic drawing.  Four-point cubic Bezier interpolation is used for geometric constraints.  Instead of interpolating the Bezier curve at endpoints and using interior control points to influence the curve's shape, the cubic curve is forced to interpolate four points.  The interior control points are computed to enforce the interpolation constraints.

Points on the curve at equal increments of _t_ and _s_ may also be illustrated.  Drag one of the control points to see how the relationship between the two varies as a function of the geometric constraints.


Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular: 8.0.1

PIXI: 4.8.2

Angular CLI: 8.0.3

Typescript: 3.4.3

## Running the demo

The drawing area is represented in light blue.  Click anywhere in that area to define four interpolation points, which are visually represented by red circles.  After the last point is entered, the display is updated to show the control points and the cubic Bezier curve.  The total arc length of the curve is displayed as well.  Click on the _Equal t_ and/or _Equal s_ checkboxes to visualize points on the curve at _t = 0.2, 0.4, 0.6, 0.8_ as or _s = 0.2, 0.4, 0.6, 0.8_.  Drag one of the control points to see how the spread between natural and normalized arc length parameterization changes as a function of geometric constraints.


The current cubic Bezier does not implement all methods described in the _PlanarCurve_ superclass.  y-at-x and x-at-y methods are rarely used for cubics, so these will be made available in an advanced cubic Bezier class in the future.


```
fromObject(control: IControlPoints): void
public getX(t: number): number
public getY(t: number): number
public getXPrime(t: number): number
public getYPrime(t: number): number
public interpolate(points: Array<IPoint>): number
public getTAtS(s: number): number
public getTAtX(x: number): Array<number>
public getYAtX(x: number): Array<number> (not implemented)
public getXAtY(y: number): Array<number> (not implemented)
public sAtT(t: number): number
```

Since numerical approximation is required for general arc-length parameterization as well as some of the internal computations, the code distribution also includes classes for numerical integration, bisection, and root finding.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <https://www.linkedin.com/in/jimarmstrong>
