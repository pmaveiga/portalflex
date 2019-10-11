angular.module('portalflex.rolesService',
    ['portalflex.endpoint'])
    .factory('rolesService', function ($http, endpoint) {
        const roles = {};
        roles.getAll = (page) => {
            const httpOptions = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                }
            };

            return $http.get(`${endpoint.getRolesEndpoint()}?page=${page}`, {headers: httpOptions.headers});
        };

        return roles;
    });
