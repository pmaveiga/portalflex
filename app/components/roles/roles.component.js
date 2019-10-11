function rolesController(rolesService) {
    const token = sessionStorage.getItem('token');
    let roles = {};
    if (token !== null && token !== undefined) {
        roles = rolesService.getAll();
    }

    return roles.$$state;
}


angular.module('portalflex.roles',
    ['portalflex.rolesService'])
    .component('roles', {
        bindings: {
            data: '<'
        },
        templateUrl: 'app/components/roles/roles.component.html',
        controller: rolesController
    });
