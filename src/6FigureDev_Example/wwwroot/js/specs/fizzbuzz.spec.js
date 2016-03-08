'use strict';

import {expect} from 'chai';
import fizzbuzz from '../business/fizzbuzz';

describe('FizzBuzz', () => {
  describe('Number', () => {
    it('return 0 when the number is 0', () => {
      // arrange
      let number = 0;

      // act
      let result = fizzbuzz(number);

      // assert
      expect(result).to.equal(0);
    });

    it('returns 1 when the number is 1', () => {
      // arrange
      let number = 1;

      // act
      let result = fizzbuzz(number);

      // assert
      expect(result).to.equal(1);
    });
  });

  describe('Fizz', () => {
    it('returns fizz when the number is 3', () => {
      // arrange
      let number = 3;

      // act
      let result = fizzbuzz(number);

      // assert
      expect(result).to.equal('fizz');
    });

    it('returns fizz when the number is divisible by 3', () => {
      // arrange
      let number = 6;

      // act
      let result = fizzbuzz(number);

      // assert
      expect(result).to.equal('fizz');
    });
  });

  describe('Buzz', () => {
    it('returns buzz when the number is 5', () => {
      // arrange
      let number = 5;

      // act
      let result = fizzbuzz(number);

      // assert
      expect(result).to.equal('buzz');
    });

    it('returns buzz when the number is divisble by 5', () => {
      // arrange
      let number = 10;

      // act
      let result = fizzbuzz(number);

      // assert
      expect(result).to.equal('buzz');
    });
  });

  describe('FizzBuzz', () => {
    it('returns fizzbuzz when the number is 15', () => {
      // arrange
      let number = 15;

      // act
      let result = fizzbuzz(number);

      // assert
      expect(result).to.equal('fizzbuzz');
    });

    it('returns fizzbuzz when the number is divisible by 15', () => {
      // arrange
      let number = 30;

      // act
      let result = fizzbuzz(number);

      // assert
      expect(result).to.equal('fizzbuzz');
    });
  });
});