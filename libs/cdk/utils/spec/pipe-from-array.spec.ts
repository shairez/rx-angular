import { pipeFromArray } from '@rx-angular/cdk/utils';
import { map } from 'rxjs/operators';


describe('pipeFromArray', () => {

  it('should return true for arrays of function', () => {
    expect(typeof pipeFromArray(undefined as any) === 'function').toBeTruthy();
    expect(typeof pipeFromArray([]) === 'function').toBeTruthy();
    expect(typeof pipeFromArray([map(() => {
    })]) === 'function').toBeTruthy();
    expect(typeof pipeFromArray([map(() => {
    }), () => {
    }]) === 'function').toBeTruthy();
  });

});
