/* global describe, it, before */

import chai from 'chai';
import Silabe from '../src/index.js';

chai.expect();

const expect = chai.expect;
const words = require('./words')

describe('Word tests', () => {
  words.forEach(word => {
    describe(`when input is: ${word.input}`, () => {
      it (`should return ${word.expect}`, () => {
        expect(Silabe(word.input)).to.deep.equal(word.expect)
      })
    })
  })
});
