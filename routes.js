import About from './src/pages/About';
import Contact from './src/pages/Contact';
import LoginPage from './src/pages/LoginPage';
import RecipesPage from './src/pages/RecipesPage';

export const routesConfig = [
  { path: '/', component: RecipesPage }, // Homepage route, path should be "/"
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/login', component: LoginPage },
];
