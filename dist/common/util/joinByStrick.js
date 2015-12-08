define('melon-core/common/util/joinByStrick', [
    'require',
    'exports',
    'module'
], function (require, exports, module) {
    'use strict';
    function joinByStrike() {
        var result = [];
        for (var i = 0, len = arguments.length; i < len; ++i) {
            var arg = arguments[i];
            if (arg) {
                result.push(arg);
            }
        }
        return result.join('-');
    }
    module.exports = joinByStrike;
});