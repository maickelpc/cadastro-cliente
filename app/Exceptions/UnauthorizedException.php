<?php

namespace App\Exceptions;

use Symfony\Component\HttpKernel\Exception\HttpException;

class UnauthorizedException extends HttpException
{
    // public static function forPermissions(array $permissions): self
    // {
    //     $message = 'Seu login não possui permissção para acessar esta área.';

    //     if (config('permission.display_permission_in_exception')) {
    //         $permStr = implode(', ', $permissions);
    //         $message = 'Seu login não possui permissção para acessar esta área. As permissões necessárias são '.$permStr;
    //     }

    //     $exception = new static(403, $message, null, []);
    //     $exception->requiredPermissions = $permissions;

    //     return $exception;
    // }

    public static function forLicense(): self
    {
        $message = 'Sua Licença está expirada, acesse o menu Configurações / Financeiro / Assinatura do sistema para regularizar e ter acesso a todas as funções!';

        $exception = new static(403, $message, null, []);

        return $exception;
    }

    // public static function notLoggedIn(): self
    // {
    //     return new static(403, 'Efetue login para continuar.', null, []);
    // }

    // public function getRequiredRoles(): array
    // {
    //     return $this->requiredRoles;
    // }

    // public function getRequiredPermissions(): array
    // {
    //     return $this->requiredPermissions;
    // }
}
