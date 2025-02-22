# @rx-angular/template

[![npm](https://img.shields.io/npm/v/%40rx-angular%2Ftemplate.svg)](https://www.npmjs.com/package/%40rx-angular%2Ftemplate)
![rx-angular CI](https://github.com/rx-angular/rx-angular/workflows/rx-angular%20CI/badge.svg?branch=main)
[![Coverage Status](https://raw.githubusercontent.com/rx-angular/rx-angular/github-pages/docs/test-coverage/template/jest-coverage-badge.svg)](https://rx-angular.github.io/rx-angular/test-coverage/template/lcov-report/index.html)

## Reactive Template Rendering for Angular

@rx-angular/template is a comprehensive toolset for fully reactive rendering in Angular.
It leverages the latest Browser APIs (while still being backwards compatible) to maximize the rendering performance and thus
the user experience of your angular application.
The functionalities are provided by
structural directives, pipes, RxJS operators, or imperative functions to manage the rendering in Angular.

![template logo](https://raw.githubusercontent.com/rx-angular/rx-angular/main/libs/template/docs/images/template_logo.png)

## Description

**@rx-angular/template** is nothing less than a revolution in `ChangeDetection` for angular applications.
Developers are provided with tools for high-performance rendering, which are operated by a broad and intuitive API.

The [LetDirective (`*rxLet`)](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/api/let-directive.md) &
[PushPipe (`push`)](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/push.md) focus
on template rendering, the coordination and optimization of `ChangeDetection` cycles. While the `PushPipe` is a
straight **drop in replacement** for the `AsyncPipe (async)`, the `LetDirective` will often provide a more
convenient way of managing reactive sources and lazy rendering of the view.

Using those with the default strategy ([Local Strategy](https://github.com/rx-angular/rx-angular/blob/main/libs/cdk/docs/render-strategies/strategies.md#local)) should already improve the rendering performance of
your application by a decent amount.

The applied optimization behavior is fully customizable by using built-in or
custom provided (_coming soon_) [RenderStrategies](https://github.com/rx-angular/rx-angular/tree/main/libs/cdk/docs/render-strategies).  
However, `RenderStrategies` are also meant to be as a tool developers can interact with inside
their components, giving you an even broader access to the rendering mechanisms of your application.
The API comes with imperative as well as reactive ways to manage renderings.
By default, changes get scoped, coalesced and scheduled using the latest browser APIs.
Beyond to the use of the scheduling APIs in the browser, local rendering of components is also
key for a smooth experience.

If you plan to improve your rendering performance to the maximum possible, there
are several techniques that need to be known and considered.

- [Coalescing, Scoped Coalescing & Scheduling](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/concepts.md)
- [Rendering Issues in Angular](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/performance-issues.md)

## Installation

Using schematics:

```bash
ng add @rx-angular/template
# or
nx add @rx-angular/template
```

Manually:

```bash
npm install --save @rx-angular/template @rx-angular/cdk
# or
yarn add @rx-angular/template @rx-angular/cdk
```

## Update

If you are using `@rx-angular/template` already, please consider upgrading with the `@angular/cli update` command in order
to make sure all provided code migrations are processed properly.

```bash
ng update @rx-angular/template
# or with nx
nx migrate @rx-angular/template
```

## API

[API Documentation](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/api/overview.md)

## Basic setup

You can import each feature module individually.

```typescript
import { LetModule, PushModule, ViewportPrioModule } from '@rx-angular/template';

@NgModule({
  declarations: [...],
  imports: [LetModule, PushModule, ViewportPrioModule],
})
export class MyModule {}
```

## Features

- Directives
  - [LetDirective (\*rxLet)](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/api/let-directive.md)
- Pipes
  - [PushPipe (push)](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/push.md)
- [Render Strategies](https://github.com/rx-angular/rx-angular/tree/main/libs/cdk/docs/render-strategies/README.md)

## Experimental features

Additionally, @rx-angular/template provides some experimental optimization tools which in general will give you more control
about what changes are leading to re-renderings.

- [🧪 Viewport Priority (viewport-prio)](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/experimental/viewport-prio.md)
- [🧪 UnpatchEventsDirective (unpatch)](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/experimental/unpatch.md)
- [🧪 Detach strategy](https://github.com/rx-angular/rx-angular/tree/main/libs/template/docs/experimental/experimental-render-strategies.md)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last version                                                                                                                                                                                                      | last version                                                                                                                                                                                                  | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               |
