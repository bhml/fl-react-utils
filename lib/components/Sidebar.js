'use strict';

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _react = require('react');

var _redboxReact = require('redbox-react');

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

// eslint-disable-line

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactSidebar = require('react-sidebar');

var _reactSidebar2 = _interopRequireDefault(_reactSidebar);

var _components = {
  _$FLSidebar: {
    displayName: 'FLSidebar'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/components/Sidebar.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var FLSidebar = (function (_Component) {
  _inherits(FLSidebar, _Component);

  _createClass(FLSidebar, null, [{
    key: 'propTypes',
    value: {
      change_key: _react.PropTypes.string,
      disable_toggle: _react.PropTypes.bool,
      react_sidebar_props: _react.PropTypes.object.isRequired,
      sidebar: _react.PropTypes.node.isRequired,
      children: _react.PropTypes.node.isRequired
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      react_sidebar_props: {
        sidebarClassName: 'sidebar'
      }
    },
    enumerable: true
  }]);

  function FLSidebar() {
    var _this = this;

    _classCallCheck(this, _FLSidebar);

    _Component.call(this);

    this.onSetOpen = function (open) {
      _this.setState({ open: open });
    };

    this.handleMediaQueryChanged = function () {
      _this.setState({ docked: _this.state.mql && _this.state.mql.matches });
    };

    this.handleSidebarToggle = function (ev) {
      _this.setState({ open: !_this.state.open });
      if (ev) ev.preventDefault();
    };

    this.state = { docked: false, open: false };
  }

  FLSidebar.prototype.componentWillMount = function componentWillMount() {
    if (typeof window === 'undefined') return;
    var mql = window.matchMedia('(min-width: 768px)');
    mql.addListener(this.handleMediaQueryChanged);
    this.setState({ mql: mql, docked: mql.matches });
  };

  FLSidebar.prototype.componentWillReceiveProps = function componentWillReceiveProps(new_props) {
    if (new_props.change_key !== this.props.change_key) this.setState({ open: false });
  };

  FLSidebar.prototype.componentWillUnmount = function componentWillUnmount() {
    this.state.mql && this.state.mql.removeListener(this.handleMediaQueryChanged);
  };

  FLSidebar.prototype.render = function render() {
    var sidebar_props = _lodash2['default'].extend(this.props.react_sidebar_props, {
      sidebar: this.props.sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    });

    var disable_sidebar_toggle = this.props.disable_toggle || this.state.docked;
    console.log(this.props.disable_toggle, this.state.docked);
    return _react2['default'].createElement(
      _reactSidebar2['default'],
      sidebar_props,
      !disable_sidebar_toggle && _react2['default'].createElement(
        'div',
        { className: 'sidebar-toggle' },
        _react2['default'].createElement(
          'a',
          { onClick: this.handleSidebarToggle },
          _react2['default'].createElement(_reactBootstrap.Glyphicon, { glyph: 'menu-hamburger' })
        )
      ),
      this.props.children
    );
  };

  var _FLSidebar = FLSidebar;
  FLSidebar = _wrapComponent('_$FLSidebar')(FLSidebar) || FLSidebar;
  return FLSidebar;
})(_react.Component);

exports['default'] = FLSidebar;
module.exports = exports['default'];