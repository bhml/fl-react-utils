# Boilerplate and helper functions for react/redux that can be shared amongst FounderLab apps

### Components

#####createServerRenderer:
Helper method that takes care of a bunch of bs boilerplate for rendering react components server side. 
Usage: 

```javascript
app.get('*', createServerRenderer({
  createStore, 
  getRoutes,
  scripts: _.map(_.pick(require('../../webpack-assets.json'), ['shared.js', 'app']), entry => entry.js),
  omit: 'admin',
  always_fetch: require('../../shared/modules/app/containers/App'),
  config: _.pick(config, config.client_config_keys),
}))
```

Changes: 

- 0.3.5: Pagination links are real links
- 0.3.4: added createPaginationSelector to auto create a `reselect` selector
- 0.3.3: createServerRenderer takes an always_fetch parameter for components that should awlays have their fetchData method called
- 0.3.2: createGroupByReducer added
- 0.3.0: Naming scheme updated; pagination added
- 0.2.0: dispatchNeeds changed to fetchComponentData
- 0.1.0: Yoinked things from fl-base-webapp
