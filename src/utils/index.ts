/**
 * @param{*}
 * @returns{String} Tag
 */
export function getTag(value: any): string {
	if (value == null) {
		return value === undefined ? '[object Undefined]' : '[obejct Null]';
	}
	return Object.prototype.toString.call(value);
}