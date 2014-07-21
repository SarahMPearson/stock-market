/* global describe, it */

'use strict';


var expect = require('chai').expect;
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
});
