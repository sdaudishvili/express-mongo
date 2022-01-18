import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';

import LoginView from './views/Auth/Login';
import Projects from './views/Projects';
import CreateProject from './views/CreateProject';

const routes = [
  {
    layout: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: LoginView
      }
    ]
  },

  {
    layout: DashboardLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Projects
      }
    ]
  },
  {
    layout: DashboardLayout,
    routes: [
      {
        path: '/create',
        exact: true,
        component: CreateProject
      }
    ]
  },
  {
    layout: DashboardLayout,
    routes: [
      {
        path: '/update/:id',
        exact: true,
        component: CreateProject
      }
    ]
  }
];

export default routes;
