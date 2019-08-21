import { MyLowerCasePipe } from './my-lower-case.pipe';

describe('MyLowerCasePipe', () => {
  it('create an instance', () => {
    const pipe = new MyLowerCasePipe();
    expect(pipe).toBeTruthy();
  });
});
