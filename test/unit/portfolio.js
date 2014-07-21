/* global describe, it */

'use strict';


var expect = require('chai').expect;  
var Stock = require('../../app/models/stock');
var Portfolio  = require('../../app/models/portfolio');


describe('Portfolio', function(){
  describe('constructor', function(){
    it('should create a new portfolio', function(){
      var port1 =  new Portfolio('Tech Portfolio');
      expect(port1).to.be.instanceof(Portfolio);
      expect(port1.name).to.be.equal('Tech Portfolio');
      expect(port1.stocks).to.have.length(0);
    });
  });

describe('#add', function(){
    it('should add a stock object to portfolio stocks', function(){
      var port1 =  new Portfolio('Tech Portfolio');
      port1.add('aapl', 50);
      port1.add('msft', 35);
      port1.add('aapl', 25);

      expect(port1.stocks).to.have.length(2);
      expect(port1.stocks[0]).to.be.instanceof(Stock);
      expect(port1.stocks[0].count).to.equal(75);
      expect(port1.stocks[1].count).to.equal(35);
    });
});
});
