'use strict';
var should = require('should');
var appendCSVSync = require('../libs/appendCSVSync');

describe('appendCSVSync', function() {
  it('should be done without error', function(done) {
    var data = [[1,2,3],[4,5,6], [7,8,10]];
    var output_path = './output.csv';

    appendCSVSync(data, output_path);
    done();
    
  });
});
 