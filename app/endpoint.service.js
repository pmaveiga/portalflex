angular.module('portalflex.endpoint', [])
    .factory('endpoint', function () {
        const endpoint = {};
        endpoint.getLoginEndpoint = () => `${environment.baseUrl}/${environment.loginUri}`;
        endpoint.getRolesEndpoint = () => `${environment.baseUrl}/${environment.rolesUri}`;

        return endpoint;
    });

