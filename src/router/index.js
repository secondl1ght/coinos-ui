import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import About from '../components/About';
import Assets from '../components/Assets';
import Login from '../components/Login';
import Payments from '../components/Payments';
import Send from '../components/Send';
import Receive from '../components/Receive';
import Buy from '../components/Buy';
import Market from '../components/Market';
import Contacts from '../components/Contacts';
import Settings from '../components/Settings';
import Text from '../components/Text';

const routes = [
  { path: '/', component: Login, props: { logout: false } },
  { path: '/home', component: Home },
  { path: '/login', component: Login, props: { logout: false } },
  { path: '/payments', component: Payments },
  { name: 'send', path: '/send', component: Send, props: true },
  { path: '/receive', component: Receive },
  { path: '/receive', component: Receive },
  { path: '/buy', component: Buy },
  { path: '/market', component: Market },
  { path: '/contacts', component: Contacts },
  { path: '/about', component: About },
  { path: '/assets', component: Assets },
  { path: '/settings', component: Settings },
  { path: '/text', component: Text },
  { path: '/logout', component: Login, props: { logout: true } },
  {
    path: '/verifyEmail/:username/:token',
    component: Home,
    props: route => ({
      username: route.params.username,
      token: route.params.token,
    }),
  },
  {
    path: '/verifyPhone/:username/:token',
    component: Home,
    props: route => ({
      username: route.params.username,
      token: route.params.token,
      phone: true,
    }),
  },
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior: function(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
