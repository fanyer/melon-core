define('melon-core/validator/ValidityState', [
    'require',
    'exports',
    'module'
], function (require, exports, module) {
    'use strict';
    function ValidityState(_ref) {
        var isValid = _ref.isValid;
        var message = _ref.message;
        this.isValid = isValid;
        this.message = message || '';
    }
    module.exports = ValidityState;
});