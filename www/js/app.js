// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


  .controller('AppCtrl', function ($scope, $ionicModal, $window, $timeout, $ionicModal) {

    // init data
    $scope.m = "hello";
    $scope.LastFeedbackposition = null;

    $scope.slide = {
      id: 1,
      src: 'https://s-media-cache-ak0.pinimg.com/736x/2e/ce/59/2ece5901e8f892a44806771659d3b8b5--doggy-clothes-chihuahua-clothes.jpg',
      feedbacks: [
        { id: 1, position: { x: 10, y: 10 }, name: 'item-1', price: '50$' },

      ]
    }

    // create random id
    var getRandomId = function (length_) {

      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
      if (typeof length_ !== "number") {
        length_ = Math.floor(Math.random() * chars.length_);
      }
      var str = '';
      for (var i = 0; i < length_; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      return str;
    }





    // add feedback tag on image
    $scope.addFeedback = function ($event) {

      // init form object 
      $scope.newFeedback = null;

      // show modal
      $scope.modal.show();

      console.log('adding feedback');
      if ($event.target.className === $event.currentTarget.className) {
        var feedbackPosition = {
          x: ((($event.offsetX) / $event.currentTarget.clientWidth) * 100).toFixed(2),
          y: ((($event.offsetY) / $event.currentTarget.clientHeight) * 100).toFixed(2)
        };

        // store last feedback position 
        $scope.LastFeedbackposition = feedbackPosition;


      }
    }



    // modal
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function (modal) {
      console.log('modal created');
      $scope.modal = modal;

    });

    $scope.addNewFeedback = function (newFeedback) {

      console.log('scope', $scope.slide)

      var newFeedbackId = getRandomId(5);
      $scope.slide.feedbacks.push({
        id: newFeedbackId,
        position: $scope.LastFeedbackposition,
        name: newFeedback.name,
        price: newFeedback.price,
      });
      $scope.modal.hide();
    };


    // delete feedback
    $scope.deleteFeedback  =  function(feedback){
        $scope.slide.feedbacks  = $scope.slide.feedbacks.filter(function(_feedback){
            return _feedback.id != feedback.id
        })
    }


  });
