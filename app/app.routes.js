app.config(
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<login></login>'
            })
            .when('/viewer', {
                template: '<viewer></viewer>'
            });

        $locationProvider.html5Mode(true);
    });
