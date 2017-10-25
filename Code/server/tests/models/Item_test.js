var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var should = chai.should();
var Item = require('../../models/Item');

describe('Item', function() {

	describe('#getById()', function() {
		const keys= ['name', 'avatar', 'id'];

		it('should return default Bread record if id is not available', function() {
			var id =5;
		  	try {
				  var item= Item.getById(id);
				  item.should.be.a('object');
				  item.should.have.keys(keys);
				  item.name.should.be.equal('Bread');
		  	} catch(err) {
		  		expect(err.message).to.equal('Bid not placed. There is a higher bid.');
		  	}
		});

		it('should return record if id is available', function() {
			var id =2;
		  	try {
				  var item= Item.getById(id);
				  item.should.be.a('object');
				  item.should.have.keys(keys);
				  item.name.should.be.equal('Carrot');
		  	} catch(err) {
		  		expect(err.message).to.equal('Bid not placed. There is a higher bid.');
		  	}
		});

	});
  
});