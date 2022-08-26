import { User } from './models/User';
import { UserForms } from './views/UserForms';

const user = User.buildUser({ name: 'Alice', age: 42 });
const userForms = new UserForms(document.getElementById('root'), user);

userForms.render();
