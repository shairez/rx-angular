# Resources

**Example applications:**  
A demo application is available on [GitHub](https://stackblitz.com/edit/angular-async-ngif-with-error-tpb4uc).

# Motivation

![rx-angular_cdk_notifications__toNotifiaction_michael_hladky](https://user-images.githubusercontent.com/10064416/131154927-c56e1fbe-c01f-4c8a-9445-869db3f9bd0e.png)

When dealing with asynchronouse code we always have some contextual information given that directly relate to the output of an asynchronouse code.

The a good example is a `[Promise](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)` used in a UI where you can list items and search them.

The following states can apply to this UI:
- Initial loading of the list. (loading spinner)
- Display of the data (The actual value is now given and displayed)
- Error in the asynchronouse process (A error message is displayed)
- Completion of the process (Communicates that the process is completed)
- Subsquent search actions (loading spinner)


```typescript
@Component({
  selector: 'any-component',
  template: `
    <ng-container *ngIf="(count$ | async) as count; else loadingOrErrorOrComplete">
      <p *ngIf="count > 0 && count !== undefined; else empty">
        Count: {{ count }}
      </p>

      <ng-template #empty>
        Negative Count
      </ng-template>
    </ng-container>

    <ng-template #loadingOrErrorOrComplete>
      <ng-container [ngSwitch]="isErrorCompleteOrLoading$ | async">
        <p *ngSwitchCase="-1">
          Error!
        </p>

        <p *ngSwitchCase="1">
          Complete!
        </p>

        <p *ngSwitchCase="0">
          Loading...
        </p>
      </ng-container>
    </ng-template>
  `
})
export class AnyComponent  {
  // ...
}
```

If we organize them visually 4 states, 3 of them contextual are given:
- **suspense** (communicating progress)
- update/**next** (the result it self, or parts of it)
- **error** (communicating error)
- **complete** (communicating complete)

For those states we use the term **reactive context** which includes the state and contextual state of and asynchronouse process.

![rx-angular_cdk_notifications__reactive-context_michael_hladky](https://user-images.githubusercontent.com/10064416/131148610-cc39370a-37d9-4bb2-b8e2-538e68405bac.png)

Whith this concept we can create helpers that support to implement the handling of reactive context in a more elegant way.

A good example is the [`rxLet`](https://github.com/rx-angular/rx-angular/blob/main/libs/template/docs/api/let-directive.md) directive:

```typescript
@Component({
  selector: 'any-component',
  template: `
    <p *rxIf="count$; let count; else empty; suspense: loading; error: error; complete: complete">
      Count: {{ count }}
    </p>

    <ng-template #empty>
      Negative Count
    </ng-template>
      
    <ng-template #error>
      Error!
    </ng-template>

    <ng-template #complete>
      Complete!
    </ng-template>

    <ng-template #loading>
      Loading...
    </ng-template>
  `
})
export class AnyComponent  {
  // ...
}
```

 
**The Benefits of RxAngular**

- ✅ 

## Setup

The notifications features can be used directly from the `cdk` package or indirectly through the `template` package.
To do so, install the `cdk` package and, if needed, the packages depending on it:

1. Install `@rx-angular/cdk`

```bash
npm i @rx-angular/cdk
// or
yarn add @rx-angular/cdk
```

## Usage


# Alternative Approaches

- [@angular/cdk/coercion](https://www.npmjs.com/package/@angular/cdk)


