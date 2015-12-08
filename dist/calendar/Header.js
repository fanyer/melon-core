define('melon-core/calendar/Header', [
    'require',
    'exports',
    'module',
    '../babelHelpers',
    'react',
    '../common/util/date',
    'melon-classname'
], function (require, exports, module) {
    var babelHelpers = require('../babelHelpers');
    'use strict';
    var React = require('react');
    var DateTime = require('../common/util/date');
    var cx = require('melon-classname').create('CalendarHeader');
    var PropTypes = React.PropTypes;
    function CalendarHeader(props) {
        var date = props.date;
        var rest = babelHelpers.objectWithoutProperties(props, ['date']);
        var year = date.getFullYear();
        var week = DateTime.getDayOfWeek(date);
        var month = DateTime.getShortMonth(date);
        var day = date.getDate();
        var fullDate = month + day + '\u65E5';
        return React.createElement('div', babelHelpers.extends({}, rest, { className: cx(props).build() }), React.createElement('p', { className: cx().part('year').build() }, year), React.createElement('p', { className: cx().part('week').build() }, week), React.createElement('p', { className: cx().part('date').build() }, fullDate));
    }
    CalendarHeader.displayName = 'CalendarHeader';
    CalendarHeader.propTypes = { date: PropTypes.object.isRequired };
    module.exports = CalendarHeader;
});