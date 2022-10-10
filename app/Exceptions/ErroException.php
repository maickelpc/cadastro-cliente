<?php

namespace App\Exceptions;

use Symfony\Component\HttpKernel\Exception\HttpException;

class ErroException extends HttpException
{
    public static function erro($mensagem): self
    {
        return new static(400, ['message' => $mensagem ], null, []);
    }
}
