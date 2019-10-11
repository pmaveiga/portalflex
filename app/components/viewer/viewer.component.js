function viewerController (paginationService, rolesService, $scope) {

    const $ctrl = this;
    $ctrl.firstPage = 1;

    $ctrl.pagination = {};
    $ctrl.data = {};
    $ctrl.setPagination = setPagination;
    setPagination($ctrl.firstPage);

    async function getRoles(page) {
        return await rolesService.getAll(page).then((response) => response);
    }

    async function setPagination(page) {
        if (page < 1 || page > $ctrl.pagination.totalPages) {
            return 'error';
        }

        const roles = await getRoles(page);
        const pagination = roles.data.meta.pagination;
        $ctrl.pagination = paginationService.createPagination(pagination);

        $ctrl.data = roles.data.data;
        $scope.$apply();
    }
}

angular.module('portalflex.viewer', ['portalflex.pagination'])
    .component('viewer', {
        bindings: {
            data: '<'
        },
        templateUrl: 'app/components/viewer/viewer.component.html',
        controller: viewerController
    });
