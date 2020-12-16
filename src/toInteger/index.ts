import toFinite from '../toFinite/index';

export default function toInteger(value: any): number {
	const result = toFinite(value);
	const remainder = result % 1;

	return remainder ? result - remainder : result;
}