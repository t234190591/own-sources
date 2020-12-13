/**
 * @param{Array} array 原数组
 * @param{Number} start 起始值
 * @param{Number} end 结束值(length)
 */

export default function slice<T>(array: Array<T>, start?: number, end?: number): Array<T> {
	let length = array == null ? 0 : array.length;

	if (!length) return [];

	start = start || 0;
	end = (end === undefined) ? length : end;

	if (start < 0) {
		start = (-start > length) ? length : (length + start);
	}

	end = end > length ? length : end;
	if (end < 0) {
		end += length;
	}
	length = start > end ? 0 : ((end - start) >>> 0);
	start >>>= 0;

	let index = -1;
	const result = new Array(length);

	while (++index < length) {
		result[index] = array[index + start];
	}

	return result;
}