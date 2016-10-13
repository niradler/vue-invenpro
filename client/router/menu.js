// show: meta.label -> name
// name: component name
// meta.label: display label

// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => () => System.import(`views/${name}${index ? '/index' : ''}.vue`)

export default [{
    name: 'Dashboard',
    path: '/dashboard',
    meta: {
      icon: 'fa-tachometer'
  },
    component: lazyLoading('dashboard', true)
  }, {
    name: 'Create',
    path: '/create2',
    meta: {
      icon: 'fa-tachometer'
    },
    component: lazyLoading('invenpro/Create')
  }, {
    name: 'Manage',
    path: '/manage',
    meta: {
      icon: 'fa-tachometer'
    },
    component: lazyLoading('invenpro/Manage')
  }, {
    name: 'Search',
    path: '/search',
    meta: {
      icon: 'fa-tachometer'
    },
    component: lazyLoading('invenpro/Search')
  }, {
    name: 'Account',
    meta: {
      icon: 'fa-table',
      expanded: false
    },
    children: [{
      name: 'Profile',
      path: '/Profile',
      meta: {
        label: 'My Profile'
      },
      component: lazyLoading('invenpro/Profile')
    }, {
      name: 'Test',
      path: '/form',
      component: lazyLoading('ui/Form')
    }]
  }
]
