const app = angular.module('portalflex',
    [
        'ngRoute',
        'portalflex.roles',
        'portalflex.viewer',
        'portalflex.login'
    ]);

app.component('app', {
   template: '<div ng-view></div>'
});
