(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('../uaa/api/register', {}, {});
    }
})();
