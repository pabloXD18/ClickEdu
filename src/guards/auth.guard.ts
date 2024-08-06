/*
https://docs.nestjs.com/guards#guards
*/

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtSecret } from 'src/common/constans/jwt-secret';

/**
 *
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  /**
   * Metodo para autenticar el token
   * @param { ExecutionContext } context datos de la informacion de la solicitud
   * @returns {boolean} Marca si la solicutus esat autorizada o no
   */
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
    if (!token) throw new UnauthorizedException();
    try {
      const payload = this.jwtService.verify(token, {
        secret: JwtSecret.secret,
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  /**
   * Extrae el token de autenticacion de una solicitud
   * @param { Request } request Informacion de la solicitud
   * @returns {string | undefined} Devuelbe si hay un token o esta indefinido
   */
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type == 'Bearer' ? token : undefined;
  }
}
