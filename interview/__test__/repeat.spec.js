import { it, expect, test } from "@jest/globals";
import { repeat } from "../repeat";
it("重复", () => {
  expect('abc'.repeat(3)).toBe('abcabcabc')
  expect('abc'.repeat(0)).toBe('')
  expect('abc'.repeat(1)).toBe('abc')
  expect('abc'.repeat(7)).toBe('abcabcabcabcabcabcabc')
});
