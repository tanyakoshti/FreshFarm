import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler()) || [];
    if (!requiredRoles.length) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user as { roles?: string[] } | undefined;
    const userRoles = user?.roles || [];

    return requiredRoles.some((role) => userRoles.includes(role));
  }
}