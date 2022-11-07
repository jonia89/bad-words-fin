require('assert');
var Filter = require('../lib/badWordsFin.js'),
  filter = new Filter(),
  assert = require('better-assert');

describe('filter', function(){
  describe('addWords',function(){
    it('Should append words to the filter list.', function(){
      filter.addWords('dog', 'go', 'äpärä');
      assert(filter.clean('Go dog go äpärä') === '** *** **');
    });

    it('Should append words to the filter using an array', () => {
      let addWords = ['go', 'dog'];
      filter = new Filter()
      filter.addWords(...addWords);
      assert(filter.clean('Go dog go') === '** *** **');
    });

    it('Should allow a list to be passed to the constructor', function() {
      filter = new Filter({
        list: ['dog']
      });

      assert(filter.clean('Go dog go') === 'Go *** go');
    });
  });
});