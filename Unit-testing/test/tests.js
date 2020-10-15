let chai = require('chai')
let assert = chai.assert;
let should = chai.should()
let expect = chai.expect
let sinon = require('sinon')
let Add = require('../maths')
let isAlive = require('../functions')

// describe('Add tests', () => {
//   it('should return 3 when called with 1 and 2', function () {
//     let result = Add(1,2);
//     let expectedResult = 3
//     // result.should.equal(expectedResult)
//     expect(result).to.equal(expectedResult)
//   })

//   it('should not return 3 when called with 1 and 3', function () {
//     // assert.equal(4, Add(1,3))
//     expect(Add(1,3)).to.not.equal(3)
//   })
// })

describe('Spy Tests', function () {
  it('should log result of add', function () {
    let num1 = 1
    let num2 = 2

    let logSpy = sinon.spy()

    Add(num1, num2, logSpy)

    logSpy.called.should.be.true;
  })
  it('should call log with result of add', function () {
    let num1 = 1
    let num2 = 2

    let logSpy = sinon.spy()

    Add(num1, num2, logSpy)

    logSpy.calledWith(3).should.be.true
  })
})

describe('isAlive Tests', function () {
  it('should return true when ping callback returns true', () => {
    let pinger = sinon.stub()
    pinger.onFirstCall().returns(true)
    pinger.onSecondCall().returns(true)
    pinger.onThirdCall().returns(true)

    let websiteIsAlive = isAlive(pinger);

    websiteIsAlive.should.be.true;
  })
  it('should return false when ping does not return true 3x', () => {
    let pinger = sinon.stub()
    pinger.onFirstCall().returns(true)
    pinger.onSecondCall().returns(false)
    pinger.onThirdCall().returns(true)

    let websiteIsAlive = isAlive(pinger);

    websiteIsAlive.should.be.false;
  })
  it('should return an error when ping throws an error', function () {
    let pinger = sinon.stub()

    pinger.throws(function () {return new Error()})
    let error = isAlive(pinger)

    error.message.should.equal('ping throw exception')
  })
})
