function loginController ($location, authorize) {
    const $ctrl = this;
    $ctrl.user = '';
    $ctrl.pass = '';
    const path = '/viewer';

    $ctrl.$onInit = () => {
        if (sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== undefined) {
            $location.path(path);
        }
    };

    $ctrl.signin = () => {
        const params = {
            username: $ctrl.user,
            password: $ctrl.pass
        };

        authorize.authenticate(params);
        if (sessionStorage.hasOwnProperty('token')) $location.path(path);
    };
}

angular.module('portalflex.login',
    ['portalflex.authorize'])
    .component('login', {
        templateUrl: 'app/components/login/login.component.html',
        controller: loginController
    });
