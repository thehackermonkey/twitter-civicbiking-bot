'use strict';

var stringify = require('csv-stringify');
var fs = require('fs');
var async = require('async');

var appendCSVSync = function(data, path){

  async.waterfall([
    function(callback){
      stringify(data, function(err, output){
        if(err){
          return callback(err);
        }
        callback(null, output);
      });
    },

    function(stringified_data, callback){
      fs.appendFileSync(path, stringified_data);
      callback(null);
    }
    ]);
};


module.exports=appendCSVSync;