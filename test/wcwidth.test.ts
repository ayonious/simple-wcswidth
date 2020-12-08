import { wcwidth } from '../index';

describe('Wcwidth', () => {
  it('Hangul Syllables', () => {
    expect(wcwidth('갶'.charCodeAt(0))).toBe(2);
  });
  it('English', () => {
    expect(wcwidth('Y'.charCodeAt(0))).toBe(1);
    expect(wcwidth('H'.charCodeAt(0))).toBe(1);
  });
  it('Emoji', () => {
    expect(wcwidth('😊'.charCodeAt(0))).toBe(1);
  });
  it('Non Spacing Chars', () => {
    expect(wcwidth(0x05c4)).toBe(0);
    expect(wcwidth(0x06e7)).toBe(0);
    expect(wcwidth(0x093c)).toBe(0);
  });
  it('8 bit Control Chars', () => {
    expect(wcwidth(0x7f)).toBe(-1);
    expect(wcwidth(0)).toBe(0);
  });
});
