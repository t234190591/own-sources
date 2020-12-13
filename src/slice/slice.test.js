import Slice from './index.ts';

test('slice normal', () => {
	const array = ['1', '2', 3];
	expect(Slice(array)).toEqual(['1', '2', 3]);
});

test('slice normal start', () => {
	const array = ['aa', { aa: 1 }, 3, undefined];
	expect(Slice(array, 2)).toEqual([3, undefined]);
});

test('slice start with a minus', () => {
	const array = ['1', '2', 3];

	expect(Slice(array, -1)).toEqual([3]);
});

test('slice start&end with a minus', () => {
	const array = ['aa', { aa: 1 }, 3, undefined];
	expect(Slice(array, -3, 4)).toEqual([{ aa: 1 }, 3, undefined]);
});
