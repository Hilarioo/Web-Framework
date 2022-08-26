import { Model } from './Models';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Events } from './Events';
import { Collection } from './Collections';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Events(),
      new ApiSync<UserProps>(rootUrl),
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json),
    );
  }
}
