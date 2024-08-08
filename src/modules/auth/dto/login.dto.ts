import { User } from 'src/modules/user/entities/user.entity';

/**
 *
 */
export class LoginDto extends User {}

/**
 *
 */
export class AuthTokenPayload {
  id: number;
  email: string;
}
