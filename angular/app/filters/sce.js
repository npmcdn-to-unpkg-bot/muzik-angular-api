
angular.module('musik')
    .filter('sce', function($sce){
        return function(text) {
            return $sce.trustAsResourceUrl(text);
        }
    })
    .filter('millSecondsToTimeString', function() {
        return function(millseconds) {
            var seconds = Math.floor(millseconds / 1000);
            var days = Math.floor(seconds / 86400);
            var hours = Math.floor((seconds % 86400) / 3600);
            var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
            var timeString = '';
            if(days > 0) timeString += (days > 1) ? (days + " days ") : (days + " day ");
            if(hours > 0) timeString += (hours > 1) ? (hours + " hours ") : (hours + " hour ");
            if(minutes >= 0) timeString += (minutes > 1) ? (minutes + " minutes ") : (minutes + " minute ");
            return timeString;
        }
    })
    .filter('secondsToHHmmss', function($filter) {
        return function(seconds) {
            return $filter('date')(new Date(0, 0).setSeconds(seconds), 'mm:ss');
        };
    });