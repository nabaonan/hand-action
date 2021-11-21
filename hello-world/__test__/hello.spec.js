import { describe, expect, test } from '@jest/globals'
import { a } from '../index.js'
test('hello', () => {
  expect(a(1)).toBe('Hello');
  expect(a(2)).toBe('world');
});