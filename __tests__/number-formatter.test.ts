import { describe, expect, it } from 'vitest';
import { formatPositiveInteger } from '@/lib/number-formatter';

describe('formatPositiveInteger', () => {
	describe('numbers with less than 6 digits formatted as normal with locale', () => {
		it('should format single digit numbers', () => {
			expect(formatPositiveInteger(9)).toBe('9');
		});

		it('should format double digit numbers', () => {
			expect(formatPositiveInteger(99)).toBe('99');
		});

		it('should format triple digit numbers', () => {
			expect(formatPositiveInteger(999)).toBe('999');
		});

		it('should format 4 digit numbers', () => {
			expect(formatPositiveInteger(9_999)).toBe('9,999');
		});

		it('should format 5 digit numbers', () => {
			expect(formatPositiveInteger(90_000)).toBe('90,000');
			expect(formatPositiveInteger(99_000)).toBe('99,000');
			expect(formatPositiveInteger(99_900)).toBe('99,900');
			expect(formatPositiveInteger(99_990)).toBe('99,990');
			expect(formatPositiveInteger(99_999)).toBe('99,999');
		});
	});

	describe('numbers with 6 or more digits get formated', () => {
		it('should format 6 digit numbers', () => {
			expect(formatPositiveInteger(9e5)).toBe('900k');
			expect(formatPositiveInteger(9.9e5)).toBe('990k');
			expect(formatPositiveInteger(9.99e5)).toBe('999k');
			expect(formatPositiveInteger(9.999e5)).toBe('999.9k');
			expect(formatPositiveInteger(9.9999e5)).toBe('999,990');
			expect(formatPositiveInteger(9.99999e5)).toBe('999,999');
		});
		it('should format 7 digit numbers', () => {
			expect(formatPositiveInteger(9e6)).toBe('9m');
			expect(formatPositiveInteger(9.9e6)).toBe('9.9m');
			expect(formatPositiveInteger(9.99e6)).toBe('9.99m');
			expect(formatPositiveInteger(9.999e6)).toBe('9.999m');
		});

		it('should format 8 digit numbers', () => {
			expect(formatPositiveInteger(9e7)).toBe('90m');
			expect(formatPositiveInteger(9.9e7)).toBe('99m');
			expect(formatPositiveInteger(9.99e7)).toBe('99.9m');
			expect(formatPositiveInteger(9.999e7)).toBe('99.99m');
			expect(formatPositiveInteger(9.9999e7)).toBe('99.999m');
		});

		it('should format 9 digit numbers', () => {
			expect(formatPositiveInteger(9e8)).toBe('900m');
			expect(formatPositiveInteger(9.9e8)).toBe('990m');
			expect(formatPositiveInteger(9.99e8)).toBe('999m');
			expect(formatPositiveInteger(9.999e8)).toBe('999.9m');
			expect(formatPositiveInteger(9.9999e8)).toBe('999.99m');
			expect(formatPositiveInteger(9.99999e8)).toBe('999.999m');
		});

		it('should format 10 digit numbers', () => {
			expect(formatPositiveInteger(9e9)).toBe('9b');
			expect(formatPositiveInteger(9.9e9)).toBe('9.9b');
			expect(formatPositiveInteger(9.99e9)).toBe('9.99b');
			expect(formatPositiveInteger(9.999e9)).toBe('9.999b');
		});

		it('should format 11 digit numbers', () => {
			expect(formatPositiveInteger(9e10)).toBe('90b');
			expect(formatPositiveInteger(9.9e10)).toBe('99b');
			expect(formatPositiveInteger(9.99e10)).toBe('99.9b');
			expect(formatPositiveInteger(9.999e10)).toBe('99.99b');
			expect(formatPositiveInteger(9.9999e10)).toBe('99.999b');
		});

		it('should format 12 digit numbers', () => {
			expect(formatPositiveInteger(9e11)).toBe('900b');
			expect(formatPositiveInteger(9.9e11)).toBe('990b');
			expect(formatPositiveInteger(9.99e11)).toBe('999b');
			expect(formatPositiveInteger(9.999e11)).toBe('999.9b');
			expect(formatPositiveInteger(9.9999e11)).toBe('999.99b');
			expect(formatPositiveInteger(9.99999e11)).toBe('999.999b');
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
