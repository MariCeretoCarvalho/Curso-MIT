const { palindromeCheckers } = require('./palindrome.js');

describe("checks palindromeChecker() function", () => {
    test('detects a simple palindrome', () => {
        expect(palindromeChecker('racecar')).toBe(true);
    });

    test('detects a mixed-case palindromic sentence', () => {
        expect(palindromeChecker('A man, a plan, a canal, Panama')).toBe(true);
    });

    test('detects a non-palindrome', () => {
        expect(palindromeChecker('hello')).toBe(false);
    });

    test('detects an empty string as a palindrome', () => {
        expect(palindromeChecker('')).toBe(true);
    });

    test('detects a single character as a palindrome', () => {
        expect(palindromeChecker('a')).toBe(true);
    });
});