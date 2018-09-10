import { TransformBooleanPipe } from './transform-boolean.pipe';

describe('TransformBooleanPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformBooleanPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform true to Yes', () => {
    const pipe = new TransformBooleanPipe();
    expect(pipe.transform(true)).toBe('Yes');
  });

  it('should transform false to No', () => {
    const pipe = new TransformBooleanPipe();
    expect(pipe.transform(false)).toBe('No');
  });

});
