angular.module('portalflex.authorize',
    ['portalflex.endpoint'])
    .factory('authorize', function ($http, endpoint) {
        const authorize = {};
        authorize.authenticate = (credentials) => {
            const httpOptions = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            $http.post(endpoint.getLoginEndpoint(), credentials, {headers: httpOptions.headers}).then((response) => {
                sessionStorage.setItem("username", credentials.username);
                sessionStorage.setItem("password", credentials.password);
                sessionStorage.setItem("token", response.data.token);
            }).catch(err => console.log(err));
        };

        return authorize;
    });
