import { getTag } from '../utils/index';

/**
 * @param{*}
 * @returns{Boolean}
 */
export default function isSymbol(value: any): boolean {
	const type = typeof value;
	return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]');
}