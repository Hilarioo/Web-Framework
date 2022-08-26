import { User } from './models/User';
import { UserForms } from './views/UserForms';

const user = User.buildUser({ name: 'Alice', age: 42 });
const root = document.getElementById('root');

if (root) {
  const userForms = new UserForms(root, user);
  userForms.render();
} else {
  throw new Error('Root element not found!');
}
