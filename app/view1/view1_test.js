'use strict';


describe('UNIT TESTING SCORE FACTORY', function() {
  var scoreFactoryObj;

  var testInputs = {
    name: 'John',
    allStrikes: {
      val: 'XXXXXXXXXXXX',
      result: 300
    },
    nineMiss: {
      val: '9-9-9-9-9-9-9-9-9-9-',
      result: 90
    },
    fiveSpares:  {
      val: '5/5/5/5/5/5/5/5/5/5/5',
      result: 150
    }
  }


  beforeEach(function(){
    module('bowlingApp.view1');
    inject(function($injector){
      scoreFactoryObj = $injector.get('scoreFactory');
    });
  });


  it('Should define addPlayer method', function() {
    expect(scoreFactoryObj.addPlayer).toBeDefined();
  });

  it('Should have score of 300 for all strikes', function() {
    scoreFactoryObj.reset();
    scoreFactoryObj.addPlayer(testInputs.name);
    _.forEach(_.toArray(testInputs.allStrikes.val), function(s) {
      scoreFactoryObj.doBowlByPinsOrString(s);
    });
    expect(scoreFactoryObj.getCurrentPlayer().score()).toBe(testInputs.allStrikes.result);
    expect(scoreFactoryObj.getCurrentPlayer().standingPins()).toBe(0);
  });

  it('Should have score of 90', function() {
    scoreFactoryObj.reset();
    scoreFactoryObj.addPlayer(testInputs.name);
    _.forEach(_.toArray(testInputs.nineMiss.val), function(s) {
      scoreFactoryObj.doBowlByPinsOrString(s);

    });
    expect(scoreFactoryObj.getCurrentPlayer().score()).toBe(testInputs.nineMiss.result);
  });

  it('Should have score of 150', function() {
    scoreFactoryObj.reset();
    scoreFactoryObj.addPlayer(testInputs.name);
    _.forEach(_.toArray(testInputs.fiveSpares.val), function(s) {
      scoreFactoryObj.doBowlByPinsOrString(s);

    });
    expect(scoreFactoryObj.getCurrentPlayer().score()).toBe(testInputs.fiveSpares.result);
  });

});
