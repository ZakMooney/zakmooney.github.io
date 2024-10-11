import Layout from '../components/ui/layout';
import Welcome from '../screens/welcome';

const Routes = [
  {
    component: Layout,
    routes: [
      {
        path: '*',
        component: Welcome,
      },
    ],
  },
];

export default Routes;
