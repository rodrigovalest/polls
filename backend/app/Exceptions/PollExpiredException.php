<?php

namespace App\Exceptions;

use Throwable;
use Exception;

class PollExpiredException extends Exception
{
    public function __construct(
        string $message = 'The poll is not active. Voting is not allowed.',
        int $code = 403,
        ?Throwable $previous = null
    )
    {
        parent::__construct($message, $code, $previous);
    }
}
