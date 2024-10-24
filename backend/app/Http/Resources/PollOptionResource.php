<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PollOptionResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'description' => $this->description,
            'vote_count' => $this->vote_count,
        ];
    }
}
