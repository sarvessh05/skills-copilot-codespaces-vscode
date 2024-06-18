function skillsMember() {
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controllerAS: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}