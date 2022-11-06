require('assert');
var Filter = require('../badWordsFin.js'),
  filter = new Filter(),
  assert = require('better-assert');

describe('filter', function(){
	describe('replaceWord',function(){
		it("Should replace a bad word with asterisks (*****)",function(){
			assert(filter.replaceWord("vittu") == '*****');
		});
	});
});