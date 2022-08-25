import { User } from './models/User';

const user = new User({ name: 'John', age: 21 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User changed');
});

user.set({ name: 'New John Doe' });
