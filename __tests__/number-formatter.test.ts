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
			expect(formatPositiveInteger(999_999)).toBe('999.999k');
		});
	});

	describe('numbers with 7 to 9 digits', () => {
		it('should format 7 digit numbers', () => {
			expect(formatPositiveInteger(9_000_000)).toBe('9m');
			expect(formatPositiveInteger(9_900_000)).toBe('9.9m');
			expect(formatPositiveInteger(9_990_000)).toBe('9.99m');
			expect(formatPositiveInteger(9_999_000)).toBe('9.999m');
		});

		it('should format 8 digit numbers', () => {
			expect(formatPositiveInteger(90_000_000)).toBe('90m');
			expect(formatPositiveInteger(99_000_000)).toBe('99m');
			expect(formatPositiveInteger(99_900_000)).toBe('99.9m');
			expect(formatPositiveInteger(99_990_000)).toBe('99.99m');
			expect(formatPositiveInteger(99_999_000)).toBe('99.999m');
		});

		it('should format 9 digit numbers', () => {
			expect(formatPositiveInteger(900_000_000)).toBe('900m');
			expect(formatPositiveInteger(990_000_000)).toBe('990m');
			expect(formatPositiveInteger(999_000_000)).toBe('999m');
			expect(formatPositiveInteger(999_900_000)).toBe('999.9m');
			expect(formatPositiveInteger(999_990_000)).toBe('999.99m');
			expect(formatPositiveInteger(999_999_000)).toBe('999.999m');
		});
	});

	describe('numbers with 10 to 12 digits', () => {
		it('should format 10 digit numbers', () => {
			expect(formatPositiveInteger(9_000_000_000)).toBe('9b');
			expect(formatPositiveInteger(9_900_000_000)).toBe('9.9b');
			expect(formatPositiveInteger(9_990_000_000)).toBe('9.99b');
			expect(formatPositiveInteger(9_999_000_000)).toBe('9.999b');
		});

		it('should format 11 digit numbers', () => {
			expect(formatPositiveInteger(90_000_000_000)).toBe('90b');
			expect(formatPositiveInteger(99_000_000_000)).toBe('99b');
			expect(formatPositiveInteger(99_900_000_000)).toBe('99.9b');
			expect(formatPositiveInteger(99_990_000_000)).toBe('99.99b');
			expect(formatPositiveInteger(99_999_000_000)).toBe('99.999b');
		});

		it('should format 12 digit numbers', () => {
			expect(formatPositiveInteger(900_000_000_000)).toBe('900b');
			expect(formatPositiveInteger(990_000_000_000)).toBe('990b');
			expect(formatPositiveInteger(999_000_000_000)).toBe('999b');
			expect(formatPositiveInteger(999_900_000_000)).toBe('999.9b');
			expect(formatPositiveInteger(999_990_000_000)).toBe('999.99b');
			expect(formatPositiveInteger(999_999_000_000)).toBe('999.999b');
		});
	});

	describe('error cases', () => {
		it('should throw error for negative numbers', () => {
			expect(() => formatPositiveInteger(-1)).toThrow('Expected num to be positive');
			expect(() => formatPositiveInteger(-1e12)).toThrow('Expected num to be positive');
		});

		it('should throw error for decimal numbers', () => {
			expect(() => formatPositiveInteger(1.5)).toThrow('Expected num to be an integer');
			expect(() => formatPositiveInteger(100.5000005)).toThrow('Expected num to be an integer');
		});

		it('should throw error for numbers with more than 12 digits', () => {
			expect(() => formatPositiveInteger(1e13)).toThrow('Unsupported integer size');
			expect(() => formatPositiveInteger(1e20)).toThrow('Unsupported integer size');
		});
	});
});
