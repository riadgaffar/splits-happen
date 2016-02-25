'use strict';

angular.module('bowlingApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller("View1Ctrl", ['$scope', '$uibModal', 'scoreFactory', function ($scope, $uibModal, scoreFactory) {
    $scope.players = scoreFactory.getPlayers();

    //Add player to the table
    $scope.add_player = function () {
      var modalInstance = $uibModal.open({
        templateUrl: 'partials/addPlayer.html',
        controller: 'addPlayerDialog',
      });

      modalInstance.result.then(function (name) {
        scoreFactory.addPlayer(name);
      });
    };

    //Reset all data
    $scope.reset = function () {
      scoreFactory.reset();
    }

    //Remove player from the game
    $scope.remove = function (index) {
      scoreFactory.removePlayer(index);
    }

    $scope.bowl = function () {
      var modalInstance = $uibModal.open({
        templateUrl: 'partials/addScore.html',
        controller: 'addScoreDialog',
      });

      modalInstance.result.then(function (num) {
        scoreFactory.doBowl(num);
      });
    }

    $scope.randBowl = function () {
      scoreFactory.doRand();
    }

    //Check which player the the current player
    $scope.isActivePlayer = function (player) {

      //First check if there is an active player
      if (scoreFactory.getPlayers().length == 0) {
        return false;
      }

      return player.name == scoreFactory.getCurrentPlayer().name;
    }
  }])

  .controller("addPlayerDialog", ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

    $scope.ok = function (player) {
      $uibModalInstance.close(player);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  }])

  .controller("addScoreDialog", ['$scope', '$uibModalInstance', 'scoreFactory', function ($scope, $uibModalInstance, scoreFactory) {

    $scope.pins = scoreFactory.getCurrentPlayer().standingPins();

    $scope.ok = function (num) {
      $uibModalInstance.close(num);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  }])

  .factory('scoreFactory', function () {
    var service = {};
    var players = [];
    var frame = 0;
    var currentPlayerIndex = 0;

    service.addPlayer = function (name) {
      players.push(new Player(name));
    }

    service.getPlayers = function () {
      return players;
    }

    service.removePlayer = function (index) {
      players.splice(index, 1);
    }

    service.getCurrentPlayer = function () {
      return players[currentPlayerIndex];
    };

    service.reset = function () {
      players.length = 0;
      frame = 0;
      currentPlayerIndex = 0;
    }

    /*  Performs a random Roll gets the remains
     pins and selects a random number
     */
    service.doRand = function () {
      var pins = this.getCurrentPlayer().standingPins();
      //var attempt = Math.floor(Math.random() * pins + 1);
      var attempt = _.floor(Math.random() * pins + 1);
      this.doBowl(attempt);
    }

    service.doBowl = function (pin) {
      this.getCurrentPlayer().roll(pin);
      currentPlayerIndex++;
      if (currentPlayerIndex >= _.size(players)) {
        frame += 1;
        currentPlayerIndex = 0;
      }
    };

    service.doBowlByPinsOrString = function(ps) {
      var _pins = _.toNumber(ps);
      if (_.isNaN(_pins)) {
        switch (ps) {
          case 'X':
            this.doBowl(10);
            this.doBowl(10);
            this.doBowl(10);
            break;
          case '-':
            this.doBowl(0);
            break;
          case '/':
            this.doBowl(this.getCurrentPlayer().standingPins());
            break;
          default:
          //no-op
        }
      } else {
        this.doBowl(_pins);
      }
    }


    return service;
  })
