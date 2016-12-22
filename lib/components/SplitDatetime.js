'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

// eslint-disable-line

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _reactQuill = require('react-quill');

var _reactQuill2 = _interopRequireDefault(_reactQuill);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactBootstrap = require('react-bootstrap');

var _S3Uploader = require('./S3Uploader');

var _S3Uploader2 = _interopRequireDefault(_S3Uploader);

var _validation = require('../validation');

function ensureArray(values) {
  if (_lodash2['default'].isArray(values)) return values;
  if (!values) return [];
  if (_lodash2['default'].isString(values)) return values.split(',');
  _warning2['default'](false, '[fl-react-utils] Input: react-select gave a strange value: ' + JSON.stringify(values));
  return [];
}

var Input = (function (_React$Component) {
  _inherits(Input, _React$Component);

  _createClass(Input, null, [{
    key: 'propTypes',
    value: {
      label: _react.PropTypes.string,
      helpTop: _react.PropTypes.bool,
      help: _react.PropTypes.string,
      defaultHelp: _react.PropTypes.string,
      type: _react.PropTypes.string,
      bsProps: _react.PropTypes.object,
      meta: _react.PropTypes.object,
      input: _react.PropTypes.object,
      inputProps: _react.PropTypes.object,
      options: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
      value: _react.PropTypes.any,
      includeEmpty: _react.PropTypes.bool,
      onBlur: _react.PropTypes.func,
      quillTheme: _react.PropTypes.string,
      quillFormat: _react.PropTypes.array
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      feedback: false,
      isValidDate: function isValidDate(current) {
        return current.isAfter(_moment2['default']().subtract(1, 'day'));
      },
      localeDateFormat: 'L',
      timeFormat: 'hh:mm a'
    },
    enumerable: true
  }]);

  function Input() {
    var _this = this;

    _classCallCheck(this, Input);

    _React$Component.call(this);

    this.getDateFormat = function () {
      return _this.props.dateFormat ? _this.props.dateFormat : _moment2['default'].localeData().longDateFormat(_this.props.localeDateFormat);
    };

    this.integrateTimeWithDate = function (date) {
      var currentTime = _moment2['default'](_this._time.state.inputValue, _this.props.timeFormat);
      var newDate = _moment2['default'](date).hours(currentTime.hours()).minutes(currentTime.minutes());
      return newDate;
    };

    this.integrateDateWithTime = function (time) {
      var currentDate = _moment2['default'](_this._date.state.inputValue, _this.getDateFormat());
      var newDate = currentDate.hours(time.hours()).minutes(time.minutes());
      return newDate;
    };

    this.onDateChange = function (newDate) {
      return _this.props.input.onChange(_this.integrateTimeWithDate(newDate));
    };

    this.onDateBlur = function (newDate) {
      _this.props.input.onBlur(_this.integrateTimeWithDate(newDate));
    };

    this.onTimeBlur = function (newDate) {
      _this.props.input.onBlur(_this.integrateDateWithTime(newDate));
    };

    this.state = {};
  }

  Input.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var label = _props.label;
    var meta = _props.meta;
    var helpTop = _props.helpTop;
    var type = _props.type;
    var bsProps = _props.bsProps;

    var inputProps = _lodash2['default'].extend({}, this.props.input, this.props.inputProps);

    var help = this.props.help;
    if (_lodash2['default'].isUndefined(help)) {
      help = _validation.validationHelp(meta) || this.props.defaultHelp;
    }

    var dateFormat = this.getDateFormat();

    var id = _inflection2['default'].dasherize((label || '').toLowerCase());
    var feedback = this.props.feedback;

    var dateInputProps = _extends({
      ref: function ref(c) {
        return _this2._date = c;
      },
      dateFormat: dateFormat,
      placeholder: dateFormat,
      timeFormat: false,
      className: 'date',
      closeOnSelect: true,
      onChange: this.onDateChange,
      onDateBlur: this.onDateBlur,
      isValidDate: this.props.isValidDate
    }, _lodash2['default'].omit(inputProps, 'onBlur', 'onChange', 'onFocus'));
    var timeInputProps = _extends({
      ref: function ref(c) {
        return _this2._time = c;
      },
      placeholder: '9:00 am',
      dateFormat: false,
      timeFormat: this.props.timeFormat,
      className: 'time',
      closeOnSelect: true,
      onBlur: this.onTimeBlur
    }, _lodash2['default'].omit(inputProps, 'onBlur', 'onFocus'));
    if (!this.props.meta.dirty && _lodash2['default'].isString(inputProps.value)) {
      dateInputProps.value = _moment2['default'](inputProps.value);
      timeInputProps.value = _moment2['default'](inputProps.value);
    }
    var dateControl = _react2['default'].createElement(_reactDatetime2['default'], dateInputProps);
    var timeControl = _react2['default'].createElement(_reactDatetime2['default'], timeInputProps);

    return _react2['default'].createElement(
      _reactBootstrap.FormGroup,
      { controlId: id, validationState: _validation.validationState(meta), bsClass: 'form-group split-datetime' },
      label && _react2['default'].createElement(
        _reactBootstrap.ControlLabel,
        null,
        label
      ),
      help && helpTop && _react2['default'].createElement(
        _reactBootstrap.HelpBlock,
        null,
        help
      ),
      dateControl,
      timeControl,
      help && !helpTop && _react2['default'].createElement(
        _reactBootstrap.HelpBlock,
        null,
        help
      )
    );
  };

  return Input;
})(_react2['default'].Component);

exports['default'] = Input;
module.exports = exports['default'];