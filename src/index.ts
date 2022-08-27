import { UserList } from './views/UserList';
import { Collection } from './models/Collections';
import { User, UserProps } from './models/User';
import { UserShow } from './views/UserShow';

const user = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  },
);

user.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, user).render();
  }
});

user.fetch();
