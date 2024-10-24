<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PollResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'options' => PollOptionResource::collection($this->options),
        ];
    }
}
