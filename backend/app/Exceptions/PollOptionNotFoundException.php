<?php

namespace App\Exceptions;

use Throwable;
use Exception;

class PollOptionNotFoundException extends Exception
{
    public function __construct(
        string $message = 'Poll option was not found.',
        int $code = 404,
        ?Throwable $previous = null
    )
    {
        parent::__construct($message, $code, $previous);
    }
}
