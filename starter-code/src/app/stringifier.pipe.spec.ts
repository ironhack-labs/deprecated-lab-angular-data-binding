import { StringifierPipe } from './stringifier.pipe';

describe('StringifierPipe', () => {
  it('create an instance', () => {
    const pipe = new StringifierPipe();
    expect(pipe).toBeTruthy();
  });
});
