'use strict';

exports.__esModule = true;
exports.validationState = validationState;
exports.validationStyle = validationStyle;
exports.validationHelp = validationHelp;
exports.validDate = validDate;
exports.allFieldsRequiredFn = allFieldsRequiredFn;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

// Validation highlighting for react-bootstrap Input components

function validationState(field) {
  if (!field || !field.touched || field.active) return null;
  if (field.error) return 'error';
  if (field.dirty) return 'success';
}

// Validation highlighting for other input components

function validationStyle(field) {
  if (!field || !field.touched || field.active) return null;
  if (field.error) return 'has-error';
  if (field.dirty) return 'has-success';
}

// Validation help text for react-bootstrap Input components

function validationHelp(field) {
  if (!field) return null;
  return field.touched && !field.active && field.error || null;
}

function validDate(current) {
  var yesterday = _moment2['default']().subtract(1, 'day');
  return current.isAfter(yesterday);
}

function allFieldsRequiredFn(fieldNames) {
  return function (data) {
    var errors = {};
    fieldNames.forEach(function (fieldName) {
      if (!data[fieldName]) errors[fieldName] = 'This field is required';
    });
    return errors;
  };
}