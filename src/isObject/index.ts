/**
 * @param{Any} value
 * @return{Boolean}
 */

export default function isObject(value: any): boolean {
	const type = typeof value;
	return value !== null && (type === 'object' || type === 'function');
}