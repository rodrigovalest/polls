<?php

namespace App\Exceptions;

use Throwable;
use Exception;

class PollOptionsLimitException extends Exception
{
    public function __construct(
        string $message = 'A poll must have a minimum of 3 options.',
        int $code = 422,
        ?Throwable $previous = null
    )
    {
        parent::__construct($message, $code, $previous);
    }
}
