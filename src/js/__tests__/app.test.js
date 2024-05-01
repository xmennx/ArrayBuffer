const { ArrayBufferConverter, getBuffer } = require('./app');

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test('load method sets the buffer property', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toEqual(buffer);
  });

  test('toString method converts loaded buffer to string', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    const jsonString = converter.toString();
    expect(typeof jsonString).toBe('string');
    expect(jsonString.length).toBeGreaterThan(0);
  });

  test('toString method throws error if buffer is not loaded', () => {
    expect(() => {
      converter.toString();
    }).toThrow('No buffer loaded');
  });
});