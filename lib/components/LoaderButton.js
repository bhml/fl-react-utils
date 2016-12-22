'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

// eslint-disable-line

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var LoaderButton = (function (_React$Component) {
  _inherits(LoaderButton, _React$Component);

  function LoaderButton() {
    _classCallCheck(this, LoaderButton);

    _React$Component.apply(this, arguments);
  }

  LoaderButton.prototype.render = function render() {
    var _props = this.props;
    var loading = _props.loading;
    var children = _props.children;
    var renderLoader = _props.renderLoader;

    var btnProps = _objectWithoutProperties(_props, ['loading', 'children', 'renderLoader']);

    if (loading) btnProps.disabled = true;
    return _react2['default'].createElement(
      _reactBootstrap.Button,
      btnProps,
      loading && renderLoader(),
      children
    );
  };

  _createClass(LoaderButton, null, [{
    key: 'propTypes',
    value: {
      loading: _react.PropTypes.bool,
      renderLoader: _react.PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      renderLoader: function renderLoader() {
        return _react2['default'].createElement('i', { className: 'inline-loader' });
      }
    },
    enumerable: true
  }]);

  return LoaderButton;
})(_react2['default'].Component);

exports['default'] = LoaderButton;
module.exports = exports['default'];