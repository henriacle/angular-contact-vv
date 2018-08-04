import { KeysPipe } from '@app/shared/pipes/keys.pipe';

describe('KeysPipe', () => {
  it('create an instance', () => {
    const pipe = new KeysPipe();
    expect(pipe).toBeTruthy();
  });
});
