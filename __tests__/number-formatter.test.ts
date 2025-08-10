import { describe, expect, it } from 'vitest';
import { formatPositiveInteger } from '@/lib/number-formatter';

describe('formatPositiveInteger', () => {
	describe('numbers with less than 4 digits', () => {
		it('should format single digit numbers', () => {
			expect(formatPositiveInteger(9)).toBe('9');
		});

		it('should format double digit numbers', () => {
			expect(formatPositiveInteger(99)).toBe('99');
		});

		it('should format triple digit numbers', () => {
			expect(formatPositiveInteger(999)).toBe('999');
		});
	});

	describe('numbers with 4 to 6 digits', () => {
		it('should format 4 digit numbers', () => {
			expect(formatPositiveInteger(9_000)).toBe('9k');
			expect(formatPositiveInteger(9_900)).toBe('9.9k');
			expect(formatPositiveInteger(9_990)).toBe('9.99k');
			expect(formatPositiveInteger(9_999)).toBe('9.999k');
		});

		it('should format 5 digit numbers', () => {
			expect(formatPositiveInteger(90_000)).toBe('90k');
			expect(formatPositiveInteger(99_000)).toBe('99k');
			expect(formatPositiveInteger(99_900)).toBe('99.9k');
			expect(formatPositiveInteger(99_990)).toBe('99.99k');
			expect(formatPositiveInteger(99_999)).toBe('99.999k');
		});

		it('should format 6 digit numbers', () => {
			expect(formatPositiveInteger(900_000)).toBe('900k');
			expect(formatPositiveInteger(990_000)).toBe('990k');
			expect(formatPositiveInteger(999_000)).toBe('999k');
			expect(formatPositiveInteger(999_900)).toBe('999.9k');
			expect(formatPositiveInteger(999_990)).toBe('999.99k');
			expect(formatPositiveInteger(999_990)).toBe('999.999k');
		});
	});

	describe('numbers with 7 to 9 digits', () => {
		it('should format 7 digit numbers', () => {
			expect(formatPositiveInteger(9_000_000)).toBe('9m');
			expect(formatPositiveInteger(9_900_000)).toBe('9.9m');
		});
	});
});
