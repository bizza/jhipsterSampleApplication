(function() {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .factory('PasswordResetInit', PasswordResetInit);

    PasswordResetInit.$inject = ['$resource'];

    function PasswordResetInit($resource) {
        var service = $resource('../uaa/api/account/reset_password/init', {}, {});

        return service;
    }
})();
