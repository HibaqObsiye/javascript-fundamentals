const fizzbuzz = require('./fizzbuzz.js')
describe('fizzbuzz', () => {
    it('returns fizz if number is 3', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    });

    it('returns buzz if number is 5', () => {
        expect(fizzbuzz(5)).toBe('buzz')
    });

    it('returns fizzbuzz if number is divisible by 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    
    });

    it ('returns 7 if number 7 is given', () => {
        expect(fizzbuzz(7)).toBe(7)
    });
  
  });