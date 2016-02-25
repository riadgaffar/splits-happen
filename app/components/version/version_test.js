'use strict';

describe('bowlingApp.version module', function() {
  beforeEach(module('bowlingApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
