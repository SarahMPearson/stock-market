/* global describe, it */

'use strict';


var expect = require('chai').expect;  
var Stock = require('../../app/models/stock');
var Portfolio  = require('../../app/models/portfolio');

describe('Client', function(){
  describe('constructor', function(){
  it('should create a new client', function(){
    var bob = new Client('Bob', 10000);
    expect(bob).to.be.instanceof(Client);
    expect(bob.cash).to.equal(10000);
    expect(
  });
 });  

 describe('#purchase', function(){
  it('should add to position and take away cash', function(done){
    var bob = new Client('Bob', 10000);
    bob.purchase('aapl', 50, function(){
    
    done();
    });
    bob.purchase('msft', 25, function(){
     
    done();
    });

    
  });
 });

 describe('#sell', function(){
  it('should subtract from position add to cash', function(done){
    var bob = new Client('Bob', 10000);
    bob.sell('aapl', 20, function(){
    expect(bob.cash).to.be.below(10000);
    done();
  }):
  });
 });
});
