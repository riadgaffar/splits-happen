'use strict';

angular.module('bowlingApp.version', [
  'bowlingApp.version.interpolate-filter',
  'bowlingApp.version.version-directive'
])

.value('version', '0.1');
