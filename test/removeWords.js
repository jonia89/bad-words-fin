require('assert');
var Filter = require('../badWordsFin.js'),
  filter = new Filter(),
  assert = require('better-assert');

describe('filter', () => {
  describe('removeWords',() => {
    it('Should allow you to remove words from the filter blacklist and no longer filter them (case-insensitive)', () => {
      filter.removeWords('Vitun');
      assert(filter.clean('This is a vitun good test') === 'This is a vitun good test');
    });

    it ('Should allow you to remove an array of words from the filter blacklist and no longer filter them', () => {
      let removingWords = ['kyrpä', 'äpärä'];
      
      filter = new Filter();
      filter.removeWords(...removingWords);
      assert(filter.clean('This is a kyrpä äpärä test') === 'This is a kyrpä äpärä test');
    });
  });
});