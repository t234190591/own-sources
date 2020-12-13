import isObject from './index.ts';

test("is function Object", () => {
	expect(isObject(() => {})).toBe(true);
});

test("is null Object", () => {
	expect(isObject(null)).toBe(false);
});